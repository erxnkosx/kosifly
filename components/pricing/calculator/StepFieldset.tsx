import type { ReactNode } from "react";

type StepFieldsetProps = { number: number; title: string; hint?: string; children: ReactNode };

/** Genummerde stap van de calculator: een fieldset met de nummerbadge en titel als legend. */
export function StepFieldset({ number, title, hint, children }: StepFieldsetProps) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-[34px]">
        <span className="flex items-center gap-[12px]">
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-brand-gradient font-inter text-[13px] font-bold leading-[16px] text-white">
            {number}
          </span>
          <span className="font-manrope text-[22px] font-extrabold leading-[normal] tracking-[-0.1914px] text-ink">
            {title}
          </span>
          {hint && <span className="font-inter text-[14px] leading-[17px] text-grey">{hint}</span>}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}
