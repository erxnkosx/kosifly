const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/1fa32.svg`;
const imgRaster = `${assetPathPrefix}/e6bec.svg`;
const imgEllipse2 = `${assetPathPrefix}/ac008.svg`;
const imgVerbindingen = `${assetPathPrefix}/9be96.svg`;
const imgDatapuls1 = `${assetPathPrefix}/4d609.svg`;
const imgGroup1 = `${assetPathPrefix}/7f403.svg`;
const imgGroup2 = `${assetPathPrefix}/49567.svg`;
const imgGroup3 = `${assetPathPrefix}/b0887.svg`;
const imgGroup4 = `${assetPathPrefix}/1eea9.svg`;
const imgGroup5 = `${assetPathPrefix}/9a447.svg`;
const imgGroup6 = `${assetPathPrefix}/72234.svg`;

function IconSparkles({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-name="Icon / sparkles">
      <div className="absolute inset-[14.58%_12.5%_16.67%_16.67%]" data-name="Group">
        <div className="absolute inset-[-6.06%_-5.88%]">
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

export default function Hero3() {
  return (
    <div className="relative h-[760px]   w-[860px]" data-name="Hero-scène – Automatisatiecanvas">
      <div
        className="absolute bg-[rgba(13,13,15,0.92)] border border-[rgba(255,255,255,0.1)] border-solid h-[540px] left-[30px] overflow-clip rounded-[24px] shadow-[0px_0px_80px_0px_rgba(153,5,20,0.45),0px_30px_60px_0px_rgba(0,0,0,0.55)] top-[50px] w-[800px]"
        data-name="Canvas"
      >
        <div className="absolute h-[540px] left-[-1px] top-[-1px] w-[800px]" data-name="Raster">
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgRaster}
          />
        </div>
        <p className="[word-break:break-word] absolute font-inter font-medium leading-[normal] left-[23px] not-italic text-[13px] text-[rgba(255,255,255,0.6)] top-[21px] whitespace-pre">{`Automatisatie  ·  Nieuwe aanvraag`}</p>
        <div
          className="absolute bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] border-solid content-stretch flex gap-[8px] items-center left-[705px] overflow-clip pl-[10px] pr-[12px] py-[6px] rounded-[20px] top-[17px]"
          data-name="Status – Actief"
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
          <p className="[word-break:break-word] font-inter font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.85)] whitespace-nowrap">
            Actief
          </p>
        </div>
        <div
          className="absolute h-[540px] left-[-1px] top-[-1px] w-[800px]"
          data-name="Verbindingen"
        >
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVerbindingen}
          />
        </div>
        <div className="absolute left-[265px] size-[8px] top-[257px]" data-name="Datapuls 1">
          <div className="absolute inset-[-125%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgDatapuls1}
            />
          </div>
        </div>
        <div className="absolute left-[543px] size-[8px] top-[167px]" data-name="Datapuls 2">
          <div className="absolute inset-[-125%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgDatapuls1}
            />
          </div>
        </div>
        <div className="absolute left-[543px] size-[8px] top-[301px]" data-name="Datapuls 3">
          <div className="absolute inset-[-125%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgDatapuls1}
            />
          </div>
        </div>
        <div className="absolute left-[547px] size-[8px] top-[415px]" data-name="Datapuls 4">
          <div className="absolute inset-[-125%]">
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="block max-w-none size-full"
              src={imgDatapuls1}
            />
          </div>
        </div>
        <div
          className="absolute bg-[#1a1a1d] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[39px] overflow-clip px-[14px] rounded-[14px] top-[229px] w-[200px]"
          data-name="Blok – Formulier"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Icoon"
          >
            <div className="overflow-clip relative shrink-0 size-[19.2px]" data-name="Icon / mail">
              <div className="absolute inset-[18.75%_10.42%]" data-name="Group">
                <div className="absolute inset-[-6.67%_-5.26%]">
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
              Formulier
            </p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Nieuwe aanvraag
            </p>
          </div>
        </div>
        <div
          className="absolute border border-[rgba(232,51,79,0.7)] border-solid content-stretch flex gap-[12px] h-[84px] items-center left-[299px] overflow-clip px-[14px] rounded-[14px] shadow-[0px_0px_36px_0px_rgba(232,51,79,0.55)] top-[219px] w-[220px]"
          style={{
            backgroundImage:
              "linear-gradient(164.02021250240978deg, rgb(64, 5, 15) 14.286%, rgb(20, 3, 5) 85.714%)",
          }}
          data-name="Blok – AI-assistent"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[44px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Icoon"
          >
            <IconSparkles className="overflow-clip relative shrink-0 size-[24px]" />
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap"
            data-name="Tekst"
          >
            <p className="font-inter font-semibold relative shrink-0 text-[16px] text-white">
              AI-assistent
            </p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Leest, sorteert, beslist
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[#1a1a1d] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[569px] overflow-clip px-[14px] rounded-[14px] top-[89px] w-[200px]"
          data-name="Blok – CRM"
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
              data-name="Icon / user-check"
            >
              <div className="absolute inset-[16.67%_8.33%_14.58%_8.33%]" data-name="Group">
                <div className="absolute inset-[-6.06%_-5%]">
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
            <p className="font-inter font-semibold relative shrink-0 text-[14px] text-white">CRM</p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Lead aangemaakt
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[#1a1a1d] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[569px] overflow-clip px-[14px] rounded-[14px] top-[199px] w-[200px]"
          data-name="Blok – Offerte"
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
              data-name="Icon / file-text"
            >
              <div className="absolute inset-[10.42%_18.75%]" data-name="Group">
                <div className="absolute inset-[-5.26%_-6.67%]">
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
              Offerte
            </p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Automatisch opgemaakt
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[#1a1a1d] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[569px] overflow-clip px-[14px] rounded-[14px] top-[309px] w-[200px]"
          data-name="Blok – Agenda"
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
              data-name="Icon / calendar"
            >
              <div className="absolute inset-[10.42%_12.5%]" data-name="Group">
                <div className="absolute inset-[-5.26%_-5.56%]">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup4}
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
              Agenda
            </p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Afspraak ingepland
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[#1a1a1d] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[12px] h-[64px] items-center left-[569px] overflow-clip px-[14px] rounded-[14px] top-[419px] w-[200px]"
          data-name="Blok – Mail"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Icoon"
          >
            <div className="overflow-clip relative shrink-0 size-[19.2px]" data-name="Icon / send">
              <div className="absolute inset-[10.42%_10.42%_10.42%_12.5%]" data-name="Group">
                <div className="absolute inset-[-5.26%_-5.4%_-5.26%_-5.41%]">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup5}
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
              Mail
            </p>
            <p className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)]">
              Bevestiging verstuurd
            </p>
          </div>
        </div>
        <div
          className="absolute bg-[rgba(255,255,255,0.08)] content-stretch flex items-start left-[39px] overflow-clip px-[8px] py-[4px] rounded-[6px] top-[203px]"
          data-name="Trigger-label"
        >
          <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[9px] text-[rgba(255,255,255,0.6)] tracking-[1.98px] whitespace-nowrap">
            START
          </p>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.65)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-col gap-[10px] items-start left-[480px] overflow-clip p-[16px] rounded-[18px] shadow-[0px_0px_40px_0px_rgba(130,0,18,0.55)] top-[560px] w-[360px]"
        data-name="Chat – AI-assistent"
      >
        <div
          className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0"
          data-name="Kop"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[12px] shrink-0 size-[24px]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Icoon"
          >
            <div
              className="overflow-clip relative shrink-0 size-[14.4px]"
              data-name="Icon / sparkles"
            >
              <div className="absolute inset-[14.58%_12.5%_16.67%_16.67%]" data-name="Group">
                <div className="absolute inset-[-6.06%_-5.89%_-6.06%_-5.88%]">
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="block max-w-none size-full"
                    src={imgGroup6}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-inter font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] whitespace-pre">{`AI-assistent  ·  op je website`}</p>
        </div>
        <div
          className="content-stretch flex items-start overflow-clip relative shrink-0 w-full"
          data-name="Vraag"
        >
          <div
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[14px] shrink-0"
            data-name="Ballon"
          >
            <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.9)] whitespace-nowrap">
              Kunnen jullie dinsdag langskomen?
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full"
          data-name="Antwoord"
        >
          <div
            className="content-stretch flex items-start overflow-clip px-[14px] py-[10px] relative rounded-[14px] shrink-0"
            style={{
              backgroundImage:
                "linear-gradient(173.15722658736905deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Ballon"
          >
            <p className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">
              Dinsdag om 10u kan. Ik heb het ingepland ✓
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute backdrop-blur-[8px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex items-start left-[60px] overflow-clip px-[18px] py-[10px] rounded-[40px] top-0"
        data-name="Chip"
      >
        <p className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[11px] text-white tracking-[2.42px] whitespace-pre">{`AUTOMATISCH  ·  0 MIN HANDWERK`}</p>
      </div>
    </div>
  );
}
