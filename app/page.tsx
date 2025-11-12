import Header from "./components/Header";
import ThemeLanding from "./components/ThemeLanding";
import HomeHero from "./components/HomeHero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1C1C1C]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12">
        <Header />
      </div>
      <HomeHero />
      <div className="flex flex-1 flex-col">
        <ThemeLanding />
      </div>
    </div>
  );
}

