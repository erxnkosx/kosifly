"use client";

import { useEffect, useState } from "react";

export type PlanGroupId = "onderhoud" | "seo";

/** Event waarmee de ankerbalk de juiste groep opent ("Lokale SEO" of "Onderhoud & hosting"). */
export const PLAN_GROUP_EVENT = "pricing:plan-group";

const OPTIONS: readonly { id: PlanGroupId; label: string }[] = [
  { id: "onderhoud", label: "Onderhoud & hosting" },
  { id: "seo", label: "Lokale SEO" },
];

/**
 * Schakelaar tussen de twee maandgroepen (alleen zichtbaar op mobiel). Zet `data-group` op de sectie;
 * mobile-pricing.css toont dan enkel die groep. Op desktop blijven beide groepen gewoon zichtbaar.
 */
export function PlanGroupToggle({ sectionId }: { sectionId: string }) {
  const [group, setGroup] = useState<PlanGroupId>("onderhoud");

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) section.dataset.group = group;
  }, [group, sectionId]);

  useEffect(() => {
    const onRequest = (event: Event) => {
      const next = (event as CustomEvent<PlanGroupId>).detail;
      if (next === "onderhoud" || next === "seo") setGroup(next);
    };
    window.addEventListener(PLAN_GROUP_EVENT, onRequest);
    return () => window.removeEventListener(PLAN_GROUP_EVENT, onRequest);
  }, []);

  return (
    <div className="plan-group-toggle" role="group" aria-label="Kies een soort maandpakket">
      {OPTIONS.map(({ id, label }) => (
        <button key={id} type="button" aria-pressed={group === id} onClick={() => setGroup(id)}>
          {label}
        </button>
      ))}
      <span aria-hidden className="plan-group-toggle-thumb" />
    </div>
  );
}
