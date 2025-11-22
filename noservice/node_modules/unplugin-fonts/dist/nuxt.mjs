import {
  __spreadValues,
  customVirtualModule,
  fontsourceImports,
  getHeadLinkTags,
  index_default
} from "./chunk-PDNCT3ZD.mjs";

// src/nuxt.ts
import { addTemplate, addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
var nuxt_default = defineNuxtModule({
  meta: {
    name: "unplugin-fonts",
    configKey: "unfonts"
  },
  setup(options, nuxt) {
    var _a, _b, _c;
    if ("fontsource" in options || "custom" in options) {
      (_a = nuxt.options).css || (_a.css = []);
      if (options.fontsource) {
        for (const src of fontsourceImports(options.fontsource))
          nuxt.options.css.push(src);
      }
      if (options.custom) {
        nuxt.options.css.push("#build/unfonts.css");
        options.custom.prefetchPrefix = nuxt.options.runtimeConfig.app.buildAssetsDir;
        addTemplate({
          filename: "unfonts.css",
          getContents: () => customVirtualModule(options.custom, nuxt.options.rootDir)
        });
      }
    }
    const links = getHeadLinkTags(options);
    (_b = nuxt.options.app).head || (_b.head = {});
    (_c = nuxt.options.app.head).link || (_c.link = []);
    for (const link of links) {
      nuxt.options.app.head.link.push(__spreadValues({}, link.attrs));
    }
    addWebpackPlugin(index_default.webpack(options));
    addVitePlugin(index_default.vite(options));
  }
});
export {
  nuxt_default as default
};
