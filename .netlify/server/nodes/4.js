import * as server from '../entries/pages/_slug_/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.HwvvBBpT.js","_app/immutable/chunks/scheduler.BA4jtMEb.js","_app/immutable/chunks/index.MnhX1xUw.js","_app/immutable/chunks/AboutUs.svelte_svelte_type_style_lang.Ca824AN8.js","_app/immutable/chunks/entry.D8f4ubcG.js"];
export const stylesheets = ["_app/immutable/assets/AboutUs.DWmqqvYG.css"];
export const fonts = [];
