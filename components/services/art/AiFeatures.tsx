const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/29d2e.svg`;
const imgGroup1 = `${assetPathPrefix}/8f1b3.svg`;
const imgGroup2 = `${assetPathPrefix}/b03c3.svg`;
const imgGroup3 = `${assetPathPrefix}/1fa32.svg`;
const imgGroup4 = `${assetPathPrefix}/9e120.svg`;
const imgGroup5 = `${assetPathPrefix}/4074b.svg`;

function IconBarChart({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:257"
      data-name="Icon / bar-chart"
    >
      <div className="absolute inset-[12.5%]" data-node-id="231:254" data-name="Group">
        <div className="absolute inset-[-5.56%]">
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
function IconWorkflow({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:317"
      data-name="Icon / workflow"
    >
      <div className="absolute inset-[12.5%]" data-node-id="231:313" data-name="Group">
        <div className="absolute inset-[-5.56%]">
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
function IconSend({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:311"
      data-name="Icon / send"
    >
      <div
        className="absolute inset-[10.42%_10.42%_10.42%_12.5%]"
        data-node-id="231:308"
        data-name="Group"
      >
        <div className="absolute inset-[-5.26%_-5.41%]">
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
function IconSparkles({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:306"
      data-name="Icon / sparkles"
    >
      <div
        className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
        data-node-id="231:303"
        data-name="Group"
      >
        <div className="absolute inset-[-6.06%_-5.88%]">
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
  );
}
function IconFileText({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:301"
      data-name="Icon / file-text"
    >
      <div className="absolute inset-[10.42%_18.75%]" data-node-id="231:298" data-name="Group">
        <div className="absolute inset-[-5.26%_-6.67%]">
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
  );
}
function IconUserCheck({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:296"
      data-name="Icon / user-check"
    >
      <div
        className="absolute inset-[16.67%_8.33%_14.58%_8.33%]"
        data-node-id="231:292"
        data-name="Group"
      >
        <div className="absolute inset-[-6.06%_-5%]">
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
  );
}

export default function AiFeatures() {
  return (
    <div className="feature-grid">
      <article className="feature-card feature-card-0 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1327;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1327;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconUserCheck className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1327;231:354"
            >
              0 1
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1327;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1327;231:356"
            >
              Leadopvolging
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1327;231:357"
            >
              Elke aanvraag komt meteen in je CRM, krijgt een persoonlijke bevestiging en een
              herinnering als niemand reageert.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-1 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1328;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1328;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconFileText className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1328;231:354"
            >
              0 2
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1328;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1328;231:356"
            >{`Offertes & facturen`}</p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1328;231:357"
            >
              Offertes en facturen die zichzelf opmaken op basis van een formulier of je planning.
              Jij keurt enkel nog goed.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-2 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1329;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1329;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconSparkles className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1329;231:354"
            >
              0 3
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1329;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1329;231:356"
            >
              AI-assistent
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1329;231:357"
            >
              Een chatbot die je diensten en prijzen kent, vragen beantwoordt en afspraken inplant.
              Ook om middernacht.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-3 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1330;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1330;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconSend className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1330;231:354"
            >
              0 4
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1330;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1330;231:356"
            >
              E-mailflows
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1330;231:357"
            >
              Automatische mails na een aanvraag, een offerte of een afgeronde klus. Persoonlijk en
              op het juiste moment.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-4 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1331;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1331;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconWorkflow className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1331;231:354"
            >
              0 5
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1331;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1331;231:356"
            >
              Tools die samenwerken
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1331;231:357"
            >
              Je formulieren, agenda, boekhouding en CRM wisselen zelf gegevens uit. Overtypen hoort
              bij het verleden.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-5 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I232:1332;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I232:1332;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconBarChart className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I232:1332;231:354"
            >
              0 6
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I232:1332;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I232:1332;231:356"
            >
              Live rapportage
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I232:1332;231:357"
            >
              Een overzicht dat zichzelf bijwerkt: aanvragen, opvolging en omzet, zonder dat iemand
              een lijst bijhoudt.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
