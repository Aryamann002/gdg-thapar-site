"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/lib/useReveal";

/** Counts 0 -> target once scrolled into view, then holds. */
export default function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const { ref, inView } = useReveal<HTMLParagraphElement>(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Reduced motion collapses the ramp to a single frame, so the value still
    // lands on target without setState running in the effect body.
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1200;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      // easeOutCubic
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <p ref={ref} className="text-3xl font-medium tabular-nums sm:text-4xl">
      {value}
      {suffix}
    </p>
  );
}
