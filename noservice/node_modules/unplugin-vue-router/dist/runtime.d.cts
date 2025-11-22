import { RouteRecordRaw } from "vue-router";

//#region src/runtime.d.ts

/**
 * Defines properties of the route for the current page component.
 *
 * @param route - route information to be added to this page
 * @deprecated - use `definePage` instead
 */
declare const _definePage: (route: DefinePage) => DefinePage;
/**
 * Defines properties of the route for the current page component.
 *
 * @param route - route information to be added to this page
 */
declare const definePage: (route: DefinePage) => DefinePage;
/**
 * Merges route records.
 *
 * @internal
 *
 * @param main - main route record
 * @param routeRecords - route records to merge
 * @returns merged route record
 */
declare function _mergeRouteRecord(main: RouteRecordRaw, ...routeRecords: Partial<RouteRecordRaw>[]): RouteRecordRaw;
/**
 * Type to define a page. Can be augmented to add custom properties.
 */
interface DefinePage extends Partial<Omit<RouteRecordRaw, 'children' | 'components' | 'component' | 'name'>> {
  /**
   * A route name. If not provided, the name will be generated based on the file path.
   * Can be set to `false` to remove the name from types.
   */
  name?: string | false;
}
//#endregion
export { DefinePage, _definePage, _mergeRouteRecord, definePage };