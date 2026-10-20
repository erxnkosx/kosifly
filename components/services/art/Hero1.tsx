import { RegionMap } from "./RegionMap";
const assetPathPrefix = "/figma/seo-hero";
const imgGroup = `${assetPathPrefix}/193ab.svg`;
const imgFrame1 = `${assetPathPrefix}/ef241.svg`;
const imgFrame2 = `${assetPathPrefix}/4a1a7.svg`;
const imgVinkje = `${assetPathPrefix}/740c0.svg`;

function IconMapPin({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / map-pin">
      <div className="absolute inset-[12.5%_20.83%_10.42%_20.83%]" data-name="Group">
        <div className="absolute inset-[-5.41%_-7.14%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

export default function Hero1() {
  return (
    <div className="relative size-full" data-name="Hero-scène – Lokaal gevonden">
      <RegionMap className="absolute left-[49px] top-[57px]" />
      <div
        className="absolute bg-white content-stretch flex flex-col gap-[6px] h-[301px] items-start left-[-119px] overflow-clip pb-[10px] pt-[18px] rounded-[18px] shadow-[0px_24px_50px_0px_rgba(0,0,0,0.45)] top-[511px] w-[440px]"
        data-name="Lokaal pakket"
      >
        <div
          className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] not-italic overflow-clip pb-[6px] px-[20px] relative shrink-0 w-full whitespace-nowrap"
          data-name="Kop"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[#111] text-[15px]">
            Elektricien in de buurt
          </p>
          <p className="font-inter font-medium relative shrink-0 text-[#6b6b6b] text-[12px]">
            Kaartweergave
          </p>
        </div>
        <div
          className="bg-[#fff1f3] border-[rgba(232,51,79,0.5)] border-l-3 border-solid content-stretch flex gap-[14px] items-center overflow-clip px-[20px] py-[12px] relative shrink-0 w-full"
          data-name="Resultaat 1 – Jouw bedrijf"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[13px] shrink-0 size-[26px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Rang"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              1
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative"
            data-name="Info"
          >
            <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#111] text-[14px] whitespace-nowrap">
              Jouw bedrijf
            </p>
            <div
              className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
              data-name="Score"
            >
              <p className="[word-break:break-word] font-inter font-medium leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                4,9
              </p>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                (86)
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
              Elektricien · 2,1 km · Nu open
            </p>
          </div>
          <div
            className="content-stretch flex gap-[6px] items-start overflow-clip relative shrink-0"
            data-name="Acties"
          >
            <div
              className="bg-[#810012] content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[14px] shrink-0"
              data-name="Bellen"
            >
              <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">
                Bellen
              </p>
            </div>
            <div
              className="bg-white border border-[rgba(129,0,18,0.35)] border-solid content-stretch flex items-start overflow-clip px-[10px] py-[6px] relative rounded-[14px] shrink-0"
              data-name="Route"
            >
              <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#810012] text-[11px] whitespace-nowrap">
                Route
              </p>
            </div>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[14px] items-center overflow-clip px-[20px] py-[12px] relative shrink-0 w-full"
          data-name="Resultaat 2 – Concurrent A"
        >
          <div
            className="bg-[#ededed] content-stretch flex items-center justify-center overflow-clip relative rounded-[13px] shrink-0 size-[26px]"
            data-name="Rang"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
              2
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative"
            data-name="Info"
          >
            <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.75)] whitespace-nowrap">
              Concurrent A
            </p>
            <div
              className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
              data-name="Score"
            >
              <p className="[word-break:break-word] font-inter font-medium leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                4,2
              </p>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame2}
                />
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                (31)
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
              Elektricien · 3,4 km · Nu open
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[14px] items-center overflow-clip px-[20px] py-[12px] relative shrink-0 w-full"
          data-name="Resultaat 3 – Concurrent B"
        >
          <div
            className="bg-[#ededed] content-stretch flex items-center justify-center overflow-clip relative rounded-[13px] shrink-0 size-[26px]"
            data-name="Rang"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
              3
            </p>
          </div>
          <div
            className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start min-w-px overflow-clip relative"
            data-name="Info"
          >
            <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(17,17,17,0.75)] whitespace-nowrap">
              Concurrent B
            </p>
            <div
              className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
              data-name="Score"
            >
              <p className="[word-break:break-word] font-inter font-medium leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                3,9
              </p>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame1}
                />
              </div>
              <div className="relative shrink-0 size-[13px]" data-name="Frame">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgFrame2}
                />
              </div>
              <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
                (12)
              </p>
            </div>
            <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] whitespace-nowrap">
              Elektricien · 5,0 km · Sluit om 17:00
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-col gap-[8px] items-start left-[520px] overflow-clip px-[20px] py-[18px] rounded-[18px] shadow-[0px_0px_40px_0px_rgba(130,0,18,0.55)] top-0 w-[330px]"
        data-name="Melding – Nieuwe review"
      >
        <div
          className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0"
          data-name="Kop"
        >
          <div className="relative shrink-0 size-[13px]" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="relative shrink-0 size-[13px]" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="relative shrink-0 size-[13px]" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="relative shrink-0 size-[13px]" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="relative shrink-0 size-[13px]" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-pre">{`  Nieuwe review`}</p>
        </div>
        <p className="[word-break:break-word] font-inter font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.85)] w-[min-content]">
          “Snel ter plaatse en heel vriendelijk geholpen!”
        </p>
        <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">
          Sarah · 2 min geleden
        </p>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(130,0,18,0.55)] flex gap-[18px] h-[84px] items-center left-[330px] pl-[22px] pr-[24px] py-[18px] rounded-[18px] top-[650px] w-[500px]"
        data-name="Melding – Route aangevraagd"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon-tegel"
        >
          <IconMapPin className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[20px] text-white w-full">
            Nieuwe klant belt
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[15px] text-[rgba(255,255,255,0.62)] w-full">
            Rechtstreeks vanuit Google Maps
          </p>
        </div>
        <div
          className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
          data-name="Status"
        >
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] tracking-[2.42px] whitespace-nowrap">
            NU
          </p>
          <div className="relative shrink-0 size-[24px]" data-name="Vinkje">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVinkje} />
          </div>
        </div>
      </div>
    </div>
  );
}
