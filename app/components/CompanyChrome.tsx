"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

const labels = {
  pl: {
    about: "O firmie",
    focus: "Nad czym pracujemy",
    suppliers: "Dla dostawców",
    contact: "Kontakt",
    contactCta: "Napisz do nas",
    note: "Wkrótce startujemy."
  },
  en: {
    about: "About us",
    focus: "Our work",
    suppliers: "For suppliers",
    contact: "Contact",
    contactCta: "Get in touch",
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
    <div className="flex min-h-screen flex-col bg-[#fbfaf8]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fbfaf8]/95 backdrop-blur">
        <nav className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-16">
          <Link href={isEnglish ? "/en" : "/"} className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1A2B] text-lg font-semibold text-[#D6B86A]">
              M
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[0.12em] text-[#0F1A2B]">MEBLE</span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-[#A18443]">łazienkowe</span>
            </span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-[#0F1A2B]">{t.about}</a>
            <a href="#focus" className="transition hover:text-[#0F1A2B]">{t.focus}</a>
            <a href="#suppliers" className="transition hover:text-[#0F1A2B]">{t.suppliers}</a>
            <a href="#contact" className="transition hover:text-[#0F1A2B]">{t.contact}</a>
            <span className="h-5 w-px bg-slate-300" aria-hidden="true" />
            <Link href={isEnglish ? "/" : "/en"} className="font-semibold text-[#0F1A2B] transition hover:text-[#A18443]">
              {isEnglish ? "PL" : "EN"}
            </Link>
            <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#0F1A2B] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#273854]">
              {t.contactCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Link href={isEnglish ? "/" : "/en"} className="text-sm font-semibold text-[#0F1A2B]">
              {isEnglish ? "PL" : "EN"}
            </Link>
            <a href="#contact" className="inline-flex items-center rounded-full bg-[#0F1A2B] px-4 py-2.5 text-xs font-semibold text-white">
              {t.contactCta}
            </a>
          </div>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-slate-200 bg-[#fbfaf8]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#0F1A2B]">meblelazienkowe.com.pl</p>
            <p className="mt-2">{t.note}</p>
            <p className="mt-2 text-slate-400">SwanIT Michał Łabędź · NIP 764 246 40 64</p>
          </div>
          <a href="mailto:kontakt@meblelazienkowe.com.pl" className="font-semibold text-[#0F1A2B] hover:text-[#A18443]">
            kontakt@meblelazienkowe.com.pl
          </a>
        </div>
      </footer>
    </div>
  );
}
