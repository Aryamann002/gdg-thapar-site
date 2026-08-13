"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const confetti = [
  { top: "-6%", left: "-4%", size: 70, tilt: "-18deg", cls: "float-a" },
  { top: "-9%", left: "42%", size: 54, tilt: "12deg", cls: "float-c" },
  { top: "-4%", right: "-3%", size: 64, tilt: "24deg", cls: "float-b" },
  { bottom: "-7%", left: "6%", size: 58, tilt: "8deg", cls: "float-b" },
  { bottom: "-5%", right: "10%", size: 66, tilt: "-14deg", cls: "float-a" },
  { top: "45%", right: "-5%", size: 48, tilt: "32deg", cls: "float-c" },
];

const fields = [
  { name: "firstName", label: "First Name", type: "text", required: true, half: true },
  { name: "lastName", label: "Last Name", type: "text", required: true, half: true },
  { name: "email", label: "Email Address", type: "email", required: true, half: false },
  { name: "phone", label: "Phone Number", type: "tel", required: false, half: false },
] as const;

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    // overflow-x-clip: confetti sits past the card edges by design and must not
    // widen the page. clip (not hidden) avoids creating a scroll container.
    <section className="overflow-x-clip px-6 py-20">
      <Reveal>
        <div className="relative mx-auto max-w-5xl">
          {confetti.map((c, i) => (
            <Image
              key={i}
              src="/images/confetti.png"
              alt=""
              aria-hidden
              width={c.size}
              height={c.size}
              className={`${c.cls} pointer-events-none absolute z-10 hidden h-auto sm:block`}
              style={
                {
                  top: c.top,
                  left: c.left,
                  right: c.right,
                  bottom: c.bottom,
                  width: c.size,
                  "--spin": c.tilt,
                } as React.CSSProperties
              }
            />
          ))}

          <div className="relative grid gap-10 rounded-[2rem] border-[3px] border-ink/70 bg-paper p-8 shadow-[0_6px_2px_rgba(0,0,0,0.25)] md:grid-cols-2 md:items-center md:p-12">
            {sent ? (
              <div className="reveal-in flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold sm:text-4xl">You&apos;re on the list 🎉</h2>
                <p className="text-ink/70">
                  Thanks for signing up. We&apos;ll be in touch before the next event.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="press rounded-full border-2 border-ink px-6 py-2.5 text-sm font-bold uppercase"
                >
                  Sign up another
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  // ponytail: client-only success state — wire to a real list provider when one exists.
                  setSent(true);
                }}
              >
                <h2 className="text-3xl font-bold sm:text-4xl">Sign up to our Newsletter</h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((field) => (
                    <label
                      key={field.name}
                      className={`flex flex-col gap-1.5 text-sm text-ink/70 ${
                        field.half ? "" : "sm:col-span-2"
                      }`}
                    >
                      {field.label}
                      {field.required && <span className="sr-only">(required)</span>}
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="rounded-full bg-white px-4 py-2.5 text-sm text-ink outline-none ring-2 ring-transparent transition focus:ring-brand-blue user-invalid:ring-brand-red"
                      />
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="press flex w-fit items-center gap-2 rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase text-white transition hover:bg-black"
                >
                  Submit
                  <Image src="/images/arrow-right.svg" alt="" width={14} height={14} />
                </button>
              </form>
            )}

            <Image
              src="/images/newsletter-illustration.png"
              alt=""
              width={400}
              height={530}
              className="mx-auto hidden w-full max-w-xs rounded-2xl object-cover md:block"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
