import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
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
    google: "aWjOKA02ICUKloiRoCbJ456iWb1Yr4Igj-_Lp6xvz18",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
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
      <Script id="yandex-metrika" strategy="afterInteractive">{`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=110320862','ym');
        ym(110320862,'init',{webvisor:true,clickmap:true,accurateTrackBounce:true,trackLinks:true});
      `}</Script>
      <noscript>
        <div><img src="https://mc.yandex.ru/watch/110320862" style={{position:"absolute",left:"-9999px"}} alt="" /></div>
      </noscript>
    </html>
  );
}
