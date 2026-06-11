// ─────────────────────────────────────────────
//  src/data/projects.ts  ·  Project case studies
// ─────────────────────────────────────────────
//
//  Only projects documented in the resume are listed.
//  NEXUS, SENTINEL, ATLAS, Smart Energy Monitoring have been
//  removed as they are not yet shipped / documented.
//

export interface Project {
  id:          string;         // "#01" etc.
  tags:        string[];       // badge chips at the top
  title:       string;
  description: string;
  stack:       string[];       // tech chips
  link:        string;         // GitHub or "#"
  status?:     "active" | "completed";
}

export const projects: Project[] = [
  {
    id:    "#01",
    tags:  ["Flagship", "Voice Automation", "Offline AI"],
    title: "Jarvis — Python Voice-Controlled AI Automation",
    description:
      "Modular voice automation assistant integrating real-time speech-to-text with offline " +
      "TTS synthesis — enabling zero-latency voice interaction with zero cloud API dependency. " +
      "A fully decoupled command-processing pipeline lets new command modules be added without " +
      "restructuring core architecture. Handles OS-level automation, app launching, file ops, " +
      "voice-triggered web navigation, and context-aware time/date responses.",
    stack:  [
      "Python",
      "speech_recognition",
      "pyttsx3",
      "os / subprocess",
      "webbrowser",
      "datetime",
    ],
    link:   "https://github.com/mohammadashikshaik33-art/Jarvis_AI",
    status: "active",
  },

  {
    id:    "#02",
    tags:  ["EEE + AI", "Rule Engine", "Fault Detection"],
    title: "Electrical Sensor Data Rule Engine",
    description:
      "Rule-based fault detection system simulating real-world electrical monitoring. " +
      "Processes multi-parameter sensor readings (voltage, current, temperature) from " +
      "structured CSV data streams. Configurable threshold analysis maps sensor states to " +
      "fault classifications: HIGH_VOLTAGE_FAULT, LOW_VOLTAGE_FAULT, and NORMAL — " +
      "mirroring industry-standard electrical fault categorisation. Full pipeline: " +
      "CSV ingestion → parameter validation → rule evaluation → classified output " +
      "with structured terminal logs and optional fault-event report generation.",
    stack:  [
      "Python",
      "pandas",
      "CSV processing",
      "Rule-based logic",
      "Threshold analysis",
    ],
    link:   "https://github.com/mohammadashikshaik33-art",
    status: "completed",
  },
];

// ── Section header ─────────────────────────────
export const projectsMeta = {
  // Update this line if you want the section subheading to read differently
  count:    "Two systems, one philosophy.",
  subcount: "Architecture case studies — built for correctness, modularity, and real-world relevance.",
};
export const PROJECTS = projects;