"use client";

import { useEffect, useState } from "react";

type LadderId = "web-apps" | "ai-automatisaties";

const OPTIONS: readonly { id: LadderId; label: string }[] = [
  { id: "web-apps", label: "Web apps" },
  { id: "ai-automatisaties", label: "AI-automatisaties" },
];

/**
 * Schakelaar tussen de prijsladder van web apps en die van AI (enkel mobiel). Zet `data-active` op de
 * container; mobile-pricing.css toont dan alleen die ladder.
 */
export function CustomWorkToggle({ targetId }: { targetId: string }) {
  const [active, setActive] = useState<LadderId>("web-apps");

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (target) target.dataset.active = active;
  }, [active, targetId]);

  return (
    <div className="custom-toggle" role="group" aria-label="Kies een soort maatwerk">
      {OPTIONS.map(({ id, label }) => (
        <button key={id} type="button" aria-pressed={active === id} onClick={() => setActive(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
