import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Mathgram | De conocimiento a sistemas";
const description =
  "Mathgram une software, inteligencia artificial y contenido educativo para convertir conocimiento en sistemas claros, modernos y escalables.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathgram-rho.vercel.app"),
  title,
  description,
  keywords: [
    "Mathgram",
    "SaaS",
    "inteligencia artificial",
    "contenido educativo",
    "software educativo",
    "sistemas de conocimiento",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
