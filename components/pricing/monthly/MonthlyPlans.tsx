import type { ReactNode } from "react";
import { Accent, DarkSection, SectionHeading, SwipeDots } from "../shared";
import { MAINTENANCE_PLANS, SEO_PLANS, type Plan } from "./MonthlyPlans.data";
import { PlanCard } from "./PlanCard";
import { PlanGroupToggle, type PlanGroupId } from "./PlanGroupToggle";

function PlanGroup({
  id,
  title,
  note,
  aside,
  plans,
}: {
  id: PlanGroupId;
  title: string;
  note: string;
  aside?: ReactNode;
  plans: readonly Plan[];
}) {
  const trackId = `plans-${id}-track`;
  return (
    <div className="pricing-plan-group" data-group-id={id}>
      <div data-reveal className="mb-[27px] flex items-center justify-between">
        {/* Alleen voor schermlezers: de schakelaar en de notitie maken de groep al zichtbaar duidelijk. */}
        <h3 className="sr-only">{title}</h3>
        <p className="font-inter text-[15px] leading-[18px] text-white/60">{note}</p>
        {aside}
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

/**
 * Sectie "Maandpakketten" (1920 x 1714): onderhoud en hosting voor websites, en lokale SEO. Onderhoud voor
 * software op maat heeft eigen pakketten in de sectie Maatwerk (#software-hosting).
 */
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
        intro="Vaste maandprijzen voor het onderhoud van je website en voor lokale SEO, zonder kleine lettertjes. Alle bedragen zijn exclusief btw."
      />
      <PlanGroupToggle sectionId="maandpakketten" />
      <div className="pricing-plan-groups relative mt-[49px] flex w-[1556px] flex-col gap-[99px]">
        <PlanGroup
          id="onderhoud"
          title="Onderhoud & hosting voor websites"
          note="Maandelijks opzegbaar"
          aside={
            <a href="#software-hosting" className="pricing-plan-switch">
              Software op maat? Bekijk het software-onderhoud <span aria-hidden="true">→</span>
            </a>
          }
          plans={MAINTENANCE_PLANS}
        />
        <PlanGroup
          id="seo"
          title="Lokale SEO"
          note="Minimale looptijd 6 maanden"
          plans={SEO_PLANS}
        />
      </div>
    </DarkSection>
  );
}
