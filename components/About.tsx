import Image from "next/image";

const stats = [
  { value: "60+", label: "Members" },
  { value: "8+", label: "Projects" },
  { value: "12+", label: "Departments" },
  { value: "10+", label: "Events" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-20">
      <Image
        src="/images/doodle-1.svg"
        alt=""
        aria-hidden
        width={220}
        height={220}
        className="pointer-events-none absolute right-0 top-4 hidden w-56 opacity-80 lg:block"
      />

      <div className="mx-auto max-w-4xl">
        <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-red [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
          About
        </h2>

        <div className="mt-8 flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={70} height={42} className="h-10 w-auto drop-shadow-[0_4px_0_white]" />
          <h3 className="text-3xl font-bold sm:text-4xl">GDG Thapar</h3>
        </div>

        <div className="mt-6 space-y-4 text-justify text-base leading-relaxed text-ink">
          <p>
            Welcome to the Google Developer Groups (GDG) at Thapar University – a community
            where innovation meets opportunity. We are a student-led organization committed to
            fostering a vibrant tech ecosystem on campus. Our mission is to bridge the gap
            between theoretical knowledge and real-world application, empowering students to
            develop and refine their technical skills.
          </p>
          <p>
            As a part of a global network of GDGs, we focus on practical learning and
            collaborative projects in cutting-edge technologies such as artificial
            intelligence, machine learning, cloud computing, and web development. Our events
            and initiatives are designed to help you grow as a technologist and leader in the
            ever-evolving tech landscape.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center sm:justify-start">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div>
                <p className="text-3xl font-medium">{stat.value}</p>
                <p className="text-sm tracking-wide text-ink/70">{stat.label}</p>
              </div>
              {i < stats.length - 1 && <span className="text-3xl text-ink/30">|</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
