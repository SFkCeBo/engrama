import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { Curtain } from "@/components/curtain";
import { siteUrl } from "@/lib/contact";
import "./globals.css";

const heading = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
});
const brand = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-brand" });

const description =
  "Psicólogas colegiadas que trabajan con fotografía terapéutica: sesiones individuales, talleres grupales y formación. Por toda España y online.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Engrama · Fotografía terapéutica", template: "%s · Engrama" },
  description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Engrama",
    title: "Engrama · Fotografía terapéutica",
    description,
    images: [
      {
        url: "/img/og.jpg",
        width: 1200,
        height: 630,
        alt: "Una amapola roja sobre fondo melocotón",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#f2d8c2", colorScheme: "light" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // data-scroll-behavior: Next desactiva el scroll suave al cambiar de página (tras la cortina).
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${heading.variable} ${brand.variable}`}
    >
      <body>
        {children}
        <Curtain />
      </body>
    </html>
  );
}
