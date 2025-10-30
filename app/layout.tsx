import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meblealazienkowe.com.pl"),
  title: "Meble łazienkowe premium – wkrótce start | meblelazienkowe.com.pl",
  description:
    "Rzemieślnicze meble łazienkowe na wymiar: premium materiały, konfigurator i montaż.",
  keywords: [
    "meble łazienkowe",
    "meble łazienkowe na wymiar",
    "szafki łazienkowe",
    "meble premium",
    "zabudowa łazienkowa",
    "toaletki łazienkowe",
    "słupki łazienkowe"
  ],
  authors: [{ name: "Meble Łazienkowe" }],
  robots: {
    index: false,
    follow: false
  },
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "meblelazienkowe.com.pl – już wkrótce",
    description:
      "Rzemieślnicze meble łazienkowe na wymiar: premium materiały, konfigurator i montaż.",
    url: "https://www.meblealazienkowe.com.pl",
    siteName: "meblelazienkowe.com.pl",
    images: [
      {
        url: "/images/logo_meblelazienkowe_com_pl.png",
        width: 1200,
        height: 630,
        alt: "Meble łazienkowe premium – już wkrótce"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "meblelazienkowe.com.pl – już wkrótce",
    description:
      "Rzemieślnicze meble łazienkowe na wymiar: premium materiały, konfigurator i montaż."
  },
  alternates: {
    canonical: "https://www.meblealazienkowe.com.pl"
  },
  verification: {
    // Add when ready:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.meblealazienkowe.com.pl/#business",
    "name": "Meble Łazienkowe",
    "description": "Rzemieślnicze meble łazienkowe na wymiar z materiałów klasy premium. Projektowanie, produkcja i montaż szafek łazienkowych.",
    "url": "https://www.meblealazienkowe.com.pl",
    "telephone": "+48786886819",
    "email": "kontakt@meblealazienkowe.com.pl",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL"
    },
    "priceRange": "€€€",
    "areaServed": {
      "@type": "Country",
      "name": "Polska"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Meble łazienkowe na wymiar",
          "description": "Zabudowy pod umywalki, toaletki, słupki i szafy łazienkowe"
        }
      }
    ]
  };

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-[#F5F6F7] text-[#1C1C1C] antialiased`}>
        {children}
      </body>
    </html>
  );
}

