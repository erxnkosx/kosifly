import { fmt } from "@/lib/pricing";
import {
  Accent,
  CheckList,
  Chip,
  LightSection,
  MostChosen,
  ORBITRON_LABEL,
  PillButton,
  SectionHeading,
} from "../shared";
import { calculatorHref } from "../calculator/calculatorHref";
import { WEBSITE_PACKAGES, type WebsitePackage } from "./Websites.data";

const TONES = {
  light: {
    card: "h-[781px] border border-brand/18 bg-white drop-shadow-[0_0_20px_rgba(130,0,18,0.22)]",
    title: "text-ink",
    description: "text-grey",
    label: "text-grey",
    price: "text-ink",
    note: "text-grey",
    delivery: "pink",
    cta: "outline",
    ctaSize: "h-[54px]",
    divider: "bg-[#ebebeb]",
    heading: "text-brand",
    feature: "text-[16px] leading-[22px] text-ink/85",
    check: "brand",
  },
  featured: {
    card: "h-[780px] bg-[linear-gradient(130.521deg,var(--dark-card-gradient-stops))] drop-shadow-[0_0_30px_rgba(130,0,18,0.5)]",
    title: "text-white",
    description: "text-white/75",
    label: "text-white/70",
    price: "text-white",
    note: "text-white/60",
    delivery: "glass",
    cta: "white",
    ctaSize: "h-[51px]",
    divider: "bg-white/15",
    heading: "text-white/70",
    feature: "text-[16px] leading-[22px] text-white/92",
    check: "onDarkSoft",
  },
} as const;

/** Pakketkaart (Figma: Pakket – …). */
function PackageCard({ pkg }: { pkg: WebsitePackage }) {
  const tone = pkg.featured ? TONES.featured : TONES.light;

  return (
    <li
      className={`relative flex w-[500px] shrink-0 flex-col items-start gap-[20px] rounded-[24px] p-[40px] ${tone.card}`}
    >
      <h3 className={`font-manrope text-[30px] font-extrabold tracking-[-0.261px] ${tone.title}`}>
        {pkg.title}
      </h3>
      <p className={`w-full font-manrope text-[17px] leading-[25px] ${tone.description}`}>
        {pkg.description}
      </p>
      <div className="flex flex-col gap-[2px] whitespace-nowrap">
        <p className={`font-inter text-[14px] font-medium ${tone.label}`}>vanaf</p>
        <p className={`font-geist text-[60px] font-extrabold tracking-[-2.4px] ${tone.price}`}>
          € {fmt(pkg.price)}
        </p>
        <p className={`font-inter text-[13px] ${tone.note}`}>eenmalig · excl. btw</p>
      </div>
      <Chip variant={tone.delivery}>Levering in {pkg.delivery}</Chip>
      <PillButton
        href={calculatorHref({ pakket: pkg.id })}
        tone={tone.cta}
        className={`w-full text-[16px] ${tone.ctaSize}`}
      >
        {`Kies ${pkg.title}`}
      </PillButton>
      <hr className={`h-px w-full border-0 ${tone.divider}`} />
      <p className={`${ORBITRON_LABEL.small} ${tone.heading}`}>WAT ZIT ERIN</p>
      <CheckList
        items={pkg.features}
        tone={tone.check}
        className="w-full gap-[12px]"
        itemClassName={tone.feature}
      />
      {pkg.featured && (
        <MostChosen variant="popularGlow" className="absolute left-[309px] top-[44px]" />
      )}
    </li>
  );
}

/** Sectie "Websites" (1920 x 1341): drie pakketkaarten. */
export function Websites() {
  return (
    <LightSection id="websites" height={1341} className="leading-[normal]">
      <SectionHeading
        eyebrow="WEBSITES"
        title={
          <>
            Kies het pakket
            <br />
            dat bij je <Accent>past</Accent>.
          </>
        }
        titleLines={2}
        intro="Alle prijzen zijn vanaf-prijzen, exclusief btw. Je vaste prijs krijg je na een gratis gesprek."
      />
      <ul data-reveal-group className="mx-[182px] mt-[62px] flex items-start gap-[28px]">
        {WEBSITE_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </ul>
    </LightSection>
  );
}
