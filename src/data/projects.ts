// ─────────────────────────────────────────────────────────────────────────────
//  src/data/projects.ts
//  Interface MUST match Projects.tsx ProjectCard usage:
//    project.id      → key in ICONS record (jarvis | signal | energy | nexus | sentinel | atlas)
//    project.badges  → { label, tone }[] — colored pills at top of card
//    project.title   → heading
//    project.sub     → description paragraph (NOT "description")
//    project.tags    → string[] — tech chips at bottom (NOT "stack")
//    project.github  → href (NOT "link")
//  Badge.tone must be: "green" | "gold" | "cyan" | "purple"
// ─────────────────────────────────────────────────────────────────────────────

export type Badge = {
  label: string;
  tone:  "green" | "gold" | "cyan" | "purple";
};

export interface Project {
  id:      string;
  badges:  Badge[];
  title:   string;
  sub:     string;
  tags:    string[];
  github?: string;
  status?: "active" | "completed";
}

export const PROJECTS: Project[] = [
  {
    id: "jarvis",                  // → ICONS["jarvis"] = <FiGrid size={42} />
    badges: [
      { label: "Flagship",         tone: "green"  },
      { label: "Voice Automation", tone: "cyan"   },
      { label: "Offline AI",       tone: "gold"   },
    ],
    title: "Jarvis — Python Voice-Controlled AI Automation",
    sub:
      "Modular voice automation assistant integrating real-time speech-to-text with offline " +
      "TTS synthesis — enabling zero-latency voice interaction with zero cloud API dependency. " +
      "A fully decoupled command-processing pipeline lets new command modules be added without " +
      "restructuring core architecture. Handles OS-level automation, app launching, file ops, " +
      "voice-triggered web navigation, and context-aware time/date responses.",
    tags:   ["Python", "speech_recognition", "pyttsx3", "os/subprocess", "webbrowser", "datetime"],
    github: "https://github.com/mohammadashikshaik33-art/Jarvis_AI",
    status: "active",
  },

  {
    id: "signal",                  // → ICONS["signal"] = <FiLayers size={42} />
    badges: [
      { label: "EEE + AI",        tone: "cyan"   },
      { label: "Rule Engine",     tone: "gold"   },
      { label: "Fault Detection", tone: "purple" },
    ],
    title: "Electrical Sensor Data Rule Engine",
    sub:
      "Rule-based fault detection system simulating real-world electrical monitoring. " +
      "Processes multi-parameter sensor readings (voltage, current, temperature) from " +
      "structured CSV data streams. Configurable threshold analysis maps sensor states to " +
      "fault classifications: HIGH_VOLTAGE_FAULT, LOW_VOLTAGE_FAULT, NORMAL — " +
      "mirroring industry-standard electrical fault categorisation. Full pipeline: " +
      "CSV ingestion → parameter validation → rule evaluation → classified output " +
      "with structured terminal logs and optional fault-event report generation.",
    tags:   ["Python", "pandas", "CSV processing", "Rule-based logic", "Threshold analysis"],
    github: "https://github.com/mohammadashikshaik33-art",
    status: "completed",
  },
];