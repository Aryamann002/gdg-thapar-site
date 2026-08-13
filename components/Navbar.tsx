"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "PROJECTS", href: "#projects", id: "projects", badge: "NEW!" },
  { label: "EVENTS", href: "#events", id: "events" },
  { label: "DEPARTMENTS", href: "#departments", id: "departments" },
  { label: "TEAM", href: "#team", id: "team" },
  { label: "ALUMNI", href: "#alumni", id: "alumni" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section currently nearest the top of the viewport.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl">
      <div
        className={`flex items-center justify-between rounded-2xl border border-ink/80 bg-paper/70 backdrop-blur-xl transition-all duration-300 sm:px-7 ${
          condensed
            ? "px-5 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.14)]"
            : "px-5 py-3 shadow-[0_6px_8px_rgba(0,0,0,0.08)]"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="GDG Thapar"
            width={40}
            height={24}
            className={`w-auto transition-all duration-300 ${condensed ? "h-5" : "h-6"}`}
          />
          <span className={`font-bold transition-all duration-300 ${condensed ? "text-base" : "text-lg"}`}>
            GDG Thapar
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-active={active === link.id}
              className="wipe flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors hover:text-brand-blue data-[active=true]:text-brand-blue"
            >
              {link.label}
              {link.badge && (
                <span className="flex items-center gap-1.5 text-xs font-semibold italic text-brand-red">
                  <Image src="/images/dot-separator.svg" alt="" width={5} height={5} className="size-1" />
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <a
            href="#form"
            className="press rounded-full bg-ink px-6 py-2.5 text-sm font-bold uppercase text-paper transition hover:bg-black"
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
        <nav className="reveal-in mt-2 flex flex-col gap-1 rounded-2xl border border-ink/80 bg-paper p-4 shadow-lg lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium transition hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#form"
            onClick={() => setOpen(false)}
            className="press mt-2 rounded-full bg-ink px-6 py-3 text-center text-sm font-bold uppercase text-paper"
          >
            Form Link
          </a>
        </nav>
      )}
    </header>
  );
}
