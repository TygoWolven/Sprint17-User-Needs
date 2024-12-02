import { c as create_ssr_component, g as compute_rest_props, h as spread, i as escape_attribute_value, d as escape, j as escape_object, v as validate_component, m as missing_component, b as add_attribute } from "./ssr.js";
import "./AboutUs.svelte_svelte_type_style_lang.js";
const css$1 = {
  code: "a.svelte-9by7gm{display:flex;align-items:center;gap:0.5rem;text-decoration:none;color:var(--clr);font-size:var(--font-size);white-space:nowrap;filter:var(--filter)}span.svelte-9by7gm{display:flex;align-items:center}",
  map: `{"version":3,"file":"Link.svelte","sources":["Link.svelte"],"sourcesContent":["<script>\\r\\n  export let color = ''\\r\\n  export let href = ''\\r\\n  export let title = ''\\r\\n  export let icon = null\\r\\n  export let iconWidth = '24px'\\r\\n  export let iconHeight = '24px'\\r\\n  export let iconColor = ''\\r\\n  export let filter = ''\\r\\n  export let fontSize = ''\\r\\n<\/script>\\r\\n\\r\\n<a\\r\\n  data-sveltekit-reload\\r\\n  {href}\\r\\n  style=\\"--clr: {color}; --font-size: {fontSize}; --filter: {filter};\\"\\r\\n  {...$$restProps}\\r\\n>\\r\\n  {title}\\r\\n  {#if icon}\\r\\n    <span>\\r\\n      <svelte:component this={icon} width={iconWidth} height={iconHeight} svgColor={iconColor} />\\r\\n    </span>\\r\\n  {/if}\\r\\n  <slot></slot>\\r\\n</a>\\r\\n\\r\\n<style>\\r\\n  a {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 0.5rem;\\r\\n    text-decoration: none;\\r\\n    color: var(--clr);\\r\\n    font-size: var(--font-size);\\r\\n    white-space: nowrap;\\r\\n    filter: var(--filter);\\r\\n  }\\r\\n\\r\\n  span {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,eAAE,CACA,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,MAAM,CACX,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,KAAK,CAAC,CACjB,SAAS,CAAE,IAAI,WAAW,CAAC,CAC3B,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,QAAQ,CACtB,CAEA,kBAAK,CACH,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf"}`
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "href",
    "title",
    "icon",
    "iconWidth",
    "iconHeight",
    "iconColor",
    "filter",
    "fontSize"
  ]);
  let { color = "" } = $$props;
  let { href = "" } = $$props;
  let { title = "" } = $$props;
  let { icon = null } = $$props;
  let { iconWidth = "24px" } = $$props;
  let { iconHeight = "24px" } = $$props;
  let { iconColor = "" } = $$props;
  let { filter = "" } = $$props;
  let { fontSize = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.iconWidth === void 0 && $$bindings.iconWidth && iconWidth !== void 0) $$bindings.iconWidth(iconWidth);
  if ($$props.iconHeight === void 0 && $$bindings.iconHeight && iconHeight !== void 0) $$bindings.iconHeight(iconHeight);
  if ($$props.iconColor === void 0 && $$bindings.iconColor && iconColor !== void 0) $$bindings.iconColor(iconColor);
  if ($$props.filter === void 0 && $$bindings.filter && filter !== void 0) $$bindings.filter(filter);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0) $$bindings.fontSize(fontSize);
  $$result.css.add(css$1);
  return `<a${spread(
    [
      { "data-sveltekit-reload": true },
      { href: escape_attribute_value(href) },
      {
        style: "--clr: " + escape(color, true) + "; --font-size: " + escape(fontSize, true) + "; --filter: " + escape(filter, true) + ";"
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-9by7gm" }
  )}>${escape(title)} ${icon ? `<span class="svelte-9by7gm">${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      width: iconWidth,
      height: iconHeight,
      svgColor: iconColor
    },
    {},
    {}
  )}</span>` : ``} ${slots.default ? slots.default({}) : ``} </a>`;
});
function transformImageUrl(url, params) {
  if (typeof url !== "string") {
    throw new TypeError("URL must be a string");
  }
  const baseUrl = url.startsWith("http") ? url : `https:${url}`;
  const queryParams = new URLSearchParams(params).toString();
  return `${baseUrl}?${queryParams}`;
}
const css = {
  code: "img.svelte-1982tpy{object-fit:cover;width:100%;height:100%;display:block}",
  map: `{"version":3,"file":"Image.svelte","sources":["Image.svelte"],"sourcesContent":["<script>\\r\\n  import { transformImageUrl } from '../../../api/contentful-images-fetch'\\r\\n\\r\\n  export let src = ''\\r\\n  export let width = ''\\r\\n  export let height = ''\\r\\n  export let alt = ''\\r\\n  export let opacity = ''\\r\\n  export let brdRadius = ''\\r\\n  export let loading = ''\\r\\n\\r\\n  // Dynamische URL's voor verschillende formaten\\r\\n  const smallWebp = transformImageUrl(src, { w: 375, fm: 'webp' })\\r\\n  const mediumWebp = transformImageUrl(src, { w: 768, fm: 'webp' })\\r\\n  const largeWebp = transformImageUrl(src, { w: 1024, fm: 'webp' })\\r\\n  const smallFallback = transformImageUrl(src, { w: 375 })\\r\\n  const mediumFallback = transformImageUrl(src, { w: 768 })\\r\\n  const largeFallback = transformImageUrl(src, { w: 1024 })\\r\\n<\/script>\\r\\n\\r\\n<picture>\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 375px)\\" srcset={smallWebp} />\\r\\n  <source media=\\"(max-width: 375px)\\" srcset={smallFallback} />\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 768px)\\" srcset={mediumWebp} />\\r\\n  <source media=\\"(max-width: 768px)\\" srcset={mediumFallback} />\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 1024px)\\" srcset={largeWebp} />\\r\\n  <source media=\\"(max-width: 1024px)\\" srcset={largeFallback} />\\r\\n  <img\\r\\n    src={largeFallback}\\r\\n    {alt}\\r\\n    {loading}\\r\\n    style={\`width: \${width}px; height: \${height}px; border-radius: \${brdRadius}; opacity: \${opacity};\`}\\r\\n  />\\r\\n</picture>\\r\\n\\r\\n<style>\\r\\n  img {\\r\\n    object-fit: cover;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: block;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoCE,kBAAI,CACF,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,KACX"}`
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { alt = "" } = $$props;
  let { opacity = "" } = $$props;
  let { brdRadius = "" } = $$props;
  let { loading = "" } = $$props;
  const smallWebp = transformImageUrl(src, { w: 375, fm: "webp" });
  const mediumWebp = transformImageUrl(src, { w: 768, fm: "webp" });
  const largeWebp = transformImageUrl(src, { w: 1024, fm: "webp" });
  const smallFallback = transformImageUrl(src, { w: 375 });
  const mediumFallback = transformImageUrl(src, { w: 768 });
  const largeFallback = transformImageUrl(src, { w: 1024 });
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0) $$bindings.opacity(opacity);
  if ($$props.brdRadius === void 0 && $$bindings.brdRadius && brdRadius !== void 0) $$bindings.brdRadius(brdRadius);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0) $$bindings.loading(loading);
  $$result.css.add(css);
  return `<picture><source type="image/webp" media="(max-width: 375px)"${add_attribute("srcset", smallWebp, 0)}> <source media="(max-width: 375px)"${add_attribute("srcset", smallFallback, 0)}> <source type="image/webp" media="(max-width: 768px)"${add_attribute("srcset", mediumWebp, 0)}> <source media="(max-width: 768px)"${add_attribute("srcset", mediumFallback, 0)}> <source type="image/webp" media="(max-width: 1024px)"${add_attribute("srcset", largeWebp, 0)}> <source media="(max-width: 1024px)"${add_attribute("srcset", largeFallback, 0)}> <img${add_attribute("src", largeFallback, 0)}${add_attribute("alt", alt, 0)}${add_attribute("loading", loading, 0)}${add_attribute("style", `width: ${width}px; height: ${height}px; border-radius: ${brdRadius}; opacity: ${opacity};`, 0)} class="svelte-1982tpy"> </picture>`;
});
const logo = "/_app/immutable/assets/logo.SwWCWrDH.webp";
export {
  Image as I,
  Link as L,
  logo as l
};
