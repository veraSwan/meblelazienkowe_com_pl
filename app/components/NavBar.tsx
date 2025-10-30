import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header className="border-b border-[#E1E5E9] bg-[#F5F6F7]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-8 md:px-12">
        <Link href="/" aria-label="Strona główna" className="inline-flex items-center">
          <Image src="/images/logo.svg" alt="meblelazienkowe.com.pl" width={220} height={75} priority />
        </Link>
        <a
          className="inline-flex items-center justify-center rounded-2xl bg-[#1C1C1C] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#C0A36E]"
          href="tel:+48786886819"
        >
          Zadzwoń: 786 886 819
        </a>
      </div>
    </header>
  );
};

export default NavBar;

