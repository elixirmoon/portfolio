(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/three/SkillConstellation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillConstellation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e51d7528.esm.js [app-client] (ecmascript) <export F as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CATEGORY_ANGLES = {
    Languages: 0,
    "Frontend & Motion": Math.PI * 0.5,
    "Systems & CS": Math.PI,
    "DevOps & Tooling": Math.PI * 1.5
};
function ConstellationGraph({ skills, selectedSkillId, activeCategory, onSelectSkill, accent, accentSecondary, reducedMotion }) {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ConstellationGraph.useMemo[nodes]": ()=>{
            const grouped = {
                Languages: [],
                "Frontend & Motion": [],
                "Systems & CS": [],
                "DevOps & Tooling": []
            };
            skills.forEach({
                "ConstellationGraph.useMemo[nodes]": (s)=>{
                    grouped[s.category]?.push(s);
                }
            }["ConstellationGraph.useMemo[nodes]"]);
            const result = [];
            Object.keys(grouped).forEach({
                "ConstellationGraph.useMemo[nodes]": (cat)=>{
                    const items = grouped[cat];
                    const baseAngle = CATEGORY_ANGLES[cat];
                    const hubRadius = 1.65;
                    const hubPos = [
                        Math.cos(baseAngle) * hubRadius,
                        baseAngle % Math.PI === 0 ? 0.35 : -0.35,
                        Math.sin(baseAngle) * hubRadius
                    ];
                    items.forEach({
                        "ConstellationGraph.useMemo[nodes]": (skill, idx)=>{
                            const spread = items.length > 1 ? (idx / (items.length - 1) - 0.5) * 1.2 : 0;
                            const angle = baseAngle + spread;
                            const radius = 3.1 + idx % 2 * 0.55;
                            const yOffset = (idx % 3 - 1) * 0.72 + hubPos[1] * 0.4;
                            result.push({
                                skill,
                                hubPos,
                                pos: [
                                    Math.cos(angle) * radius,
                                    yOffset,
                                    Math.sin(angle) * radius
                                ]
                            });
                        }
                    }["ConstellationGraph.useMemo[nodes]"]);
                }
            }["ConstellationGraph.useMemo[nodes]"]);
            return result;
        }
    }["ConstellationGraph.useMemo[nodes]"], [
        skills
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"])({
        "ConstellationGraph.useFrame": (_, delta)=>{
            if (groupRef.current && !reducedMotion) {
                groupRef.current.rotation.y += Math.min(delta, 0.05) * 0.09;
            }
        }
    }["ConstellationGraph.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("octahedronGeometry", {
                        args: [
                            0.38,
                            0
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: accent,
                        emissive: accent,
                        emissiveIntensity: 0.8,
                        wireframe: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/SkillConstellation.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            nodes.map(({ skill, pos, hubPos })=>{
                const isSelected = skill.id === selectedSkillId;
                const isCategoryMatch = activeCategory === "All" || skill.category === activeCategory;
                const nodeColor = isSelected ? "#FFFFFF" : isCategoryMatch ? accent : "#475569";
                const lineOpacity = isSelected ? 0.85 : isCategoryMatch ? 0.28 : 0.08;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            points: [
                                [
                                    0,
                                    0,
                                    0
                                ],
                                hubPos,
                                pos
                            ],
                            color: isSelected ? accentSecondary : accent,
                            lineWidth: isSelected ? 1.8 : 1,
                            transparent: true,
                            opacity: lineOpacity
                        }, void 0, false, {
                            fileName: "[project]/src/components/three/SkillConstellation.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: pos,
                            onClick: (e)=>{
                                e.stopPropagation();
                                onSelectSkill(skill.id);
                            },
                            onPointerOver: ()=>{
                                document.body.style.cursor = "pointer";
                            },
                            onPointerOut: ()=>{
                                document.body.style.cursor = "default";
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                                    args: [
                                        isSelected ? 0.21 : 0.14,
                                        20,
                                        20
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/three/SkillConstellation.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: nodeColor,
                                    emissive: isSelected ? accentSecondary : accent,
                                    emissiveIntensity: isSelected ? 1.3 : isCategoryMatch ? 0.55 : 0.12
                                }, void 0, false, {
                                    fileName: "[project]/src/components/three/SkillConstellation.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                                    position: [
                                        0,
                                        0.28,
                                        0
                                    ],
                                    center: true,
                                    distanceFactor: 8,
                                    style: {
                                        pointerEvents: "none"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `whitespace-nowrap rounded-full border px-2 py-0.5 text-[10px] font-mono tracking-tight transition-all ${isSelected ? "border-sky-300 bg-slate-900/95 text-white shadow-lg" : isCategoryMatch ? "border-slate-700/80 bg-slate-950/80 text-slate-200" : "border-slate-800/40 bg-slate-950/40 text-slate-500"}`,
                                        children: skill.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/three/SkillConstellation.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/three/SkillConstellation.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    ]
                }, skill.id, true, {
                    fileName: "[project]/src/components/three/SkillConstellation.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/three/SkillConstellation.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(ConstellationGraph, "vNdMcCftL6hB1pbnseYmVRlOR6E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e51d7528$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ConstellationGraph;
function SkillConstellation(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[420px] w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-4 top-3 z-10 flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-[11px] font-mono text-slate-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-sky-400 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    "3D Skill Graph · Drag to orbit · Click any node"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/SkillConstellation.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        2.2,
                        7.6
                    ],
                    fov: 45
                },
                dpr: [
                    1,
                    2
                ],
                gl: {
                    antialias: true,
                    alpha: true
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.7
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            6,
                            6,
                            6
                        ],
                        intensity: 2,
                        color: props.accent
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            -6,
                            -4,
                            -4
                        ],
                        intensity: 1.2,
                        color: props.accentSecondary
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConstellationGraph, {
                        ...props
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                        enableZoom: false,
                        enablePan: false,
                        autoRotate: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/SkillConstellation.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/SkillConstellation.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/three/SkillConstellation.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_c1 = SkillConstellation;
var _c, _c1;
__turbopack_context__.k.register(_c, "ConstellationGraph");
__turbopack_context__.k.register(_c1, "SkillConstellation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/SkillConstellation.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/three/SkillConstellation.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_three_SkillConstellation_tsx_13lh_pshszdcu._.js.map