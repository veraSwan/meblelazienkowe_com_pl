"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

const labels = {
  pl: {
    about: "O nas",
    focus: "Nad czym pracujemy",
    suppliers: "Dla dostawców",
    contact: "Kontakt",
    contactCta: "Kontakt",
    note: "Wkrótce startujemy."
  },
  en: {
    about: "About us",
    focus: "Our work",
    suppliers: "For suppliers",
    contact: "Contact",
    contactCta: "Contact",
    note: "Launching soon."
  }
};

export function CompanyChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const t = isEnglish ? labels.en : labels.pl;

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "pl";
  }, [isEnglish]);

  return (
    <div className="flex min-h-screen flex-col bg-[#e5ded3]">
      <header className="sticky top-0 z-40 border-b border-[#d7ccc1] bg-[#f5f0e9]/95 backdrop-blur">
        <nav className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
          <Link href={isEnglish ? "/en" : "/"} aria-label={isEnglish ? "meblelazienkowe.com.pl — home" : "meblelazienkowe.com.pl — strona główna"} className="shrink-0">
            <Image
              src="/images/logo.svg"
              alt="meblelazienkowe.com.pl"
              width={159}
              height={54}
              className="h-auto w-[128px] sm:w-[159px]"
              priority
            />
          </Link>
          <div className="hidden items-center gap-6 whitespace-nowrap text-sm text-[#535b5d] xl:flex">
            <a href="#about" className="transition hover:text-[#1b2932]">{t.about}</a>
            <a href="#focus" className="transition hover:text-[#1b2932]">{t.focus}</a>
            <a href="#suppliers" className="transition hover:text-[#1b2932]">{t.suppliers}</a>
            <a href="#contact" className="transition hover:text-[#1b2932]">{t.contact}</a>
            <span className="h-5 w-px bg-[#deded7]" aria-hidden="true" />
            <Link href={isEnglish ? "/" : "/en"} className="font-semibold text-[#1b2932] transition hover:text-[#643c45]">
              {isEnglish ? "PL" : "EN"}
            </Link>
            <a href="#contact" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#1b2932] px-5 text-xs font-semibold text-white transition hover:bg-[#31434d]">
              {t.contactCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-3 xl:hidden">
            <Link href={isEnglish ? "/" : "/en"} className="text-sm font-semibold text-[#1b2932]">
              {isEnglish ? "PL" : "EN"}
            </Link>
            <a href="#contact" className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-[#1b2932] px-4 text-xs font-semibold text-white">
              {t.contactCta}
            </a>
          </div>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-[#d7ccc1] bg-[#e5ded3]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-9 text-xs text-[#5c6263] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.14em] text-[#1b2932]">meblelazienkowe.com.pl</p>
            <p className="mt-2">{t.note}</p>
            <p className="mt-2">SwanIT Michał Łabędź · NIP 764 246 40 64</p>
          </div>
          <a href="mailto:kontakt@meblelazienkowe.com.pl" className="font-semibold text-[#1b2932] hover:text-[#643c45]">
            kontakt@meblelazienkowe.com.pl
          </a>
        </div>
      </footer>
    </div>
  );
}
