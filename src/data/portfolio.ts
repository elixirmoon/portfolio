export type SkillCategory = "Programming" | "Frontend" | "Foundations";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  note: string;
}

export interface Project {
  title: string;
  tag: string;
  summary: string;
  stack: string[];
  href?: string;
}

export const PORTFOLIO = {
  name: "Lara Ilamaran",
  firstName: "Lara",
  lastName: "Ilamaran",
  handle: "elixirmoon",
  role: "CS & Mathematics Student",
  bio: "Computer Science and Mathematics student working with C++ and Python alongside foundational frontend skills in HTML, CSS, and JavaScript—learning deliberately and building step by step.",
  email: "elixir.moon.me@gmail.com",
  github: "https://github.com/elixirmoon",

  skills: [
    {
      id: "cpp",
      name: "C++",
      category: "Programming",
      note: "Core syntax, STL containers, and structured problem solving.",
    },
    {
      id: "python",
      name: "Python",
      category: "Programming",
      note: "Readable scripting, automation, and foundational programming.",
    },
    {
      id: "html",
      name: "HTML5",
      category: "Frontend",
      note: "Semantic structure and clean document markup.",
    },
    {
      id: "css",
      name: "CSS3",
      category: "Frontend",
      note: "Responsive layouts with Flexbox, Grid, and clean styling.",
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Frontend",
      note: "ES6+ fundamentals, DOM interaction, and dynamic UI behavior.",
    },
    {
      id: "logic",
      name: "Problem Solving & Math",
      category: "Foundations",
      note: "Step-by-step analytical thinking, logic, and data structures.",
    },
    {
      id: "git",
      name: "Git & GitHub",
      category: "Foundations",
      note: "Version control, commits, branches, and pull requests.",
    },
    {
      id: "hosting",
      name: "Web Hosting & DNS",
      category: "Foundations",
      note: "Deploying sites on Vercel with custom domains like moon.is-a.dev.",
    },
  ] satisfies Skill[],

  projects: [
    {
      title: "Personal Portfolio",
      tag: "Live",
      summary:
        "My personal website hosted at moon.is-a.dev via Vercel, designed to stay simple, calm, and easy to read.",
      stack: ["HTML", "CSS", "JavaScript", "Next.js"],
      href: "https://moon.is-a.dev/",
    },
    {
      title: "C++ & Python Practice",
      tag: "In Progress",
      summary:
        "Space reserved for upcoming C++ and Python exercises, math-focused problem solving, and small utilities.",
      stack: ["C++", "Python"],
      href: "https://github.com/elixirmoon",
    },
    {
      title: "Next Frontend Build",
      tag: "Upcoming",
      summary:
        "Open slot for my next web project—editable anytime inside src/data/portfolio.ts.",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ] satisfies Project[],
};
