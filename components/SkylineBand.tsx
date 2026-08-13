"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

// Bar heights as a fraction of the band, read off the Figma skyline (node 1:391).
const bars = [
  0.33, 0.56, 0.65, 0.82, 0.45, 0.63, 0.33, 0.55, 0.51, 0.34, 0.17, 0.66, 0.39, 0.43, 0.24, 0.34,
  0.75, 0.61, 0.18, 0.52, 0.65, 0.45,
];

const stickers = [
  { src: "/images/sticker-1.png", left: "26%", size: 54, tilt: "-8deg" },
  { src: "/images/sticker-6.png", left: "33%", size: 62, tilt: "6deg" },
  { src: "/images/sticker-4.png", left: "41%", size: 44, tilt: "-14deg" },
  { src: "/images/sticker-5.png", left: "59%", size: 58, tilt: "10deg" },
  { src: "/images/sticker-2.png", left: "67%", size: 50, tilt: "-6deg" },
  { src: "/images/sticker-3.png", left: "76%", size: 56, tilt: "12deg" },
];

export default function SkylineBand() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.3);

  return (
    <div ref={ref} aria-hidden className="relative mt-8 h-[200px] w-full overflow-hidden">
      {/* stickers float above the skyline */}
      {stickers.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          width={s.size}
          height={s.size}
          className="bob absolute z-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          style={
            {
              left: s.left,
              top: `${18 + (i % 3) * 14}px`,
              width: s.size,
              height: "auto",
              "--tilt": s.tilt,
              "--i": i,
            } as React.CSSProperties
          }
        />
      ))}

      {/* skyline bars */}
      <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-[0.6%] px-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 origin-bottom rounded-t-[20px] border-[5px] border-b-0 border-brand-green-2 ${
              inView ? "bar-in" : "bar"
            }`}
            style={{ height: `${h * 100}%`, "--i": i } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
