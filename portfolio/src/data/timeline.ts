export type TimelineItem = {
  time: string;
  title: string;
  org: string;
  desc: string;
  tags: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    time: "2023 · Aug",
    title: "Started B.Tech in EEE",
    org: "VVIT, Andhra Pradesh",
    desc: "Began Electrical & Electronics Engineering with focus on power electronics, control systems, and embedded.",
    tags: ["EEE", "Foundations"],
  },
  {
    time: "2023 · Apr → 2025 · Apr",
    title: "CCBP 4.0 — Genius Certification",
    org: "NxtWave Academy",
    desc: "Two-year intensive: functional programming, client architecture, full-stack development. Top performer track.",
    tags: ["JavaScript", "React", "Systems"],
  },
  {
    time: "2024 · Q2",
    title: "First production Python tool",
    org: "Independent",
    desc: "Shipped Embedded Telemetry Signal Logger — parser + anomaly classifier for sensor streams.",
    tags: ["Python", "OOP"],
  },
  {
    time: "2024 · Q4",
    title: "JARVIS v1 — first orchestrator",
    org: "Independent research",
    desc: "Single-layer assistant evolved into multi-layer architecture after concurrency bugs forced a redesign.",
    tags: ["Threading", "Plugin Arch"],
  },
  {
    time: "2025 · Q1",
    title: "JARVIS v2 — 5-layer pipeline",
    org: "Flagship project",
    desc: "Planner → Reviewer → Executor → Dispatcher → Controller. Singleton GLOBAL_MEMORY with RLock sync.",
    tags: ["Concurrency", "Architecture"],
  },
  {
    time: "2025 · Q3",
    title: "J.P. Morgan Forage program",
    org: "Investment Banking Sim",
    desc: "Financial modeling mechanics and corporate data analysis workflows.",
    tags: ["Finance", "Modeling"],
  },
  {
    time: "2026 · Now",
    title: "Building NEXUS + portfolio",
    org: "Open for opportunities",
    desc: "Distributed agent mesh research + crafting this very portfolio. Open to AI infrastructure roles.",
    tags: ["Distributed", "Agents", "AI"],
  },
];
