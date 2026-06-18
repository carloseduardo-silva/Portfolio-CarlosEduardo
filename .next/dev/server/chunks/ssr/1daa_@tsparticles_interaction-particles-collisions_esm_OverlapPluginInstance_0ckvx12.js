module.exports = [
"[project]/node_modules/@tsparticles/interaction-particles-collisions/esm/OverlapPluginInstance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OverlapPluginInstance",
    ()=>OverlapPluginInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/engine/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$MathUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tsparticles/engine/esm/Utils/MathUtils.js [app-ssr] (ecmascript)");
;
const minRetries = 0;
class OverlapPluginInstance {
    #container;
    constructor(container){
        this.#container = container;
    }
    checkParticlePosition(particle, position, tryCount) {
        return !this.#hasOverlaps(particle, position, tryCount);
    }
    #hasOverlaps(particle, pos, tryCount) {
        const collisionsOptions = particle.options.collisions;
        if (!collisionsOptions?.enable) {
            return false;
        }
        const overlapOptions = collisionsOptions.overlap;
        if (overlapOptions.enable) {
            return false;
        }
        const retries = overlapOptions.retries;
        if (retries >= minRetries && tryCount > retries) {
            throw new Error(`Particle is overlapping and can't be placed`);
        }
        return !!this.#container.particles.find((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tsparticles$2f$engine$2f$esm$2f$Utils$2f$MathUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistance"])(pos, p.position) < particle.getRadius() + p.getRadius());
    }
}
}),
];

//# sourceMappingURL=1daa_%40tsparticles_interaction-particles-collisions_esm_OverlapPluginInstance_0ckvx12.js.map