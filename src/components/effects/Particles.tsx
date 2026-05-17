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
    () =>
      ({
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: reduced ? 0 : 60, density: { enable: true, area: 900 } },
          color: { value: ["#2DE88A", "#5BE7FF", "#E8B547"] },
          opacity: { value: { min: 0.2, max: 0.7 } },
          size: { value: { min: 0.6, max: 2.2 } },
          move: { enable: true, speed: 0.4, outModes: { default: "bounce" } },
          links: { enable: true, distance: 130, color: "#5BE7FF", opacity: 0.2, width: 0.6 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 80, duration: 0.4 } },
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
