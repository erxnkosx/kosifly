import { Artwork } from "@/components/ui/Artwork";
const imgImage14 = "/figma/projects/8aa05.png";
const imgImage22 = "/figma/projects/4cd9a.png";
const imgGloed = "/figma/projects/ba1f3.svg";
const imgEllipse1 = "/figma/projects/193af.svg";
export function TaxiCardScene() {
  return (
    <Artwork width={852} height={540}>
      <div
        className="h-[540px] overflow-clip relative shrink-0 w-full"
        style={{
          backgroundImage:
            "linear-gradient(154.5235731576027deg, rgb(0, 0, 0) 14.286%, rgb(151, 3, 3) 50%, rgb(0, 0, 0) 85.714%)",
        }}
      >
        <div className="absolute h-[420px] left-[76px] top-[70px] w-[700px]">
          <div className="absolute inset-[-28.57%_-17.14%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgGloed}
            />
          </div>
        </div>
        <div className="absolute h-[450px] left-[73px] top-[55px] w-[705.841px]">
          <div className="absolute aspect-[702.4921875/522.7623901367188] left-0 right-[18.57%] shadow-[0px_0px_175.234px_0.701px_rgba(0,0,0,0.3)] top-[11.21px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage14}
            />
          </div>
          <div className="absolute h-[450px] left-[499.07px] top-0 w-[206.776px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage22}
            />
          </div>
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[8px] items-center left-[28px] overflow-clip pl-[12px] pr-[14px] py-[8px] rounded-[30px] top-[28px]">
          <div className="relative shrink-0 size-[7px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse1}
            />
          </div>
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.95)] tracking-[2.2px] whitespace-pre">{`PERSONENVERVOER  ·  LIVE`}</p>
        </div>
      </div>
    </Artwork>
  );
}
