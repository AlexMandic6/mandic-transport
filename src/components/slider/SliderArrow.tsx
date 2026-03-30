interface SliderArrowProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export function SliderArrow({ direction, onClick }: SliderArrowProps) {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      className={`absolute ${isPrev ? "left-4" : "right-4"} top-1/2 -translate-y-1/2 z-20 group cursor-pointer`}
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
          <polyline points={isPrev ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
        </svg>
      </span>
    </button>
  );
}
