import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import { B as Button, A as ArrowRight } from "../../../../chunks/AboutUs.svelte_svelte_type_style_lang.js";
import "../../../../chunks/client.js";
const css$5 = {
  code: "img.svelte-1rwduda{object-fit:cover;width:100%;height:100%}",
  map: `{"version":3,"file":"HeaderImage.svelte","sources":["HeaderImage.svelte"],"sourcesContent":["<script>\\r\\n  export let alt = ''\\r\\n  export let src = ''\\r\\n  export let opacity = ''\\r\\n\\r\\n  // Webp images\\r\\n  export let smallWebp = '../header-image-small.webp'\\r\\n  export let mediumWebp = '../header-image-medium.webp'\\r\\n  export let largeWebp = '../header-image-large.webp'\\r\\n\\r\\n  // Fallback images for support\\r\\n  export let smallFallback = '../header-image-small.jpg'\\r\\n  export let mediumFallback = '../header-image-medium.jpg'\\r\\n  export let largeFallback = '../header-image-large.jpg'\\r\\n<\/script>\\r\\n\\r\\n<picture>\\r\\n  <!-- Image small screens -->\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 375px)\\" srcset={smallWebp} />\\r\\n  <source media=\\"(max-width: 375px)\\" srcset={smallFallback} />\\r\\n\\r\\n  <!-- Image medium screens -->\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 768px)\\" srcset={mediumWebp} />\\r\\n  <source media=\\"(max-width: 768px)\\" srcset={mediumFallback} />\\r\\n\\r\\n  <!-- Image large screens -->\\r\\n  <source type=\\"image/webp\\" media=\\"(max-width: 1024px)\\" srcset={largeWebp} />\\r\\n  <source media=\\"(max-width: 1024px)\\" srcset={largeFallback} />\\r\\n\\r\\n  <!-- Standaard afbeelding voor andere gevallen -->\\r\\n  <img {src} {alt} style={\`opacity: \${opacity}\`} />\\r\\n</picture>\\r\\n\\r\\n<style>\\r\\n  img {\\r\\n    object-fit: cover;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAkCE,kBAAI,CACF,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}`
};
const HeaderImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { alt = "" } = $$props;
  let { src = "" } = $$props;
  let { opacity = "" } = $$props;
  let { smallWebp = "../header-image-small.webp" } = $$props;
  let { mediumWebp = "../header-image-medium.webp" } = $$props;
  let { largeWebp = "../header-image-large.webp" } = $$props;
  let { smallFallback = "../header-image-small.jpg" } = $$props;
  let { mediumFallback = "../header-image-medium.jpg" } = $$props;
  let { largeFallback = "../header-image-large.jpg" } = $$props;
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0) $$bindings.alt(alt);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0) $$bindings.opacity(opacity);
  if ($$props.smallWebp === void 0 && $$bindings.smallWebp && smallWebp !== void 0) $$bindings.smallWebp(smallWebp);
  if ($$props.mediumWebp === void 0 && $$bindings.mediumWebp && mediumWebp !== void 0) $$bindings.mediumWebp(mediumWebp);
  if ($$props.largeWebp === void 0 && $$bindings.largeWebp && largeWebp !== void 0) $$bindings.largeWebp(largeWebp);
  if ($$props.smallFallback === void 0 && $$bindings.smallFallback && smallFallback !== void 0) $$bindings.smallFallback(smallFallback);
  if ($$props.mediumFallback === void 0 && $$bindings.mediumFallback && mediumFallback !== void 0) $$bindings.mediumFallback(mediumFallback);
  if ($$props.largeFallback === void 0 && $$bindings.largeFallback && largeFallback !== void 0) $$bindings.largeFallback(largeFallback);
  $$result.css.add(css$5);
  return `<picture> <source type="image/webp" media="(max-width: 375px)"${add_attribute("srcset", smallWebp, 0)}> <source media="(max-width: 375px)"${add_attribute("srcset", smallFallback, 0)}>  <source type="image/webp" media="(max-width: 768px)"${add_attribute("srcset", mediumWebp, 0)}> <source media="(max-width: 768px)"${add_attribute("srcset", mediumFallback, 0)}>  <source type="image/webp" media="(max-width: 1024px)"${add_attribute("srcset", largeWebp, 0)}> <source media="(max-width: 1024px)"${add_attribute("srcset", largeFallback, 0)}>  <img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}${add_attribute("style", `opacity: ${opacity}`, 0)} class="svelte-1rwduda"> </picture>`;
});
const IconRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "" } = $$props;
  let { width = "" } = $$props;
  let { color = "" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  return `<svg class="svg-location"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("fill", color, 0)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 .042a9.992 9.992 0 0 0-9.981 9.98c0 2.57 1.99 6.592 5.915 11.954a5.034 5.034 0 0 0 8.132 0c3.925-5.362 5.915-9.384 5.915-11.954A9.992 9.992 0 0 0 12 .042ZM12 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"></path></svg>`;
});
const IconLocation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { height = "" } = $$props;
  let { width = "" } = $$props;
  let { color = "" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  return `<svg class="svg-location"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("fill", color, 0)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 .042a9.992 9.992 0 0 0-9.981 9.98c0 2.57 1.99 6.592 5.915 11.954a5.034 5.034 0 0 0 8.132 0c3.925-5.362 5.915-9.384 5.915-11.954A9.992 9.992 0 0 0 12 .042ZM12 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"></path></svg>`;
});
const css$4 = {
  code: "section.svelte-vmx161{width:100%;padding:2rem}p.svelte-vmx161{font-size:2rem;color:white;text-align:left;margin-bottom:2rem}@media(min-width: 55em){section.svelte-vmx161{margin:0 auto;width:50%}p.svelte-vmx161{font-size:3rem}}",
  map: `{"version":3,"file":"LargeText.svelte","sources":["LargeText.svelte"],"sourcesContent":["<script>\\r\\n  import { Button, ArrowRight } from '$lib/index'\\r\\n\\r\\n  const mockData = {\\r\\n    largetext: [\\r\\n      {\\r\\n        title: 'We make walking a lot more fun. Got excited?',\\r\\n        textParagraph: '',\\r\\n      },\\r\\n    ],\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<section>\\r\\n  <p>{mockData.largetext[0].title}</p>\\r\\n  <Button\\r\\n    type=\\"button\\"\\r\\n    variant=\\"primary\\"\\r\\n    title=\\"book a walk\\"\\r\\n    icon={ArrowRight}\\r\\n    size=\\"lg\\"\\r\\n    on:click\\r\\n  />\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  section {\\r\\n    width: 100%;\\r\\n    padding: 2rem;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 2rem;\\r\\n    color: white;\\r\\n    text-align: left;\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n\\r\\n  /* Large screens */\\r\\n  @media (min-width: 55em) {\\r\\n    section {\\r\\n      margin: 0 auto;\\r\\n      width: 50%;\\r\\n    }\\r\\n    p {\\r\\n      font-size: 3rem;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0BE,qBAAQ,CACN,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACX,CAEA,eAAE,CACA,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CAGA,MAAO,YAAY,IAAI,CAAE,CACvB,qBAAQ,CACN,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,KAAK,CAAE,GACT,CACA,eAAE,CACA,SAAS,CAAE,IACb,CACF"}`
};
const LargeText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mockData = {
    largetext: [
      {
        title: "We make walking a lot more fun. Got excited?",
        textParagraph: ""
      }
    ]
  };
  $$result.css.add(css$4);
  return `<section class="svelte-vmx161"><p class="svelte-vmx161">${escape(mockData.largetext[0].title)}</p> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      variant: "primary",
      title: "book a walk",
      icon: ArrowRight,
      size: "lg"
    },
    {},
    {}
  )} </section>`;
});
const css$3 = {
  code: "ul.svelte-1f4ov4n{display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:2rem}li.svelte-1f4ov4n{list-style:none;padding:0.5rem 1rem;color:white;background-color:var(--accent1-tertiary);border-radius:50px}@media(min-width: 55em){ul.svelte-1f4ov4n{justify-content:center;padding-bottom:2rem;gap:2rem}}",
  map: `{"version":3,"file":"TicketDetails.svelte","sources":["TicketDetails.svelte"],"sourcesContent":["<script>\\r\\n  const mockData = {\\r\\n    details: [\\r\\n      {\\r\\n        price: '€25,95',\\r\\n        duration: '3 hours',\\r\\n        startTimes: '17:00 - 22:00',\\r\\n        days: 'ma - zo',\\r\\n        cocktails: '3 cocktails',\\r\\n        avaiable: 'till August 24',\\r\\n      },\\r\\n    ],\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<!-- Ticket details -->\\r\\n<ul>\\r\\n  {#each mockData.details as detail}\\r\\n    {#each Object.entries(detail) as [key, value]}\\r\\n      <li>{value}</li>\\r\\n    {/each}\\r\\n  {/each}\\r\\n</ul>\\r\\n\\r\\n<style>\\r\\n  ul {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    gap: 0.5rem;\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n\\r\\n  li {\\r\\n    list-style: none;\\r\\n    padding: 0.5rem 1rem;\\r\\n    color: white;\\r\\n    background-color: var(--accent1-tertiary);\\r\\n    border-radius: 50px;\\r\\n  }\\r\\n\\r\\n  /* large screens */\\r\\n  @media (min-width: 55em) {\\r\\n    ul {\\r\\n      justify-content: center;\\r\\n      padding-bottom: 2rem;\\r\\n      gap: 2rem;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyBE,iBAAG,CACD,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,MAAM,CACX,aAAa,CAAE,IACjB,CAEA,iBAAG,CACD,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,MAAM,CAAC,IAAI,CACpB,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,kBAAkB,CAAC,CACzC,aAAa,CAAE,IACjB,CAGA,MAAO,YAAY,IAAI,CAAE,CACvB,iBAAG,CACD,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,IAAI,CACpB,GAAG,CAAE,IACP,CACF"}`
};
const TicketDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mockData = {
    details: [
      {
        price: "€25,95",
        duration: "3 hours",
        startTimes: "17:00 - 22:00",
        days: "ma - zo",
        cocktails: "3 cocktails",
        avaiable: "till August 24"
      }
    ]
  };
  $$result.css.add(css$3);
  return ` <ul class="svelte-1f4ov4n">${each(mockData.details, (detail) => {
    return `${each(Object.entries(detail), ([key, value]) => {
      return `<li class="svelte-1f4ov4n">${escape(value)}</li>`;
    })}`;
  })} </ul>`;
});
const css$2 = {
  code: ".content-container.svelte-rpfxca{display:flex;flex-direction:column;gap:0.6rem;margin:5rem 2rem}h1.svelte-rpfxca{display:flex;align-items:center;font-size:1.9rem;text-transform:uppercase;color:white}.title-label.svelte-rpfxca{display:flex;align-items:center;gap:1rem}.label.svelte-rpfxca{padding:0.3rem 0.5rem;border:1px solid var(--accent2-tertiary);border-radius:3rem;font-size:1rem;text-align:center;color:var(--accent2-tertiary)}.subtitle.svelte-rpfxca{font-size:1.9rem;text-transform:uppercase;color:white}.location-price.svelte-rpfxca{display:flex;align-items:center}.location.svelte-rpfxca{margin:0 1rem 0 0.5rem;color:var(--accent2-tertiary)}.price.svelte-rpfxca{color:var(--accent2-primary)}@media screen and (min-width: 768px){.content-container.svelte-rpfxca{margin:8rem 8rem}h1.svelte-rpfxca{font-size:3rem}.label.svelte-rpfxca{padding:0.5rem 0.8rem;font-size:1.3rem}.subtitle.svelte-rpfxca{font-size:3rem}.location.svelte-rpfxca{font-size:1.3rem}.price.svelte-rpfxca{font-size:1.3rem}}",
  map: `{"version":3,"file":"HeaderContent.svelte","sources":["HeaderContent.svelte"],"sourcesContent":["<script>\\r\\n  import { IconLocation } from '$lib/index'\\r\\n  export let items\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"content-container\\">\\r\\n  <!-- First content row -->\\r\\n  <div class=\\"title-label\\">\\r\\n    <h1>{items.title}</h1>\\r\\n    <span class=\\"label\\" aria-hidden=\\"true\\">{items.label}</span>\\r\\n  </div>\\r\\n\\r\\n  <!-- Second content row -->\\r\\n  <h2 class=\\"subtitle\\">{items.subtitle}</h2>\\r\\n\\r\\n  <!-- Last content row -->\\r\\n  <div class=\\"location-price\\">\\r\\n    <IconLocation width=\\"15\\" height=\\"15\\" color=\\"hsl(21.23, 100%, 87.25%)\\" />\\r\\n    <p class=\\"location\\">{items.location}</p>\\r\\n    <p class=\\"price\\">€{items.price}</p>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .content-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.6rem;\\r\\n    margin: 5rem 2rem;\\r\\n  }\\r\\n\\r\\n  /* First content row */\\r\\n  h1 {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    font-size: 1.9rem;\\r\\n    text-transform: uppercase;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  .title-label {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n\\r\\n  .label {\\r\\n    padding: 0.3rem 0.5rem;\\r\\n    border: 1px solid var(--accent2-tertiary);\\r\\n    border-radius: 3rem;\\r\\n    font-size: 1rem;\\r\\n    text-align: center;\\r\\n    color: var(--accent2-tertiary);\\r\\n  }\\r\\n\\r\\n  /* Second content row */\\r\\n  .subtitle {\\r\\n    font-size: 1.9rem;\\r\\n    text-transform: uppercase;\\r\\n    color: white;\\r\\n  }\\r\\n\\r\\n  /* Last content row */\\r\\n  .location-price {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .location {\\r\\n    margin: 0 1rem 0 0.5rem;\\r\\n    color: var(--accent2-tertiary);\\r\\n  }\\r\\n\\r\\n  .price {\\r\\n    color: var(--accent2-primary);\\r\\n  }\\r\\n\\r\\n  /* Large screens */\\r\\n  @media screen and (min-width: 768px) {\\r\\n    .content-container {\\r\\n      margin: 8rem 8rem;\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n      font-size: 3rem;\\r\\n    }\\r\\n\\r\\n    .label {\\r\\n      padding: 0.5rem 0.8rem;\\r\\n      font-size: 1.3rem;\\r\\n    }\\r\\n    .subtitle {\\r\\n      font-size: 3rem;\\r\\n    }\\r\\n\\r\\n    .location {\\r\\n      font-size: 1.3rem;\\r\\n    }\\r\\n\\r\\n    .price {\\r\\n      font-size: 1.3rem;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAwBE,gCAAmB,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MAAM,CACX,MAAM,CAAE,IAAI,CAAC,IACf,CAGA,gBAAG,CACD,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,KACT,CAEA,0BAAa,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAEA,oBAAO,CACL,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,kBAAkB,CAAC,CACzC,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,kBAAkB,CAC/B,CAGA,uBAAU,CACR,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,KACT,CAGA,6BAAgB,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CAEA,uBAAU,CACR,MAAM,CAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,MAAM,CACvB,KAAK,CAAE,IAAI,kBAAkB,CAC/B,CAEA,oBAAO,CACL,KAAK,CAAE,IAAI,iBAAiB,CAC9B,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACnC,gCAAmB,CACjB,MAAM,CAAE,IAAI,CAAC,IACf,CAEA,gBAAG,CACD,SAAS,CAAE,IACb,CAEA,oBAAO,CACL,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,SAAS,CAAE,MACb,CACA,uBAAU,CACR,SAAS,CAAE,IACb,CAEA,uBAAU,CACR,SAAS,CAAE,MACb,CAEA,oBAAO,CACL,SAAS,CAAE,MACb,CACF"}`
};
const HeaderContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  $$result.css.add(css$2);
  return `<section class="content-container svelte-rpfxca"> <div class="title-label svelte-rpfxca"><h1 class="svelte-rpfxca">${escape(items.title)}</h1> <span class="label svelte-rpfxca" aria-hidden="true">${escape(items.label)}</span></div>  <h2 class="subtitle svelte-rpfxca">${escape(items.subtitle)}</h2>  <div class="location-price svelte-rpfxca">${validate_component(IconLocation, "IconLocation").$$render(
    $$result,
    {
      width: "15",
      height: "15",
      color: "hsl(21.23, 100%, 87.25%)"
    },
    {},
    {}
  )} <p class="location svelte-rpfxca">${escape(items.location)}</p> <p class="price svelte-rpfxca">€${escape(items.price)}</p></div> </section>`;
});
const css$1 = {
  code: "section.svelte-1caagg0.svelte-1caagg0{padding:2rem}.icon-subtitle.svelte-1caagg0.svelte-1caagg0{display:flex;align-items:center;margin-bottom:0.5rem;gap:1rem}article.svelte-1caagg0.svelte-1caagg0{margin-bottom:3rem}.information-image.svelte-1caagg0.svelte-1caagg0{display:none}h1.svelte-1caagg0.svelte-1caagg0{color:white;font-size:2rem;margin-bottom:2rem}h2.svelte-1caagg0.svelte-1caagg0{color:var(--accent2-tertiary);font-size:1.2rem}p.svelte-1caagg0.svelte-1caagg0{color:white;line-height:1.4;max-width:32rem;text-align:left}@media(min-width: 55em){.information.svelte-1caagg0.svelte-1caagg0{display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));align-items:center;justify-content:space-around;gap:3rem;max-width:80em;margin:0 auto}.information.svelte-1caagg0.svelte-1caagg0:nth-child(even){direction:rtl}.information.svelte-1caagg0:nth-child(even)>.svelte-1caagg0{direction:ltr}.information-image.svelte-1caagg0.svelte-1caagg0{width:100%;display:block;height:auto;opacity:0.3}.information-details.svelte-1caagg0.svelte-1caagg0{margin:0 auto}h1.svelte-1caagg0.svelte-1caagg0{margin-top:3rem;font-size:2.5rem;text-align:center}h2.svelte-1caagg0.svelte-1caagg0{font-size:1.6rem}p.svelte-1caagg0.svelte-1caagg0{font-size:1.1rem}}",
  map: `{"version":3,"file":"AboutThisWalk.svelte","sources":["AboutThisWalk.svelte"],"sourcesContent":["<script>\\r\\n  import { IconRoute, TicketDetails } from '$lib/index'\\r\\n\\r\\n  const mockData = {\\r\\n    title: 'About this walk',\\r\\n    details: [\\r\\n      {\\r\\n        icon: 'url',\\r\\n        subtitle: 'Visit 3 bars',\\r\\n        textParagraph:\\r\\n          'For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other. After you have completed your booking, we will send you the cocktail guide with the directions and the menu.For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other.',\\r\\n      },\\r\\n      {\\r\\n        icon: 'url',\\r\\n        subtitle: 'What’s included?',\\r\\n        textParagraph:\\r\\n          'Kaartjes zijn € 24,95 en omvatten één cocktail bij elke bar die je bezoekt. Bij elke bar kunt u kiezen uit twee cocktails van ons speciale menu. Het enige wat u hoeft te doen is uw naam aan de barman te vertellen en zij zullen u een aantal fantastische cocktails serveren!',\\r\\n      },\\r\\n      {\\r\\n        icon: 'url',\\r\\n        subtitle: 'Booking information',\\r\\n        textParagraph:\\r\\n          'Deze walk is van maandag tot en met zondag beschikbaar en duurt 3 uur. de starttijden zijn tussen 17:00 en 22:00 uur. Klik op onderstaande knop om naar het boekingsscherm te gaan en selecteer de datum en tijd waarop u wilt starten. Wij zorgen voor de rest!',\\r\\n      },\\r\\n    ],\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<section>\\r\\n  <h1>{mockData.title}</h1>\\r\\n  <TicketDetails />\\r\\n  {#each mockData.details as detail}\\r\\n    <article class=\\"information\\">\\r\\n      <img class=\\"information-image\\" src=\\"/Mock-image2.webp\\" alt=\\"mensen die lachen\\" />\\r\\n      <div class=\\"information-details\\">\\r\\n        <div class=\\"icon-subtitle\\">\\r\\n          <IconRoute width=\\"25\\" height=\\"25\\" color=\\"hsl(19.52, 100%, 75.29%)\\" />\\r\\n          <h2>{detail.subtitle}</h2>\\r\\n        </div>\\r\\n        <p>{detail.textParagraph}</p>\\r\\n      </div>\\r\\n    </article>\\r\\n  {/each}\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  section {\\r\\n    padding: 2rem;\\r\\n  }\\r\\n\\r\\n  .icon-subtitle {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin-bottom: 0.5rem;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n\\r\\n  article {\\r\\n    margin-bottom: 3rem;\\r\\n  }\\r\\n\\r\\n  .information-image {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  /* Typography */\\r\\n  h1 {\\r\\n    color: white;\\r\\n    font-size: 2rem;\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    color: var(--accent2-tertiary);\\r\\n    font-size: 1.2rem;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    color: white;\\r\\n    line-height: 1.4;\\r\\n    max-width: 32rem;\\r\\n    text-align: left;\\r\\n  }\\r\\n\\r\\n  /* Large screens */\\r\\n  @media (min-width: 55em) {\\r\\n    .information {\\r\\n      display: grid;\\r\\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\r\\n      align-items: center;\\r\\n      justify-content: space-around;\\r\\n      gap: 3rem;\\r\\n      max-width: 80em;\\r\\n      margin: 0 auto;\\r\\n    }\\r\\n\\r\\n    .information:nth-child(even) {\\r\\n      direction: rtl;\\r\\n    }\\r\\n\\r\\n    .information:nth-child(even) > * {\\r\\n      direction: ltr;\\r\\n    }\\r\\n\\r\\n    .information-image {\\r\\n      width: 100%;\\r\\n      display: block;\\r\\n      height: auto;\\r\\n      opacity: 0.3;\\r\\n    }\\r\\n\\r\\n    .information-details {\\r\\n      margin: 0 auto;\\r\\n    }\\r\\n\\r\\n    h1 {\\r\\n      margin-top: 3rem;\\r\\n      font-size: 2.5rem;\\r\\n      text-align: center;\\r\\n    }\\r\\n\\r\\n    h2 {\\r\\n      font-size: 1.6rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n      font-size: 1.1rem;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8CE,qCAAQ,CACN,OAAO,CAAE,IACX,CAEA,4CAAe,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,IACP,CAEA,qCAAQ,CACN,aAAa,CAAE,IACjB,CAEA,gDAAmB,CACjB,OAAO,CAAE,IACX,CAGA,gCAAG,CACD,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CAEA,gCAAG,CACD,KAAK,CAAE,IAAI,kBAAkB,CAAC,CAC9B,SAAS,CAAE,MACb,CAEA,+BAAE,CACA,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IACd,CAGA,MAAO,YAAY,IAAI,CAAE,CACvB,0CAAa,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,YAAY,CAC7B,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,0CAAY,WAAW,IAAI,CAAE,CAC3B,SAAS,CAAE,GACb,CAEA,2BAAY,WAAW,IAAI,CAAC,CAAG,eAAE,CAC/B,SAAS,CAAE,GACb,CAEA,gDAAmB,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GACX,CAEA,kDAAqB,CACnB,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,gCAAG,CACD,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,MACd,CAEA,gCAAG,CACD,SAAS,CAAE,MACb,CAEA,+BAAE,CACA,SAAS,CAAE,MACb,CACF"}`
};
const AboutThisWalk = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const mockData = {
    title: "About this walk",
    details: [
      {
        icon: "url",
        subtitle: "Visit 3 bars",
        textParagraph: "For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other. After you have completed your booking, we will send you the cocktail guide with the directions and the menu.For the Cocktail Walk, we have selected three of our favorite bars, all within walking distance of each other."
      },
      {
        icon: "url",
        subtitle: "What’s included?",
        textParagraph: "Kaartjes zijn € 24,95 en omvatten één cocktail bij elke bar die je bezoekt. Bij elke bar kunt u kiezen uit twee cocktails van ons speciale menu. Het enige wat u hoeft te doen is uw naam aan de barman te vertellen en zij zullen u een aantal fantastische cocktails serveren!"
      },
      {
        icon: "url",
        subtitle: "Booking information",
        textParagraph: "Deze walk is van maandag tot en met zondag beschikbaar en duurt 3 uur. de starttijden zijn tussen 17:00 en 22:00 uur. Klik op onderstaande knop om naar het boekingsscherm te gaan en selecteer de datum en tijd waarop u wilt starten. Wij zorgen voor de rest!"
      }
    ]
  };
  $$result.css.add(css$1);
  return `<section class="svelte-1caagg0"><h1 class="svelte-1caagg0">${escape(mockData.title)}</h1> ${validate_component(TicketDetails, "TicketDetails").$$render($$result, {}, {}, {})} ${each(mockData.details, (detail) => {
    return `<article class="information svelte-1caagg0"><img class="information-image svelte-1caagg0" src="/Mock-image2.webp" alt="mensen die lachen"> <div class="information-details svelte-1caagg0"><div class="icon-subtitle svelte-1caagg0">${validate_component(IconRoute, "IconRoute").$$render(
      $$result,
      {
        width: "25",
        height: "25",
        color: "hsl(19.52, 100%, 75.29%)"
      },
      {},
      {}
    )} <h2 class="svelte-1caagg0">${escape(detail.subtitle)}</h2></div> <p class="svelte-1caagg0">${escape(detail.textParagraph)}</p></div> </article>`;
  })} </section>`;
});
const css = {
  code: ".header-container.svelte-1b20omc{position:relative;width:100vw;height:calc(100vh - 3rem)}.header-text.svelte-1b20omc{position:absolute;bottom:0;left:0}@media screen and (min-width: 48em){.header-text.svelte-1b20omc{top:0}}",
  map: `{"version":3,"file":"HeaderDetailPage.svelte","sources":["HeaderDetailPage.svelte"],"sourcesContent":["<script>\\r\\n  import { HeaderContent, HeaderImage } from '$lib/index'\\r\\n  export let items\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"header-container\\">\\r\\n  <HeaderImage src={'../header-image-large.webp'} opacity=\\"0.2\\" alt=\\"cocktail\\" />\\r\\n  <div class=\\"header-text\\">\\r\\n    <HeaderContent items={items[0].componentsCollection.items[0]} />\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .header-container {\\r\\n    position: relative;\\r\\n    width: 100vw;\\r\\n    height: calc(100vh - 3rem);\\r\\n  }\\r\\n\\r\\n  .header-text {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n  }\\r\\n\\r\\n  /* Large screens */\\r\\n  @media screen and (min-width: 48em) {\\r\\n    .header-text {\\r\\n      top: 0;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAaE,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC3B,CAEA,2BAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CACR,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,IAAI,CAAE,CAClC,2BAAa,CACX,GAAG,CAAE,CACP,CACF"}`
};
const HeaderDetailPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  $$result.css.add(css);
  return `<div class="header-container svelte-1b20omc">${validate_component(HeaderImage, "HeaderImage").$$render(
    $$result,
    {
      src: "../header-image-large.webp",
      opacity: "0.2",
      alt: "cocktail"
    },
    {},
    {}
  )} <div class="header-text svelte-1b20omc">${validate_component(HeaderContent, "HeaderContent").$$render(
    $$result,
    {
      items: items[0].componentsCollection.items[0]
    },
    {},
    {}
  )}</div> </div>`;
});
const TicketInfoPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1owmd1x_START -->${$$result.title = `<title></title>`, ""}<!-- HEAD_svelte-1owmd1x_END -->`, ""} ${validate_component(HeaderDetailPage, "HeaderDetailPage").$$render($$result, { items: data.pageData }, {}, {})} ${validate_component(AboutThisWalk, "AboutThisWalk").$$render($$result, {}, {}, {})} ${validate_component(LargeText, "LargeText").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(TicketInfoPage, "TicketInfoPage").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
