import Image from "next/image";

const pills = [
  { label: "No new events", className: "bg-brand-purple" },
  { label: "Recruitment", className: "bg-brand-red-2" },
  { label: "Notice Board", className: "bg-brand-yellow-2" },
];

const headline = "Empower your future with innovation".split(" ");

// Colored doodle layers from Figma — the black-only partners are the drop shadows.
const doodles = [
  { src: "/images/doodle-yellow.svg", cls: "float-a", pos: "-left-16 top-10 w-56", spin: "-12deg" },
  { src: "/images/doodle-green.svg", cls: "float-c", pos: "-left-8 top-52 w-44", spin: "8deg" },
  { src: "/images/doodle-coral.svg", cls: "float-b", pos: "-right-10 top-8 w-56", spin: "14deg" },
  { src: "/images/doodle-blue.svg", cls: "float-a", pos: "-right-6 top-56 w-48", spin: "-8deg" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-20 text-center sm:pt-32">
      {doodles.map((d) => (
        <div
          key={d.src}
          aria-hidden
          className={`parallax pointer-events-none absolute hidden lg:block ${d.pos}`}
          style={{ "--drift": "-60px" } as React.CSSProperties}
        >
          <Image
            src={d.src}
            alt=""
            width={250}
            height={240}
            className={`${d.cls} h-auto w-full`}
            style={{ "--spin": d.spin } as React.CSSProperties}
          />
        </div>
      ))}

      <div className="relative mx-auto max-w-4xl">
        <p
          className="text-sm font-medium tracking-wide text-ink/70"
          style={{ animation: "rise .5s ease-out both" }}
        >
          Google Developer Groups Thapar University
        </p>

        <h1 className="mt-3 text-[13vw] font-extrabold uppercase leading-[0.95] tracking-tight [text-shadow:4px_4px_0_rgba(0,0,0,0.15)] sm:text-6xl md:text-7xl">
          {headline.map((word, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                animation: `word-rise .6s cubic-bezier(.34,1.56,.64,1) ${120 + i * 60}ms both`,
              }}
            >
              {word}
              {i < headline.length - 1 && " "}
            </span>
          ))}
        </h1>

        <a
          href="#about"
          className="press mt-8 inline-flex items-center gap-3 rounded-full border border-white bg-ink px-8 py-3 text-sm font-bold uppercase text-white shadow-[0_4px_0_0_white]"
          style={{ animation: "pop-in .5s cubic-bezier(.34,1.56,.64,1) 420ms both" }}
        >
          Learn more
          <Image src="/images/arrow-cta.svg" alt="" width={14} height={14} />
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 drop-shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
          {pills.map((pill, i) => (
            <span
              key={pill.label}
              className={`press cursor-default rounded-full border-2 border-ink px-6 py-2 text-sm font-bold text-paper transition hover:-translate-y-1 ${pill.className}`}
              style={{
                animation: `pop-in .45s cubic-bezier(.34,1.56,.64,1) ${520 + i * 80}ms both`,
              }}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
