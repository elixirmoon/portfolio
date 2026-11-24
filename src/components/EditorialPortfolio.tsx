"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Check, Copy, Moon, Sun } from "lucide-react";
import { PORTFOLIO, Project, SkillCategory } from "@/data/portfolio";
import MagneticCursor from "@/components/MagneticCursor";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CATEGORIES: (SkillCategory | "All")[] = [
  "All",
  "Languages",
  "Frontend",
  "Systems & CS",
  "Workflow",
];

export default function EditorialPortfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"ivory" | "noir">("ivory");
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");
  const [expandedProject, setExpandedProject] = useState<string>("01");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [copied, setCopied] = useState(false);

  // Floating poster cursor tracking for Selected Work rows
  const previewX = useMotionValue(0);
  const previewY = useMotionValue(0);
  const smoothX = useSpring(previewX, { stiffness: 260, damping: 28 });
  const smoothY = useSpring(previewY, { stiffness: 260, damping: 28 });

  useEffect(() => {
    if (theme === "noir") {
      document.documentElement.setAttribute("data-theme", "noir");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

  // Lenis inertial smooth scroll synced with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const onScroll = ({ progress }: { progress: number }) => {
      ScrollTrigger.update();
      setScrollPct(Math.round((progress || 0) * 100));
    };

    lenis.on("scroll", onScroll);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  // Masked line-by-line curtain reveals + scroll-triggered reveals
  useGSAP(
    () => {
      gsap.from(".hero-mask-line", {
        yPercent: 110,
        duration: 0.95,
        stagger: 0.1,
        ease: "power4.out",
      });

      gsap.from(".hero-fade", {
        y: 18,
        opacity: 0,
        duration: 0.8,
        delay: 0.35,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform",
      });

      gsap.utils.toArray<HTMLElement>(".rz-reveal").forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once: true,
          },
        });
      });
    },
    { scope: rootRef }
  );

  const visibleSkills = useMemo(() => {
    if (activeCategory === "All") return PORTFOLIO.skills;
    return PORTFOLIO.skills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<SkillCategory | "All", number> = {
      All: PORTFOLIO.skills.length,
      Languages: 0,
      Frontend: 0,
      "Systems & CS": 0,
      Workflow: 0,
    };
    PORTFOLIO.skills.forEach((s) => {
      counts[s.category]++;
    });
    return counts;
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <div ref={rootRef} className="relative min-h-screen">
      <MagneticCursor />

      {/* MINIMAL STUDIO HEADER */}
      <header className="sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--bg)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-10">
          <a
            href="#top"
            data-cursor="HOME"
            className="flex items-center gap-3 text-sm font-medium tracking-tight text-[var(--ink)]"
          >
            <span className="font-editorial italic text-xl text-[var(--accent)]">
              {PORTFOLIO.initials}
            </span>
            <span className="tracking-wide uppercase text-[11px] font-semibold">
              {PORTFOLIO.name}
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)] md:flex">
            <a href="#work" className="editorial-link hover:text-[var(--ink)] transition-colors">
              Selected Work
            </a>
            <a
              href="#expertise"
              className="editorial-link hover:text-[var(--ink)] transition-colors"
            >
              Expertise
            </a>
            <a
              href="#philosophy"
              className="editorial-link hover:text-[var(--ink)] transition-colors"
            >
              Approach
            </a>
            <a href="#contact" className="editorial-link hover:text-[var(--ink)] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-mono text-[11px] tabular-nums text-[var(--ink-subtle)]">
              {String(scrollPct).padStart(2, "0")}%
            </span>

            <button
              onClick={() => setTheme((t) => (t === "ivory" ? "noir" : "ivory"))}
              data-cursor={theme === "ivory" ? "NOIR" : "IVORY"}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
              aria-label="Toggle Ivory or Noir editorial palette"
            >
              {theme === "ivory" ? (
                <Moon className="h-3.5 w-3.5" />
              ) : (
                <Sun className="h-3.5 w-3.5" />
              )}
              <span className="hidden sm:inline">{theme === "ivory" ? "Noir" : "Ivory"}</span>
            </button>

            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GIT"
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1400px] px-5 sm:px-10">
        {/* 00 · MONUMENTAL EDITORIAL HERO */}
        <section className="flex min-h-[82vh] flex-col justify-between pb-14 pt-10 sm:pt-14">
          {/* Top metadata hairline */}
          <div className="hero-fade flex flex-wrap items-center justify-between gap-2 border-b border-[var(--rule)] pb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--ink-muted)]">
            <span>{PORTFOLIO.headline}</span>
            <span className="text-[var(--accent)]">@{PORTFOLIO.handle}</span>
            <span>{PORTFOLIO.location}</span>
          </div>

          {/* Masked Line-by-Line Typographic Statement */}
          <div className="my-auto py-12 sm:py-16">
            <h1 className="font-editorial text-[clamp(3.1rem,8.4vw,7.8rem)] font-normal leading-[0.94] tracking-[-0.025em] text-[var(--ink)]">
              <span className="block mask-clip">
                <span className="hero-mask-line block">Designing</span>
              </span>
              <span className="block mask-clip">
                <span className="hero-mask-line block">thoughtful systems</span>
              </span>
              <span className="block mask-clip">
                <span className="hero-mask-line block">
                  with editorial{" "}
                  <em className="italic font-normal text-[var(--accent)]">grace.</em>
                </span>
              </span>
            </h1>
          </div>

          {/* Asymmetric bottom grid */}
          <div className="hero-fade grid grid-cols-1 gap-10 border-t border-[var(--rule)] pt-8 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-5">
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-[var(--ink-muted)]">
                {PORTFOLIO.bio}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-1">
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="editorial-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-[var(--accent)]" />
                  )}
                  {copied ? "Copied to clipboard" : PORTFOLIO.email}
                </button>

                <a
                  href={PORTFOLIO.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="OPEN"
                  className="editorial-link inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                >
                  github.com/{PORTFOLIO.handle}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:pl-10">
              {PORTFOLIO.highlights.map((item) => (
                <div key={item.label} className="border-l border-[var(--rule)] pl-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-[var(--ink)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 · SELECTED WORK (REZO ZERO HOVER-TRACKING MONUMENTAL INDEX) */}
        <section id="work" className="rz-reveal relative py-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                01 / Selected Work
              </span>
              <h2 className="mt-2 font-editorial text-4xl sm:text-6xl font-normal tracking-tight text-[var(--ink)]">
                Curated <em className="italic text-[var(--accent)]">Chapters</em>
              </h2>
            </div>
            <p className="text-xs text-[var(--ink-subtle)]">
              Editable anytime in{" "}
              <code className="text-[var(--ink-muted)]">src/data/portfolio.ts</code>
            </p>
          </div>

          {/* Floating cursor-tracking editorial poster (desktop fine pointer) */}
          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.2 }}
                style={{
                  left: smoothX,
                  top: smoothY,
                }}
                className="pointer-events-none fixed z-30 hidden lg:flex h-56 w-72 -translate-x-1/2 -translate-y-[115%] flex-col justify-between border border-[var(--rule-strong)] bg-[var(--bg-elevated)] p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span>Index {hoveredProject.number}</span>
                  <span>{hoveredProject.year}</span>
                </div>
                <p className="font-editorial italic text-2xl leading-snug text-[var(--ink)]">
                  &ldquo;{hoveredProject.posterQuote}&rdquo;
                </p>
                <div className="text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  {hoveredProject.stack.slice(0, 3).join(" · ")}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="border-b border-[var(--rule)]"
            onMouseMove={(e) => {
              previewX.set(e.clientX);
              previewY.set(e.clientY);
            }}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {PORTFOLIO.projects.map((project) => {
              const isOpen = expandedProject === project.number;
              return (
                <div
                  key={project.number}
                  onMouseEnter={() => setHoveredProject(project)}
                  className="group border-t border-[var(--rule)] transition-colors hover:bg-[var(--accent-soft)]/50"
                >
                  <button
                    onClick={() =>
                      setExpandedProject((prev) =>
                        prev === project.number ? "" : project.number
                      )
                    }
                    data-cursor="VIEW"
                    className="flex w-full flex-col gap-4 py-7 sm:py-9 text-left md:flex-row md:items-center md:justify-between cursor-pointer"
                  >
                    <div className="flex items-baseline gap-5 sm:gap-8">
                      <span className="font-editorial italic text-xl sm:text-2xl text-[var(--accent)] w-8 shrink-0">
                        {project.number}
                      </span>
                      <h3 className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-3">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between gap-6 pl-13 md:pl-0">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                        {project.role}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--ink-subtle)]">
                        {project.tag}
                      </span>
                      <span className="font-mono text-xs text-[var(--accent)]">
                        {isOpen ? "—" : "+"}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-6 pb-8 pl-13 pr-4 md:grid-cols-12">
                          <p className="md:col-span-7 text-sm sm:text-base leading-relaxed text-[var(--ink-muted)]">
                            {project.summary}
                          </p>
                          <div className="md:col-span-5 flex flex-col justify-between gap-4 md:items-end">
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-[var(--ink)]">
                              {project.stack.map((tech) => (
                                <span key={tech} className="text-[var(--ink-muted)]">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {project.href && (
                              <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                data-cursor="OPEN"
                                className="editorial-link inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]"
                              >
                                View Repository
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 02 · STICKY ASYMMETRIC EXPERTISE & CRAFT LEDGER */}
        <section id="expertise" className="rz-reveal py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left sticky magazine sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start space-y-8">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  02 / Expertise
                </span>
                <h2 className="mt-2 font-editorial text-4xl sm:text-5xl font-normal leading-[1.02] tracking-tight text-[var(--ink)]">
                  Craft &amp; <em className="italic text-[var(--accent)]">Capabilities</em>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-muted)]">
                  Systems-level foundations in Java, C++, and Python paired with modern web
                  architecture and disciplined Git workflows.
                </p>
              </div>

              {/* Clean editorial category filter list — zero wrapping pill clutter */}
              <div
                role="tablist"
                aria-label="Filter capabilities"
                className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--rule)] pt-5 lg:flex-col lg:gap-2.5"
              >
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategory(cat)}
                      className={`group flex items-center justify-between text-left text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                        isActive
                          ? "font-semibold text-[var(--accent)]"
                          : "font-medium text-[var(--ink-muted)] hover:text-[var(--ink)]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`h-[1px] transition-all duration-300 ${
                            isActive
                              ? "w-5 bg-[var(--accent)]"
                              : "w-0 bg-[var(--ink)] group-hover:w-3"
                          }`}
                        />
                        {cat}
                      </span>
                      <span className="hidden lg:inline font-mono text-[11px] text-[var(--ink-subtle)]">
                        {String(categoryCounts[cat]).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right editorial hairline ledger */}
            <div className="lg:col-span-8">
              <div className="border-b border-[var(--rule)]">
                {visibleSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="group grid grid-cols-1 gap-2 border-t border-[var(--rule)] py-5 transition-colors hover:bg-[var(--accent-soft)]/35 sm:grid-cols-12 sm:items-baseline sm:gap-4 sm:px-3"
                  >
                    <span className="sm:col-span-1 font-editorial italic text-lg text-[var(--accent)]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <h3 className="sm:col-span-4 text-base font-semibold tracking-tight text-[var(--ink)] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--accent)]">
                      {skill.name}
                    </h3>

                    <p className="sm:col-span-5 text-xs sm:text-sm leading-relaxed text-[var(--ink-muted)]">
                      {skill.note}
                    </p>

                    <span className="sm:col-span-2 sm:text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--ink-subtle)]">
                      {skill.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 03 · ENGINEERING PHILOSOPHY (ARCHITECTURAL 3-COLUMN RULED GRID) */}
        <section id="philosophy" className="rz-reveal py-20">
          <div className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              03 / Approach
            </span>
            <h2 className="mt-2 font-editorial text-4xl sm:text-5xl font-normal tracking-tight text-[var(--ink)]">
              Principles of <em className="italic text-[var(--accent)]">Execution</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 border-y border-[var(--rule)] lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 divide-[var(--rule)]">
            {PORTFOLIO.notes.map((note) => (
              <div key={note.numeral} className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <span className="font-editorial italic text-3xl text-[var(--accent)]">
                  {note.numeral}
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[var(--ink)]">
                  {note.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 · MONUMENTAL CONTACT & COLOPHON */}
        <section id="contact" className="rz-reveal pb-16 pt-12">
          <div className="space-y-8">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              04 / Inquiries
            </span>

            <h2 className="font-editorial text-[clamp(2.5rem,6vw,5.4rem)] font-normal leading-[0.98] tracking-tight text-[var(--ink)]">
              Let&apos;s craft something{" "}
              <em className="italic text-[var(--accent)]">enduring.</em>
            </h2>

            <div className="flex flex-col items-start justify-between gap-6 border-t border-[var(--rule)] pt-8 md:flex-row md:items-center">
              <div className="space-y-2">
                <a
                  href={`mailto:${PORTFOLIO.email}`}
                  data-cursor="EMAIL"
                  className="editorial-link font-editorial text-2xl sm:text-4xl text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
                >
                  {PORTFOLIO.email}
                </a>
                <p className="text-xs text-[var(--ink-muted)]">
                  Open to software engineering roles, full-stack projects &amp; collaborations.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="editorial-link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--accent)] cursor-pointer"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-[var(--accent)]" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied Email" : "Copy Address"}
                </button>

                <a
                  href={PORTFOLIO.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="GIT"
                  className="editorial-link inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  GitHub (@{PORTFOLIO.handle})
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col items-start justify-between gap-2 border-t border-[var(--rule)] py-8 text-[11px] uppercase tracking-[0.14em] text-[var(--ink-subtle)] sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {PORTFOLIO.name}
          </span>
          <span>Next.js · TypeScript · Tailwind · GSAP · Lenis · Framer Motion</span>
        </footer>
      </main>
    </div>
  );
}
