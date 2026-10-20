const assetPathPrefix = "/figma";
const imgHartslag = `${assetPathPrefix}/7d720.svg`;
const imgRing = `${assetPathPrefix}/f42ba.svg`;
const imgEllipse2 = `${assetPathPrefix}/2aedf.svg`;
const imgGroup = `${assetPathPrefix}/005d1.svg`;
const imgGroup1 = `${assetPathPrefix}/4b3c3.svg`;
const imgGroup2 = `${assetPathPrefix}/a4ec1.svg`;
const imgGroup3 = `${assetPathPrefix}/2111d.svg`;

export default function Hero4() {
  return (
    <div className="relative h-[760px]   w-[860px]" data-name="Hero-scène – Monitoring">
      <div className="absolute h-[120px] left-0 top-[280px] w-[860px]" data-name="Hartslag">
        <div className="absolute inset-[0_-1.4%]">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="block max-w-none size-full"
            src={imgHartslag}
          />
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[15px] bg-[rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.1)] border-solid left-[220px] rounded-[220px] shadow-[0px_0px_90px_0px_rgba(153,5,20,0.55),0px_30px_60px_0px_rgba(0,0,0,0.5)] size-[440px] top-[120px]"
        data-name="Uptime-meter"
      >
        <div className="absolute left-[19px] size-[400px] top-[19px]" data-name="Ring">
          <div className="absolute inset-[-4%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgRing}
            />
          </div>
        </div>
        <div
          className="absolute content-stretch flex gap-[8px] items-center left-[172.5px] overflow-clip top-[149px]"
          data-name="Status"
        >
          <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
            <div className="absolute inset-[-88.89%]">
              <img
                loading="lazy"
                decoding="async"
                alt=""
                className="block max-w-none size-full"
                src={imgEllipse2}
              />
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
            Alles werkt
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-geist font-extrabold leading-[normal] left-[98.5px] text-[64px] text-white top-[177px] tracking-[-2.56px] whitespace-nowrap">
          99,98 %
        </p>
        <p className="[word-break:break-word] absolute font-inter font-normal leading-[normal] left-[134.5px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[257px] whitespace-nowrap">
          uptime · laatste 30 dagen
        </p>
        <p className="[word-break:break-word] absolute font-orbitron font-medium leading-[normal] left-[153px] text-[10px] text-[rgba(255,255,255,0.45)] top-[297px] tracking-[2.2px] whitespace-nowrap">
          JOUWBEDRIJF.BE
        </p>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[30px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[90px]"
        data-name="Status – Back-up gelukt"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-name="Icon / database"
          >
            <div className="absolute inset-[10.42%_14.58%]" data-name="Group">
              <div className="absolute inset-[-5.26%_-5.88%]">
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
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[14px] text-white">
            Back-up gelukt
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]">
            Vandaag om 03:00
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[560px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[50px]"
        data-name="Status – SSL-certificaat"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-name="Icon / shield-check"
          >
            <div className="absolute inset-[10.42%_18.75%]" data-name="Group">
              <div className="absolute inset-[-5.26%_-6.67%]">
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
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[14px] text-white">
            SSL-certificaat
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]">
            Geldig · automatisch verlengd
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[10px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[520px]"
        data-name="Status – 3 updates"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div className="overflow-clip relative shrink-0 size-[19.2px]" data-name="Icon / refresh">
            <div className="absolute inset-[14.58%]" data-name="Group">
              <div className="absolute inset-[-5.88%]">
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
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[14px] text-white">
            3 updates
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]">
            Getest en geïnstalleerd
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[570px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[560px]"
        data-name="Status – Monitoring 24/7"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-name="Icon / activity"
          >
            <div className="absolute inset-[14.58%_8.33%]" data-name="Group">
              <div className="absolute inset-[-5.88%_-5%]">
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup3}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
          data-name="Tekst"
        >
          <p className="font-inter font-semibold relative shrink-0 text-[14px] text-white">
            Monitoring 24/7
          </p>
          <p className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]">
            Laatste check: 1 min geleden
          </p>
        </div>
      </div>
    </div>
  );
}
