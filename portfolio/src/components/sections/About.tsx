"use client";
import { FiGrid, FiRefreshCw, FiCpu, FiSettings } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  { ico: <FiGrid />, color: "var(--green)", title: "Architecture-first", body: "Design for scalability before implementation. Always." },
  { ico: <FiRefreshCw />, color: "var(--gold)", title: "Concurrency native", body: "Thread-safety engineered in from day one." },
  { ico: <FiCpu />, color: "var(--cyan)", title: "Hardware-informed", body: "EE rigor applied to software constraints." },
  { ico: <FiSettings />, color: "#A78BFA", title: "Systems over features", body: "Plugin boundaries that evolve into multi-agent worlds." },
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
            meets cinematic interfaces.
          </>
        }
        sub="I'm an Electrical & Electronics Engineering undergraduate at VVIT specializing in orchestration architectures for autonomous AI systems — and the immersive interfaces that bring them to life."
      />

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Reveal>
          <div className="text-[15.5px] leading-[1.8] text-[var(--text-2)] space-y-4">
            <p>
              My work centers on designing <strong className="text-white">multi-layer execution pipelines</strong>, concurrent system
              patterns, and intelligent automation frameworks — combining hardware engineering rigor with AI systems thinking.
            </p>
            <p>
              I think in execution flow first. Every system starts with{" "}
              <strong className="text-white">layer isolation, failure modes, and concurrency contracts</strong> before a single line of
              business logic.
            </p>
            <p>
              When I'm not engineering systems, I'm crafting <strong className="text-white">premium product UI</strong> — the same
              precision applied to motion, type, and color.
            </p>
            <blockquote
              className="mt-6 py-4 px-5 italic text-white text-[15px] rounded-r-xl"
              style={{ borderLeft: "2px solid var(--green)", background: "rgba(45,232,138,.04)" }}
            >
              "Race conditions and shared-state corruption are architectural problems, not debugging problems."
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
