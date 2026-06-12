"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const sections = SITE.nav.map((n) => document.getElementById(n.id));
    const onScroll = () => {
      setScrolled(scrollY > 40);
      let cur = "home";
      sections.forEach((s) => {
        if (s && s.getBoundingClientRect().top <= innerHeight * 0.35) cur = s.id;
      });
      setActive(cur);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-[100] w-[min(960px,calc(100%-32px))] flex items-center justify-between gap-6 rounded-full transition-all duration-300",
          "glass shadow-[0_10px_40px_rgba(0,0,0,.45)]",
          scrolled ? "top-2.5 py-1.5 pl-[18px] pr-2.5 bg-black/70" : "top-4 py-2.5 pl-[22px] pr-3.5"
        )}
        style={{
          background: scrolled ? "rgba(8,12,16,.75)" : "rgba(10,14,18,.55)",
        }}
      >
        <Link href="#home" className="flex items-center gap-2 font-heading font-bold text-[15px] tracking-tight">
          <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_12px_var(--green-glow)]" />
          ashik<span className="text-green">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {SITE.nav.map((n) => (
            <Link
              key={n.id}
              href={`#${n.id}`}
              className={cn(
                "relative px-3 py-2 rounded-full text-[13px] font-medium transition-colors",
                active === n.id ? "text-green" : "text-[var(--text-2)] hover:text-white"
              )}
            >
              {active === n.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{
                    background: "rgba(45,232,138,.08)",
                    border: "1px solid rgba(45,232,138,.18)",
                    boxShadow: "inset 0 0 12px rgba(45,232,138,.12)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <IconLink href={SITE.github}   label="GitHub"><FiGithub /></IconLink>
          <IconLink href={SITE.linkedin} label="LinkedIn"><FiLinkedin /></IconLink>
          {/* Twitter icon hidden when no URL provided */}
          {SITE.twitter && (
            <IconLink href={SITE.twitter} label="X / Twitter"><FaXTwitter /></IconLink>
          )}
          <Link
            href={SITE.resume}
            target="_blank"
            className="mag inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[12.5px] font-semibold text-[#06241a] transition-transform hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,var(--green),var(--cyan))", boxShadow: "0 6px 24px rgba(45,232,138,.35)" }}
          >
            <FiDownload size={13} /> Resume
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-white/10 text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-4 top-[72px] z-[99] glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {SITE.nav.map((n) => (
              <Link
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-3.5 py-3 rounded-xl text-sm",
                  active === n.id ? "text-green bg-green/5" : "text-[var(--text-2)] hover:bg-white/5"
                )}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href={SITE.resume}
              target="_blank"
              className="px-3.5 py-3 rounded-xl text-sm font-semibold text-green"
            >
              Download Résumé →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="w-9 h-9 grid place-items-center rounded-full border border-white/[.06] text-[var(--text-2)] hover:text-green hover:border-green/40 hover:shadow-[0_0_16px_rgba(45,232,138,.25)] transition-all"
    >
      {children}
    </Link>
  );
}