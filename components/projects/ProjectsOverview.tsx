"use client";
import Link from "next/link";
import { useState } from "react";
import type { ProjectSummary } from "@/lib/projects";
import { Badge } from "@/components/ui/Badge";
import { HeroBackdrop } from "@/components/ui/HeroBackdrop";
import { ProjectCard } from "./ProjectCard";

const filters = [
  ["all", "Alle projecten"],
  ["webdesign", "Webdesign"],
  ["lokale-seo", "Lokale SEO"],
  ["web-apps", "Web apps"],
  ["ai-automatisaties", "AI & automatisaties"],
  ["onderhoud-hosting", "Onderhoud"],
] as const;
export function ProjectsOverview({ items }: { items: readonly ProjectSummary[] }) {
  const [filter, setFilter] = useState<string>("all");
  const visible = items.filter((p) => filter === "all" || p.categories.includes(filter));
  return (
    <>
      <section className="portfolio-hero overview-hero">
        <HeroBackdrop />
        <div className="portfolio-hero-copy page-content">
          <Badge section="Projecten" page="Ons werk" />
          <h1>
            Gebouwd voor
            <br />
            <span>echte</span> bedrijven.
          </h1>
          <p>
            Van een taxidienst in Bornem tot een specialist in drone-inspecties:
            <br className="desktop-break" /> zo helpen we KMO&apos;s online groeien.
          </p>
          <div className="project-filters" role="group" aria-label="Filter projecten op dienst">
            {filters.map(([value, label]) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                aria-controls="project-results"
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="portfolio-light page-section" aria-label="Onze projecten">
        <p className="sr-only" role="status">
          {visible.length} {visible.length === 1 ? "project" : "projecten"} gevonden
        </p>
        <div id="project-results" className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {!visible.length && (
          <div className="project-empty">
            <h2>Binnenkort meer werk in beeld.</h2>
            <p>
              Voor deze dienst staat er nog geen case online. Benieuwd wat we voor jouw bedrijf
              kunnen bouwen?
            </p>
            <Link href="/contact" className="button primary">
              Bespreek jouw project →
            </Link>
          </div>
        )}
        <div className="project-invitation">
          <div>
            <span className="tiny-label">VOLGENDE CASE</span>
            <h2>Jouw project als volgende case?</h2>
            <p>
              Vertel ons wat je wil bouwen. Binnen twee werkdagen krijg je een voorstel met vaste
              prijs.
            </p>
          </div>
          <div className="button-row">
            <Link href="/contact" className="button white">
              Plan een gesprek →
            </Link>
            <Link href="/prijzen" className="portfolio-text-link">
              Bereken je prijs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
