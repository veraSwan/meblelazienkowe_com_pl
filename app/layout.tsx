import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { CompanyChrome } from "./components/CompanyChrome";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.meblelazienkowe.com.pl"),
  title: "Meble łazienkowe | meblelazienkowe.com.pl",
  description: "Przygotowujemy ofertę starannie wybranych szafek i mebli łazienkowych. Poznaj naszą koncepcję i możliwości współpracy.",
  keywords: ["meble łazienkowe", "SwanIT", "meblelazienkowe.com.pl", "współpraca z dostawcami"],
  authors: [{ name: "SwanIT Michał Łabędź" }],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    title: "Meble łazienkowe | meblelazienkowe.com.pl",
    description: "Przygotowujemy ofertę starannie wybranych szafek i mebli łazienkowych.",
    url: "https://www.meblelazienkowe.com.pl",
    siteName: "meblelazienkowe.com.pl",
    images: [
      {
        url: "/images/gemini-2.5-flash-image_provide_this_furniture_set_in_sage_green_colour-0.jpg",
        width: 1344,
        height: 768,
        alt: "Nowoczesna łazienka z zielonymi szafkami"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meble łazienkowe | meblelazienkowe.com.pl",
    description: "Przygotowujemy ofertę starannie wybranych szafek i mebli łazienkowych."
  },
  alternates: {
    canonical: "https://www.meblelazienkowe.com.pl",
    languages: { pl: "/", en: "/en" }
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.meblelazienkowe.com.pl/#organization",
  name: "SwanIT Michał Łabędź",
  url: "https://www.meblelazienkowe.com.pl",
  email: "kontakt@meblelazienkowe.com.pl",
  taxID: "7642464064",
  identifier: "301034316",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Rubinowa 45",
    postalCode: "64-920",
    addressLocality: "Piła",
    addressCountry: "PL"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className + " bg-[#fbfaf8] text-[#0F1A2B] antialiased"}>
        <CompanyChrome>{children}</CompanyChrome>
      </body>
    </html>
  );
}
