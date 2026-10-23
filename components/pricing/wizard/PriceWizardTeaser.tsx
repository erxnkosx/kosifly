"use client";

import type { ReactNode } from "react";
import { BtnArrow } from "@/components/ui/BtnArrow";
import { MAATWERK_FROM, fmt } from "@/lib/pricing";
import { Accent, DarkSection, SectionHeading } from "../shared";
import { openPriceWizard, type Track } from "./PriceWizard";

/** Sectie "Bereken je prijs": instap naar de prijsberekenaar in stappen (components/pricing/wizard/PriceWizard.tsx). */

const SERVICES: { track: Track; title: string; price: string; icon: ReactNode }[] = [
  {
    track: "website",
    title: "Website",
    price: "vanaf € 850",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
        <path d="M3 9h18M6.5 6.8h.01M9 6.8h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    track: "software",
    title: "Software op maat",
    price: `vanaf € ${fmt(MAATWERK_FROM["Web app"])}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <path d="M17 13.5v7M13.5 17h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    track: "ai",
    title: "AI & automatisatie",
    price: `vanaf € ${fmt(MAATWERK_FROM.Automatisatie)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path
          d="M12 3.5l1.8 4.7 4.7 1.8-4.7 1.8L12 16.5l-1.8-4.7L5.5 10l4.7-1.8L12 3.5zM18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const FACTS = ["Enkele korte vragen", "Klaar in 1 minuut", "Vrijblijvend"];

function StartButton() {
  return (
    <button type="button" className="sbtn sbtn-primary pwt-start" onClick={() => openPriceWizard()}>
      Start de prijsberekenaar <BtnArrow />
    </button>
  );
}

function Facts() {
  return (
    <ul className="pwt-facts">
      {FACTS.map((fact) => (
        <li key={fact}>{fact}</li>
      ))}
    </ul>
  );
}

/** Brede kaart: korte uitleg links, de drie diensten en de startknop rechts. */
function Banner() {
  return (
    <div className="pwt-banner">
      <div className="pwt-banner-copy">
        <span className="pwt-banner-kicker">Nieuw</span>
        <h3>Je prijs in een paar vragen.</h3>
        <p>
          Kies je dienst en beantwoord een paar korte vragen. Voor een website zie je meteen je
          prijs; voor software en AI krijg je de vanaf-prijs en bereiden we je voorstel voor.
        </p>
        <Facts />
      </div>
      <div className="pwt-banner-side">
        <ul className="pwt-banner-list">
          {SERVICES.map((s) => (
            <li key={s.track}>
              <button type="button" onClick={() => openPriceWizard({ track: s.track })}>
                <span className="pwt-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.price}</small>
                </span>
                <BtnArrow />
              </button>
            </li>
          ))}
        </ul>
        <StartButton />
      </div>
    </div>
  );
}

export function PriceWizardTeaser() {
  return (
    <DarkSection
      id="bereken-je-prijs"
      aria-labelledby="bereken-je-prijs-titel"
      className="price-wizard-teaser flex flex-col items-center overflow-clip"
    >
      <SectionHeading
        tone="dark"
        eyebrow="Bereken je prijs"
        eyebrowVariant="dashesLoose"
        title={
          <>
            Stel je project <Accent>samen</Accent>.
          </>
        }
        titleId="bereken-je-prijs-titel"
        intro="Beantwoord een paar korte vragen en zie meteen je prijsindicatie. Je vaste prijs krijg je na een gratis gesprek."
      />
      <div data-reveal className="pwt-body">
        <Banner />
      </div>
    </DarkSection>
  );
}
