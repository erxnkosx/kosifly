"use client";
import { useState } from "react";
import { WEBSITE_PACKAGES, shortCopy, Price, Features, Cta } from "./shared";
import s from "./prototype.module.css";
export function PackageTabs() {
  const [selected, setSelected] = useState(1);
  const pkg = WEBSITE_PACKAGES[selected];
  return (
    <div className={s.inset}>
      <div className={s.tabs} role="tablist" aria-label="Websitepakket">
        {WEBSITE_PACKAGES.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={selected === i}
            aria-controls="package-panel"
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
              e.preventDefault();
              e.stopPropagation();
              const next =
                e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? 2
                    : (selected + (e.key === "ArrowRight" ? 1 : 2)) % 3;
              setSelected(next);
              document.getElementById(`tab-${WEBSITE_PACKAGES[next].id}`)?.focus();
            }}
          >
            {p.title}
          </button>
        ))}
      </div>
      <article
        role="tabpanel"
        id="package-panel"
        aria-labelledby={`tab-${pkg.id}`}
        className={`${s.card} ${s.tabCard} ${pkg.featured ? s.featured : ""}`}
      >
        <div className={s.cardTitle}>
          <h2>{pkg.title}</h2>
          {pkg.featured && <span className={s.badge}>Meest gekozen</span>}
        </div>
        <p className={s.short}>{shortCopy[selected]}</p>
        <div className={s.priceRow}>
          <Price pkg={pkg} />
          <span className={s.delivery}>{pkg.delivery}</span>
        </div>
        <p className={s.tax}>eenmalig · excl. btw</p>
        <Features items={pkg.features} />
        <Cta pkg={pkg} />
      </article>
    </div>
  );
}
