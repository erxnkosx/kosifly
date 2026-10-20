"use client";

import { useEffect, useState } from "react";

type SwipeDotsProps = {
  /** Id van de horizontale rij die op mobiel swipebaar is. */
  targetId: string;
  /** Namen van de kaarten, voor de knoplabels ("Toon Starter"). */
  labels: readonly string[];
  /** Kleurvariant: op een lichte of donkere achtergrond. */
  tone?: "light" | "dark";
};

/**
 * Bolletjes onder een swipebare kaartenrij (alleen zichtbaar op mobiel, zie mobile-pricing.css).
 * Volgt de scrollpositie van de rij en scrolt naar een kaart bij klikken.
 */
export function SwipeDots({ targetId, labels, tone = "light" }: SwipeDotsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = document.getElementById(targetId);
    if (!track) return;
    const update = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      if (cards.length < 2) return;
      const step = cards[1].offsetLeft - cards[0].offsetLeft || track.clientWidth;
      const index = Math.round(track.scrollLeft / step);
      setActive(Math.max(0, Math.min(cards.length - 1, index)));
    };
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, [targetId]);

  function go(index: number) {
    const track = document.getElementById(targetId);
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: card.offsetLeft - (track.children[0] as HTMLElement).offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <div className={`pricing-swipe-dots pricing-swipe-dots-${tone}`}>
      {labels.map((label, index) => (
        <button
          key={label}
          type="button"
          aria-label={`Toon ${label}`}
          aria-controls={targetId}
          aria-pressed={index === active}
          onClick={() => go(index)}
        />
      ))}
    </div>
  );
}
