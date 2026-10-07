import type { ReactNode } from "react";

type PriceRowProps = {
  label: string;
  price: ReactNode;
  /** Groen label naast de omschrijving, bv. "bij een Kosifly-site". */
  tag?: string;
  /** Kleur van de omschrijving; de waarde is altijd wit. */
  labelClassName: string;
};

/** Regel "omschrijving ... bedrag" van een prijsvoorstel; hoort in een `<dl>`. */
export function PriceRow({ label, price, tag, labelClassName }: PriceRowProps) {
  return (
    <div className="flex items-center justify-between">
      <dt
        className={`flex items-center gap-[8px] font-inter text-[15px] leading-[18px] ${labelClassName}`}
      >
        {label}
        {tag && (
          <span className="rounded-[10px] bg-[rgba(8,255,0,0.15)] px-[8px] py-[3px] text-[11px] font-semibold leading-[13px] text-[#9f9]">
            {tag}
          </span>
        )}
      </dt>
      <dd className="font-inter text-[15px] font-semibold leading-[18px] text-white">{price}</dd>
    </div>
  );
}
