export type GdgEvent = {
  id: string;
  name: string;
  /** Wordmark asset; when absent the name renders as styled text in brackets. */
  logo?: string;
  accent: string;
  border: string;
  connector: string;
  when: string;
  blurb: string;
  facts: string[];
  gallery: string[];
};

// Placeholder copy — swap in real dates, stats and gallery images here.
export const events: GdgEvent[] = [
  {
    id: "devfest",
    name: "DevFest",
    logo: "/images/devfest.png",
    accent: "#4882fb",
    border: "border-brand-blue-2",
    connector: "/images/line-a.svg",
    when: "November 2024",
    blurb:
      "Our flagship annual developer festival — a full day of talks, workshops and demos spanning Android, web, cloud and AI, run with the wider Google Developer Groups community.",
    facts: ["300+ attendees", "8 speaker sessions", "4 hands-on workshops"],
    gallery: ["/images/sticker-1.png", "/images/sticker-3.png", "/images/sticker-6.png"],
  },
  {
    id: "kuildspace",
    name: "KuildSpace",
    logo: "/images/event-kuildspace.svg",
    accent: "#34a851",
    border: "border-brand-green-2",
    connector: "/images/line-b.svg",
    when: "March 2025",
    blurb:
      "A build-first sprint where teams take an idea from blank repo to working prototype across a single weekend, with mentors on hand throughout.",
    facts: ["36-hour build sprint", "22 teams shipped", "Mentor-led tracks"],
    gallery: ["/images/sticker-2.png", "/images/sticker-4.png", "/images/sticker-5.png"],
  },
  {
    id: "beyondthecode",
    name: "beyond the code",
    logo: "/images/event-beyondthecode.svg",
    accent: "#f46932",
    border: "border-brand-orange",
    connector: "/images/line-c.svg",
    when: "September 2024",
    blurb:
      "A speaker series on everything engineering school leaves out — product thinking, design sense, communication and building a career in tech.",
    facts: ["6 industry speakers", "Open Q&A format", "Career clinic"],
    gallery: ["/images/sticker-6.png", "/images/sticker-1.png", "/images/sticker-4.png"],
  },
];
