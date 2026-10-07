"use client";
import Link from "next/link";
import { useId, useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { EASE } from "@/components/motion/presets";
import Difference0 from "./art/Difference0";
export { ModulePicker } from "./ModulePicker";
export function ServiceFaq({
  items,
  initialOpen = 0,
}: {
  items: { q: string; a: string }[];
  initialOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(initialOpen);
  const instance = useId();
  return (
    <div className="faq-items">
      {items.map((x, i) => (
        <div key={x.q} className={"faq-item " + (open === i ? "is-open" : "")}>
          <h3>
            <button
              id={instance + "-question-" + i}
              aria-expanded={open === i}
              aria-controls={instance + "-answer-" + i}
              onClick={() => setOpen(open === i ? null : i)}
            >
              {x.q}
              <img
                src={open === i ? "/figma/0ad4c.svg" : "/figma/9ff98.svg"}
                alt=""
                width="24"
                height="24"
              />
            </button>
          </h3>
          <motion.div
            id={instance + "-answer-" + i}
            className="faq-answer"
            role="region"
            aria-labelledby={instance + "-question-" + i}
            inert={open !== i}
            initial={false}
            animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div>
              <p>{x.a}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
const fmt = (n: number) => Math.round(n).toLocaleString("nl-BE");

export function SavingsCalculator() {
  const [requests, setRequests] = useState(12),
    [minutes, setMinutes] = useState(25),
    [rate, setRate] = useState(45);
  const hours = (requests * minutes) / 60,
    year = hours * 46;
  const sliders = [
    {
      label: "Aanvragen per week",
      hint: "Offertes, contactformulieren en boekingen",
      value: requests,
      min: 1,
      max: 50,
      set: setRequests,
      suffix: "",
    },
    {
      label: "Minuten handwerk per aanvraag",
      hint: "Overtypen, offerte opmaken en opvolgen",
      value: minutes,
      min: 5,
      max: 60,
      set: setMinutes,
      suffix: " min",
    },
    {
      label: "Kost van een uur",
      hint: "Jouw uurtarief of dat van je medewerker",
      value: rate,
      min: 20,
      max: 100,
      set: setRate,
      suffix: "",
    },
  ];
  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <div className="calculator-title">
          Jouw situatie <small>Sleep om aan te passen</small>
        </div>
        {sliders.map((x, i) => (
          <label key={x.label}>
            <span>
              <strong>{x.label}</strong>
              <output>
                {i === 2 ? "€ " : ""}
                {x.value}
                {x.suffix}
              </output>
            </span>
            <small>{x.hint}</small>
            <input
              type="range"
              min={x.min}
              max={x.max}
              value={x.value}
              onChange={(e) => x.set(+e.target.value)}
              style={
                {
                  "--progress": ((x.value - x.min) / (x.max - x.min)) * 100 + "%",
                } as CSSProperties
              }
            />
          </label>
        ))}
      </div>
      <div className="calculator-result" aria-live="polite" aria-atomic="true">
        <span className="tiny-label">JE VERLIEST NU</span>
        <strong className="hours">
          <AnimatedNumber value={hours} format={fmt} /> uur
        </strong>
        <p>per week aan handwerk</p>
        <div className="yearly">
          <div>
            <strong>
              <AnimatedNumber value={year} format={fmt} /> uur
            </strong>
            <small>per jaar</small>
          </div>
          <div>
            <strong>
              € <AnimatedNumber value={year * rate} format={fmt} />
            </strong>
            <small>loonkost per jaar</small>
          </div>
        </div>
        <small>Berekend op 46 werkweken per jaar.</small>
        <Link
          className="button white"
          href={`/contact?dienst=Automatisatie&aanvragen=${requests}&minuten=${minutes}&uurtarief=${rate}`}
        >
          Plan een gesprek →
        </Link>
      </div>
    </div>
  );
}
export function BeforeAfter() {
  const [active, setActive] = useState<"before" | "after">("after");
  return (
    <div className="website-comparison">
      <div className="makeover-toolbar">
        <p>
          <span aria-hidden="true">✳</span> Zelfde bedrijf. Andere indruk.
        </p>
        <div className="website-comparison-switch" role="group" aria-label="Website vergelijken">
          {(
            [
              ["before", "Voor"],
              ["after", "Na Kosifly"],
            ] as const
          ).map(([side, label]) => (
            <button
              key={side}
              type="button"
              aria-pressed={active === side}
              aria-controls="website-makeover"
              onClick={() => setActive(side)}
            >
              {side === "after" && <span aria-hidden="true">✦ </span>}
              {label}
            </button>
          ))}
        </div>
      </div>
      <Difference0 active={active} />
      <div className="makeover-footer">
        <p className="makeover-result" role="status">
          {active === "after"
            ? "Een verhaal dat klopt. Een volgende stap die logisch voelt."
            : "Veel informatie. Weinig richting. Een gemiste eerste indruk."}
        </p>
        <span>Fictieve autodealer · ontwerpvoorbeeld</span>
      </div>
    </div>
  );
}
