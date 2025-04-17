import {
  __spreadValues,
  fontsourceImports,
  getHeadLinkTags,
  src_default
} from "./chunk-SL56ZVBH.mjs";

// src/nuxt.ts
import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
var nuxt_default = defineNuxtModule({
  meta: {
    name: "unplugin-fonts",
    configKey: "unfonts"
  },
  setup(options, nuxt) {
    var _a, _b, _c;
    if ("fontsource" in options || "custom" in options) {
      (_a = nuxt.options).css || (_a.css = []);
      nuxt.options.css.push("unfonts.css");
      if ("fontsource" in options) {
        for (const src of fontsourceImports(options.fontsource))
          nuxt.options.css.push(src);
        delete options.fontsource;
      }
    }
    if (options.custom)
      options.custom.prefetchPrefix = nuxt.options.runtimeConfig.app.buildAssetsDir;
    const links = getHeadLinkTags(options);
    (_b = nuxt.options.app).head || (_b.head = {});
    (_c = nuxt.options.app.head).link || (_c.link = []);
    for (const link of links) {
      nuxt.options.app.head.link.push(__spreadValues({}, link.attrs));
    }
    addWebpackPlugin(src_default.webpack(options));
    addVitePlugin(src_default.vite(options));
  }
});
export {
  nuxt_default as default
};
