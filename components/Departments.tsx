import Image from "next/image";

const departments = [
  { no: "01", name: "AI & ML", icon: "/images/dept-aiml.png" },
  { no: "02", name: "User Interface and Experience", icon: "/images/dept-uiux.png" },
  { no: "03", name: "Marketing", icon: "/images/dept-marketing.png" },
  { no: "04", name: "Design", icon: "/images/dept-design.png" },
  { no: "05", name: "Cybersecurity", icon: "/images/dept-cybersecurity.png" },
  { no: "06", name: "Web Development", icon: "/images/dept-webdev.png" },
  { no: "07", name: "App Development", icon: "/images/dept-appdev.png" },
  { no: "08", name: "Event Coordination", icon: "/images/dept-eventcoord.png" },
  { no: "09", name: "Product Design", icon: "/images/dept-productdesign.png" },
];

export default function Departments() {
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
                <span className="rounded-full bg-ink/80 px-4 py-1.5 text-sm font-bold text-white">Mentor</span>
              </div>
              <div className="bg-[#ffe7a5]/80 p-6">
                <div className="flex flex-col gap-2.5">
                  <span className="w-fit rounded-full bg-ink/80 px-4 py-1.5 text-sm font-bold text-white">
                    About
                  </span>
                  <h3 className="text-2xl font-bold text-ink/80">UI/UX Department</h3>
                  <p className="text-sm text-ink">Brief about the particular department and their learnings.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-ink/20 p-px">
              {["Core", "Core"].map((label, i) => (
                <div key={i} className="flex items-center justify-center gap-2 bg-paper py-4">
                  <Image src="/images/dept-uiux.png" alt="" width={20} height={20} />
                  <span className="text-xs font-medium">UI/UX</span>
                  <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold">{label}</span>
                </div>
              ))}
            </div>
            <p className="border-t border-ink/10 bg-paper px-6 py-4 text-center text-sm text-ink/60">
              Select the department to know more
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
              {departments.map((dept) => (
                <div
                  key={dept.no}
                  className="flex items-center gap-2.5 rounded-xl bg-brand-yellow px-3 py-2.5"
                >
                  <span className="flex shrink-0 items-center justify-center rounded-full bg-brand-yellow p-1.5">
                    <Image src={dept.icon} alt="" width={22} height={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium leading-tight text-ink/70">{dept.no}</p>
                    <p className="truncate text-xs font-medium leading-tight">{dept.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
