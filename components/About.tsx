import Image from "next/image";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const stats = [
  { target: 60, label: "Members" },
  { target: 8, label: "Projects" },
  { target: 12, label: "Departments" },
  { target: 10, label: "Events" },
];

/** The 4-blade pinwheel clusters from the Figma illustration — pure CSS, no assets. */
function Pinwheel({ color, angles, className }: { color: string; angles: number[]; className: string }) {
  return (
    <div className={`absolute ${className}`} aria-hidden>
      {angles.map((angle, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 block h-[130px] w-[58px] rounded-full border-[3px] border-white"
          style={{
            backgroundColor: color,
            transform: `translate(-50%,-50%) rotate(${angle}deg) translateY(-34px)`,
          }}
        />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <Reveal>
            <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-red [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
              About
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={70}
                height={42}
                className="h-10 w-auto drop-shadow-[0_4px_0_white]"
              />
              <h3 className="text-3xl font-bold sm:text-4xl">GDG Thapar</h3>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-6 space-y-4 text-justify text-base leading-relaxed">
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
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-6 text-center sm:justify-start">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-24">
                    <Counter target={stat.target} />
                    <p className="text-sm tracking-wide text-ink/70">{stat.label}</p>
                  </div>
                  {i < stats.length - 1 && <span className="text-3xl text-ink/25">|</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Illustration cluster — desktop only, decorative. */}
        <div aria-hidden className="relative hidden h-[460px] lg:block">
          <Pinwheel color="#4285f4" angles={[30, 104, 210, 284]} className="left-[8%] top-[42%] size-40" />
          <Pinwheel color="#ef4b4b" angles={[65, 139, 245, 319]} className="left-[52%] top-[18%] size-40" />

          <Image
            src="/images/deco-hash.svg"
            alt=""
            width={43}
            height={49}
            className="float-b absolute left-[38%] top-[4%] w-10"
            style={{ "--spin": "-7deg" } as React.CSSProperties}
          />
          <Image
            src="/images/deco-star.svg"
            alt=""
            width={50}
            height={50}
            className="float-c absolute right-[6%] bottom-[10%] w-12"
            style={{ "--spin": "-12deg" } as React.CSSProperties}
          />
          <Image
            src="/images/deco-globe.png"
            alt=""
            width={54}
            height={54}
            className="float-a absolute right-[22%] top-[54%] w-12 rounded-full"
          />
          <Image
            src="/images/deco-vec-a.svg"
            alt=""
            width={56}
            height={47}
            className="float-c absolute left-[16%] top-[28%] w-14"
          />
          <Image
            src="/images/deco-vec-c.svg"
            alt=""
            width={61}
            height={67}
            className="float-b absolute left-[44%] bottom-[4%] w-14"
            style={{ "--spin": "14deg" } as React.CSSProperties}
          />
          <Image
            src="/images/deco-vec-e.svg"
            alt=""
            width={75}
            height={74}
            className="float-a absolute right-[4%] top-[2%] w-16"
            style={{ "--spin": "25deg" } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}
