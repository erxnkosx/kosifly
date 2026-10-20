import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { fmt, type Quote } from "@/lib/pricing";
import { BtnArrow } from "@/components/ui/BtnArrow";

/**
 * Meelopend totaal onderaan de keuzes (alleen op mobiel): blijft onderaan het scherm plakken terwijl je de
 * stappen doorloopt, tot de volledige prijsindicatie in beeld komt. Verborgen op desktop via mobile-pricing.css.
 */
export function QuoteMobileBar({ result }: { result: Quote }) {
  return (
    <div className="quote-mobile-bar">
      <div className="quote-mobile-bar-values">
        <span className="quote-mobile-bar-label">Eenmalig</span>
        <strong>
          {result.hasMaatwerk ? (
            <>Vanaf € {fmt(result.from)}</>
          ) : result.once > 0 ? (
            <>
              € <AnimatedNumber value={result.once} format={fmt} /> –{" "}
              <AnimatedNumber value={result.high} format={fmt} />
            </>
          ) : (
            "—"
          )}
        </strong>
        {result.monthly > 0 && (
          <span className="quote-mobile-bar-monthly">
            + € <AnimatedNumber value={result.monthly} format={fmt} /> / maand
          </span>
        )}
      </div>
      <a href="#prijsindicatie-titel" className="quote-mobile-bar-link">
        Bekijk <BtnArrow glyph="↓" />
      </a>
    </div>
  );
}
