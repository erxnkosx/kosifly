import { Artwork } from "@/components/ui/Artwork";
import BentoArt0 from "./BentoArt0";
import BentoArt1 from "./BentoArt1";
import BentoArt5 from "./BentoArt5";
const assetPathPrefix = "/figma";
const imgGroup = `${assetPathPrefix}/9be7c.svg`;
const imgGroup1 = `${assetPathPrefix}/b833d.svg`;
const imgGroup2 = `${assetPathPrefix}/c379f.svg`;
const imgGroup3 = `${assetPathPrefix}/03e5a.svg`;
const imgGroup4 = `${assetPathPrefix}/8f1a7.svg`;
const imgGroup5 = `${assetPathPrefix}/79436.svg`;

function IconPencil({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:225"
      data-name="Icon / pencil"
    >
      <div
        className="absolute inset-[11.99%_12.5%_16.67%_12.5%]"
        data-node-id="231:222"
        data-name="Group"
      >
        <div className="absolute inset-[-5.84%_-5.56%]">
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
function IconMail({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:220"
      data-name="Icon / mail"
    >
      <div className="absolute inset-[18.75%_10.42%]" data-node-id="231:217" data-name="Group">
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
  );
}
function IconZap({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:215"
      data-name="Icon / zap"
    >
      <div
        className="absolute inset-[8.33%_20.83%_8.33%_16.67%]"
        data-node-id="231:213"
        data-name="Group"
      >
        <div className="absolute inset-[-5%_-6.67%]">
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
function IconLayout({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:206"
      data-name="Icon / layout"
    >
      <div className="absolute inset-[12.5%]" data-node-id="231:203" data-name="Group">
        <div className="absolute inset-[-5.56%]">
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
function IconSmartphone({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:211"
      data-name="Icon / smartphone"
    >
      <div
        className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]"
        data-node-id="231:208"
        data-name="Group"
      >
        <div className="absolute inset-[-5%_-8.33%]">
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
function IconSitemap({ className }: { className?: string }) {
  return (
    <div
      className={className || "overflow-clip relative size-[24px]"}
      data-node-id="231:201"
      data-name="Icon / sitemap"
    >
      <div className="absolute inset-[10.42%]" data-node-id="231:196" data-name="Group">
        <div className="absolute inset-[-5.26%]">
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

export default function WebFeatures() {
  return (
    <div className="bento-grid">
      <article className="feature-card feature-card-0 dark-card">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1232;247:1109"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1232;247:1110"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconSitemap className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.45)] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1232;247:1112"
            >
              0 1
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1232;247:1113"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[26px] text-white tracking-[-0.2262px] w-full"
              data-node-id="I271:1232;247:1114"
            >{`Strategie & structuur`}</p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[19px] text-[rgba(255,255,255,0.65)] w-full"
              data-node-id="I271:1232;247:1115"
            >{`We starten bij je klant: wat zoekt die, waar twijfelt die en welke pagina's maken de keuze makkelijk?`}</p>
          </div>
        </div>
        <div className="bento-art">
          <Artwork width={440} height={220}>
            <BentoArt0 />
          </Artwork>
        </div>
      </article>
      <article className="feature-card feature-card-1 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1262;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1262;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconSmartphone className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1262;231:354"
            >
              0 3
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1262;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I271:1262;231:356"
            >
              Mobiel eerst
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I271:1262;231:357"
            >
              De meeste bezoekers komen via hun gsm. Daar ontwerpen we eerst voor, de desktopversie
              volgt daarna.
            </p>
          </div>
        </div>
        <div className="bento-art">
          <Artwork width={500} height={328}>
            <BentoArt1 />
          </Artwork>
        </div>
      </article>
      <article className="feature-card feature-card-2 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1278;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1278;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconLayout className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1278;231:354"
            >
              0 2
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1278;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I271:1278;231:356"
            >
              Design op maat
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I271:1278;231:357"
            >
              Geen template, maar een ontwerp dat bij je merk past en elke bezoeker naar één
              duidelijke actie leidt.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-3 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1294;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1294;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconZap className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1294;231:354"
            >
              0 4
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1294;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I271:1294;231:356"
            >{`Snel & SEO-ready`}</p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I271:1294;231:357"
            >
              Gebouwd op een moderne basis met sterke technische SEO, zodat Google je site begrijpt
              en niemand moet wachten.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-4 ">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1309;231:346"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1309;231:347"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconMail className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[#aaa] text-[14px] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1309;231:354"
            >
              0 5
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1309;231:355"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[#111] text-[26px] tracking-[-0.2262px] w-full"
              data-node-id="I271:1309;231:356"
            >
              Formulieren die opvolgen
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[#6b6b6b] text-[19px] w-full"
              data-node-id="I271:1309;231:357"
            >
              Contact- en offerteformulieren die meteen in je mailbox of CRM landen, met een
              automatische bevestiging.
            </p>
          </div>
        </div>
      </article>
      <article className="feature-card feature-card-5 dark-card">
        <div className="feature-copy">
          <div
            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
            data-node-id="I271:1325;247:1109"
            data-name="Top"
          >
            <div
              className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.45)] shrink-0 size-[56px]"
              data-node-id="I271:1325;247:1110"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
              }}
              data-name="Icoon-tegel"
            >
              <IconPencil className="overflow-clip relative shrink-0 size-[24px]" />
            </div>
            <p
              className="[word-break:break-word] font-manrope font-normal leading-[21px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.45)] tracking-[0.4312px] whitespace-nowrap"
              data-node-id="I271:1325;247:1112"
            >
              0 6
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full"
            data-node-id="I271:1325;247:1113"
            data-name="Inhoud"
          >
            <p
              className="font-manrope font-extrabold leading-[34px] relative shrink-0 text-[26px] text-white tracking-[-0.2262px] w-full"
              data-node-id="I271:1325;247:1114"
            >
              Alles zelf in handen
            </p>
            <p
              className="font-manrope font-normal leading-[28px] relative shrink-0 text-[19px] text-[rgba(255,255,255,0.65)] w-full"
              data-node-id="I271:1325;247:1115"
            >
              Klik op een tekst of foto op je eigen site en pas hem meteen aan. Jij beslist wat er
              staat, wij tonen je hoe.
            </p>
          </div>
        </div>
        <div className="bento-art">
          <Artwork width={440} height={240}>
            <BentoArt5 />
          </Artwork>
        </div>
      </article>
    </div>
  );
}
