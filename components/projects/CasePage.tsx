import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { TaxiHeroScene } from "./art/TaxiHeroScene";
import { PrimeHeroScene } from "./art/PrimeHeroScene";
import { TaxiBookingScene } from "./art/TaxiBookingScene";
import { TaxiMailScene } from "./art/TaxiMailScene";
import { TaxiSearchScene } from "./art/TaxiSearchScene";
import { PrimeDesktopScene } from "./art/PrimeDesktopScene";
import { PrimeInspectionScene } from "./art/PrimeInspectionScene";
import { PrimeMobileScene } from "./art/PrimeMobileScene";

export function CasePage({ project }: { project: Project }) {
  const taxi = project.slug === "taxi-bornem";
  const HeroScene = taxi ? TaxiHeroScene : PrimeHeroScene;
  const scenes = taxi
    ? [TaxiBookingScene, TaxiMailScene, TaxiSearchScene]
    : [PrimeDesktopScene, PrimeInspectionScene, PrimeMobileScene];
  const next = projects.find((p) => p.slug !== project.slug)!;
  const NextScene = taxi ? PrimeHeroScene : TaxiHeroScene;
  return (
    <>
      <section className="portfolio-hero case-hero">
        <HeroBackdrop />
        <div className="portfolio-hero-copy page-content">
          <Badge section="Projecten" page={project.name} />
          <h1>
            {taxi ? (
              <>
                Van telefoontjes naar
                <br />
                <span>online</span> ritaanvragen.
              </>
            ) : (
              <>
                Drone-inspecties,
                <br />
                <span>helder</span> in beeld.
              </>
            )}
          </h1>
          <p>{project.intro}</p>
          <dl className="case-meta">
            {[
              ["Klant", project.name],
              ["Sector", project.sector],
              ["Regio", project.region],
              ["Diensten", project.tags.join(" · ")],
              [taxi ? "Status" : "Platform", taxi ? "Live" : "Desktop en mobiel"],
            ].map(([label, value]) => (
              <div key={label} className={label === "Status" ? "case-meta-status" : undefined}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="button-row">
            <a
              className="button white"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {taxi ? "Bezoek de live site" : "Bezoek de site"} ↗
              <span className="sr-only"> (nieuw tabblad)</span>
            </a>
            <Link href="/projecten" className="portfolio-text-link">
              Alle projecten
            </Link>
          </div>
        </div>
        <div
          className="case-hero-art page-content"
          role="img"
          aria-label={`${project.name}: ontwerp op desktop en mobiel`}
        >
          <HeroScene />
        </div>
      </section>
      <section className="portfolio-light page-section case-question">
        <div>
          <span className="portfolio-eyebrow">DE VRAAG</span>
          <h2>{project.question}</h2>
        </div>
        <div>
          <span className="portfolio-eyebrow">DE SITUATIE</span>
          <p>{project.situation}</p>
          <span className="portfolio-eyebrow">ONZE AANPAK</span>
          <p>{project.approach}</p>
        </div>
      </section>
      <section className="portfolio-light page-section case-build">
        <div className="portfolio-heading">
          <span className="section-eyebrow">WAT WE BOUWDEN</span>
          <h2>
            Drie onderdelen die het <span>verschil</span> maken.
          </h2>
        </div>
        {project.steps.map((step, index) => {
          const Scene = scenes[index];
          return (
            <div className={`case-step ${index % 2 ? "case-step-reverse" : ""}`} key={step.label}>
              <div className="case-step-art" role="img" aria-label={`Voorbeeld: ${step.title}`}>
                <Scene />
              </div>
              <div className="case-step-copy">
                <span className="portfolio-eyebrow">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="case-checks">
                  {step.points.map((point) => (
                    <li key={point}>
                      <img src="/figma/e3d74.svg" width="22" height="22" alt="" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      <section className="case-results page-section">
        <div className="portfolio-heading">
          <span className="section-eyebrow">HET RESULTAAT</span>
          <h2>
            Wat het <span>opleverde.</span>
          </h2>
        </div>
        <dl className="case-metrics">
          {project.metrics.map((metric) => (
            <div key={metric.value}>
              <dt>{metric.value}</dt>
              <dd>{metric.label}</dd>
            </div>
          ))}
          <div>
            <dt>—</dt>
            <dd>
              {taxi ? "aanvragen" : "inspectieaanvragen"} per maand<small>Metingen volgen</small>
            </dd>
          </div>
        </dl>
        <div className="case-result-note">
          <span className="portfolio-quote-mark" aria-hidden="true">
            “
          </span>
          <p>
            Een snelle, heldere website met een duidelijke weg naar{" "}
            {taxi ? "een ritaanvraag" : "een inspectieaanvraag"}.
          </p>
          <span>KOSIFLY · {project.name}</span>
        </div>
      </section>
      <section className="portfolio-light page-section">
        <Link href={`/projecten/${next.slug}`} className="next-case">
          <div>
            <span className="portfolio-eyebrow">VOLGENDE CASE</span>
            <p>
              {next.name} · {next.sector}
            </p>
            <h2>{next.title}</h2>
            <span className="button primary">Bekijk de case →</span>
          </div>
          <div className="next-case-scene">
            <NextScene />
          </div>
        </Link>
      </section>
    </>
  );
}
