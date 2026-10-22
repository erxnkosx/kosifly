import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsOverview } from "@/components/projects/ProjectsOverview";
import { projectSummaries } from "@/lib/projects";
export const metadata: Metadata = {
  title: "Projecten | Kosifly",
  description:
    "Bekijk ons werk voor Taxi Bornem, Zerain, Primelabs, Panero, Futsalytix, PSC Open Huis en Ay Gold: websites en software voor echte bedrijven.",
  alternates: { canonical: "/projecten" },
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
