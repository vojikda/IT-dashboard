const domains = [
  {
    id: "retail",
    name: "Retail / Obchod",
    kpis: {
      availability: { value: 99.41, unit: "%", deltaPct: +0.12, deltaLabel: "vs. minulé období" },
      incidents: { value: 18, unit: "", deltaPct: -0.22, deltaLabel: "méně incidentů" },
      changeSuccess: { value: 97.6, unit: "%", deltaPct: +0.4, deltaLabel: "stabilnější změny" },
      mttr: { value: 42, unit: " min", deltaPct: -0.18, deltaLabel: "rychlejší obnova" },
      cpu: { value: 61.3, unit: "%", deltaPct: +0.06, deltaLabel: "lehké zatížení" },
      backlog: { value: 126, unit: "", deltaPct: -0.07, deltaLabel: "nižší backlog" },
    },
    services: {
      donut: { ok: 62, warn: 30, bad: 8 },
      list: [
        { name: "ERP modul", status: "OK", tone: "ok" },
        { name: "Integrace (ESB)", status: "Upozornění", tone: "warn" },
        { name: "CRM", status: "OK", tone: "ok" },
        { name: "Monitoring agenta", status: "Neprovozní", tone: "bad" },
        { name: "DWH pipeline", status: "Upozornění", tone: "warn" },
      ],
    },
    incidents: [
      { date: "2026-03-25 09:10", category: "Dostupnost", status: "Řeší se", service: "CRM" },
      { date: "2026-03-24 16:42", category: "Integrace", status: "Vyřešeno", service: "ESB" },
      { date: "2026-03-23 11:05", category: "Performance", status: "Vyřešeno", service: "DWH" },
      { date: "2026-03-22 08:28", category: "Změna", status: "Vyřešeno", service: "ERP modul" },
    ],
    trends: {
      availabilitySeries: [98.9, 99.1, 99.4, 99.2, 99.5, 99.6, 99.3, 99.4, 99.8, 99.7, 99.2, 99.3, 99.6, 99.41],
      avg: 99.38,
      best: 99.8,
      worst: 98.9,
      meta: "posledních 14 bodů (dummy)",
    },
    sla: {
      availability: { value: 99.41, target: 99.5 },
      monitoring: { value: 97.2, target: 98 },
      capacity: {
        valuePct: 74.6,
        warn: 80,
        critical: 92,
      },
    },
  },
  {
    id: "finance",
    name: "Finance / Účetnictví",
    kpis: {
      availability: { value: 99.11, unit: "%", deltaPct: -0.06, deltaLabel: "mírný pokles" },
      incidents: { value: 24, unit: "", deltaPct: +0.15, deltaLabel: "více incidentů" },
      changeSuccess: { value: 96.9, unit: "%", deltaPct: -0.2, deltaLabel: "více rollbacků" },
      mttr: { value: 55, unit: " min", deltaPct: +0.09, deltaLabel: "pomalejší obnova" },
      cpu: { value: 67.8, unit: "%", deltaPct: +0.14, deltaLabel: "vyšší vytížení" },
      backlog: { value: 142, unit: "", deltaPct: +0.18, deltaLabel: "narůstající backlog" },
    },
    services: {
      donut: { ok: 54, warn: 38, bad: 8 },
      list: [
        { name: "Platební brána", status: "Upozornění", tone: "warn" },
        { name: "Účetní dávky", status: "OK", tone: "ok" },
        { name: "Reportovací DB", status: "OK", tone: "ok" },
        { name: "Integrace (API)", status: "Upozornění", tone: "warn" },
        { name: "Monitoring agenta", status: "Neprovozní", tone: "bad" },
      ],
    },
    incidents: [
      { date: "2026-03-25 07:35", category: "Integrace", status: "Řeší se", service: "API" },
      { date: "2026-03-24 10:12", category: "Dostupnost", status: "Vyřešeno", service: "Platební brána" },
      { date: "2026-03-23 19:02", category: "Performance", status: "Vyřešeno", service: "Reporty" },
      { date: "2026-03-22 14:44", category: "Dávky", status: "Vyřešeno", service: "Účetní dávky" },
    ],
    trends: {
      availabilitySeries: [99.2, 99.0, 99.1, 98.8, 99.3, 99.4, 99.2, 98.9, 99.5, 99.4, 99.3, 99.0, 99.1, 99.11],
      avg: 99.15,
      best: 99.5,
      worst: 98.8,
      meta: "posledních 14 bodů (dummy)",
    },
    sla: {
      availability: { value: 99.11, target: 99.5 },
      monitoring: { value: 95.6, target: 98 },
      capacity: {
        valuePct: 81.2,
        warn: 80,
        critical: 92,
      },
    },
  },
  {
    id: "logistics",
    name: "Logistika / Dispečink",
    kpis: {
      availability: { value: 99.63, unit: "%", deltaPct: +0.18, deltaLabel: "výrazné zlepšení" },
      incidents: { value: 11, unit: "", deltaPct: -0.34, deltaLabel: "méně incidentů" },
      changeSuccess: { value: 98.3, unit: "%", deltaPct: +0.6, deltaLabel: "bez problémů" },
      mttr: { value: 29, unit: " min", deltaPct: -0.21, deltaLabel: "rychlá obnova" },
      cpu: { value: 58.1, unit: "%", deltaPct: -0.05, deltaLabel: "nižší zatížení" },
      backlog: { value: 93, unit: "", deltaPct: -0.12, deltaLabel: "menší fronta" },
    },
    services: {
      donut: { ok: 71, warn: 23, bad: 6 },
      list: [
        { name: "TMS systém", status: "OK", tone: "ok" },
        { name: "WMS integrace", status: "OK", tone: "ok" },
        { name: "Plánování tras", status: "Upozornění", tone: "warn" },
        { name: "Notifikace", status: "OK", tone: "ok" },
        { name: "Monitoring agenta", status: "Upozornění", tone: "warn" },
      ],
    },
    incidents: [
      { date: "2026-03-25 10:14", category: "Změna", status: "Vyřešeno", service: "Notifikace" },
      { date: "2026-03-24 15:01", category: "Integrace", status: "Vyřešeno", service: "WMS" },
      { date: "2026-03-23 12:20", category: "Performance", status: "Vyřešeno", service: "Plánování tras" },
      { date: "2026-03-22 09:40", category: "Dostupnost", status: "Vyřešeno", service: "TMS" },
    ],
    trends: {
      availabilitySeries: [99.3, 99.4, 99.5, 99.6, 99.55, 99.7, 99.68, 99.66, 99.74, 99.72, 99.61, 99.64, 99.6, 99.63],
      avg: 99.6,
      best: 99.74,
      worst: 99.3,
      meta: "posledních 14 bodů (dummy)",
    },
    sla: {
      availability: { value: 99.63, target: 99.5 },
      monitoring: { value: 98.6, target: 98 },
      capacity: {
        valuePct: 69.4,
        warn: 80,
        critical: 92,
      },
    },
  },
];

function formatNumber(value, decimals = 0) {
  return new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function deltaToText(deltaPct) {
  const sign = deltaPct >= 0 ? "+" : "";
  // format as percentage points for visuals
  return `${sign}${formatNumber(deltaPct * 100, 1)}%`;
}

function deltaClass(deltaPct) {
  if (deltaPct < 0) return "is-bad";
  return "is-good";
}

function setDelta(el, { deltaPct }) {
  el.textContent = deltaToText(deltaPct);
  el.classList.remove("is-bad", "is-good");
  el.classList.add(deltaClass(deltaPct));
  // Keep it accessible even if color conveys meaning
  el.setAttribute("aria-label", `Změna: ${deltaToText(deltaPct)}`);
}

function svgPathFromSeries(series, { width = 300, height = 70, padding = 6 } = {}) {
  const min = Math.min(...series);
  const max = Math.max(...series);
  const range = Math.max(0.0001, max - min);

  const scaleX = (i) => padding + (i * (width - padding * 2)) / (series.length - 1);
  const scaleY = (v) => padding + (height - padding * 2) * (1 - (v - min) / range);

  const points = series.map((v, i) => [scaleX(i), scaleY(v)]);
  const lineD = points
    .map(([x, y], idx) => {
      const cmd = idx === 0 ? "M" : "L";
      return `${cmd}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const last = points[points.length - 1];
  const first = points[0];
  const fillD = `${lineD} L${last[0].toFixed(2)},${(height - padding).toFixed(2)} L${first[0].toFixed(
    2
  )},${(height - padding).toFixed(2)} Z`;

  return { lineD, fillD };
}

function renderSparkline(svgEl, series) {
  const { lineD, fillD } = svgPathFromSeries(series);
  svgEl.querySelector(".spark__line").setAttribute("d", lineD);
  svgEl.querySelector(".spark__fill").setAttribute("d", fillD);
}

function statusToneToClass(tone) {
  if (tone === "ok") return "pill--ok";
  if (tone === "warn") return "pill--warn";
  return "pill--bad";
}

function renderStatusList(container, list) {
  container.innerHTML = "";
  for (const item of list) {
    const row = document.createElement("div");
    row.className = "pillRow";

    const name = document.createElement("div");
    name.className = "pillRow__name";
    name.textContent = item.name;

    const pill = document.createElement("div");
    pill.className = `pill ${statusToneToClass(item.tone)}`;
    pill.textContent = item.status;

    row.appendChild(name);
    row.appendChild(pill);
    container.appendChild(row);
  }
}

function renderIncidents(tableBody, incidents) {
  tableBody.innerHTML = "";
  for (const inc of incidents) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${inc.date}</td>
      <td>${inc.category}</td>
      <td>${inc.status}</td>
      <td>${inc.service}</td>
    `;
    tableBody.appendChild(tr);
  }
}

function setDonut(donutEl, { ok, warn, bad }) {
  const okDeg = (ok / 100) * 360;
  const warnDeg = (warn / 100) * 360;
  const badDeg = (bad / 100) * 360;
  donutEl.style.background = `conic-gradient(var(--ok) 0deg ${okDeg}deg, var(--warn) ${okDeg}deg ${
    okDeg + warnDeg
  }deg, var(--bad) ${okDeg + warnDeg}deg ${okDeg + warnDeg + badDeg}deg)`;
}

function setProgress(fillEl, percent) {
  const safe = Math.max(0, Math.min(100, percent));
  fillEl.style.width = `${safe}%`;
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("theme-dark", theme === "dark");
}

function loadDomain(domainId) {
  const domain = domains.find((d) => d.id === domainId) ?? domains[0];

  // KPI values
  const { kpis, services, incidents, trends, sla } = domain;
  document.getElementById("availabilityValue").textContent = `${formatNumber(kpis.availability.value, 2)}${kpis.availability.unit}`;
  setDelta(document.getElementById("availabilityDelta"), kpis.availability);

  document.getElementById("incidentsValue").textContent = `${formatNumber(kpis.incidents.value, 0)}`;
  setDelta(document.getElementById("incidentsDelta"), kpis.incidents);

  document.getElementById("changeSuccessValue").textContent = `${formatNumber(kpis.changeSuccess.value, 1)}${kpis.changeSuccess.unit}`;
  setDelta(document.getElementById("changeSuccessDelta"), kpis.changeSuccess);

  document.getElementById("mttrValue").textContent = `${formatNumber(kpis.mttr.value, 0)}${kpis.mttr.unit}`;
  setDelta(document.getElementById("mttrDelta"), kpis.mttr);

  document.getElementById("cpuValue").textContent = `${formatNumber(kpis.cpu.value, 1)}${kpis.cpu.unit}`;
  setDelta(document.getElementById("cpuDelta"), kpis.cpu);

  document.getElementById("backlogValue").textContent = `${formatNumber(kpis.backlog.value, 0)}`;
  setDelta(document.getElementById("backlogDelta"), kpis.backlog);

  // Services
  setDonut(document.getElementById("servicesDonut"), services.donut);
  renderStatusList(document.getElementById("statusList"), services.list);

  // Incidents
  renderIncidents(document.querySelector("#incidentsTable tbody"), incidents);

  // Trend
  renderSparkline(document.getElementById("availabilitySpark"), trends.availabilitySeries);
  document.getElementById("trendMeta").textContent = trends.meta;
  document.getElementById("trendAvg").textContent = `${formatNumber(trends.avg, 2)}%`;
  document.getElementById("trendBest").textContent = `${formatNumber(trends.best, 2)}%`;
  document.getElementById("trendWorst").textContent = `${formatNumber(trends.worst, 2)}%`;

  // SLA / progress bars
  document.getElementById("slaAvailabilityValue").textContent = `${formatNumber(sla.availability.value, 2)}%`;
  document.getElementById("slaAvailabilityTarget").textContent = `${formatNumber(sla.availability.target, 1)}%`;
  setProgress(document.getElementById("slaAvailabilityFill"), sla.availability.value);

  document.getElementById("slaMonitoringValue").textContent = `${formatNumber(sla.monitoring.value, 1)}%`;
  document.getElementById("slaMonitoringTarget").textContent = `${formatNumber(sla.monitoring.target, 0)}%`;
  setProgress(document.getElementById("slaMonitoringFill"), sla.monitoring.value);

  document.getElementById("capacityValue").textContent = `${formatNumber(sla.capacity.valuePct, 1)}%`;
  document.getElementById("capacityWarn").textContent = `${formatNumber(sla.capacity.warn, 0)}%`;
  document.getElementById("capacityCritical").textContent = `${formatNumber(sla.capacity.critical, 0)}%`;
  setProgress(document.getElementById("capacityFill"), sla.capacity.valuePct);

  // Provide a subtle visual for delta: add color based on sign
  // (handled by CSS classes)
}

function shuffleDummy() {
  // Lightweight "shuffle": tweak a subset of dummy values by +/- a small amount.
  // This keeps layout stable for discussion.
  const domainIndex = domains.findIndex((d) => d.id === activeDomainId());
  const domain = domains[domainIndex];

  const rand = (min, max) => min + Math.random() * (max - min);

  // KPI mutations
  domain.kpis.availability.value = Math.max(97, Math.min(100, domain.kpis.availability.value + rand(-0.25, 0.25)));
  domain.kpis.incidents.value = Math.max(0, Math.round(domain.kpis.incidents.value + rand(-5, 6)));
  domain.kpis.changeSuccess.value = Math.max(90, Math.min(100, domain.kpis.changeSuccess.value + rand(-0.6, 0.6)));
  domain.kpis.mttr.value = Math.max(10, Math.round(domain.kpis.mttr.value + rand(-8, 10)));
  domain.kpis.cpu.value = Math.max(10, Math.min(95, domain.kpis.cpu.value + rand(-4, 5)));
  domain.kpis.backlog.value = Math.max(0, Math.round(domain.kpis.backlog.value + rand(-18, 22)));

  // SLA mutations
  domain.sla.availability.value = domain.kpis.availability.value;
  domain.sla.monitoring.value = Math.max(90, Math.min(100, domain.sla.monitoring.value + rand(-1.5, 1.5)));
  domain.sla.capacity.valuePct = Math.max(20, Math.min(99, domain.sla.capacity.valuePct + rand(-7, 7)));

  // Trend mutations (keep last point aligned)
  const s = domain.trends.availabilitySeries;
  for (let i = 0; i < s.length - 1; i++) s[i] = Math.max(97.5, Math.min(100, s[i] + rand(-0.35, 0.35)));
  s[s.length - 1] = domain.kpis.availability.value;

  domain.trends.avg = s.reduce((a, b) => a + b, 0) / s.length;
  domain.trends.best = Math.max(...s);
  domain.trends.worst = Math.min(...s);

  loadDomain(domain.id);
}

function activeDomainId() {
  const sel = document.getElementById("domainSelect");
  return sel?.value ?? domains[0].id;
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
    loadDomain(domainSelect.value);
  });

  // Range buttons (purely visual in prototype)
  document.querySelectorAll(".range__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".range__btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      // In this prototype, we keep dummy values. Later we can map range -> dataset.
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

  // Initialize
  loadDomain(domainSelect.value);

  // Last refresh
  const lastRefreshEl = document.getElementById("lastRefresh");
  const now = new Date();
  lastRefreshEl.textContent = now.toLocaleString("cs-CZ", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit" });
});

// Delta coloring (simple, prototype-friendly)
const styleTag = document.createElement("style");
styleTag.textContent = `
  .kpi__delta.is-good { color: #16a34a; }
  .kpi__delta.is-bad { color: #ef4444; }
`;
document.head.appendChild(styleTag);

