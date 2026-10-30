/**
 * Central content for the portfolio. Edit everything here.
 *
 * Project facts here are checked against public sources (GitHub repositories, the live
 * WISP site, the Zenodo record). Collaborative work is credited as collaborative work.
 * Images marked "placeholder" in their alt text are generated visuals, not original work.
 */
import { images } from "./images";

export const site = {
  name: "",
  wordmark: "",
  tagline:
    "Developer exploring software, open source, computational research, and visual art.",
  github: "https://github.com/siddhant3895",
  githubHandle: "siddhant3895",
  // Set to a real address to show it on the contact page. Leave null to hide.
  email: null as string | null,
};

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/now", label: "Now" },
  { to: "/contact", label: "Contact" },
] as const;

export type Status = "Collaborative" | "Research" | "Concept" | "In progress" | "Experiment";
export type Category = "Open source" | "Research" | "Web" | "Security" | "AI" | "Games";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  status: Status;
  categories: Category[];
  image: string;
  imageAlt: string;
  role: string;
  overview: string;
  contribution: string[];
  stack: string[];
  decisions: string[];
  challenges: string[];
  limitations: string[];
  next: string[];
  links: { label: string; href: string }[];
};

const TBA = "Details to be added.";

export const projects: Project[] = [
  {
    slug: "widsp",
    title: "WIDSP",
    summary:
      "Frontend contributions to a collaborative, open-source infectious-disease surveillance platform.",
    year: "2026",
    status: "Collaborative",
    categories: ["Open source", "Web"],
    image: images.wispMap,
    imageAlt:
      "Global outbreak map on the live WISP site, with disease and time-window filter controls (real screenshot)",
    role: "Open-source contributor (one of several collaborators).",
    overview:
      "The Worldwide Infectious Disease Surveillance Platform is maintained under the hallofcodes organisation. It aggregates official outbreak reports and presents them on a filterable world map. This is team work — I did not build the platform; I contributed frontend changes that were merged upstream.",
    contribution: [
      "Header and branding refinements, including removing the hero call-to-action.",
      "Map and filter layout refinements on the overview screen.",
      "Map interaction behaviour: hover tooltip and camera bounds handling.",
      "Merged upstream as pull request #1.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MapLibre GL",
      "Prisma + PostgreSQL",
      "Zod",
    ],
    decisions: [
      "Contributed through a pull request to the upstream repository rather than a separate fork.",
      TBA,
    ],
    challenges: [TBA],
    limitations: [
      "Covers frontend UI areas only — not the data pipeline, backend or modelling.",
      "Not a solo project: other collaborators built the platform itself.",
    ],
    next: ["Add before/after screenshots of the specific UI changes contributed."],
    links: [
      { label: "Repository", href: "https://github.com/hallofcodes/wisp" },
      { label: "Live site", href: "https://wisp.hallofcodes.org" },
      { label: "My pull request", href: "https://github.com/hallofcodes/wisp/pull/1" },
    ],
  },
  {
    slug: "tesla-oscillator",
    title: "Tesla Oscillator Study",
    summary:
      "A MATLAB computational investigation into mechanical resonance, published as a preprint on Zenodo.",
    year: "2026",
    status: "Research",
    categories: ["Research"],
    image: images.resonanceCurve,
    imageAlt:
      "Resonance curve from the study: amplitude in metres against driving frequency in radians per second, peaking at 20 rad/s",
    role: "Sole author.",
    overview:
      "“When Tesla's Oscillator Meets Modern Science: A Computational Investigation into Mechanical Resonance” models a forced damped harmonic system in MATLAB to test whether Tesla's mechanical oscillator could reach the destructive amplitudes described in historical accounts. Published on Zenodo under CC BY 4.0; a preprint, not peer reviewed.",
    contribution: [
      "Research framing, historical background and writing.",
      "MATLAB simulation of a forced damped harmonic system.",
      "Figures and analysis published with the paper.",
    ],
    stack: ["MATLAB", "LaTeX"],
    decisions: [
      "Modelled the oscillator as a forced damped harmonic system so amplitude could be compared against historical claims.",
      "Published the paper together with the code archive so the simulation can be re-run.",
    ],
    challenges: [TBA],
    limitations: [
      "Simulation-based; no physical experimental validation is claimed.",
      "Preprint — not peer reviewed.",
      "Results depend on the assumed mass, damping and driving parameters.",
    ],
    next: ["Add an author-written findings summary to the research page.", "Link the code archive directly."],
    links: [
      { label: "Paper (Zenodo)", href: "https://zenodo.org/records/18348210" },
      { label: "DOI", href: "https://doi.org/10.5281/zenodo.18348210" },
      {
        label: "Repository",
        href: "https://github.com/siddhant3895/physics-resonance-simulation",
      },
    ],
  },
  {
    slug: "py-sentinel-scanner",
    title: "PySentinel",
    summary:
      "A Python command-line tool that flags suspicious scripts through hashing, signature matching and keyword checks.",
    year: "2026",
    status: "In progress",
    categories: ["Security"],
    image: images.code,
    imageAlt: "Laptop with code on screen (generated placeholder — not a screenshot of PySentinel)",
    role: "Author.",
    overview:
      "A static triage scanner written in Python: it hashes files in chunks with SHA-256, matches them against signatures and checks scripts for suspicious keywords. Built to learn how signature-based detection actually works end to end.",
    contribution: [
      "Whole tool: the hashing pipeline, signature matching and keyword checks.",
    ],
    stack: ["Python", "Standard library only (hashlib, os)"],
    decisions: [
      "Standard library only, so the scanner runs with no third-party dependencies installed.",
    ],
    challenges: [TBA],
    limitations: [
      "Signature and keyword checks catch known patterns only — not a validated detection engine.",
      "Intended for learning and authorised testing only.",
    ],
    next: ["Record a real terminal capture for this page.", "Document usage and add sample files."],
    links: [
      { label: "Repository", href: "https://github.com/siddhant3895/py-sentinel-scanner" },
    ],
  },
  {
    slug: "chess-tactical-analytics",
    title: "Chess Tactical Analytics",
    summary:
      "A Python pipeline that reads PGN games and analyses bot match outcomes. Still unfinished.",
    year: "2026",
    status: "In progress",
    categories: ["Games"],
    image: images.chess,
    imageAlt:
      "Chess pieces in dramatic light (generated placeholder — not output from this project)",
    role: "Author.",
    overview:
      "An analysis project that ingests PGN game files and reports how bot matches played out, using python-chess for parsing and pandas for aggregation. The charting step is still a TODO in the source, so this is a work in progress rather than a finished product.",
    contribution: [
      "PGN parsing, analysis and orchestration code.",
      "Chart visualiser left incomplete — the plotting function is still a TODO.",
    ],
    stack: ["Python", "python-chess", "pandas", "matplotlib", "seaborn"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: [
      "Visualiser is unfinished: the plotting function returns no chart yet.",
      "No published demo or dataset.",
    ],
    next: ["Finish the visualiser and add example output.", "Document which analyses are meaningful."],
    links: [
      {
        label: "Repository",
        href: "https://github.com/siddhant3895/chess-tactical-analytics",
      },
    ],
  },
];

export const research = {
  title:
    "When Tesla's Oscillator Meets Modern Science: A Computational Investigation into Mechanical Resonance",
  kind: "Computational research · MATLAB",
  status: "Student research — \npublished on zenodo",
  abstract:
    "This study investigates the scientific validity of Nikola Tesla’s mechanical oscillator — often referred to as the “earthquake machine” — through a computational model of forced mechanical resonance. The hypothesis tested is that, under realistic physical parameters, the resonance amplitudes produced by the oscillator would be significantly lower than the destructive levels described in historical accounts. MATLAB-based simulations of a forced damped harmonic system were used to evaluate how mass, damping, and driving frequency influence vibrational amplitude. Results show that while resonance can amplify motion significantly, structural damping and limited input power prevent destructive amplitudes. This paper combines historical research with quantitative computational analysis to provide a balanced perspective on one of Tesla’s most intriguing inventions.",
  findings:
    "Resonance does amplify motion substantially, but structural damping and limited input power keep the modelled amplitudes below the destructive levels described in historical accounts.",
  paperUrl: "https://zenodo.org/records/18348210",
  doi: "10.5281/zenodo.18348210",
  published: "23 January 2026",
  license: "CC BY 4.0",
  methods: [
    "MATLAB simulation of a forced damped harmonic system",
    "Literature review",
    "Mechanical resonance modelling",
  ],
  figures: [
    {
      src: images.dampingCurve,
      caption: "Damping comparison — amplitude response at different damping levels.",
    },
    {
      src: images.energyVsTime,
      caption: "Energy against time for the modelled oscillator.",
    },
    {
      src: images.timeDomain,
      caption: "Time-domain response of the driven system at resonance.",
    },
  ],
};

export const now = {
  updated: "October 2026",
  focus: [
    "Learning new languages, mastering to code to make a difference,",
    "writing blogs through personal experience and knowledge.",
    "working on my projects and the team.",
  ],
  learning: [
    "Systems and reverse engineering fundamentals",
    "Numerical methods",
    "Type-safe frontend architecture",
  ],
  making: ["Ink creature illustrations", "Manga-inspired studies"],
};
