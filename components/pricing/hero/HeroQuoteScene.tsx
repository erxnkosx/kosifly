import { GradientIconTile, PriceRow } from "../shared";
import {
  QUOTE_MONTHLY_ROWS,
  QUOTE_ONCE_ROWS,
  STATUS_CHIPS,
  type QuoteRowData,
  type StatusChipData,
} from "./PricingHero.data";

/** Figma-schaduw die ook door een doorschijnend vlak heen zichtbaar is: de vorm, vervaagd, achter het vlak. */
function Glow({ className }: { className: string }) {
  return <span aria-hidden className={`absolute inset-0 ${className}`} />;
}

function QuoteRows({
  rows,
  labelClassName,
}: {
  rows: readonly QuoteRowData[];
  labelClassName: string;
}) {
  return (
    <dl className="flex flex-col gap-[14px]">
      {rows.map((row) => (
        <PriceRow key={row.label} {...row} labelClassName={labelClassName} />
      ))}
    </dl>
  );
}

function QuoteTotal({ label, price }: Pick<QuoteRowData, "label" | "price">) {
  return (
    <dl className="flex items-center justify-between">
      <dt className="text-[16px] font-semibold leading-[19px] text-white">{label}</dt>
      <dd className="mr-[2.5px] font-geist text-[34px] font-extrabold tracking-[-1.02px] text-white">
        {price}
      </dd>
    </dl>
  );
}

function QuoteDivider() {
  return <hr className="h-px w-full border-0 bg-white/12" />;
}

function QuoteCard() {
  return (
    <div className="absolute left-[120px] top-[40px] w-[520px]">
      <Glow className="translate-y-[30px] rounded-[24px] bg-black/50 blur-[30px]" />
      <Glow className="rounded-[24px] bg-[rgba(153,5,20,0.5)] blur-[40px]" />
      <div className="relative flex flex-col gap-[14px] rounded-[24px] border border-white/12 bg-black/62 px-[32px] py-[30px] backdrop-blur-[15px]">
        <div className="flex items-center justify-between text-[11px]">
          <p className="font-orbitron font-medium tracking-[2.42px] text-white">JE VOORSTEL</p>
          <p className="font-bold tracking-[1.1px] text-white/50">K O S I F L Y</p>
        </div>
        <QuoteRows rows={QUOTE_ONCE_ROWS} labelClassName="text-[#bbb]/80" />
        <QuoteDivider />
        <QuoteTotal label="Eenmalig" price="€ 1.550" />
        <QuoteDivider />
        <QuoteRows rows={QUOTE_MONTHLY_ROWS} labelClassName="text-white/80" />
        <QuoteTotal label="Per maand" price="€ 224" />
        <p className="flex items-center gap-[8px] font-orbitron text-[10px] font-medium tracking-[2.2px] whitespace-pre text-white/70">
          <img src="/figma/pricing/hero/fcbd4.svg" width={18} height={18} alt="" />
          {"VASTE PRIJS  ·  EXCL. BTW"}
        </p>
      </div>
    </div>
  );
}

function StatusChip({ title, text, status, glyph, className }: StatusChipData) {
  return (
    <div className={`absolute h-[84px] ${className}`}>
      <Glow className="rounded-[18px] bg-[rgba(130,0,18,0.55)] blur-[20px]" />
      <div className="relative flex h-full items-center gap-[18px] rounded-[18px] border border-white/12 bg-black/60 py-[18px] pl-[22px] pr-[24px] backdrop-blur-[12px]">
        <GradientIconTile glyph={glyph} glyphBox={24} className="size-[48px] rounded-[12px]" />
        <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
          <p className="text-[20px] font-semibold text-white">{title}</p>
          <p className="text-[15px] leading-[18px] text-white/62">{text}</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="font-orbitron text-[11px] font-medium tracking-[2.42px] text-white/60">
            {status}
          </span>
          <img src="/figma/pricing/hero/740c0.svg" width={24} height={24} alt="" />
        </div>
      </div>
    </div>
  );
}

/** Hero-scène "Je voorstel" (820 × 760): prijsvoorstel-kaart met twee statuschips. Wordt in een `Artwork` geschaald. */
export function HeroQuoteScene() {
  return (
    <div className="relative h-[760px] w-[820px]">
      <QuoteCard />
      {STATUS_CHIPS.map((chip) => (
        <StatusChip key={chip.title} {...chip} />
      ))}
    </div>
  );
}
