"use client";
import { useState } from "react";
import { WEBSITE_PACKAGES, shortCopy, Price, Features, Cta } from "./shared";
import s from "./prototype.module.css";
export function PackageList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={s.inset}>
      <div className={s.list}>
        {WEBSITE_PACKAGES.map((pkg, i) => (
          <article key={pkg.id} className={`${s.listCard} ${pkg.featured ? s.featured : ""}`}>
            <h2>
              <button
                className={s.listTrigger}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`list-${pkg.id}`}
                id={`list-heading-${pkg.id}`}
              >
                <span className={s.listName}>
                  {pkg.featured && <span className={s.badge}>Meest gekozen</span>}
                  <strong>{pkg.title}</strong>
                  <small>
                    {pkg.features[0]} · {pkg.delivery}
                  </small>
                </span>
                <Price pkg={pkg} />
                <span aria-hidden="true" className={s.plus}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
            </h2>
            {open === i && (
              <div
                className={s.listBody}
                id={`list-${pkg.id}`}
                role="region"
                aria-labelledby={`list-heading-${pkg.id}`}
              >
                <p className={s.short}>{shortCopy[i]}</p>
                <Features items={pkg.features} />
                <Cta pkg={pkg} />
              </div>
            )}
          </article>
        ))}
      </div>
      <p className={s.hint}>Tik op een pakket voor alle details.</p>
      <p className={s.taxFoot}>Alle bedragen eenmalig · excl. btw</p>
    </div>
  );
}
