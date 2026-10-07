import { Artwork } from "@/components/ui/Artwork";
const imgMockupPrimelabs = "/figma/projects/309ed.png";
const imgGloed = "/figma/projects/ba1f3.svg";
const imgEllipse2 = "/figma/projects/0d859.svg";
export function PrimeCardScene() {
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
        <div className="absolute h-[450px] left-[89px] top-[55px] w-[675px]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgMockupPrimelabs}
          />
        </div>
        <div className="absolute backdrop-blur-[7px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[8px] items-center left-[28px] overflow-clip pl-[12px] pr-[14px] py-[8px] rounded-[30px] top-[28px]">
          <div className="relative shrink-0 size-[7px]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgEllipse2}
            />
          </div>
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.95)] tracking-[2.2px] whitespace-nowrap">
            DRONE-INSPECTIES
          </p>
        </div>
      </div>
    </Artwork>
  );
}
