import Image from "next/image";

const columns = [
  {
    heading: "CONTACT US",
    items: ["Email: abcd@gmail.com", "Location: Thapar University, India"],
  },
  { heading: "DEPARTMENTS", href: "#departments" },
  { heading: "EVENTS", href: "#events" },
  { heading: "ALUMNI", href: "#alumni" },
  { heading: "TEAM", href: "#team" },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem] border border-paper/20 bg-ink p-8 text-paper shadow-[0_6px_2px_rgba(0,0,0,0.25)] sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-bracket.png" alt="" width={43} height={20} className="h-5 w-auto" />
            <span className="text-lg font-bold">GDG Thapar</span>
          </div>
          <a
            href="#form"
            className="rounded-full border border-[#505050] bg-[#505050] px-8 py-3.5 text-sm font-semibold uppercase"
          >
            Form Link
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-16">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2.5 text-sm">
              {col.href ? (
                <a href={col.href} className="font-bold">
                  {col.heading}
                </a>
              ) : (
                <p className="font-bold">{col.heading}</p>
              )}
              {col.items?.map((item) => (
                <p key={item} className="text-paper/50">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="text-sm text-paper/50">Developed by GDG Thapar. Copyright GDG Thapar</p>
      </div>
    </footer>
  );
}
