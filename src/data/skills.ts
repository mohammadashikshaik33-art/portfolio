export type Skill = {
  title: string;
  color: string;
  level: string;
  pct: number;
  items: string[];
  icon: "frontend" | "backend" | "ai" | "devops" | "tools" | "embedded";
};

export const SKILLS: Skill[] = [
  {
    title: "Frontend",
    color: "var(--green)",
    level: "Advanced",
    pct: 88,
    items: ["React", "Next.js 14", "TypeScript", "Tailwind", "Framer Motion", "GSAP", "HTML/CSS3", "Canvas"],
    icon: "frontend",
  },
  {
    title: "Backend",
    color: "var(--cyan)",
    level: "Proficient",
    pct: 78,
    items: ["Node.js", "Express", "Python", "FastAPI", "REST", "WebSockets", "JSON", "OAuth"],
    icon: "backend",
  },
  {
    title: "AI / ML",
    color: "var(--gold)",
    level: "Specialized",
    pct: 92,
    items: ["Ollama", "LangChain", "OpenAI API", "Prompt Engineering", "RAG", "Agent Orchestration", "Vector DBs", "LlamaIndex"],
    icon: "ai",
  },
  {
    title: "DevOps",
    color: "#A78BFA",
    level: "Working",
    pct: 70,
    items: ["Git", "GitHub Actions", "Docker", "Linux", "Vercel", "Bash", "CI/CD", "Nginx"],
    icon: "devops",
  },
  {
    title: "Tools",
    color: "var(--green)",
    level: "Daily driver",
    pct: 84,
    items: ["VS Code", "Figma", "Postman", "Notion", "Vite", "pnpm", "Cursor", "Arc"],
    icon: "tools",
  },
  {
    title: "Embedded",
    color: "var(--cyan)",
    level: "Hardware-informed",
    pct: 75,
    items: ["C", "Microcontrollers", "ADC/DAC", "UART/SPI", "pyserial", "Signal Processing", "Telemetry", "PCB basics"],
    icon: "embedded",
  },
];
