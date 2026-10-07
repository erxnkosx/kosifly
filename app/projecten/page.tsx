import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsOverview } from "@/components/projects/ProjectsOverview";
import { projectSummaries } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Projecten | Kosifly",
  description:
    "Bekijk ons werk voor Taxi Bornem en Primelabs: websites gebouwd voor echte bedrijven.",
};
export default function ProjectsPage() {
  return (
    <>
      <Navbar active="Projects" />
      <main id="main-content">
        <ProjectsOverview items={projectSummaries} />
      </main>
      <Footer />
    </>
  );
}
