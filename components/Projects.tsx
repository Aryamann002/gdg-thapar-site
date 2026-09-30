import Image from "next/image";

const statuses = [
  { label: "Bit Chat", state: "done" },
  { label: "Google LMS", state: "done" },
  { label: "Quyl", state: "done" },
  { label: "Nexova", state: "done" },
  { label: "Chatbot", state: "done" },
  { label: "Building..", state: "progress" },
  { label: "In progress....", state: "progress" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-green [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col justify-between gap-8 rounded-[2rem] border-4 border-ink bg-brand-green/90 p-8">
            <p className="text-justify text-lg font-medium leading-relaxed text-ink">
              Explore our diverse range of projects that showcase the creativity and technical
              prowess of our members. From groundbreaking apps to innovative solutions, our
              projects highlight the impact of applied technology.
            </p>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[#ccf6c5] px-6 py-2.5 text-lg font-bold">
                Our Projects
              </span>
              <a href="#" className="flex items-center gap-1.5 text-sm font-bold underline">
                See All
                <Image src="/images/arrow-link.svg" alt="" width={14} height={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap content-center items-center justify-center gap-3 rounded-[2rem] border-4 border-ink bg-paper/80 p-8">
            {statuses.map((s) => (
              <span
                key={s.label}
                className={`rounded-full px-5 py-2.5 text-base font-medium ${
                  s.state === "progress" ? "bg-ink/10 text-ink" : "bg-[#ccf6c5] text-ink"
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
