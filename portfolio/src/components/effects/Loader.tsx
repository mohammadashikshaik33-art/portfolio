"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 bg-[var(--bg-0)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight">
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-green"
              style={{ boxShadow: "0 0 24px var(--green-glow)" }}
              animate={{ scale: [1, 0.7, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#E8ECF4,#2DE88A,#E8B547,#E8ECF4)",
                backgroundSize: "300% 100%",
                animation: "shine 2s ease-in-out infinite",
              }}
            >
              ashik.dev
            </span>
          </div>
          <div className="w-60 h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(90deg,var(--green),var(--cyan),var(--gold))",
              }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
