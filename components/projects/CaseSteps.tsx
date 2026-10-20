"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

const MOBILE = "(max-width: 760px)";

/**
 * De drie gebouwde onderdelen van een case. Desktop: gewone stapel (ongewijzigd).
 * Mobiel: swipebare kaarten met een rij stap-knoppen die meeloopt met het swipen;
 * kaarten buiten beeld zijn inert zodat focus en voorlezen bij de zichtbare stap blijven.
 */
export function CaseSteps({ labels, children }: { labels: string[]; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(MOBILE);
    const sync = () => setMobile(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const slides = Array.from(track.current?.children ?? []) as HTMLElement[];
    slides.forEach((slide, n) => {
      slide.inert = mobile && n !== active;
    });
  }, [mobile, active]);

  const go = (n: number) => {
    const el = track.current;
    const slide = el?.children[n] as HTMLElement | undefined;
    if (!el || !slide) return;
    setActive(n);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: slide.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className="case-steps">
      <div className="case-steps-nav" role="group" aria-label="Kies een onderdeel">
        {labels.map((label, n) => (
          <button
            key={label}
            type="button"
            aria-pressed={n === active}
            aria-controls="case-steps-track"
            onClick={() => go(n)}
          >
            <span aria-hidden="true">{String(n + 1).padStart(2, "0")}</span>
            {label}
          </button>
        ))}
      </div>
      <div
        ref={track}
        id="case-steps-track"
        className="case-steps-track"
        onScroll={(e) => {
          if (!mobile) return;
          const el = e.currentTarget;
          const [first, second] = Array.from(el.children) as HTMLElement[];
          const step = second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
          const count = Children.count(children);
          setActive(Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / step))));
        }}
      >
        {children}
      </div>
    </div>
  );
}
