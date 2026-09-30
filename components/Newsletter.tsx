import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border-[3px] border-ink/70 bg-paper p-8 shadow-[0_6px_2px_rgba(0,0,0,0.25)] md:grid-cols-2 md:items-center md:p-12">
        <form className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold sm:text-4xl">Sign up to our Newsletter</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm text-ink/70">
              First Name
              <input
                type="text"
                name="firstName"
                required
                className="rounded-full bg-white px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent focus:ring-brand-blue dark:bg-white/10"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-ink/70">
              Last Name
              <input
                type="text"
                name="lastName"
                required
                className="rounded-full bg-white px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent focus:ring-brand-blue dark:bg-white/10"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-sm text-ink/70">
            Email Address
            <input
              type="email"
              name="email"
              required
              className="rounded-full bg-white px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent focus:ring-brand-blue"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm text-ink/70">
            Phone Number
            <input
              type="tel"
              name="phone"
              className="rounded-full bg-white px-4 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent focus:ring-brand-blue"
            />
          </label>

          <button
            type="submit"
            className="flex w-fit items-center gap-2 rounded-full bg-ink px-8 py-3 text-sm font-bold uppercase text-paper hover:bg-black dark:hover:bg-white"
          >
            Submit
            <Image src="/images/arrow-right.svg" alt="" width={14} height={14} />
          </button>
        </form>

        <Image
          src="/images/newsletter-illustration.png"
          alt="Newsletter illustration"
          width={400}
          height={530}
          className="mx-auto hidden w-full max-w-xs rounded-2xl object-cover md:block"
        />
      </div>
    </section>
  );
}
