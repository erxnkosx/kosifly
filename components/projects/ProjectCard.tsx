import Link from "next/link";
import type { ProjectSummary } from "@/lib/projects";
import { caseScenes } from "./scenes";
import { BtnArrow } from "@/components/ui/BtnArrow";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const Scene = caseScenes[project.slug].card;
  return (
    <article className="project-card">
      <div
        className="project-card-scene"
        role="img"
        aria-label={`${project.name}: het opgeleverde ontwerp`}
      >
        <Scene />
      </div>
      <div className="project-card-body">
        <p className="project-location">
          {project.name} · {project.place ?? project.sector}
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
            Bekijk de case <BtnArrow />
            <span className="sr-only"> van {project.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
