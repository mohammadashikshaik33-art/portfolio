"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentProps<typeof motion.a> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "gold";
  strength?: number;
  className?: string;
};

export default function MagneticButton({
  children,
  variant = "primary",
  strength = 0.3,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles: Record<string, string> = {
    primary:
      "text-[#06241a] [background:linear-gradient(135deg,var(--green),var(--cyan))] shadow-[0_12px_36px_-10px_rgba(45,232,138,.6),inset_0_0_0_1px_rgba(255,255,255,.15)] hover:shadow-[0_20px_50px_-10px_rgba(45,232,138,.65)]",
    ghost:
      "text-[var(--text)] border border-white/10 bg-white/[.02] backdrop-blur-sm hover:border-[rgba(45,232,138,.5)] hover:text-[var(--green)] hover:shadow-[0_0_24px_rgba(45,232,138,.18)]",
    gold:
      "text-[#1a1306] [background:linear-gradient(135deg,var(--gold),var(--gold-2))] shadow-[0_12px_36px_-10px_rgba(232,181,71,.55)] hover:shadow-[0_20px_50px_-10px_rgba(232,181,71,.6)]",
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "mag relative inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight overflow-hidden transition-[box-shadow,transform] duration-200",
        styles[variant],
        className
      )}
      {...rest}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-[120%] hover:translate-x-[120%] transition-transform duration-700"
        style={{ background: "linear-gradient(120deg,transparent 30%,rgba(255,255,255,.4) 50%,transparent 70%)" }}
      />
      {children}
    </motion.a>
  );
}
