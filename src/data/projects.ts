export type Badge = { label: string; tone: "green" | "gold" | "cyan" | "purple" };

export type Project = {
  id: string;
  title: string;
  badges: Badge[];
  sub: string;
  tags: string[];
  github?: string;
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "jarvis",
    title: "JARVIS — Multi-Agent Orchestration System",
    badges: [
      { label: "Flagship", tone: "green" },
      { label: "Concurrency", tone: "cyan" },
      { label: "Orchestration", tone: "purple" },
    ],
    sub: "Production-grade 5-layer orchestration for autonomous desktop assistance. Deterministic execution pipelines, thread-safe memory, scalable plugin routing.",
    tags: ["Python", "ThreadPoolExecutor", "RLock", "Plugin Architecture", "Ollama", "pyautogui"],
    github: "https://github.com/shaik-mohammad-ashik",
  },
  {
    id: "energy",
    title: "Smart Energy Monitoring & Telemetry",
    badges: [
      { label: "Hardware+Software", tone: "gold" },
      { label: "Real-time", tone: "cyan" },
    ],
    sub: "Zero-dependency client-side telemetry engine for real-time electrical parameter visualization. Sub-10ms render cycles, 100Hz sampling.",
    tags: ["JavaScript", "Canvas API", "Async Generators", "CSS Grid", "Zero Deps"],
    github: "https://github.com/shaik-mohammad-ashik",
  },
  {
    id: "signal",
    title: "Embedded Telemetry & Signal Logger",
    badges: [
      { label: "Signal Processing", tone: "green" },
      { label: "Anomaly Detection", tone: "gold" },
    ],
    sub: "Modular signal processing framework for parsing, validating, logging hardware sensor transmissions. O(1) anomaly detection with robust error handling.",
    tags: ["Python", "OOP", "Dict Indexing", "Signal Processing", "Error Handling"],
    github: "https://github.com/shaik-mohammad-ashik",
  },
  {
    id: "nexus",
    title: "NEXUS — Distributed Agent Mesh",
    badges: [
      { label: "Research", tone: "purple" },
      { label: "Multi-agent", tone: "green" },
    ],
    sub: "Experimental framework for agent-to-agent coordination across processes. Message bus + capability negotiation + shared decision engine.",
    tags: ["Python", "asyncio", "ZeroMQ", "LangChain", "Pub/Sub"],
  },
  {
    id: "sentinel",
    title: "SENTINEL — Grid Anomaly Detector",
    badges: [
      { label: "ML", tone: "cyan" },
      { label: "Embedded AI", tone: "gold" },
    ],
    sub: "Edge-deployed model for detecting power-grid anomalies from time-series telemetry. Lightweight CNN, runs on Raspberry Pi class hardware.",
    tags: ["Python", "PyTorch", "InfluxDB", "MQTT", "Edge AI"],
  },
  {
    id: "atlas",
    title: "ATLAS — Vision-Guided Automation",
    badges: [
      { label: "Computer Vision", tone: "green" },
      { label: "Robotics", tone: "purple" },
    ],
    sub: "Vision pipeline coupling YOLO detection with a pyautogui executor — natural-language commands translated to screen-aware actions.",
    tags: ["Python", "YOLOv8", "OpenCV", "pyautogui", "LLM"],
  },
];
