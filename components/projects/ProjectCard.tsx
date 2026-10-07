import Link from "next/link";
import type { ProjectSummary } from "@/lib/projects";
import { TaxiCardScene } from "./art/TaxiCardScene";
import { PrimeCardScene } from "./art/PrimeCardScene";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const Scene = project.slug === "taxi-bornem" ? TaxiCardScene : PrimeCardScene;
  return (
    <article className="project-card">
      <div
        className="project-card-scene"
        role="img"
        aria-label={`${project.name}: website op laptop en telefoon`}
      >
        <Scene />
      </div>
      <div className="project-card-body">
        <p className="project-location">
          {project.name} · {project.slug === "taxi-bornem" ? "Bornem" : "België"}
        </p>
        <h2>
          <Link href={`/projecten/${project.slug}`}>{project.title}</Link>
        </h2>
        <p>{project.summary}</p>
        <ul className="project-tags" aria-label="Diensten">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card-bottom">
          <span>{project.note}</span>
          <Link href={`/projecten/${project.slug}`}>
            Bekijk de case <span aria-hidden="true">→</span>
            <span className="sr-only"> van {project.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
