import Image from "next/image";

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
};

const copy: Record<Locale, Copy> = {
  pl: {
    eyebrow: "Meble łazienkowe • wkrótce",
    title: "Dobre meble. Piękna łazienka.",
    lead: "Przygotowujemy starannie wybraną ofertę szafek i mebli łazienkowych. Łączymy ponadczasowy wygląd z wygodą codziennego użytkowania.",
    primaryCta: "Poznaj nas",
    secondaryCta: "Dla producentów",
    status: "Sklep internetowy jest w przygotowaniu",
    aboutEyebrow: "O nas",
    aboutTitle: "Dobry wybór zaczyna się od przemyślanej oferty.",
    aboutBody: "Meblelazienkowe.com.pl powstaje dla osób, które chcą urządzić łazienkę spójnie i wygodnie. Szukamy mebli o dopracowanej formie, praktycznych rozwiązaniach i solidnym wykonaniu.",
    aboutBody2: "Tworzymy sklep i rozmawiamy z producentami. Stopniowo pokażemy kolekcje, produkty i inspiracje, które ułatwią wybór.",
    aboutImageAlt: "Nowoczesna łazienka z szafką pod umywalką i wysoką zabudową",
    focusEyebrow: "Nasza koncepcja",
    focusTitle: "Nad czym pracujemy",
    focusLead: "Budujemy ofertę i sposób jej prezentacji tak, aby wybór mebli do łazienki był prostszy.",
    focusCards: [
      { title: "Wybrane kolekcje", body: "Szukamy mebli, które dobrze wyglądają, pasują do różnych wnętrz i sprawdzają się każdego dnia." },
      { title: "Dobór producentów", body: "Poznajemy producentów i ich ofertę, zwracając uwagę na jakość oraz rzetelną współpracę." },
      { title: "Wygodne zakupy", body: "Przygotowujemy czytelny sklep, w którym łatwo będzie porównać produkty i podjąć decyzję." }
    ],
    suppliersEyebrow: "Współpraca B2B",
    suppliersTitle: "Tworzysz meble łazienkowe? Porozmawiajmy.",
    suppliersBody: "Szukamy producentów i dystrybutorów, którzy dbają o wzornictwo, wykonanie i dobrą współpracę. Chętnie poznamy Twoje kolekcje i warunki B2B.",
    suppliersCta: "Napisz w sprawie współpracy",
    supplierPoints: ["Meble i kolekcje łazienkowe", "Długofalowa współpraca", "Bezpośredni kontakt"],
    contactEyebrow: "Kontakt",
    contactTitle: "Zacznijmy rozmowę.",
    contactBody: "Masz ofertę, pytanie lub pomysł na współpracę? Napisz do nas — odpowiemy bezpośrednio.",
    contactCta: "Wyślij wiadomość",
    companyDetailsLabel: "Dane firmy",
    activeBusiness: "Firma aktywna",
    addressLabel: "Adres siedziby"
  },
  en: {
    eyebrow: "Bathroom furniture • coming soon",
    title: "Good furniture. A better bathroom.",
    lead: "We are preparing a carefully selected range of bathroom cabinets and furniture, bringing timeless design together with everyday comfort.",
    primaryCta: "Meet us",
    secondaryCta: "For manufacturers",
    status: "Our online store is currently being prepared",
    aboutEyebrow: "About the company",
    aboutTitle: "A good choice starts with a considered selection.",
    aboutBody: "Meblelazienkowe.com.pl is being created for people who want a bathroom that feels coherent and comfortable. We look for well designed furniture, practical details and solid craftsmanship.",
    aboutBody2: "We are building the store and speaking with manufacturers. We will gradually share collections, products and ideas to make choosing easier.",
    aboutImageAlt: "Modern bathroom with a vanity and tall cabinet",
    focusEyebrow: "Our approach",
    focusTitle: "What we are working on",
    focusLead: "We are shaping the range and the way it is presented to make choosing bathroom furniture simpler.",
    focusCards: [
      { title: "Selected collections", body: "We look for furniture that feels at home in different interiors and works well every day." },
      { title: "Choosing partners", body: "We get to know manufacturers and their products, with a focus on quality and reliable partnerships." },
      { title: "Easy shopping", body: "We are preparing a clear store where comparing products and making a decision will be straightforward." }
    ],
    suppliersEyebrow: "B2B partnerships",
    suppliersTitle: "Make bathroom furniture? Let’s talk.",
    suppliersBody: "We are looking for manufacturers and distributors who care about design, craftsmanship and good partnerships. We would be glad to learn about your collections and B2B terms.",
    suppliersCta: "Discuss a partnership",
    supplierPoints: ["Bathroom furniture and collections", "Long-term partnerships", "Direct contact"],
    contactEyebrow: "Contact",
    contactTitle: "Let’s start a conversation.",
    contactBody: "Have an offer, a question or an idea for working together? Write to us and we will reply directly.",
    contactCta: "Send an email",
    companyDetailsLabel: "Company details",
    activeBusiness: "Active business",
    addressLabel: "Registered office"
  }
};

export function CompanyLanding({ locale = "pl" }: { locale?: Locale }) {
  const t = copy[locale];
  const isEnglish = locale === "en";
  const subject = encodeURIComponent(isEnglish ? "Supplier cooperation enquiry" : "Zapytanie o współpracę dostawcy");

  return (
    <main className="bg-[#e5ded3] text-[#1b2932]">
      <section className="overflow-hidden border-b border-[#cfc5b9] bg-[#e5ded3]">
        <div className="mx-auto grid max-w-[1320px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12 lg:px-16 xl:gap-16">
          <div className="order-2 px-6 py-14 sm:px-10 sm:py-20 lg:order-1 lg:px-0 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#643c45]">{t.eyebrow}</p>
            <h1 className="mt-7 max-w-[560px] text-[clamp(2.5rem,3.4vw,3.625rem)] font-semibold leading-[1.18] tracking-[-0.025em]">{t.title}</h1>
            <p className="mt-7 max-w-[540px] text-base leading-8 text-[#535b5d] sm:text-lg">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#643c45] px-6 text-sm font-semibold text-white transition hover:bg-[#7a4b56] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#643c45]">
                {t.primaryCta} <span className="ml-3" aria-hidden="true">↗</span>
              </a>
              <a href="#suppliers" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#b9b9af] px-6 text-sm font-semibold text-[#1b2932] transition hover:border-[#1b2932] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b2932]">
                {t.secondaryCta}
              </a>
            </div>
            <p className="mt-12 flex items-center gap-3 border-t border-[#c9bfb3] pt-5 text-sm text-[#62625e]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#8b5a61]" aria-hidden="true" />
              {t.status}
            </p>
          </div>
          <div className="relative order-1 h-[350px] overflow-hidden bg-[#c8b6a5] sm:h-[470px] lg:order-2 lg:h-[610px] lg:rounded-[22px]">
            <Image
              src="/images/hero-walnut.png"
              alt={isEnglish ? "Walnut bathroom cabinets with a vanity and mirror" : "Łazienka z orzechowymi szafkami, umywalką i lustrem"}
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-[#f2ece3] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#e8e5df]">
            <Image src="/images/Lucid_Realism_Highresolution_realistic_photo_of_a_modern_Europ_1.jpg" alt={t.aboutImageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="max-w-[560px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#643c45]">{t.aboutEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.18] tracking-[-0.03em] sm:text-4xl">{t.aboutTitle}</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#535b5d]">
              <p>{t.aboutBody}</p>
              <p>{t.aboutBody2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="scroll-mt-24 bg-[#d8ccc5] py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-[690px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#643c45]">{t.focusEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{t.focusTitle}</h2>
            <p className="mt-5 text-base leading-8 text-[#535b5d]">{t.focusLead}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.focusCards.map((card, index) => (
              <article key={card.title} className="flex h-full flex-col rounded-[18px] border border-[#d7c8c3] bg-[#f7f2eb] p-7 sm:p-8">
                <span className="text-sm font-semibold tracking-[0.12em] text-[#643c45]">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#535b5d]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="suppliers" className="scroll-mt-24 bg-[#1b2932] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-16">
          <div className="grid items-end gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
            <div className="max-w-[760px]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c9c5]">{t.suppliersEyebrow}</p>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.18] tracking-[-0.03em] sm:text-4xl">{t.suppliersTitle}</h2>
              <p className="mt-6 max-w-[650px] text-base leading-8 text-white/75">{t.suppliersBody}</p>
            </div>
            <a href={"mailto:kontakt@meblelazienkowe.com.pl?subject=" + subject} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f2ece3] px-6 text-sm font-semibold text-[#1b2932] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {t.suppliersCta} <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="mt-12 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
            {t.supplierPoints.map((point) => (
              <p key={point} className="flex items-center gap-3 text-sm text-white/80"><span className="text-[#e5c9c5]" aria-hidden="true">✓</span>{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-[#f2ece3] py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20 lg:px-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#643c45]">{t.contactEyebrow}</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-[480px] text-base leading-8 text-[#535b5d]">{t.contactBody}</p>
            <a href="mailto:kontakt@meblelazienkowe.com.pl" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#643c45] px-6 text-sm font-semibold text-white transition hover:bg-[#7a4b56]">
              {t.contactCta} <span className="ml-3" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="rounded-[18px] border border-[#d2c5b9] bg-[#e5ded3] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#643c45]">{t.companyDetailsLabel}</p>
            <p className="mt-5 text-lg font-semibold">SwanIT Michał Łabędź</p>
            <a href="mailto:kontakt@meblelazienkowe.com.pl" className="mt-2 block break-all text-sm font-medium text-[#1b2932] underline decoration-[#a47e78] underline-offset-4 hover:text-[#643c45]">kontakt@meblelazienkowe.com.pl</a>
            <div className="mt-6 grid gap-3 border-t border-[#deded7] pt-6 text-sm leading-6 text-[#535b5d]">
              <p><span className="font-semibold text-[#1b2932]">NIP:</span> 764 246 40 64</p>
              <p><span className="font-semibold text-[#1b2932]">REGON:</span> 301034316</p>
              <p><span className="font-semibold text-[#1b2932]">{t.addressLabel}:</span> ul. Rubinowa 45, 64-920 Piła</p>
              <p className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#8b5a61]" aria-hidden="true" />{t.activeBusiness}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
