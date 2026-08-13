"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { departments, type Member } from "@/lib/departments";
import Reveal from "@/components/Reveal";

function PhotoFrame({
  member,
  badge,
  icon,
  abbr,
  className = "",
}: {
  member: Member;
  badge: string;
  icon: string;
  abbr: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[20px] border-[5px] border-[var(--accent)] bg-paper p-3">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 240px"
          />
        ) : null}
        <div className="relative flex items-center gap-1.5">
          <Image src={icon} alt="" width={18} height={18} className="size-4 shrink-0" />
          <span className="truncate text-[11px] font-medium">{abbr}</span>
        </div>
      </div>
      <span className="absolute -bottom-3 left-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-ink shadow-[0_2px_0_rgba(0,0,0,0.2)]">
        {badge}
      </span>
    </div>
  );
}

export default function Departments() {
  const [activeId, setActiveId] = useState(departments[1].id); // UI/UX, as in the design
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = departments.findIndex((d) => d.id === activeId);
  const active = departments[activeIndex];

  function select(index: number) {
    const next = (index + departments.length) % departments.length;
    setActiveId(departments[next].id);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    const keys: Record<string, number> = {
      ArrowRight: activeIndex + 1,
      ArrowDown: activeIndex + 1,
      ArrowLeft: activeIndex - 1,
      ArrowUp: activeIndex - 1,
      Home: 0,
      End: departments.length - 1,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(next);
  }

  return (
    <section id="departments" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-5xl font-extrabold uppercase tracking-tight text-brand-yellow [text-shadow:0_6px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
            Departments
          </h2>
        </Reveal>

        <div
          className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"
          style={{ "--accent": active.accent } as React.CSSProperties}
        >
          {/* ---- detail composition ---- */}
          <Reveal className="min-w-0">
            <div
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              key={active.id}
              className="reveal-in grid h-full gap-x-5 gap-y-8 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)]"
            >
              <PhotoFrame
                member={active.mentor}
                badge="Mentor"
                icon={active.icon}
                abbr={active.abbr}
                className="min-h-[220px] sm:row-span-2"
              />

              <div className="flex flex-col gap-2.5 rounded-[20px] border-2 border-ink bg-[#ffe7a5]/80 p-6">
                <span className="w-fit rounded-full bg-ink/80 px-4 py-1.5 text-xs font-bold text-white">
                  About
                </span>
                <h3 className="text-2xl font-bold text-ink/80 sm:text-3xl">{active.name}</h3>
                <p className="text-sm text-ink">{active.blurb}</p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {active.core.map((member, i) => (
                  <PhotoFrame
                    key={i}
                    member={member}
                    badge="Core"
                    icon={active.icon}
                    abbr={active.abbr}
                    className="min-h-[150px]"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ---- selector ---- */}
          {/* min-w-0: grid items default to min-width:auto, which would let the
              chip scroller push the whole page wider than the viewport. */}
          <Reveal delay={1} className="min-w-0">
            <div className="flex h-full min-w-0 flex-col gap-4 rounded-[2rem] border-2 border-ink bg-paper p-6 shadow-[0_6px_2px_rgba(0,0,0,0.25)]">
              <span className="w-fit rounded-xl bg-brand-yellow px-3 py-1.5 text-xs font-bold">
                Departments
              </span>
              <p className="text-sm leading-relaxed">
                Welcome to the Google Developer Groups (GDG) at Thapar University – a community
                where innovation meets opportunity. We are a student-led organization committed to
                fostering a vibrant tech ecosystem on campus.
              </p>

              <div
                role="tablist"
                aria-label="Departments"
                aria-orientation="vertical"
                onKeyDown={onKeyDown}
                className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0"
              >
                {departments.map((dept, i) => {
                  const selected = dept.id === activeId;
                  return (
                    <button
                      key={dept.id}
                      id={`tab-${dept.id}`}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      aria-controls={`panel-${dept.id}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActiveId(dept.id)}
                      className={`flex shrink-0 snap-start items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:shrink ${
                        selected
                          ? "scale-[1.02] bg-brand-yellow shadow-[0_3px_0_rgba(0,0,0,0.35)]"
                          : "bg-brand-yellow/55 hover:scale-[1.02] hover:bg-brand-yellow"
                      }`}
                    >
                      <span className="flex shrink-0 items-center justify-center rounded-full p-1.5">
                        <Image src={dept.icon} alt="" width={22} height={22} className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-medium leading-tight text-ink/70">
                          {dept.no}
                        </span>
                        <span className="block whitespace-nowrap text-xs font-medium leading-tight sm:whitespace-normal">
                          {dept.short}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-auto text-center text-sm text-ink/60">
                Select the department to know more
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
