"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiServer, FiCpu, FiGitBranch, FiTool, FiZap } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { SKILLS, type Skill } from "@/data/skills";

const ICONS = {
  frontend: <FiCode />,
  backend: <FiServer />,
  ai: <FiZap />,
  devops: <FiGitBranch />,
  tools: <FiTool />,
  embedded: <FiCpu />,
};

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
      <SectionHeader
        eyebrow="Skills"
        title={<>A <span className="grad-text">full-stack</span> for the AI era.</>}
        sub="From frontend craft to orchestration internals — organized by domain."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i}>
            <SkillCard skill={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className="skill-card group relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",
        border: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: "radial-gradient(220px circle at var(--mx,50%) var(--my,50%),rgba(45,232,138,.10),transparent 60%)" }}
      />
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="w-9 h-9 rounded-[10px] grid place-items-center" style={{ background: "rgba(45,232,138,.08)", color: skill.color }}>
          {ICONS[skill.icon]}
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: skill.color }}>
          {skill.title}
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
        {skill.items.map((it) => (
          <span key={it} className="chip">{it}</span>
        ))}
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-2 relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: skill.pct / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          style={{
            transformOrigin: "left",
            background: "linear-gradient(90deg,var(--green),var(--cyan),var(--gold))",
            boxShadow: "0 0 10px rgba(45,232,138,.5)",
          }}
          className="h-full rounded-full"
        />
      </div>
      <div className="flex justify-between items-center mt-2.5 font-mono text-[10.5px] text-[var(--muted)] tracking-wider">
        <span>Proficiency</span>
        <span className="text-gold">
          {skill.level} · {skill.pct}%
        </span>
      </div>
    </div>
  );
}
