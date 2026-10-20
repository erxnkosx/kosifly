"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Bolletjes onder een swipebare rij (mobiel). Zoekt de rij via `selector` binnen het ouder-element.
 * Zolang de rij niet horizontaal scrolt (desktop), toont de component niets.
 */
export function SwipeDots({ selector, label }: { selector: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);

  const track = () => ref.current?.parentElement?.querySelector<HTMLElement>(selector) ?? null;

  useEffect(() => {
    const el = ref.current?.parentElement?.querySelector<HTMLElement>(selector);
    if (!el) return;
    const update = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const scrollable = el.scrollWidth > el.clientWidth + 4;
      setCount(scrollable ? cards.length : 0);
      if (!scrollable || cards.length < 2) return;
      const step = cards[1].offsetLeft - cards[0].offsetLeft || el.clientWidth;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setActive(atEnd ? cards.length - 1 : Math.round(el.scrollLeft / step));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [selector]);

  const go = (n: number) => {
    const el = track();
    const card = el?.children[n] as HTMLElement | undefined;
    if (!el || !card) return;
    const padding = parseFloat(getComputedStyle(el).scrollPaddingLeft) || 0;
    el.scrollTo({
      left:
        card.getBoundingClientRect().left -
        el.getBoundingClientRect().left +
        el.scrollLeft -
        padding,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <div ref={ref} className="svc-dots" hidden={count === 0}>
      {Array.from({ length: count }, (_, n) => (
        <button
          key={n}
          type="button"
          aria-label={`${label} ${n + 1} van ${count}`}
          aria-pressed={n === active}
          onClick={() => go(n)}
        />
      ))}
    </div>
  );
}
