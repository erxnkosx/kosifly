import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import {
  fmt,
  quoteToSearchParams,
  type Quote,
  type QuoteInput,
  type QuoteLine,
} from "@/lib/pricing";
import { PillButton, PriceRow } from "../shared";

const CALENDAR_ICON = "/figma/pricing/shared/calendar.svg";
const TOTAL =
  "block font-geist text-[44px] font-extrabold leading-[normal] tracking-[-1.76px] text-white";

/** In het ontwerp zijn extra's iets zachter dan pakket en opstart. */
const LABEL_TONE: Record<QuoteLine["kind"], string> = {
  pakket: "text-white/80",
  extra: "text-[#bfbfbf]",
  maatwerk: "text-white/80",
  opstart: "text-white/80",
  maandelijks: "text-white/80",
};

function LineItems({ lines }: { lines: QuoteLine[] }) {
  if (lines.length === 0) return null;
  return (
    <dl className="flex w-full flex-col gap-[16px]">
      {lines.map((line) => (
        <PriceRow
          key={line.label}
          label={line.label}
          price={
            <>
              {line.kind === "maatwerk" ? "vanaf " : ""}€ {fmt(line.price)}
            </>
          }
          tag={line.bundled ? "Kosifly-site" : undefined}
          labelClassName={LABEL_TONE[line.kind]}
        />
      ))}
    </dl>
  );
}

type QuoteSummaryProps = { quote: QuoteInput; result: Quote };

export function QuoteSummary({ quote, result }: QuoteSummaryProps) {
  const params = quoteToSearchParams(quote);
  params.set("tab", "offerte");

  return (
    <aside
      aria-labelledby="prijsindicatie-titel"
      className="flex w-[520px] shrink-0 flex-col items-start gap-[16px] self-stretch rounded-[20px] bg-[linear-gradient(127.733deg,var(--dark-card-gradient-stops))] px-[40px] py-[44px]"
    >
      <h3
        id="prijsindicatie-titel"
        className="font-orbitron text-[11px] font-medium uppercase leading-[normal] tracking-[2.42px] text-white/70"
      >
        Je prijsindicatie
      </h3>
      <p className="font-inter text-[14px] font-medium leading-[17px] text-white/70">Eenmalig</p>
      <output className={TOTAL}>
        {result.hasMaatwerk ? (
          <>
            Prijs na analyse
            <span className="mt-[4px] block font-inter text-[15px] font-semibold leading-[18px] tracking-normal text-white/80">
              Vanaf € {fmt(result.from)}
            </span>
          </>
        ) : result.once > 0 ? (
          <>
            <span className="whitespace-nowrap">
              € <AnimatedNumber value={result.once} format={fmt} />
            </span>{" "}
            <span className="whitespace-nowrap">
              – € <AnimatedNumber value={result.high} format={fmt} />
            </span>
          </>
        ) : (
          "—"
        )}
      </output>
      <LineItems lines={result.lines} />
      <hr className="h-px w-full border-0 bg-white/15" />
      <p className="font-inter text-[14px] font-medium leading-[17px] text-white/70">Per maand</p>
      <output className={TOTAL}>
        {result.monthly > 0 ? (
          <>
            € <AnimatedNumber value={result.monthly} format={fmt} />
          </>
        ) : (
          "—"
        )}
      </output>
      <LineItems lines={result.monthlyLines} />
      <hr className="h-px w-full border-0 bg-white/15" />
      {result.delivery && (
        <p className="flex items-center gap-[10px] font-inter text-[15px] font-semibold leading-[18px] text-white">
          <span className="relative size-[19.2px] shrink-0">
            <img
              src={CALENDAR_ICON}
              alt=""
              width={16}
              height={16.8}
              className="absolute left-[1.6px] top-[1.2px] h-[16.8px] w-[16px] max-w-none"
            />
          </span>
          Levering in ongeveer {result.delivery}
        </p>
      )}
      <div className="min-h-px w-[10px] flex-1" />
      <PillButton
        href={`/contact?${params}`}
        tone="white"
        className="w-full py-[17px] text-[16px] leading-[19px] transition-shadow hover:shadow-[0_0_30px_rgba(232,51,79,0.55)]"
      >
        Vraag deze offerte aan
      </PillButton>
      <p className="w-full font-inter text-[12px] leading-[15px] text-white/55">
        Je keuzes gaan mee naar het contactformulier. Indicatie excl. 21 % btw, niet bindend.
      </p>
    </aside>
  );
}
