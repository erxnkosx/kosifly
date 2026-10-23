import design from "@/data/services-design.json";
import { ProcessSection } from "@/components/services/ProcessSection";

const process = design.webdesign.process;

/** "Zo werken we": dezelfde processectie als op de dienstpagina's, met de vijf fases van een website. */
export function Werkwijze() {
  return (
    <ProcessSection
      className="home-process"
      label="ZO WERKEN WE"
      heading={
        <>
          Live in <span className="process-emphasis">vijf weken.</span>
        </>
      }
      description={process.description}
      steps={process.steps}
      note={process.note}
      badge={process.badge}
    />
  );
}
