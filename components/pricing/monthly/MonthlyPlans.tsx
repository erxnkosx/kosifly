import { Accent, DarkSection, SectionHeading } from "../shared";
import { MAINTENANCE_PLANS, SEO_PLANS, type Plan } from "./MonthlyPlans.data";
import { PlanCard } from "./PlanCard";

function PlanGroup({
  title,
  note,
  plans,
}: {
  title: string;
  note: string;
  plans: readonly Plan[];
}) {
  return (
    <div>
      <div data-reveal className="mb-[27px] flex items-center justify-between">
        <h3 className="font-orbitron text-[13px] font-medium tracking-[2.86px] text-white">
          {title}
        </h3>
        <p className="font-inter text-[15px] leading-[18px] text-white/60">{note}</p>
      </div>
      <div data-reveal-group className="flex gap-[28px]">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

/** Sectie "Maandpakketten" (1920 x 1714): onderhoud en hosting, en lokale SEO. */
export function MonthlyPlans() {
  return (
    <DarkSection
      id="maandpakketten"
      aria-labelledby="maandpakketten-kop"
      backdrop={{ src: "/figma/pricing/monthly/5098d.svg", width: 1920, height: 1714 }}
      className="flex h-[1714px] w-[1920px] flex-col items-center overflow-hidden leading-[normal]"
    >
      <SectionHeading
        tone="dark"
        eyebrow="MAANDPAKKETTEN"
        eyebrowVariant="dashesSmall"
        title={
          <>
            Elke maand <Accent>zorgeloos</Accent>.
          </>
        }
        titleId="maandpakketten-kop"
        intro="Vaste maandprijzen voor onderhoud en lokale SEO, zonder kleine lettertjes. Alle bedragen zijn exclusief btw."
      />
      <div className="relative mt-[49px] flex w-[1556px] flex-col gap-[99px]">
        <PlanGroup
          title="ONDERHOUD & HOSTING"
          note="Maandelijks opzegbaar"
          plans={MAINTENANCE_PLANS}
        />
        <PlanGroup title="LOKALE SEO" note="Minimale looptijd 6 maanden" plans={SEO_PLANS} />
      </div>
    </DarkSection>
  );
}
