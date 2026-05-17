"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiActivity, FiLayers, FiCpu, FiEye, FiGrid, FiShield } from "react-icons/fi";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { PROJECTS, type Project, type Badge } from "@/data/projects";

const ICONS: Record<string, React.ReactNode> = {
  jarvis: <FiGrid size={42} />,
  energy: <FiActivity size={42} />,
  signal: <FiLayers size={42} />,
  nexus: <FiCpu size={42} />,
  sentinel: <FiShield size={42} />,
  atlas: <FiEye size={42} />,
};

const TONES: Record<Badge["tone"], string> = {
  green: "bg-green/10 text-green border-green/20",
  gold: "bg-gold/10 text-gold border-gold/20",
  cyan: "bg-cyan/10 text-cyan border-cyan/20",
  purple: "bg-[#A78BFA]/10 text-[#A78BFA] border-[#A78BFA]/20",
};

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
      <SectionHeader
        eyebrow="Projects"
        title={<>Six systems, <span className="grad-text">one philosophy.</span></>}
        sub="Architecture case studies — built with focus on system design, execution safety, and scalable architecture, not just working code."
      />
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={i % 4}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !inner.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left,
      y = e.clientY - r.top;
    ref.current.style.setProperty("--mx", `${x}px`);
    ref.current.style.setProperty("--my", `${y}px`);
    const rx = ((y - r.height / 2) / r.height) * -6;
    const ry = ((x - r.width / 2) / r.width) * 6;
    inner.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => {
    if (inner.current) inner.current.style.transform = "";
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -2 }}
      className={`proj-card group relative rounded-[20px] p-7 overflow-hidden cursor-pointer transition-all duration-300 ${
        index === 0 ? "border-green/25" : "border-white/[.06]"
      }`}
      style={{
        background: "linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01))",
        border: "1px solid",
        borderColor: index === 0 ? "rgba(45,232,138,.25)" : "rgba(255,255,255,.06)",
      }}
    >
      {/* spotlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[20px]"
        style={{ background: "radial-gradient(360px circle at var(--mx,50%) var(--my,50%),rgba(45,232,138,.14),transparent 60%)" }}
      />
      {/* gradient border on hover */}
      <div
        className="absolute inset-[-1px] rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg,rgba(45,232,138,.5),rgba(232,181,71,.4),transparent 60%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div ref={inner} className="transition-transform duration-150 [transform-style:preserve-3d]">
        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          {/* thumb */}
          <div
            className="relative h-[120px] mb-4 rounded-xl overflow-hidden grid place-items-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%,rgba(45,232,138,.12),transparent 70%),linear-gradient(135deg,#0c1418,#070b0e)",
              border: "1px solid rgba(255,255,255,.05)",
            }}
          >
            <div className="text-green opacity-70" style={{ filter: "drop-shadow(0 4px 16px rgba(45,232,138,.5))" }}>
              {ICONS[project.id]}
            </div>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "linear-gradient(90deg,rgba(45,232,138,.08) 1px,transparent 1px) 0 0/14px 14px,linear-gradient(rgba(45,232,138,.08) 1px,transparent 1px) 0 0/14px 14px",
                maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,#000,transparent)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%,#000,transparent)",
              }}
            />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.badges.map((b) => (
              <span key={b.label} className={`font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase font-medium border ${TONES[b.tone]}`}>
                {b.label}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold tracking-tight mb-2.5">{project.title}</h3>
          <p className="text-[var(--text-2)] text-[14px] leading-[1.65] mb-4">{project.sub}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3.5 border-t border-white/[.06]">
            <a
              href={project.github ?? "#"}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-green hover:text-gold hover:gap-2.5 transition-all"
            >
              {project.github ? <FiGithub /> : null}
              Deep dive <FiArrowRight />
            </a>
            <span className="font-mono text-[11px] text-[var(--muted)]">#{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
