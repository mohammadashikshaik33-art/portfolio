// ─────────────────────────────────────────────
//  src/data/skills.ts  ·  Skill categories
// ─────────────────────────────────────────────
//
//  Six domains — mirrors the current 6-column layout.
//  Only skills actually used/certified in the resume are listed.
//

export interface SkillCategory {
  name:        string;
  skills:      string[];
  proficiency: { label: string; value: number };
}

export const skills: SkillCategory[] = [
  {
    name: "Python Ecosystem",
    skills: [
      "Python",
      "pandas",
      "csv / io",
      "os",
      "subprocess",
      "datetime",
      "pathlib",
      "SQL",
    ],
    proficiency: { label: "Primary language · 80%", value: 80 },
  },

  {
    name: "Voice & Speech",
    skills: [
      "speech_recognition",
      "pyttsx3",
      "webbrowser",
      "offline TTS",
      "real-time STT",
      "command parsing",
      "NLP pipelines",
    ],
    proficiency: { label: "Specialist · 75%", value: 75 },
  },

  {
    name: "AI & Generative AI",
    skills: [
      "Google Gemini",
      "n8n automation",
      "Prompt Engineering",
      "GenAI pipelines",
      "LLM fundamentals",
      "AI video creation",
      "workflow design",
    ],
    proficiency: { label: "Certified · 72%", value: 72 },
  },

  {
    name: "Developer Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Canva",
      "Vercel",
      "Markdown",
    ],
    proficiency: { label: "Daily driver · 78%", value: 78 },
  },

  {
    name: "Electrical Systems",
    skills: [
      "Voltage / current analysis",
      "Fault classification",
      "Power system monitoring",
      "SCADA-adjacent logic",
      "Electrical safety",
      "Sensor threshold analysis",
    ],
    proficiency: { label: "Domain core · 74%", value: 74 },
  },

  {
    name: "IoT & Embedded",
    skills: [
      "Sensor data interfacing",
      "Real-time monitoring",
      "IoT data flow",
      "Embedded system fundamentals",
      "Rule-based classification",
      "Modular system architecture",
    ],
    proficiency: { label: "Hardware-informed · 68%", value: 68 },
  },
];
export const SKILLS = skills;