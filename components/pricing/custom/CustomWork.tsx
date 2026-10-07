import {
  Accent,
  CheckList,
  GradientIconTile,
  LightSection,
  ORBITRON_LABEL,
  PillButton,
  SectionHeading,
} from "../shared";
import { OFFERS, type Offer } from "./CustomWork.data";

function OfferCard({ offer }: { offer: Offer }) {
  const { title, description, glyph, priceLabel, price, priceNote, entry, included, cta } = offer;

  return (
    <article className="flex h-[689px] w-[764px] shrink-0 flex-col items-start gap-[18px] overflow-clip rounded-[24px] bg-[linear-gradient(145.927deg,var(--dark-card-gradient-stops))] p-[44px] shadow-[0_0_60px_rgba(130,0,18,0.45)]">
      <GradientIconTile glyph={glyph} glyphBox={24} className="size-[52px] rounded-[14px]" />
      <h3 className="whitespace-nowrap font-manrope text-[30px] font-extrabold leading-[normal] tracking-[-0.261px] text-white">
        {title}
      </h3>
      <p className="w-full font-manrope text-[17px] leading-[25px] text-white/75">{description}</p>
      <p className={`${ORBITRON_LABEL.small} text-white/60`}>{priceLabel}</p>
      <p className="whitespace-nowrap font-geist text-[48px] font-extrabold leading-[normal] tracking-[-1.92px] text-white">
        {price}
      </p>
      <p className="whitespace-nowrap font-inter text-[13px] leading-[normal] text-white/60">
        {priceNote}
      </p>

      <div className="flex w-full flex-col gap-[6px] rounded-[16px] border border-white/14 bg-white/8 px-[24px] py-[22px]">
        <p className={`${ORBITRON_LABEL.small} text-[#ff8c9e]`}>{entry.label}</p>
        <div className="flex w-full items-center justify-between whitespace-nowrap text-white">
          <p className="font-inter text-[18px] font-semibold leading-[22px]">{entry.title}</p>
          <p className="font-manrope text-[22px] font-extrabold leading-[normal]">{entry.price}</p>
        </div>
        <p className="w-full font-inter text-[14px] leading-[normal] text-white/70">{entry.note}</p>
      </div>

      <CheckList
        items={included}
        tone="onDark"
        className="w-full gap-[11px]"
        itemClassName="text-[15px] leading-[18px] text-white/92"
      />

      <PillButton
        href={cta.href}
        tone="white"
        splitArrow
        className="px-[26px] py-[15px] text-[15px] leading-[18px]"
      >
        {cta.label}
      </PillButton>
    </article>
  );
}

/** Sectie "Maatwerk" (1920 x 1189): web apps en AI, elk met een vaste instapprijs. */
export function CustomWork() {
  return (
    <LightSection id="maatwerk" height={1189} className="overflow-clip">
      <SectionHeading
        eyebrow="Maatwerk"
        title={
          <>
            Software en AI <Accent>op maat</Accent>.
          </>
        }
        intro="Elk project is anders. Daarom krijg je hier een vaste prijs na een korte analyse, zodat je vooraf weet waar je aan toe bent."
      />
      <div data-reveal-group className="mt-[70px] flex gap-[28px] pl-[182px]">
        {OFFERS.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
    </LightSection>
  );
}
