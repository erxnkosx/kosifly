import { CheckList, MostChosen, PillButton } from "../shared";
import type { Plan, PlanTone } from "./MonthlyPlans.data";

const ON_DARK = {
  name: "text-white",
  tagline: "text-white/80",
  price: "text-white",
  unit: "text-white/80",
  note: "text-white/65",
  cta: "white",
  ctaSize: "h-[48px]",
  divider: "bg-white/20",
  feature: "text-[15px] leading-[21px] text-white/95",
  check: "onDark",
} as const;

const TONES = {
  light: {
    card: "bg-white drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]",
    name: "text-ink",
    tagline: "text-grey",
    price: "text-ink",
    unit: "text-grey",
    note: "text-grey",
    cta: "outline",
    ctaSize: "h-[51px]",
    divider: "bg-[#ebebeb]",
    feature: "text-[15px] leading-[21px] text-ink/85",
    check: "brand",
  },
  featured: {
    ...ON_DARK,
    card: "bg-[linear-gradient(to_bottom_right,var(--brand-gradient-stops))] drop-shadow-[0_0_30px_rgba(232,51,79,0.45)]",
  },
  outline: {
    ...ON_DARK,
    card: "border border-transparent bg-white/5",
  },
} as const satisfies Record<PlanTone, object>;

function DashedBorder() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -left-px -top-px h-[calc(100%+2px)] w-[calc(100%+2px)]"
    >
      <rect
        x=".5"
        y=".5"
        rx="23.5"
        fill="none"
        stroke="white"
        strokeOpacity={0.2}
        strokeDasharray="6 6"
        strokeDashoffset={3}
        className="h-[calc(100%-1px)] w-[calc(100%-1px)]"
      />
    </svg>
  );
}

/** Prijskaart uit "Maandpakketten" (Figma: Pakket – …). */
export function PlanCard({ plan }: { plan: Plan }) {
  const tone = TONES[plan.tone];

  return (
    <article
      className={`relative flex w-[500px] flex-col gap-[18px] rounded-[24px] p-[36px] leading-[normal] ${tone.card}`}
    >
      <h4 className={`font-manrope text-[28px] font-extrabold tracking-[-0.2436px] ${tone.name}`}>
        {plan.name}
      </h4>
      <p className={`font-manrope text-[16px] leading-[24px] ${tone.tagline}`}>{plan.tagline}</p>
      {/* Het Figma-tekstvak van de prijs is ~4px breder dan Geist in de browser, vandaar 12 i.p.v. 8 */}
      <p className="flex items-baseline gap-[12px] whitespace-nowrap">
        <span
          className={`font-geist text-[52px] font-extrabold leading-[68px] tracking-[-2.08px] ${tone.price}`}
        >
          {plan.price}
        </span>
        <span className={`font-inter text-[16px] font-medium leading-[19px] ${tone.unit}`}>
          {plan.unit}
        </span>
      </p>
      <p className={`font-inter text-[13px] ${tone.note}`}>{plan.note}</p>
      <PillButton
        href={plan.cta.href}
        tone={tone.cta}
        className={`w-full text-[15px] leading-[18px] ${tone.ctaSize}`}
      >
        {plan.cta.label}
      </PillButton>
      <hr className={`h-px border-0 ${tone.divider}`} />
      <CheckList
        items={plan.features}
        tone={tone.check}
        className="gap-[11px]"
        itemClassName={tone.feature}
      />
      {plan.tone === "outline" && <DashedBorder />}
      {plan.popular && (
        <MostChosen variant="popularWhite" className="absolute left-[313px] top-[40px] w-[151px]" />
      )}
    </article>
  );
}
