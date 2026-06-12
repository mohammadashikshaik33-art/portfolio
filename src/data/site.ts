// ─────────────────────────────────────────────────────────────────────────────
//  src/data/site.ts  ·  Single source of truth
//  NOTE: export MUST be named SITE (uppercase) — consumed by all components
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name:      "Shaik Mohammad Ashik",
  shortName: "ashik.dev",

  // ── Nav links (consumed by Navbar.tsx scrollspy — ids MUST match section ids)
  nav: [
    { id: "home",       label: "Home"       },
    { id: "about",      label: "About"      },
    { id: "projects",   label: "Projects"   },
    { id: "skills",     label: "Skills"     },
    { id: "experience", label: "Experience" },  // FIX: was "timeline" — section id is "experience"
    { id: "contact",    label: "Contact"    },
  ],

  // ── Typewriter words (consumed by Hero.tsx TypeAnimation) ─────────────────
  typeWords: [
    "Python Developer",
    "AI Automation Engineer",
    "Voice Systems Architect",
    "GenAI Practitioner",
    "EEE @ VVIT",
  ],

  // ── Hero paragraph prefix (consumed by Hero.tsx) ──────────────────────────
  subtagline:
    "Python developer & AI automation engineer building modular, real-world systems.",

  // ── Role chip shown in Hero eyebrow ───────────────────────────────────────
  role: "Python Developer · AI Automation · EEE @ VVIT",

  // ── Contact ───────────────────────────────────────────────────────────────
  email:    "mohammadashikshaik33@gmail.com",
  phone:    "+91 6304646550",
  location: "Vijayawada, Andhra Pradesh, India",

  // ── Social links ──────────────────────────────────────────────────────────
  github:    "https://github.com/mohammadashikshaik33-art",
  linkedin:  "https://linkedin.com/in/shaik-mohammad-ashik",
  twitter:   "",          // empty → conditionally hidden in Navbar
  portfolio: "https://portfolio-psi-flame-90.vercel.app",
  resume:    "/resume.pdf",

  // ── Status ────────────────────────────────────────────────────────────────
  availability: "Available for work",

  // ── SEO meta ──────────────────────────────────────────────────────────────
  metaTitle:
    "Shaik Mohammad Ashik — Python AI & Automation Developer",
  metaDescription:
    "Final-year EEE student at VVIT building Python AI systems, voice automation pipelines, and sensor-driven fault detection — targeting hybrid AI × embedded roles.",
  ogTitle:
    "Shaik Mohammad Ashik — Python AI & Automation Developer",
  ogDescription:
    "Building Intelligent Automation Systems.",
} as const;