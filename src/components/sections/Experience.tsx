"use client";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { TIMELINE } from "@/data/timeline";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="relative py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
      <SectionHeader
        eyebrow="Experience"
        title={<>The <span className="grad-text">build journey</span>, in milestones.</>}
        sub="From foundations to flagship systems — a timeline of learning, shipping, and architecting."
      />

      <div className="relative">
        <div
          className="absolute left-6 top-2 bottom-2 w-px"
          style={{ background: "linear-gradient(180deg,transparent,rgba(45,232,138,.5),rgba(232,181,71,.4),transparent)" }}
          aria-hidden
        />
        {TIMELINE.map((t, i) => (
          <Reveal key={t.title + i} delay={i % 4}>
            <div className="relative pl-16 pb-9 last:pb-0">
              <div
                className="absolute left-[14px] top-1.5 w-[22px] h-[22px] rounded-full grid place-items-center"
                style={{ background: "radial-gradient(circle,var(--green),transparent 70%)" }}
                aria-hidden
              >
                <span
                  className="block w-2.5 h-2.5 rounded-full bg-green"
                  style={{ boxShadow: "0 0 16px var(--green-glow)" }}
                />
              </div>

              <div
                className="tl-card relative py-5 px-6 rounded-2xl transition-all hover:translate-x-1 hover:border-green/25"
                style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",
                  border: "1px solid rgba(255,255,255,.06)",
                }}
              >
                <div className="font-mono text-[11px] text-gold uppercase tracking-wider mb-1.5">{t.time}</div>
                <div className="text-[17px] font-semibold tracking-tight mb-1">{t.title}</div>
                <div className="font-mono text-[12.5px] text-[var(--text-2)] mb-2.5">{t.org}</div>
                <div className="text-[14px] text-[var(--text-2)] leading-[1.7]">{t.desc}</div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {t.tags.map((x) => (
                    <span key={x} className="chip">{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
