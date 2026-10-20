"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BtnArrow } from "@/components/ui/BtnArrow";

/**
 * Mobiel: vaste knop onderaan. Verschijnt zodra de hero uit beeld is en verdwijnt bij de footer-CTA.
 * Tijdens het naar beneden scrollen schuift hij weg; bij omhoog scrollen of even stilstaan komt hij terug.
 */
export function MobileCtaBar() {
  const [inRange, setInRange] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".home-hero");
    const footer = document.querySelector(".site-footer");
    if (!hero || !footer) return;
    const state = { heroVisible: true, footerVisible: false };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.heroVisible = entry.isIntersecting;
        if (entry.target === footer) state.footerVisible = entry.isIntersecting;
      }
      setInRange(!state.heroVisible && !state.footerVisible);
    });
    observer.observe(hero);
    observer.observe(footer);

    let lastY = window.scrollY;
    let idle: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY + 6) setScrollingDown(true);
      else if (y < lastY - 6) setScrollingDown(false);
      lastY = y;
      clearTimeout(idle);
      idle = setTimeout(() => setScrollingDown(false), 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(idle);
    };
  }, []);

  const visible = inRange && !scrollingDown;

  return (
    <div className={"mobile-cta-bar" + (visible ? " is-visible" : "")} aria-hidden={!visible}>
      <div>
        <strong>Gratis website-audit</strong>
        <span>Antwoord binnen 24 uur</span>
      </div>
      <Link href="/website-audit" className="sbtn sbtn-primary" tabIndex={visible ? 0 : -1}>
        Aanvragen <BtnArrow />
      </Link>
    </div>
  );
}
