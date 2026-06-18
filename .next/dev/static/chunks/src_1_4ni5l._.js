(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const links = [
    {
        href: '#',
        label: 'Início'
    },
    {
        href: '#about',
        label: 'Quem sou'
    },
    {
        href: '#skills',
        label: 'Tecnologias'
    },
    {
        href: '#projects',
        label: 'Projetos'
    },
    {
        href: '#contacts',
        label: 'Contato'
    }
];
function MobileNav({ onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        id: "mobile-nav",
        className: "flex flex-col justify-center items-center p-4 animate-[fade_1s] fixed top-[53%] left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 text-center w-[99%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-mint text-center mb-4 mt-4 text-[37px] hover:cursor-pointer hover:text-blue transition-colors duration-[350ms]",
                children: '< Bem vindo ao meu PortFólio />'
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MobileNav.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "list-none",
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "my-6 mx-4 hover:scale-110 transition-transform duration-300 cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: onClose,
                            className: "no-underline text-[32px] text-mint hover:text-blue transition-colors duration-300",
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/MobileNav.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, link.href, false, {
                        fileName: "[project]/src/components/layout/MobileNav.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/layout/MobileNav.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/MobileNav.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/MobileNav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const navLinks = [
    {
        icon: 'ic:round-start',
        href: '#',
        label: 'Início'
    },
    {
        icon: 'gg:profile',
        href: '#about',
        label: 'Quem sou'
    },
    {
        icon: 'mdi:work-outline',
        href: '#experience',
        label: 'Experiências'
    },
    {
        icon: 'teenyicons:computer-outline',
        href: '#skills',
        label: 'Tecnologias'
    },
    {
        icon: 'material-symbols:folder-outline',
        href: '#projects',
        label: 'Projetos'
    },
    {
        icon: 'mynaui:telephone-call',
        href: '#contacts',
        label: 'Contato'
    }
];
function Navbar() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setMenuOpen((prev)=>!prev);
    const closeMenu = ()=>setMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/65 backdrop-blur-sm z-40 animate-[fade_1s] lg:hidden",
                onClick: closeMenu
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed w-full lg:w-[19%] z-50 lg:z-0 lg:h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "nav",
                        className: "flex flex-row justify-between items-center px-[15px] py-3 bg-grey text-navy lg:flex-col lg:justify-center lg:items-center lg:h-screen lg:w-full lg:py-[10px] lg:px-[6px] lg:shadow-[2px_-2px_18px_rgba(0,0,0,0.36)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center name-div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/perfil-blue3-Photoroom.jpg",
                                        alt: "Carlos Eduardo",
                                        width: 120,
                                        height: 120,
                                        className: "hidden lg:flex rounded-[49%] border-2 border-blue-mid shadow-[2px_2px_7px_rgba(0,0,0,0.55)] w-[60%] max-w-[380px] max-h-[380px] mx-auto hover:scale-[1.02] transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[1.5em] font-semibold lg:hidden hover:text-blue transition-colors duration-500 cursor-pointer",
                                        children: "Carlos Eduardo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "desktop-nav hidden lg:flex flex-col mr-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-none text-center mt-7",
                                        children: [
                                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex flex-row items-center justify-center gap-[13px] hover:text-blue group",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: link.href,
                                                        className: "no-underline text-black py-4 text-[18px] font-medium group-hover:text-blue transition-colors duration-300",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this)
                                                }, link.href, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "ml-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    href: "/images/cv_CARLOS-EDUARDO.pdf",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "rounded-[10px] text-mint bg-navy px-[1.25em] py-[0.75em] my-[10px] text-[15px] hover:scale-110 transition-transform duration-300 cursor-pointer",
                                                        children: "DOWNLOAD CV"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center justify-center my-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://wa.me/5513974022220",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-whatsapp-40.png",
                                                    alt: "whatsapp",
                                                    className: "w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://linkedin.com/in/carlos-eduardo-da-silva-050403235",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-linkedin-40.png",
                                                    alt: "linkedin",
                                                    className: "w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://github.com/carloseduardo-silva",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-github-40.png",
                                                    alt: "github",
                                                    className: "w-[28px] h-[29px] mx-[10px] mt-[6px] hover:scale-110 transition-transform cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-center pt-[3px] lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        id: "icons-nav",
                                        className: "hidden sm:flex",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://wa.me/5513974022220",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-whatsapp-40.png",
                                                    alt: "whatsapp",
                                                    className: "w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://linkedin.com/in/carlos-eduardo-da-silva-050403235",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-linkedin-40.png",
                                                    alt: "linkedin",
                                                    className: "w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                target: "_blank",
                                                rel: "noreferrer",
                                                href: "https://github.com/carloseduardo-silva",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/icons8-github-40.png",
                                                    alt: "github",
                                                    className: "w-[22px] h-[23px] mx-[7px] mt-[6px] hover:scale-110 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    !menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: toggleMenu,
                                        className: "material-symbols-outlined text-[34px] font-semibold ml-[19px] cursor-pointer",
                                        children: "menu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: toggleMenu,
                                        className: "material-symbols-outlined text-[34px] font-semibold ml-[19px] cursor-pointer",
                                        children: "close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: closeMenu
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 125,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$ParticlesProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/react/ParticlesProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/slim/browser/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                width: 800
            }
        },
        color: {
            value: '#0b2545'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: {
                min: 1,
                max: 5
            }
        },
        links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
                default: 'out'
            }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            onClick: {
                enable: true,
                mode: 'push'
            },
            resize: {
                enable: true
            }
        },
        modes: {
            repulse: {
                distance: 200
            },
            push: {
                quantity: 4
            }
        }
    },
    detectRetina: true
};
function ParticlesCanvas() {
    _s();
    const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ParticlesCanvas.useCallback[init]": async (engine)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$slim$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlim"])(engine);
        }
    }["ParticlesCanvas.useCallback[init]"], []);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticlesCanvas.useEffect": ()=>{
            setShow(true);
        }
    }["ParticlesCanvas.useEffect"], []);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$ParticlesProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParticlesProvider"], {
        init: init,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            id: "tsparticles",
            className: "absolute inset-0 -z-0",
            options: particlesOptions
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ParticlesCanvas, "7KdkyRKR9xvPc5jeDdmzU9SIvAU=");
_c = ParticlesCanvas;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "particles-js",
        className: "flex flex-col justify-center items-center h-[97vh] md:h-screen px-5 pt-8 md:pt-0 relative w-[93%] whitespace-nowrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticlesCanvas, {}, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center absolute gap-[2px] z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[1em] md:text-[1.5em] font-normal text-navy",
                        children: "Oi, eu sou o Kadu!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "typing-animation text-center text-[1.85em] md:text-[3.85em] text-navy pr-1",
                        children: "Desenvolvedor Front-End"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "https://linktr.ee/carlos.eduardo.silva",
                        className: "mt-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "looping-border-button px-[1.5em] py-[1.1em] rounded-[20px] text-navy hover:scale-110 hover:text-blue transition-transform duration-[400ms] cursor-pointer",
                            children: "Contate-me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#about",
                className: "slide-animation mr-[33px] md:mr-[25px] z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined text-[40px] font-normal text-navy",
                    children: "keyboard_double_arrow_down"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "ParticlesCanvas");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollReveal({ children, className = '' }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>setVisible(entry.isIntersecting)
            }["ScrollReveal.useEffect"], {
                threshold: 0.1
            });
            observer.observe(el);
            return ({
                "ScrollReveal.useEffect": ()=>observer.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `transition-all duration-700 ${visible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm'} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScrollReveal.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/experiences.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experiences",
    ()=>experiences
]);
const experiences = [
    {
        id: 'ipr',
        company: 'Instituto Pedro Ruiz',
        role: 'Desenvolvedor Front-End',
        period: 'Jul 2025 - Atualmente',
        location: 'Instituto Pedro Ruiz',
        description: 'Operar no desenvolvimento do CRM próprio do instituto, fui responsável por todo o desenvolvimento do Front-End do sistema desde o Design UI|UX das telas até a produção e integração com as APIs do backend. Além da manutenção dos outros sistemas web utilizados dentro da empresa, como o site institucional e landing pages.'
    },
    {
        id: 'prefeitura',
        company: 'Prefeitura Municipal de Santo André/SP',
        role: 'Desenvolvedor Frontend',
        period: 'Mai 2024 - Atualmente',
        location: 'Prefeitura Municipal de Santo André',
        description: ' Responsável por operar na criação do conteúdo, estilos, layout, design interativo, funcionalidades e integrações com API dos Sistemas Web da Prefeitura de Santo André. Suporte e manutenção de bugs dos sites apresentados pelos setores da saúde, RH, segurança, frotas, além da vivência e prática atuando sob Metodologias Ágeis (SCRUM e KANBAN).'
    },
    {
        id: 'endolife',
        company: 'Endolife HealthTech',
        role: 'Web Developer e UI Designer',
        period: 'Fev 2024 - Ago 2024',
        location: 'Endolife HealthTech',
        description: 'Webdesign e desenvolvimento de Site Intitucional + Landing Pages de alta conversão para empresa, incluindo a criação do conteúdo, estilos, interatividades, layout e design não só interativo do site, mas também responsivo sendo adaptativo para tablets e celulares.  '
    },
    {
        id: 'digital-max',
        company: 'Digital Max',
        role: 'Auxiliar de Informática',
        period: 'Jul 2019 - Dez 2019',
        location: 'Digital Max',
        description: 'Primeira experiência profissional na área, onde era responsável por auxiliar os novos alunos nas aulas de informática e computação, preparação do material das aulas de informática e suporte aos professores durante os plantões de dúvidas. Tive contato com tecnologias como: Pacote Office, Excel, PowerPoint, Word, Sistema Operacional Linux'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/experiences.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Experience() {
    _s();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ipr');
    const active = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].find((e)=>e.id === activeId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "experience",
            className: "flex flex-col items-center justify-center p-8 mt-16 lg:w-[90%] xl:w-[75%] xl:max-w-[1400px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[2.3em] text-navy mb-[5px]",
                    children: "Experiências"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Experience.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col xl:flex-row mt-12 xl:mt-[4.25rem] gap-0 xl:gap-[30px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[4px] min-w-[265px] xl:px-0 px-5 pb-[25px]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experiences$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActiveId(exp.id),
                                    className: `px-[1.35rem] py-[1.35rem] bg-[#d4d4d4] cursor-pointer ${activeId === exp.id ? 'border-l-[3px] border-navy' : ''}`,
                                    children: exp.company
                                }, exp.id, false, {
                                    fileName: "[project]/src/components/sections/Experience.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Experience.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-5 mt-6 xl:mt-[0.1rem] px-[6px] xl:px-5 xl:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col xl:flex-row xl:justify-between xl:items-center mb-0 xl:mb-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[24px] text-navy",
                                            children: active.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Experience.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[17.3px]",
                                            children: active.period
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Experience.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Experience.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-[20px]",
                                    children: active.location
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Experience.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[18px] xl:text-[18.8px]",
                                    children: active.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Experience.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Experience.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Experience.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Experience.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Experience.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Experience, "+SEAeWUYzEAEdU0QR8GJU25b9D0=");
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ProjectCard({ project, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center m-4 mb-[5px] cursor-pointer group hover:scale-110 transition-transform duration-[550ms]",
        onClick: ()=>onClick(project),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-[-16.85px] relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project.thumbnail,
                        alt: project.title,
                        className: "w-[300px] h-[190px] border border-blue object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProjectCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[106px] text-mint font-bold text-[21px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: project.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/ProjectCard.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProjectCard.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ProjectCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "opacity-0 group-hover:opacity-100 group-hover:flex hidden bg-navy px-[1.06rem] pt-[0.85rem] pb-4 relative bottom-[15px] w-[90%] items-center justify-between rounded-b-[2rem] animate-[showDown_0.55s_forwards]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-mint text-[13px]",
                        children: project.dateLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProjectCard.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "no-underline px-[10px] py-2 border border-blue text-mint rounded-[10px] text-[13px] hover:text-blue cursor-pointer",
                        children: "Ver Mais"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/ProjectCard.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ProjectCard.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ProjectCard.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ProjectModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ProjectModal({ project, onClose, onPrev, onNext }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            document.body.style.overflow = 'hidden';
            return ({
                "ProjectModal.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["ProjectModal.useEffect"];
        }
    }["ProjectModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectModal.useEffect": ()=>{
            const handler = {
                "ProjectModal.useEffect.handler": (e)=>{
                    if (e.key === 'Escape') onClose();
                    if (e.key === 'ArrowLeft' && onPrev) onPrev();
                    if (e.key === 'ArrowRight' && onNext) onNext();
                }
            }["ProjectModal.useEffect.handler"];
            window.addEventListener('keydown', handler);
            return ({
                "ProjectModal.useEffect": ()=>window.removeEventListener('keydown', handler)
            })["ProjectModal.useEffect"];
        }
    }["ProjectModal.useEffect"], [
        onClose,
        onPrev,
        onNext
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/65 backdrop-blur-sm z-40 animate-[fade_1s]",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            onPrev && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: onPrev,
                className: "hidden lg:block fixed top-1/2 left-[4%] -translate-y-1/2 z-50 text-[4.5rem] text-mint cursor-pointer material-symbols-outlined hover:text-blue-mid transition-colors duration-300",
                children: "arrow_back_ios"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center max-h-[660px] w-[76%] p-8 gap-[1.85rem] bg-grey rounded-2xl animate-[fade_1s] overflow-y-auto text-navy [scrollbar-width:thin]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-center w-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: onClose,
                                className: "absolute right-0 top-0 text-[28px] cursor-pointer material-symbols-outlined hover:scale-103",
                                children: "close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center xl:flex-row xl:items-start",
                        children: [
                            project.mediaType === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: project.mediaSrc,
                                alt: project.title,
                                className: "w-full md:w-[80%] xl:w-[530px] xl:h-[410px] object-cover mt-[10px] mr-[3em] ml-[0.75em] mb-[10px]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                controls: true,
                                className: "w-full md:w-[80%] xl:w-[520px] xl:h-[90%] mt-[50px] mr-[3em] ml-[0.75em] mb-[10px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: project.mediaSrc,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-[10px] xl:mt-0 xl:mx-0 mx-[3em]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "my-4 font-semibold",
                                        children: "Informações do projeto:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] md:text-[13px] lg:text-[15px]",
                                        children: project.info
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "my-4 font-semibold",
                                        children: "Detalhes do Projeto:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-none text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "pb-2 mb-4 border-b border-navy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold",
                                                        children: "Tecnologias:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "inline text-[12px] md:text-[13px] lg:text-[15px]",
                                                        children: project.technologies
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "pb-2 mb-4 border-b border-navy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold",
                                                        children: "Data:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "inline text-[12px] md:text-[13px] lg:text-[15px]",
                                                        children: project.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "pb-2 mb-4 border-b border-navy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "inline mr-[5px] text-[12px] md:text-[13px] lg:text-[15px] font-bold",
                                                        children: "URL:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        href: project.url,
                                                        className: "text-blue-dark2 text-[12px] md:text-[13px] lg:text-[15px]",
                                                        children: project.urlLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ProjectModal.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            onNext && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: onNext,
                className: "hidden lg:block fixed top-1/2 right-[1%] -translate-y-1/2 z-50 text-[4.5rem] text-mint cursor-pointer material-symbols-outlined hover:text-blue-mid transition-colors duration-300",
                children: "arrow_forward_ios"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ProjectModal.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectModal, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = ProjectModal;
var _c;
__turbopack_context__.k.register(_c, "ProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "highlightProjects",
    ()=>highlightProjects,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: '3',
        title: 'Controle de Frotas',
        date: 'Jan, 2025',
        dateLabel: 'Janeiro de 2025',
        thumbnail: '/images/frotas-projectB.png',
        info: 'Sistema administrativo para o gerenciamento de Controle de Frotas da Prefeitura Municipal de Santo André, a aplicação é responsável pelo cadastro e edição de motoristas e veículos, contempla um sistema de agendamentos de viagens operadas e admitidas por um administrador, além de um sistema de relatórios e gráficos para o acompanhamento do desempenho da frota. O sistema foi desenvolvido com o intuito de otimizar o tempo e a eficiência dos processos administrativos das frotas da prefeitura.',
        technologies: 'HTML5, CSS3, JavaScript, ASP.NET, C#, SQL Server, Bootstrap, Python, FASTAPI',
        url: 'http://egovdes/controlefrotas/admin/',
        urlLabel: 'http://egovdes/controlefrotas/admin/ - (ACESSO RESTRINGINDO POR VPN)',
        mediaType: 'image',
        mediaSrc: '/images/projects-frotas.png',
        highlight: true
    },
    {
        id: '4',
        title: 'Apostila Virtual - Adélia',
        date: 'Mar, 2025',
        dateLabel: 'Março de 2025',
        thumbnail: '/images/fundo-adelia.png',
        info: ' Site Instituicional Educativo para o Colégio Adelia, aplicação desenvolvida a fim de disponibilizar um ambiente virtual completo e interativo para otimizar o aprendizado e o acesso aos materiais didáticos. O sistema conta com uma apostila virtual, materiais complementares como vídeos e pdfs, resumos e mapa mentais, além de ser 100% responsivo otimizado para qualquer tipo de dispositivo. A aplicação já está em uso e é acessada localmente por diversos alunos.',
        technologies: 'HTML5, CSS3, JavaScript, Next.js, TailwindCSS, Python',
        url: 'https://deploy-apostila-adelia.vercel.app/apostila/POO5',
        urlLabel: 'https://deploy-apostila-adelia.vercel.app/apostila/POO5',
        mediaType: 'image',
        mediaSrc: '/images/projects-adelia.png',
        highlight: true
    },
    {
        id: '5',
        title: 'ASC.COSTA Engenharia',
        date: 'Mai, 2024',
        dateLabel: 'Maio de 2024',
        thumbnail: '/images/ascosta-black.png',
        info: 'Landing Page responsiva para a Empresa de Reforma e Construção ASC.Costa Engenharia. Aplicação desenvolvida a fim de demonstrar os serviços realizados pela empreitera, legitimar a qualidade do produto e prospectar novos clientes. A página traz um destaque para o serviço de lavagem de fachada onde há maior detalhamento e destaque do processo.',
        technologies: 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva',
        url: 'https://www.ascostaengenharia.com.br/',
        urlLabel: 'https://www.ascostaengenharia.com.br/',
        mediaType: 'image',
        mediaSrc: '/images/projects-ascosta.png',
        highlight: false
    },
    {
        id: '7',
        title: 'Endolife',
        date: 'Ago, 2024',
        dateLabel: 'Setembro de 2024',
        thumbnail: '/images/endolife-black.png',
        info: 'Site institucional para a empresa healthtech Endolife, a principal finalidade de um site instituicional é informar o cliente/usuário sobre quais são os principais serviços, vantagens e confiabilidade que ele pode ter em determinado produto. Fui responsável pela criação dos estilos, interatividades, banners, além de idealizar o webdesign das páginas.',
        technologies: 'HTML5, CSS3, JavaScript, WordPress, Elementor, Canva',
        url: 'https://endolife.app/',
        urlLabel: 'https://endolife.app/',
        mediaType: 'image',
        mediaSrc: '/images/projects-endolife.png',
        highlight: true
    },
    {
        id: '8',
        title: 'PUMP GYM',
        date: 'Nov, 2023',
        dateLabel: 'Novembro de 2023',
        thumbnail: '/images/pump-projectB.png',
        info: 'Projeto de Sistema Web responsivo para uma Academia. Aplicação desenvolvida afim de consolidar meus conhecimentos em React.js, como React Hooks, Context API, Redux, Styled-Components, Ciclo de Vida, entre outros conceitos. O projeto conta com páginas interativas e reponsivas para navegação dos clietes da academia, exibindo o seus serviços como: modalidades, unidades próximas (consultas baseadas no cep utilizando BrasilAPI), planos e horários.',
        technologies: 'HTML5, CSS3, JavaScript, React.js, Firebase, Canva',
        url: 'https://carloseduardo-silva.github.io/pump-gym/',
        urlLabel: 'https://carloseduardo-silva.github.io/pump-gym/',
        mediaType: 'image',
        mediaSrc: '/images/projects-pumpgyn.png',
        highlight: true
    },
    {
        id: '10',
        title: "Barbearia Kadu Corte's",
        date: 'Jun, 2023',
        dateLabel: 'Junho de 2023',
        thumbnail: '/images/barbearia-projectB.png',
        info: "Projeto desenvolvido para Barbearia Kadu Corte's residente em Guarujá-SP, a qual solicitou um sistema web responsivo para aplicações mobiles e que fosse interativo para os clientes. O sistema conta tanto com uma ClientPage atrativa a qual expoem para os usuários as informações da barbearia e fornece um sistema de agendamento completo com validações, quanto uma AdminPage restringida por uma validação de login e senha, que armazena os dados dos clientes agendados, horarios marcados e muito mais.",
        technologies: 'HTML5, CSS3, JavaScript, Redis, Canva, MySql',
        url: 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html',
        urlLabel: 'https://barbearia-kadu-cortes-client.vercel.app/html/index.html',
        mediaType: 'image',
        mediaSrc: '/images/projects-barbeariakadu.png',
        highlight: true
    },
    {
        id: '11',
        title: 'Restaurante Bucéfalus',
        date: 'Ago, 2023',
        dateLabel: 'Agosto de 2023',
        thumbnail: '/images/saboroso-projectB.png',
        info: 'Projeto de um website para o Restaurante Bucéfalus residente em Guarujá-SP, desenvolvido utilizando em sua base JavaScript, Embedded JavaScript em conjunto com o Boostrap. Há também a conexão com o banco de dados MySql, suportando tanto uma ClientPage regida pelo sistema de rotas CRUD, quanto uma AdminPage (dashboard) com restrição de acesso por usuário e senha.',
        technologies: 'HTML5, CSS3, JavaScript, Redis, Canva, MySql',
        url: 'https://restaurente-bucefalus-client.vercel.app/html/index.html',
        urlLabel: 'https://restaurente-bucefalus-client.vercel.app/html/index.html',
        mediaType: 'image',
        mediaSrc: '/images/projects-bucefalus.png',
        highlight: true
    },
    {
        id: '12',
        title: 'WhatsApp Clone',
        date: 'Jul, 2023',
        dateLabel: 'Julho 2023',
        thumbnail: '/images/whatsapp-projectB.png',
        info: 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do Whatsapp, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript e algumas libs como: APIs de audio, camera e video, Path, Navigator, etc.',
        technologies: 'HTML5, CSS3, JavaScript, Firebase',
        url: 'https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone',
        urlLabel: 'REPOSITÓRIO - https://github.com/carloseduardo-silva/curso-javascript-projeto-whatsapp-clone',
        mediaType: 'video',
        mediaSrc: '/videos/whatsappProjectVideo.mp4',
        highlight: false
    },
    {
        id: '13',
        title: 'Manage Users',
        date: 'Jun, 2023',
        dateLabel: 'Maio de 2023',
        thumbnail: '/images/usuarios-projectB.png',
        info: 'Projeto desenvolvido essencialmente com JavaScript, afim de otimizar meus conhecimentos em sistemas de routes CRUD regido por uma API REST que consome dados do Banco de Dados Nedb, trazendo assincronidade ao website.',
        technologies: 'HTML5, CSS3, JavaScript, Nedb',
        url: 'https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi',
        urlLabel: 'REPOSITÓRIO - https://github.com/carloseduardo-silva/curso-javascript-projeto-usuarios-restapi',
        mediaType: 'video',
        mediaSrc: '/videos/userdashboardProjectVideo.mp4',
        highlight: false
    },
    {
        id: '14',
        title: 'DropBox Clone',
        date: 'Jun, 2023',
        dateLabel: 'Junho de 2023',
        thumbnail: '/images/dropbox-projectB.png',
        info: 'Projeto desenvolvido durante o curso de JavaScript Avançado da HCODEBR, o qual nos trouxe o desenvolvimento de um clone do DropBox, contanto com todas as suas funcionalidades programadas através do banco de dados Firebase(FireStore + RealTimeDataBase), em conjunto com o JavaScript, por meio do sistema de routes CRUD e algumas libs como: Formidable, Path, Fs, etc.',
        technologies: 'HTML5, CSS3, JavaScript, Firebase',
        url: 'https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone',
        urlLabel: 'REPOSITÓRIO - https://github.com/carloseduardo-silva/curso-javascript-projeto-dropbox-clone',
        mediaType: 'video',
        mediaSrc: '/videos/dropboxCloneProjectVideo.mp4',
        highlight: false
    },
    {
        id: '15',
        title: 'NOVOS PROJETOS EM DESENVOLVIMENTO',
        date: '2025',
        dateLabel: '2025 - Próximos Projetos',
        thumbnail: '/images/perfil-blue2.jpg',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta eligendi earum quas maxime nam asperiores dolor nesciunt odio quasi aspernatur natus voluptatum, quae dignissimos fugiat dolorum qui nemo sit doloribus.',
        technologies: '...',
        url: '#projects',
        urlLabel: 'Voltar',
        mediaType: 'image',
        mediaSrc: '/images/perfil-blue3-Photoroom.jpg',
        highlight: false
    }
];
const highlightProjects = projects.filter((p)=>p.highlight);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Projects() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('highlights');
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const displayedProjects = tab === 'highlights' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightProjects"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"];
    const currentIndex = selected ? displayedProjects.findIndex((p)=>p.id === selected.id) : -1;
    const handlePrev = currentIndex > 0 ? ()=>setSelected(displayedProjects[currentIndex - 1]) : null;
    const handleNext = currentIndex < displayedProjects.length - 1 ? ()=>setSelected(displayedProjects[currentIndex + 1]) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "projects",
            className: "flex flex-col items-center justify-center p-4 lg:mt-[11.4em] lg:mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[2.3em] text-navy mb-7",
                    children: "Projetos"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-row items-center justify-center gap-8 text-navy mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setTab('highlights'),
                            className: `px-3 py-[6px] cursor-pointer hover:text-blue-mid transition-colors ${tab === 'highlights' ? 'border-b-[2.2px] border-blue-mid' : ''}`,
                            children: "Destaques"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Projects.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setTab('all'),
                            className: `px-3 py-[6px] cursor-pointer hover:text-blue-mid transition-colors ${tab === 'all' ? 'border-b-[2.2px] border-blue-mid' : ''}`,
                            children: "Todos"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Projects.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row items-center justify-center flex-wrap",
                    children: displayedProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            project: project,
                            onClick: setSelected
                        }, project.id, false, {
                            fileName: "[project]/src/components/sections/Projects.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    project: selected,
                    onClose: ()=>setSelected(null),
                    onPrev: handlePrev,
                    onNext: handleNext
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Projects.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Projects.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Projects.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Projects, "J3KPFawQcD7eQ6B8MncWPbAhJn4=");
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1_4ni5l._.js.map