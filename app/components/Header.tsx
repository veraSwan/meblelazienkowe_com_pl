import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-center py-8 md:py-10" role="banner">
      <Image
        src="/images/logo.svg"
        alt="Meble łazienkowe - logo firmy meblelazienkowe.com.pl"
        width={320}
        height={109}
        priority
      />
    </header>
  );
}


