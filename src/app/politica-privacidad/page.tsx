"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <p className="mb-4 text-lg">
                <strong>Última actualización:</strong> Diciembre 2025
              </p>
              <p className="mb-4">
                En Fibra Mendoza, nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información personal cuando utiliza nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                1. Información que Recopilamos
              </h2>
              <h3 className="text-xl font-semibold text-[#0f9fee] mb-3 mt-6">
                1.1 Información que nos proporciona
              </h3>
              <p className="mb-4">
                Recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Número de teléfono:</strong> Cuando completa nuestros formularios de contacto, recopilamos su número de teléfono para poder contactarlo.</li>
                <li><strong>Información de comunicación:</strong> Cualquier información que nos proporcione cuando se comunica con nosotros a través de WhatsApp o por otros medios.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                2. Cómo Utilizamos su Información
              </h2>
              <p className="mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Contactarlo:</strong> Para responder a sus consultas y contactarlo a través de WhatsApp según su solicitud.</li>
                <li><strong>Mejorar nuestros servicios:</strong> Para analizar cómo se utiliza nuestro sitio web y mejorar la experiencia del usuario.</li>
                <li><strong>Comunicaciones de marketing:</strong> Para enviarle información sobre nuestros servicios y ofertas, solo si ha dado su consentimiento.</li>
                <li><strong>Cumplimiento legal:</strong> Para cumplir con las obligaciones legales y proteger nuestros derechos legales.</li>
                <li><strong>Seguridad:</strong> Para proteger nuestro sitio web y prevenir fraudes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                3. Compartir su Información
              </h2>
              <p className="mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestro sitio web y realizar nuestras operaciones comerciales (por ejemplo, servicios de hosting, análisis).</li>
                <li><strong>Cumplimiento legal:</strong> Podemos divulgar información si es requerido por ley o para proteger nuestros derechos legales.</li>
                <li><strong>Con su consentimiento:</strong> Podemos compartir información con su consentimiento explícito.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                4. Seguridad de sus Datos
              </h2>
              <p className="mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                5. Retención de Datos
              </h2>
              <p className="mb-4">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                6. Sus Derechos
              </h2>
              <p className="mb-4">
                De acuerdo con la Ley de Protección de Datos Personales de Argentina (Ley 25.326), usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Acceso:</strong> Solicitar acceso a sus datos personales que tenemos en nuestro poder.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos personales.</li>
                <li><strong>Oposición:</strong> Oponerse al procesamiento de sus datos personales.</li>
                <li><strong>Portabilidad:</strong> Solicitar la transferencia de sus datos a otro proveedor de servicios.</li>
              </ul>
              <p className="mb-4">
                Para ejercer estos derechos, puede contactarnos a través de WhatsApp o completando el formulario de contacto en nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                7. Cookies y Tecnologías Similares
              </h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Para obtener más información sobre cómo utilizamos las cookies, consulte nuestra sección de Cookies en los <Link href="/terminos-legales" className="text-[#0f9fee] underline">Términos Legales</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                8. Enlaces a Terceros
              </h2>
              <p className="mb-4">
                Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios web. Le recomendamos que lea las políticas de privacidad de cada sitio web que visite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                9. Menores de Edad
              </h2>
              <p className="mb-4">
                Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor sin el consentimiento de los padres, tomaremos medidas para eliminar esa información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                10. Cambios a esta Política
              </h2>
              <p className="mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos cualquier cambio publicando la nueva política en esta página y actualizando la fecha de "Última actualización".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                11. Contacto
              </h2>
              <p className="mb-4">
                Si tiene preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos sus datos personales, puede contactarnos:
              </p>
              <ul className="list-none pl-0 mb-4 space-y-2">
                <li><strong>WhatsApp:</strong> <a href="https://wa.me/5491125442329" className="text-[#0f9fee] underline" target="_blank" rel="noopener noreferrer">+54 9 11 2544-2329</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#0d2b61] mb-4">
                12. Autoridad de Control
              </h2>
              <p className="mb-4">
                Si considera que el tratamiento de sus datos personales viola la ley, tiene derecho a presentar una queja ante la Dirección Nacional de Protección de Datos Personales de Argentina.
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

