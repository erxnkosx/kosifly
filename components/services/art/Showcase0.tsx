const assetPathPrefix = "/figma";
const imgImage14 = `${assetPathPrefix}/8aa05.webp`;
const imgImage22 = `${assetPathPrefix}/4cd9a.webp`;
const imgGloed = `${assetPathPrefix}/dcf82.svg`;
const imgVloerschaduw = `${assetPathPrefix}/dcbac.svg`;
const imgAanwijslijnen = `${assetPathPrefix}/8725c.svg`;
const imgAnkerpunt1 = `${assetPathPrefix}/dd880.svg`;

export default function Showcase0() {
  return (
    <div className="relative w-[1920px] h-[650px]">
      <div className="absolute w-[1920px] h-[1120px] left-0 top-[-275px]">
        <div className="absolute h-[560px] left-[460px] top-[330px] w-[1000px]" data-name="Gloed">
          <div className="absolute inset-[-28.57%_-16%]">
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
          className="absolute h-[60px] left-[610px] top-[846px] w-[700px]"
          data-name="Vloerschaduw"
        >
          <div className="absolute inset-[-53.33%_-4.57%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgVloerschaduw}
            />
          </div>
        </div>
        <div className="absolute h-[560px] left-[521px] top-[320px] w-[878.38px]" data-name="Beeld">
          <div
            className="absolute aspect-[702.4921875/522.7623901367188] left-0 right-[18.57%] shadow-[0px_0px_218.069px_0.872px_rgba(0,0,0,0.3)] top-[13.96px]"
            data-name="image 14"
          >
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage14}
            />
          </div>
          <div
            className="absolute h-[560px] left-[621.06px] top-0 w-[257.321px]"
            data-name="image 22"
          >
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgImage22}
            />
          </div>
        </div>
        <div className="absolute h-[1120px] left-0 top-0 w-[1920px]" data-name="Aanwijslijnen">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgAanwijslijnen}
          />
        </div>
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[114px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[353px]"
          data-name="Aanwijzer 1 – Een belofte in vijf seconden"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              1
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-name="Tekst"
          >
            <p className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Een belofte in vijf seconden
            </p>
            <p className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]">
              Je ziet meteen wat Taxi Bornem doet en waar.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[736.73px] size-[12px] top-[461.02px]"
          data-name="Ankerpunt 1"
        >
          <div className="absolute inset-[-83.33%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgAnkerpunt1}
            />
          </div>
        </div>
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[114px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[613px]"
          data-name="Aanwijzer 2 – Rit boeken in één klik"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              2
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-name="Tekst"
          >
            <p className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Rit boeken in één klik
            </p>
            <p className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]">
              De knop staat bovenaan en is altijd in beeld.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[693.82px] size-[12px] top-[546.19px]"
          data-name="Ankerpunt 2"
        >
          <div className="absolute inset-[-83.33%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgAnkerpunt1}
            />
          </div>
        </div>
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[1490px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[353px]"
          data-name="Aanwijzer 3 – Gemaakt voor de gsm"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              3
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-name="Tekst"
          >
            <p className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              Gemaakt voor de gsm
            </p>
            <p className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]">
              Want daar zoeken de meeste klanten een taxi.
            </p>
          </div>
        </div>
        <div className="absolute left-[1264.72px] size-[12px] top-[482px]" data-name="Ankerpunt 3">
          <div className="absolute inset-[-83.33%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgAnkerpunt1}
            />
          </div>
        </div>
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[1490px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[622px]"
          data-name="Aanwijzer 4 – WhatsApp met één tik"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
              4
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-name="Tekst"
          >
            <p className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap">
              WhatsApp met één tik
            </p>
            <p className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]">
              Voor wie liever een berichtje stuurt.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[1264.72px] size-[12px] top-[619.2px]"
          data-name="Ankerpunt 4"
        >
          <div className="absolute inset-[-83.33%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgAnkerpunt1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
