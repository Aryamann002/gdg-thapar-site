"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type Props = {
  children: ReactNode;
  /** Stagger index — each step delays the animation by 80ms. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ "--i": delay } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
