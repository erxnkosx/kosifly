"use client";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";

/** Swipebare etalage: native scroll-snap (vegen op gsm/trackpad), pijlen, puntjes, toetsenbord en slepen met de muis. */
export function EtalageCarousel({ slides }: { slides: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const go = (n: number) => {
    const el = ref.current;
    if (el)
      el.scrollTo({
        left: Math.max(0, Math.min(slides.length - 1, n)) * el.clientWidth,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
  };

  const down = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current = { x: e.clientX, left: ref.current.scrollLeft };
    ref.current.style.scrollSnapType = "none";
  };
  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current && ref.current)
      ref.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const up = () => {
    const el = ref.current;
    if (!drag.current || !el) return;
    drag.current = null;
    el.style.scrollSnapType = "";
    go(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="relative mx-auto h-[1120px] w-[1920px]">
      <div
        ref={ref}
        tabIndex={0}
        aria-roledescription="carrousel"
        aria-label="Etalages"
        onScroll={(e) => setI(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(i + 1);
          if (e.key === "ArrowLeft") go(i - 1);
        }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerLeave={up}
        className="flex h-full w-full cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain outline-none [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {slides}
      </div>

      {(
        [
          ["Vorige", 40, -1, "M12 4 6 10l6 6"],
          ["Volgende", 1824, 1, "M8 4l6 6-6 6"],
        ] as const
      ).map(([label, left, d, path]) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          onClick={() => go(i + d)}
          disabled={(d < 0 && i === 0) || (d > 0 && i === slides.length - 1)}
          className="absolute top-[532px] flex size-[56px] items-center justify-center rounded-full border border-white/16 bg-white/6 text-white backdrop-blur-[12px] transition-opacity disabled:opacity-25"
          style={{ left }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d={path}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      ))}

      <div className="absolute bottom-[40px] left-1/2 flex -translate-x-1/2 items-center gap-[10px]">
        {slides.map((_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Etalage ${n + 1}`}
            onClick={() => go(n)}
            className={`h-[8px] rounded-full transition-all ${n === i ? "w-[28px] bg-brand-soft shadow-[0_0_10px_rgba(242,74,99,0.8)]" : "w-[8px] bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
