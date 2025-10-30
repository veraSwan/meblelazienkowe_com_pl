const Hero = () => {
  return (
    <section id="start" className="relative overflow-hidden bg-[#F5F6F7] py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 md:grid-cols-[1.2fr_1fr] md:px-12">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D7DBE0] bg-white px-3 py-1 text-xs font-semibold text-[#9EA7B0] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C0A36E]" />Nowa odsłona już wkrótce
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1C1C1C] sm:text-5xl">
            Wkrótce uruchomimy stronę z meblami łazienkowymi <span className="bg-gradient-to-r from-[#C0A36E] to-[#9EA7B0] bg-clip-text text-transparent">premium</span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#4B4F55]">
            Z pasją projektujemy i produkujemy szafki łazienkowe na wymiar z materiałów klasy premium. Nasz zespół pracuje nad nową platformą, dzięki której łatwo zaplanujesz wymarzoną łazienkę.
          </p>

          <p className="max-w-2xl text-lg leading-8 text-[#4B4F55]">
            Jeśli już teraz chcesz omówić projekt lub zamówić wycenę, zadzwoń do nas – chętnie przygotujemy dla Ciebie indywidualną propozycję.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-[#1C1C1C] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#C0A36E]"
              href="tel:+48786886819"
            >
              Zadzwoń: 786 886 819
            </a>
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#1C1C1C] ring-1 ring-inset ring-[#D7DBE0] shadow-sm hover:bg-[#F0F2F4]"
              href="mailto:kontakt@meblelazienkowe.com.pl"
            >
              kontakt@meblelazienkowe.com.pl
            </a>
          </div>
        </div>

        <aside className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-white via-[#EEF1F4] to-[#DADFE5] p-1 shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-b from-white/60 to-white/0">
              <div className="rounded-3xl p-8 backdrop-blur sm:p-10">
                <h2 className="text-center text-2xl font-extrabold text-[#1C1C1C]">Co przygotowujemy?</h2>
                <p className="mt-3 text-center text-sm text-[#4B4F55]">
                  Rzemieślnicze kolekcje mebli łazienkowych z wodoodpornych płyt i naturalnych fornirów. Każdy projekt dopasowujemy do Twojej przestrzeni.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#4B4F55]">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#C0A36E]" />Zabudowy pod umywalki, toaletki i słupki
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#C0A36E]" />Rozwiązania na wymiar dla wymagających wnętrz
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#C0A36E]" />Montaż i serwis realizowany przez nasz zespół
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl bg-[#C0A36E]/10 px-4 py-3 text-xs text-[#1C1C1C] ring-1 ring-[#C0A36E]/30">
                  Beta: chcesz przetestować konfigurator 3D? Napisz do nas – damy Ci wcześniejszy dostęp.
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[#9EA7B0]/15 blur-2xl" />
        </aside>
      </div>
    </section>
  );
};

export default Hero;

