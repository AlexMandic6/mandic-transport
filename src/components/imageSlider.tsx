"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { slides } from "@/constants/slides";

export default function ImageSlider() {
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
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group cursor-pointer"
      >
        <span className="text-white/60 transition-all duration-200 group-hover:text-white">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group cursor-pointer"
      >
        <span className="text-white/60 transition-all duration-200 group-hover:text-white">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </span>
      </button>
    </section>
  );
}
