import type { ReactNode } from "react";

export type ProcessStep = {
  nummer: string;
  duur: string;
  titel: string;
  tekst: string;
  jij: string;
};

/**
 * Processectie van de dienstpagina's en de homepage: intro (op desktop links, blijft staan), de stappen als
 * kaarten met wat jij doet, en een afsluitende notitie met badge.
 */
export function ProcessSection({
  label,
  heading,
  description,
  steps,
  note,
  badge,
  className,
}: {
  label: string;
  heading: ReactNode;
  description: string;
  steps: readonly ProcessStep[];
  note: string;
  badge: string;
  className?: string;
}) {
  return (
    <section
      className={
        "service-section light-section process-section" + (className ? " " + className : "")
      }
    >
      <div className="process-intro">
        <span className="line-label">{label}</span>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <ol className="process-steps">
        {steps.map((s) => (
          <li key={s.nummer}>
            <span className="step-number">{s.nummer}</span>
            <div className="step-card">
              <span className="step-duration">{s.duur}</span>
              <h3>{s.titel}</h3>
              <p>{s.tekst}</p>
              <div className="your-step">
                <span>JIJ</span>
                {s.jij}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="process-end">
        <p>{note}</p>
        <span className="live-badge">
          <img src="/figma/63c5c.svg" width="8" height="8" alt="" />
          {badge}
        </span>
      </div>
    </section>
  );
}
