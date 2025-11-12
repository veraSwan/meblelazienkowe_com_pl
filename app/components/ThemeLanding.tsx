export default function ThemeLanding() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 pt-20 pb-2 text-left md:px-6 md:pt-24 md:pb-4 lg:px-8 mb-2 md:mb-4">
      <div className="max-w-[880px] space-y-6 text-left">
        <span className="fade-in-up inline-block mx-auto text-center text-base font-semibold tracking-wide text-gray-700 bg-white/80 border border-gray-200/60 px-5 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
          Nowa odsłona już wkrótce
        </span>

        <h1 className="fade-in-up text-4xl font-semibold leading-[1.15] tracking-tight text-neutral-900 md:text-5xl">
          Meble łazienkowe premium tworzone z dbałością o każdy detal
        </h1>

        <p className="fade-in-up max-w-prose text-neutral-700 leading-relaxed md:text-lg">
          Nasze meble powstają z myślą o wnętrzach, w których liczy się spokój i estetyka.
          <br />
          Precyzyjne wykonanie i starannie dobrane materiały pozwalają tworzyć przestrzenie, w których codzienność nabiera wyjątkowego charakteru.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-800 marker:text-amber-500 md:text-lg">
          <li>Meble na wymiar z materiałów klasy premium</li>
          <li>Od projektu po montaż – realizacje w całej Polsce</li>
          <li>Gwarancja jakości i wsparcie posprzedażowe</li>
        </ul>

        <div className="fade-in-up mt-6 flex flex-wrap gap-3">
          <a
            className="fade-in-up rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#C0A36E]"
            href="tel:+48786886819"
            itemProp="telephone"
            aria-label="Zadzwoń: 786 886 819"
          >
            Zadzwoń: 786 886 819
          </a>
          <a
            className="fade-in-up rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#C0A36E]"
            href="mailto:kontakt@meblelazienkowe.com.pl"
            itemProp="email"
            aria-label="Email: kontakt@meblelazienkowe.com.pl"
          >
            kontakt@meblelazienkowe.com.pl
          </a>
        </div>
      </div>

      <section className="mt-10 max-w-[880px] rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" aria-labelledby="offerings-heading">
        <h2 id="offerings-heading" className="text-lg font-semibold text-[#1C1C1C] leading-[1.15]">
          Co przygotowujemy?
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-neutral-700 marker:text-amber-500">
          <li>Zabudowy pod umywalki, toaletki, słupki i szafy</li>
          <li>Rozwiązania na wymiar dla wymagających wnętrz</li>
          <li>Montaż i serwis wykonywany przez nasz zespół</li>
        </ul>
      </section>

      <footer className="mt-12 flex max-w-[880px] items-center justify-between text-sm text-[#6B7280]">
        <div>© {new Date().getFullYear()} meblelazienkowe.com.pl. Wszystkie prawa zastrzeżone.</div>
        <nav aria-label="Footer navigation">
          <a href="mailto:kontakt@meblelazienkowe.com.pl" className="text-[#2E3944]">
            Kontakt
          </a>
        </nav>
      </footer>
    </main>
  );
}
