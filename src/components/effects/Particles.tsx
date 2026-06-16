"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function ParticlesBg() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    initParticlesEngine(async (engine) => loadSlim(engine)).then(() => setReady(true));
  }, []);

  const options = useMemo(
  () => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,

    particles: {
      number: {
        value: reduced ? 0 : 90,
        density: { enable: true, area: 800 },
      },

      color: {
        value: ["#00ff9d", "#00d4ff", "#a855f7"],
      },

      opacity: {
        value: 0.8,
      },

      size: {
        value: { min: 1, max: 2.8 },
      },

      move: {
        enable: true,
        speed: 0.7,
        outModes: { default: "bounce" },
      },

      links: {
        enable: true,
        distance: 140,
        color: "#00ff9d",
        opacity: 0.6,
        width: 1.2,
      },

      shadow: {
        enable: true,
        color: "#00ff9d",
        blur: 5,
      },
    },

    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: {
          distance: 160,
          links: { opacity: 0.8 },
        },
      },
    },

    detectRetina: true,
  }) as const,
  [reduced]
);

  if (!ready) return null;
  return (
    <Particles
      id="tsparticles"
      // @ts-expect-error tsparticles options type compatibility
      options={options}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
