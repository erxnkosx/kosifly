"use client";

import { useEffect, useRef, useState } from "react";

export type VerschilPair = { bad: string; good: string };

/** Mobiel: één kaart met een schakelaar tussen "Gewone website" en "Met Kosifly"; elke rij klapt om naar zijn antwoord. */
export function VerschilToggle({ pairs }: { pairs: VerschilPair[] }) {
  const [on, setOn] = useState(false);
  const touched = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  // Klapt één keer vanzelf om wanneer de kaart in beeld komt, zolang de bezoeker nog niet zelf tikte.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => {
          if (!touched.current) setOn(true);
        }, 1400);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const choose = (value: boolean) => {
    touched.current = true;
    setOn(value);
  };

  return (
    <div ref={ref} className={"verschil-toggle" + (on ? " is-on" : "")}>
      <div className="verschil-switch" role="group" aria-label="Vergelijk">
        <span className="verschil-switch-thumb" aria-hidden="true" />
        <button type="button" aria-pressed={!on} onClick={() => choose(false)}>
          Gewone website
        </button>
        <button type="button" aria-pressed={on} onClick={() => choose(true)}>
          <img src="/brand/wing.png" alt="" width={18} height={10} />
          Met Kosifly
        </button>
      </div>
      <ul className="verschil-card" aria-live="polite">
        {pairs.map((pair, i) => (
          <li key={pair.good} style={{ transitionDelay: `${i * 70}ms` }}>
            <span
              className="verschil-mark"
              aria-hidden="true"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <b>×</b>
              <b>✓</b>
            </span>
            <span className="verschil-text">
              <span aria-hidden={on}>{pair.bad}</span>
              <span aria-hidden={!on}>{pair.good}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
