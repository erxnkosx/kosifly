"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ServiceSlug } from "@/lib/services";
import { SiteTour } from "./SiteTour";

/*
 * Mobiele versies van de "verschil"-illustraties. De desktop-art (kaart, toolschema, maandkalender)
 * wordt op een gsm onleesbaar klein; hier staat dezelfde inhoud als leesbare, tikbare onderdelen.
 * Alle teksten komen uit de desktop-illustraties. Enkel zichtbaar op mobiel (zie mobile-services.css).
 */

/** Zet `is-in` zodra het blok in beeld komt, zodat CSS de animatie één keer kan afspelen. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
}

const towns = ["Puurs", "Bornem", "Willebroek", "Boom"];
const jobs = ["Loodgieter", "Ontstopping", "Badkamer"];

function RegionGrid() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={"smd-card smd-region" + (inView ? " is-in" : "")}>
      <div className="smd-card-head">
        <span>Voorbeeld: loodgieter</span>
        <small>3 diensten × 4 gemeenten</small>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Gemeente</span>
            </th>
            {jobs.map((job) => (
              <th key={job} scope="col">
                {job}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {towns.map((town, r) => (
            <tr key={town}>
              <th scope="row">{town}</th>
              {jobs.map((job, c) => (
                <td key={job}>
                  <span
                    className="smd-page"
                    style={{ "--i": r * jobs.length + c } as CSSProperties}
                    title={`${job} ${town}`}
                  >
                    <span className="sr-only">
                      Pagina {job} {town}
                    </span>
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="smd-total">
        <strong>12</strong>
        <span>extra pagina&apos;s waar je gevonden wordt</span>
      </div>
      <p className="smd-note">
        Elke pagina is uniek geschreven, met lokale info en echte reviews. Geen kopieën met een
        andere plaatsnaam.
      </p>
    </div>
  );
}

/* Elke losse tool van vandaag, met wat het platform ervoor in de plaats zet. */
const toolPairs = [
  {
    bad: "Excel-lijsten in drie versies, niemand weet welke",
    good: "Eén live dashboard voor iedereen",
  },
  { bad: "Documenten verstopt tussen 200 mails", good: "Documentbeheer per dossier" },
  {
    bad: "WeTransfer-links die na zeven dagen vervallen",
    good: "Een klantenportaal waar alles blijft staan",
  },
  { bad: "Een papieren agenda met dubbele boekingen", good: "Planning & agenda op één plek" },
  { bad: "Alles opnieuw ingeven in je boekhoudpakket", good: "Gekoppeld aan je boekhouding" },
];

function ToolsToggle() {
  const [on, setOn] = useState(false);
  const touched = useRef(false);
  const [ref, inView] = useInView<HTMLDivElement>();

  // Klapt één keer vanzelf om wanneer de kaart in beeld komt, zolang de bezoeker nog niet zelf tikte.
  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => {
      if (!touched.current) setOn(true);
    }, 1400);
    return () => clearTimeout(timer);
  }, [inView]);

  const choose = (value: boolean) => {
    touched.current = true;
    setOn(value);
  };

  return (
    <div ref={ref} className={"verschil-toggle smd-tools" + (on ? " is-on" : "")}>
      <div className="verschil-switch" role="group" aria-label="Vergelijk">
        <span className="verschil-switch-thumb" aria-hidden="true" />
        <button type="button" aria-pressed={!on} onClick={() => choose(false)}>
          Vandaag
        </button>
        <button type="button" aria-pressed={on} onClick={() => choose(true)}>
          <img src="/brand/wing.png" alt="" width={18} height={10} />
          Met Kosifly
        </button>
      </div>
      <p className="smd-tools-caption" aria-live="polite">
        {on ? "Eén platform, gebouwd rond hoe jij werkt" : "5 losse tools die niet samenwerken"}
      </p>
      <ul className="verschil-card">
        {toolPairs.map((pair, i) => (
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

const weekdays = ["MA", "DI", "WO", "DO", "VR", "ZA", "ZO"];
const events: Record<number, "update" | "tweak" | "report"> = {
  3: "update",
  10: "update",
  12: "tweak",
  17: "update",
  24: "update",
  30: "report",
};
const included = [
  { key: "backup", title: "Back-up", text: "elke nacht" },
  { key: "update", title: "Updates & tests", text: "elke week" },
  { key: "monitor", title: "Monitoring", text: "24/7" },
  { key: "tweak", title: "Kleine aanpassingen", text: "op vraag" },
  { key: "report", title: "Rapport", text: "op het einde van de maand" },
];

function MonthCalendar() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={"smd-card smd-month" + (inView ? " is-in" : "")}>
      <div className="smd-card-head">
        <span>Een maand bij Kosifly</span>
        <small>Voorbeeld</small>
      </div>
      <div className="smd-cal" aria-hidden="true">
        {weekdays.map((d) => (
          <b key={d}>{d}</b>
        ))}
        {Array.from({ length: 30 }, (_, n) => n + 1).map((day) => (
          <span
            key={day}
            className={events[day] ? "is-" + events[day] : undefined}
            style={{ "--i": day } as CSSProperties}
          >
            {day}
          </span>
        ))}
      </div>
      <p className="smd-list-title">Elke maand inbegrepen</p>
      <ul className="smd-legend">
        {included.map((x) => (
          <li key={x.key} className={"is-" + x.key}>
            <strong>{x.title}</strong>
            <span>{x.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileDifference({ slug }: { slug: ServiceSlug }) {
  const content =
    slug === "webdesign" ? (
      <SiteTour />
    ) : slug === "lokale-seo" ? (
      <RegionGrid />
    ) : slug === "web-apps" ? (
      <ToolsToggle />
    ) : slug === "onderhoud-hosting" ? (
      <MonthCalendar />
    ) : null;
  return content && <div className="smd">{content}</div>;
}
