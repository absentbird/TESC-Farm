// src/webpack/context.ts
import { Buffer } from "buffer";
import { createRequire } from "module";
import { resolve } from "path";
import process from "process";
import { Parser } from "acorn";
var require2 = createRequire(import.meta.url);
function getSource(fileSource) {
  const webpack = require2("webpack");
  return new webpack.sources.RawSource(
    typeof fileSource === "string" ? fileSource : Buffer.from(fileSource.buffer)
  );
}
function createBuildContext(options, compiler, compilation, loaderContext) {
  return {
    parse(code, opts = {}) {
      return Parser.parse(code, {
        sourceType: "module",
        ecmaVersion: "latest",
        locations: true,
        ...opts
      });
    },
    addWatchFile(id) {
      options.addWatchFile(resolve(process.cwd(), id));
    },
    emitFile(emittedFile) {
      const outFileName = emittedFile.fileName || emittedFile.name;
      if (emittedFile.source && outFileName) {
        if (!compilation)
          throw new Error("unplugin/webpack: emitFile outside supported hooks  (buildStart, buildEnd, load, transform, watchChange)");
        compilation.emitAsset(
          outFileName,
          getSource(emittedFile.source)
        );
      }
    },
    getWatchFiles() {
      return options.getWatchFiles();
    },
    getNativeBuildContext() {
      return { framework: "webpack", compiler, compilation, loaderContext };
    }
  };
}
function createContext(loader) {
  return {
    error: (error) => loader.emitError(normalizeMessage(error)),
    warn: (message) => loader.emitWarning(normalizeMessage(message))
  };
}
function normalizeMessage(error) {
  const err = new Error(typeof error === "string" ? error : error.message);
  if (typeof error === "object") {
    err.stack = error.stack;
    err.cause = error.meta;
  }
  return err;
}

// src/webpack/loaders/transform.ts
async function transform(source, map) {
  const callback = this.async();
  const { plugin } = this.query;
  if (!plugin?.transform)
    return callback(null, source, map);
  const context = createContext(this);
  const res = await plugin.transform.call(
    Object.assign({}, createBuildContext({
      addWatchFile: (file) => {
        this.addDependency(file);
      },
      getWatchFiles: () => {
        return this.getDependencies();
      }
    }, this._compiler, this._compilation, this), context),
    source,
    this.resource
  );
  if (res == null)
    callback(null, source, map);
  else if (typeof res !== "string")
    callback(null, res.code, map == null ? map : res.map || map);
  else
    callback(null, res, map);
}
export {
  transform as default
};
