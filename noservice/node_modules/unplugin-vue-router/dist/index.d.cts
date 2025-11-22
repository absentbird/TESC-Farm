import { DEFAULT_OPTIONS, EditableTreeNode, Options, ResolvedOptions, ServerContext, TreeNode, TreeNodeValueParam, TreeNodeValueStatic, createTreeNodeValue, getFileBasedRouteName, getPascalCaseRouteName } from "./options-DN4Qs-Nr.cjs";
import "./types-CuECKBwm.cjs";
import * as unplugin12 from "unplugin";
import * as unplugin10 from "unplugin";
import { StringFilter } from "unplugin";
import { Plugin } from "vite";

//#region src/core/context.d.ts
declare function createRoutesContext(options: ResolvedOptions): {
  scanPages: (startWatchers?: boolean) => Promise<void>;
  writeConfigFiles: () => void;
  setServerContext: (_server: ServerContext) => void;
  stopWatcher: () => void;
  generateRoutes: () => string;
  generateVueRouterProxy: () => string;
  definePageTransform(code: string, id: string): unplugin12.Thenable<unplugin12.TransformResult>;
};
//#endregion
//#region src/data-loaders/auto-exports.d.ts
/**
 * {@link AutoExportLoaders} options.
 */
interface AutoExportLoadersOptions {
  /**
   * Filter page components to apply the auto-export. Passed to `transform.filter.id`.
   */
  transformFilter: StringFilter;
  /**
   * Globs to match the paths of the loaders.
   */
  loadersPathsGlobs: string | string[];
  /**
   * Root of the project. All paths are resolved relatively to this one.
   * @default `process.cwd()`
   */
  root?: string;
}
/**
 * Vite Plugin to automatically export loaders from page components.
 *
 * @param options Options
 * @experimental - This API is experimental and can be changed in the future. It's used internally by `experimental.autoExportsDataLoaders`

 */
declare function AutoExportLoaders({
  transformFilter,
  loadersPathsGlobs,
  root
}: AutoExportLoadersOptions): Plugin;
//#endregion
//#region src/index.d.ts
declare const _default: unplugin10.UnpluginInstance<Options | undefined, boolean>;
/**
 * Adds useful auto imports to the AutoImport config:
 * @example
 * ```js
 * import { VueRouterAutoImports } from 'unplugin-vue-router'
 *
 * AutoImport({
 *   imports: [VueRouterAutoImports],
 * }),
 * ```
 */
declare const VueRouterAutoImports: Record<string, Array<string | [importName: string, alias: string]>>;
//#endregion
export { AutoExportLoaders, AutoExportLoadersOptions, DEFAULT_OPTIONS, EditableTreeNode, Options, TreeNode, TreeNodeValueParam, TreeNodeValueStatic, VueRouterAutoImports, createRoutesContext, createTreeNodeValue, _default as default, getFileBasedRouteName, getPascalCaseRouteName };