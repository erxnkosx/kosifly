import {
  aiVisual,
  CASE_H,
  CASE_W,
  pscVisual,
  reportVisual,
  seoVisual,
  type CaseVisual,
} from "@/components/cases/CaseVisuals";
import { DataMobileSlide } from "./MobileSlide";
import { Fig, type FigNode } from "../Fig";
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

/**
 * Beeld per etalage: de Canva-toestellen uit components/cases/CaseVisuals.tsx in plaats van de Figma-lagen,
 * altijd in hetzelfde vak tussen de uitlegkaders (x 500–1420). De lijnen wijzen naar de punten van het beeld.
 */
const VISUALS: Record<string, CaseVisual> = {
  "project-2": seoVisual,
  "project-3": pscVisual,
  "project-4": aiVisual,
  "project-5": reportVisual,
};
export const VISUAL_BOX = { x: 500, y: 320, w: CASE_W, h: CASE_H };

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

/** Vervangt titel en tekst van een uitlegkader (de tweede en derde tekstlaag), met de stijl van de eerste segmenten. */
function retext(call: FigNode, [title, body]: [string, string]): FigNode {
  let n = 0;
  const walk = (node: FigNode): FigNode => {
    if (node.t === "T") {
      const value = [null, title, body][n++];
      return value && node.s?.[0] ? { ...node, s: [[value, ...node.s[0].slice(1)]] } : node;
    }
    return node.k2 ? { ...node, k2: node.k2.map(walk) } : node;
  };
  return walk(call);
}

function withVisual(data: EtalageData, { points, calls = {} }: CaseVisual): EtalageData {
  const beeld = { ...data.beeld, ...VISUAL_BOX };
  const anch = points.map(([x, y]) => [beeld.x + x - ANCHOR_CENTER, beeld.y + y - ANCHOR_CENTER]);
  return {
    ...data,
    beeld,
    anch,
    call: data.call.map((call, i) => (calls[i] ? retext(call, calls[i]) : call)),
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

/** Etalage 2 t/m 5: tekst en uitlegkaders uit de Figma-lagen (data/etalage-N.json), beeld uit VISUALS. */
export function DataSlide({ data: source, id }: { data: EtalageData; id: string }) {
  const visual = VISUALS[id];
  const data = visual ? withVisual(source, visual) : source;
  const Visual = visual?.Visual;
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
          role="img"
          aria-label={text(data.intro)}
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
