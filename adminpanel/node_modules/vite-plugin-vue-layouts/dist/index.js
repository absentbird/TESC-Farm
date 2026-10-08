"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ClientSideLayout: () => ClientSideLayout,
  default: () => Layout,
  defaultImportMode: () => defaultImportMode
});
module.exports = __toCommonJS(src_exports);
var import_path3 = require("path");

// src/clientSide.ts
var import_node_path = require("path");
function normalizePath(path) {
  path = path.startsWith("/") ? path : `/${path}`;
  return import_node_path.posix.normalize(path);
}
async function createVirtualGlob(target, isSync) {
  const g = `"${target}/**/*.vue"`;
  return `import.meta.glob(${g}, { eager: ${isSync} })`;
}
async function createVirtualModuleCode(options) {
  const { layoutDir, defaultLayout, importMode } = options;
  const normalizedTarget = normalizePath(layoutDir);
  const isSync = importMode === "sync";
  return `
  export const createGetRoutes = (router, withLayout = false) => {
      const routes = router.getRoutes()
      if (withLayout) {
          return routes
      }
      return () => routes.filter(route => !route.meta.isLayout)
  }
  
  export const setupLayouts = routes => {
      const layouts = {}
  
      const modules = ${await createVirtualGlob(
    normalizedTarget,
    isSync
  )}
    
      Object.entries(modules).forEach(([name, module]) => {
          let key = name.replace("${normalizedTarget}/", '').replace('.vue', '')
          layouts[key] = ${isSync ? "module.default" : "module"}
      })
      
    function deepSetupLayout(routes, top = true) {
      return routes.map(route => {
        if (route.children?.length > 0) {
          route.children = deepSetupLayout(route.children, false)
        }

        if (top) {
          // unplugin-vue-router adds a top-level route to the routing group, which we should skip.
          const skipLayout = !route.component && route.children?.find(r => (r.path === '' || r.path === '/') && r.meta?.isLayout)  

          if (skipLayout) {
            return route
          }

          if (route.meta?.layout !== false) {
            return { 
              path: route.path,
              component: layouts[route.meta?.layout || '${defaultLayout}'],
              children: route.path === '/' ? [route] : [{...route, path: ''}],
              meta: {
                isLayout: true
              }
            }
          }
        }
  
        if (route.meta?.layout) {
          return { 
            path: route.path,
            component: layouts[route.meta?.layout],
            children: [ {...route, path: ''} ],
            meta: {
              isLayout: true
            }
          }
        }
  
        return route
      })
    }
  
      return deepSetupLayout(routes)
  }`;
}

// src/files.ts
var import_fast_glob2 = __toESM(require("fast-glob"));

// src/utils.ts
var import_debug = __toESM(require("debug"));
var import_fast_glob = __toESM(require("fast-glob"));
var import_path = require("path");
function extensionsToGlob(extensions) {
  return extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0] || "";
}
function normalizePath2(str) {
  return str.replace(/\\/g, "/");
}
var debug = (0, import_debug.default)("vite-plugin-layouts");
function resolveDirs(dirs, root) {
  if (dirs === null)
    return [];
  const dirsArray = Array.isArray(dirs) ? dirs : [dirs];
  const dirsResolved = [];
  for (const dir of dirsArray) {
    if (dir.includes("**")) {
      const matches = import_fast_glob.default.sync(dir, { onlyDirectories: true });
      for (const match of matches)
        dirsResolved.push(normalizePath2((0, import_path.resolve)(root, match)));
    } else {
      dirsResolved.push(normalizePath2((0, import_path.resolve)(root, dir)));
    }
  }
  return dirsResolved;
}

// src/files.ts
async function getFilesFromPath(path, options) {
  const {
    exclude,
    extensions
  } = options;
  const ext = extensionsToGlob(extensions);
  debug(extensions);
  const files = await (0, import_fast_glob2.default)(`**/*.${ext}`, {
    ignore: ["node_modules", ".git", "**/__*__/*", ...exclude],
    onlyFiles: true,
    cwd: path
  });
  return files;
}

// src/importCode.ts
var import_path2 = require("path");
function getImportCode(files, options) {
  const imports = [];
  const head = [];
  let id = 0;
  for (const __ of files) {
    for (const file of __.files) {
      const path = __.path.substr(0, 1) === "/" ? `${__.path}/${file}` : `/${__.path}/${file}`;
      const parsed = (0, import_path2.parse)(file);
      const name = (0, import_path2.join)(parsed.dir, parsed.name).replace(/\\/g, "/");
      if (options.importMode(name) === "sync") {
        const variable = `__layout_${id}`;
        head.push(`import ${variable} from '${path}'`);
        imports.push(`'${name}': ${variable},`);
        id += 1;
      } else {
        imports.push(`'${name}': () => import('${path}'),`);
      }
    }
  }
  const importsCode = `
${head.join("\n")}
export const layouts = {
${imports.join("\n")}
}`;
  return importsCode;
}

// src/RouteLayout.ts
function getClientCode(importCode, options) {
  const code = `
${importCode}
export const createGetRoutes = (router, withLayout = false) => {
  const routes = router.getRoutes()
  if (withLayout) {
      return routes
  }
  return () => routes.filter(route => !route.meta.isLayout)
}

export function setupLayouts(routes) {
  function deepSetupLayout(routes, top = true) {
    return routes.map(route => {
      if (route.children?.length > 0) {
        route.children = deepSetupLayout(route.children, false)
      }
      
      if (top) {
        // unplugin-vue-router adds a top-level route to the routing group, which we should skip.
        const skipLayout = !route.component && route.children?.find(r => (r.path === '' || r.path === '/') && r.meta?.isLayout)  

        if (skipLayout) {
          return route
        }

        if (route.meta?.layout !== false) {
          return { 
            path: route.path,
            component: layouts[route.meta?.layout || '${options.defaultLayout}'],
            children: route.path === '/' ? [route] : [{...route, path: ''}],
            meta: {
              isLayout: true
            }
          }
        }
      }

      if (route.meta?.layout) {
        return { 
          path: route.path,
          component: layouts[route.meta?.layout],
          children: [ {...route, path: ''} ],
          meta: {
            isLayout: true
          }
        }
      }

      return route
    })
  }

    return deepSetupLayout(routes)

}
`;
  return code;
}
var RouteLayout_default = getClientCode;

// src/index.ts
var MODULE_IDS = ["layouts-generated", "virtual:generated-layouts"];
var MODULE_ID_VIRTUAL = "/@vite-plugin-vue-layouts/generated-layouts";
function defaultImportMode(name) {
  if (process.env.VITE_SSG)
    return "sync";
  return name === "default" ? "sync" : "async";
}
function resolveOptions(userOptions) {
  return Object.assign(
    {
      defaultLayout: "default",
      layoutsDirs: "src/layouts",
      pagesDirs: "src/pages",
      extensions: ["vue"],
      exclude: [],
      importMode: defaultImportMode
    },
    userOptions
  );
}
function Layout(userOptions = {}) {
  if (canEnableClientLayout(userOptions)) {
    return ClientSideLayout({
      defaultLayout: userOptions.defaultLayout,
      layoutDir: userOptions.layoutsDirs
    });
  }
  let config;
  const options = resolveOptions(userOptions);
  let layoutDirs;
  let pagesDirs;
  return {
    name: "vite-plugin-vue-layouts",
    enforce: "pre",
    configResolved(_config) {
      config = _config;
      layoutDirs = resolveDirs(options.layoutsDirs, config.root);
      pagesDirs = resolveDirs(options.pagesDirs, config.root);
    },
    configureServer({ moduleGraph, watcher, ws }) {
      watcher.add(options.layoutsDirs);
      const reloadModule = (module2, path = "*") => {
        if (module2) {
          moduleGraph.invalidateModule(module2);
          if (ws) {
            ws.send({
              path,
              type: "full-reload"
            });
          }
        }
      };
      const updateVirtualModule = (path) => {
        path = normalizePath2(path);
        if (pagesDirs.length === 0 || pagesDirs.some((dir) => path.startsWith(dir)) || layoutDirs.some((dir) => path.startsWith(dir))) {
          debug("reload", path);
          const module2 = moduleGraph.getModuleById(MODULE_ID_VIRTUAL);
          reloadModule(module2);
        }
      };
      watcher.on("add", (path) => {
        updateVirtualModule(path);
      });
      watcher.on("unlink", (path) => {
        updateVirtualModule(path);
      });
      watcher.on("change", async (path) => {
        updateVirtualModule(path);
      });
    },
    resolveId(id) {
      return MODULE_IDS.includes(id) || MODULE_IDS.some((i) => id.startsWith(i)) ? MODULE_ID_VIRTUAL : null;
    },
    async load(id) {
      if (id === MODULE_ID_VIRTUAL) {
        const container = [];
        for (const dir of layoutDirs) {
          const layoutsDirPath = dir.substr(0, 1) === "/" ? normalizePath2(dir) : normalizePath2((0, import_path3.resolve)(config.root, dir));
          debug("Loading Layout Dir: %O", layoutsDirPath);
          const _f = await getFilesFromPath(layoutsDirPath, options);
          container.push({ path: layoutsDirPath, files: _f });
        }
        const importCode = getImportCode(container, options);
        const clientCode = RouteLayout_default(importCode, options);
        debug("Client code: %O", clientCode);
        return clientCode;
      }
    }
  };
}
function ClientSideLayout(options) {
  const {
    layoutDir = "src/layouts",
    defaultLayout = "default",
    importMode = process.env.VITE_SSG ? "sync" : "async"
  } = options || {};
  return {
    name: "vite-plugin-vue-layouts",
    resolveId(id) {
      const MODULE_ID = MODULE_IDS.find((MODULE_ID2) => id === MODULE_ID2);
      if (MODULE_ID) {
        return `\0` + MODULE_ID;
      }
    },
    load(id) {
      if (MODULE_IDS.some((MODULE_ID) => id === `\0${MODULE_ID}`)) {
        return createVirtualModuleCode({
          layoutDir,
          importMode,
          defaultLayout
        });
      }
    }
  };
}
function canEnableClientLayout(options) {
  const keys = Object.keys(options);
  if (keys.length > 2 || keys.some((key) => !["layoutDirs", "defaultLayout"].includes(key))) {
    return false;
  }
  if (options.layoutsDirs && (Array.isArray(options.layoutsDirs) || options.layoutsDirs.includes("*"))) {
    return false;
  }
  return true;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClientSideLayout,
  defaultImportMode
});
