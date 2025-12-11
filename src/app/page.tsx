"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Card } from "@/src/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/src/components/ui/tabs";
import { Checkbox } from "@/src/components/ui/checkbox";
import Image from "next/image";

export default function Home() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [selectedPlanType, setSelectedPlanType] = useState("internet");
  
  // Estados para el formulario del hero
  const [phoneNumber, setPhoneNumber] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Estados para el formulario del footer
  const [phoneNumberFooter, setPhoneNumberFooter] = useState("");
  const [privacyAcceptedFooter, setPrivacyAcceptedFooter] = useState(false);
  const [isSubmittingFooter, setIsSubmittingFooter] = useState(false);
  const [submitMessageFooter, setSubmitMessageFooter] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Función compartida para enviar el formulario
  const handleSubmit = async (
    number: string,
    privacy: boolean,
    setSubmitting: (value: boolean) => void,
    setMessage: (value: { type: 'success' | 'error', text: string } | null) => void,
    setNumber: (value: string) => void,
    setPrivacy: (value: boolean) => void
  ) => {
    if (!privacy) {
      setMessage({ type: 'error', text: 'Debes aceptar la política de privacidad' });
      return;
    }

    if (!number.trim()) {
      setMessage({ type: 'error', text: 'Por favor ingresa tu número de teléfono' });
      return;
    }

    setSubmitting(true);
    setMessage(null);

    try {
      if (!executeRecaptcha) {
        setMessage({ type: 'error', text: 'reCAPTCHA no está disponible. Por favor recarga la página.' });
        setSubmitting(false);
        return;
      }

      const recaptchaToken = await executeRecaptcha('submit_form');

      const response = await fetch('/api/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: number.trim(),
          observaciones: null,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '¡Gracias! Te contactaremos pronto.' });
        setNumber("");
        setPrivacy(false);
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al enviar el formulario' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error de conexión. Por favor intenta nuevamente.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Image
                src="https://ext.same-assets.com/1019913790/2460080818.png"
                alt="Movistar"
                width={50}
                height={50}
                className="h-10 w-auto brightness-0"
              />
              <div className="hidden md:flex gap-8 text-base">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Móvil
                </a>
              </div>
            </div>
            <Button className="bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full px-8 font-semibold shadow-lg">
              Quiero contratar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-[#0d2b61] text-white py-16 px-4 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(15, 159, 238, 0.1) 0%, transparent 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-6">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/1019913790/2460080818.png"
                alt="Promo devices"
                width={100}
                height={100}
                className="absolute -top-4 -left-4"
              />
              <div className="bg-gradient-to-br from-[#1a3d6f] to-[#0d2b61] border-2 border-[#0f9fee] rounded-3xl p-8 relative">
                <div className="text-[#0f9fee] text-2xl font-bold mb-2">PLAN 4G</div>
                <div className="text-5xl font-bold mb-4">$11.000</div>
                <div className="bg-gradient-to-r from-[#de3b7f] to-[#c92b6f] text-white px-4 py-2 rounded-lg inline-block text-lg font-bold">
                  +4 GB GRATIS X 6 MESES.
                </div>
              </div>
              <Image
                src="https://ext.same-assets.com/1019913790/2460080818.png"
                alt="Promo devices"
                width={80}
                height={80}
                className="absolute -bottom-4 -right-4"
              />
            </div>
            <div className="text-sm text-gray-300">
              PRECIOS SIN IMPUESTOS NACIONALES: $9.091. Válido en Arg. del 01 al 31/12/2025.
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-gray-700">¡Contratá </span>
              <span className="text-[#0d2b61]">Fibra</span>
              <span className="text-gray-700">!</span>
            </h2>
            <p className="text-gray-600 mb-6">
              ¡Dejá tu número y <strong>te contactamos por WhatsApp!</strong>
            </p>
            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(
                  phoneNumber,
                  privacyAccepted,
                  setIsSubmitting,
                  setSubmitMessage,
                  setPhoneNumber,
                  setPrivacyAccepted
                );
              }}
            >
              <Input
                type="tel"
                placeholder="Ingresa tu número*"
                className="rounded-full border-gray-300 h-14 text-base"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                disabled={isSubmitting}
              />
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="privacy" 
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                  disabled={isSubmitting}
                />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  He leído y acepto la{" "}
                  <a href="#" className="text-[#0f9fee] underline">
                    política de privacidad
                  </a>
                </label>
              </div>
              {submitMessage && (
                <div className={`text-sm text-center py-2 px-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              <Button 
                type="submit"
                className="w-full bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full py-7 text-lg font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Llamame'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-white">
            <h3 className="text-[#0f9fee] text-xl text-center font-semibold mb-2">NAVEGÁ Y COMUNICATE</h3>            
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Ofertas exclusivas para vos
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedPlanType("internet")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedPlanType === "internet"
                  ? "text-[#0d2b61] border-b-4 border-[#0f9fee]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Internet hogar
            </button>
            <button
              onClick={() => setSelectedPlanType("movil")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                selectedPlanType === "movil"
                  ? "text-[#0d2b61] border-b-4 border-[#0f9fee]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Línea móvil
            </button>
          </div>

          {selectedPlanType === "internet" && (
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-4 border-[#de3b7f] rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-[#de3b7f] to-[#c92b6f] text-white text-center py-3 font-bold">
                  ¡GIGA al precio de 300 megas!
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#0d2b61] mb-4">Plan GIGA</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$19.900 x mes</div>
                  <div className="text-gray-500 line-through mb-1">Antes $67.100</div>
                  <div className="text-sm text-gray-600 mb-6">Precio sin Impuestos $16.446</div>
                  <div className="space-y-3 mb-6">
                    <div className="bg-[#0f9fee] text-white rounded-lg py-2 px-4 font-semibold">
                      1 mes de fibra gratis
                    </div>
                    <div className="bg-gradient-to-r from-[#de3b7f] to-[#c92b6f] text-white rounded-lg py-2 px-4 font-semibold">
                      2 meses de TV GRATIS
                    </div>
                  </div>
                  <Button className="w-full bg-[#0d2b61] hover:bg-[#0a2149] text-white rounded-full py-6 text-lg font-semibold">
                    Lo quiero
                  </Button>
                </div>
              </Card>

              <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-[#0d2b61] text-white text-center py-3 font-bold">
                  Promoción exclusiva online
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-[#0d2b61] mb-4">300 megas</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$19.900 x mes</div>
                  <div className="text-gray-500 line-through mb-1">Antes $59.700</div>
                  <div className="text-sm text-gray-600 mb-6">Precio sin Impuestos $16.446</div>
                  <div className="space-y-3 mb-6">
                    <div className="bg-[#0f9fee] text-white rounded-lg py-2 px-4 font-semibold">
                      1 mes de fibra gratis
                    </div>
                  </div>
                  <Button className="w-full bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full py-6 text-lg font-semibold">
                    Contratar online
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {selectedPlanType === "movil" && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-[#0d2b61] mb-4">Plan Móvil</h3>
                  <div className="text-3xl font-bold text-[#0f9fee] mb-2">4 GB</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$11.000 x mes</div>
                  <div className="text-gray-500 line-through mb-1">Antes $36.350</div>
                  <div className="text-sm text-[#de3b7f] font-semibold mb-4">
                    $25.350 de bonificación x 6 meses
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    Precio sin impuestos nacionales $9.091
                  </div>
                  <Button className="w-full bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full py-6 text-lg font-semibold">
                    Lo quiero
                  </Button>
                </div>
              </Card>

              <Card className="border-4 border-[#0f9fee] rounded-2xl overflow-hidden shadow-lg relative">
                <div className="absolute top-4 right-4 bg-[#de3b7f] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Plan recomendado
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-[#0d2b61] mb-4">Plan Móvil</h3>
                  <div className="text-3xl font-bold text-[#0f9fee] mb-2">8 GB</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$12.850 x mes</div>
                  <div className="text-gray-500 line-through mb-1">Antes $50.550</div>
                  <div className="text-sm text-[#de3b7f] font-semibold mb-2">
                    $37.700 de bonificación x 6 meses
                  </div>
                  <div className="text-sm text-gray-700 mb-4">4 GB por mes para roaming en América</div>
                  <div className="text-sm text-gray-600 mb-6">
                    Precio sin impuestos nacionales $10.620
                  </div>
                  <Button className="w-full bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full py-6 text-lg font-semibold">
                    Lo quiero
                  </Button>
                </div>
              </Card>

              <Card className="border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-[#0d2b61] mb-4">Plan Móvil</h3>
                  <div className="text-3xl font-bold text-[#0f9fee] mb-2">15 GB</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$23.450 x mes</div>
                  <div className="text-gray-500 line-through mb-1">Antes $76.700</div>
                  <div className="text-sm text-[#de3b7f] font-semibold mb-2">
                    $53.250 de bonificación x 6 meses
                  </div>
                  <div className="text-sm text-gray-700 mb-4">5 GB por mes para roaming en el Mundo</div>
                  <div className="text-sm text-gray-600 mb-6">
                    Precio sin impuestos nacionales $19.380
                  </div>
                  <Button className="w-full bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full py-6 text-lg font-semibold">
                    Lo quiero
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Más nos elegís, más beneficios tenés
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 rounded-2xl p-8 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#0f9fee]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Viví Fibra con Todo</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Y disfrutá los beneficios de tener más de un servicio con nosotros
              </p>
              <div className="border-2 border-[#0f9fee] rounded-xl p-6 mb-6">
                <div className="text-[#0f9fee] text-sm font-semibold mb-4">Todos los meses</div>
                <ul className="space-y-3 text-gray-900">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f9fee] font-bold">•</span>
                    <span>
                      Hasta <strong>$4.000 de ahorro</strong> en tu factura de internet
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0f9fee] font-bold">•</span>
                    <span>
                      <strong>+ 4 GB extra</strong> en tus líneas móviles
                    </span>
                  </li>
                </ul>
              </div>
              <Button className="w-full border-2 border-[#0d2b61] text-[#0d2b61] bg-white hover:bg-gray-50 rounded-full py-6 text-lg font-semibold">
                Ver planes
              </Button>
            </Card>

            <Card className="border-2 border-gray-200 rounded-2xl p-8 bg-white shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#0f9fee]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Trae tu número a nuestra marca</h3>
              </div>
              <p className="text-gray-700 mb-6">¡Y sumá gigas todos los meses!</p>
              <div className="border-2 border-[#0f9fee] rounded-xl p-6 mb-6 text-center">
                <div className="text-[#0f9fee] text-sm font-semibold mb-4">Los planes incluyen</div>
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-12 h-12 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-gray-900 font-semibold">Whatsapp gratis</span>
                </div>
              </div>
              <Button className="w-full border-2 border-[#0d2b61] text-[#0d2b61] bg-white hover:bg-gray-50 rounded-full py-6 text-lg font-semibold">
                Ver planes
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-white border-t-4 border-[#0f9fee]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-gray-700">¡Contratá </span>
            <span className="text-[#0d2b61]">Fibra</span>
            <span className="text-gray-700">!</span>
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(
                phoneNumberFooter,
                privacyAcceptedFooter,
                setIsSubmittingFooter,
                setSubmitMessageFooter,
                setPhoneNumberFooter,
                setPrivacyAcceptedFooter
              );
            }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
              <Input
                type="tel"
                placeholder="Ingresa tu número"
                className="max-w-sm rounded-full border-2 border-gray-300 h-14 text-base"
                value={phoneNumberFooter}
                onChange={(e) => setPhoneNumberFooter(e.target.value)}
                disabled={isSubmittingFooter}
              />
              <Button 
                type="submit"
                className="bg-[#0d2b61] hover:bg-[#0a2149] text-white rounded-full px-10 py-7 font-semibold shadow-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmittingFooter}
              >
                {isSubmittingFooter ? 'Enviando...' : 'Quiero que me llamen'}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Checkbox 
                id="privacy2" 
                checked={privacyAcceptedFooter}
                onCheckedChange={(checked) => setPrivacyAcceptedFooter(checked === true)}
                disabled={isSubmittingFooter}
              />
              <label htmlFor="privacy2" className="text-xs text-gray-600">
                He leído y acepto la{" "}
                <a href="#" className="text-[#0f9fee] underline">
                  política de privacidad
                </a>
              </label>
            </div>
            {submitMessageFooter && (
              <div className={`text-sm text-center py-2 px-4 rounded-lg max-w-md mx-auto ${
                submitMessageFooter.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitMessageFooter.text}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://ext.same-assets.com/1019913790/2460080818.png"
                alt="Movistar"
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
            <a href="#" className="text-sm text-[#0d2b61] font-semibold hover:underline">
              Términos legales
            </a>
          </div>
          <div className="mt-6 pt-6 border-t text-center text-xs text-gray-600">
            <p>
              <a href="#" className="underline">
                Malen Serrano
              </a>{" "}
              brinda asesoría comercial sobre planes de una empresa de telefonía e internet líder en Argentina.{" "}<br></br>
              <a href="#">
              Este sitio es independiente y no pertenece a Movistar ni a Telefónica.
              </a>
            </p>
            <p className="mt-2">
              <a href="#" className="text-[#0f9fee] underline">
                Información sobre Cookies
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5492612345678?text=Hola,%20me%20interesa%20saber%20más%20sobre%20los%20planes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#0f9fee] hover:bg-[#0d8dd6] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#0f9fee]/50 group"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
