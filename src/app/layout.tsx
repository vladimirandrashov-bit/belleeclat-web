import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "BelleEclat — Парфюмерный дом",
  description:
    "Авторская парфюмерия BelleEclat. Создаём ароматы, которые остаются в памяти.",
  openGraph: {
    title: "BelleEclat",
    description: "Авторская парфюмерия",
    locale: "ru_RU",
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
