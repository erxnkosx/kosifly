import { Artwork } from "@/components/ui/Artwork";
const imgUitsnede = "/figma/projects/307cd.png";
const imgGloed1 = "/figma/projects/7414f.svg";
export function PrimeInspectionScene() {
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
        <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid h-[498px] left-[130px] rounded-[14px] shadow-[0px_24px_50px_0px_rgba(0,0,0,0.5)] top-[41px] w-[660px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute h-[224.83%] left-[-75.52%] max-w-none top-[-65.52%] w-[254.69%]"
              src={imgUitsnede}
            />
          </div>
        </div>
      </div>
    </Artwork>
  );
}
