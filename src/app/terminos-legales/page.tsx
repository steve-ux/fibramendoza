"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";

export default function TerminosLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#f5f5f5] border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-8">
              <Image
                src="/logo fibra Mendoza.png"
                alt="Logo Fibra Mendoza"
                width={50}
                height={50}
                className="h-10 w-auto brightness-0"
              />
              <div className="hidden md:flex gap-8 text-base">
                <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Inicio
                </a>
              </div>
            </Link>
            <Button 
              className="bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full px-8 font-semibold shadow-lg" 
              onClick={() => {
                window.open("https://wa.me/5491125442329?text=Hola,%20me%20interesa%20saber%20más%20sobre%20los%20planes", "_blank");
              }}
            >
              Quiero contratar
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b61] mb-8">
            Términos Legales
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                1. Información General
              </h2>
              <p className="mb-4">
                Este sitio web es operado por Sol Serrano, quien brinda asesoría comercial sobre planes de una empresa de telefonía e internet líder en Argentina.
              </p>
              <p className="mb-4">
                Este sitio es independiente y no pertenece a Movistar ni a Telefónica oficialmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                2. Uso del Sitio Web
              </h2>
              <p className="mb-4">
                Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>
              <p className="mb-4">
                El uso de este sitio web es bajo su propio riesgo. No garantizamos que el sitio web esté libre de errores o interrupciones.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                3. Propiedad Intelectual
              </h2>
              <p className="mb-4">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes y software, es propiedad de Fibra Mendoza o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                4. Limitación de Responsabilidad
              </h2>
              <p className="mb-4">
                Fibra Mendoza no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar este sitio web.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                5. Información sobre Cookies
              </h2>
              <h3 className="text-xl font-semibold text-[#0f9fee] mb-3 mt-6">
                5.1 ¿Qué son las cookies?
              </h3>
              <p className="mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, por lo que no tiene que volver a configurarlas cada vez que regrese al sitio o navegue de una página a otra.
              </p>

              <h3 className="text-xl font-semibold text-[#0f9fee] mb-3 mt-6">
                5.2 ¿Cómo utilizamos las cookies?
              </h3>
              <p className="mb-4">
                Utilizamos cookies para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Analizar cómo los visitantes utilizan nuestro sitio</li>
                <li>Personalizar su experiencia de navegación</li>
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Proporcionar funcionalidades de seguridad</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#0f9fee] mb-3 mt-6">
                5.3 Tipos de cookies que utilizamos
              </h3>
              <p className="mb-4">
                <strong>Cookies esenciales:</strong> Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas.
              </p>
              <p className="mb-4">
                <strong>Cookies de rendimiento:</strong> Estas cookies nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio.
              </p>
              <p className="mb-4">
                <strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas.
              </p>

              <h3 className="text-xl font-semibold text-[#0f9fee] mb-3 mt-6">
                5.4 Gestión de cookies
              </h3>
              <p className="mb-4">
                Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
              <p className="mb-4">
                Para obtener más información sobre cómo gestionar las cookies en diferentes navegadores, puede visitar:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                <li>Firefox: Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
                <li>Safari: Preferencias → Privacidad → Cookies</li>
                <li>Edge: Configuración → Privacidad, búsqueda y servicios → Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                6. Modificaciones
              </h2>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estos términos legales en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                7. Contacto
              </h2>
              <p className="mb-4">
                Si tiene alguna pregunta sobre estos términos legales, puede contactarnos a través de WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                8. Ley Aplicable
              </h2>
              <p className="mb-4">
                Estos términos legales se rigen por las leyes de la República Argentina. Cualquier disputa relacionada con estos términos será resuelta en los tribunales competentes de Argentina.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link 
              href="/" 
              className="inline-block bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full px-8 py-3 font-semibold transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo fibra Mendoza.png"
                alt="Logo Fibra Mendoza"
                width={40}
                height={40}
                className="brightness-0"
              />
              <span className="font-bold text-gray-900">
                Viví <span className="text-[#0d2b61]">Fibra</span>, ¡con todo!
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Fibra Mendoza © 2025 Todos los derechos reservados
            </div>
            <Link href="/terminos-legales" className="text-sm text-[#0d2b61] font-semibold hover:underline">
              Términos legales
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

