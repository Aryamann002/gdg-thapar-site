"use client";

import Image from "next/image";
import { useState } from "react";

const departments = [
  {
    no: "01",
    name: "AI & ML",
    icon: "/images/dept-aiml.png",
    desc: "Diving into machine learning, neural networks, and real-world AI applications.",
  },
  {
    no: "02",
    name: "User Interface and Experience",
    icon: "/images/dept-uiux.png",
    desc: "Crafting intuitive, delightful interfaces backed by solid UX research.",
  },
  {
    no: "03",
    name: "Marketing",
    icon: "/images/dept-marketing.png",
    desc: "Growing GDG Thapar's reach through campaigns, content, and outreach.",
  },
  {
    no: "04",
    name: "Design",
    icon: "/images/dept-design.png",
    desc: "Shaping the visual identity and creative assets across every initiative.",
  },
  {
    no: "05",
    name: "Cybersecurity",
    icon: "/images/dept-cybersecurity.png",
    desc: "Learning to secure systems, from ethical hacking to defensive best practices.",
  },
  {
    no: "06",
    name: "Web Development",
    icon: "/images/dept-webdev.png",
    desc: "Building modern, responsive web experiences with the latest frameworks.",
  },
  {
    no: "07",
    name: "App Development",
    icon: "/images/dept-appdev.png",
    desc: "Creating mobile apps that solve real problems for real users.",
  },
  {
    no: "08",
    name: "Event Coordination",
    icon: "/images/dept-eventcoord.png",
    desc: "Planning and running the events and workshops that bring the community together.",
  },
  {
    no: "09",
    name: "Product Design",
    icon: "/images/dept-productdesign.png",
    desc: "Turning ideas into polished, user-centered digital products.",
  },
];

export default function Departments() {
  const [selected, setSelected] = useState(1);
  const active = departments[selected];

  return (
    <section id="departments" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold uppercase tracking-tight text-brand-yellow [text-shadow:0_6px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
          Departments
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-[2rem] border-4 border-ink bg-paper shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="flex items-end bg-brand-yellow/90 p-4">
                <span className="rounded-full bg-ink/80 px-4 py-1.5 text-sm font-bold text-paper">Mentor</span>
              </div>
              <div className="bg-[#ffe7a5]/80 p-6">
                <div className="flex flex-col gap-2.5">
                  <span className="w-fit rounded-full bg-ink/80 px-4 py-1.5 text-sm font-bold text-paper">
                    About
                  </span>
                  <h3 className="text-2xl font-bold text-ink/80">{active.name}</h3>
                  <p className="text-sm text-ink">{active.desc}</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-ink/20 p-px">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center justify-center gap-2 bg-paper py-4">
                  <Image src={active.icon} alt="" width={20} height={20} />
                  <span className="text-xs font-medium">{active.name}</span>
                  <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold">Core</span>
                </div>
              ))}
            </div>
            <p className="border-t border-ink/10 bg-paper px-6 py-4 text-center text-sm text-ink/60">
              Select a department to know more
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-[2rem] border-2 border-ink bg-paper p-7 shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col items-start gap-3">
              <span className="rounded-xl bg-brand-yellow px-3 py-1.5 text-xs font-bold">Departments</span>
              <p className="text-sm leading-relaxed">
                Welcome to the Google Developer Groups (GDG) at Thapar University – a community
                where innovation meets opportunity. We are a student-led organization committed
                to fostering a vibrant tech ecosystem on campus.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {departments.map((dept, i) => (
                <button
                  key={dept.no}
                  type="button"
                  aria-pressed={selected === i}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition ${
                    selected === i ? "bg-ink text-paper" : "bg-brand-yellow hover:brightness-95"
                  }`}
                >
                  <span
                    className={`flex shrink-0 items-center justify-center rounded-full p-1.5 ${
                      selected === i ? "bg-paper/20" : "bg-brand-yellow"
                    }`}
                  >
                    <Image src={dept.icon} alt="" width={22} height={22} />
                  </span>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-medium leading-tight ${selected === i ? "text-paper/70" : "text-ink/70"}`}>
                      {dept.no}
                    </p>
                    <p className="truncate text-xs font-medium leading-tight">{dept.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
