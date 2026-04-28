import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const title = "Mathgram | De conocimiento a sistemas";
const description =
  "Mathgram combina SaaS, inteligencia artificial y contenido educativo para transformar el conocimiento empresarial en sistemas que sí generan resultados.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathgram.vercel.app"),
  title,
  description,
  keywords: [
    "Mathgram",
    "SaaS",
    "inteligencia artificial",
    "contenido educativo",
    "sistemas empresariales",
    "transformación del conocimiento",
  ],
  openGraph: {
    title,
    description,
    url: "https://mathgram.vercel.app",
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
    <html lang="es" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${plexMono.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
