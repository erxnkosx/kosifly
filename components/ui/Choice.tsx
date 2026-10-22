import type { ReactNode } from "react";

/**
 * Keuzekaart van de prijsberekenaar en het contactformulier: checkbox (meerdere) of radio (één).
 * De echte input is verborgen, het hele label is klikbaar. Stijl: app/styles/choices.css.
 */
export function ChoiceOption({
  type,
  name,
  value,
  checked,
  onChange,
  title,
  text,
  price,
  badge,
  children,
}: {
  type: "checkbox" | "radio";
  name: string;
  value?: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  text?: string;
  price?: string;
  badge?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`choice${checked ? " is-on" : ""}`}>
      <label>
        <input type={type} name={name} value={value} checked={checked} onChange={onChange} />
        <span className={`choice-mark choice-mark-${type}`} aria-hidden="true" />
        <span className="choice-text">
          <strong>
            {title}
            {badge && <em>{badge}</em>}
          </strong>
          {text && <small>{text}</small>}
        </span>
        {price && <span className="choice-price">{price}</span>}
      </label>
      {children}
    </div>
  );
}

/** Groep keuzekaarten met een kopje, bv. "Onderhoud & hosting" of "Wanneer wil je starten?". */
export function ChoiceGroup({
  label,
  layout = "list",
  children,
}: {
  label: string;
  /** "grid": twee kolommen (één op de gsm). */
  layout?: "list" | "grid";
  children: ReactNode;
}) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div className={`choice-${layout}`}>{children}</div>
    </fieldset>
  );
}

/** Voortgangsbalkjes: één per stap, ingekleurd tot en met de huidige. */
export function StepProgress({
  steps,
  current,
  className = "",
}: {
  steps: number;
  current: number;
  className?: string;
}) {
  return (
    <div className={`step-progress ${className}`} aria-hidden="true">
      {Array.from({ length: steps }, (_, n) => (
        <span key={n} className={n <= current ? "is-done" : undefined} />
      ))}
    </div>
  );
}
