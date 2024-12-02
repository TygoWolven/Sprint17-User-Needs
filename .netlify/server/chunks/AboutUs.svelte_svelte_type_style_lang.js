import { c as create_ssr_component, g as compute_rest_props, h as spread, i as escape_attribute_value, d as escape, j as escape_object, v as validate_component, m as missing_component, b as add_attribute } from "./ssr.js";
const css = {
  code: ".btn.svelte-hc35b0.svelte-hc35b0{display:inline-flex;align-items:center;vertical-align:middle;justify-content:center;text-align:center;letter-spacing:1px;line-height:var(--lh-1);font-weight:700;text-decoration:none;gap:0.5rem;border:0;background-color:var(--bgc);color:var(--clr);border:var(--border);padding:var(--btn-padding);font-size:calc(var(--scale, 1) * 1rem);box-shadow:var(--box-shadow);cursor:pointer;transition:box-shadow 0.2s,\r\n      transform 0.3s}.btn-primary.svelte-hc35b0.svelte-hc35b0{border-radius:var(--btn-radius);background-color:var(--btn-primary-bg);color:var(--btn-primary-text-clr);box-shadow:var(--btn-shadow);border:2px solid var(--btn-primary-bg)}.btn-secondary.svelte-hc35b0.svelte-hc35b0{border-radius:var(--btn-radius);color:var(--txt-primary-clr);border:2px solid var(--btn-primary-bg)}.btn-secondary.svelte-hc35b0.svelte-hc35b0,.btn-primary.svelte-hc35b0.svelte-hc35b0{transition:box-shadow 0.2s,\r\n      transform 0.3s}.btn-secondary.svelte-hc35b0.svelte-hc35b0:hover,.btn-secondary.svelte-hc35b0.svelte-hc35b0:focus,.btn-primary.svelte-hc35b0.svelte-hc35b0:hover,.btn-primary.svelte-hc35b0.svelte-hc35b0:focus{box-shadow:0px 2px 3px 0px rgba(0, 0, 0, 0.25);transform:scale(1.1)}.btn-icon.svelte-hc35b0.svelte-hc35b0{display:flex;align-items:center;width:24px;height:24px;transition:transform 0.3s ease}.btn.svelte-hc35b0:hover .btn-icon.svelte-hc35b0,.btn.svelte-hc35b0:focus .btn-icon.svelte-hc35b0{transform:translateX(5px)}.btn-xs.svelte-hc35b0.svelte-hc35b0{--scale:0.75;--btn-padding:0.25em 0.75em}.btn-sm.svelte-hc35b0.svelte-hc35b0{--scale:0.875;--btn-padding:0.375em 1em}.btn-m.svelte-hc35b0.svelte-hc35b0{--scale:0.975;--btn-padding:0.8em 1em}.btn-lg.svelte-hc35b0.svelte-hc35b0{--scale:1.25;--btn-padding:0.75em 1.5em}.btn-xl.svelte-hc35b0.svelte-hc35b0{--scale:1.5;--btn-padding:1em 2em}@media(min-width: 48em){.btn-m.svelte-hc35b0.svelte-hc35b0{--scale:1.5;--btn-padding:0.8em 1.4em}}",
  map: `{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script>\\r\\n  export let type\\r\\n  export let variant = ''\\r\\n  export let size = ''\\r\\n  export let href = ''\\r\\n  export let title = ''\\r\\n  export let icon = ''\\r\\n  export let iconColor = ''\\r\\n<\/script>\\r\\n\\r\\n{#if href}\\r\\n  <a {href} data-sveltekit-preload-data class=\\"btn btn-{variant} btn-{size}\\" {...$$restProps}>\\r\\n    {title}\\r\\n    {#if icon}\\r\\n      <span class=\\"btn-icon\\">\\r\\n        <svelte:component this={icon} svgColor={iconColor} {...$$restProps} />\\r\\n      </span>\\r\\n    {/if}\\r\\n    <slot></slot>\\r\\n  </a>\\r\\n{:else}\\r\\n  <button {type} class=\\"btn btn-{variant} btn-{size}\\" {...$$restProps} on:click>\\r\\n    {title}\\r\\n    {#if icon}\\r\\n      <span class=\\"btn-icon\\">\\r\\n        <svelte:component this={icon} svgColor={iconColor} {...$$restProps} />\\r\\n      </span>\\r\\n    {/if}\\r\\n    <slot></slot>\\r\\n  </button>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n  .btn {\\r\\n    display: inline-flex;\\r\\n    align-items: center;\\r\\n    vertical-align: middle;\\r\\n    justify-content: center;\\r\\n    text-align: center;\\r\\n    letter-spacing: 1px;\\r\\n    line-height: var(--lh-1);\\r\\n    font-weight: 700;\\r\\n    text-decoration: none;\\r\\n    gap: 0.5rem;\\r\\n    border: 0;\\r\\n    background-color: var(--bgc);\\r\\n    color: var(--clr);\\r\\n    border: var(--border);\\r\\n    padding: var(--btn-padding);\\r\\n    font-size: calc(var(--scale, 1) * 1rem);\\r\\n    box-shadow: var(--box-shadow);\\r\\n    cursor: pointer;\\r\\n    transition:\\r\\n      box-shadow 0.2s,\\r\\n      transform 0.3s;\\r\\n  }\\r\\n\\r\\n  .btn-primary {\\r\\n    border-radius: var(--btn-radius);\\r\\n    background-color: var(--btn-primary-bg);\\r\\n    color: var(--btn-primary-text-clr);\\r\\n    box-shadow: var(--btn-shadow);\\r\\n    border: 2px solid var(--btn-primary-bg);\\r\\n  }\\r\\n\\r\\n  .btn-secondary {\\r\\n    border-radius: var(--btn-radius);\\r\\n    color: var(--txt-primary-clr);\\r\\n    border: 2px solid var(--btn-primary-bg);\\r\\n  }\\r\\n\\r\\n  .btn-secondary,\\r\\n  .btn-primary {\\r\\n    transition:\\r\\n      box-shadow 0.2s,\\r\\n      transform 0.3s;\\r\\n  }\\r\\n\\r\\n  .btn-secondary:hover,\\r\\n  .btn-secondary:focus,\\r\\n  .btn-primary:hover,\\r\\n  .btn-primary:focus {\\r\\n    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n\\r\\n  .btn-icon {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    width: 24px;\\r\\n    height: 24px;\\r\\n    transition: transform 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .btn:hover .btn-icon,\\r\\n  .btn:focus .btn-icon {\\r\\n    transform: translateX(5px);\\r\\n  }\\r\\n\\r\\n  .btn-xs {\\r\\n    --scale: 0.75;\\r\\n    --btn-padding: 0.25em 0.75em;\\r\\n  }\\r\\n\\r\\n  .btn-sm {\\r\\n    --scale: 0.875;\\r\\n    --btn-padding: 0.375em 1em;\\r\\n  }\\r\\n\\r\\n  .btn-m {\\r\\n    --scale: 0.975;\\r\\n    --btn-padding: 0.8em 1em;\\r\\n  }\\r\\n\\r\\n  .btn-lg {\\r\\n    --scale: 1.25;\\r\\n    --btn-padding: 0.75em 1.5em;\\r\\n  }\\r\\n\\r\\n  .btn-xl {\\r\\n    --scale: 1.5;\\r\\n    --btn-padding: 1em 2em;\\r\\n  }\\r\\n\\r\\n  @media (min-width: 48em) {\\r\\n    .btn-m {\\r\\n      --scale: 1.5;\\r\\n      --btn-padding: 0.8em 1.4em;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiCE,gCAAK,CACH,OAAO,CAAE,WAAW,CACpB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,IAAI,MAAM,CAAC,CACxB,WAAW,CAAE,GAAG,CAChB,eAAe,CAAE,IAAI,CACrB,GAAG,CAAE,MAAM,CACX,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,IAAI,KAAK,CAAC,CAC5B,KAAK,CAAE,IAAI,KAAK,CAAC,CACjB,MAAM,CAAE,IAAI,QAAQ,CAAC,CACrB,OAAO,CAAE,IAAI,aAAa,CAAC,CAC3B,SAAS,CAAE,KAAK,IAAI,OAAO,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACvC,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,MAAM,CAAE,OAAO,CACf,UAAU,CACR,UAAU,CAAC,IAAI,CAAC;AACtB,MAAM,SAAS,CAAC,IACd,CAEA,wCAAa,CACX,aAAa,CAAE,IAAI,YAAY,CAAC,CAChC,gBAAgB,CAAE,IAAI,gBAAgB,CAAC,CACvC,KAAK,CAAE,IAAI,sBAAsB,CAAC,CAClC,UAAU,CAAE,IAAI,YAAY,CAAC,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,gBAAgB,CACxC,CAEA,0CAAe,CACb,aAAa,CAAE,IAAI,YAAY,CAAC,CAChC,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,gBAAgB,CACxC,CAEA,0CAAc,CACd,wCAAa,CACX,UAAU,CACR,UAAU,CAAC,IAAI,CAAC;AACtB,MAAM,SAAS,CAAC,IACd,CAEA,0CAAc,MAAM,CACpB,0CAAc,MAAM,CACpB,wCAAY,MAAM,CAClB,wCAAY,MAAO,CACjB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC/C,SAAS,CAAE,MAAM,GAAG,CACtB,CAEA,qCAAU,CACR,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC7B,CAEA,kBAAI,MAAM,CAAC,uBAAS,CACpB,kBAAI,MAAM,CAAC,uBAAU,CACnB,SAAS,CAAE,WAAW,GAAG,CAC3B,CAEA,mCAAQ,CACN,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,aACjB,CAEA,mCAAQ,CACN,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,WACjB,CAEA,kCAAO,CACL,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,SACjB,CAEA,mCAAQ,CACN,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,YACjB,CAEA,mCAAQ,CACN,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,OACjB,CAEA,MAAO,YAAY,IAAI,CAAE,CACvB,kCAAO,CACL,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,WACjB,CACF"}`
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "variant", "size", "href", "title", "icon", "iconColor"]);
  let { type } = $$props;
  let { variant = "" } = $$props;
  let { size = "" } = $$props;
  let { href = "" } = $$props;
  let { title = "" } = $$props;
  let { icon = "" } = $$props;
  let { iconColor = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0) $$bindings.type(type);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0) $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.iconColor === void 0 && $$bindings.iconColor && iconColor !== void 0) $$bindings.iconColor(iconColor);
  $$result.css.add(css);
  return `${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      { "data-sveltekit-preload-data": true },
      {
        class: "btn btn-" + escape(variant, true) + " btn-" + escape(size, true)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-hc35b0" }
  )}>${escape(title)} ${icon ? `<span class="btn-icon svelte-hc35b0">${validate_component(icon || missing_component, "svelte:component").$$render($$result, Object.assign({}, { svgColor: iconColor }, $$restProps), {}, {})}</span>` : ``} ${slots.default ? slots.default({}) : ``}</a>` : `<button${spread(
    [
      { type: escape_attribute_value(type) },
      {
        class: "btn btn-" + escape(variant, true) + " btn-" + escape(size, true)
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-hc35b0" }
  )}>${escape(title)} ${icon ? `<span class="btn-icon svelte-hc35b0">${validate_component(icon || missing_component, "svelte:component").$$render($$result, Object.assign({}, { svgColor: iconColor }, $$restProps), {}, {})}</span>` : ``} ${slots.default ? slots.default({}) : ``}</button>`}`;
});
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { svgColor = "var(--btn-primary-text-clr)" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.svgColor === void 0 && $$bindings.svgColor && svgColor !== void 0) $$bindings.svgColor(svgColor);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12m0 0-5-5m5 5-5 5"${add_attribute("stroke", svgColor, 0)} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
export {
  ArrowRight as A,
  Button as B
};
