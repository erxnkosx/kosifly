import type { ComponentType } from "react";
import { DataMobileSlide } from "./MobileSlide";
import { Fig, type FigNode } from "../Fig";
import { PSC_POINTS, PscVisual } from "./PscVisual";
import { Anchor, Shell, Slot, type SlotAction } from "./Shell";

export type EtalageData = {
  kop: FigNode;
  intro: FigNode;
  beeld: FigNode;
  lijnen: FigNode;
  slot: FigNode;
  call: FigNode[];
  anch: number[][];
};

const dienst = (name: string) => "/contact?dienst=" + encodeURIComponent(name);

/** Doelen van de twee knoppen in de onderste balk (Figma: Slot), per etalage. */
const LINKS: Record<string, [primary: string, secondary: string]> = {
  "project-2": ["/projecten/taxi-bornem", "/projecten"],
  "project-3": ["/projecten/psc-open-huis", "/projecten"],
  "project-4": [dienst("AI & automatisaties"), "/projecten"],
  "project-5": [dienst("Onderhoud & hosting"), "/prijzen#onderhoud"],
};

type SlideOverride = {
  /** Echte screenshot in het witte kader (afbeeldingsnaam uit IMAGES in Fig.tsx). */
  screenshot?: string;
  /** Eigen beeld in plaats van de Figma-lagen; tekent op de plek en in de maat van data.beeld. */
  visual?: ComponentType;
  /** Punten op het beeld (t.o.v. linksboven van data.beeld) waar de uitlegkaders naar wijzen. */
  points?: number[][];
};

/** Etalages waarvan het beeld afwijkt van de Figma-export. */
const OVERRIDES: Record<string, SlideOverride> = {
  // Uitsnede 20 canvas-px van de linkerrand (0,661 canvas-px per bronpixel): zoekbalk, titel, profielfoto, sterrenlabel.
  "project-2": {
    screenshot: "Google-resultaat",
    points: [
      [20.4, 38.3],
      [13.1, 175.2],
      [633.2, 207.6],
      [790, 517.8],
    ],
  },
  "project-3": { visual: PscVisual, points: PSC_POINTS },
};

/** Midden van het bolletje t.o.v. de ankercoördinaat (zie Anchor in Shell.tsx). */
const ANCHOR_CENTER = 6;

/** Trekt een verbindingslijn (Figma: horizontaal stukje vanaf de uitleg, dan schuin) naar een nieuw anker. */
function retarget(line: FigNode, [ax, ay]: number[]): FigNode {
  const m = line.v?.match(/d="M([\d.]+) ([\d.]+)H([\d.]+)L[\d.]+ [\d.]+"/);
  if (!m || !line.v) return line;
  const [sx, sy, kx] = [line.x + Number(m[1]), line.y + Number(m[2]), line.x + Number(m[3])];
  const [ex, ey] = [ax + ANCHOR_CENTER, ay + ANCHOR_CENTER];
  const x = Math.min(sx, kx, ex);
  const y = Math.min(sy, ey);
  const w = Math.max(sx, kx, ex) - x;
  const h = Math.max(sy, ey) - y;
  const d = `M${sx - x} ${sy - y}H${kx - x}L${ex - x} ${ey - y}`;
  return { ...line, x, y, w, h, vb: `0 0 ${w} ${h}`, v: line.v.replace(/d="[^"]*"/, `d="${d}"`) };
}

function withOverride(data: EtalageData, { screenshot, points }: SlideOverride): EtalageData {
  let { beeld } = data;
  const [card, ...rest] = beeld.k2 ?? [];
  if (screenshot && card) {
    const shot: FigNode = { t: "F", x: 0, y: 0, w: card.w, h: card.h, f: ["IMG"], n: screenshot };
    beeld = { ...beeld, k2: [{ ...card, k2: [shot] }, ...rest] };
  }
  if (!points) return { ...data, beeld };
  const anch = points.map(([x, y]) => [beeld.x + x - ANCHOR_CENTER, beeld.y + y - ANCHOR_CENTER]);
  return {
    ...data,
    beeld,
    anch,
    // De lijnen staan in dezelfde volgorde als de ankers.
    lijnen: {
      ...data.lijnen,
      k2: data.lijnen.k2?.map((line, i) => (anch[i] ? retarget(line, anch[i]) : line)),
    },
  };
}

const ACCENT = "rgb(242,74,99)";

/** Titel met het accentwoord als markeerstreep (zelfde regel als de andere donkere secties). */
function withAccent(kop: FigNode): FigNode {
  return {
    ...kop,
    s: kop.s?.map((seg) =>
      seg[4] === ACCENT
        ? [...seg.slice(0, 4), "rgb(255,255,255)", ...seg.slice(5, 9), "etalage-accent"]
        : seg,
    ),
  };
}

const text = (node: FigNode): string =>
  node.t === "T"
    ? (node.s ?? [])
        .map((seg) => String(seg[0]).replace("-->", ""))
        .join("")
        .trim()
    : (node.k2 ?? []).map(text).join("").trim();

/** "VOORBEELDPROJECT  ·  AANNEMER" → "Voorbeeldproject · Aannemer"; delen met kleine letters (namen) blijven staan. */
const sentenceCase = (value: string) =>
  value
    .split("·")
    .map((part) =>
      part.trim() === part.trim().toUpperCase()
        ? part
            .trim()
            .toLowerCase()
            .replace(/^./, (c) => c.toUpperCase())
        : part.trim(),
    )
    .join(" · ");

/** Etalage 2 t/m 5: gerenderd uit de Figma-lagen (data/etalage-N.json), met de afwijkingen uit OVERRIDES. */
export function DataSlide({ data: source, id }: { data: EtalageData; id: string }) {
  const override = OVERRIDES[id];
  const data = override ? withOverride(source, override) : source;
  const Visual = override?.visual;
  const { beeld } = data;
  // Slot = [label, primaire knop, tekstlink] in Figma; hier als echte knoppen.
  const [badge, primaryNode, secondaryNode] = data.slot.k2 ?? [];
  const hrefs = LINKS[id] ?? ["/projecten", "/projecten"];
  const label = badge ? sentenceCase(text(badge)) : "";
  const primary: SlotAction = { label: primaryNode ? text(primaryNode) : "", href: hrefs[0] };
  const secondary: SlotAction = { label: secondaryNode ? text(secondaryNode) : "", href: hrefs[1] };
  return (
    <Shell
      id={id}
      mobile={<DataMobileSlide data={data} visual={Visual && <Visual />} primary={primary} />}
    >
      <Fig node={withAccent(data.kop)} />
      <Fig node={data.intro} />
      {Visual ? (
        <div
          className="absolute"
          style={{ left: beeld.x, top: beeld.y, width: beeld.w, height: beeld.h }}
        >
          <Visual />
        </div>
      ) : (
        <Fig node={beeld} />
      )}
      <Fig node={data.lijnen} />
      {data.anch.map(([x, y]) => (
        <Anchor key={x + "-" + y} x={x} y={y} />
      ))}
      {data.call.map((c, i) => (
        <Fig key={i} node={c} />
      ))}
      <Slot label={label} live={/live/i.test(label)} primary={primary} secondary={secondary} />
    </Shell>
  );
}
