// ─────────────────────────────────────────────
//  src/data/timeline.ts  ·  Experience timeline
// ─────────────────────────────────────────────
//
//  Changes from previous version:
//   - Removed "CCBP 4.0 Genius Certification" (not in resume)
//   - Added the four GenAI certifications from resume
//   - Corrected JARVIS description to match resume (voice-first,
//     no ThreadPoolExecutor / RLock — those details aren't documented)
//   - Removed "NEXUS + portfolio" entry (NEXUS is not a real project yet)
//

export interface TimelineEntry {
  date:  string;
  title: string;
  org:   string;
  body:  string;
  tags:  string[];
}

export const timeline: TimelineEntry[] = [
  {
    date:  "2023 · Aug",
    title: "Started B.Tech in EEE",
    org:   "VVIT, Andhra Pradesh",
    body:
      "Began Electrical & Electronics Engineering with focus on power electronics, " +
      "control systems, and embedded system fundamentals.",
    tags:  ["EEE", "Foundations"],
  },

  {
    date:  "2024 · Q2",
    title: "Generative AI BootCamp — Grade A",
    org:   "NSDC / Skill India",
    body:
      "Certified with Grade A. Covered LLM fundamentals, prompt engineering, and " +
      "applied Generative AI system design.",
    tags:  ["GenAI", "Certified"],
  },

  {
    date:  "2024 · Q2",
    title: "3-Day Generative AI BootCamp",
    org:   "Growth School",
    body:
      "Practical GenAI tools for productivity, engineering automation, and workflow design.",
    tags:  ["GenAI", "Automation"],
  },

  {
    date:  "2024 · Q2",
    title: "Generative AI Intensive Program",
    org:   "Outskill",
    body:
      "Hands-on with Google Gemini, n8n automation workflows, AI video creation pipelines, " +
      "and end-to-end portfolio delivery.",
    tags:  ["Gemini", "n8n", "Pipelines"],
  },

  {
    date:  "2024 · Q2",
    title: "Electrical Sensor Fault Detection Engine",
    org:   "Independent",
    body:
      "Shipped rule-based fault detection system — CSV ingestion → threshold analysis → " +
      "fault classification (HIGH_VOLTAGE_FAULT / LOW_VOLTAGE_FAULT / NORMAL). " +
      "First production Python tool targeting real-world electrical monitoring.",
    tags:  ["Python", "EEE + AI"],
  },

  {
    date:  "2024 · Q4",
    title: "Jarvis v1 — Voice Automation Assistant",
    org:   "Independent",
    body:
      "Built first version of Jarvis: offline voice-to-text + TTS synthesis + OS-level " +
      "command execution. Decoupled input parsing from execution logic from day one.",
    tags:  ["Voice AI", "Python"],
  },

  {
    date:  "2025 · Q1",
    title: "Jarvis v2 — Expanded Automation Layer",
    org:   "Flagship project",
    body:
      "Extended command modules — voice-triggered web navigation, datetime-aware responses, " +
      "and subprocess-level application control. Architecture remains modular: zero rewrites " +
      "to core pipeline when adding new capabilities.",
    tags:  ["Modular", "Automation"],
  },

  {
    date:  "2025 · Oct",
    title: "J.P. Morgan Investment Banking Simulation",
    org:   "Forage",
    body:
      "Financial analysis, deal structuring workflows, and investment banking process simulation.",
    tags:  ["Finance", "Simulation"],
  },

  {
    date:  "2026 · Now",
    title: "Final year — open for opportunities",
    org:   "VVIT + Independent",
    body:
      "Completing B.Tech EEE, expanding GenAI toolchain integrations, and actively targeting " +
      "hybrid AI × embedded roles. Open to internships, remote projects, and full-time positions.",
    tags:  ["Open to Work", "AI", "EEE"],
  },
];