import type { ReactNode } from "react";
import Link from "next/link";
import { Artwork } from "@/components/ui/Artwork";
import { Fig, type FigNode } from "../Fig";
import type { EtalageData } from "./DataSlide";

function textLayers(node: FigNode): string[] {
  return node.t === "T"
    ? [(node.s ?? []).map((segment) => segment[0]).join("")]
    : (node.k2 ?? []).flatMap(textLayers);
}

export function MobileSlide({
  title,
  intro,
  visual,
  points,
  href,
  cta,
  secondaryHref = "/projecten",
  secondaryLabel = "Alle projecten",
}: {
  title: ReactNode;
  intro: string;
  visual: ReactNode;
  points: { title: string; text: string }[];
  href: string;
  cta: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="etalage-mobile">
      <span className="section-eyebrow">DE ETALAGE</span>
      <h2>{title}</h2>
      <p>{intro}</p>
      <div className="etalage-mobile-visual">{visual}</div>
      <ol>
        {points.map((point, index) => (
          <li key={point.title}>
            <span aria-hidden="true">{index + 1}</span>
            <div>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="button-row">
        <Link href={href} className="button white">
          {cta} →
        </Link>
        <Link href={secondaryHref} className="etalage-secondary">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

export function DataMobileSlide({ data, id }: { data: EtalageData; id: string }) {
  const slot = textLayers(data.slot);
  const isCase = id === "project-2";
  const isReport = id === "project-5";
  return (
    <MobileSlide
      title={data.kop.s?.map((segment, index) => (
        <span key={index} style={{ color: String(segment[4]) }}>
          {segment[0]}
        </span>
      ))}
      intro={textLayers(data.intro).join(" ")}
      visual={
        <Artwork
          width={data.beeld.w}
          height={data.beeld.h}
          label={textLayers(data.intro).join(" ")}
        >
          <Fig node={{ ...data.beeld, x: 0, y: 0 }} />
        </Artwork>
      }
      points={data.call.map((call) => {
        const [, title, text] = textLayers(call);
        return { title, text };
      })}
      href={isCase ? "/projecten/taxi-bornem" : isReport ? "/contact?dienst=Onderhoud" : "/contact"}
      cta={slot[1].replace(" -->", "")}
      secondaryHref={isReport ? "/prijzen#maandpakketten" : "/projecten"}
      secondaryLabel={slot[2]}
    />
  );
}
