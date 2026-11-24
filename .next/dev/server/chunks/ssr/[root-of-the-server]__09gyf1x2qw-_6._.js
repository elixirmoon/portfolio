module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/context/PortfolioContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PortfolioProvider",
    ()=>PortfolioProvider,
    "usePortfolio",
    ()=>usePortfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/defaultPortfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "lara_portfolio_studio_v1";
let cachedConfig = null;
const listeners = new Set();
function readClientConfig() {
    if (cachedConfig) return cachedConfig;
    try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.profile && Array.isArray(parsed.skills) && Array.isArray(parsed.projects)) {
                cachedConfig = {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"],
                    ...parsed,
                    profile: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"].profile,
                        ...parsed.profile
                    },
                    settings: {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"].settings,
                        ...parsed.settings
                    }
                };
                return cachedConfig;
            }
        }
    } catch  {
    // Fall back cleanly to default config if stored JSON is malformed
    }
    cachedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"];
    return cachedConfig;
}
function writeClientConfig(next) {
    cachedConfig = next;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch  {
    // Ignore quota errors in private browsing modes
    }
    listeners.forEach((l)=>l());
}
function subscribeConfig(callback) {
    listeners.add(callback);
    const onStorage = (e)=>{
        if (e.key === STORAGE_KEY) {
            cachedConfig = null;
            callback();
        }
    };
    window.addEventListener("storage", onStorage);
    return ()=>{
        listeners.delete(callback);
        window.removeEventListener("storage", onStorage);
    };
}
const emptySubscribe = ()=>()=>{};
const PortfolioContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function PortfolioProvider({ children }) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeConfig, readClientConfig, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"]);
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(emptySubscribe, ()=>true, ()=>false);
    const [studioOpen, setStudioOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [studioTab, setStudioTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("profile");
    const [commandOpen, setCommandOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Synchronize CSS theme variables
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const preset = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_PRESETS"][config.settings.theme] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["THEME_PRESETS"].cryo;
        const root = document.documentElement;
        root.style.setProperty("--accent", preset.accent);
        root.style.setProperty("--accent-secondary", preset.accentSecondary);
        root.style.setProperty("--accent-glow", preset.glow);
    }, [
        config.settings.theme
    ]);
    // Global Cmd/Ctrl+K shortcut for Command Palette
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onKeyDown = (e)=>{
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setCommandOpen((prev)=>!prev);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return ()=>window.removeEventListener("keydown", onKeyDown);
    }, []);
    const updateProfile = (patch)=>{
        const current = readClientConfig();
        writeClientConfig({
            ...current,
            profile: {
                ...current.profile,
                ...patch
            }
        });
    };
    const updateSettings = (patch)=>{
        const current = readClientConfig();
        writeClientConfig({
            ...current,
            settings: {
                ...current.settings,
                ...patch
            }
        });
    };
    const upsertProject = (project)=>{
        const current = readClientConfig();
        const exists = current.projects.some((p)=>p.id === project.id);
        const nextProjects = exists ? current.projects.map((p)=>p.id === project.id ? project : p) : [
            project,
            ...current.projects
        ];
        writeClientConfig({
            ...current,
            projects: nextProjects
        });
    };
    const deleteProject = (id)=>{
        const current = readClientConfig();
        writeClientConfig({
            ...current,
            projects: current.projects.filter((p)=>p.id !== id)
        });
    };
    const upsertSkill = (skill)=>{
        const current = readClientConfig();
        const exists = current.skills.some((s)=>s.id === skill.id);
        const nextSkills = exists ? current.skills.map((s)=>s.id === skill.id ? skill : s) : [
            skill,
            ...current.skills
        ];
        writeClientConfig({
            ...current,
            skills: nextSkills
        });
    };
    const deleteSkill = (id)=>{
        const current = readClientConfig();
        writeClientConfig({
            ...current,
            skills: current.skills.filter((s)=>s.id !== id)
        });
    };
    const importConfig = (rawJson)=>{
        try {
            const parsed = JSON.parse(rawJson);
            if (!parsed.profile?.name || !Array.isArray(parsed.skills) || !Array.isArray(parsed.projects)) {
                return {
                    ok: false,
                    error: "Invalid portfolio schema: missing profile, skills, or projects."
                };
            }
            writeClientConfig({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"],
                ...parsed,
                profile: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"].profile,
                    ...parsed.profile
                },
                settings: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"].settings,
                    ...parsed.settings
                }
            });
            return {
                ok: true
            };
        } catch (err) {
            return {
                ok: false,
                error: err instanceof Error ? err.message : "Could not parse JSON configuration."
            };
        }
    };
    const resetToDefault = ()=>{
        cachedConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$defaultPortfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_PORTFOLIO"];
        try {
            window.localStorage.removeItem(STORAGE_KEY);
        } catch  {
        // Ignore
        }
        listeners.forEach((l)=>l());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioContext.Provider, {
        value: {
            config,
            hydrated,
            studioOpen,
            setStudioOpen,
            studioTab,
            setStudioTab,
            commandOpen,
            setCommandOpen,
            updateProfile,
            updateSettings,
            upsertProject,
            deleteProject,
            upsertSkill,
            deleteSkill,
            importConfig,
            resetToDefault
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/PortfolioContext.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function usePortfolio() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PortfolioContext);
    if (!ctx) {
        throw new Error("usePortfolio must be used within a PortfolioProvider");
    }
    return ctx;
}
}),
"[project]/src/data/defaultPortfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_PORTFOLIO",
    ()=>DEFAULT_PORTFOLIO,
    "THEME_PRESETS",
    ()=>THEME_PRESETS
]);
const THEME_PRESETS = {
    cryo: {
        name: "Cryo Cyan",
        accent: "#38BDF8",
        accentSecondary: "#818CF8",
        glow: "rgba(56, 189, 248, 0.22)",
        badge: "bg-sky-400"
    },
    indigo: {
        name: "Electric Indigo",
        accent: "#818CF8",
        accentSecondary: "#C084FC",
        glow: "rgba(129, 140, 248, 0.24)",
        badge: "bg-indigo-400"
    },
    emerald: {
        name: "Emerald Matrix",
        accent: "#34D399",
        accentSecondary: "#22D3EE",
        glow: "rgba(52, 211, 153, 0.22)",
        badge: "bg-emerald-400"
    },
    amber: {
        name: "Solar Amber",
        accent: "#FBBF24",
        accentSecondary: "#FB7185",
        glow: "rgba(251, 191, 36, 0.22)",
        badge: "bg-amber-400"
    }
};
const DEFAULT_PORTFOLIO = {
    version: 1,
    profile: {
        name: "Lara Bennett",
        handle: "elixirmoon",
        role: "Software Engineer & Systems Builder",
        tagline: "Engineering resilient backends, algorithmic systems, and high-craft interactive web architectures.",
        bio: "Full-stack and systems-focused developer bridging low-level algorithmic rigor in Java, C++, and Python with spatial, motion-driven web experiences in Next.js, TypeScript, Three.js, and GSAP. Driven by clean code, local-first architectures, and disciplined Git workflows.",
        location: "Remote / Worldwide",
        availability: "Open to Engineering Roles & Collaborations",
        email: "elixir.moon.me@gmail.com",
        github: "https://github.com/elixirmoon",
        linkedin: "",
        website: "",
        stats: [
            {
                label: "Core Languages",
                value: "Java · C++ · Py · TS"
            },
            {
                label: "Architecture",
                value: "Local-First & WebGL"
            },
            {
                label: "Engineering Focus",
                value: "DSA & Full-Stack"
            },
            {
                label: "Workflow",
                value: "Git PRs & Self-Hosting"
            }
        ]
    },
    skills: [
        {
            id: "java",
            name: "Java",
            category: "Languages",
            proficiency: 92,
            summary: "Object-oriented systems design, collections framework, concurrency primitives, and algorithmic problem solving.",
            highlights: [
                "DSA & Collections",
                "Clean OOP Architecture",
                "Backend Services"
            ],
            featured: true
        },
        {
            id: "cpp",
            name: "C++",
            category: "Languages",
            proficiency: 90,
            summary: "Low-latency system logic, STL mastery, memory-aware data structures, and competitive programming.",
            highlights: [
                "STL & Templates",
                "Competitive Programming",
                "Memory Efficiency"
            ],
            featured: true
        },
        {
            id: "python",
            name: "Python",
            category: "Languages",
            proficiency: 88,
            summary: "Rapid tooling, automation scripts, algorithmic prototyping, and data-processing pipelines.",
            highlights: [
                "CLI & Tooling",
                "Algorithm Prototyping",
                "Automation"
            ],
            featured: true
        },
        {
            id: "typescript",
            name: "TypeScript",
            category: "Languages",
            proficiency: 94,
            summary: "Strict type-safe frontend and full-stack application architecture with zero-runtime-surprise contracts.",
            highlights: [
                "Strict Type Systems",
                "Generic Utilities",
                "Schema Safety"
            ],
            featured: true
        },
        {
            id: "javascript",
            name: "JavaScript (ESNext)",
            category: "Languages",
            proficiency: 93,
            summary: "Deep understanding of the event loop, async execution, browser APIs, and DOM performance.",
            highlights: [
                "Async & Concurrency",
                "Browser Storage APIs",
                "Web Performance"
            ]
        },
        {
            id: "react-nextjs",
            name: "React & Next.js",
            category: "Frontend & Motion",
            proficiency: 94,
            summary: "App Router architecture, server/client boundaries, modular hooks, and state synchronization.",
            highlights: [
                "Next.js App Router",
                "Custom Hooks",
                "SSR & Static Builds"
            ],
            featured: true
        },
        {
            id: "vite-tailwind",
            name: "Vite & Tailwind CSS",
            category: "Frontend & Motion",
            proficiency: 92,
            summary: "Sub-second HMR build pipelines paired with token-driven responsive design systems.",
            highlights: [
                "Design Systems",
                "Utility Architecture",
                "Fast Bundling"
            ],
            featured: true
        },
        {
            id: "threejs-gsap",
            name: "Three.js, GSAP & Motion",
            category: "Frontend & Motion",
            proficiency: 87,
            summary: "Hardware-accelerated 3D WebGL scenes via React Three Fiber, ScrollTrigger choreography, and spring physics.",
            highlights: [
                "React Three Fiber",
                "GSAP ScrollTrigger",
                "Framer Motion"
            ],
            featured: true
        },
        {
            id: "html-css",
            name: "HTML5 & Modern CSS",
            category: "Frontend & Motion",
            proficiency: 95,
            summary: "Semantic markup, accessible landmarks, CSS Grid/Subgrid, and custom glassmorphism surfaces.",
            highlights: [
                "WCAG Accessibility",
                "Responsive Grid",
                "CSS Variables"
            ]
        },
        {
            id: "dsa",
            name: "Data Structures & Algorithms",
            category: "Systems & CS",
            proficiency: 91,
            summary: "Graphs, trees, dynamic programming, greedy optimization, and asymptotic complexity analysis.",
            highlights: [
                "Graphs & Shortest Path",
                "Trees & Heaps",
                "Time/Space Bounds"
            ],
            featured: true
        },
        {
            id: "backend-systems",
            name: "Backend & System Logic",
            category: "Systems & CS",
            proficiency: 88,
            summary: "RESTful APIs, structured data modeling, deterministic state machines, and scalable service logic.",
            highlights: [
                "API Design",
                "State Machines",
                "Optimized Queries"
            ]
        },
        {
            id: "local-first",
            name: "Local-First Browser Storage",
            category: "Systems & CS",
            proficiency: 90,
            summary: "Resilient client-side persistence engines, JSON schema versioning, and zero-latency offline UX.",
            highlights: [
                "LocalStorage Engines",
                "Import/Export JSON",
                "Instant Persistence"
            ],
            featured: true
        },
        {
            id: "git-workflows",
            name: "Git & GitHub Workflows",
            category: "DevOps & Tooling",
            proficiency: 93,
            summary: "Structured branching strategies, clean rebasing, pull request reviews, and conflict resolution.",
            highlights: [
                "Branching & Merging",
                "PR Code Review",
                "Conflict Resolution"
            ],
            featured: true
        },
        {
            id: "web-hosting",
            name: "Custom Web Hosting & DNS",
            category: "DevOps & Tooling",
            proficiency: 86,
            summary: "Self-hosted deployments, reverse proxy configuration, SSL/TLS, and custom domain routing.",
            highlights: [
                "Self-Hosting",
                "Domain & DNS",
                "Linux Environment"
            ]
        }
    ],
    projects: [
        {
            id: "starter-devhub",
            title: "DevSnapz — Community Hub Blueprint",
            subtitle: "Local-First Developer Showcase & Guidance Platform",
            description: "Customizable starter entry demonstrating local-first browser state persistence, structured project cards, guidance boards, and interactive contribution workflows. Replace with your own shipped project anytime in Portfolio Studio.",
            category: "Full-Stack",
            status: "Template Starter",
            techStack: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Vite",
                "LocalStorage"
            ],
            highlights: [
                "Local-first state engine persisting threads and project collections",
                "Component-driven showcase cards with category filtering",
                "Built for rapid customization via Portfolio Studio"
            ],
            repoUrl: "https://github.com/elixirmoon",
            liveUrl: "",
            featured: true
        },
        {
            id: "starter-aiverse",
            title: "AIverse — Knowledge Directory Architecture",
            subtitle: "Structured AI Tools & Model Taxonomy",
            description: "Starter architecture blueprint for cataloging models, benchmarks, and developer tooling with instant client-side filtering and telemetry tags. Edit or swap out this project via Studio Mode.",
            category: "AI & Data",
            status: "Template Starter",
            techStack: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Python"
            ],
            highlights: [
                "Multi-facet taxonomy search and instant tag indexing",
                "Structured model card specification and comparison layout",
                "Clean JSON-backed data layer ready for API integration"
            ],
            repoUrl: "https://github.com/elixirmoon",
            liveUrl: "",
            featured: true
        },
        {
            id: "starter-cryograph",
            title: "CryoGraph — Multi-Language DSA Studio",
            subtitle: "Interactive Algorithm & Complexity Visualizer",
            description: "Built directly into this portfolio: deterministic step-by-step visualization for sorting, binary search, and Dijkstra pathfinding paired with synchronized Java, C++, and Python implementations.",
            category: "Systems & DSA",
            status: "Shipped",
            techStack: [
                "TypeScript",
                "Java",
                "C++",
                "Python",
                "Framer Motion"
            ],
            highlights: [
                "Deterministic execution snapshots with step-back & playback speed",
                "Side-by-side Java, C++, and Python source code reference",
                "Live comparison and swap telemetry counters"
            ],
            repoUrl: "https://github.com/elixirmoon",
            liveUrl: "#dsa-lab",
            featured: true
        }
    ],
    experience: [
        {
            id: "exp-1",
            role: "Independent Software & Full-Stack Builder",
            organization: "Open Source & Personal Lab",
            period: "Present",
            summary: "Architecting modular web platforms, interactive 3D interfaces, and developer utilities with TypeScript, React, Next.js, and local-first storage patterns.",
            tags: [
                "Next.js",
                "TypeScript",
                "Three.js",
                "GSAP"
            ]
        },
        {
            id: "exp-2",
            role: "Systems & Algorithmic Problem Solving",
            organization: "Java · C++ · Python Practice",
            period: "Ongoing",
            summary: "Designing clean, time- and memory-efficient algorithms across graphs, trees, dynamic programming, and core backend logic.",
            tags: [
                "Java",
                "C++",
                "Python",
                "DSA"
            ]
        },
        {
            id: "exp-3",
            role: "Collaborative Git Workflows & Custom Hosting",
            organization: "Version Control & Infrastructure",
            period: "Ongoing",
            summary: "Enforcing structured branching, pull request reviews, merge conflict resolution, and self-hosted web deployments with custom DNS routing.",
            tags: [
                "Git",
                "GitHub PRs",
                "Linux",
                "Web Hosting"
            ]
        }
    ],
    settings: {
        theme: "cryo",
        enable3D: true,
        reducedMotion: false,
        showStarterBanner: true
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09gyf1x2qw-_6._.js.map