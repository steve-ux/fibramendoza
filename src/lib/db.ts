import mysql from 'mysql2/promise';

// Función para limpiar el host (remover http://, https://, puerto, etc.)
function cleanHost(host: string | undefined): string {
  if (!host) return 'localhost';
  // Remover protocolos, puerto y barras al final
  return host
    .replace(/^https?:\/\//, '') // Remover http:// o https://
    .replace(/:\d+$/, '') // Remover puerto al final (ej: :3307)
    .replace(/\/$/, '') // Remover barra al final
    .trim();
}

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
  host: cleanHost(process.env.DB_HOST),
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'clientes_movi',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

