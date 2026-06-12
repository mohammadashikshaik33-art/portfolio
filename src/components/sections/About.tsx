"use client";
import { FiGrid, FiRefreshCw, FiCpu, FiSettings } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    ico: <FiGrid />,
    color: "var(--green)",
    title: "Modular by design",
    body: "Clean separation between input parsing, processing logic, and execution layers — always.",
  },
  {
    ico: <FiRefreshCw />,
    color: "var(--gold)",
    title: "EEE × AI hybrid",
    body: "Power-systems knowledge applied directly to fault detection logic and sensor data pipelines.",
  },
  {
    ico: <FiCpu />,
    color: "var(--cyan)",
    title: "Voice-first automation",
    body: "Offline, zero-latency speech architectures with zero cloud API dependency.",
  },
  {
    ico: <FiSettings />,
    color: "#A78BFA",
    title: "Applied GenAI",
    body: "Four certified AI programs — Google Gemini, n8n, prompt engineering, GenAI toolchains.",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About" className="relative py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
      <SectionHeader
        eyebrow="About"
        title={
          <>
            <span className="grad-text">Systems architecture</span>
            <br />
            meets applied AI.
          </>
        }
        sub="I'm a final-year Electrical & Electronics Engineering student at VVIT with a practical foundation in Python-based AI system design, voice automation architecture, and sensor-driven electrical fault detection."
      />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Reveal>
          <div className="text-[15.5px] leading-[1.8] text-[var(--text-2)] space-y-4">
            <p>
              My work centres on building real-world, modular systems — integrating{" "}
              <strong className="text-white">speech recognition pipelines</strong>, rule-based data
              processing engines, and Generative AI toolchains into production-ready Python architecture.
            </p>
            <p>
              I think in layers. Every system I build decouples{" "}
              <strong className="text-white">voice input parsing from execution logic</strong>, and CSV
              ingestion from rule evaluation — so new capabilities slot in without touching core architecture.
            </p>
            <p>
              When I&apos;m not writing Python, I&apos;m exploring how{" "}
              <strong className="text-white">GenAI toolchains can be wired into IoT and edge control layers</strong>{" "}
              — the personal research direction that sits at the intersection of my EEE degree and AI work.
            </p>
            <blockquote
              className="mt-6 py-4 px-5 italic text-white text-[15px] rounded-r-xl"
              style={{ borderLeft: "2px solid var(--green)", background: "rgba(45,232,138,.04)" }}
            >
              &ldquo;Modular design is not a preference — it&apos;s the contract between today&apos;s code and tomorrow&apos;s requirements.&rdquo;
            </blockquote>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i + 1}>
              <div
                className="group relative p-5 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              >
                <div
                  className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none"
                  style={{
                    padding: "1px",
                    background: `linear-gradient(135deg,${c.color},transparent 60%)`,
                    WebkitMask: "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div
                  className="w-10 h-10 rounded-[10px] grid place-items-center mb-3.5"
                  style={{ background: "rgba(45,232,138,.08)", color: c.color }}
                >
                  {c.ico}
                </div>
                <h4 className="text-[14.5px] font-semibold mb-1.5">{c.title}</h4>
                <p className="text-[13px] text-[var(--text-2)] leading-[1.65]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}