const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/8f1a7.svg`;
const imgGroup1 = `${assetPathPrefix}/81c72.svg`;
const imgGroup2 = `${assetPathPrefix}/b833d.svg`;
const imgLaptopTaxiBornemLive = `${assetPathPrefix}/8aa05.webp`;
const imgGloed = `${assetPathPrefix}/20cd3.svg`;
const imgEllipse2 = `${assetPathPrefix}/ac008.svg`;
const imgVinkje = `${assetPathPrefix}/740c0.svg`;

function IconSmartphone({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-name="Icon / smartphone"
    >
      <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Group">
        <div className="absolute inset-[-5%_-8.33%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup}
          />
        </div>
      </div>
    </div>
  );
}
function IconStar({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / star">
      <div className="absolute inset-[10.42%_10.42%_14.58%_10.42%]" data-name="Group">
        <div className="absolute inset-[-5.56%_-5.26%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup1}
          />
        </div>
      </div>
    </div>
  );
}
function IconMail({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / mail">
      <div className="absolute inset-[18.75%_10.42%]" data-name="Group">
        <div className="absolute inset-[-6.67%_-5.26%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGroup2}
          />
        </div>
      </div>
    </div>
  );
}

export default function Hero0() {
  return (
    <div className="relative h-[760px]   w-[920px]" data-name="Hero-scène – Resultaat centraal">
      <div className="absolute h-[520px] left-[40px] top-[210px] w-[900px]" data-name="Gloed">
        <div className="absolute inset-[-26.92%_-15.56%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgGloed}
          />
        </div>
      </div>
      <div
        className="absolute aspect-[880/655] left-[5.43%] right-[-1.09%] shadow-[0px_30px_60px_0px_rgba(0,0,0,0.5)] top-[90px]"
        data-name="Laptop – Taxi Bornem (live)"
      >
        <img
          loading="lazy"
          decoding="async"
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLaptopTaxiBornemLive}
        />
      </div>
      <div
        className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[10px] items-center left-[90px] overflow-clip pl-[16px] pr-[18px] py-[10px] rounded-[40px] top-[40px]"
        data-name="Chip – Live voor Taxi Bornem"
      >
        <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
          <div className="absolute inset-[-100%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgEllipse2}
            />
          </div>
        </div>
        <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[11px] text-white tracking-[2.42px] whitespace-pre">{`LIVE  ·  TAXI BORNEM`}</p>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(130,0,18,0.55)] flex gap-[18px] h-[84px] items-center left-[-30px] pl-[22px] pr-[24px] py-[18px] rounded-[18px] top-[474px] w-[440px]"
        data-name="Melding 1 – Nieuwe ritaanvraag"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon-tegel"
        >
          <IconMail className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[20px] text-white w-full">
            Nieuwe ritaanvraag
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[15px] text-[rgba(255,255,255,0.62)] w-full">
            Via het boekingsformulier
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
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVinkje}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(130,0,18,0.55)] flex gap-[18px] h-[84px] items-center left-[16px] opacity-92 pl-[22px] pr-[24px] py-[18px] rounded-[18px] top-[568px] w-[440px]"
        data-name="Melding 2 – Nieuwe Google-review"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon-tegel"
        >
          <IconStar className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[20px] text-white w-full">
            Nieuwe Google-review
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[15px] text-[rgba(255,255,255,0.62)] w-full">
            5 sterren
          </p>
        </div>
        <div
          className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
          data-name="Status"
        >
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] tracking-[2.42px] whitespace-nowrap">
            1 MIN
          </p>
          <div className="relative shrink-0 size-[24px]" data-name="Vinkje">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVinkje}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch drop-shadow-[0px_0px_20px_rgba(130,0,18,0.55)] flex gap-[18px] h-[84px] items-center left-[62px] opacity-80 pl-[22px] pr-[24px] py-[18px] rounded-[18px] top-[662px] w-[440px]"
        data-name="Melding 3 – Oproep via de site"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[48px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon-tegel"
        >
          <IconSmartphone className="overflow-clip relative shrink-0 size-[24px]" />
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[20px] text-white w-full">
            Oproep via de site
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[15px] text-[rgba(255,255,255,0.62)] w-full">
            Klik op de belknop
          </p>
        </div>
        <div
          className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
          data-name="Status"
        >
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] tracking-[2.42px] whitespace-nowrap">
            3 MIN
          </p>
          <div className="relative shrink-0 size-[24px]" data-name="Vinkje">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVinkje}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
