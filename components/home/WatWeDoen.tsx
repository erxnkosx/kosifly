import Image from "next/image";
import {
  ArrowRight,
  DashedArrow,
  MailIcon,
  MapPin,
  ShieldCheck,
  SparklesIcon,
  Star,
} from "@/components/ui/icons";

import { Artwork } from "@/components/ui/Artwork";
const gradBtn = "linear-gradient(106.1443deg, rgb(232,51,79) 14.286%, rgb(126,12,30) 85.714%)";
const Dot = () => (
  <span className="size-[7px] rounded-full bg-[#33e673] shadow-[0_0_8px_rgba(51,230,115,0.8)]" />
);

function Visual0() {
  return (
    <Artwork width={500} height={340} className="!overflow-visible">
      <div style={{ position: "absolute", left: -479, top: -51, width: 1032, height: 440 }}>
        <div className="absolute left-[479px] top-[51px] h-[316px] w-[500px] overflow-hidden rounded-[14px] border border-white/18 bg-[#141417] shadow-[0_12px_24px_-10px_rgba(126,12,30,0.24),0_6px_12px_-6px_rgba(0,0,0,0.16)]">
          {[13, 27, 41].map((l) => (
            <span
              key={l}
              className="absolute top-[11px] size-[9px] rounded-full bg-white/22"
              style={{ left: l }}
            />
          ))}
          <div className="absolute left-[-1px] top-[31px] h-[284px] w-[500px] overflow-hidden">
            <Image
              src="/images/taxibornem-home.webp"
              alt="Taxi Bornem"
              width={10164}
              height={5548}
              className="h-full w-full object-cover object-top"
              sizes="500px"
              quality={90}
            />
          </div>
        </div>
      </div>
    </Artwork>
  );
}
function Visual1() {
  return (
    <Artwork width={428} height={130}>
      <div style={{ position: "absolute", left: -35, top: -294, width: 502, height: 440 }}>
        <div className="absolute left-[35px] top-[294px] flex w-[428px] flex-col items-start gap-[8px] overflow-hidden rounded-[16px] border border-[#e6e6e6] bg-[#f6f6f6] px-[18px] py-[16px]">
          <div className="flex items-center gap-[10px]">
            <MapPin size={17.28} className="text-brand" />
            <span className="font-inter text-[15px] font-semibold leading-[normal] text-ink">
              Taxi Bornem
            </span>
          </div>
          <div className="flex items-center gap-[4px]">
            <span className="font-inter text-[13px] font-semibold leading-[normal] text-ink">
              4,9
            </span>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} />
            ))}
            <span className="font-inter text-[12px] leading-[normal] text-grey">
              50+ Google-reviews
            </span>
          </div>
          <div className="flex items-start gap-[8px]">
            {["Website", "Route"].map((l) => (
              <span
                key={l}
                className="rounded-[14px] border border-[#e6e6e6] bg-white px-[12px] py-[6px] font-inter text-[11px] font-semibold leading-[normal] text-brand"
              >
                {l}
              </span>
            ))}
            <span className="rounded-[14px] bg-brand px-[12px] py-[6px] font-inter text-[11px] font-semibold leading-[normal] text-white">
              Bellen
            </span>
          </div>
        </div>
      </div>
    </Artwork>
  );
}
function Visual2() {
  return (
    <Artwork width={430} height={150}>
      <div style={{ position: "absolute", left: -35, top: -233, width: 502, height: 440 }}>
        <div className="absolute left-[35px] top-[233px] h-[150px] w-[430px] overflow-hidden rounded-[14px] border border-[#e6e6e6] bg-[#f6f6f6]">
          <div className="absolute left-[-1px] top-[-1px] h-[150px] w-[70px] bg-[#121214]" />
          {[21, 43, 65, 87].map((t, i) => (
            <span
              key={t}
              className={`absolute left-[14px] h-[6px] w-[40px] rounded-[3px] ${i === 0 ? "bg-brand" : "bg-white/25"}`}
              style={{ top: t }}
            />
          ))}
          {[
            ["Open", "12", 85],
            ["Gepland", "8", 185],
            ["Klaar", "34", 285],
          ].map(([l, v, x]) => (
            <div
              key={l as string}
              className="absolute top-[13px] h-[46px] w-[90px] overflow-hidden whitespace-nowrap rounded-[8px] border border-[#e6e6e6] bg-white leading-[normal]"
              style={{ left: x as number }}
            >
              <span className="absolute left-[7px] top-[6px] font-inter text-[9px] font-medium text-grey">
                {l}
              </span>
              <span className="absolute left-[7px] top-[18px] font-geist text-[18px] font-extrabold text-ink">
                {v}
              </span>
            </div>
          ))}
          {[
            [89, 32.3, 106.7],
            [123, 49.4, 89.6],
            [157, 38, 101],
            [191, 62.7, 76.3],
            [225, 55.1, 83.9],
            [259, 76, 63],
            [293, 68.4, 70.6],
          ].map(([l, h, t], i) => (
            <span
              key={l}
              className="absolute w-[22px] rounded-[4px]"
              style={{ left: l, height: h, top: t, background: i === 5 ? gradBtn : "#dbdbde" }}
            />
          ))}
        </div>
      </div>
    </Artwork>
  );
}
function Visual3() {
  return (
    <Artwork width={344} height={100}>
      <div style={{ position: "absolute", left: -88, top: -285, width: 502, height: 440 }}>
        <div className="absolute left-[88px] top-[285px] flex items-center">
          {[
            { n: "Aanvraag", i: <MailIcon className="text-brand" /> },
            { n: "AI", ai: true },
            { n: "Opgevolgd", i: <ShieldCheck className="text-brand" /> },
          ].map((s, idx) => (
            <div key={s.n} className="flex items-center">
              <div className="flex flex-col items-center gap-[10px]">
                {s.ai ? (
                  <span
                    className="flex size-[68px] items-center justify-center rounded-[18px] shadow-[0_0_24px_rgba(242,74,99,0.6)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgb(232,51,79) 14.286%, rgb(126,12,30) 85.714%)",
                    }}
                  >
                    <SparklesIcon className="text-white" />
                  </span>
                ) : (
                  <span className="flex size-[56px] items-center justify-center rounded-[18px] border border-[#e6e6e6] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
                    {s.i}
                  </span>
                )}
                <span className="font-inter text-[13px] font-medium leading-[normal] text-[rgba(17,17,17,0.7)]">
                  {s.n}
                </span>
              </div>
              {idx < 2 && <DashedArrow />}
            </div>
          ))}
        </div>
      </div>
    </Artwork>
  );
}
function Visual4() {
  return (
    <Artwork width={430} height={132}>
      <div style={{ position: "absolute", left: -35, top: -251, width: 502, height: 440 }}>
        <svg
          className="absolute left-[35px] top-[251px] size-[132px] [filter:drop-shadow(0_0_14px_rgba(232,51,79,0.3))]"
          viewBox="0 0 150 150"
          fill="none"
        >
          <circle cx="75" cy="75" r="60" stroke="rgba(17,17,17,0.08)" strokeWidth="12" />
          <path
            d="M75 15A60 60 0 1 1 69.8 15.2"
            stroke="#E8334F"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
        <p className="absolute left-[58.5px] top-[302.5px] whitespace-nowrap font-geist text-[22px] font-extrabold leading-[normal] tracking-[-0.66px] text-ink">
          99,98 %
        </p>
        <ul className="absolute left-[199px] top-[279.5px] flex flex-col items-start gap-[12px]">
          {["Back-up gelukt", "Updates getest", "SSL geldig"].map((t) => (
            <li
              key={t}
              className="flex items-center gap-[8px] font-inter text-[14px] font-medium leading-[normal] text-[rgba(17,17,17,0.75)]"
            >
              <Dot />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Artwork>
  );
}
const items = [
  {
    no: "01",
    label: "WEBDESIGN & DEVELOPMENT",
    title: "Websites die bezoekers omzetten in klanten.",
    body: "Op maat ontworpen, snel en gebouwd rond één duidelijke actie.",
    link: "Bekijk webdesign",
    slug: "webdesign",
  },
  {
    no: "02",
    label: "LOKALE SEO",
    title: "Gevonden in je eigen regio.",
    body: "Een sterk Google-profiel, reviews in de kijker en een site die Google begrijpt.",
    link: "Bekijk lokale SEO",
    slug: "lokale-seo",
  },
  {
    no: "03",
    label: "WEB APPS & MAATWERK",
    title: "Software die past bij je bedrijf.",
    body: "Klantenportalen, boekingstools en dashboards op maat.",
    link: "Bekijk web apps",
    slug: "web-apps",
  },
  {
    no: "04",
    label: "AI & AUTOMATISATIES",
    title: "Werk dat zichzelf afhandelt.",
    body: "Aanvragen, offertes en opvolging, automatisch geregeld.",
    link: "Bekijk automatisaties",
    slug: "ai-automatisaties",
  },
  {
    no: "05",
    label: "ONDERHOUD & HOSTING",
    title: "Altijd snel, veilig en online.",
    body: "Updates, back-ups en een maandrapport, zonder zorgen.",
    link: "Bekijk onderhoud",
    slug: "onderhoud-hosting",
  },
];
const visuals = [Visual0, Visual1, Visual2, Visual3, Visual4];
export function WatWeDoen() {
  return (
    <section className="service-section light-section home-services">
      <div className="section-heading">
        <span className="section-eyebrow">WAT WE DOEN</span>
        <h2>
          Alles wat je bedrijf <span>online</span> nodig heeft.
        </h2>
      </div>
      <div className="home-services-grid">
        {items.map((item, i) => {
          const Visual = visuals[i];
          return (
            <article key={item.no} className={"home-service-card home-service-card-" + i}>
              <div className="home-service-copy">
                <span>
                  {item.no} · {item.label}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={"/diensten/" + item.slug}>
                  {item.link}
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="home-service-visual">
                <Visual />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
