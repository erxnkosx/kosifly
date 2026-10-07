import type { Service } from "@/lib/pricing";
import { CHECK_ICON, FOCUS_RING } from "./ChoiceStyles";
import { StepFieldset } from "./StepFieldset";

const SERVICE_CHIPS = [
  "Website",
  "Web app",
  "Automatisatie",
  "Lokale SEO",
  "Onderhoud & hosting",
] as const satisfies readonly Service[];

type ServiceChipsProps = { selected: string[]; onToggle: (service: string) => void };

export function ServiceChips({ selected, onToggle }: ServiceChipsProps) {
  return (
    <StepFieldset number={1} title="Wat heb je nodig?" hint="Meerdere keuzes mogelijk">
      <div className="flex min-h-[42px] flex-wrap items-start gap-[10px]">
        {SERVICE_CHIPS.map((service) => {
          const on = selected.includes(service);
          return (
            <label
              key={service}
              className={`relative flex cursor-pointer items-center rounded-[30px] font-inter text-[15px] font-semibold leading-[18px] transition-colors ${
                on
                  ? "gap-[8px] bg-ink py-[11px] pl-[14px] pr-[18px] text-white"
                  : "border border-[#e0e0e0] bg-white px-[18px] py-[11px] text-ink hover:border-[#bfbfbf]"
              } ${FOCUS_RING}`}
            >
              <input
                type="checkbox"
                checked={on}
                onChange={() => onToggle(service)}
                className="sr-only"
              />
              {on && <img src={CHECK_ICON} alt="" width={14} height={14} className="shrink-0" />}
              {service}
            </label>
          );
        })}
      </div>
    </StepFieldset>
  );
}
