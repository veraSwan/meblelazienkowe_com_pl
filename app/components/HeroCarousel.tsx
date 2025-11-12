"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  intervalMs?: number;
  heightClass?: string;
};

export default function HeroCarousel({
  images,
  intervalMs = 7000,
  heightClass = "min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[80vh] max-h-[900px]"
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <section aria-label="Kolekcje mebli" className={`relative w-full ${heightClass}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt="Kolekcja mebli"
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
        </div>
      ))}
    </section>
  );
}


