import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Mathgram — De conocimiento a sistemas";
const description =
  "Mathgram es la capa de coherencia entre SaaS, inteligencia artificial y contenido educativo. Estructuramos lo que tu empresa ya sabe para que escale sin más herramientas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathgram-rho.vercel.app"),
  title,
  description,
  keywords: [
    "Mathgram",
    "SaaS",
    "inteligencia artificial",
    "contenido educativo",
    "sistemas operativos de conocimiento",
    "transformación organizacional",
  ],
  openGraph: {
    title,
    description,
    url: "https://mathgram-rho.vercel.app",
    siteName: "Mathgram",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
