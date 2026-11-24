export type SkillCategory = "Languages" | "Frontend" | "Systems & CS" | "Workflow";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  note: string;
}

export interface Project {
  number: string;
  title: string;
  tag: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  posterQuote: string;
  href?: string;
}

export interface DisciplineNote {
  numeral: string;
  title: string;
  detail: string;
}

export const PORTFOLIO = {
  name: "Lara Bennett",
  firstName: "Lara",
  lastName: "Bennett",
  handle: "elixirmoon",
  initials: "L.B.",
  headline: "Software Engineer & Creative Web Developer",
  bio: "Building dependable software across Java, C++, Python, and TypeScript—pairing clean algorithms and backend rigor with calm, editorial craft on the web.",
  location: "Available Worldwide",
  email: "elixir.moon.me@gmail.com",
  github: "https://github.com/elixirmoon",

  highlights: [
    { label: "Core Stack", value: "Java · C++ · Python · TypeScript" },
    { label: "Interface Craft", value: "React · Next.js · GSAP · Lenis" },
    { label: "Engineering", value: "DSA · Local-First · Git Workflows" },
  ],

  skills: [
    {
      id: "java",
      name: "Java",
      category: "Languages",
      note: "Object-oriented architecture, collections, backend logic, and algorithmic problem solving.",
    },
    {
      id: "cpp",
      name: "C++",
      category: "Languages",
      note: "STL mastery, memory-conscious data structures, and competitive programming.",
    },
    {
      id: "python",
      name: "Python",
      category: "Languages",
      note: "Clean scripting, developer tooling, automation, and algorithmic prototyping.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Languages",
      note: "Expressive, type-safe application design across components and state.",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Languages",
      note: "Modern ESNext, asynchronous flows, browser APIs, and smooth UI responsiveness.",
    },
    {
      id: "html-css",
      name: "HTML5 & CSS3",
      category: "Languages",
      note: "Editorial typography, semantic layout, responsive grids, and refined styling.",
    },
    {
      id: "react",
      name: "React",
      category: "Frontend",
      note: "Composable UI craft, custom hooks, and calm, predictable client state.",
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      note: "App Router architecture, clean server/client rendering, and fast builds.",
    },
    {
      id: "vite",
      name: "Vite",
      category: "Frontend",
      note: "Instant local feedback loops and lightweight modern asset bundling.",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "Frontend",
      note: "Token-driven palettes, balanced whitespace, and cohesive design systems.",
    },
    {
      id: "gsap",
      name: "GSAP & Lenis",
      category: "Frontend",
      note: "Masked typographic reveals, ScrollTrigger choreography, and inertial scrolling.",
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      category: "Frontend",
      note: "Spring physics, shared layout transitions, and responsive micro-interactions.",
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      category: "Systems & CS",
      note: "Trees, graphs, dynamic programming, and thoughtful complexity trade-offs.",
    },
    {
      id: "backend",
      name: "Backend Systems",
      category: "Systems & CS",
      note: "Structured APIs, reliable state handling, and clean domain modeling.",
    },
    {
      id: "competitive",
      name: "Competitive Programming",
      category: "Systems & CS",
      note: "Analytical problem decomposition under tight time and memory constraints.",
    },
    {
      id: "local-first",
      name: "Local-First Storage",
      category: "Systems & CS",
      note: "Browser-persisted state that feels instantaneous and works effortlessly.",
    },
    {
      id: "git",
      name: "Git & GitHub Workflows",
      category: "Workflow",
      note: "Thoughtful branching, clean pull requests, merging, and conflict resolution.",
    },
    {
      id: "reviews",
      name: "Code Collaboration",
      category: "Workflow",
      note: "Shared repository hygiene, structured commits, and clean PR reviews.",
    },
    {
      id: "hosting",
      name: "Custom Web Hosting",
      category: "Workflow",
      note: "Domain routing, custom server setup, and self-hosted web deployments.",
    },
    {
      id: "linux",
      name: "Linux Environment",
      category: "Workflow",
      note: "Comfortable terminal workflows, environment setup, and automation.",
    },
  ] satisfies Skill[],

  projects: [
    {
      number: "01",
      title: "Editorial Portfolio Architecture",
      tag: "Live Showcase",
      year: "2026",
      role: "Design & Engineering",
      posterQuote: "Typographic rhythm meets modern engineering.",
      summary:
        "A print-inspired personal portfolio engineered with Next.js, TypeScript, Tailwind CSS, GSAP ScrollTrigger, Lenis smooth scroll, and Framer Motion.",
      stack: ["Next.js", "TypeScript", "GSAP", "Lenis", "Framer Motion"],
      href: "https://github.com/elixirmoon",
    },
    {
      number: "02",
      title: "Algorithms & Systems Archive",
      tag: "Curated Slot",
      year: "2026",
      role: "Java · C++ · Python",
      posterQuote: "Clean data structures, minimal overhead.",
      summary:
        "Placeholder slot reserved for upcoming open-source repositories covering Java, C++, and Python data structures, graph traversals, and system design.",
      stack: ["Java", "C++", "Python", "DSA"],
      href: "https://github.com/elixirmoon",
    },
    {
      number: "03",
      title: "Upcoming Creative Web Build",
      tag: "Open Chapter",
      year: "Soon",
      role: "Full-Stack",
      posterQuote: "Crafted for clarity and permanence.",
      summary:
        "Reserved chapter for my next shipped product. Update src/data/portfolio.ts anytime to add project case studies, live demos, and links.",
      stack: ["React", "Vite", "Tailwind CSS"],
    },
  ] satisfies Project[],

  notes: [
    {
      numeral: "01",
      title: "Performance by Design",
      detail:
        "Grounded in Java, C++, Python, and algorithmic rigor—writing software where clarity and speed reinforce each other.",
    },
    {
      numeral: "02",
      title: "Editorial Sensitivity",
      detail:
        "Treating typography, negative space, and inertial scroll motion as structural elements rather than afterthoughts.",
    },
    {
      numeral: "03",
      title: "Disciplined Craft",
      detail:
        "Structured Git branches, thoughtful pull requests, local-first reliability, and clean self-hosted web deployments.",
    },
  ] satisfies DisciplineNote[],
};
