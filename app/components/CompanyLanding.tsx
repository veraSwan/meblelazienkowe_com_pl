import Image from "next/image";
import Link from "next/link";

type Locale = "pl" | "en";

type Copy = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  status: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutBody: string;
  aboutBody2: string;
  aboutImageAlt: string;
  focusEyebrow: string;
  focusTitle: string;
  focusLead: string;
  focusCards: Array<{ title: string; body: string }>;
  suppliersEyebrow: string;
  suppliersTitle: string;
  suppliersBody: string;
  suppliersCta: string;
  supplierPoints: string[];
  contactEyebrow: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  companyDetailsLabel: string;
  activeBusiness: string;
  addressLabel: string;
  footerNote: string;
  languageLabel: string;
};

const copy: Record<Locale, Copy> = {
  pl: {
    eyebrow: "Meble łazienkowe",
    title: "Budujemy miejsce dla dobrego designu w łazience.",
    lead: "Przygotowujemy start marki i oferty mebli łazienkowych. Już wkrótce pokażemy więcej — kolekcje, produkty i rozwiązania dla nowoczesnych wnętrz.",
    primaryCta: "Poznaj nas",
    secondaryCta: "Kontakt biznesowy",
    status: "Sklep internetowy jest w przygotowaniu",
    aboutEyebrow: "O firmie",
    aboutTitle: "Zaczynamy od dobrych relacji i dobrze wybranych produktów.",
    aboutBody: "Meblelazienkowe.com.pl to projekt rozwijany z myślą o osobach, które szukają estetycznych i funkcjonalnych rozwiązań do łazienki.",
    aboutBody2: "Pracujemy nad ofertą, która połączy inspiracje, sprawdzonych producentów i wygodny dostęp do mebli łazienkowych w jednym miejscu.",
    aboutImageAlt: "Nowoczesna aranżacja łazienki",
    focusEyebrow: "Nad czym pracujemy",
    focusTitle: "Pierwszy etap naszej działalności",
    focusLead: "Obecnie przygotowujemy zaplecze marki i ofertę, z którą chcemy wejść na rynek.",
    focusCards: [
      { title: "Oferta mebli łazienkowych", body: "Tworzymy uporządkowaną prezentację kolekcji i produktów wybranych z myślą o nowoczesnych łazienkach." },
      { title: "Współpraca z producentami", body: "Rozmawiamy z dostawcami i budujemy relacje, które pozwolą stworzyć wartościową ofertę." },
      { title: "Sklep internetowy", body: "Przygotowujemy wygodne miejsce, w którym klienci będą mogli poznać produkty i złożyć zamówienie." }
    ],
    suppliersEyebrow: "Dla dostawców i producentów",
    suppliersTitle: "Szukamy marek, z którymi możemy zbudować coś dobrego.",
    suppliersBody: "Jeżeli produkujesz lub dystrybuujesz meble łazienkowe i szukasz nowych kanałów współpracy, chętnie poznamy Twoją ofertę.",
    suppliersCta: "Porozmawiajmy o współpracy",
    supplierPoints: ["Meble łazienkowe i kolekcje", "Nowe relacje handlowe", "Kontakt bezpośrednio z zespołem"],
    contactEyebrow: "Kontakt",
    contactTitle: "Jesteśmy na początku drogi.",
    contactBody: "W sprawach biznesowych, ofertowych i partnerskich zapraszamy do kontaktu mailowego.",
    contactCta: "Napisz do nas",
    companyDetailsLabel: "Dane firmy",
    activeBusiness: "Firma aktywna",
    addressLabel: "Adres siedziby",
    footerNote: "Strona informacyjna marki. Sklep internetowy jest obecnie przygotowywany.",
    languageLabel: "Język"
  },
  en: {
    eyebrow: "Bathroom furniture",
    title: "We are creating a place for good bathroom design.",
    lead: "We are preparing the launch of our brand and bathroom furniture offer. More is coming soon — collections, products and solutions for modern interiors.",
    primaryCta: "Meet us",
    secondaryCta: "Business contact",
    status: "Our online store is currently being prepared",
    aboutEyebrow: "About the company",
    aboutTitle: "We start with good relationships and carefully selected products.",
    aboutBody: "Meblelazienkowe.com.pl is a project created for people looking for aesthetic and functional solutions for the bathroom.",
    aboutBody2: "We are building an offer that brings together inspiration, trusted manufacturers and convenient access to bathroom furniture in one place.",
    aboutImageAlt: "Modern bathroom interior",
    focusEyebrow: "What we are working on",
    focusTitle: "The first stage of our business",
    focusLead: "We are currently preparing the brand foundation and the offer with which we want to enter the market.",
    focusCards: [
      { title: "Bathroom furniture offer", body: "We are creating a clear presentation of collections and products selected for modern bathrooms." },
      { title: "Working with manufacturers", body: "We are talking to suppliers and building relationships that will help us create a valuable offer." },
      { title: "Online store", body: "We are preparing a convenient place where customers will be able to discover products and place orders." }
    ],
    suppliersEyebrow: "For suppliers and manufacturers",
    suppliersTitle: "We are looking for brands we can build something good with.",
    suppliersBody: "If you manufacture or distribute bathroom furniture and are looking for new cooperation opportunities, we would be happy to learn more about your offer.",
    suppliersCta: "Let's discuss cooperation",
    supplierPoints: ["Bathroom furniture and collections", "New commercial relationships", "Direct contact with our team"],
    contactEyebrow: "Contact",
    contactTitle: "We are at the beginning of our journey.",
    contactBody: "For business, product and partnership enquiries, please contact us by email.",
    contactCta: "Send us an email",
    companyDetailsLabel: "Company details",
    activeBusiness: "Active business",
    addressLabel: "Registered office",
    footerNote: "Brand information page. Our online store is currently being prepared.",
    languageLabel: "Language"
  }
};

const focusSymbols = ["✦", "↗", "▦"];

export function CompanyLanding({ locale = "pl" }: { locale?: Locale }) {
  const t = copy[locale];
  const isEnglish = locale === "en";
  const subject = encodeURIComponent(isEnglish ? "Supplier cooperation enquiry" : "Zapytanie o współpracę dostawcy");

  return (
    <main className="overflow-hidden bg-[#fbfaf8] text-[#0F1A2B]">
      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#0F1A2B] text-white lg:min-h-[720px]">
        <Image
          src="/images/Lucid_Realism_Highresolution_realistic_photo_of_a_modern_Europ_0.jpg"
          alt={isEnglish ? "Bathroom furniture interior" : "Aranżacja łazienki z meblami"}
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A2B]/95 via-[#0F1A2B]/75 to-[#0F1A2B]/20" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 py-24 sm:px-10 lg:min-h-[720px] lg:px-16">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6B86A]">{t.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">{t.title}</h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">{t.lead}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C2A35E] px-6 py-3.5 text-sm font-semibold text-[#0F1A2B] transition hover:bg-[#d7bc7d]">
                {t.primaryCta} <span aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">
                {t.secondaryCta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#0F1A2B]/50 backdrop-blur-sm">
          <div className="mx-auto max-w-[1440px] px-6 py-4 sm:px-10 lg:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">{t.status}</p>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F1A2B] p-3 shadow-xl shadow-slate-200/60">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/Lucid_Realism_Highresolution_realistic_photo_of_a_modern_Europ_1.jpg" alt={t.aboutImageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2B]/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium leading-6 text-white/90">
                {isEnglish ? "A thoughtful offer starts with thoughtful choices." : "Dobra oferta zaczyna się od dobrych wyborów."}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A18443]">{t.aboutEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">{t.aboutTitle}</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
            <p>{t.aboutBody}</p>
            <p>{t.aboutBody2}</p>
          </div>
        </div>
      </section>

      <section id="focus" className="scroll-mt-24 bg-[#f3f1ed] py-24 sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A18443]">{t.focusEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">{t.focusTitle}</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{t.focusLead}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.focusCards.map((card, index) => (
              <article key={card.title} className="rounded-2xl border border-[#dedbd4] bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F1A2B] text-xl text-[#D6B86A]">{focusSymbols[index]}</div>
                <h3 className="mt-7 text-lg font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="suppliers" className="scroll-mt-24 bg-[#0F1A2B] py-24 text-white sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6B86A]">{t.suppliersEyebrow}</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">{t.suppliersTitle}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{t.suppliersBody}</p>
            </div>
            <a href={"mailto:kontakt@meblelazienkowe.com.pl?subject=" + subject} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C2A35E] px-6 py-3.5 text-sm font-semibold text-[#0F1A2B] transition hover:bg-[#d7bc7d]">
              {t.suppliersCta} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-14 grid gap-3 border-t border-white/15 pt-7 sm:grid-cols-3">
            {t.supplierPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm text-white/75">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-[#D6B86A]">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A18443]">{t.contactEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">{t.contactTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{t.contactBody}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-[#fbfaf8] p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#0F1A2B] text-xl text-[#D6B86A]">@</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{isEnglish ? "Business enquiries" : "Zapytania biznesowe"}</p>
                <a href="mailto:kontakt@meblelazienkowe.com.pl" className="mt-2 block break-all text-base font-semibold text-[#0F1A2B] hover:text-[#A18443]">kontakt@meblelazienkowe.com.pl</a>
              </div>
            </div>
            <a href="mailto:kontakt@meblelazienkowe.com.pl" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#A18443] hover:text-[#0F1A2B]">
              {t.contactCta} <span aria-hidden="true">↗</span>
            </a>
            <div className="mt-8 border-t border-slate-200 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{t.companyDetailsLabel}</p>
              <p className="mt-3 text-base font-semibold text-[#0F1A2B]">SwanIT Michał Łabędź</p>
              <div className="mt-4 grid gap-2 text-sm leading-6 text-slate-600">
                <p><span className="font-medium text-slate-800">NIP:</span> 764 246 40 64</p>
                <p><span className="font-medium text-slate-800">REGON:</span> 301034316</p>
                <p><span className="font-medium text-slate-800">{t.addressLabel}:</span> ul. Rubinowa 45, 64-920 Piła</p>
                <p className="inline-flex items-center gap-2 text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" />{t.activeBusiness}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200 bg-[#fbfaf8] px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footerNote}</p>
          <Link href={isEnglish ? "/" : "/en"} className="inline-flex items-center gap-2 font-semibold text-[#0F1A2B] hover:text-[#A18443]">
            {t.languageLabel}: {isEnglish ? "PL" : "EN"} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
