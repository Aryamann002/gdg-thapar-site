export type Member = {
  name: string;
  /** Path under /public. null renders an initial-avatar placeholder frame. */
  photo: string | null;
};

export type Department = {
  id: string;
  no: string;
  /** Very short tag shown on the mentor/core photo frames. */
  abbr: string;
  /** Label used in the selector list. */
  short: string;
  /** Full title shown in the detail panel. */
  name: string;
  blurb: string;
  accent: string;
  icon: string;
  mentor: Member;
  core: [Member, Member];
};

// Placeholder content mirrors the Figma copy. Swap in real names, blurbs and
// photo paths here — no component changes needed.
export const departments: Department[] = [
  {
    id: "aiml",
    abbr: "AI & ML",
    no: "01",
    short: "AI & ML",
    name: "AI & ML Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-aiml.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "uiux",
    abbr: "UI/UX",
    no: "02",
    short: "User Interface and Experience",
    name: "UI/UX Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-uiux.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "marketing",
    abbr: "Marketing",
    no: "03",
    short: "Marketing",
    name: "Marketing Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-marketing.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "design",
    abbr: "Design",
    no: "04",
    short: "Design",
    name: "Design Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-design.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "cybersecurity",
    abbr: "Cyber",
    no: "05",
    short: "Cybersecurity",
    name: "Cybersecurity Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-cybersecurity.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "webdev",
    abbr: "Web Dev",
    no: "06",
    short: "Web Development",
    name: "Web Development Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-webdev.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "appdev",
    abbr: "App Dev",
    no: "07",
    short: "App Development",
    name: "App Development Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-appdev.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "events",
    abbr: "Events",
    no: "08",
    short: "Event Coordination",
    name: "Event Coordination Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-eventcoord.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
  {
    id: "product",
    abbr: "Product",
    no: "09",
    short: "Product Design",
    name: "Product Design Department",
    blurb: "Brief about the particular department and their learnings.",
    accent: "#fbbc04",
    icon: "/images/dept-productdesign.png",
    mentor: { name: "TBD", photo: null },
    core: [
      { name: "TBD", photo: null },
      { name: "TBD", photo: null },
    ],
  },
];
