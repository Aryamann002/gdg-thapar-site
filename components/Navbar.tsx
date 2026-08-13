"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "PROJECTS", href: "#projects", badge: "NEW!" },
  { label: "EVENTS", href: "#events" },
  { label: "DEPARTMENTS", href: "#departments" },
  { label: "TEAM", href: "#team" },
  { label: "ALUMNI", href: "#alumni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl">
      <div className="flex items-center justify-between rounded-2xl border border-ink/80 bg-paper/70 px-5 py-3 shadow-[0_6px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-7">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/images/logo.png" alt="GDG Thapar" width={40} height={24} className="h-6 w-auto" />
          <span className="font-bold text-lg">GDG Thapar</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium tracking-wide hover:text-brand-blue"
            >
              {link.label}
              {link.badge && (
                <span className="flex items-center gap-1.5 text-xs font-semibold italic text-brand-red">
                  <span className="size-1 rounded-full bg-ink" />
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="#form"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-bold uppercase text-paper hover:bg-black"
          >
            Form Link
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 rounded-2xl border border-ink/80 bg-paper p-4 shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#form"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-ink px-6 py-3 text-center text-sm font-bold uppercase text-paper"
          >
            Form Link
          </a>
        </nav>
      )}
    </header>
  );
}
