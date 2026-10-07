import { ONDERHOUD, SEO, fmt } from "@/lib/pricing";
import { FOCUS_RING } from "./ChoiceStyles";
import { StepFieldset } from "./StepFieldset";

type Option = { id: string; name: string; price: number };
type MonthlyField = "onderhoud" | "seo";

const GROUPS: readonly { field: MonthlyField; label: string; options: readonly Option[] }[] = [
  { field: "onderhoud", label: "Onderhoud & hosting", options: ONDERHOUD },
  { field: "seo", label: "Lokale SEO", options: SEO },
];

type MonthlyChoicesProps = {
  values: Record<MonthlyField, string>;
  onChange: (field: MonthlyField, optionId: string) => void;
};

export function MonthlyChoices({ values, onChange }: MonthlyChoicesProps) {
  return (
    <StepFieldset number={4} title="Maandelijks" hint="Optioneel">
      <div className="flex flex-col gap-[14px]">
        {GROUPS.map(({ field, label, options }) => (
          <fieldset key={field} className="min-w-0">
            <legend className="mb-[8px] font-inter text-[14px] font-medium leading-[17px] text-grey">
              {label}
            </legend>
            <div className="flex gap-[4px] rounded-[14px] bg-[#f2f2f2] p-[4px]">
              {options.map((option) => {
                const on = values[field] === option.id;
                return (
                  <label
                    key={option.id}
                    className={`relative flex min-w-0 flex-1 cursor-pointer items-center justify-center rounded-[10px] py-[12px] font-inter text-[14px] leading-[17px] transition-colors ${
                      on
                        ? "bg-white font-semibold text-brand shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                        : "text-ink hover:bg-white/60"
                    } ${FOCUS_RING}`}
                  >
                    <input
                      type="radio"
                      name={field}
                      value={option.id}
                      checked={on}
                      onChange={() => onChange(field, option.id)}
                      className="sr-only"
                    />
                    {option.price > 0 ? `${option.name} · € ${fmt(option.price)}` : option.name}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </StepFieldset>
  );
}
