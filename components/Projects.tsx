import Image from "next/image";
import Reveal from "@/components/Reveal";

const statuses = [
  { label: "Bit Chat", state: "done", tilt: "-3deg" },
  { label: "Google LMS", state: "done", tilt: "2deg" },
  { label: "Quyl", state: "done", tilt: "-6deg" },
  { label: "Nexova", state: "done", tilt: "5deg" },
  { label: "Chatbot", state: "done", tilt: "-2deg" },
  { label: "Building..", state: "progress", tilt: "3deg" },
  { label: "In progress....", state: "progress", tilt: "-4deg" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-green [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <div className="lift flex h-full flex-col justify-between gap-8 rounded-[2rem] border-4 border-ink bg-brand-green/90 p-8 hover:shadow-[0_12px_20px_rgba(0,0,0,0.2)]">
              <p className="text-justify text-lg font-medium leading-relaxed">
                Explore our diverse range of projects that showcase the creativity and technical
                prowess of our members. From groundbreaking apps to innovative solutions, our
                projects highlight the impact of applied technology.
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-[#ccf6c5] px-6 py-2.5 text-lg font-bold">
                  Our Projects
                </span>
                <a href="#projects" className="group flex flex-col items-end gap-1 text-sm font-bold">
                  <span className="flex items-center gap-1.5">
                    See All
                    <Image
                      src="/images/arrow-link.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                  <Image src="/images/link-underline.svg" alt="" width={110} height={2} className="w-full" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex h-full flex-wrap content-center items-center justify-center gap-3 rounded-[2rem] border-4 border-ink bg-paper/80 p-8">
              {statuses.map((s, i) => (
                <span
                  key={s.label}
                  className={`pill-wobble cursor-default rounded-full px-5 py-2.5 text-base font-medium ${
                    s.state === "progress" ? "bg-black/10" : "bg-[#ccf6c5]"
                  }`}
                  style={
                    {
                      "--tilt": s.tilt,
                      "--dur": `${5 + (i % 3)}s`,
                      "--i": i,
                    } as React.CSSProperties
                  }
                >
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
