"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Speelt de accentwoorden af zodra ze in beeld komen: de rode markeerstreep (donkere secties) tekent zich
 * en het robijnrode verloop (lichte secties) kleurt in. De stijlen en de beginstand staan in de CSS
 * (motion.css en bordeaux.css); dit zet enkel `data-accent-in` op het woord, één keer.
 *
 * Accentwoorden worden herkend aan hun berekende achtergrond (--marker-fill of --accent-text-fill), zodat
 * er naast de CSS geen tweede lijst selectors nodig is. Koppen die zelf nog invagen (Reveal.tsx), wachten
 * eerst tot ze zichtbaar zijn: anders is de animatie al voorbij voor je ze ziet.
 */
// De etalagetitels op de homepage komen uit Figma-tekstlagen (geen kop), vandaar .etalage-accent.
const CANDIDATES = ":is(h1, h2, h3) :is(span, em, u, strong), .etalage-accent";
/** Kleuren uit --marker-fill (#a6122d) en --accent-text-fill (#6b0b1b) in globals.css. */
const ACCENT_COLORS = ["rgb(166, 18, 45)", "rgb(107, 11, 27)"];
/** Langer wachten op een kop die niet zichtbaar wordt, heeft geen zin: dan toch afspelen. */
const MAX_WAIT_MS = 2500;

/** Zichtbaarheid van het woord, inclusief invagende ouders. */
function opacity(el: Element) {
  let value = 1;
  for (let node: Element | null = el; node && node !== document.body; node = node.parentElement)
    value *= parseFloat(getComputedStyle(node).opacity);
  return value;
}

export function AccentReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    const seen = new WeakSet<Element>();
    /** In beeld, maar de kop is nog aan het invagen: woord → tijdstip waarop het in beeld kwam. */
    const waiting = new Map<Element, number>();
    let frame = 0;

    const play = (el: Element) => {
      waiting.delete(el);
      el.setAttribute("data-accent-in", "");
    };
    const check = () => {
      frame = 0;
      const now = performance.now();
      for (const [el, since] of waiting)
        if (opacity(el) > 0.9 || now - since > MAX_WAIT_MS) play(el);
      if (waiting.size) frame = requestAnimationFrame(check);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          waiting.set(entry.target, performance.now());
        }
        if (waiting.size && !frame) frame = requestAnimationFrame(check);
      },
      { threshold: 0.6, rootMargin: "0px 0px -8% 0px" },
    );
    const scan = () => {
      for (const el of document.querySelectorAll(CANDIDATES)) {
        if (seen.has(el)) continue;
        seen.add(el);
        if (el.hasAttribute("data-accent-in")) continue;
        const image = getComputedStyle(el).backgroundImage;
        if (ACCENT_COLORS.some((color) => image.includes(color))) observer.observe(el);
      }
    };
    scan();
    // Inhoud die later verschijnt (carrousels, stappen, geladen secties) ook meenemen.
    let scanFrame = 0;
    const mutations = new MutationObserver(() => {
      if (scanFrame) return;
      scanFrame = requestAnimationFrame(() => {
        scanFrame = 0;
        scan();
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scanFrame);
    };
  }, [pathname]);

  return null;
}
