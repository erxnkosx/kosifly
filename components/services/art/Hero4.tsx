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
    <div
      className="relative h-[760px]   w-[860px]"
      data-node-id="292:1056"
      data-name="Hero-scène – Monitoring"
    >
      <div
        className="absolute h-[120px] left-0 top-[280px] w-[860px]"
        data-node-id="292:1231"
        data-name="Hartslag"
      >
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
        data-node-id="292:1059"
        data-name="Uptime-meter"
      >
        <div
          className="absolute left-[19px] size-[400px] top-[19px]"
          data-node-id="292:1167"
          data-name="Ring"
        >
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
          data-node-id="292:1124"
          data-name="Status"
        >
          <div className="relative shrink-0 size-[9px]" data-node-id="292:1125" data-name="Ellipse">
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
          <p
            className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.9)] whitespace-nowrap"
            data-node-id="292:1126"
          >
            Alles werkt
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-geist font-extrabold leading-[normal] left-[98.5px] text-[64px] text-white top-[177px] tracking-[-2.56px] whitespace-nowrap"
          data-node-id="292:1127"
        >
          99,98 %
        </p>
        <p
          className="[word-break:break-word] absolute font-inter font-normal leading-[normal] left-[134.5px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[257px] whitespace-nowrap"
          data-node-id="292:1128"
        >
          uptime · laatste 30 dagen
        </p>
        <p
          className="[word-break:break-word] absolute font-orbitron font-medium leading-[normal] left-[153px] text-[10px] text-[rgba(255,255,255,0.45)] top-[297px] tracking-[2.2px] whitespace-nowrap"
          data-node-id="292:1129"
        >
          JOUWBEDRIJF.BE
        </p>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[30px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[90px]"
        data-node-id="292:1130"
        data-name="Status – Back-up gelukt"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          data-node-id="292:1131"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-node-id="292:1132"
            data-name="Icon / database"
          >
            <div
              className="absolute inset-[10.42%_14.58%]"
              data-node-id="I292:1132;231:336"
              data-name="Group"
            >
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
          data-node-id="292:1137"
          data-name="Tekst"
        >
          <p
            className="font-inter font-semibold relative shrink-0 text-[14px] text-white"
            data-node-id="292:1138"
          >
            Back-up gelukt
          </p>
          <p
            className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]"
            data-node-id="292:1139"
          >
            Vandaag om 03:00
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[560px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[50px]"
        data-node-id="292:1140"
        data-name="Status – SSL-certificaat"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          data-node-id="292:1141"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-node-id="292:1142"
            data-name="Icon / shield-check"
          >
            <div
              className="absolute inset-[10.42%_18.75%]"
              data-node-id="I292:1142;231:282"
              data-name="Group"
            >
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
          data-node-id="292:1146"
          data-name="Tekst"
        >
          <p
            className="font-inter font-semibold relative shrink-0 text-[14px] text-white"
            data-node-id="292:1147"
          >
            SSL-certificaat
          </p>
          <p
            className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]"
            data-node-id="292:1148"
          >
            Geldig · automatisch verlengd
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[10px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[520px]"
        data-node-id="292:1149"
        data-name="Status – 3 updates"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          data-node-id="292:1150"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-node-id="292:1151"
            data-name="Icon / refresh"
          >
            <div
              className="absolute inset-[14.58%]"
              data-node-id="I292:1151;231:330"
              data-name="Group"
            >
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
          data-node-id="292:1156"
          data-name="Tekst"
        >
          <p
            className="font-inter font-semibold relative shrink-0 text-[14px] text-white"
            data-node-id="292:1157"
          >
            3 updates
          </p>
          <p
            className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]"
            data-node-id="292:1158"
          >
            Getest en geïnstalleerd
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.62)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] items-center left-[570px] overflow-clip pl-[12px] pr-[18px] py-[12px] rounded-[16px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.5)] top-[560px]"
        data-node-id="292:1159"
        data-name="Status – Monitoring 24/7"
      >
        <div
          className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
          data-node-id="292:1160"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
          }}
          data-name="Icoon"
        >
          <div
            className="overflow-clip relative shrink-0 size-[19.2px]"
            data-node-id="292:1161"
            data-name="Icon / activity"
          >
            <div
              className="absolute inset-[14.58%_8.33%]"
              data-node-id="I292:1161;231:319"
              data-name="Group"
            >
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
          data-node-id="292:1164"
          data-name="Tekst"
        >
          <p
            className="font-inter font-semibold relative shrink-0 text-[14px] text-white"
            data-node-id="292:1165"
          >
            Monitoring 24/7
          </p>
          <p
            className="font-inter font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)]"
            data-node-id="292:1166"
          >
            Laatste check: 1 min geleden
          </p>
        </div>
      </div>
    </div>
  );
}
