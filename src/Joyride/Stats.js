import Stats from "stats.js";
export const makeStats = () => {
    const stats = new Stats();
    // just use the default
    // stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
    return stats;
}
export const beginStats = (stats) => { stats.begin(); }
export const endStats = (stats) => { stats.end(); }