"use client";

import React, { useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
    <main className="mx-auto max-w-2xl px-6 py-14 sm:py-20 text-[15px] leading-relaxed">
      {/* Top README Title Row */}
      <header className="flex items-start justify-between gap-4 border-b border-[var(--rule)] pb-6">
        <div className="flex items-center gap-3.5">
          <Image
            src="https://github.com/elixirmoon.png"
            alt={PORTFOLIO.name}
            width={44}
            height={44}
            unoptimized
            className="h-11 w-11 rounded-full object-cover border border-[var(--rule)]"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
              {PORTFOLIO.name}
            </h1>
            <p className="text-sm text-[var(--ink-muted)]">
              {PORTFOLIO.role} · <code>@{PORTFOLIO.handle}</code>
            </p>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          title={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink-muted)] hover:border-[var(--accent)] hover:text-[var(--ink)] cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {dark ? (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <Sun className="h-4 w-4 text-[var(--accent)]" />
              </motion.span>
            ) : (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <Moon className="h-4 w-4 text-[var(--accent)]" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </header>

      {/* About */}
      <section className="border-b border-[var(--rule)] py-7">
        <p className="text-[var(--ink-muted)]">{PORTFOLIO.bio}</p>
      </section>

      {/* Skills */}
      <section className="border-b border-[var(--rule)] py-7">
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] mb-3">
          Skills
        </h2>
        <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
          {PORTFOLIO.skills.map((skill) => (
            <li key={skill.id} className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-[var(--accent)]">•</span>
              <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-xs font-semibold text-[var(--ink)]">
                {skill.name}
              </code>
              <span>— {skill.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section className="border-b border-[var(--rule)] py-7">
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] mb-3">
          Projects
        </h2>
        <ul className="space-y-3 text-sm text-[var(--ink-muted)]">
          {PORTFOLIO.projects.map((project) => (
            <li key={project.title} className="flex items-start gap-2">
              <span className="text-[var(--accent)] mt-0.5">•</span>
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
                <span> — {project.summary}</span>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <code
                      key={tech}
                      className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[11px] text-[var(--ink-subtle)]"
                    >
                      {tech}
                    </code>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="py-7">
        <h2 className="text-base font-semibold tracking-tight text-[var(--ink)] mb-3">
          Contact
        </h2>
        <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
          <li className="flex flex-wrap items-center gap-2">
            <span className="text-[var(--accent)]">•</span>
            <span>Email:</span>
            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              {PORTFOLIO.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="rounded bg-[var(--surface)] px-2 py-0.5 text-xs text-[var(--ink-muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              {copied ? "copied" : "copy"}
            </button>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[var(--accent)]">•</span>
            <span>GitHub:</span>
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 hover:decoration-[var(--accent)]"
            >
              github.com/{PORTFOLIO.handle}
            </a>
          </li>
        </ul>
      </section>

      <footer className="border-t border-[var(--rule)] pt-6 text-xs text-[var(--ink-subtle)] flex items-center justify-between">
        <span>© {new Date().getFullYear()} {PORTFOLIO.name}</span>
        <span>moon.is-a.dev</span>
      </footer>
    </main>
  );
}
