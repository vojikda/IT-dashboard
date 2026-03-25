const domains = [
  {
    id: "retail",
    name: "Retail / Obchod",
    run: {
      apps: [
        {
          name: "Aplikace 1",
          slaFulfillment: 99.6,
          costsLastYearMil: 48.2,
          budgetCurrentYearMil: 52.0,
          deltaFromProjectsMil: 2.0,
          otherChangesSavingsMil: 1.1,
        },
        {
          name: "Aplikace 2",
          slaFulfillment: 98.9,
          costsLastYearMil: 31.7,
          budgetCurrentYearMil: 34.0,
          deltaFromProjectsMil: 1.6,
          otherChangesSavingsMil: 0.8,
        },
        {
          name: "Aplikace 3",
          slaFulfillment: 99.1,
          costsLastYearMil: 24.5,
          budgetCurrentYearMil: 26.0,
          deltaFromProjectsMil: 0.5,
          otherChangesSavingsMil: 0.3,
        },
        {
          name: "Aplikace 4",
          slaFulfillment: 97.8,
          costsLastYearMil: 18.9,
          budgetCurrentYearMil: 20.0,
          deltaFromProjectsMil: 2.4,
          otherChangesSavingsMil: 1.3,
        },
        {
          name: "Aplikace 5",
          slaFulfillment: 99.3,
          costsLastYearMil: 39.1,
          budgetCurrentYearMil: 41.5,
          deltaFromProjectsMil: 0.8,
          otherChangesSavingsMil: 0.4,
        },
      ],
    },
    create: {
      projects: [
        {
          name: "Projekt 1",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Čeká na INT",
            accDeployment: "Není zahájeno",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
        {
          name: "Projekt 2",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Probíhá",
            testing: "Čeká na testování",
            readiness: "Není zahájeno",
            incidents: "1 incident",
          },
          stageIncidents: 1,
        },
        {
          name: "Projekt 3",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Probíhá",
            readiness: "Čeká na schválení",
            incidents: "2 incidenty",
          },
          stageIncidents: 2,
        },
        {
          name: "Projekt 4",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Hotovo",
            readiness: "Riziko",
            incidents: "4 incidenty",
          },
          stageIncidents: 4,
        },
        {
          name: "Projekt 5",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Čeká na INT",
            accDeployment: "Není zahájeno",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
      ],
    },
  },
  {
    id: "finance",
    name: "Finance / Účetnictví",
    run: {
      apps: [
        {
          name: "Aplikace 1",
          slaFulfillment: 99.2,
          costsLastYearMil: 62.4,
          budgetCurrentYearMil: 66.0,
          deltaFromProjectsMil: 1.0,
          otherChangesSavingsMil: 0.6,
        },
        {
          name: "Aplikace 2",
          slaFulfillment: 98.1,
          costsLastYearMil: 27.8,
          budgetCurrentYearMil: 30.0,
          deltaFromProjectsMil: 3.2,
          otherChangesSavingsMil: 1.7,
        },
        {
          name: "Aplikace 3",
          slaFulfillment: 99.5,
          costsLastYearMil: 19.6,
          budgetCurrentYearMil: 21.0,
          deltaFromProjectsMil: 0.2,
          otherChangesSavingsMil: 0.1,
        },
        {
          name: "Aplikace 4",
          slaFulfillment: 97.9,
          costsLastYearMil: 14.2,
          budgetCurrentYearMil: 16.0,
          deltaFromProjectsMil: 1.4,
          otherChangesSavingsMil: 0.8,
        },
        {
          name: "Aplikace 5",
          slaFulfillment: 99.0,
          costsLastYearMil: 44.9,
          budgetCurrentYearMil: 48.5,
          deltaFromProjectsMil: 1.3,
          otherChangesSavingsMil: 0.7,
        },
      ],
    },
    create: {
      projects: [
        {
          name: "Projekt 1",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Čeká",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
        {
          name: "Projekt 2",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Probíhá",
            accDeployment: "Čeká",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "1 incident",
          },
          stageIncidents: 1,
        },
        {
          name: "Projekt 3",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Probíhá",
            readiness: "Čeká na schválení",
            incidents: "3 incidenty",
          },
          stageIncidents: 3,
        },
        {
          name: "Projekt 4",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Hotovo",
            readiness: "Riziko",
            incidents: "5 incidentů",
          },
          stageIncidents: 5,
        },
        {
          name: "Projekt 5",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Čeká na INT",
            accDeployment: "Není zahájeno",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
      ],
    },
  },
  {
    id: "logistics",
    name: "Logistika / Dispečink",
    run: {
      apps: [
        {
          name: "Aplikace 1",
          slaFulfillment: 99.7,
          costsLastYearMil: 38.3,
          budgetCurrentYearMil: 40.0,
          deltaFromProjectsMil: 0.4,
          otherChangesSavingsMil: 0.2,
        },
        {
          name: "Aplikace 2",
          slaFulfillment: 98.7,
          costsLastYearMil: 29.5,
          budgetCurrentYearMil: 31.0,
          deltaFromProjectsMil: 1.5,
          otherChangesSavingsMil: 0.8,
        },
        {
          name: "Aplikace 3",
          slaFulfillment: 99.3,
          costsLastYearMil: 22.1,
          budgetCurrentYearMil: 24.0,
          deltaFromProjectsMil: 0.5,
          otherChangesSavingsMil: 0.3,
        },
        {
          name: "Aplikace 4",
          slaFulfillment: 97.6,
          costsLastYearMil: 12.9,
          budgetCurrentYearMil: 14.0,
          deltaFromProjectsMil: 2.0,
          otherChangesSavingsMil: 1.1,
        },
        {
          name: "Aplikace 5",
          slaFulfillment: 99.1,
          costsLastYearMil: 41.0,
          budgetCurrentYearMil: 44.0,
          deltaFromProjectsMil: 1.2,
          otherChangesSavingsMil: 0.7,
        },
      ],
    },
    create: {
      projects: [
        {
          name: "Projekt 1",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Probíhá",
            testing: "Čeká na testování",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
        {
          name: "Projekt 2",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Probíhá",
            accDeployment: "Čeká",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "2 incidenty",
          },
          stageIncidents: 2,
        },
        {
          name: "Projekt 3",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Probíhá",
            readiness: "Čeká na schválení",
            incidents: "1 incident",
          },
          stageIncidents: 1,
        },
        {
          name: "Projekt 4",
          stages: {
            finalization: "Hotovo",
            intDeployment: "Hotovo",
            accDeployment: "Hotovo",
            testing: "Hotovo",
            readiness: "Riziko",
            incidents: "4 incidenty",
          },
          stageIncidents: 4,
        },
        {
          name: "Projekt 5",
          stages: {
            finalization: "Probíhá",
            intDeployment: "Čeká na INT",
            accDeployment: "Není zahájeno",
            testing: "Není zahájeno",
            readiness: "Není zahájeno",
            incidents: "0 incidentů",
          },
          stageIncidents: 0,
        },
      ],
    },
  },
];

function round1(value) {
  return Math.round(value * 10) / 10;
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("theme-dark", theme === "dark");
}

function formatMilKc(value) {
  const rounded = Math.round(value * 10) / 10;
  return `${new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: rounded % 1 === 0 ? 0 : 1, maximumFractionDigits: 1 }).format(
    rounded
  )} mil. Kč`;
}

function formatPercent(value, decimals = 1) {
  return `${new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(
    value
  )}%`;
}

function toneFromSla(slaFulfillment) {
  // Dummy thresholds. Can be tuned later.
  if (slaFulfillment >= 99.0) return "pill--ok";
  if (slaFulfillment >= 98.0) return "pill--warn";
  return "pill--bad";
}

function toneFromIncidents(incidentsCount) {
  if (incidentsCount === 0) return "pill--ok";
  if (incidentsCount <= 2) return "pill--warn";
  return "pill--bad";
}

function toneFromStageText(stageText) {
  const t = stageText.toLowerCase();
  if (t.includes("hotovo")) return "pill--ok";
  if (t.includes("probíhá")) return "pill--warn";
  if (t.includes("riziko")) return "pill--bad";
  if (t.includes("čeká") || t.includes("čeka") || t.includes("čeká na")) return "pill--warn";
  return "pill--bad";
}

function renderPill(text, toneClass) {
  return `<span class="pill ${toneClass}">${text}</span>`;
}

function renderApps(tbody, apps) {
  tbody.innerHTML = "";
  for (const app of apps) {
    const slaPill = renderPill(formatPercent(app.slaFulfillment, 1), toneFromSla(app.slaFulfillment));
    const deltaFromProjectsMil = round1(app.deltaFromProjectsMil);
    const otherChangesSavingsMil = round1(app.otherChangesSavingsMil);
    const changesVsPlanMil = round1(deltaFromProjectsMil + otherChangesSavingsMil);
    const forecastTotalMil = round1(app.budgetCurrentYearMil + changesVsPlanMil);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${app.name}</td>
      <td>${slaPill}</td>
      <td>${formatMilKc(app.costsLastYearMil)}</td>
      <td>${formatMilKc(app.budgetCurrentYearMil)}</td>
      <td>${formatMilKc(changesVsPlanMil)}</td>
      <td>${formatMilKc(deltaFromProjectsMil)}</td>
      <td>${formatMilKc(otherChangesSavingsMil)}</td>
      <td><strong>${formatMilKc(forecastTotalMil)}</strong></td>
    `;
    tbody.appendChild(tr);
  }
}

function renderProjects(tbody, projects) {
  tbody.innerHTML = "";

  for (const p of projects) {
    const s = p.stages;
    const incPill = renderPill(s.incidents, toneFromIncidents(p.stageIncidents));

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.name}</td>
      <td>${renderPill(s.finalization, toneFromStageText(s.finalization))}</td>
      <td>${renderPill(s.intDeployment, toneFromStageText(s.intDeployment))}</td>
      <td>${renderPill(s.accDeployment, toneFromStageText(s.accDeployment))}</td>
      <td>${renderPill(s.testing, toneFromStageText(s.testing))}</td>
      <td>${renderPill(s.readiness, toneFromStageText(s.readiness))}</td>
      <td>${incPill}</td>
    `;
    tbody.appendChild(tr);
  }
}

function shuffleDummy() {
  const domainId = activeDomainId();
  const domain = domains.find((d) => d.id === domainId) ?? domains[0];
  const rand = (min, max) => min + Math.random() * (max - min);

  for (const app of domain.run.apps) {
    app.slaFulfillment = Math.max(97.2, Math.min(99.9, app.slaFulfillment + rand(-0.35, 0.35)));
    app.costsLastYearMil = Math.max(2, app.costsLastYearMil + rand(-4, 4));
    app.budgetCurrentYearMil = Math.max(2, app.budgetCurrentYearMil + rand(-3, 3));
    app.deltaFromProjectsMil = round1(
      Math.max(-4, Math.min(6, app.deltaFromProjectsMil + rand(-1.2, 1.4)))
    );
    app.otherChangesSavingsMil = round1(
      Math.max(-4, Math.min(6, app.otherChangesSavingsMil + rand(-1.2, 1.4)))
    );
  }

  const stageTexts = [
    "Není zahájeno",
    "Čeká",
    "Čeká na INT",
    "Hotovo",
    "Probíhá",
    "Čeká na schválení",
    "Riziko",
    "Čeká na testování",
  ];

  for (const proj of domain.create.projects) {
    const keys = [
      "finalization",
      "intDeployment",
      "accDeployment",
      "testing",
      "readiness",
    ];
    for (const k of keys) {
      const i = Math.floor(Math.random() * stageTexts.length);
      proj.stages[k] = stageTexts[i];
    }

    proj.stageIncidents = Math.floor(rand(0, 6));
    proj.stages.incidents =
      proj.stageIncidents === 0 ? "0 incidentů" : proj.stageIncidents === 1 ? "1 incident" : `${proj.stageIncidents} incidenty`;
  }

  hydrate();
}

function activeDomainId() {
  const sel = document.getElementById("domainSelect");
  return sel?.value ?? domains[0].id;
}

function hydrate() {
  const domain = domains.find((d) => d.id === activeDomainId()) ?? domains[0];

  const appsTbody = document.getElementById("appsTableBody");
  const projectsTbody = document.getElementById("projectsTableBody");

  if (appsTbody) renderApps(appsTbody, domain.run.apps);
  if (projectsTbody) renderProjects(projectsTbody, domain.create.projects);
}

document.addEventListener("DOMContentLoaded", () => {
  // Domain select
  const domainSelect = document.getElementById("domainSelect");
  domainSelect.innerHTML = "";
  for (const d of domains) {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = d.name;
    domainSelect.appendChild(opt);
  }

  const savedDomain = localStorage.getItem("itDashboard.domainId");
  const initialDomainId = savedDomain && domains.some((d) => d.id === savedDomain) ? savedDomain : domains[0].id;
  domainSelect.value = initialDomainId;

  domainSelect.addEventListener("change", () => {
    localStorage.setItem("itDashboard.domainId", domainSelect.value);
    hydrate();
  });

  // Range buttons: purely visual in this prototype
  document.querySelectorAll(".range__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".range__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });

  // Theme toggler
  const savedTheme = localStorage.getItem("itDashboard.theme");
  applyTheme(savedTheme === "dark" ? "dark" : "light");

  document.getElementById("toggleThemeBtn").addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("theme-dark");
    const next = isDark ? "light" : "dark";
    localStorage.setItem("itDashboard.theme", next);
    applyTheme(next);
  });

  // Shuffle dummy
  document.getElementById("shuffleBtn").addEventListener("click", shuffleDummy);

  hydrate();

  // Last refresh
  const lastRefreshEl = document.getElementById("lastRefresh");
  if (lastRefreshEl) {
    const now = new Date();
    lastRefreshEl.textContent = now.toLocaleString("cs-CZ", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    });
  }
});

