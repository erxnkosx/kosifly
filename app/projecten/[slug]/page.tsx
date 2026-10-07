import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CasePage } from "@/components/projects/CasePage";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project
    ? { title: `${project.name} — ${project.title} | Kosifly`, description: project.intro }
    : {};
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Navbar active="Projects" />
      <main id="main-content">
        <CasePage project={project} />
      </main>
      <Footer />
    </>
  );
}
