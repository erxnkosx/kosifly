import { MobileSlide } from "./MobileSlide";
import { Anchor, Shell } from "./Shell";

/** Etalage 1 (Taxi Bornem): mockup-beelden `image 14` en `image 22` komen uit public/images (export uit Figma). */
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
const anchors = [
  [736.73, 461.02],
  [693.82, 546.19],
  [1264.72, 482],
  [1264.72, 619.2],
];

export function Slide1() {
  return (
    <Shell
      id="taxi-bornem"
      mobile={
        <MobileSlide
          title={
            <>
              Zo ziet een site eruit die <span>verkoopt</span>.
            </>
          }
          intro="Taxi Bornem, gebouwd door Kosifly. Dit zit erin."
          visual={
            <img
              src="/images/etalage-laptop.png"
              width={716}
              height={533}
              alt="Taxi Bornem op laptop"
              loading="lazy"
            />
          }
          points={callouts.map((c) => ({ title: c.t, text: c.d }))}
          href="/projecten/taxi-bornem"
          cta="Bekijk de case"
        />
      }
    >
      <h2 className="absolute left-[432.5px] top-[120px] whitespace-nowrap font-manrope text-[64px] font-extrabold leading-[0] tracking-[-0.5568px] text-white">
        <span className="leading-[76px]">Zo ziet een site eruit die </span>
        <span className="leading-[76px] text-brand-soft">verkoopt</span>
        <span className="leading-[76px]">.</span>
      </h2>
      <p className="absolute left-[747.5px] top-[210px] whitespace-nowrap font-manrope text-[20px] font-normal leading-[30px] text-white/70">
        Taxi Bornem, gebouwd door Kosifly. Dit zit erin.
      </p>

      <div className="absolute left-[521px] top-[320px] h-[560px] w-[878.38px]">
        <div
          className="absolute left-0 top-[13.96px] h-[532.3px] w-[715.3px] bg-[length:100%_100%] bg-no-repeat"
          style={{
            backgroundImage: "url(/images/etalage-laptop.png)",
            filter: "drop-shadow(0 0 109px rgba(0,0,0,0.3))",
          }}
          role="img"
          aria-label="Taxi Bornem op laptop"
        />
        <div
          className="absolute left-[621.06px] top-0 h-[560px] w-[257.321px] bg-[length:100%_100%] bg-no-repeat"
          style={{ backgroundImage: "url(/images/etalage-phone.png)" }}
          role="img"
          aria-label="Taxi Bornem op gsm"
        />
      </div>

      <svg
        className="absolute left-0 top-0"
        width="1920"
        height="1120"
        viewBox="0 0 1920 1120"
        fill="none"
        aria-hidden
      >
        {[
          "M430 400H464L742.7 467",
          "M430 660H464L699.8 552.2",
          "M1490 400H1456L1270.7 488",
          "M1490 660H1456L1270.7 625.2",
        ].map((d) => (
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
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232,51,79) 14.286%, rgb(126,12,30) 85.714%)",
            }}
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

      <div className="absolute left-[632px] top-[960px] flex items-center gap-[22px] overflow-hidden">
        <div className="flex items-center gap-[10px] rounded-[30px] border border-white/16 bg-white/6 py-[12px] pl-[16px] pr-[18px]">
          <span className="size-[8px] rounded-full bg-[#1fd959] shadow-[0_0_8px_rgba(31,217,89,0.9)]" />
          <span className="whitespace-pre font-orbitron text-[11px] font-medium leading-[normal] tracking-[2.42px] text-white/90">
            {"CASE  ·  TAXI BORNEM  ·  LIVE"}
          </span>
        </div>
        <a
          href="/projecten/taxi-bornem"
          className="rounded-[40px] bg-white px-[28px] py-[16px] font-inter text-[16px] font-semibold leading-[normal] text-brand shadow-[0_0_24px_rgba(232,51,79,0.35)]"
        >
          Bekijk de case →
        </a>
        <a
          href="/projecten"
          className="font-inter text-[16px] font-semibold leading-[normal] text-white/75 underline"
        >
          Alle projecten
        </a>
      </div>
    </Shell>
  );
}
