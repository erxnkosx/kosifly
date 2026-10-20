"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/*
 * "Onder de motorkap" (webdesign, enkel mobiel): een telefoon met een voorbeeldsite die als een story
 * langs vijf ontwerpkeuzes loopt. Elke keuze licht het betrokken onderdeel op, de rest dimt.
 * De voorbeeldsite (Nova Renovatie) is fictief en zo gelabeld.
 */

const STEPS = [
  {
    id: "promise",
    tag: "Belofte",
    title: "Een belofte in vijf seconden",
    text: "Bezoekers beslissen in een paar seconden of ze blijven. Daarom zie je meteen wat het bedrijf doet, voor wie en waar.",
  },
  {
    id: "action",
    tag: "Actie",
    title: "Eén duidelijke volgende stap",
    text: "Geen tien knoppen die om aandacht vragen, maar één actie die opvalt en overal terugkomt.",
  },
  {
    id: "proof",
    tag: "Bewijs",
    title: "Bewijs waar de twijfel zit",
    text: "Reviews staan vlak bij de knop, op het moment dat een bezoeker twijfelt om contact op te nemen.",
  },
  {
    id: "thumb",
    tag: "Duimzone",
    title: "Gemaakt voor je duim",
    text: "Bellen of een bericht sturen zit altijd binnen bereik van je duim, waar je ook scrolt.",
  },
  {
    id: "lead",
    tag: "Aanvraag",
    title: "Elke aanvraag komt binnen",
    text: "Een kort formulier dat meteen bij jou binnenkomt. Je klant krijgt automatisch een bevestiging.",
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

/** Tijd per keuze tijdens de automatische rondleiding (ms). */
const DURATION = 5200;

export function SiteTour() {
  const root = useRef<HTMLDivElement>(null);
  const screen = useRef<HTMLDivElement>(null);
  const site = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);
  const [started, setStarted] = useState(false);
  const [view, setView] = useState({ y: 0, tag: 60 });
  const step = STEPS[index];

  // Respecteer "minder beweging": geen automatische rondleiding.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
  }, []);

  // Speel enkel af zolang de rondleiding in beeld is.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % STEPS.length), DURATION);
    return () => clearTimeout(timer);
  }, [auto, visible, index]);

  // Scrol de voorbeeldsite naar het betrokken onderdeel en zet het label erboven.
  const place = useCallback(() => {
    const s = screen.current;
    const content = site.current;
    if (!s || !content) return;
    const screenH = s.clientHeight;
    const max = Math.max(0, content.scrollHeight - screenH);
    if (step.id === "thumb") {
      const y = Math.min(max, 250);
      const barTop = bar.current ? bar.current.offsetTop : screenH - 60;
      setView({ y, tag: barTop - 17 });
      return;
    }
    const target = content.querySelector<HTMLElement>(`[data-step="${step.id}"]`);
    if (!target) return;
    const top = target.offsetTop;
    const y = Math.max(0, Math.min(max, top - screenH * 0.3));
    // Label op de rand van de rode ring (outline-offset 4px, label ±26px hoog).
    setView({ y, tag: Math.max(46, top - y - 17) });
  }, [step.id]);

  useLayoutEffect(() => {
    place();
  }, [place]);
  useEffect(() => {
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [place]);

  const go = (next: number) => {
    setAuto(false);
    setIndex((next + STEPS.length) % STEPS.length);
  };
  const lit = (id: StepId) => (step.id === id ? " is-lit" : "");

  return (
    <div
      ref={root}
      className={
        "site-tour" + (started ? " is-started" : "") + (auto && visible ? " is-playing" : "")
      }
      style={{ "--tour-duration": `${DURATION}ms` } as CSSProperties}
    >
      <div className="tour-stage" onClick={() => go(index + 1)}>
        <span className="tour-badge">Voorbeeldsite · Nova Renovatie</span>
        <div className="tour-phone" aria-hidden="true">
          <div ref={screen} className="tour-screen">
            <div className="tour-status">
              <span>9:41</span>
              <i />
            </div>
            <div
              ref={site}
              className="tour-site"
              style={{ transform: `translate3d(0, ${-view.y}px, 0)` }}
            >
              <div className="ts-nav">
                <span className="ts-logo">
                  nova<b>.</b>
                </span>
                <span className="ts-burger">
                  <i />
                  <i />
                </span>
              </div>
              <div className={"ts-hero" + lit("promise")} data-step="promise">
                <span className="ts-kicker">Badkamers · regio Mechelen</span>
                <strong>Je nieuwe badkamer, zonder zorgen.</strong>
                <p>Van ontwerp tot laatste tegel, met één vaste prijs vooraf.</p>
              </div>
              <div className={"ts-cta" + lit("action")} data-step="action">
                <span>Vraag je gratis offerte</span>
                <i>→</i>
              </div>
              <div className={"ts-proof" + lit("proof")} data-step="proof">
                <span className="ts-stars">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <i key={n} style={{ "--n": n } as CSSProperties}>
                      ★
                    </i>
                  ))}
                </span>
                <strong>4,9</strong>
                <small>op Google · 86 reviews</small>
              </div>
              <div className="ts-photo">
                <span className="ts-mirror" />
                <span className="ts-sink" />
                <span className="ts-chip">Plaatsbezoek binnen de week</span>
              </div>
              <ol className="ts-steps">
                <li>
                  <b>1</b>Plaatsbezoek
                </li>
                <li>
                  <b>2</b>Vaste prijs
                </li>
                <li>
                  <b>3</b>Wij bouwen
                </li>
              </ol>
              <div className={"ts-form" + lit("lead")} data-step="lead">
                <strong>Vraag je offerte</strong>
                <span className="ts-label">Naam</span>
                <span className="ts-input">
                  <em className="ts-type ts-type-1">Sarah Peeters</em>
                </span>
                <span className="ts-label">Telefoon</span>
                <span className="ts-input">
                  <em className="ts-type ts-type-2">0470 12 34 56</em>
                </span>
                <span className="ts-send">Verstuur aanvraag</span>
              </div>
              <div className="ts-foot">© Nova Renovatie · Mechelen</div>
            </div>
            <div ref={bar} className={"ts-bar" + lit("thumb")}>
              <span className="ts-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                    strokeLinejoin="round"
                  />
                </svg>
                Bellen
              </span>
              <span className="ts-chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path
                    d="M20 11.5c0 4-3.6 7-8 7-1.2 0-2.3-.2-3.3-.6L4 19l1.2-3.6A6.6 6.6 0 0 1 4 11.5c0-4 3.6-7 8-7s8 3 8 7Z"
                    strokeLinejoin="round"
                  />
                </svg>
                WhatsApp
              </span>
            </div>
            <div className={"ts-toast" + (step.id === "lead" ? " is-in" : "")}>
              <span className="ts-toast-icon">✓</span>
              <span>
                <strong>Nieuwe aanvraag</strong>
                <small>Sarah · badkamer, Mechelen</small>
              </span>
              <em>nu</em>
            </div>
            <span key={step.id} className="tour-tag" style={{ top: view.tag }}>
              <b>{index + 1}</b>
              {step.tag}
            </span>
          </div>
        </div>
      </div>

      <div className="tour-caption">
        <div className="tour-bars" role="group" aria-label="Kies een ontwerpkeuze">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={`Keuze ${i + 1}: ${s.title}`}
              aria-pressed={i === index}
              className={i < index ? "is-done" : i === index ? "is-active" : ""}
              onClick={() => go(i)}
            >
              <span key={i === index ? `${index}-${auto}` : undefined} />
            </button>
          ))}
        </div>
        <div className="tour-copy" aria-live="polite">
          <span className="tour-kicker">
            Keuze {index + 1} van {STEPS.length}
          </span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
        <div className="tour-controls">
          <button type="button" aria-label="Vorige keuze" onClick={() => go(index - 1)}>
            ←
          </button>
          <button type="button" aria-label="Volgende keuze" onClick={() => go(index + 1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
