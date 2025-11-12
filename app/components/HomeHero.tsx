import fs from "node:fs";
import path from "node:path";
import HeroCarousel from "./HeroCarousel";

export default function HomeHero() {
  const dir = path.join(process.cwd(), "public", "images");
  let images: string[] = [];
  try {
    images = fs
      .readdirSync(dir)
      .filter(
        (f) =>
          /\.(jpe?g|png|webp)$/i.test(f) &&
          !/^logo/i.test(f) &&
          !/^\./.test(f)
      )
      .sort()
      .map((f) => `/images/${f}`);
  } catch {
    images = [];
  }

  return (
    <section className="relative mx-0 mt-0 min-h-[70vh] overflow-hidden rounded-2xl shadow-sm md:mx-6 md:mt-2 lg:mx-10 lg:min-h-[80vh] xl:max-h-[850px] 2xl:max-h-[900px]">
      <HeroCarousel images={images} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="max-w-5xl text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl">
          Meble łazienkowe premium – od projektu po montaż
        </h1>
        <p className="mt-4 max-w-3xl text-base text-white/90 drop-shadow-md md:text-xl">
          Tworzymy nowoczesne i eleganckie meble łazienkowe na wymiar z najwyższej jakości materiałów. Nasz zespół dba o każdy etap – od projektu po montaż i wsparcie posprzedażowe.
        </p>
      </div>
    </section>
  );
}


