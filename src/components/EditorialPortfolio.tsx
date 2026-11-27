"use client";

import React, { useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { PORTFOLIO } from "@/data/portfolio";

export default function EditorialPortfolio() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextDark = !dark;
    const applyTheme = () => {
      if (nextDark) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      setDark(nextDark);
    };

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof document.startViewTransition !== "function" || prefersReduced) {
      applyTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 520,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Ignore clipboard unavailability
    }
  };

  return (
    <main className="mx-auto max-w-[740px] px-6 py-12 sm:py-20 text-[15px] leading-[1.7]">
      {/* README Title */}
      <header className="flex items-center justify-between gap-4 border-b border-[var(--rule)] pb-5">
        <div className="flex items-center gap-4">
          <Image
            src="https://github.com/elixirmoon.png"
            alt={PORTFOLIO.name}
            width={48}
            height={48}
            unoptimized
            className="h-12 w-12 rounded-full object-cover border border-[var(--rule)]"
          />
          <div>
            <h1 className="text-[26px] font-bold tracking-tight leading-tight text-[var(--ink)]">
              {PORTFOLIO.name}
            </h1>
            <p className="mt-0.5 text-sm text-[var(--ink-muted)]">
              {PORTFOLIO.role} · <code className="text-[13px]">@{PORTFOLIO.handle}</code>
            </p>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          title={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink-muted)] transition-transform duration-150 hover:border-[var(--accent)] hover:text-[var(--ink)] active:scale-90 cursor-pointer"
        >
          <span
            style={{ viewTransitionName: "theme-icon" }}
            className="flex items-center justify-center"
          >
            {dark ? (
              <Sun className="h-4 w-4 text-[var(--accent)]" />
            ) : (
              <Moon className="h-4 w-4 text-[var(--accent)]" />
            )}
          </span>
        </button>
      </header>

      {/* Intro */}
      <p className="mt-6 text-[var(--ink-muted)]">{PORTFOLIO.bio}</p>

      {/* Skills */}
      <section className="mt-10">
        <h2 className="border-b border-[var(--rule)] pb-2 text-lg font-semibold tracking-tight text-[var(--ink)]">
          Skills
        </h2>
        <ul className="mt-4 list-disc pl-5 space-y-2.5 text-[14.5px] text-[var(--ink-muted)] marker:text-[var(--accent)]">
          {PORTFOLIO.skills.map((skill) => (
            <li key={skill.id} className="pl-1">
              <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[13px] font-semibold text-[var(--ink)]">
                {skill.name}
              </code>{" "}
              <span className="text-[var(--ink-subtle)]">—</span> {skill.note}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="border-b border-[var(--rule)] pb-2 text-lg font-semibold tracking-tight text-[var(--ink)]">
          Projects
        </h2>
        <ul className="mt-4 list-disc pl-5 space-y-4 text-[14.5px] text-[var(--ink-muted)] marker:text-[var(--accent)]">
          {PORTFOLIO.projects.map((project) => (
            <li key={project.title} className="pl-1">
              <div>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="font-semibold text-[var(--ink)]">{project.title}</span>
                )}{" "}
                <span className="text-xs text-[var(--ink-subtle)]">({project.tag})</span>
              </div>
              <p className="mt-1 text-[var(--ink-muted)]">{project.summary}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <code
                    key={tech}
                    className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[11.5px] text-[var(--ink-subtle)]"
                  >
                    {tech}
                  </code>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-10">
        <h2 className="border-b border-[var(--rule)] pb-2 text-lg font-semibold tracking-tight text-[var(--ink)]">
          Contact
        </h2>
        <ul className="mt-4 list-disc pl-5 space-y-2.5 text-[14.5px] text-[var(--ink-muted)] marker:text-[var(--accent)]">
          <li className="pl-1">
            <span>Email: </span>
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              {PORTFOLIO.email}
            </a>{" "}
            <button
              onClick={handleCopyEmail}
              className="ml-1 rounded bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              {copied ? "copied" : "copy"}
            </button>
          </li>
          <li className="pl-1">
            <span>GitHub: </span>
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              github.com/{PORTFOLIO.handle}
            </a>
          </li>
          <li className="pl-1">
            <span>LinkedIn: </span>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              linkedin.com/in/{PORTFOLIO.linkedinHandle}
            </a>
          </li>
        </ul>
      </section>

      <footer className="mt-14 border-t border-[var(--rule)] pt-6 text-xs text-[var(--ink-subtle)] flex items-center justify-between">
        <span>© {new Date().getFullYear()} {PORTFOLIO.name}</span>
        <span>moon.is-a.dev</span>
      </footer>
    </main>
  );
}
