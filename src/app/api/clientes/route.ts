import { NextRequest, NextResponse } from 'next/server';
import pool from '@/src/lib/db';

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY no está configurado');
    // En desarrollo, permitir sin validación si no hay clave
    return process.env.NODE_ENV === 'development';
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true && data.score >= 0.5; // reCAPTCHA v3 retorna un score
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { number, observaciones, recaptchaToken } = body;

    // Validar que el número esté presente
    if (!number || typeof number !== 'string' || number.trim() === '') {
      return NextResponse.json(
        { error: 'El número de teléfono es requerido' },
        { status: 400 }
      );
    }

    // Validar reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'Validación de seguridad requerida' },
        { status: 400 }
      );
    }

    const isValidRecaptcha = await verifyRecaptcha(recaptchaToken);
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'Validación de seguridad fallida. Por favor intenta nuevamente.' },
        { status: 403 }
      );
    }

    // Insertar en la base de datos
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO base_numbers (number, fecha_ingreso, observaciones) VALUES (?, NOW(), ?)',
        [number.trim(), observaciones || null]
      );

      return NextResponse.json(
        { 
          success: true, 
          message: 'Número guardado correctamente',
          id: (result as any).insertId 
        },
        { status: 201 }
      );
    } finally {
      connection.release();
    }
  } catch (error: any) {
    console.error('Error al guardar el número:', error);
    return NextResponse.json(
      { 
        error: 'Error al guardar el número',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

