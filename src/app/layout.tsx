import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import ReCaptchaProvider from "@/src/components/ReCaptchaProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fibra Mendoza - Internet Hogar y Planes Móviles",
  description: "Fibra en Mendoza y planes móviles",
  icons: {
    icon: "/logo fibra Mendoza.png",
    shortcut: "/logo fibra Mendoza.png",
    apple: "/logo fibra Mendoza.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ReCaptchaProvider>
          <ClientBody>{children}</ClientBody>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
