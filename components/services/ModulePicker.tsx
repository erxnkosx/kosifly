"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { Artwork } from "@/components/ui/Artwork";
import AppDetail from "./art/AppDetail";
import { ModulePreview } from "./ModulePreview";
import ModuleIcon0 from "./art/ModuleIcon0";
import ModuleIcon1 from "./art/ModuleIcon1";
import ModuleIcon2 from "./art/ModuleIcon2";
import ModuleIcon3 from "./art/ModuleIcon3";
import ModuleIcon4 from "./art/ModuleIcon4";
import ModuleIcon5 from "./art/ModuleIcon5";

const icons = [ModuleIcon0, ModuleIcon1, ModuleIcon2, ModuleIcon3, ModuleIcon4, ModuleIcon5];
const details = [
  { intro: "", points: [] },
  {
    intro: "Van losse cijfers naar een helder overzicht. Zie meteen hoe je bedrijf ervoor staat.",
    points: [
      "Cijfers uit je bestaande tools",
      "Resultaten per team en project",
      "Rapporten zonder Excel-export",
    ],
  },
  {
    intro: "Je klanten boeken zelf. Je team weet precies wie waar verwacht wordt.",
    points: [
      "Beschikbaarheid in één agenda",
      "Bevestigingen en herinneringen",
      "Planning per medewerker of ploeg",
    ],
  },
  {
    intro: "Eén keer ingeven, overal bijgewerkt. Je systemen werken samen achter de schermen.",
    points: [
      "Boekhouding, CRM en webshop verbinden",
      "Gegevens automatisch synchroniseren",
      "Overzicht van elke gegevensuitwisseling",
    ],
  },
  {
    intro: "Iedereen krijgt de juiste toegang. Je houdt controle over gebruikers en gegevens.",
    points: [
      "Rollen en rechten per gebruiker",
      "Versleutelde verbindingen en back-ups",
      "Inzicht in toegang en activiteit",
    ],
  },
  {
    intro: "Een stevige basis voor vandaag, met ruimte voor wat je morgen nodig hebt.",
    points: [
      "Extra modules op dezelfde basis",
      "Meer gebruikers zonder opnieuw te bouwen",
      "Uitbreiden op het tempo van je bedrijf",
    ],
  },
];

type Module = { title: string; description: string };

export function ModulePicker({ modules }: { modules: Module[] }) {
  const [selected, setSelected] = useState(0);
  const instance = useId();
  const tabId = (index: number) => `${instance}-module-tab-${index}`;
  const panelId = (index: number) => `${instance}-module-panel-${index}`;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % modules.length
        : event.key === "ArrowUp"
          ? (index + modules.length - 1) % modules.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? modules.length - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <div className="module-picker">
      <div role="tablist" aria-label="Softwaremodules" aria-orientation="vertical">
        {modules.map((module, index) => {
          const Icon = icons[index];
          return (
            <button
              key={module.title}
              id={tabId(index)}
              role="tab"
              aria-selected={selected === index}
              aria-controls={panelId(index)}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <Icon />
              <span>
                <strong>{module.title}</strong>
                <small>{module.description}</small>
              </span>
              <span className="module-tab-arrow" aria-hidden="true">
                →
              </span>
            </button>
          );
        })}
      </div>
      <div
        id={panelId(selected)}
        className="module-panel"
        role="tabpanel"
        aria-labelledby={tabId(selected)}
        tabIndex={0}
      >
        {selected === 0 ? (
          <Artwork
            width={1000}
            height={654}
            label="Klantenportaal met documenten en de status van je dossier"
          >
            <AppDetail />
          </Artwork>
        ) : (
          <div className="module-alternative">
            <div className="module-explanation">
              <span className="tiny-label">
                MODULE 0{selected + 1} · {modules[selected].title}
              </span>
              <h3>{modules[selected].title}</h3>
              <p>{details[selected].intro}</p>
              <ul>
                {details[selected].points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <ModulePreview index={selected} />
          </div>
        )}
      </div>
    </div>
  );
}
