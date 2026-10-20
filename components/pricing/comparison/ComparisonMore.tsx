"use client";

import { useEffect, useState } from "react";

/**
 * Knop "Toon alle kenmerken" onder de vergelijking (alleen zichtbaar op mobiel). Zet `data-expanded` op de
 * sectie; mobile-pricing.css verbergt zolang de onderste rijen van de tabel.
 */
export function ComparisonMore({ sectionId, total }: { sectionId: string; total: number }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) section.dataset.expanded = String(expanded);
  }, [expanded, sectionId]);

  return (
    <button
      type="button"
      className="comparison-more"
      aria-expanded={expanded}
      onClick={() => setExpanded((open) => !open)}
    >
      {expanded ? "Toon minder" : `Toon alle ${total} kenmerken`}
      <span aria-hidden>{expanded ? "↑" : "↓"}</span>
    </button>
  );
}
