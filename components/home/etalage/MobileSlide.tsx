import type { ReactNode } from "react";
import Link from "next/link";
import { Artwork } from "@/components/ui/Artwork";
import { Fig, type FigNode } from "../Fig";
import type { EtalageData } from "./DataSlide";
import type { SlotAction } from "./Shell";
import { BtnArrow } from "@/components/ui/BtnArrow";

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
  primary,
}: {
  title: ReactNode;
  intro: string;
  visual: ReactNode;
  points: { title: string; text: string }[];
  /** Hoofdknop, dezelfde als in de onderste balk op desktop. */
  primary: SlotAction;
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
      <div className="sbtn-row etalage-sbtns">
        <Link href={primary.href} className="sbtn sbtn-light sbtn-lg">
          {primary.label} <BtnArrow />
        </Link>
        <Link href="/projecten" className="sbtn sbtn-outline-dark sbtn-lg">
          Alle projecten
        </Link>
      </div>
    </div>
  );
}

const isWhite = (color: unknown) =>
  ["rgb(255,255,255)", "#fff", "#ffffff", "white"].includes(
    String(color).replace(/\s/g, "").toLowerCase(),
  );

export function DataMobileSlide({
  data,
  visual,
  primary,
}: {
  data: EtalageData;
  /** Eigen beeld in plaats van de Figma-lagen van data.beeld (zelfde maat). */
  visual?: ReactNode;
  primary: SlotAction;
}) {
  return (
    <MobileSlide
      title={data.kop.s?.map((segment, index) => (
        <span key={index} className={isWhite(segment[4]) ? undefined : "etalage-accent"}>
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
          {visual ?? <Fig node={{ ...data.beeld, x: 0, y: 0 }} />}
        </Artwork>
      }
      points={data.call.map((call) => {
        const [, title, text] = textLayers(call);
        return { title, text };
      })}
      primary={primary}
    />
  );
}
