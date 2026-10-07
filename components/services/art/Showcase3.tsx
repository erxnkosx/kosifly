const assetPathPrefix = "/figma";
const imgGloed = `${assetPathPrefix}/dcf82.svg`;
const imgVloerschaduw = `${assetPathPrefix}/dcbac.svg`;
const imgStroom = `${assetPathPrefix}/f9f8c.svg`;
const imgGroup = `${assetPathPrefix}/5deae.svg`;
const imgEllipse = `${assetPathPrefix}/95a16.svg`;
const imgGroup1 = `${assetPathPrefix}/e41e3.svg`;
const imgGroup2 = `${assetPathPrefix}/b1cf7.svg`;
const imgGroup3 = `${assetPathPrefix}/52e3f.svg`;
const imgAanwijslijnen = `${assetPathPrefix}/fe15e.svg`;
const imgAnkerpunt1 = `${assetPathPrefix}/dd880.svg`;

export default function Showcase3() {
  return (
    <div className="relative w-[1920px] h-[650px]">
      <div className="absolute w-[1920px] h-[1120px] left-0 top-[-275px]">
        <div
          className="absolute h-[560px] left-[460px] top-[330px] w-[1000px]"
          data-node-id="393:1675"
          data-name="Gloed"
        >
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
          data-node-id="393:1676"
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
        <div
          className="absolute h-[560px] left-[500px] top-[320px] w-[920px]"
          data-node-id="393:1677"
          data-name="Beeld"
        >
          <div
            className="absolute h-[560px] left-0 top-0 w-[920px]"
            data-node-id="396:1703"
            data-name="Stroom"
          >
            <img
              loading="lazy"
              decoding="async"
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgStroom}
            />
          </div>
          <div
            className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.55)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-col gap-[14px] items-start left-0 overflow-clip p-[20px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(130,0,18,0.45)] top-[30px] w-[340px]"
            data-node-id="396:1630"
            data-name="Aanvraag"
          >
            <div
              className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0"
              data-node-id="396:1631"
              data-name="Kop"
            >
              <div
                className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[34px]"
                data-node-id="396:1632"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
                }}
                data-name="Icoon"
              >
                <div
                  className="overflow-clip relative shrink-0 size-[18.545px]"
                  data-node-id="396:1633"
                  data-name="Icon / mail"
                >
                  <div
                    className="absolute inset-[18.75%_10.42%]"
                    data-node-id="I396:1633;231:217"
                    data-name="Group"
                  >
                    <div className="absolute inset-[-6.67%_-5.26%]">
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
                className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0"
                data-node-id="396:1637"
                data-name="Tekst"
              >
                <p
                  className="font-inter font-semibold relative shrink-0 text-[15px] text-white whitespace-nowrap"
                  data-node-id="396:1638"
                >
                  Nieuwe aanvraag
                </p>
                <p
                  className="font-inter font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.55)] whitespace-pre"
                  data-node-id="396:1639"
                >{`via je website  ·  2 min geleden`}</p>
              </div>
            </div>
            <div
              className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
              data-node-id="396:1640"
              data-name="Afzender"
            >
              <div
                className="relative shrink-0 size-[26px]"
                data-node-id="396:1641"
                data-name="Ellipse"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgEllipse}
                />
              </div>
              <p
                className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                data-node-id="396:1642"
              >
                Lien Vermeulen
              </p>
              <p
                className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.55)] whitespace-nowrap"
                data-node-id="396:1643"
              >
                Mechelen
              </p>
            </div>
            <div
              className="bg-[rgba(255,255,255,0.07)] content-stretch flex flex-col items-start overflow-clip p-[14px] relative rounded-[14px] shrink-0 w-full"
              data-node-id="396:1644"
              data-name="Bericht"
            >
              <p
                className="[word-break:break-word] font-inter font-normal leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.85)] w-full"
                data-node-id="396:1645"
              >
                <span className="leading-[21px]">{`Hallo, we zoeken een `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-inter font-semibold leading-[21px] text-[#f24a63] underline">
                  warmtepomp
                </span>
                <span className="leading-[21px]">{` voor onze woning van `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-inter font-semibold leading-[21px] text-[#f24a63] underline">
                  160 m²
                </span>
                <span className="leading-[21px]">{` in `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-inter font-semibold leading-[21px] text-[#f24a63] underline">
                  Mechelen
                </span>
                <span className="leading-[21px]">{`. Kunnen jullie eens `}</span>
                <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-inter font-semibold leading-[21px] text-[#f24a63] underline">
                  langskomen
                </span>
                <span className="leading-[21px]">?</span>
              </p>
            </div>
          </div>
          <div
            className="absolute backdrop-blur-[12px] bg-[rgba(0,0,0,0.55)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex flex-col gap-[10px] items-start left-0 overflow-clip px-[20px] py-[18px] rounded-[20px] shadow-[0px_0px_40px_0px_rgba(130,0,18,0.45)] top-[271px] w-[340px]"
            data-node-id="396:1646"
            data-name="AI haalde eruit"
          >
            <div
              className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0"
              data-node-id="396:1647"
              data-name="Kop"
            >
              <div
                className="content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[26px]"
                data-node-id="396:1648"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
                }}
                data-name="Icoon"
              >
                <div
                  className="overflow-clip relative shrink-0 size-[14.182px]"
                  data-node-id="396:1649"
                  data-name="Icon / sparkles"
                >
                  <div
                    className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
                    data-node-id="I396:1649;231:303"
                    data-name="Group"
                  >
                    <div className="absolute inset-[-6.06%_-5.88%]">
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
              <p
                className="[word-break:break-word] font-orbitron font-medium leading-[normal] relative shrink-0 text-[10px] text-[rgba(255,255,255,0.75)] tracking-[2.2px] whitespace-nowrap"
                data-node-id="396:1653"
              >
                AI HAALDE ERUIT
              </p>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="396:1654"
              data-name="Toestel"
            >
              <p
                className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
                data-node-id="396:1655"
              >
                Toestel
              </p>
              <div
                className="bg-[rgba(242,74,99,0.18)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[12px] shrink-0"
                data-node-id="396:1656"
                data-name="Waarde"
              >
                <p
                  className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#ffbfcc] text-[12px] whitespace-nowrap"
                  data-node-id="396:1657"
                >
                  Warmtepomp
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="396:1658"
              data-name="Woning"
            >
              <p
                className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
                data-node-id="396:1659"
              >
                Woning
              </p>
              <div
                className="bg-[rgba(242,74,99,0.18)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[12px] shrink-0"
                data-node-id="396:1660"
                data-name="Waarde"
              >
                <p
                  className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#ffbfcc] text-[12px] whitespace-nowrap"
                  data-node-id="396:1661"
                >
                  160 m²
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="396:1662"
              data-name="Gemeente"
            >
              <p
                className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
                data-node-id="396:1663"
              >
                Gemeente
              </p>
              <div
                className="bg-[rgba(242,74,99,0.18)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[12px] shrink-0"
                data-node-id="396:1664"
                data-name="Waarde"
              >
                <p
                  className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#ffbfcc] text-[12px] whitespace-nowrap"
                  data-node-id="396:1665"
                >
                  Mechelen
                </p>
              </div>
            </div>
            <div
              className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full"
              data-node-id="396:1666"
              data-name="Volgende stap"
            >
              <p
                className="[word-break:break-word] font-inter font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(255,255,255,0.6)] whitespace-nowrap"
                data-node-id="396:1667"
              >
                Volgende stap
              </p>
              <div
                className="bg-[rgba(242,74,99,0.18)] content-stretch flex items-start overflow-clip px-[10px] py-[4px] relative rounded-[12px] shrink-0"
                data-node-id="396:1668"
                data-name="Waarde"
              >
                <p
                  className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#ffbfcc] text-[12px] whitespace-nowrap"
                  data-node-id="396:1669"
                >
                  Plaatsbezoek
                </p>
              </div>
            </div>
          </div>
          <div
            className="absolute flex h-[403.86px] items-center justify-center left-[480px] top-[73.01px] w-[430.144px]"
            data-node-id="396:1670"
          >
            <div className="flex-none rotate-[-1.5deg]">
              <div
                className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[28px] relative rounded-[16px] shadow-[0px_0px_70px_0px_rgba(153,5,20,0.45),0px_30px_60px_0px_rgba(0,0,0,0.5)] w-[420px]"
                data-name="Offerte"
              >
                <div
                  className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="396:1671"
                  data-name="Kop"
                >
                  <div
                    className="content-stretch flex flex-col gap-[3px] items-start overflow-clip relative shrink-0"
                    data-node-id="396:1672"
                    data-name="Bedrijf"
                  >
                    <p
                      className="font-manrope font-extrabold relative shrink-0 text-[#111] text-[18px]"
                      data-node-id="396:1673"
                    >
                      Installatie Peeters
                    </p>
                    <p
                      className="font-inter font-normal not-italic relative shrink-0 text-[#808080] text-[12px]"
                      data-node-id="396:1674"
                    >
                      Voor Lien Vermeulen, Mechelen
                    </p>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[3px] items-end overflow-clip relative shrink-0"
                    data-node-id="396:1675"
                    data-name="Nummer"
                  >
                    <p
                      className="font-orbitron font-medium relative shrink-0 text-[#810012] text-[10px] tracking-[2.2px]"
                      data-node-id="396:1676"
                    >
                      OFFERTE
                    </p>
                    <p
                      className="font-inter font-normal not-italic relative shrink-0 text-[#808080] text-[11px]"
                      data-node-id="396:1677"
                    >
                      OF-2026-118
                    </p>
                  </div>
                </div>
                <div
                  className="bg-[#fff0f2] content-stretch flex gap-[8px] items-center overflow-clip pl-[10px] pr-[12px] py-[6px] relative rounded-[14px] shrink-0"
                  data-node-id="396:1678"
                  data-name="AI-voorstel"
                >
                  <div
                    className="content-stretch flex items-center justify-center overflow-clip relative rounded-[9px] shrink-0 size-[18px]"
                    data-node-id="396:1679"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
                    }}
                    data-name="Icoon"
                  >
                    <div
                      className="overflow-clip relative shrink-0 size-[9.818px]"
                      data-node-id="396:1680"
                      data-name="Icon / sparkles"
                    >
                      <div
                        className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
                        data-node-id="I396:1680;231:303"
                        data-name="Group"
                      >
                        <div className="absolute inset-[-6.06%_-5.88%]">
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
                  <p
                    className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#810012] text-[11px] whitespace-nowrap"
                    data-node-id="396:1684"
                  >
                    AI-voorstel · klaar om te controleren
                  </p>
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-[13px] w-full whitespace-nowrap"
                  data-node-id="396:1685"
                  data-name="Regels"
                >
                  <div
                    className="border-[#ebebeb] border-b border-solid content-stretch flex items-center justify-between overflow-clip py-[12px] relative shrink-0 w-full"
                    data-node-id="396:1686"
                    data-name="Lucht-water warmtepomp 8 kW"
                  >
                    <p
                      className="font-inter font-normal relative shrink-0 text-[#404040]"
                      data-node-id="396:1687"
                    >
                      Lucht-water warmtepomp 8 kW
                    </p>
                    <p
                      className="font-inter font-semibold relative shrink-0 text-[#111]"
                      data-node-id="396:1688"
                    >
                      € 9.450
                    </p>
                  </div>
                  <div
                    className="border-[#ebebeb] border-b border-solid content-stretch flex items-center justify-between overflow-clip py-[12px] relative shrink-0 w-full"
                    data-node-id="396:1689"
                    data-name="Plaatsing en inbedrijfstelling"
                  >
                    <p
                      className="font-inter font-normal relative shrink-0 text-[#404040]"
                      data-node-id="396:1690"
                    >
                      Plaatsing en inbedrijfstelling
                    </p>
                    <p
                      className="font-inter font-semibold relative shrink-0 text-[#111]"
                      data-node-id="396:1691"
                    >
                      € 1.850
                    </p>
                  </div>
                  <div
                    className="border-[#ebebeb] border-b border-solid content-stretch flex items-center justify-between overflow-clip py-[12px] relative shrink-0 w-full"
                    data-node-id="396:1692"
                    data-name="Plaatsbezoek"
                  >
                    <p
                      className="font-inter font-normal relative shrink-0 text-[#404040]"
                      data-node-id="396:1693"
                    >
                      Plaatsbezoek
                    </p>
                    <p
                      className="font-inter font-semibold relative shrink-0 text-[#111]"
                      data-node-id="396:1694"
                    >
                      gratis
                    </p>
                  </div>
                </div>
                <div
                  className="[word-break:break-word] content-stretch flex items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-full whitespace-nowrap"
                  data-node-id="396:1695"
                  data-name="Totaal"
                >
                  <p
                    className="font-inter font-medium not-italic relative shrink-0 text-[#808080] text-[13px]"
                    data-node-id="396:1696"
                  >
                    Totaal excl. btw
                  </p>
                  <p
                    className="font-manrope font-extrabold relative shrink-0 text-[#111] text-[24px]"
                    data-node-id="396:1697"
                  >
                    € 11.300
                  </p>
                </div>
                <div
                  className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0 w-full"
                  data-node-id="396:1698"
                  data-name="Knoppen"
                >
                  <div
                    className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px overflow-clip py-[13px] relative rounded-[24px] shadow-[0px_0px_16px_0px_rgba(232,51,79,0.4)]"
                    data-node-id="396:1699"
                    style={{
                      backgroundImage:
                        "linear-gradient(170.27242144859838deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
                    }}
                    data-name="Goedkeuren en versturen"
                  >
                    <p
                      className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap"
                      data-node-id="396:1700"
                    >
                      Goedkeuren en versturen
                    </p>
                  </div>
                  <div
                    className="border border-[#d1d1d1] border-solid content-stretch flex items-center justify-center overflow-clip px-[18px] py-[13px] relative rounded-[24px] shrink-0"
                    data-node-id="396:1701"
                    data-name="Aanpassen"
                  >
                    <p
                      className="[word-break:break-word] font-inter font-semibold leading-[normal] not-italic relative shrink-0 text-[#111] text-[13px] whitespace-nowrap"
                      data-node-id="396:1702"
                    >
                      Aanpassen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute border-2 border-[rgba(255,255,255,0.9)] border-solid content-stretch flex items-center justify-center left-[398px] overflow-clip rounded-[22px] shadow-[0px_0px_22px_0px_rgba(232,51,79,0.9)] size-[44px] top-[258px]"
            data-node-id="396:1706"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="AI-knooppunt"
          >
            <div
              className="overflow-clip relative shrink-0 size-[19.2px]"
              data-node-id="396:1707"
              data-name="Icon / sparkles"
            >
              <div
                className="absolute inset-[14.58%_12.5%_16.67%_16.67%]"
                data-node-id="I396:1707;231:303"
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
          </div>
        </div>
        <div
          className="absolute h-[1120px] left-0 top-0 w-[1920px]"
          data-node-id="396:1739"
          data-name="Aanwijslijnen"
        >
          <img
            loading="lazy"
            decoding="async"
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgAanwijslijnen}
          />
        </div>
        <div
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[114px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[362px]"
          data-node-id="396:1711"
          data-name="Aanwijzer 1 – Aanvraag komt binnen"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            data-node-id="396:1712"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p
              className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
              data-node-id="396:1713"
            >
              1
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-node-id="396:1714"
            data-name="Tekst"
          >
            <p
              className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap"
              data-node-id="396:1715"
            >
              Aanvraag komt binnen
            </p>
            <p
              className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]"
              data-node-id="396:1716"
            >
              Via het formulier op je site.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[531.48px] size-[12px] top-[382px]"
          data-node-id="396:1717"
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
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[114px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[622px]"
          data-node-id="396:1718"
          data-name="Aanwijzer 2 – AI haalt de gegevens eruit"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            data-node-id="396:1719"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p
              className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
              data-node-id="396:1720"
            >
              2
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-node-id="396:1721"
            data-name="Tekst"
          >
            <p
              className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap"
              data-node-id="396:1722"
            >
              AI haalt de gegevens eruit
            </p>
            <p
              className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]"
              data-node-id="396:1723"
            >
              Toestel, oppervlakte en gemeente.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[534.8px] size-[12px] top-[692.8px]"
          data-node-id="396:1724"
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
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[1490px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[362px]"
          data-node-id="396:1725"
          data-name="Aanwijzer 3 – Offerte met jouw prijzen"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            data-node-id="396:1726"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p
              className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
              data-node-id="396:1727"
            >
              3
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-node-id="396:1728"
            data-name="Tekst"
          >
            <p
              className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap"
              data-node-id="396:1729"
            >
              Offerte met jouw prijzen
            </p>
            <p
              className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]"
              data-node-id="396:1730"
            >
              Opgemaakt op basis van je prijslijst.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[1335.86px] size-[12px] top-[560.44px]"
          data-node-id="396:1731"
          data-name="Ankerpunt 3"
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
          className="absolute backdrop-blur-[10px] bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.12)] border-solid content-stretch flex gap-[14px] items-start left-[1490px] overflow-clip pl-[16px] pr-[20px] py-[16px] rounded-[18px] shadow-[0px_0px_36px_0px_rgba(130,0,18,0.45)] top-[622px]"
          data-node-id="396:1732"
          data-name="Aanwijzer 4 – Goedkeuren met één klik"
        >
          <div
            className="content-stretch flex items-center justify-center overflow-clip relative rounded-[14px] shrink-0 size-[28px]"
            data-node-id="396:1733"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgb(232, 51, 79) 14.286%, rgb(126, 12, 30) 85.714%)",
            }}
            data-name="Nummer"
          >
            <p
              className="[word-break:break-word] font-inter font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap"
              data-node-id="396:1734"
            >
              4
            </p>
          </div>
          <div
            className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic overflow-clip relative shrink-0"
            data-node-id="396:1735"
            data-name="Tekst"
          >
            <p
              className="font-inter font-semibold leading-[normal] relative shrink-0 text-[16px] text-white whitespace-nowrap"
              data-node-id="396:1736"
            >
              Goedkeuren met één klik
            </p>
            <p
              className="font-inter font-normal leading-[19px] relative shrink-0 text-[13px] text-[rgba(255,255,255,0.62)] w-[236px]"
              data-node-id="396:1737"
            >
              Jij beslist, de klant krijgt ze meteen.
            </p>
          </div>
        </div>
        <div
          className="absolute left-[1219.51px] size-[12px] top-[735.94px]"
          data-node-id="396:1738"
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
