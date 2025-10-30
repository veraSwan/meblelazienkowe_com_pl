const Footer = () => {
  return (
    <footer className="border-t border-[#E1E5E9] bg-white/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 text-xs text-[#6A7077] sm:flex-row sm:items-center sm:justify-between sm:px-8 md:px-12">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[#1C1C1C]">Meble łazienkowe</p>
          <small>© {new Date().getFullYear()} Wszystkie prawa zastrzeżone.</small>
        </div>
        <nav aria-label="Kontakt" className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a className="hover:text-[#1C1C1C]" href="tel:+48786886819">
            786 886 819
          </a>
          <span aria-hidden className="opacity-40">
            •
          </span>
          <a className="hover:text-[#1C1C1C]" href="mailto:kontakt@meblealazienkowe.com.pl">
            kontakt@meblealazienkowe.com.pl
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

