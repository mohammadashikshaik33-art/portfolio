"use client";
import { FiMail, FiPhone, FiArrowDown, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";

const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${encodeURIComponent("Hello Ashik — let's connect")}`;

const channels = [
  { href: gmailCompose, label: SITE.email, icon: <FiMail />, ext: true },
  { href: `tel:${SITE.phone}`, label: "+91 63046 46550", icon: <FiPhone /> },
  { href: SITE.github, label: "github.com/shaik-mohammad-ashik", icon: <FaGithub />, ext: true },
  { href: SITE.linkedin, label: "linkedin.com/in/shaik-mohammad-ashik", icon: <FaLinkedin />, ext: true },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative py-24 md:py-32 px-6 max-w-[1200px] mx-auto">
      <Reveal>
        <div
          className="relative p-10 md:p-14 rounded-[24px] overflow-hidden text-center"
          style={{
            background:
              "radial-gradient(circle at 20% 0%,rgba(45,232,138,.10),transparent 60%),linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",
            border: "1px solid rgba(255,255,255,.06)",
          }}
        >
          <div
            className="absolute inset-[-1px] rounded-[24px] opacity-35 pointer-events-none animate-spin-slow"
            style={{
              padding: "1px",
              background:
                "conic-gradient(from 0deg,rgba(45,232,138,.6),rgba(232,181,71,.5),rgba(91,231,255,.5),rgba(45,232,138,.6))",
              WebkitMask: "linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="relative z-10">
            <span className="eyebrow mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" /> Contact
            </span>
            <h2 className="text-3xl md:text-[40px] font-bold mt-3 mb-3">
              Let&apos;s <span className="grad-text">build something</span> intelligent.
            </h2>
            <p className="text-[var(--text-2)] max-w-[520px] mx-auto text-[15px] mb-7">
              Open to AI infrastructure roles, autonomous systems projects, robotics &amp; embedded AI, and collaboration on
              orchestration architecture.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <MagneticButton href={gmailCompose} target="_blank" rel="noopener noreferrer" variant="primary">
                <FiSend /> Get in Touch
              </MagneticButton>
              <MagneticButton href={SITE.resume} target="_blank" rel="noopener noreferrer" variant="gold">
                <FiArrowDown /> Download Résumé
              </MagneticButton>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] text-[var(--text-2)] transition-all hover:text-green hover:-translate-y-0.5 hover:border-green/40 hover:shadow-[0_0_18px_rgba(45,232,138,.18)]"
                  style={{
                    background: "rgba(255,255,255,.03)",
                    border: "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  <span className="text-[14px]">{c.icon}</span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
