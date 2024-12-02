import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.DQti6yuK.js","_app/immutable/chunks/scheduler.BA4jtMEb.js","_app/immutable/chunks/index.MnhX1xUw.js","_app/immutable/chunks/AboutUs.svelte_svelte_type_style_lang.Ca824AN8.js","_app/immutable/chunks/entry.D8f4ubcG.js","_app/immutable/chunks/logo.CSkgXBC3.js","_app/immutable/chunks/stores.0-1WzQrp.js"];
export const stylesheets = ["_app/immutable/assets/AboutUs.DWmqqvYG.css"];
export const fonts = [];
