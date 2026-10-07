import { fmt } from "@/lib/pricing";
import { calculatorHref } from "../calculator/calculatorHref";
import { WEBSITE_PACKAGES, type WebsitePackage } from "../websites/Websites.data";
import {
  Accent,
  CheckIcon,
  LightSection,
  MostChosen,
  ORBITRON_LABEL,
  PillButton,
  SectionHeading,
} from "../shared";
import { type Cell, COMPARISON_ROWS } from "./Comparison.data";

/** Scheidingslijn bovenaan een rij; als schaduw getekend zodat de rijhoogte 58px blijft. */
const ROW_LINE = "shadow-[inset_0_1px_0_#ebebeb]";

function CellValue({ cell }: { cell: Cell }) {
  if (cell === null) {
    return (
      <>
        <span aria-hidden className="text-[16px] text-[#bfbfbf]">
          —
        </span>
        <span className="sr-only">Niet inbegrepen</span>
      </>
    );
  }
  if (cell === true) return <CheckIcon tone="brandLarge" alt="Ja" />;
  if (typeof cell === "string") return cell;
  return (
    <>
      <CheckIcon tone="brandLarge" alt="Ja" />
      <span className="text-[14px]">{cell.check}</span>
    </>
  );
}

function PackageHeading({ pkg }: { pkg: WebsitePackage }) {
  return (
    <th scope="col" className="relative pt-[34px] text-center align-top">
      {pkg.featured && (
        <MostChosen
          variant="popularCompact"
          className="absolute left-1/2 top-[8px] -translate-x-1/2"
        />
      )}
      <span className="block font-manrope text-[24px] font-extrabold tracking-[-0.2088px] text-ink">
        {pkg.title}
      </span>
      <span className="mt-[3px] block font-inter text-[14px] font-medium text-grey">
        vanaf € {fmt(pkg.price)}
      </span>
    </th>
  );
}

function ChooseButton({ pkg }: { pkg: WebsitePackage }) {
  const style = pkg.featured ? "h-[43px] px-[22px]" : "h-[46px] px-[23.5px]";

  return (
    <PillButton
      href={calculatorHref({ pakket: pkg.id })}
      tone={pkg.featured ? "brand" : "outline"}
      radius={30}
      className={`mx-auto w-fit text-[14px] ${style}`}
    >
      {`Kies ${pkg.title}`}
    </PillButton>
  );
}

/** Sectie "Vergelijking" (1920 x 1500): de websitepakketten naast elkaar in een tabel. */
export function Comparison() {
  return (
    <LightSection
      id="vergelijking"
      aria-labelledby="vergelijking-kop"
      height={1500}
      className="leading-[normal]"
    >
      <SectionHeading
        eyebrow="VERGELIJKING"
        title={
          <>
            Alles <Accent>naast elkaar</Accent>.
          </>
        }
        titleId="vergelijking-kop"
      />
      <div
        data-reveal
        className="relative mx-[182px] mt-[70px] h-[1090px] w-[1556px] overflow-clip rounded-[24px] bg-white drop-shadow-[0_0_40px_rgba(130,0,18,0.22)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[24px] after:border after:border-brand/18"
      >
        <div
          aria-hidden
          className="absolute left-[889px] top-0 h-full w-[333px] bg-[rgba(242,210,214,0.35)]"
        />
        <table className="relative w-full table-fixed border-separate border-spacing-0 [&_tr>:last-child]:pr-px">
          <caption className="sr-only">Vergelijking van de websitepakketten</caption>
          <colgroup>
            <col className="w-[556px]" />
            <col className="w-[333px]" />
            <col className="w-[333px]" />
            <col />
          </colgroup>
          <thead>
            <tr className="h-[120px]">
              <th
                scope="col"
                className={`pl-[40px] pt-[52px] text-left align-top text-brand ${ORBITRON_LABEL.medium}`}
              >
                WAT JE KRIJGT
              </th>
              {WEBSITE_PACKAGES.map((pkg) => (
                <PackageHeading key={pkg.id} pkg={pkg} />
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map(({ label, cells }) => (
              <tr key={label} className="odd:bg-[rgba(249,249,249,0.8)]">
                <th
                  scope="row"
                  className={`h-[58px] pl-[40px] text-left font-inter text-[15px] font-semibold text-ink ${ROW_LINE}`}
                >
                  {label}
                </th>
                {cells.map((cell, column) => (
                  <td key={WEBSITE_PACKAGES[column].id} className={ROW_LINE}>
                    <div className="flex items-center justify-center gap-[8px] font-inter text-[15px] text-[#404040]">
                      <CellValue cell={cell} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="h-[100px]">
              <td
                className={`pl-[40px] pt-[40px] align-top font-inter text-[13px] text-grey ${ROW_LINE}`}
              >
                Prijzen excl. 21 % btw
              </td>
              {WEBSITE_PACKAGES.map((pkg) => (
                <td key={pkg.id} className={`pt-[24px] align-top ${ROW_LINE}`}>
                  <ChooseButton pkg={pkg} />
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </LightSection>
  );
}
