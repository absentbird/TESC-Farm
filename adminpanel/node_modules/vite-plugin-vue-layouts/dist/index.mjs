// src/index.ts
import { resolve as resolve2 } from "path";

// src/clientSide.ts
import { posix } from "path";
function normalizePath(path) {
  path = path.startsWith("/") ? path : `/${path}`;
  return posix.normalize(path);
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
import fg2 from "fast-glob";

// src/utils.ts
import Debug from "debug";
import fg from "fast-glob";
import { resolve } from "path";
function extensionsToGlob(extensions) {
  return extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0] || "";
}
function normalizePath2(str) {
  return str.replace(/\\/g, "/");
}
var debug = Debug("vite-plugin-layouts");
function resolveDirs(dirs, root) {
  if (dirs === null)
    return [];
  const dirsArray = Array.isArray(dirs) ? dirs : [dirs];
  const dirsResolved = [];
  for (const dir of dirsArray) {
    if (dir.includes("**")) {
      const matches = fg.sync(dir, { onlyDirectories: true });
      for (const match of matches)
        dirsResolved.push(normalizePath2(resolve(root, match)));
    } else {
      dirsResolved.push(normalizePath2(resolve(root, dir)));
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
  const files = await fg2(`**/*.${ext}`, {
    ignore: ["node_modules", ".git", "**/__*__/*", ...exclude],
    onlyFiles: true,
    cwd: path
  });
  return files;
}

// src/importCode.ts
import { join, parse } from "path";
function getImportCode(files, options) {
  const imports = [];
  const head = [];
  let id = 0;
  for (const __ of files) {
    for (const file of __.files) {
      const path = __.path.substr(0, 1) === "/" ? `${__.path}/${file}` : `/${__.path}/${file}`;
      const parsed = parse(file);
      const name = join(parsed.dir, parsed.name).replace(/\\/g, "/");
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
      const reloadModule = (module, path = "*") => {
        if (module) {
          moduleGraph.invalidateModule(module);
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
          const module = moduleGraph.getModuleById(MODULE_ID_VIRTUAL);
          reloadModule(module);
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
          const layoutsDirPath = dir.substr(0, 1) === "/" ? normalizePath2(dir) : normalizePath2(resolve2(config.root, dir));
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
export {
  ClientSideLayout,
  Layout as default,
  defaultImportMode
};
