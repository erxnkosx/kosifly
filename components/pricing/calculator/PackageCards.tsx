import { PACKAGES, fmt } from "@/lib/pricing";
import { FOCUS_RING } from "./ChoiceStyles";
import { StepFieldset } from "./StepFieldset";

const RADIO_OFF = "/figma/pricing/calculator/e4ecb.svg";
const RADIO_ON = "/figma/pricing/calculator/aed89.svg";

type PackageCardsProps = { value: string; onChange: (packageId: string) => void };

export function PackageCards({ value, onChange }: PackageCardsProps) {
  return (
    <StepFieldset number={2} title="Welk websitepakket?">
      <div className="flex items-start gap-[12px]">
        {PACKAGES.map((pkg) => {
          const on = value === pkg.id;
          return (
            <label
              key={pkg.id}
              className={`relative flex min-w-0 flex-1 cursor-pointer items-center gap-[12px] rounded-[16px] px-[18px] py-[16px] transition-colors ${
                on
                  ? "border-2 border-brand bg-[#fff2f5]"
                  : "border border-[#e0e0e0] bg-white hover:border-[#bfbfbf]"
              } ${FOCUS_RING}`}
            >
              <input
                type="radio"
                name="pakket"
                value={pkg.id}
                checked={on}
                onChange={() => onChange(pkg.id)}
                className="sr-only"
              />
              <img
                src={on ? RADIO_ON : RADIO_OFF}
                alt=""
                width={20}
                height={20}
                className="shrink-0"
              />
              <span className="flex flex-col gap-[2px] font-inter">
                <span className="text-[16px] font-semibold leading-[19px] text-ink">
                  {pkg.name}
                </span>
                <span className="text-[14px] leading-[17px] text-grey">€ {fmt(pkg.price)}</span>
              </span>
            </label>
          );
        })}
      </div>
    </StepFieldset>
  );
}
