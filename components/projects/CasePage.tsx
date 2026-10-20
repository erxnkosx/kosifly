import Link from "next/link";
import { projects, type Project } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { CaseSteps } from "./CaseSteps";
import { caseScenes } from "./scenes";
import { BtnArrow } from "@/components/ui/BtnArrow";

export function CasePage({ project }: { project: Project }) {
  const scenes = caseScenes[project.slug];
  const HeroScene = scenes.hero;
  // Volgende case in een kring: de laatste verwijst terug naar de eerste.
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const NextScene = caseScenes[next.slug].hero;
  const { link } = project;
  return (
    <>
      <section className="portfolio-hero case-hero">
        <HeroBackdrop />
        <div className="portfolio-hero-copy page-content">
          <Badge section="Projecten" page={project.name} />
          <h1>
            {project.headline.lead}
            <br />
            <span>{project.headline.accent}</span>
            {project.headline.rest}
          </h1>
          <p>{project.intro}</p>
          <dl className="case-meta">
            {[
              ["Klant", project.name],
              ["Sector", project.sector],
              ["Regio", project.region],
              ["Diensten", project.tags.join(" · ")],
              [project.highlight.label, project.highlight.value],
            ].map(([label, value]) => (
              <div key={label} className={label === "Status" ? "case-meta-status" : undefined}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="button-row">
            {link.external ? (
              <a
                className="button white"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <BtnArrow glyph="↗" />
                <span className="sr-only"> (nieuw tabblad)</span>
              </a>
            ) : (
              <Link className="button white" href={link.href}>
                {link.label} <BtnArrow />
              </Link>
            )}
            <Link href="/projecten" className="portfolio-text-link">
              Alle projecten <BtnArrow />
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
          <h2>
            {(() => {
              const at = project.question.indexOf(project.questionAccent);
              if (at < 0) return project.question;
              return (
                <>
                  {project.question.slice(0, at)}
                  <span>{project.questionAccent}</span>
                  {project.question.slice(at + project.questionAccent.length)}
                </>
              );
            })()}
          </h2>
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
        <CaseSteps
          labels={project.steps.map((step) => {
            const name = step.label.split("·").pop()!.trim().toLowerCase();
            return name.charAt(0).toUpperCase() + name.slice(1);
          })}
        >
          {project.steps.map((step, index) => {
            const Scene = scenes.steps[index];
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
        </CaseSteps>
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
            <div key={metric.label} className={metric.note ? "is-pending" : undefined}>
              <dt>{metric.value}</dt>
              <dd>
                {metric.label}
                {metric.note && <small>{metric.note}</small>}
              </dd>
            </div>
          ))}
        </dl>
        <div className="case-result-note">
          <span className="portfolio-quote-mark" aria-hidden="true">
            “
          </span>
          <p>{project.conclusion}</p>
          <span>KOSIFLY · {project.name}</span>
        </div>
      </section>
      <section className="portfolio-light page-section case-next">
        <Link href={`/projecten/${next.slug}`} className="next-case">
          <div>
            <span className="portfolio-eyebrow">VOLGENDE CASE</span>
            <p>
              {next.name} · {next.sector}
            </p>
            <h2>{next.title}</h2>
            <span className="button primary">
              Bekijk de case <BtnArrow />
            </span>
          </div>
          <div className="next-case-scene">
            <NextScene lazy />
          </div>
        </Link>
      </section>
    </>
  );
}
