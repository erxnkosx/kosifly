import type { ReactNode } from "react";
import { EXTRAS, QUANTITY_LIMITS, fmt, type QuoteInput } from "@/lib/pricing";
import { CHECK_ICON, FOCUS_RING } from "./ChoiceStyles";
import { StepFieldset } from "./StepFieldset";

type Extra = (typeof EXTRAS)[number];
type Direction = 1 | -1;

type StepButtonProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
};

function StepButton({ label, disabled, onClick, children }: StepButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="quote-step-button -m-[6px] p-[6px] font-inter text-[14px] font-semibold leading-[17px] text-ink disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

type StepperProps = {
  value: number;
  max: number;
  caption: string;
  noun: string;
  onStep: (direction: Direction) => void;
};

function Stepper({ value, max, caption, noun, onStep }: StepperProps) {
  return (
    <span className="quote-stepper flex shrink-0 items-center gap-[10px] rounded-[14px] border border-[#e0e0e0] bg-white px-[10px] py-[4px]">
      <StepButton label={`Minder ${noun}`} disabled={value <= 0} onClick={() => onStep(-1)}>
        −
      </StepButton>
      <output className="whitespace-nowrap font-inter text-[13px] font-medium leading-[16px] text-ink">
        {caption}
      </output>
      <StepButton label={`Meer ${noun}`} disabled={value >= max} onClick={() => onStep(1)}>
        +
      </StepButton>
    </span>
  );
}

type ExtraRowProps = { extra: Extra; checked: boolean; stepper?: ReactNode; onToggle: () => void };

function ExtraRow({ extra, checked, stepper, onToggle }: ExtraRowProps) {
  const unit = "perPage" in extra ? " / pagina" : "perLanguage" in extra ? " / taal" : "";
  const price = (
    <span className="shrink-0 whitespace-nowrap font-inter text-[14px] leading-[17px] text-grey">
      € {fmt(extra.unit)}
      {unit}
    </span>
  );

  return (
    <div
      className={`quote-extra relative flex h-[52px] w-[440px] items-center gap-[12px] rounded-[14px] border px-[16px] py-[14px] transition-colors ${
        checked
          ? "border-brand/50 bg-[#fff2f5]"
          : "border-[#e0e0e0] bg-white hover:border-[#bfbfbf]"
      } ${FOCUS_RING}`}
    >
      <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-[12px]">
        <input type="checkbox" checked={checked} onChange={onToggle} className="sr-only" />
        <span
          className={`flex size-[22px] shrink-0 items-center justify-center rounded-[6px] border-[1.5px] ${checked ? "border-brand bg-brand" : "border-[#bfbfbf] bg-white"}`}
        >
          {checked && <img src={CHECK_ICON} alt="" width={14} height={14} />}
        </span>
        <span className="min-w-0 flex-1 font-inter text-[15px] font-semibold leading-[18px] text-ink">
          {extra.name}
        </span>
        {!stepper && price}
      </label>
      {stepper && (
        <>
          {stepper}
          {price}
        </>
      )}
    </div>
  );
}

type ExtraRowsProps = {
  quote: QuoteInput;
  onToggle: (extraId: string) => void;
  onStep: (extraId: "copywriting" | "taal", direction: Direction) => void;
};

export function ExtraRows({ quote, onToggle, onStep }: ExtraRowsProps) {
  const pages = quote.pages ?? 0;
  const languages = quote.languages ?? 0;

  return (
    <StepFieldset number={3} title="Extra's" hint="Optioneel">
      <div className="flex flex-wrap items-start gap-[12px]">
        {EXTRAS.map((extra) => {
          const stepper =
            extra.id === "copywriting" ? (
              <Stepper
                value={pages}
                max={QUANTITY_LIMITS.pages}
                caption={`${pages} ${pages === 1 ? "pagina" : "pagina's"}`}
                noun="pagina's"
                onStep={(d) => onStep("copywriting", d)}
              />
            ) : extra.id === "taal" ? (
              <Stepper
                value={languages}
                max={QUANTITY_LIMITS.languages}
                caption={String(languages)}
                noun="talen"
                onStep={(d) => onStep("taal", d)}
              />
            ) : undefined;
          return (
            <ExtraRow
              key={extra.id}
              extra={extra}
              checked={quote.extras.includes(extra.id)}
              stepper={stepper}
              onToggle={() => onToggle(extra.id)}
            />
          );
        })}
      </div>
    </StepFieldset>
  );
}
