"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 450, damping: 36, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 450, damping: 36, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      if (!enabled) setEnabled(true);
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = (e.target as HTMLElement | null)?.closest("[data-cursor]");
      const cursorText = target?.getAttribute("data-cursor") || null;
      setLabel(cursorText);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [enabled, rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div
        animate={{
          width: label ? 64 : pressed ? 12 : 16,
          height: label ? 64 : pressed ? 12 : 16,
          backgroundColor: label ? "var(--accent)" : "transparent",
          borderColor: label ? "var(--accent)" : "var(--ink)",
        }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
        className="flex items-center justify-center rounded-full border opacity-85"
      >
        {label && (
          <span className="text-[10px] font-semibold uppercase tracking-widest text-white">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
