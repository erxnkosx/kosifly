"use client";

import { Children, useRef, useState, type ReactNode } from "react";

/**
 * Raster op desktop (via `className`), swipebare rij met meelopende bolletjes op mobiel.
 * De bolletjes zijn buiten de mobiele media query verborgen (mobile-pages.css).
 */
export function SwipeRow({
  className,
  label,
  itemLabel,
  children,
}: {
  className: string;
  label: string;
  itemLabel: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const go = (n: number) => {
    const el = ref.current;
    const item = el?.children[n] as HTMLElement | undefined;
    if (el && item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft - 20, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={ref}
        className={className}
        role="region"
        aria-roledescription="carrousel"
        aria-label={label}
        onScroll={(e) => {
          const el = e.currentTarget;
          const [first, second] = Array.from(el.children) as HTMLElement[];
          const step = second ? second.offsetLeft - first.offsetLeft : el.clientWidth;
          const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
          setActive(
            atEnd ? count - 1 : Math.max(0, Math.min(count - 1, Math.round(el.scrollLeft / step))),
          );
        }}
      >
        {children}
      </div>
      <div className="swipe-dots">
        {Array.from({ length: count }, (_, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Toon ${itemLabel} ${n + 1}`}
            aria-pressed={n === active}
            onClick={() => go(n)}
          />
        ))}
      </div>
    </>
  );
}
