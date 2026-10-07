import { Artwork } from "@/components/ui/Artwork";
import styles from "./HeroVisual.module.css";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrbitSculpture() {
  return (
    <svg className={styles.sculpture} viewBox="0 0 320 340" fill="none" aria-hidden="true">
      <defs>
        <linearGradient
          id="hero-orbit-metal"
          x1="65"
          y1="45"
          x2="235"
          y2="290"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffced3" />
          <stop offset=".17" stopColor="#ee526b" />
          <stop offset=".4" stopColor="#9b001e" />
          <stop offset=".66" stopColor="#47000e" />
          <stop offset=".82" stopColor="#df254a" />
          <stop offset="1" stopColor="#ff8da1" />
        </linearGradient>
        <linearGradient
          id="hero-orbit-edge"
          x1="220"
          y1="70"
          x2="100"
          y2="280"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff0f2" />
          <stop offset=".3" stopColor="#fc7188" />
          <stop offset=".62" stopColor="#a70529" />
          <stop offset="1" stopColor="#500111" />
        </linearGradient>
        <radialGradient id="hero-orbit-shadow">
          <stop stopColor="#5c0824" stopOpacity=".22" />
          <stop offset="1" stopColor="#5c0824" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="164" cy="290" rx="126" ry="31" fill="url(#hero-orbit-shadow)" />
      <g transform="rotate(-32 160 155)">
        <ellipse cx="156" cy="158" rx="91" ry="112" stroke="#530015" strokeWidth="39" />
        <ellipse
          cx="160"
          cy="152"
          rx="91"
          ry="112"
          stroke="url(#hero-orbit-metal)"
          strokeWidth="34"
        />
        <ellipse
          cx="160"
          cy="152"
          rx="107"
          ry="128"
          stroke="url(#hero-orbit-edge)"
          strokeWidth="1.8"
        />
        <ellipse cx="160" cy="152" rx="74" ry="95" stroke="#7b0924" strokeWidth="1.5" />
      </g>
      <g transform="rotate(42 163 161)">
        <ellipse
          cx="163"
          cy="161"
          rx="53"
          ry="113"
          stroke="url(#hero-orbit-metal)"
          strokeWidth="26"
        />
        <ellipse
          cx="163"
          cy="161"
          rx="66"
          ry="126"
          stroke="url(#hero-orbit-edge)"
          strokeWidth="1.5"
        />
      </g>
      <path
        d="M69 151c-8-36-1-68 19-91"
        stroke="#ffe0e6"
        strokeOpacity=".7"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A static, server-rendered illustration: no scroll listeners or perpetual animation. */
export function HeroVisual() {
  return (
    <Artwork
      width={900}
      height={828}
      label="Een website op maat, verbonden met een automatische flow van aanvraag tot persoonlijk contact"
    >
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.halo} />
        <div className={styles.orbit} />
        <div className={styles.orbitInner} />
        <div className={styles.coordinates}>
          <span>STRATEGIE × DESIGN × TECHNOLOGIE</span>
          <span>01 — ∞</span>
        </div>
        <div className={styles.browser}>
          <div className={styles.chrome}>
            <div className={styles.dots}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.address}>
              <svg viewBox="0 0 16 16" fill="none">
                <rect x="4" y="7" width="8" height="6" rx="1.5" stroke="currentColor" />
                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" />
              </svg>
              jouwbedrijf.be
            </span>
            <span className={styles.chromePlus}>+</span>
          </div>
          <div className={styles.website}>
            <div className={styles.previewNav}>
              <span className={styles.wordmark}>
                <span className={styles.brandMark}>✳</span> jouw merk
                <span className={styles.brandPeriod}>.</span>
              </span>
              <div>
                <span>Expertise</span>
                <span>Ons verhaal</span>
                <span className={styles.navContact}>
                  Contact <Arrow diagonal />
                </span>
              </div>
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewCopy}>
                <span className={styles.eyebrow}>
                  <i /> AMBITIE KRIJGT VORM
                </span>
                <div className={styles.previewTitle}>
                  Sterk online.
                  <br />
                  <em>Sterker vooruit.</em>
                </div>
                <p>
                  Een eerste indruk die blijft.
                  <br />
                  Een website die voor je werkt.
                </p>
                <span className={styles.previewButton}>
                  Ontdek het verschil <Arrow diagonal />
                </span>
              </div>
              <OrbitSculpture />
              <span className={styles.artCaption}>GEMAAKT OM OP TE VALLEN.</span>
            </div>
            <div className={styles.previewFooter}>
              <span>Jouw verhaal. Tot in elk detail.</span>
              <span>
                ONTWORPEN DOOR KOSIFLY <Arrow diagonal />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.designNote}>
          <span className={styles.noteIcon}>
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
          <div>
            <strong>Alles op maat.</strong>
            <span>Tot in de kleinste pixel.</span>
          </div>
          <span className={styles.noteCross}>+</span>
        </div>
        <svg className={styles.connector} viewBox="0 0 900 828" fill="none">
          <path
            d="M200 566v90a28 28 0 0 0 28 28h169"
            stroke="#dc526b"
            strokeOpacity=".6"
            strokeWidth="1.5"
            strokeDasharray="4 7"
          />
          <circle cx="200" cy="566" r="5" fill="#ed637d" />
          <circle cx="397" cy="684" r="4" fill="#ed637d" />
        </svg>
        <div className={styles.workflow}>
          <div className={styles.workflowHeader}>
            <span className={styles.flowIcon}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="m14 2-9 12h7l-2 8 9-12h-7l2-8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <strong>Achter de schermen.</strong>
              <span>Je website zet het werk in gang.</span>
            </div>
            <span className={styles.active}>
              <i /> ACTIEF
            </span>
          </div>
          <div className={styles.flowSteps}>
            <div>
              <span className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="14"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="m5 7 7 5 7-5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <span>
                Aanvraag
                <br />
                <b>ontvangen</b>
              </span>
            </div>
            <Arrow />
            <div>
              <span className={styles.stepIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span>
                Slim
                <br />
                <b>opgevolgd</b>
              </span>
            </div>
            <Arrow />
            <div>
              <span className={styles.stepDone}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 12 4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Klaar voor
                <br />
                <b>contact</b>
              </span>
            </div>
          </div>
          <div className={styles.workflowFooter}>
            <span className={styles.connected}>
              <i /> Alles verbonden.
            </span>
            <span>
              Meer tijd voor jouw zaak <Arrow diagonal />
            </span>
          </div>
        </div>
        <div className={styles.signature}>
          <span className={styles.signatureLine} /> ÉÉN PARTNER. HET HELE PLAATJE.
        </div>
      </div>
    </Artwork>
  );
}
