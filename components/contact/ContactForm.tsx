"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { delayed, EASE, scaleIn } from "@/components/motion/presets";
import { CheckSmall, LockIcon } from "@/components/ui/icons";
import {
  EXTRAS,
  ONDERHOUD,
  PACKAGES,
  SEO,
  SERVICES,
  applyQuoteParams,
  calcQuote,
  extraQuantity,
  fmt,
  type QuoteInput,
} from "@/lib/pricing";

const label = "font-inter text-[13px] font-semibold leading-[normal] text-ink";
const input =
  "h-[52px] w-full rounded-[12px] border border-[#e6e6e6] bg-[#f6f6f6] px-[16px] font-inter text-[15px] text-ink outline-none placeholder:text-[#9e9e9e] focus:border-brand-soft focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,51,79,0.18)]";

function Field({
  name,
  text,
  type = "text",
  placeholder,
}: {
  name: string;
  text: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-[8px]">
      <span className={label}>{text}</span>
      <input
        name={name}
        type={type}
        autoComplete={
          {
            naam: "name",
            bedrijf: "organization",
            email: "email",
            telefoon: "tel",
            website: "url",
          }[name]
        }
        required={name === "naam" || name === "email"}
        placeholder={placeholder}
        className={input}
      />
    </label>
  );
}

function Chip({
  on,
  children,
  onClick,
}: {
  on: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`flex items-center gap-[6px] rounded-[24px] py-[10px] pr-[16px] font-inter text-[14px] font-semibold leading-[normal] ${on ? "bg-ink pl-[12px] text-white" : "border border-[#e6e6e6] bg-white pl-[16px] text-ink"}`}
    >
      {on && <CheckSmall />}
      {children}
    </button>
  );
}

/** Tabinhoud die zacht binnenkomt bij het wisselen van tab; de hoogte van het formulier verandert niet abrupt. */
function TabBody({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex flex-col gap-[22px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Segmented<T extends string>({
  items,
  value,
  onChange,
  py = 11,
  size = 13,
}: {
  items: { id: T; name: string }[];
  value: T;
  onChange: (v: T) => void;
  py?: number;
  size?: number;
}) {
  return (
    <div className="segmented-options flex gap-[4px] rounded-[14px] bg-[#f2f2f2] p-[4px]">
      {items.map((i) => (
        <button
          key={i.id}
          type="button"
          onClick={() => onChange(i.id)}
          aria-pressed={value === i.id}
          style={{ paddingTop: py, paddingBottom: py, fontSize: size }}
          className={`flex-1 rounded-[10px] font-inter leading-[normal] ${value === i.id ? "bg-white font-semibold text-brand shadow-[0_2px_8px_rgba(0,0,0,0.12)]" : "text-ink"}`}
        >
          {i.name}
        </button>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [tab, setTab] = useState<"bericht" | "offerte">("bericht");
  const [budget, setBudget] = useState("2500-5000");
  const [topics, setTopics] = useState<string[]>([]);
  const [q, setQ] = useState<QuoteInput>({
    services: ["Website", "Lokale SEO", "Onderhoud & hosting"],
    pkg: "bedrijfssite",
    extras: ["copywriting"],
    onderhoud: "plus",
    seo: "lokaal",
  });
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [calculation, setCalculation] = useState<{
    aanvragen: number;
    minuten: number;
    uurtarief: number;
  } | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "offerte") setTab("offerte");
    setQ((current) => applyQuoteParams(current, params));
    const service = params.get("dienst");
    const aliases: Record<string, string> = {
      Webdesign: "Website",
      "Web apps & maatwerk": "Web app",
      "AI & automatisaties": "Automatisatie",
      "Onderhoud & hosting": "Onderhoud",
    };
    const topic = service ? aliases[service] || service : "";
    if (["Website", "Lokale SEO", "Web app", "Automatisatie", "Onderhoud"].includes(topic))
      setTopics([topic]);
    const aanvragen = Number(params.get("aanvragen")),
      minuten = Number(params.get("minuten")),
      uurtarief = Number(params.get("uurtarief"));
    if (
      Number.isInteger(aanvragen) &&
      aanvragen >= 1 &&
      aanvragen <= 50 &&
      Number.isInteger(minuten) &&
      minuten >= 5 &&
      minuten <= 60 &&
      Number.isInteger(uurtarief) &&
      uurtarief >= 20 &&
      uurtarief <= 100
    )
      setCalculation({ aanvragen, minuten, uurtarief });
  }, []);
  const quote = useMemo(() => calcQuote(q), [q]);
  const toggle = (arr: string[], v: string) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSaving(true);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          name: data.naam,
          type: tab,
          topics,
          budget,
          calculation,
          quote: tab === "offerte" ? { ...q, ...quote } : undefined,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok)
        throw new Error(
          result?.error ||
            "Je aanvraag kon niet verstuurd worden. Probeer opnieuw of mail info@kosifly.com.",
        );
      setStatus("Bedankt! Je aanvraag is verstuurd. We nemen contact met je op.");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Versturen lukt momenteel niet. Mail gerust naar info@kosifly.com.",
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <motion.form
      variants={delayed(scaleIn, 0.25)}
      initial="hidden"
      animate="show"
      onSubmit={submit}
      className="contact-form flex w-[760px] flex-col gap-[22px] rounded-[28px] bg-white p-[48px] shadow-[0_30px_70px_rgba(0,0,0,0.45),0_0_60px_rgba(232,51,79,0.3)]"
    >
      {calculation && (
        <div className="contact-context">
          <strong>Je berekening is overgenomen</strong>
          <br />
          {calculation.aanvragen} aanvragen per week · {calculation.minuten} minuten per aanvraag ·
          € {calculation.uurtarief}/uur
          <br />
          Ongeveer {Math.round((calculation.aanvragen * calculation.minuten) / 60)} uur per week aan
          handwerk.
        </div>
      )}
      {/* tabbladen */}
      <div className="flex gap-[4px] rounded-[14px] bg-[#f2f2f2] p-[4px]">
        {(
          [
            ["bericht", "Kort bericht"],
            ["offerte", "Offerte samenstellen"],
          ] as const
        ).map(([id, text]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            aria-pressed={tab === id}
            className={`flex-1 rounded-[10px] py-[13px] font-inter text-[15px] leading-[normal] ${tab === id ? "bg-white font-semibold text-brand shadow-[0_2px_8px_rgba(0,0,0,0.12)]" : "text-ink"}`}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[6px]">
        <h2 className="font-manrope text-[30px] font-extrabold leading-[normal] tracking-[-0.0087em] text-ink">
          {tab === "bericht" ? "Vertel ons over je project" : "Stel je offerte samen"}
        </h2>
        <p className="font-inter text-[15px] leading-[normal] text-grey">
          {tab === "bericht"
            ? "Je krijgt binnen 24 uur antwoord."
            : "Kies wat je nodig hebt en zie meteen je prijsindicatie."}
        </p>
      </div>

      {tab === "bericht" ? (
        <TabBody key="bericht">
          <div className="contact-field-row flex gap-[16px]">
            <Field name="naam" text="Naam *" placeholder="Je naam" />
            <Field name="bedrijf" text="Bedrijf" placeholder="Je bedrijf" />
          </div>
          <div className="contact-field-row flex gap-[16px]">
            <Field name="email" type="email" text="E-mail *" placeholder="jij@bedrijf.be" />
            <Field name="telefoon" type="tel" text="Telefoon" placeholder="Optioneel" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className={label}>Waarmee kunnen we helpen?</span>
            <div className="flex flex-wrap gap-[8px]">
              {[
                "Website",
                "Lokale SEO",
                "Web app",
                "Automatisatie",
                "Onderhoud",
                "Weet ik nog niet",
              ].map((t) => (
                <Chip key={t} on={topics.includes(t)} onClick={() => setTopics(toggle(topics, t))}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className={label}>Budget (optioneel)</span>
            <Segmented
              value={budget}
              onChange={setBudget}
              items={[
                { id: "<2500", name: "< € 2.500" },
                { id: "2500-5000", name: "€ 2.500 – 5.000" },
                { id: "5000-10000", name: "€ 5.000 – 10.000" },
                { id: ">10000", name: "> € 10.000" },
              ]}
            />
          </div>
          <label className="flex flex-col gap-[8px]">
            <span className={label}>Je bericht</span>
            <textarea
              name="bericht"
              placeholder="Vertel kort wat je wil bereiken…"
              className="h-[120px] w-full resize-none rounded-[12px] border border-[#e6e6e6] bg-[#f6f6f6] px-[16px] py-[16px] font-inter text-[15px] text-ink outline-none placeholder:text-[#9e9e9e] focus:border-brand-soft focus:bg-white focus:shadow-[0_0_0_4px_rgba(232,51,79,0.18)]"
            />
          </label>
        </TabBody>
      ) : (
        <TabBody key="offerte">
          <div className="flex items-center gap-[10px] rounded-[12px] bg-[#fff0f2] px-[14px] py-[11px]">
            <span className="flex size-[20px] items-center justify-center rounded-full bg-brand text-white">
              <CheckSmall size={12} />
            </span>
            <span className="flex-1 font-inter text-[14px] font-medium leading-[normal] text-brand">
              Je keuzes uit de prijscalculator zijn overgenomen.
            </span>
            <button
              type="button"
              className="font-inter text-[14px] font-semibold text-brand underline"
            >
              Aanpassen
            </button>
          </div>

          <Step n={1} title="Wat heb je nodig?">
            <div className="flex flex-wrap gap-[8px]">
              {SERVICES.map((s) => (
                <Chip
                  key={s}
                  on={q.services.includes(s)}
                  onClick={() => setQ({ ...q, services: toggle(q.services, s) })}
                >
                  {s}
                </Chip>
              ))}
            </div>
          </Step>

          <Step n={2} title="Welk websitepakket?">
            <div className="package-options flex gap-[8px]">
              {PACKAGES.map((p) => {
                const on = q.pkg === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setQ({ ...q, pkg: p.id })}
                    className={`flex flex-1 items-center gap-[10px] rounded-[14px] p-[14px] text-left ${on ? "border-2 border-brand bg-[#fff0f2]" : "border border-[#e6e6e6] bg-white"}`}
                  >
                    <span
                      className={`size-[18px] shrink-0 rounded-full ${on ? "border-[5.5px] border-brand" : "border-[1.5px] border-[#bfbfbf]"}`}
                    />
                    <span className="flex flex-col">
                      <span className="font-inter text-[14px] font-semibold leading-[normal] text-ink">
                        {p.name}
                      </span>
                      <span className="font-inter text-[12px] leading-[normal] text-grey">
                        € {fmt(p.price)}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Step>

          <Step n={3} title="Extra's">
            <div className="flex flex-wrap gap-[8px]">
              {EXTRAS.map((e) => (
                <Chip
                  key={e.id}
                  on={q.extras.includes(e.id)}
                  onClick={() => setQ({ ...q, extras: toggle(q.extras, e.id) })}
                >
                  {"perPage" in e && e.perPage
                    ? `${e.name} · ${extraQuantity(e, q)} pagina's · € ${fmt(e.unit * extraQuantity(e, q))}`
                    : `${e.name} · € ${fmt(e.unit)}`}
                </Chip>
              ))}
            </div>
          </Step>

          <Step n={4} title="Maandelijks">
            <div className="monthly-options flex gap-[10px]">
              <div className="flex flex-1 flex-col gap-[6px]">
                <span className="font-inter text-[12px] font-medium text-grey">
                  Onderhoud & hosting
                </span>
                <Segmented
                  py={9}
                  size={12}
                  value={q.onderhoud}
                  onChange={(v) => setQ({ ...q, onderhoud: v })}
                  items={[...ONDERHOUD]}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[6px]">
                <span className="font-inter text-[12px] font-medium text-grey">Lokale SEO</span>
                <Segmented
                  py={9}
                  size={12}
                  value={q.seo}
                  onChange={(v) => setQ({ ...q, seo: v })}
                  items={[...SEO]}
                />
              </div>
            </div>
          </Step>

          {/* live prijsindicatie */}
          <div
            className="flex flex-col gap-[14px] rounded-[18px] px-[26px] py-[24px]"
            style={{
              backgroundImage: "linear-gradient(135deg, #000 0%, rgb(151,3,3) 50%, #000 100%)",
            }}
          >
            <span className="font-orbitron text-[10px] font-medium leading-[normal] tracking-[0.22em] text-white/70">
              JE PRIJSINDICATIE
            </span>
            <div className="price-total flex justify-between">
              <div className="flex flex-col gap-[2px]">
                <span className="font-inter text-[13px] font-medium text-white/70">Eenmalig</span>
                <span className="font-geist text-[32px] font-extrabold leading-[normal] tracking-[-0.03em] text-white">
                  {quote.hasMaatwerk
                    ? "Prijs na analyse"
                    : quote.once
                      ? `€ ${fmt(quote.once)} – € ${fmt(quote.high)}`
                      : "—"}
                </span>
              </div>
              <div className="flex flex-col items-end gap-[2px]">
                <span className="font-inter text-[13px] font-medium text-white/70">Per maand</span>
                <span className="font-geist text-[32px] font-extrabold leading-[normal] tracking-[-0.03em] text-white">
                  {quote.monthly ? `€ ${fmt(quote.monthly)}` : "—"}
                </span>
              </div>
            </div>
            <span className="font-inter text-[13px] leading-[normal] text-white/70">
              {[
                quote.hasSite && quote.pkg.name,
                q.extras.includes("copywriting") && quote.hasSite && "Copywriting",
                q.services.includes("Onderhoud & hosting") &&
                  `Onderhoud ${ONDERHOUD.find((o) => o.id === q.onderhoud)?.name}`,
                q.services.includes("Lokale SEO") &&
                  `Lokale SEO ${SEO.find((s) => s.id === q.seo)?.name}`,
              ]
                .filter(Boolean)
                .join(" · ")}
              {quote.delivery ? `  ·  levering in ongeveer ${quote.delivery}` : ""}
            </span>
          </div>

          <div className="contact-field-row flex gap-[14px]">
            <Field name="naam" text="Naam *" placeholder="Je naam" />
            <Field name="email" type="email" text="E-mail *" placeholder="jij@bedrijf.be" />
          </div>
          <div className="contact-field-row flex gap-[14px]">
            <Field name="bedrijf" text="Bedrijf" placeholder="Je bedrijf" />
            <Field name="telefoon" type="tel" text="Telefoon" placeholder="Optioneel" />
          </div>
          <label className="flex flex-col gap-[7px]">
            <span className={label}>Nog iets dat we moeten weten?</span>
            <textarea
              name="bericht"
              placeholder="Optioneel"
              className="h-[84px] w-full resize-none rounded-[12px] border border-[#e6e6e6] bg-[#f6f6f6] px-[16px] py-[14px] font-inter text-[15px] text-ink outline-none placeholder:text-[#9e9e9e]"
            />
          </label>
        </TabBody>
      )}

      <label className="contact-consent flex items-center gap-[10px]">
        <input
          type="checkbox"
          required
          className="peer sr-only"
          aria-label="Ik ga akkoord met het privacybeleid"
        />
        <span className="flex size-[22px] shrink-0 items-center justify-center rounded-[6px] border border-[#bfbfbf] text-white peer-checked:border-brand peer-checked:bg-brand">
          <CheckSmall />
        </span>
        <span className="font-inter text-[14px] leading-[normal] text-[#4d4d4d]">
          Ik ga akkoord met het{" "}
          <a href="/privacy" className="underline">
            privacybeleid
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={saving}
        aria-busy={saving}
        className="flex w-full items-center justify-center rounded-[40px] bg-accent-gradient py-[19px] font-inter text-[17px] font-semibold leading-[normal] text-white shadow-[0_8px_24px_rgba(232,51,79,0.45)]"
      >
        {saving
          ? "Even versturen…"
          : tab === "bericht"
            ? "Verstuur je aanvraag →"
            : "Vraag je offerte aan →"}
      </button>
      {status && (
        <div className="submission-status" role="status">
          <p>{status}</p>
          {!status.startsWith("Bedankt!") && (
            <a href="mailto:info@kosifly.com">Mail naar info@kosifly.com →</a>
          )}
        </div>
      )}
      <p className="flex items-center justify-center gap-[8px] font-inter text-[13px] leading-[normal] text-grey">
        <LockIcon />
        {tab === "bericht"
          ? "Je gegevens blijven bij ons. We gebruiken ze enkel om je te antwoorden."
          : "Indicatie excl. btw. Je vaste prijs krijg je na een kort gesprek."}
      </p>
    </motion.form>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-[10px]">
        <span className="flex size-[24px] items-center justify-center rounded-full bg-accent-gradient font-inter text-[11px] font-bold text-white">
          {n}
        </span>
        <span className="font-inter text-[15px] font-semibold leading-[normal] text-ink">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
