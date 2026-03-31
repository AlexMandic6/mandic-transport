"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { slides } from "@/constants/slides";
import { SliderArrow } from "./SliderArrow";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[var(--color-midnight)] overflow-hidden">
      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[-8px]" style={{ gap: "8px" }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-none w-full aspect-[16/9] md:w-[calc(100%/3-8px)] pl-2 last:mr-2 overflow-hidden md:rounded-xl"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center"
                priority={i === 0}
              />
              {/* Label */}
              {slide.label && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 ">
                  <p className="text-white text-xs tracking-[0.25em] uppercase font-light bg-black/40 backdrop-blur-sm px-5 py-2 border border-white/20 whitespace-nowrap">
                    {slide.label}
                  </p>
                </div>
              )}
              {/* Divider */}
              <div className="absolute right-0 top-0 h-full w-px bg-white/20 z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <SliderArrow direction="prev" onClick={scrollPrev} />
      <SliderArrow direction="next" onClick={scrollNext} />
    </section>
  );
}
