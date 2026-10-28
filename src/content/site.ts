/**
 * Central content for the portfolio. Edit everything here.
 * Images marked `placeholder: true` are generated sample visuals, NOT original work —
 * replace them by swapping the import in src/content/images.ts.
 */
import { images } from "./images";

export const site = {
  name: "Siddhant",
  wordmark: "S /",
  tagline: "Student developer exploring software, open source, computational research, and visual art.",
  github: "https://github.com/siddhant3895",
  githubHandle: "siddhant3895",
  // Set to a real address to show it on the contact page. Leave null to hide.
  email: null as string | null,
};

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/research", label: "Research" },
  { to: "/visual-lab", label: "Visual Lab" },
  { to: "/writing", label: "Writing" },
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
    summary: "Frontend contributions to a collaborative, open-source infectious-disease surveillance platform.",
    year: "2025",
    status: "Collaborative",
    categories: ["Open source", "Web"],
    image: images.map,
    imageAlt: "Grayscale dotted world map (placeholder visual)",
    role: "Open-source contributor (one of several collaborators).",
    overview:
      "The Worldwide Infectious Disease Surveillance Platform is a collaborative project maintained under the hallofcodes organisation. This is team work — I did not build the platform; I contributed to parts of its frontend.",
    contribution: [
      "Candidate areas: header and branding refinements.",
      "Candidate areas: filter controls.",
      "Candidate areas: map-related UI, hover tooltip and bounds handling.",
      "General frontend refinements. Merge status of each change to be verified and linked.",
    ],
    stack: ["Frontend web stack — to be confirmed from repository"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["Contribution list is unverified; individual PR links will be added once confirmed."],
    next: ["Link specific pull requests.", "Add before/after screenshots of contributed UI."],
    links: [
      { label: "Repository", href: "https://github.com/hallofcodes/worldwide-infectious-disease-surveillance-platform" },
    ],
  },
  {
    slug: "tesla-oscillator",
    title: "Tesla Oscillator Study",
    summary: "A MATLAB computational investigation into mechanical resonance, inspired by Tesla's oscillator.",
    year: "2025",
    status: "Research",
    categories: ["Research"],
    image: images.oscillator,
    imageAlt: "Monochrome macro of a mechanical spring (placeholder visual)",
    role: "Independent author.",
    overview:
      "When Tesla's Oscillator Meets Modern Science: A Computational Investigation into Mechanical Resonance — a student research project using MATLAB simulations to explore resonance behaviour. Not peer reviewed.",
    contribution: ["Research framing and writing.", "MATLAB simulation work."],
    stack: ["MATLAB"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["Simulation-based; no physical experimental validation claimed.", "Not peer reviewed."],
    next: ["Publish the paper and code publicly.", "Add selected figures from simulations."],
    links: [],
  },
  {
    slug: "pulseatlas",
    title: "PulseAtlas",
    summary: "A preventive-health intelligence concept. Early-stage; no medical claims.",
    year: "2026",
    status: "Concept",
    categories: ["Web", "AI"],
    image: images.pulse,
    imageAlt: "Contour lines and a waveform (placeholder visual)",
    role: "Concept and design (solo).",
    overview:
      "A concept for presenting preventive-health signals clearly. Proposed architecture: a TypeScript frontend with Python analytics. It is a concept in progress and makes no claims about medical efficacy.",
    contribution: ["Concept definition.", "Proposed architecture."],
    stack: ["TypeScript (proposed)", "Python (proposed)"],
    decisions: [TBA],
    challenges: ["Handling health data responsibly — approach to be documented."],
    limitations: ["Not a medical device; not clinically validated.", "No working build published yet."],
    next: ["Prototype the frontend.", "Document data sources and privacy approach."],
    links: [],
  },
  {
    slug: "py-sentinel-scanner",
    title: "py-sentinel-scanner",
    summary: "A Python security-tooling project. Feature set being documented.",
    year: "2025",
    status: "In progress",
    categories: ["Security"],
    image: images.code,
    imageAlt: "Laptop with code on screen (placeholder visual)",
    role: "Author.",
    overview: "A Python project in the security-tooling space. Specific features have not yet been verified for this page and will be listed once documented.",
    contribution: [TBA],
    stack: ["Python"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["Intended for learning and authorised testing only."],
    next: ["Document features and usage.", "Link repository."],
    links: [],
  },
  {
    slug: "gpt-cloud-chatbot",
    title: "GPT Cloud Chatbot",
    summary: "An experiment pairing a React frontend with a Python/FastAPI backend.",
    year: "2025",
    status: "Experiment",
    categories: ["AI", "Web"],
    image: images.code,
    imageAlt: "Laptop with code on screen (placeholder visual)",
    role: "Author.",
    overview: "A learning experiment: React frontend talking to a FastAPI backend that proxies a language model. Current deployment status is not claimed.",
    contribution: ["Frontend and backend scaffolding."],
    stack: ["React", "Python", "FastAPI"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["Not currently presented as a live deployment."],
    next: ["Write up architecture.", "Link repository."],
    links: [],
  },
  {
    slug: "stockfish-experiment",
    title: "Stockfish Experiment",
    summary: "A chess AI experiment built around the existing open-source Stockfish engine.",
    year: "2025",
    status: "Experiment",
    categories: ["Games", "AI"],
    image: images.chess,
    imageAlt: "Chess pieces in dramatic light (placeholder visual)",
    role: "Author of the surrounding experiment code.",
    overview:
      "An experiment that uses Stockfish — an existing open-source engine developed by the Stockfish team. The engine itself is third-party work; my part is the code around it.",
    contribution: ["Integration / experiment code (details to be added).", "Stockfish engine: not my work."],
    stack: ["Stockfish (third-party)", "Language to be confirmed"],
    decisions: [TBA],
    challenges: [TBA],
    limitations: ["Engine strength reflects Stockfish, not original AI research."],
    next: ["Clarify exactly which parts are original.", "Link repository."],
    links: [{ label: "Stockfish (third-party engine)", href: "https://stockfishchess.org/" }],
  },
];

export const research = {
  title: "When Tesla's Oscillator Meets Modern Science: A Computational Investigation into Mechanical Resonance",
  kind: "Computational research · MATLAB",
  status: "Student research — not peer reviewed",
  abstract:
    "A computational look at mechanical resonance through the lens of Tesla's oscillator, using MATLAB simulations to model and explore resonant behaviour. Abstract and findings to be added by the author.",
  paperUrl: null as string | null,
  methods: ["MATLAB simulation", "Literature review", "Mechanical resonance modelling"],
};

export type Artwork = { id: string; title: string; medium: string; src: string; alt: string; placeholder: boolean };

export const artworks: Artwork[] = [
  { id: "a1", title: "Sample — Creature study", medium: "Placeholder · ink style", src: images.ink2, alt: "Sample ink creature illustration placeholder", placeholder: true },
  { id: "a2", title: "Sample — Flow", medium: "Placeholder · ink texture", src: images.ink1, alt: "Sample abstract ink placeholder", placeholder: true },
  { id: "a3", title: "Sample — Resonance", medium: "Placeholder · photo", src: images.hero, alt: "Sample long-exposure pendulum placeholder", placeholder: true },
  { id: "a4", title: "Sample — Contours", medium: "Placeholder · line", src: images.pulse, alt: "Sample contour line placeholder", placeholder: true },
  { id: "a5", title: "Sample — Mechanism", medium: "Placeholder · photo", src: images.oscillator, alt: "Sample mechanism placeholder", placeholder: true },
  { id: "a6", title: "Sample — Atlas", medium: "Placeholder · dots", src: images.map, alt: "Sample dotted map placeholder", placeholder: true },
];

export type Note = { title: string; topic: string; status: "Draft" | "Coming soon"; blurb: string };

export const notes: Note[] = [
  { title: "Modelling resonance in MATLAB: notes from a first study", topic: "Research", status: "Draft", blurb: "Working notes on setting up the oscillator simulations." },
  { title: "Contributing to an open-source map UI", topic: "Open source", status: "Coming soon", blurb: "What I learned reading and contributing to a collaborative codebase." },
  { title: "Where my code ends and Stockfish begins", topic: "Engineering", status: "Coming soon", blurb: "On crediting third-party engines honestly." },
  { title: "Ink, linework and debugging", topic: "Art", status: "Draft", blurb: "Parallels between illustration practice and reading code." },
];

export const now = {
  updated: "October 2026",
  focus: [
    "Documenting existing projects properly — verified contributions and links.",
    "Finishing the write-up of the Tesla oscillator study.",
    "Prototyping PulseAtlas.",
  ],
  learning: ["Systems and reverse engineering fundamentals", "Numerical methods", "Type-safe frontend architecture"],
  making: ["Ink creature illustrations", "Manga-inspired studies"],
};
