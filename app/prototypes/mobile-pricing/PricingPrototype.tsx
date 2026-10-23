"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CompactCards } from "./CompactCards";
import { PackageTabs } from "./PackageTabs";
import { PackageList } from "./PackageList";
import s from "./prototype.module.css";
import "./picker.css";
const names = ["Compact", "Tabs", "Uitklappen"];
const views = [CompactCards, PackageTabs, PackageList];
const descriptions = [
  "Een kortere kaart, met details op aanvraag.",
  "Wissel van pakket zonder te swipen.",
  "Alle prijzen in één oogopslag.",
];
export function PricingPrototype() {
  const [current, setCurrent] = useState(0),
    [replay, setReplay] = useState(0);
  const picker = useRef<HTMLElement>(null);
  const highlight = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const v = Number(new URLSearchParams(location.search).get("v"));
    if (v >= 1 && v <= 3) setCurrent(v - 1);
  }, []);
  const select = (i: number) => {
    setCurrent(i);
    setReplay((n) => n + 1);
    const url = new URL(location.href);
    url.searchParams.set("v", String(i + 1));
    history.replaceState(null, "", url);
  };
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) ||
        target.isContentEditable ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      )
        return;
      const n = Number(e.key);
      if (n >= 1 && n <= 3) {
        e.preventDefault();
        select(n - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        select((current + 1) % 3);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        select((current + 2) % 3);
      } else if (e.key.toLowerCase() === "r") setReplay((n) => n + 1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [current]);
  useLayoutEffect(() => {
    const update = () => {
      const active = picker.current?.querySelector<HTMLElement>("[data-active]");
      if (active && highlight.current) {
        highlight.current.style.width = active.offsetWidth + "px";
        highlight.current.style.transform = `translateX(${active.offsetLeft}px)`;
      }
    };
    update();
    window.addEventListener("resize", update);
    let inner = 0;
    const frame = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => picker.current?.setAttribute("data-ready", ""));
    });
    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(inner);
    };
  }, [current]);
  const View = views[current];
  return (
    <div className={s.surface}>
      <aside className={s.caption}>
        <b>
          0{current + 1} / {names[current]}
        </b>
        <span>{descriptions[current]}</span>
      </aside>
      <div className={s.phone}>
        <header className={s.header}>
          <a href="/" aria-label="Kosifly home">
            <img src="/brand/wing.png" alt="" />
            <img src="/brand/kosifly-logo-text.png" alt="Kosifly" />
          </a>
          <a className={s.headerLink} href="/prijzen">
            Prijzen ↗
          </a>
        </header>
        <main id="main-content" className={s.content}>
          <div className={s.heading}>
            <span className={s.eyebrow}>WEBSITES</span>
            <h1>
              Kies het pakket
              <br />
              dat bij je <em>past.</em>
            </h1>
            <p>
              Alle prijzen zijn vanaf-prijzen, exclusief btw.
              <br />
              Je vaste prijs krijg je na een gratis gesprek.
            </p>
          </div>
          <View key={`${current}-${replay}`} />
          <div className={s.help}>
            <span>Even samen kijken?</span>
            <a href="/contact">Plan een gratis gesprek ↗</a>
          </div>
        </main>
      </div>
      <nav ref={picker} className="proto-picker" aria-label="Prototype variants">
        <span ref={highlight} className="proto-picker-highlight" aria-hidden="true" />
        {names.map((name, i) => (
          <button
            key={name}
            className="proto-picker-item"
            data-active={current === i ? "" : undefined}
            aria-current={current === i ? "true" : undefined}
            onClick={() => select(i)}
          >
            {name}
          </button>
        ))}
      </nav>
    </div>
  );
}
