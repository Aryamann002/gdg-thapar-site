"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { events, type GdgEvent } from "@/lib/events";
import Reveal from "@/components/Reveal";

function Wordmark({ event }: { event: GdgEvent }) {
  if (event.id === "devfest") {
    // Figma draws DevFest as text flanked by two bracket vectors, over a faded texture.
    return (
      <div className="relative flex items-center gap-2">
        <Image
          src="/images/bracket-right.svg"
          alt=""
          width={22}
          height={53}
          className="h-11 w-auto -scale-x-100"
        />
        <span className="text-4xl tracking-tight sm:text-5xl">DevFest</span>
        <Image src="/images/bracket-right.svg" alt="" width={22} height={53} className="h-11 w-auto" />
      </div>
    );
  }
  return (
    <Image
      src={event.logo!}
      alt={event.name}
      width={280}
      height={60}
      className="h-10 w-auto sm:h-12"
    />
  );
}

export default function Events() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [gallery, setGallery] = useState<GdgEvent | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (gallery) dialog.showModal();
    else if (dialog.open) dialog.close();
  }, [gallery]);

  return (
    <section id="events" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-blue [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
              Events
            </h2>
            <a
              href="#events"
              className="wipe hidden text-sm font-bold uppercase tracking-tight sm:block"
            >
              View more →
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {events.map((event, i) => {
            const open = openId === event.id;
            return (
              <Reveal key={event.id} delay={i}>
                <div
                  className={`lift flex h-full flex-col items-center gap-5 rounded-[3rem] border-4 bg-paper p-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.18)] ${event.border}`}
                >
                  <div className="flex h-16 items-center">
                    <Wordmark event={event} />
                  </div>

                  <Image
                    src={event.connector}
                    alt=""
                    width={342}
                    height={14}
                    className="h-3 w-full max-w-[280px] opacity-70"
                  />

                  <div
                    className="flex gap-2 rounded-full p-1.5 shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
                    style={{ backgroundColor: event.accent }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : event.id)}
                      aria-expanded={open}
                      aria-controls={`info-${event.id}`}
                      className="press rounded-full border-2 border-ink bg-paper/0 px-5 py-2 text-sm font-medium hover:bg-paper/40"
                    >
                      {open ? "Close" : "Info"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setGallery(event)}
                      className="press rounded-full border-2 border-ink px-5 py-2 text-sm font-medium hover:bg-paper/40"
                    >
                      Event Gallery
                    </button>
                  </div>

                  {open && (
                    <div
                      id={`info-${event.id}`}
                      className="reveal-in w-full rounded-2xl border-2 border-ink/15 bg-ink/[0.03] p-5 text-left"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-ink/60">
                        {event.when}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">{event.blurb}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {event.facts.map((fact) => (
                          <li
                            key={fact}
                            className="rounded-full border border-ink/20 px-3 py-1 text-xs font-medium"
                          >
                            {fact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={3}>
            <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 rounded-[3rem] border-4 border-dashed border-brand-pink p-8 text-center text-ink/60">
              <p className="text-lg font-semibold">More events coming soon</p>
              <p className="text-sm">Stay tuned for updates on our next event.</p>
            </div>
          </Reveal>
        </div>

        <a
          href="#events"
          className="mt-8 flex items-center justify-center text-sm font-bold uppercase tracking-tight underline sm:hidden"
        >
          View more →
        </a>
      </div>

      {/* Native dialog: focus trap, Esc-to-close and backdrop come free. */}
      <dialog
        ref={dialogRef}
        onClose={() => setGallery(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setGallery(null);
        }}
        className="m-auto w-[min(90vw,42rem)] rounded-[2rem] border-4 border-ink bg-paper p-8 backdrop:bg-black/50"
      >
        {gallery && (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">{gallery.name}</h3>
                <p className="text-sm text-ink/60">{gallery.when} — Event Gallery</p>
              </div>
              <button
                type="button"
                onClick={() => setGallery(null)}
                className="press rounded-full bg-ink px-5 py-2 text-sm font-bold text-paper"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {gallery.gallery.map((src, i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-2xl border-2 border-ink/15 bg-ink/[0.03] p-4"
                >
                  <Image src={src} alt="" width={80} height={80} className="h-auto w-3/5" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-ink/50">
              Placeholder gallery — drop real photos into <code>lib/events.ts</code>.
            </p>
          </>
        )}
      </dialog>
    </section>
  );
}
