import { Artwork } from "@/components/ui/Artwork";
import { PscDesktop, PscPhone } from "../psc/PscDevices";

/**
 * Beelden van de case PSC Open Huis, in dezelfde maten en kaders als de andere cases:
 * hero (1180 × 752), projectkaart (852 × 540) en drie stappen (920 × 580) met schermen uit het Figma-ontwerp.
 */

const BACKDROP =
  "linear-gradient(154.69deg, rgb(0, 0, 0) 14.286%, rgb(151, 3, 3) 50%, rgb(0, 0, 0) 85.714%)";

/** Hero: het dashboard met de gsm-versie ervoor (zelfde verhouding als laptop + telefoon bij Taxi Bornem). */
export function PscHeroScene() {
  return (
    <Artwork width={1180} height={752}>
      <div className="relative h-[752px] w-[1180px]">
        <PscDesktop width={940} height={640} style={{ left: 0, top: 46 }} />
        <PscPhone scale={1.5} style={{ left: 835, top: 26 }} />
      </div>
    </Artwork>
  );
}

/** Projectkaart: donker kader met gloed, dashboard en gsm. */
export function PscCardScene() {
  return (
    <Artwork width={852} height={540}>
      <div
        className="relative h-[540px] w-[852px] overflow-clip"
        style={{ backgroundImage: BACKDROP }}
      >
        <div className="absolute left-[76px] top-[70px] h-[420px] w-[700px]">
          <div className="absolute inset-[-28.57%_-17.14%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block size-full max-w-none"
              src="/figma/projects/ba1f3.svg"
            />
          </div>
        </div>
        <PscDesktop width={600} height={400} style={{ left: 70, top: 72 }} />
        <PscPhone scale={0.92} style={{ left: 585, top: 62 }} />
        {/* Label zoals op de andere projectkaarten. */}
        <div className="absolute left-[28px] top-[28px] flex items-center gap-[8px] overflow-clip rounded-[30px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.08)] py-[8px] pl-[12px] pr-[14px] backdrop-blur-[7px]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            width={7}
            height={7}
            className="block size-[7px] shrink-0"
            src="/figma/projects/193af.svg"
          />
          <span className="whitespace-pre font-orbitron text-[10px] font-medium leading-[normal] tracking-[2.2px] text-[rgba(255,255,255,0.95)]">{`SENIORENWERKING  ·  LIVE`}</span>
        </div>
      </div>
    </Artwork>
  );
}

/** Stap: een scherm uit het ontwerp in een wit kader, zoals de stappen van de andere cases. */
function ScreenScene({ src }: { src: string }) {
  return (
    <Artwork width={920} height={580}>
      <div
        className="relative h-[580px] w-[920px] overflow-clip rounded-[28px] shadow-[0px_20px_50px_0px_rgba(130,0,18,0.3)]"
        style={{ backgroundImage: BACKDROP }}
      >
        <div className="absolute left-[80px] top-[60px] h-[460px] w-[760px]">
          <div className="absolute inset-[-26.09%_-15.79%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block size-full max-w-none"
              src="/figma/projects/7414f.svg"
            />
          </div>
        </div>
        <div className="absolute left-[70px] top-[37px] h-[507px] w-[780px] overflow-hidden rounded-[14px] border border-white/25 bg-white shadow-[0px_24px_50px_0px_rgba(0,0,0,0.5)]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="size-full max-w-none object-cover object-top"
            src={src}
          />
        </div>
      </div>
    </Artwork>
  );
}

export function PscMembersScene() {
  return <ScreenScene src="/images/psc/scherm-leden.webp" />;
}

export function PscCalendarScene() {
  return <ScreenScene src="/images/psc/scherm-kalender.webp" />;
}

export function PscSignupScene() {
  return <ScreenScene src="/images/psc/scherm-inschrijfmoment.webp" />;
}
