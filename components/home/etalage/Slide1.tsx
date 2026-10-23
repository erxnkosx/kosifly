import { CaseArtwork, websiteVisual } from "@/components/cases/CaseVisuals";
import { VISUAL_BOX } from "./DataSlide";
import { MobileSlide } from "./MobileSlide";
import { Anchor, Shell, Slot } from "./Shell";

/** Etalage 1 (Taxi Bornem): de Canva-mockups van laptop en gsm, met de uitleg links en rechts. */
const callouts = [
  {
    n: 1,
    x: 114,
    y: 353,
    t: "Een belofte in vijf seconden",
    d: "Je ziet meteen wat Taxi Bornem doet en waar.",
  },
  {
    n: 2,
    x: 114,
    y: 613,
    t: "Rit boeken in één klik",
    d: "De knop staat bovenaan en is altijd in beeld.",
  },
  {
    n: 3,
    x: 1490,
    y: 353,
    t: "Gemaakt voor de gsm",
    d: "Want daar zoeken de meeste klanten een taxi.",
  },
  { n: 4, x: 1490, y: 622, t: "WhatsApp met één tik", d: "Voor wie liever een berichtje stuurt." },
];
/** Midden van het bolletje t.o.v. de ankercoördinaat (zie Anchor in Shell.tsx). */
const ANCHOR_CENTER = 6;
const anchors = websiteVisual.points.map(([x, y]) => [
  VISUAL_BOX.x + x - ANCHOR_CENTER,
  VISUAL_BOX.y + y - ANCHOR_CENTER,
]);
/** Lijn vanaf het uitlegkader (links eindigt het op x 430, rechts begint het op x 1490) naar het anker. */
const lines = callouts.map((c, i) => {
  const [ax, ay] = anchors[i].map((v) => v + ANCHOR_CENTER);
  const left = c.x < 960;
  const [sx, kx] = left ? [430, 464] : [1490, 1456];
  const y = c.y < 500 ? 400 : 660;
  return `M${sx} ${y}H${kx}L${ax.toFixed(1)} ${ay.toFixed(1)}`;
});

export function Slide1() {
  return (
    <Shell
      id="taxi-bornem"
      mobile={
        <MobileSlide
          title={
            <>
              Zo ziet een site eruit die <span className="etalage-accent">verkoopt</span>.
            </>
          }
          intro="Taxi Bornem, gebouwd door Kosifly. Dit zit erin."
          visual={<CaseArtwork visual={websiteVisual} label="Taxi Bornem op laptop en gsm" />}
          points={callouts.map((c) => ({ title: c.t, text: c.d }))}
          primary={{ label: "Bekijk de case", href: "/projecten/taxi-bornem" }}
        />
      }
    >
      <h2 className="absolute left-[432.5px] top-[120px] whitespace-nowrap font-manrope text-[64px] font-extrabold leading-[0] tracking-[-0.5568px] text-white">
        <span className="leading-[76px]">Zo ziet een site eruit die </span>
        <span className="etalage-accent leading-[76px]">verkoopt</span>
        <span className="leading-[76px]">.</span>
      </h2>
      <p className="absolute left-[747.5px] top-[210px] whitespace-nowrap font-manrope text-[20px] font-normal leading-[30px] text-white/70">
        Taxi Bornem, gebouwd door Kosifly. Dit zit erin.
      </p>

      <div
        className="absolute"
        style={{ left: VISUAL_BOX.x, top: VISUAL_BOX.y, width: VISUAL_BOX.w, height: VISUAL_BOX.h }}
        role="img"
        aria-label="Taxi Bornem op laptop en gsm"
      >
        <websiteVisual.Visual />
      </div>

      <svg
        className="absolute left-0 top-0"
        width="1920"
        height="1120"
        viewBox="0 0 1920 1120"
        fill="none"
        aria-hidden
      >
        {lines.map((d) => (
          <path
            key={d}
            d={d}
            stroke="white"
            strokeOpacity="0.42"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      {anchors.map(([x, y]) => (
        <Anchor key={x + "-" + y} x={x} y={y} />
      ))}

      {callouts.map((c) => (
        <div
          key={c.n}
          className="absolute flex items-start gap-[14px] overflow-hidden rounded-[18px] border border-white/12 bg-black/50 py-[16px] pl-[16px] pr-[20px] shadow-[0_0_36px_rgba(130,0,18,0.45)] backdrop-blur-[10px]"
          style={{ left: c.x, top: c.y }}
        >
          <span
            className="flex size-[28px] shrink-0 items-center justify-center rounded-[14px] font-inter text-[12px] font-bold leading-[normal] text-white"
            style={{ background: "var(--brand-fill)" }}
          >
            {c.n}
          </span>
          <span className="flex flex-col items-start gap-[4px] overflow-hidden">
            <span className="whitespace-nowrap font-inter text-[16px] font-semibold leading-[normal] text-white">
              {c.t}
            </span>
            <span className="w-[236px] font-inter text-[13px] font-normal leading-[19px] text-white/62">
              {c.d}
            </span>
          </span>
        </div>
      ))}

      <Slot
        label="Case · Taxi Bornem · Live"
        live
        primary={{ label: "Bekijk de case", href: "/projecten/taxi-bornem" }}
        secondary={{ label: "Alle projecten", href: "/projecten" }}
      />
    </Shell>
  );
}
