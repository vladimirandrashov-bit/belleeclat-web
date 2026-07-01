import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BelleEclat — Нишевая парфюмерия оптом от производителя",
  description:
    "BelleEclat — производитель нишевой парфюмерии. Extrait de Parfum на французских концентратах Jean Niel. Оптовые поставки по России от 30 штук. Маржинальность партнёров 57%.",
  keywords: [
    "парфюм оптом",
    "духи оптом от производителя",
    "нишевая парфюмерия",
    "BelleEclat",
    "extrait de parfum",
    "парфюмерия оптом",
  ],
  openGraph: {
    title: "BelleEclat — Нишевая парфюмерия оптом",
    description: "Производитель нишевой парфюмерии. Оптовые поставки по России от 30 шт. Маржа партнёров 57%.",
    locale: "ru_RU",
    type: "website",
    url: "https://belleeclat.ru",
  },
  alternates: {
    canonical: "https://belleeclat.ru",
  },
  verification: {
    yandex: "a50894e1649bc108",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
