import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "var(--bg-0)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
        },
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        green: {
          DEFAULT: "var(--green)",
          2: "var(--green-2)",
        },
        cyan: {
          DEFAULT: "var(--cyan)",
          2: "var(--cyan-2)",
        },
        gold: {
          DEFAULT: "var(--gold)",
          2: "var(--gold-2)",
        },
        text: {
          DEFAULT: "var(--text)",
          2: "var(--text-2)",
        },
        muted: "var(--muted)",
      },
      fontFamily: {
        heading: ["var(--font-space)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(45,232,138,.35)",
        gold: "0 0 24px rgba(232,181,71,.35)",
        lg2: "0 30px 80px -20px rgba(0,0,0,.6)",
      },
      keyframes: {
        spin: { to: { transform: "rotate(360deg)" } },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(.7)", opacity: ".5" },
        },
        shine: {
          "0%": { backgroundPosition: "300% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 1.6s ease-in-out infinite",
        shine: "shine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
