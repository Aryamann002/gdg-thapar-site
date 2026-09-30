import Image from "next/image";

const pills = [
  { label: "No new events", className: "bg-brand-purple" },
  { label: "Recruitment", className: "bg-brand-red-2" },
  { label: "Notice Board", className: "bg-brand-yellow-2" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-28 pb-20 text-center sm:pt-32">
      <Image
        src="/images/doodle-vector.svg"
        alt=""
        aria-hidden
        width={220}
        height={220}
        className="pointer-events-none absolute -left-10 top-16 hidden w-40 rotate-[-30deg] opacity-80 lg:block"
      />
      <Image
        src="/images/doodle-2.svg"
        alt=""
        aria-hidden
        width={260}
        height={260}
        className="pointer-events-none absolute -right-8 top-20 hidden w-52 rotate-[20deg] opacity-80 lg:block"
      />

      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium tracking-wide text-ink/70">
          Google Developer Groups Thapar University
        </p>
        <h1 className="mt-3 text-[13vw] font-extrabold uppercase leading-[0.95] tracking-tight [text-shadow:4px_4px_0_rgba(0,0,0,0.15)] sm:text-6xl md:text-7xl">
          Empower your future with innovation
        </h1>

        <a
          href="#events"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-paper bg-ink px-8 py-3 text-sm font-bold uppercase text-paper shadow-[0_4px_0_0_var(--paper)]"
        >
          Learn more
          <Image src="/images/arrow-cta.svg" alt="" width={14} height={14} />
        </a>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 opacity-90 drop-shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
          {pills.map((pill) => (
            <span
              key={pill.label}
              className={`rounded-full border-2 border-ink px-6 py-2 text-sm font-bold text-paper ${pill.className}`}
            >
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
