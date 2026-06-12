// ─────────────────────────────────────────────────────────────────────────────
//  src/data/timeline.ts
//  Interface MUST match Experience.tsx usage:
//    t.time   (NOT t.date)
//    t.title
//    t.org
//    t.desc   (NOT t.body)
//    t.tags
// ─────────────────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  time:  string;
  title: string;
  org:   string;
  desc:  string;
  tags:  string[];
}

export const TIMELINE: TimelineEntry[] = [
  {
    time:  "2023 · Aug",
    title: "Started B.Tech in EEE",
    org:   "VVIT, Andhra Pradesh",
    desc:
      "Began Electrical & Electronics Engineering with focus on power electronics, " +
      "control systems, and embedded system fundamentals.",
    tags:  ["EEE", "Foundations"],
  },

  {
    time:  "2024 · Q2",
    title: "Generative AI BootCamp — Grade A",
    org:   "NSDC / Skill India",
    desc:
      "Certified with Grade A. Covered LLM fundamentals, prompt engineering, and " +
      "applied Generative AI system design.",
    tags:  ["GenAI", "Certified", "Grade A"],
  },

  {
    time:  "2024 · Q2",
    title: "3-Day Generative AI BootCamp",
    org:   "Growth School",
    desc:
      "Practical GenAI tools for productivity, engineering automation, and workflow design.",
    tags:  ["GenAI", "Automation"],
  },

  {
    time:  "2024 · Q2",
    title: "Generative AI Intensive Program",
    org:   "Outskill",
    desc:
      "Hands-on with Google Gemini, n8n automation workflows, AI video creation pipelines, " +
      "and end-to-end portfolio delivery.",
    tags:  ["Gemini", "n8n", "Pipelines"],
  },

  {
    time:  "2024 · Q2",
    title: "Electrical Sensor Fault Detection Engine",
    org:   "Independent",
    desc:
      "Shipped rule-based fault detection system — CSV ingestion → threshold analysis → " +
      "fault classification (HIGH_VOLTAGE_FAULT / LOW_VOLTAGE_FAULT / NORMAL). " +
      "First production Python tool targeting real-world electrical monitoring.",
    tags:  ["Python", "EEE + AI"],
  },

  {
    time:  "2024 · Q4",
    title: "Jarvis v1 — Voice Automation Assistant",
    org:   "Independent",
    desc:
      "Built first version of Jarvis: offline voice-to-text + TTS synthesis + OS-level " +
      "command execution. Decoupled input parsing from execution logic from day one.",
    tags:  ["Voice AI", "Python"],
  },

  {
    time:  "2025 · Q1",
    title: "Jarvis v2 — Expanded Automation Layer",
    org:   "Flagship project",
    desc:
      "Extended command modules — voice-triggered web navigation, datetime-aware responses, " +
      "and subprocess-level application control. Architecture remains modular: zero rewrites " +
      "to core pipeline when adding new capabilities.",
    tags:  ["Modular", "Automation"],
  },

  {
    time:  "2025 · Oct",
    title: "J.P. Morgan Investment Banking Simulation",
    org:   "Forage",
    desc:
      "Financial analysis, deal structuring workflows, and investment banking process simulation.",
    tags:  ["Finance", "Simulation"],
  },

  {
    time:  "2026 · Now",
    title: "Final year — open for opportunities",
    org:   "VVIT + Independent",
    desc:
      "Completing B.Tech EEE, expanding GenAI toolchain integrations, and actively targeting " +
      "hybrid AI × embedded roles. Open to internships, remote projects, and full-time positions.",
    tags:  ["Open to Work", "AI", "EEE"],
  },
];