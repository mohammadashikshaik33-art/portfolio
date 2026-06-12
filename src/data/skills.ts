// ─────────────────────────────────────────────────────────────────────────────
//  src/data/skills.ts
//  Interface MUST match Skills.tsx SkillCard usage:
//    skill.title  skill.icon  skill.color  skill.items  skill.pct  skill.level
//  icon values MUST be keys of the ICONS record in Skills.tsx:
//    "frontend" | "backend" | "ai" | "devops" | "tools" | "embedded"
// ─────────────────────────────────────────────────────────────────────────────

export interface Skill {
  title: string;
  icon:  "frontend" | "backend" | "ai" | "devops" | "tools" | "embedded";
  color: string;
  items: string[];
  level: string;
  pct:   number;
}

export const SKILLS: Skill[] = [
  {
    title: "Python Ecosystem",
    icon:  "backend",
    color: "var(--green)",
    items: [
      "Python",
      "pandas",
      "csv / io",
      "os",
      "subprocess",
      "datetime",
      "pathlib",
      "SQL",
    ],
    level: "Primary language",
    pct:   80,
  },

  {
    title: "Voice & Speech",
    icon:  "frontend",
    color: "var(--cyan)",
    items: [
      "speech_recognition",
      "pyttsx3",
      "webbrowser",
      "offline TTS",
      "real-time STT",
      "command parsing",
      "NLP pipelines",
    ],
    level: "Specialist",
    pct:   75,
  },

  {
    title: "AI & Generative AI",
    icon:  "ai",
    color: "var(--gold)",
    items: [
      "Google Gemini",
      "n8n automation",
      "Prompt Engineering",
      "GenAI pipelines",
      "LLM fundamentals",
      "AI video creation",
      "workflow design",
    ],
    level: "Certified",
    pct:   72,
  },

  {
    title: "Developer Tools",
    icon:  "tools",
    color: "#A78BFA",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Canva",
      "Vercel",
      "Markdown",
    ],
    level: "Daily driver",
    pct:   78,
  },

  {
    title: "Electrical Systems",
    icon:  "embedded",
    color: "var(--green)",
    items: [
      "Voltage / current analysis",
      "Fault classification",
      "Power system monitoring",
      "SCADA-adjacent logic",
      "Electrical safety",
      "Sensor threshold analysis",
    ],
    level: "Domain core",
    pct:   74,
  },

  {
    title: "IoT & Embedded",
    icon:  "devops",
    color: "var(--cyan)",
    items: [
      "Sensor data interfacing",
      "Real-time monitoring",
      "IoT data flow",
      "Embedded fundamentals",
      "Rule-based classification",
      "Modular architecture",
    ],
    level: "Hardware-informed",
    pct:   68,
  },
];