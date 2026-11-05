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
  tagline: "\n",
  github: "https://github.com/siddhant3895",
  githubHandle: "siddhant3895",
  // Set to a real address to show it on the contact page. Leave null to hide.
  email: "siddhant3895@gmail.com" as string | null,
};

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type Status =
  "Collaborative" | "Research" | "Concept" | "In progress" | "Experiment" | "Ongoing";
export type Category = "Open source" | "Personal";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  status: Status;
  categories: Category[];
  image?: string;
  visibility?: "Private";
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
    categories: ["Open source"],
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
    categories: ["Personal"],
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
    next: [
      "Add an author-written findings summary to this case study.",
      "Link the code archive directly.",
    ],
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
    categories: ["Personal"],
    image: images.code,
    imageAlt: "Laptop with code on screen (generated placeholder — not a screenshot of PySentinel)",
    role: "Author.",
    overview:
      "A static triage scanner written in Python: it hashes files in chunks with SHA-256, matches them against signatures and checks scripts for suspicious keywords. Built to learn how signature-based detection actually works end to end.",
    contribution: ["Whole tool: the hashing pipeline, signature matching and keyword checks."],
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
    links: [{ label: "Repository", href: "https://github.com/siddhant3895/py-sentinel-scanner" }],
  },
  {
    slug: "chess-tactical-analytics",
    title: "Chess Tactical Analytics",
    summary:
      "A Python pipeline that reads PGN games and analyses bot match outcomes. Still unfinished.",
    year: "2026",
    status: "In progress",
    categories: ["Personal"],
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
    next: [
      "Finish the visualiser and add example output.",
      "Document which analyses are meaningful.",
    ],
    links: [
      {
        label: "Repository",
        href: "https://github.com/siddhant3895/chess-tactical-analytics",
      },
    ],
  },
  {
    slug: "hallofcodes",
    title: "Hall of Codes",
    summary: "Collaborative open-source contributions to the projects showcase and timeline.",
    year: "2026",
    status: "Collaborative",
    categories: ["Open source"],
    imageAlt: "",
    role: "Open-source contributor, not the sole creator.",
    overview:
      "Contributed to the Hall of Codes community website. My merged pull request #47 redesigned the projects showcase and section UI; the wider website is collaborative work.",
    contribution: [
      "Replaced GitHub API calls with a static catalog of six curated non-fork repositories.",
      "Added a responsive vertical timeline with cover banners and author credits.",
      "Updated project data, the projects page and card/timeline components in merged PR #47.",
    ],
    stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    decisions: ["Used a curated static project catalog instead of GitHub API calls."],
    challenges: [TBA],
    limitations: [
      "Contribution covers the projects showcase, not authorship of the whole website.",
    ],
    next: [TBA],
    links: [
      { label: "Repository", href: "https://github.com/hallofcodes/hallofcodes" },
      { label: "Projects showcase", href: "https://www.hallofcodes.org/projects" },
      { label: "My pull request", href: "https://github.com/hallofcodes/hallofcodes/pull/47" },
    ],
  },
  {
    slug: "socket-peek",
    title: "socket-peek",
    summary: "An ongoing, private personal project for auditing the hosts contacted by a command.",
    year: "",
    status: "Ongoing",
    visibility: "Private",
    categories: ["Personal"],
    imageAlt: "",
    role: "Personal project.",
    overview:
      "A lightweight, cross-platform supply-chain network auditor. It runs a command behind a logging HTTP/HTTPS proxy and reports the hosts contacted. The repository is private; this description is based on my project notes.",
    contribution: ["Personal project in ongoing development. Public source is not available."],
    stack: ["Python 3.9+", "Rich"],
    decisions: [
      "No TLS interception: HTTPS connections use a blind tunnel without decrypting payloads or installing a certificate authority.",
    ],
    challenges: [TBA],
    limitations: [
      "Only observes HTTP/HTTPS traffic from commands that honour proxy settings.",
      "Reports hosts, not HTTPS URLs or payloads.",
      "A known host is not proof of package integrity.",
    ],
    next: [TBA],
    links: [],
  },
  {
    slug: "cadance",
    title: "Cadance",
    summary: "An ongoing personal project. The repository is currently private.",
    year: "",
    status: "Ongoing",
    visibility: "Private",
    categories: ["Personal"],
    imageAlt: "",
    role: "Personal project.",
    overview: "An ongoing private personal project. Further details will be shared when ready.",
    contribution: [TBA],
    stack: [TBA],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["The repository and project details are not public yet."],
    next: [TBA],
    links: [],
  },
];
