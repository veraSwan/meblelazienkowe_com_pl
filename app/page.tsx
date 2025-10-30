import Header from "./components/Header";
import ThemeLanding from "./components/ThemeLanding";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F6F7] text-[#1C1C1C]">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12">
        <Header />
      </div>
      <div className="flex flex-1 flex-col">
        <ThemeLanding />
      </div>
    </div>
  );
}

