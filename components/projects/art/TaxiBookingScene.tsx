import { Artwork } from "@/components/ui/Artwork";
const imgImage24 = "/figma/projects/4ebb5.png";
const imgGloed1 = "/figma/projects/7414f.svg";
export function TaxiBookingScene() {
  return (
    <Artwork width={920} height={580}>
      <div
        className="relative h-[580px]  overflow-clip rounded-[28px] shadow-[0px_20px_50px_0px_rgba(130,0,18,0.3)]  w-[920px]"
        style={{
          backgroundImage:
            "linear-gradient(154.69399348021966deg, rgb(0, 0, 0) 14.286%, rgb(151, 3, 3) 50%, rgb(0, 0, 0) 85.714%)",
        }}
      >
        <div className="absolute h-[460px] left-[80px] top-[60px] w-[760px]">
          <div className="absolute inset-[-26.09%_-15.79%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgGloed1}
            />
          </div>
        </div>
        <div className="absolute h-[518.636px] left-[313px] top-[31px] w-[293.735px]">
          <div className="absolute bg-[rgba(255,255,255,0.06)] border-[0.756px] border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-start left-0 overflow-clip px-[13.611px] py-[7.562px] rounded-[30.247px] top-0">
            <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[8.318px] text-white tracking-[1.8299px] whitespace-pre">{`3 STAPPEN  ·  GEEN TELEFOONTJE NODIG`}</p>
          </div>
          <div className="absolute h-[470px] left-[18.35px] top-[48.64px] w-[257.031px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img
                loading="lazy"
                decoding="async"
                alt=""
                className="absolute h-full left-[-139.48%] max-w-none top-[0.03%] w-[274.29%]"
                src={imgImage24}
              />
            </div>
          </div>
        </div>
      </div>
    </Artwork>
  );
}
