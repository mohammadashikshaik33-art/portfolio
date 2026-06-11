// ─────────────────────────────────────────────
//  src/data/site.ts  ·  Single source of truth
// ─────────────────────────────────────────────

export const site = {
  // ── Identity ──────────────────────────────
  name:      "Shaik Mohammad Ashik",
  shortName: "ashik.dev",

  // ── Hero headline & subline ───────────────
  // Shown right beneath the animated typewriter in the hero
  role: "Python Developer · AI Automation · EEE @ VVIT",

  // Main H1
  headline: "Building Intelligent Automation Systems",

  // The paragraph under the headline
  description:
    "Python developer & AI automation engineer building modular, real-world systems. " +
    "I design voice automation pipelines, sensor-driven fault detection engines, and " +
    "applied GenAI toolchains — bridging core EEE fundamentals with intelligent software.",

  // ── Contact ───────────────────────────────
  email:    "mohammadashikshaik33@gmail.com",
  phone:    "+91 6304646550",
  location: "Vijayawada, Andhra Pradesh, India",

  // ── Social links ──────────────────────────
  github:   "https://github.com/mohammadashikshaik33-art",
  linkedin: "https://linkedin.com/in/shaik-mohammad-ashik",
  twitter:  "",   // leave empty — remove from nav
  portfolio: "https://portfolio-psi-flame-90.vercel.app",
  resume:   "/resume.pdf",

  // ── Hero stat chips ───────────────────────
  stats: [
    { value: "2",  label: "Systems shipped" },
    { value: "4",  label: "AI certifications" },
    { value: "3+", label: "Years building"   },
  ],

  // ── Status badge ─────────────────────────
  availability: "Available for work",

  // ── SEO / meta ────────────────────────────
  metaTitle:       "Shaik Mohammad Ashik — Python AI & Automation Developer",
  metaDescription: "Final-year EEE student at VVIT building Python AI systems, voice automation pipelines, and sensor-driven fault detection — targeting hybrid AI × embedded roles.",
  ogTitle:         "Shaik Mohammad Ashik — Python AI & Automation Developer",
  ogDescription:   "Building Intelligent Automation Systems.",
};

// ── About section ─────────────────────────────
export const about = {
  headline: "Systems architecture\n meets applied AI.",

  paragraphs: [
    "I'm a final-year Electrical & Electronics Engineering student at VVIT with a practical " +
    "foundation in Python-based AI system design, voice automation architecture, and " +
    "sensor-driven electrical fault detection.",

    "My work centres on building real-world, modular systems — integrating speech recognition " +
    "pipelines, rule-based data processing engines, and Generative AI toolchains. I think in " +
    "layers: every system I build decouples voice input parsing from execution logic, and " +
    "CSV ingestion from rule evaluation — so new capabilities slot in without touching core architecture.",

    "When I'm not writing Python, I'm studying the intersection of embedded systems and AI — " +
    "exploring how GenAI toolchains can be wired into IoT and edge control layers.",
  ],

  quote:
    "Modular design is not a preference — it's the contract between today's code and tomorrow's requirements.",

  pillars: [
    {
      title: "Modular by design",
      body:  "Clean separation between input parsing, processing logic, and execution layers — always.",
    },
    {
      title: "EEE × AI hybrid",
      body:  "Power-systems knowledge applied directly to fault detection logic and sensor data pipelines.",
    },
    {
      title: "Voice-first automation",
      body:  "Offline, zero-latency speech architectures with zero cloud API dependency.",
    },
    {
      title: "Applied GenAI",
      body:  "Four certified AI programs — Google Gemini, n8n, prompt engineering, GenAI toolchains.",
    },
  ],
};
export const SITE = site;