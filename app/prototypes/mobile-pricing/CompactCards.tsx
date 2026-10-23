"use client";
import { useRef, useState } from "react";
import { WEBSITE_PACKAGES, shortCopy, Price, Features, Cta, FullDetails } from "./shared";
import s from "./prototype.module.css";
export function CompactCards() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div
        ref={track}
        className={s.track}
        onScroll={() => {
          const el = track.current;
          if (el)
            setCurrent(
              Math.round(
                el.scrollLeft / (el.firstElementChild!.getBoundingClientRect().width + 12),
              ),
            );
        }}
      >
        {WEBSITE_PACKAGES.map((pkg, i) => (
          <article key={pkg.id} className={`${s.card} ${pkg.featured ? s.featured : ""}`}>
            <div className={s.cardTitle}>
              <h2>{pkg.title}</h2>
              {pkg.featured && <span className={s.badge}>Meest gekozen</span>}
            </div>
            <p className={s.short}>{shortCopy[i]}</p>
            <div className={s.priceRow}>
              <Price pkg={pkg} />
              <span className={s.delivery}>{pkg.delivery}</span>
            </div>
            <p className={s.tax}>eenmalig · excl. btw</p>
            <Features
              items={[
                pkg.features[0],
                i === 0
                  ? "Design op maat, mobiel eerst"
                  : i === 1
                    ? "SEO + Google Bedrijfsprofiel"
                    : "Meertalig + CRM-koppeling",
              ]}
            />
            <Cta pkg={pkg} />
            <FullDetails pkg={pkg} />
          </article>
        ))}
      </div>
      <div className={s.dots} aria-label="Pakket selecteren">
        {WEBSITE_PACKAGES.map((pkg, i) => (
          <button
            key={pkg.id}
            aria-label={`Toon ${pkg.title}`}
            aria-pressed={current === i}
            onClick={() => {
              const el = track.current;
              if (el)
                el.scrollTo({
                  left: i * (el.firstElementChild!.getBoundingClientRect().width + 12),
                  behavior: "instant",
                });
            }}
          >
            <span />
          </button>
        ))}
      </div>
      <p className={s.hint}>Swipe om pakketten te vergelijken</p>
    </>
  );
}
