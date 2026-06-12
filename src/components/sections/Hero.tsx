"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiArrowRight, FiCheck, FiStar, FiGitBranch } from "react-icons/fi";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative min-h-[100vh] flex items-center pt-36 pb-20 px-6 max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-[1.2fr_0.9fr] gap-16 items-center w-full">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Python Developer · AI Automation · EEE @ VVIT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-[clamp(36px,5.5vw,68px)] font-bold leading-[1.04] tracking-[-0.03em] mb-5"
          >
            Building{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg,var(--green) 0%,var(--cyan) 60%,var(--gold) 100%)" }}
            >
              Intelligent
            </span>{" "}
            Automation Systems
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono text-[clamp(14px,1.4vw,17px)] text-[var(--text-2)] mb-5 min-h-[1.5em]"
          >
            <span className="text-[var(--muted)]">$ role —</span>{" "}
            <TypeAnimation
              sequence={SITE.typeWords.flatMap((w) => [w, 1500])}
              wrapper="span"
              speed={50}
              className="text-green font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[var(--text-2)] text-[16.5px] max-w-[560px] leading-relaxed mb-9"
          >
            {SITE.subtagline} I design voice automation pipelines, sensor-driven fault detection engines,
            and applied GenAI toolchains — bridging EEE fundamentals with intelligent software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex flex-wrap gap-3.5 mb-10"
          >
            <MagneticButton href="#projects" variant="primary">
              <FiArrowRight /> Explore Work
            </MagneticButton>
            <MagneticButton href={SITE.resume} target="_blank" variant="ghost">
              <FiArrowDown /> Download Résumé
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex gap-9"
          >
            {[
              ["2+", "Systems shipped"],
              ["4",  "AI certifications"],
              ["3+", "Years building"],
            ].map(([v, l]) => (
              <div key={l} className="flex flex-col gap-1">
                <span className="font-heading font-bold text-2xl text-green flex items-baseline gap-0.5">
                  {v}
                </span>
                <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative justify-self-center w-[min(380px,100%)] aspect-square grid place-items-center isolate"
          aria-hidden
        >
          <div
            className="absolute inset-0 rounded-full opacity-55 animate-[spin_14s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg,var(--green),var(--cyan),var(--gold),var(--green))",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute inset-[10%] rounded-full border animate-float"
            style={{
              borderColor: "rgba(45,232,138,.5)",
              background:
                "radial-gradient(circle at 30% 30%,rgba(45,232,138,.06),transparent 70%),linear-gradient(135deg,rgba(45,232,138,.08),rgba(232,181,71,.06))",
              boxShadow: "inset 0 0 40px rgba(45,232,138,.18),0 30px 80px -20px rgba(45,232,138,.4)",
            }}
          >
            <div
              className="absolute inset-[8px] rounded-full border border-dashed animate-spin-slow"
              style={{ borderColor: "rgba(232,181,71,.35)", animationDirection: "reverse" }}
            />
            <div
              className="relative w-[62%] aspect-square rounded-full grid place-items-center border border-white/10 overflow-hidden m-auto mt-[19%]"
              style={{ background: "radial-gradient(circle at 30% 30%,#1a2229,#070b0e)" }}
            >
              <span
                className="font-heading font-bold text-[64px] tracking-tighter bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg,#fff,var(--green) 60%,var(--gold))" }}
              >
                A
              </span>
            </div>
          </div>

          <FloatingBadge style={{ top: "4%", left: "-4%" }} icon={<FiCheck size={10} />} tone="green">
            Available for work
          </FloatingBadge>
          <FloatingBadge style={{ bottom: "8%", right: "-6%" }} icon={<FiStar size={10} />} tone="gold">
            NSDC Grade A
          </FloatingBadge>
          <FloatingBadge style={{ top: "60%", left: "-10%" }} icon={<FiGitBranch size={10} />} tone="cyan">
            Open source
          </FloatingBadge>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-5 flex-col items-center gap-1.5 text-[var(--text-2)] font-mono text-[10.5px] tracking-[0.14em] opacity-70">
        <div className="relative w-[22px] h-9 border border-white/20 rounded-[14px]">
          <span
            className="absolute top-1.5 left-1/2 w-[3px] h-1.5 rounded-sm bg-green -translate-x-1/2"
            style={{ animation: "wheel 1.6s ease-in-out infinite", boxShadow: "0 0 8px var(--green-glow)" }}
          />
        </div>
        SCROLL
        <style>{`@keyframes wheel{0%{opacity:0;transform:translate(-50%,0)}50%{opacity:1}100%{opacity:0;transform:translate(-50%,14px)}}`}</style>
      </div>
    </section>
  );
}

function FloatingBadge({
  children,
  icon,
  tone,
  style,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  tone: "green" | "gold" | "cyan";
  style?: React.CSSProperties;
}) {
  const bg = tone === "green" ? "var(--green)" : tone === "gold" ? "var(--gold)" : "var(--cyan)";
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute flex items-center gap-2 px-3.5 py-2 rounded-full font-mono text-[11px] tracking-wider glass shadow-lg2 text-[var(--text-2)]"
      style={style}
    >
      <span
        className="w-[18px] h-[18px] rounded-full grid place-items-center text-[var(--bg-0)]"
        style={{ background: bg }}
      >
        {icon}
      </span>
      {children}
    </motion.div>
  );
}