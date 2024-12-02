import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, d as escape } from "../../chunks/ssr.js";
import { B as Button, A as ArrowRight } from "../../chunks/AboutUs.svelte_svelte_type_style_lang.js";
import { L as Link, I as Image, l as logo } from "../../chunks/logo.js";
import "../../chunks/client.js";
const ArrowDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { svgColor = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.svgColor === void 0 && $$bindings.svgColor && svgColor !== void 0) $$bindings.svgColor(svgColor);
  return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("stroke", svgColor, 0)} xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 330 330"><path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path></svg>`;
});
const css$2 = {
  code: ".button-cart.svelte-olphkt{position:relative;display:flex;align-items:center;justify-content:center}.button-cart-counter.svelte-olphkt{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:white;border-radius:50%;padding:0.5em;font-size:0.75rem;display:flex;align-items:center;justify-content:center}",
  map: `{"version":3,"file":"CartIcon.svelte","sources":["CartIcon.svelte"],"sourcesContent":["<script>\\r\\n  import { Button } from '$lib/index'\\r\\n  export let width = ''\\r\\n  export let height = ''\\r\\n  export let fill = ''\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"button-cart\\">\\r\\n  <Button type=\\"button\\" aria-label=\\"shopping cart\\">\\r\\n    <svg {width} {height} viewBox=\\"0 0 26 30\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\">\\r\\n      <path\\r\\n        d=\\"M21.182 5.5h-3.477v-.44C17.704 2.266 15.598 0 13 0S8.295 2.266 8.295 5.06v.44H4.818c-.452 0-.818.393-.818.88v14.74c0 .487.366.88.818.88h16.364c.452 0 .818-.393.818-.88V6.38c0-.487-.366-.88-.818-.88Zm-5.318 0h-5.728v-.44c0-1.702 1.281-3.08 2.864-3.08s2.864 1.378 2.864 3.08v.44Z\\"\\r\\n        {fill}\\r\\n      />\\r\\n    </svg>\\r\\n  </Button>\\r\\n  <span class=\\"button-cart-counter\\" id=\\"cart-counter\\">0</span>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .button-cart {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .button-cart-counter {\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    color: white;\\r\\n    border-radius: 50%;\\r\\n    padding: 0.5em;\\r\\n    font-size: 0.75rem;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBE,0BAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CAEA,kCAAqB,CACnB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,KAAK,CACd,SAAS,CAAE,OAAO,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB"}`
};
const CartIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { fill = "" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0) $$bindings.fill(fill);
  $$result.css.add(css$2);
  return `<div class="button-cart svelte-olphkt">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "button",
      "aria-label": "shopping cart"
    },
    {},
    {
      default: () => {
        return `<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.182 5.5h-3.477v-.44C17.704 2.266 15.598 0 13 0S8.295 2.266 8.295 5.06v.44H4.818c-.452 0-.818.393-.818.88v14.74c0 .487.366.88.818.88h16.364c.452 0 .818-.393.818-.88V6.38c0-.487-.366-.88-.818-.88Zm-5.318 0h-5.728v-.44c0-1.702 1.281-3.08 2.864-3.08s2.864 1.378 2.864 3.08v.44Z"${add_attribute("fill", fill, 0)}></path></svg>`;
      }
    }
  )} <span class="button-cart-counter svelte-olphkt" id="cart-counter" data-svelte-h="svelte-11by932">0</span> </div>`;
});
const css$1 = {
  code: "footer.svelte-1afjhuo.svelte-1afjhuo{padding:0 5vw}.footer-wrapper.svelte-1afjhuo.svelte-1afjhuo{display:grid;gap:3rem;grid-template-areas:'form'\r\n      'nav'\r\n      'logo-social';padding-top:4rem}.footer-logo-social.svelte-1afjhuo.svelte-1afjhuo{grid-area:logo-social;display:flex;flex-direction:column-reverse;align-items:center;gap:0.5rem}footer.svelte-1afjhuo nav.svelte-1afjhuo{grid-area:nav;columns:2;gap:clamp(1rem, 30vw, 2rem)}.footer-text.svelte-1afjhuo.svelte-1afjhuo{margin:0.625rem 0;color:var(--accent2-quaternary)}footer.svelte-1afjhuo li.svelte-1afjhuo{padding:1rem;font-size:var(--fs-md);text-transform:lowercase;list-style:none;color:var(--accent2-tertiary)}.social-media-list.svelte-1afjhuo.svelte-1afjhuo{display:flex;align-items:center;gap:1rem}.footer-newsletter.svelte-1afjhuo.svelte-1afjhuo{grid-area:form;flex:0 1 340px}label.svelte-1afjhuo.svelte-1afjhuo{color:var(--accent2-quaternary)}.footer-newsletter.svelte-1afjhuo h3.svelte-1afjhuo{color:var(--accent2-primary)}input.svelte-1afjhuo.svelte-1afjhuo:where([type='email']){display:block;margin:1rem 0;font-size:1rem;font-family:inherit;padding:1rem;width:100%;border:0;background-color:var(--accent2-quaternary);border-radius:10px}input.svelte-1afjhuo.svelte-1afjhuo::placeholder{color:var(--accent1-tertiary)}.footer-text.svelte-1afjhuo.svelte-1afjhuo,.newsletter-title.svelte-1afjhuo.svelte-1afjhuo{margin-bottom:1rem}.copyright.svelte-1afjhuo.svelte-1afjhuo{background-color:var(--sec-color-alpha);text-align:center;padding-top:1.25rem;padding-bottom:1.25rem;font-size:0.875rem}@media screen and (min-width: 48em){footer.svelte-1afjhuo.svelte-1afjhuo{padding:0 3vw}.footer-wrapper.svelte-1afjhuo.svelte-1afjhuo{grid-template-areas:'logo-social nav nav form'}.footer.svelte-1afjhuo nav.svelte-1afjhuo{gap:clamp(2rem, 30vw, 4rem)}.footer-wrapper.svelte-1afjhuo>.svelte-1afjhuo{margin-inline:auto}}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n  import { Link, Image, Button, ArrowRight } from '$lib/index'\\r\\n  import logo from '$lib/assets/logo.webp'\\r\\n  export let footerItems\\r\\n<\/script>\\r\\n\\r\\n<footer class=\\"footer\\">\\r\\n  <div class=\\"footer-wrapper\\">\\r\\n    <div class=\\"footer-logo-social\\">\\r\\n      <ul class=\\"social-media-list\\" role=\\"list\\" aria-label=\\"Social links\\">\\r\\n        {#each footerItems[0].socialMediaIconsCollection.items as item}\\r\\n          <li>\\r\\n            <Link href={item.url}>\\r\\n              <Image\\r\\n                src={item.assetCollection.items[0].url}\\r\\n                height=\\"50\\"\\r\\n                width=\\"50\\"\\r\\n                alt={item.assetCollection.items[0].title}\\r\\n                loading=\\"lazy\\"\\r\\n              />\\r\\n            </Link>\\r\\n          </li>\\r\\n        {/each}\\r\\n      </ul>\\r\\n      <p class=\\"footer-text\\">Follow us:</p>\\r\\n      <img src={logo} height=\\"100\\" width=\\"100\\" alt=\\"Wogo Logo\\" />\\r\\n    </div>\\r\\n    <div class=\\"footer-section\\">\\r\\n      <nav>\\r\\n        <ul aria-label=\\"Footer\\" role=\\"list\\">\\r\\n          {#each footerItems[0].footerLinksCollection.items as item}\\r\\n            <li>\\r\\n              <Link href={item.slug} aria-label={item.title} title={item.title}></Link>\\r\\n            </li>\\r\\n          {/each}\\r\\n        </ul>\\r\\n      </nav>\\r\\n    </div>\\r\\n    <div class=\\"footer-newsletter\\">\\r\\n      <h3 class=\\"newsletter-title\\">{footerItems[0].newsletterTitle}</h3>\\r\\n      <form action=\\"https://www.freecodecamp.org/email-submit\\" id=\\"form\\" method=\\"post\\">\\r\\n        <label for=\\"email\\">{footerItems[0].newsLetterDescription}</label>\\r\\n        <input\\r\\n          type=\\"email\\"\\r\\n          name=\\"email\\"\\r\\n          id=\\"email\\"\\r\\n          placeholder={footerItems[0].placeholderText}\\r\\n          required\\r\\n        />\\r\\n        <Button\\r\\n          type=\\"submit\\"\\r\\n          variant=\\"primary\\"\\r\\n          title=\\"Subscribe\\"\\r\\n          icon={ArrowRight}\\r\\n          iconColor=\\"var(--btn-primary-text-clr)\\"\\r\\n          size=\\"sm\\"\\r\\n        />\\r\\n      </form>\\r\\n    </div>\\r\\n  </div>\\r\\n  <div class=\\"copyright\\">\\r\\n    <p class=\\"copyright-text\\">copyright test</p>\\r\\n  </div>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n  /* Mobile  */\\r\\n  footer {\\r\\n    padding: 0 5vw;\\r\\n  }\\r\\n\\r\\n  .footer-wrapper {\\r\\n    display: grid;\\r\\n    gap: 3rem;\\r\\n    grid-template-areas:\\r\\n      'form'\\r\\n      'nav'\\r\\n      'logo-social';\\r\\n    padding-top: 4rem;\\r\\n  }\\r\\n\\r\\n  .footer-logo-social {\\r\\n    grid-area: logo-social;\\r\\n    display: flex;\\r\\n    flex-direction: column-reverse;\\r\\n    align-items: center;\\r\\n    gap: 0.5rem;\\r\\n  }\\r\\n\\r\\n  footer nav {\\r\\n    grid-area: nav;\\r\\n    columns: 2;\\r\\n    gap: clamp(1rem, 30vw, 2rem);\\r\\n  }\\r\\n\\r\\n  .footer-text {\\r\\n    margin: 0.625rem 0;\\r\\n    color: var(--accent2-quaternary);\\r\\n  }\\r\\n\\r\\n  footer li {\\r\\n    padding: 1rem;\\r\\n    font-size: var(--fs-md);\\r\\n    text-transform: lowercase;\\r\\n    list-style: none;\\r\\n    color: var(--accent2-tertiary);\\r\\n  }\\r\\n\\r\\n  .social-media-list {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 1rem;\\r\\n  }\\r\\n\\r\\n  /* Footer newsletter */\\r\\n  .footer-newsletter {\\r\\n    grid-area: form;\\r\\n    flex: 0 1 340px;\\r\\n  }\\r\\n\\r\\n  label {\\r\\n    color: var(--accent2-quaternary);\\r\\n  }\\r\\n\\r\\n  .footer-newsletter h3 {\\r\\n    color: var(--accent2-primary);\\r\\n  }\\r\\n  input:where([type='email']) {\\r\\n    display: block;\\r\\n    margin: 1rem 0;\\r\\n    font-size: 1rem;\\r\\n    font-family: inherit;\\r\\n    padding: 1rem;\\r\\n    width: 100%;\\r\\n    border: 0;\\r\\n    background-color: var(--accent2-quaternary);\\r\\n    border-radius: 10px;\\r\\n  }\\r\\n\\r\\n  input::placeholder {\\r\\n    color: var(--accent1-tertiary);\\r\\n  }\\r\\n\\r\\n  .footer-text,\\r\\n  .newsletter-title {\\r\\n    margin-bottom: 1rem;\\r\\n  }\\r\\n\\r\\n  .copyright {\\r\\n    background-color: var(--sec-color-alpha);\\r\\n    text-align: center;\\r\\n    padding-top: 1.25rem;\\r\\n    padding-bottom: 1.25rem;\\r\\n    font-size: 0.875rem;\\r\\n  }\\r\\n\\r\\n  /* Desktop */\\r\\n  @media screen and (min-width: 48em) {\\r\\n    footer {\\r\\n      padding: 0 3vw;\\r\\n    }\\r\\n\\r\\n    .footer-wrapper {\\r\\n      grid-template-areas: 'logo-social nav nav form';\\r\\n    }\\r\\n\\r\\n    .footer nav {\\r\\n      gap: clamp(2rem, 30vw, 4rem);\\r\\n    }\\r\\n\\r\\n    .footer-wrapper > * {\\r\\n      margin-inline: auto;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAmEE,oCAAO,CACL,OAAO,CAAE,CAAC,CAAC,GACb,CAEA,6CAAgB,CACd,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,mBAAmB,CACjB,MAAM;AACZ,MAAM,KAAK;AACX,MAAM,aAAa,CACf,WAAW,CAAE,IACf,CAEA,iDAAoB,CAClB,SAAS,CAAE,WAAW,CACtB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,cAAc,CAC9B,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,MACP,CAEA,qBAAM,CAAC,kBAAI,CACT,SAAS,CAAE,GAAG,CACd,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,MAAM,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAC7B,CAEA,0CAAa,CACX,MAAM,CAAE,QAAQ,CAAC,CAAC,CAClB,KAAK,CAAE,IAAI,oBAAoB,CACjC,CAEA,qBAAM,CAAC,iBAAG,CACR,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,OAAO,CAAC,CACvB,cAAc,CAAE,SAAS,CACzB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,kBAAkB,CAC/B,CAEA,gDAAmB,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CAGA,gDAAmB,CACjB,SAAS,CAAE,IAAI,CACf,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,KACZ,CAEA,mCAAM,CACJ,KAAK,CAAE,IAAI,oBAAoB,CACjC,CAEA,iCAAkB,CAAC,iBAAG,CACpB,KAAK,CAAE,IAAI,iBAAiB,CAC9B,CACA,mCAAK,OAAO,CAAC,IAAI,CAAC,OAAO,CAAC,CAAE,CAC1B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,IAAI,oBAAoB,CAAC,CAC3C,aAAa,CAAE,IACjB,CAEA,mCAAK,aAAc,CACjB,KAAK,CAAE,IAAI,kBAAkB,CAC/B,CAEA,0CAAY,CACZ,+CAAkB,CAChB,aAAa,CAAE,IACjB,CAEA,wCAAW,CACT,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,CACxC,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,OAAO,CACpB,cAAc,CAAE,OAAO,CACvB,SAAS,CAAE,QACb,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,IAAI,CAAE,CAClC,oCAAO,CACL,OAAO,CAAE,CAAC,CAAC,GACb,CAEA,6CAAgB,CACd,mBAAmB,CAAE,0BACvB,CAEA,sBAAO,CAAC,kBAAI,CACV,GAAG,CAAE,MAAM,IAAI,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAC7B,CAEA,8BAAe,CAAG,eAAE,CAClB,aAAa,CAAE,IACjB,CACF"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { footerItems } = $$props;
  if ($$props.footerItems === void 0 && $$bindings.footerItems && footerItems !== void 0) $$bindings.footerItems(footerItems);
  $$result.css.add(css$1);
  return `<footer class="footer svelte-1afjhuo"><div class="footer-wrapper svelte-1afjhuo"><div class="footer-logo-social svelte-1afjhuo"><ul class="social-media-list svelte-1afjhuo" role="list" aria-label="Social links">${each(footerItems[0].socialMediaIconsCollection.items, (item) => {
    return `<li class="svelte-1afjhuo">${validate_component(Link, "Link").$$render($$result, { href: item.url }, {}, {
      default: () => {
        return `${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: item.assetCollection.items[0].url,
            height: "50",
            width: "50",
            alt: item.assetCollection.items[0].title,
            loading: "lazy"
          },
          {},
          {}
        )} `;
      }
    })} </li>`;
  })}</ul> <p class="footer-text svelte-1afjhuo" data-svelte-h="svelte-1mukwif">Follow us:</p> <img${add_attribute("src", logo, 0)} height="100" width="100" alt="Wogo Logo"></div> <div class="footer-section svelte-1afjhuo"><nav class="svelte-1afjhuo"><ul aria-label="Footer" role="list">${each(footerItems[0].footerLinksCollection.items, (item) => {
    return `<li class="svelte-1afjhuo">${validate_component(Link, "Link").$$render(
      $$result,
      {
        href: item.slug,
        "aria-label": item.title,
        title: item.title
      },
      {},
      {}
    )} </li>`;
  })}</ul></nav></div> <div class="footer-newsletter svelte-1afjhuo"><h3 class="newsletter-title svelte-1afjhuo">${escape(footerItems[0].newsletterTitle)}</h3> <form action="https://www.freecodecamp.org/email-submit" id="form" method="post"><label for="email" class="svelte-1afjhuo">${escape(footerItems[0].newsLetterDescription)}</label> <input type="email" name="email" id="email"${add_attribute("placeholder", footerItems[0].placeholderText, 0)} required class="svelte-1afjhuo"> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      variant: "primary",
      title: "Subscribe",
      icon: ArrowRight,
      iconColor: "var(--btn-primary-text-clr)",
      size: "sm"
    },
    {},
    {}
  )}</form></div></div> <div class="copyright svelte-1afjhuo" data-svelte-h="svelte-so6noi"><p class="copyright-text">copyright test</p></div> </footer>`;
});
const css = {
  code: ".skip-link.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{position:absolute;left:-9999px;z-index:999;padding:1em;opacity:0}.skip-link.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw:focus-within{left:50%;transform:translateX(-50%);opacity:1}header.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:flex;position:fixed;top:0;right:0;left:0;justify-content:space-between;align-items:center;padding:0.5rem 1rem;gap:1.5rem;z-index:900}#mainMenuOpen.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:none}nav.svelte-3xjpcw li:focus-within .sub-menu.svelte-3xjpcw.svelte-3xjpcw,nav.svelte-3xjpcw li:hover .sub-menu.svelte-3xjpcw.svelte-3xjpcw{display:flex;opacity:1}nav.svelte-3xjpcw li.svelte-3xjpcw.svelte-3xjpcw{position:relative;font-size:var(--fs-lg);text-transform:lowercase;padding:0.5rem 1rem}nav.svelte-3xjpcw li.svelte-3xjpcw.svelte-3xjpcw:last-of-type{margin-left:5px}nav.svelte-3xjpcw ul.svelte-3xjpcw>li.svelte-3xjpcw{display:inline-block}.more-button.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{position:relative}.more-dropdown.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:none;position:absolute;top:150%;left:0;background-color:var(--accent2-tertiary);border-radius:var(--radius-md);overflow:hidden;opacity:0;transform:translateY(-10px);transition:opacity 0.3s ease,\r\n      transform 0.3s ease}.more-button.svelte-3xjpcw:focus-within .more-dropdown.svelte-3xjpcw.svelte-3xjpcw,.more-button.svelte-3xjpcw:hover .more-dropdown.svelte-3xjpcw.svelte-3xjpcw{display:block;opacity:1}.more-dropdown.svelte-3xjpcw li.svelte-3xjpcw.svelte-3xjpcw{display:block;white-space:nowrap}.sub-menu.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:flex;flex-direction:column;position:absolute;width:max-content;right:1rem;padding:1rem 0;opacity:0;background-color:var(--page-bg-color)}li.svelte-3xjpcw:focus-within>.sub-menu.svelte-3xjpcw.svelte-3xjpcw{display:block}.sub-menu.svelte-3xjpcw .sub-menu li.svelte-3xjpcw.svelte-3xjpcw{display:flex}.button-cart-container.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:flex;align-items:center;position:relative;top:0;right:20px;gap:2rem}@media(max-width: 65em){header.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{justify-content:0}#mainMenuOpen.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:block;width:40px;height:3px;flex-grow:0;border:0;background:transparent;cursor:pointer;order:4}#mainMenuOpen.svelte-3xjpcw span.svelte-3xjpcw.svelte-3xjpcw,#mainMenuOpen.svelte-3xjpcw span.svelte-3xjpcw.svelte-3xjpcw::before,#mainMenuOpen.svelte-3xjpcw span.svelte-3xjpcw.svelte-3xjpcw::after{display:block;position:absolute;content:'';width:40px;height:3px;background:var(--accent2-primary);border-radius:var(--radius-lg)}#mainMenuOpen.svelte-3xjpcw span.svelte-3xjpcw.svelte-3xjpcw::before{margin-top:-12px}#mainMenuOpen.svelte-3xjpcw span.svelte-3xjpcw.svelte-3xjpcw::after{margin-top:12px}#mainMenuOpen.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw::before{top:-8px}#mainMenuOpen.svelte-3xjpcw+nav.svelte-3xjpcw.svelte-3xjpcw{position:fixed;top:0;left:-100%;width:100%;height:100%;overflow:auto;display:flex;align-items:center;justify-content:center;opacity:0;background:var(--page-bg-color);transition:top 2s 0.5s,\r\n        opacity 0.5s}#mainMenuOpen.svelte-3xjpcw:focus+nav.svelte-3xjpcw.svelte-3xjpcw,#mainMenuOpen.svelte-3xjpcw+nav.svelte-3xjpcw.svelte-3xjpcw:focus-within{left:0;opacity:1;transition:top 0s,\r\n        opacity 0.5s}#mainMenuOpen+nav.svelte-3xjpcw li.svelte-3xjpcw.svelte-3xjpcw{display:flex;flex-direction:column;font-size:var(--fs-xl);padding:1rem 0 1rem 0}#mainMenuOpen.svelte-3xjpcw+nav.svelte-3xjpcw>ul.svelte-3xjpcw:after{content:'\\2715';color:var(--txt-primary-clr);display:block;position:absolute;top:1.5rem;right:1.2rem;font-size:2.5rem;cursor:pointer}div.svelte-3xjpcw.svelte-3xjpcw.svelte-3xjpcw{display:flex;align-items:center;gap:1rem;position:relative;top:5px}}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n  import { Link, CartIcon, ArrowDown, Button } from '$lib/index'\\r\\n  import logo from '$lib/assets/logo.webp'\\r\\n  export let navigation\\r\\n<\/script>\\r\\n\\r\\n<header>\\r\\n  <span class=\\"skip-link\\">\\r\\n    <Button\\r\\n      variant=\\"primary\\"\\r\\n      href=\\"#content\\"\\r\\n      title=\\"skip to content\\"\\r\\n      size=\\"lg\\"\\r\\n      aria-label=\\"skip to content\\"\\r\\n      data-sveltekit-preload-data=\\"false\\"\\r\\n    />\\r\\n  </span>\\r\\n  <img src={logo} height=\\"70\\" width=\\"70\\" alt=\\"Wogo Logo\\" />\\r\\n  <button type=\\"button\\" id=\\"mainMenuOpen\\" tabindex=\\"-1\\" aria-label=\\"hamburger-button\\"\\r\\n    ><span></span></button\\r\\n  >\\r\\n  <nav>\\r\\n    <ul>\\r\\n      {#each navigation.navigationLinksCollection.items as link}\\r\\n        {#if link.title === 'More'}\\r\\n          <li class=\\"more-button\\">\\r\\n            <Button variant=\\"primary\\" title=\\"more\\" icon={ArrowDown} size=\\"m\\" />\\r\\n            <ul class=\\"more-dropdown\\">\\r\\n              {#each link.subLinksCollection.items as sublink}\\r\\n                <li>\\r\\n                  <Link\\r\\n                    href={sublink.slug}\\r\\n                    title={sublink.title}\\r\\n                    aria-label={sublink.label}\\r\\n                    color=\\"var(--txt-dark-clr)\\"\\r\\n                  />\\r\\n                </li>\\r\\n              {/each}\\r\\n            </ul>\\r\\n          </li>\\r\\n        {:else}\\r\\n          <li>\\r\\n            <Link\\r\\n              href={link.slug}\\r\\n              title={link.title}\\r\\n              arialabel={link.label}\\r\\n              color=\\"var(--txt-secondary-clr)\\"\\r\\n              filter=\\"var(--filter-drop)\\"\\r\\n            />\\r\\n            {#if link.subLinksCollection.items.length > 0}\\r\\n              <ul class=\\"sub-menu\\" aria-label=\\"Submenu\\">\\r\\n                {#each link.subLinksCollection.items as sublink}\\r\\n                  <li>\\r\\n                    <Link\\r\\n                      href={sublink.slug}\\r\\n                      title={sublink.title}\\r\\n                      aria-label={sublink.label}\\r\\n                      color=\\"var(--txt-dark-clr)\\"\\r\\n                    />\\r\\n                  </li>\\r\\n                {/each}\\r\\n              </ul>\\r\\n            {/if}\\r\\n          </li>\\r\\n        {/if}\\r\\n      {/each}\\r\\n    </ul>\\r\\n  </nav>\\r\\n  <div class=\\"button-cart-container\\">\\r\\n    <CartIcon width=\\"60px\\" height=\\"60px\\" fill=\\"var(--accent2-primary)\\" />\\r\\n  </div>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n  .skip-link {\\r\\n    position: absolute;\\r\\n    left: -9999px;\\r\\n    z-index: 999;\\r\\n    padding: 1em;\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  .skip-link:focus-within {\\r\\n    left: 50%;\\r\\n    transform: translateX(-50%);\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  header {\\r\\n    display: flex;\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    left: 0;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    padding: 0.5rem 1rem;\\r\\n    gap: 1.5rem;\\r\\n    z-index: 900;\\r\\n  }\\r\\n\\r\\n  #mainMenuOpen {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  nav li:focus-within .sub-menu,\\r\\n  nav li:hover .sub-menu {\\r\\n    display: flex;\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  nav li {\\r\\n    position: relative;\\r\\n    font-size: var(--fs-lg);\\r\\n    text-transform: lowercase;\\r\\n    padding: 0.5rem 1rem;\\r\\n  }\\r\\n  nav li:last-of-type {\\r\\n    margin-left: 5px;\\r\\n  }\\r\\n\\r\\n  nav ul > li {\\r\\n    display: inline-block;\\r\\n  }\\r\\n\\r\\n  .more-button {\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .more-dropdown {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: 150%;\\r\\n    left: 0;\\r\\n    background-color: var(--accent2-tertiary);\\r\\n    border-radius: var(--radius-md);\\r\\n    overflow: hidden;\\r\\n    opacity: 0;\\r\\n    transform: translateY(-10px);\\r\\n    transition:\\r\\n      opacity 0.3s ease,\\r\\n      transform 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .more-button:focus-within .more-dropdown,\\r\\n  .more-button:hover .more-dropdown {\\r\\n    display: block;\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  .more-dropdown li {\\r\\n    display: block;\\r\\n    white-space: nowrap;\\r\\n  }\\r\\n\\r\\n  .sub-menu {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    position: absolute;\\r\\n    width: max-content;\\r\\n    right: 1rem;\\r\\n    padding: 1rem 0;\\r\\n    opacity: 0;\\r\\n    background-color: var(--page-bg-color);\\r\\n  }\\r\\n\\r\\n  li:focus-within > .sub-menu {\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .sub-menu .sub-menu li {\\r\\n    display: flex;\\r\\n  }\\r\\n\\r\\n  .button-cart-container {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    position: relative;\\r\\n    top: 0;\\r\\n    right: 20px;\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  @media (max-width: 65em) {\\r\\n    header {\\r\\n      justify-content: 0;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen {\\r\\n      display: block;\\r\\n      width: 40px;\\r\\n      height: 3px;\\r\\n      flex-grow: 0;\\r\\n      border: 0;\\r\\n      background: transparent;\\r\\n      cursor: pointer;\\r\\n      order: 4;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen span,\\r\\n    #mainMenuOpen span::before,\\r\\n    #mainMenuOpen span::after {\\r\\n      display: block;\\r\\n      position: absolute;\\r\\n      content: '';\\r\\n      width: 40px;\\r\\n      height: 3px;\\r\\n      background: var(--accent2-primary);\\r\\n      border-radius: var(--radius-lg);\\r\\n    }\\r\\n    #mainMenuOpen span::before {\\r\\n      margin-top: -12px;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen span::after {\\r\\n      margin-top: 12px;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen::before {\\r\\n      top: -8px;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen + nav {\\r\\n      position: fixed;\\r\\n      top: 0;\\r\\n      left: -100%;\\r\\n      width: 100%;\\r\\n      height: 100%;\\r\\n      overflow: auto;\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      justify-content: center;\\r\\n      opacity: 0;\\r\\n      background: var(--page-bg-color);\\r\\n      transition:\\r\\n        top 2s 0.5s,\\r\\n        opacity 0.5s;\\r\\n    }\\r\\n    #mainMenuOpen:focus + nav,\\r\\n    #mainMenuOpen + nav:focus-within {\\r\\n      left: 0;\\r\\n      opacity: 1;\\r\\n      transition:\\r\\n        top 0s,\\r\\n        opacity 0.5s;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen + nav li {\\r\\n      display: flex;\\r\\n      flex-direction: column;\\r\\n      font-size: var(--fs-xl);\\r\\n      padding: 1rem 0 1rem 0;\\r\\n    }\\r\\n\\r\\n    #mainMenuOpen + nav > ul:after {\\r\\n      content: '\\\\2715';\\r\\n      color: var(--txt-primary-clr);\\r\\n      display: block;\\r\\n      position: absolute;\\r\\n      top: 1.5rem;\\r\\n      right: 1.2rem;\\r\\n      font-size: 2.5rem;\\r\\n      cursor: pointer;\\r\\n    }\\r\\n\\r\\n    div {\\r\\n      display: flex;\\r\\n      align-items: center;\\r\\n      gap: 1rem;\\r\\n      position: relative;\\r\\n      top: 5px;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"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"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navigation } = $$props;
  if ($$props.navigation === void 0 && $$bindings.navigation && navigation !== void 0) $$bindings.navigation(navigation);
  $$result.css.add(css);
  return `<header class="svelte-3xjpcw"><span class="skip-link svelte-3xjpcw">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "primary",
      href: "#content",
      title: "skip to content",
      size: "lg",
      "aria-label": "skip to content",
      "data-sveltekit-preload-data": "false"
    },
    {},
    {}
  )}</span> <img${add_attribute("src", logo, 0)} height="70" width="70" alt="Wogo Logo"> <button type="button" id="mainMenuOpen" tabindex="-1" aria-label="hamburger-button" class="svelte-3xjpcw" data-svelte-h="svelte-k4cg0f"><span class="svelte-3xjpcw"></span></button> <nav class="svelte-3xjpcw"><ul class="svelte-3xjpcw">${each(navigation.navigationLinksCollection.items, (link) => {
    return `${link.title === "More" ? `<li class="more-button svelte-3xjpcw">${validate_component(Button, "Button").$$render(
      $$result,
      {
        variant: "primary",
        title: "more",
        icon: ArrowDown,
        size: "m"
      },
      {},
      {}
    )} <ul class="more-dropdown svelte-3xjpcw">${each(link.subLinksCollection.items, (sublink) => {
      return `<li class="svelte-3xjpcw">${validate_component(Link, "Link").$$render(
        $$result,
        {
          href: sublink.slug,
          title: sublink.title,
          "aria-label": sublink.label,
          color: "var(--txt-dark-clr)"
        },
        {},
        {}
      )} </li>`;
    })}</ul> </li>` : `<li class="svelte-3xjpcw">${validate_component(Link, "Link").$$render(
      $$result,
      {
        href: link.slug,
        title: link.title,
        arialabel: link.label,
        color: "var(--txt-secondary-clr)",
        filter: "var(--filter-drop)"
      },
      {},
      {}
    )} ${link.subLinksCollection.items.length > 0 ? `<ul class="sub-menu svelte-3xjpcw" aria-label="Submenu">${each(link.subLinksCollection.items, (sublink) => {
      return `<li class="svelte-3xjpcw">${validate_component(Link, "Link").$$render(
        $$result,
        {
          href: sublink.slug,
          title: sublink.title,
          "aria-label": sublink.label,
          color: "var(--txt-dark-clr)"
        },
        {},
        {}
      )} </li>`;
    })} </ul>` : ``} </li>`}`;
  })}</ul></nav> <div class="button-cart-container svelte-3xjpcw">${validate_component(CartIcon, "CartIcon").$$render(
    $$result,
    {
      width: "60px",
      height: "60px",
      fill: "var(--accent2-primary)"
    },
    {},
    {}
  )}</div> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, { navigation: data.navigation }, {}, {})} <main id="content">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, { footerItems: data.footer }, {}, {})}`;
});
export {
  Layout as default
};
