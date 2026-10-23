import { Accent, DarkSection, SectionHeading, SwipeDots } from "../shared";
import { MAINTENANCE_PLANS, SEO_PLANS, type Plan } from "./MonthlyPlans.data";
import { PlanCard } from "./PlanCard";
import { PlanGroupToggle, type PlanGroupId } from "./PlanGroupToggle";

function PlanGroup({
  id,
  title,
  note,
  plans,
}: {
  id: PlanGroupId;
  title: string;
  note: string;
  plans: readonly Plan[];
}) {
  const trackId = `plans-${id}-track`;
  return (
    <div className="pricing-plan-group" data-group-id={id}>
      <div data-reveal className="mb-[27px] flex items-center justify-between">
        {/* Alleen voor schermlezers: de schakelaar en de notitie maken de groep al zichtbaar duidelijk. */}
        <h3 className="sr-only">{title}</h3>
        <p className="font-inter text-[15px] leading-[18px] text-white/60">{note}</p>
      </div>
      <div id={trackId} data-reveal-group className="pricing-swipe flex gap-[28px]">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <SwipeDots targetId={trackId} labels={plans.map((plan) => plan.name)} tone="dark" />
    </div>
  );
}

/** Sectie "Maandpakketten" (1920 x 1714): onderhoud en hosting, en lokale SEO. */
export function MonthlyPlans() {
  return (
    <DarkSection
      id="maandpakketten"
      aria-labelledby="maandpakketten-kop"
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
      <PlanGroupToggle sectionId="maandpakketten" />
      <div className="pricing-plan-groups relative mt-[49px] flex w-[1556px] flex-col gap-[99px]">
        <PlanGroup
          id="onderhoud"
          title="ONDERHOUD & HOSTING"
          note="Maandelijks opzegbaar"
          plans={MAINTENANCE_PLANS}
        />
        <PlanGroup
          id="seo"
          title="LOKALE SEO"
          note="Minimale looptijd 6 maanden"
          plans={SEO_PLANS}
        />
      </div>
    </DarkSection>
  );
}
