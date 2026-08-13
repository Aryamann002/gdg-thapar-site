import Image from "next/image";

const events = [
  {
    name: "DevFest",
    color: "border-brand-blue-2",
    pill: "bg-brand-blue-2",
    text: true,
  },
  {
    name: "KuildSpace",
    color: "border-brand-green-2",
    pill: "bg-brand-green-2",
    logo: "/images/event-kuildspace.svg",
  },
  {
    name: "beyond the code",
    color: "border-brand-orange",
    pill: "bg-brand-orange",
    logo: "/images/event-beyondthecode.svg",
  },
];

export default function Events() {
  return (
    <section id="events" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl font-extrabold uppercase tracking-tight text-brand-blue [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] sm:text-6xl">
            Events
          </h2>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-bold uppercase tracking-tight underline sm:flex"
          >
            View more →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.name}
              className={`flex flex-col items-center gap-6 rounded-[3rem] border-4 bg-paper p-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${event.color}`}
            >
              <div className="flex h-16 items-center">
                {event.text ? (
                  <p className="text-4xl font-medium tracking-tight text-ink sm:text-5xl">{event.name}</p>
                ) : (
                  <Image src={event.logo!} alt={event.name} width={280} height={60} className="h-10 w-auto sm:h-12" />
                )}
              </div>
              <div className={`flex gap-2 rounded-full p-1.5 shadow-[0_4px_2px_rgba(0,0,0,0.25)] ${event.pill}`}>
                <button className="rounded-full border-2 border-ink px-5 py-2 text-sm font-medium">Info</button>
                <button className="rounded-full border-2 border-ink px-5 py-2 text-sm font-medium">
                  Event Gallery
                </button>
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center justify-center gap-3 rounded-[3rem] border-4 border-dashed border-brand-pink p-8 text-center text-ink/60">
            <p className="text-lg font-semibold">More events coming soon</p>
            <p className="text-sm">Stay tuned for updates on our next event.</p>
          </div>
        </div>

        <a
          href="#"
          className="mt-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-tight underline sm:hidden"
        >
          View more →
        </a>
      </div>
    </section>
  );
}
