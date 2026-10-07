import type { ReactNode } from "react";

function Preview({
  title,
  children,
  footer,
}: {
  title: string;
  children: ReactNode;
  footer: string;
}) {
  return (
    <div className="software-preview">
      <div className="preview-topbar">
        <span>KOSIFLY / {title}</span>
        <span className="preview-avatar">JD</span>
      </div>
      <h4>{title}</h4>
      {children}
      <div className="preview-footer">
        <span className="preview-status-dot" />
        {footer}
      </div>
    </div>
  );
}

function Dashboards() {
  const bars = [32, 45, 38, 60, 52, 76, 69, 88];
  return (
    <Preview title="Bedrijfsoverzicht" footer="Bijgewerkt vanuit je bestaande tools">
      <div className="preview-period">
        Deze maand <span>1 – 31 oktober</span>
      </div>
      <div className="preview-metrics">
        {[
          ["€ 24.850", "Omzet", "+12,8%"],
          ["18", "Open dossiers", "+4"],
          ["96%", "Tevredenheid", "+3%"],
        ].map(([value, label, change]) => (
          <div key={label}>
            <small>{label}</small>
            <strong>{value}</strong>
            <em>{change}</em>
          </div>
        ))}
      </div>
      <div className="preview-chart">
        <strong>Aanvragen per week</strong>
        <div className="preview-bars" aria-label="Voorbeeld van de ontwikkeling van aanvragen">
          {bars.map((height, i) => (
            <div key={i}>
              <span style={{ height: `${height}%` }} />
              <small>W{i + 1}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="preview-table">
        <div>
          <strong>Project</strong>
          <strong>Status</strong>
        </div>
        <div>
          <span>Badkamer Peeters</span>
          <span className="preview-pill">In uitvoering</span>
        </div>
        <div>
          <span>Keuken Maes</span>
          <span className="preview-pill muted">Afgerond</span>
        </div>
      </div>
    </Preview>
  );
}

function Planning() {
  return (
    <Preview title="Planning & afspraken" footer="Bevestiging en herinnering automatisch verstuurd">
      <div className="preview-period">
        Week 42 <span>13 – 17 oktober</span>
      </div>
      <div className="preview-week">
        {["Ma 13", "Di 14", "Wo 15", "Do 16", "Vr 17"].map((day, i) => (
          <div key={day} className={i === 2 ? "current" : ""}>
            {day}
          </div>
        ))}
      </div>
      <div className="preview-agenda">
        {[
          ["08:00", "Werfbezoek Peeters", "Jens · Puurs", "60 min"],
          ["10:00", "Kennismaking Maes", "Sara · Bornem", "30 min"],
          ["14:00", "Opmeting Janssens", "Tom · Boom", "90 min"],
        ].map(([time, title, team, length]) => (
          <div key={time}>
            <time>{time}</time>
            <div>
              <strong>{title}</strong>
              <small>{team}</small>
            </div>
            <span>{length}</span>
          </div>
        ))}
      </div>
      <div className="preview-booking">
        <span className="preview-check">✓</span>
        <div>
          <strong>Nieuwe afspraak bevestigd</strong>
          <small>Donderdag · 11:00 · plaatsbezoek</small>
        </div>
      </div>
    </Preview>
  );
}

function Connections() {
  return (
    <Preview title="Koppelingen" footer="Alle systemen gesynchroniseerd · net bijgewerkt">
      <div className="preview-hub">
        <div>
          CRM
          <br />
          <small>Klanten</small>
        </div>
        <span>↔</span>
        <div className="hub-core">
          Jouw
          <br />
          platform
        </div>
        <span>↔</span>
        <div>
          Boekhouding
          <br />
          <small>Facturen</small>
        </div>
      </div>
      <div className="preview-connected">
        {[
          ["Boekhouding", "Facturen en betalingen"],
          ["CRM", "Klanten en contactgegevens"],
          ["Webshop", "Bestellingen en voorraad"],
        ].map(([title, subtitle]) => (
          <div key={title}>
            <span className="connection-icon">↔</span>
            <div>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </div>
            <span className="preview-pill">Verbonden</span>
          </div>
        ))}
      </div>
      <div className="preview-log">
        <strong>Recente activiteit</strong>
        <p>
          <span>09:42</span> Factuur #2026-041 bijgewerkt <b>✓</b>
        </p>
        <p>
          <span>09:38</span> Klant Peeters gesynchroniseerd <b>✓</b>
        </p>
      </div>
    </Preview>
  );
}

function Security() {
  return (
    <Preview title="Toegang & beveiliging" footer="Back-up voltooid · vandaag om 03:00">
      <div className="preview-security">
        <span className="preview-check">✓</span>
        <div>
          <strong>Je omgeving is beveiligd</strong>
          <small>Versleutelde verbinding · rollen actief</small>
        </div>
      </div>
      <div className="preview-table permissions">
        <div>
          <strong>Gebruiker</strong>
          <strong>Toegang</strong>
        </div>
        {[
          ["Julie De Smet", "Beheerder", "JD"],
          ["Tom Peeters", "Medewerker", "TP"],
          ["Sarah Maes", "Klant", "SM"],
        ].map(([name, role, initials]) => (
          <div key={name}>
            <span>
              <i className="preview-avatar">{initials}</i>
              {name}
            </span>
            <span className="preview-pill muted">{role}</span>
          </div>
        ))}
      </div>
      <div className="preview-controls">
        <p>
          <span>Documenten alleen voor betrokkenen</span>
          <b>✓</b>
        </p>
        <p>
          <span>Activiteit en toegang geregistreerd</span>
          <b>✓</b>
        </p>
        <p>
          <span>Gegevens exporteren of verwijderen</span>
          <b>✓</b>
        </p>
      </div>
    </Preview>
  );
}

function Growth() {
  return (
    <Preview
      title="Jouw platform groeit mee"
      footer="Eén platform · dezelfde gegevens · meer mogelijkheden"
    >
      <div className="preview-period">
        Jouw modules <span>3 actief · 2 uitbreidingen</span>
      </div>
      <div className="preview-module-grid">
        {[
          ["◉", "Klantenportaal", true],
          ["▥", "Dashboard", true],
          ["▦", "Planning", true],
          ["↔", "Koppelingen", false],
          ["↗", "Rapportage", false],
        ].map(([icon, title, active]) => (
          <div key={String(title)} className={active ? "active" : ""}>
            <span>{icon}</span>
            <strong>{title}</strong>
            <small>{active ? "Actief" : "+ Uitbreiding"}</small>
          </div>
        ))}
      </div>
      <div className="preview-capacity">
        <strong>Ruimte voor je volgende stap</strong>
        <div>
          <span style={{ width: "38%" }} />
        </div>
        <p>
          12 teamleden <span>Meer gebruikers toevoegen</span>
        </p>
      </div>
    </Preview>
  );
}

const previews = [null, Dashboards, Planning, Connections, Security, Growth];
export function ModulePreview({ index }: { index: number }) {
  const Component = previews[index];
  return Component ? <Component /> : null;
}
