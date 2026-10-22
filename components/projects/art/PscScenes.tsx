import { Artwork } from "@/components/ui/Artwork";

/**
 * Stappen van de case PSC Open Huis (920 × 580): schermen uit het Figma-ontwerp.
 * Hero en projectkaart tonen de monitormockup uit Canva (zie scenes.ts).
 */

const BACKDROP =
  "linear-gradient(154.69deg, rgb(0, 0, 0) 14.286%, rgb(151, 3, 3) 50%, rgb(0, 0, 0) 85.714%)";

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
