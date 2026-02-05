const require_createDataLoader = require('./createDataLoader-DPzze8fV.cjs');
require('./utils-vwCPb_Ef.cjs');
const vue_router = require_createDataLoader.__toESM(require("vue-router"));
const unplugin_vue_router_data_loaders = require_createDataLoader.__toESM(require("unplugin-vue-router/data-loaders"));
const vue = require_createDataLoader.__toESM(require("vue"));
const __pinia_colada = require_createDataLoader.__toESM(require("@pinia/colada"));

//#region src/data-loaders/defineColadaLoader.ts
function defineColadaLoader(nameOrOptions, _options) {
	_options = _options || nameOrOptions;
	const loader = _options.query;
	const options = {
		...DEFAULT_DEFINE_LOADER_OPTIONS,
		..._options,
		commit: _options?.commit || "after-load"
	};
	let isInitial = true;
	function load(to, router, from, parent, reload) {
		const entries = router[unplugin_vue_router_data_loaders.LOADER_ENTRIES_KEY];
		const isSSR = router[unplugin_vue_router_data_loaders.IS_SSR_KEY];
		const key = serializeQueryKey(options.key, to);
		if (!entries.has(loader)) {
			const route = (0, vue.shallowRef)(to);
			entries.set(loader, {
				data: (0, vue.shallowRef)(),
				isLoading: (0, vue.shallowRef)(false),
				error: (0, vue.shallowRef)(),
				to,
				options,
				children: /* @__PURE__ */ new Set(),
				resetPending() {
					this.pendingTo = null;
					this.pendingLoad = null;
					this.isLoading.value = false;
				},
				staged: unplugin_vue_router_data_loaders.STAGED_NO_VALUE,
				stagedError: null,
				commit,
				tracked: /* @__PURE__ */ new Map(),
				ext: null,
				route,
				pendingTo: null,
				pendingLoad: null
			});
		}
		const entry = entries.get(loader);
		if (entry.pendingTo === to && entry.pendingLoad) return entry.pendingLoad;
		const currentContext = (0, unplugin_vue_router_data_loaders.getCurrentContext)();
		if (process.env.NODE_ENV === "development") {
			if (parent !== currentContext[0]) console.warn(`❌👶 "${key}" has a different parent than the current context. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`);
		}
		(0, unplugin_vue_router_data_loaders.setCurrentContext)([
			entry,
			router,
			to
		]);
		const app = router[unplugin_vue_router_data_loaders.APP_KEY];
		if (!entry.ext) {
			entry.ext = (0, __pinia_colada.useQuery)({
				...options,
				query: () => {
					const route = entry.route.value;
					const [trackedRoute, params, query, hash] = (0, unplugin_vue_router_data_loaders.trackRoute)(route);
					entry.tracked.set(joinKeys(serializeQueryKey(options.key, trackedRoute)), {
						ready: false,
						params,
						query,
						hash
					});
					return app.runWithContext(() => loader(trackedRoute, { signal: route.meta[unplugin_vue_router_data_loaders.ABORT_CONTROLLER_KEY]?.signal }));
				},
				key: () => toValueWithParameters(options.key, entry.route.value)
			});
			if (entry.ext.asyncStatus.value === "loading") reload = false;
		}
		const { isLoading, data, error, ext } = entry;
		if (isInitial) {
			isInitial = false;
			if (ext.data.value !== void 0) {
				data.value = ext.data.value;
				(0, unplugin_vue_router_data_loaders.setCurrentContext)(currentContext);
				return entry.pendingLoad = Promise.resolve();
			}
		}
		if (entry.route.value !== to) {
			const tracked = entry.tracked.get(joinKeys(key));
			reload = !tracked || hasRouteChanged(to, tracked);
		}
		entry.route.value = entry.pendingTo = to;
		isLoading.value = true;
		entry.staged = unplugin_vue_router_data_loaders.STAGED_NO_VALUE;
		entry.stagedError = error.value;
		const currentLoad = ext[reload ? "refetch" : "refresh"]().then(() => {
			if (entry.pendingLoad === currentLoad) {
				const newError = ext.error.value;
				if (newError) {
					entry.stagedError = newError;
					if (!require_createDataLoader.toLazyValue(options.lazy, to, from) || isSSR) throw newError;
				} else {
					const newData = ext.data.value;
					if (newData instanceof unplugin_vue_router_data_loaders.NavigationResult) to.meta[unplugin_vue_router_data_loaders.NAVIGATION_RESULTS_KEY].push(newData);
					else {
						entry.staged = newData;
						entry.stagedError = null;
					}
				}
			}
		}).finally(() => {
			(0, unplugin_vue_router_data_loaders.setCurrentContext)(currentContext);
			if (entry.pendingLoad === currentLoad) {
				isLoading.value = false;
				if (options.commit === "immediate" || !router[unplugin_vue_router_data_loaders.PENDING_LOCATION_KEY]) entry.commit(to);
			}
		});
		(0, unplugin_vue_router_data_loaders.setCurrentContext)(currentContext);
		entry.pendingLoad = currentLoad;
		return currentLoad;
	}
	function commit(to) {
		const key = serializeQueryKey(options.key, to);
		if (this.pendingTo === to) {
			if (process.env.NODE_ENV === "development") {
				if (this.staged === unplugin_vue_router_data_loaders.STAGED_NO_VALUE) console.warn(`Loader "${key}"'s "commit()" was called but there is no staged data.`);
			}
			if (this.staged !== unplugin_vue_router_data_loaders.STAGED_NO_VALUE) {
				this.data.value = this.staged;
				if (process.env.NODE_ENV === "development" && !this.tracked.has(joinKeys(key))) {
					console.warn(`A query was defined with the same key as the loader "[${key.join(", ")}]". If the "key" is meant to be the same, you should directly use the data loader instead. If not, change the key of the "useQuery()".\nSee https://pinia-colada.esm.dev/#TODO`);
					return;
				}
				this.tracked.get(joinKeys(key)).ready = true;
			}
			this.error.value = this.stagedError;
			this.staged = unplugin_vue_router_data_loaders.STAGED_NO_VALUE;
			this.stagedError = this.error.value;
			this.to = to;
			this.pendingTo = null;
			for (const childEntry of this.children) childEntry.commit(to);
		}
	}
	const useDataLoader = () => {
		const currentEntry = (0, unplugin_vue_router_data_loaders.getCurrentContext)();
		const [parentEntry, _router, _route] = currentEntry;
		const router = _router || (0, vue_router.useRouter)();
		const route = _route || (0, vue_router.useRoute)();
		const app = router[unplugin_vue_router_data_loaders.APP_KEY];
		const entries = router[unplugin_vue_router_data_loaders.LOADER_ENTRIES_KEY];
		let entry = entries.get(loader);
		if (!entry || parentEntry && entry.pendingTo !== route || !entry.pendingLoad) app.runWithContext(() => load(route, router, void 0, parentEntry, true));
		entry = entries.get(loader);
		if (parentEntry) {
			if (parentEntry !== entry) parentEntry.children.add(entry);
		}
		const { data, error, isLoading, ext } = entry;
		(0, vue.watch)(ext.data, (newData) => {
			if (!router[unplugin_vue_router_data_loaders.PENDING_LOCATION_KEY]) data.value = newData;
		});
		(0, vue.watch)(ext.isLoading, (isFetching) => {
			if (!router[unplugin_vue_router_data_loaders.PENDING_LOCATION_KEY]) isLoading.value = isFetching;
		});
		(0, vue.watch)(ext.error, (newError) => {
			if (!router[unplugin_vue_router_data_loaders.PENDING_LOCATION_KEY]) error.value = newError;
		});
		const useDataLoaderResult = {
			data,
			error,
			isLoading,
			reload: (to = router.currentRoute.value) => app.runWithContext(() => load(to, router, void 0, void 0, true)).then(() => entry.commit(to)),
			refetch: (to = router.currentRoute.value) => app.runWithContext(() => load(to, router, void 0, void 0, true)).then(() => (entry.commit(to), entry.ext.state.value)),
			refresh: (to = router.currentRoute.value) => app.runWithContext(() => load(to, router)).then(() => (entry.commit(to), entry.ext.state.value)),
			status: ext.status,
			asyncStatus: ext.asyncStatus,
			state: ext.state,
			isPending: ext.isPending
		};
		const promise = entry.pendingLoad.then(() => {
			return entry.staged === unplugin_vue_router_data_loaders.STAGED_NO_VALUE ? ext.data.value : entry.staged;
		}).catch((e) => parentEntry ? Promise.reject(e) : null);
		(0, unplugin_vue_router_data_loaders.setCurrentContext)(currentEntry);
		return (0, unplugin_vue_router_data_loaders.assign)(promise, useDataLoaderResult);
	};
	useDataLoader[unplugin_vue_router_data_loaders.IS_USE_DATA_LOADER_KEY] = true;
	useDataLoader._ = {
		load,
		options,
		getEntry(router) {
			return router[unplugin_vue_router_data_loaders.LOADER_ENTRIES_KEY].get(loader);
		}
	};
	return useDataLoader;
}
const joinKeys = (keys) => keys.join("|");
function hasRouteChanged(to, tracked) {
	return !tracked.ready || !(0, unplugin_vue_router_data_loaders.isSubsetOf)(tracked.params, to.params) || !(0, unplugin_vue_router_data_loaders.isSubsetOf)(tracked.query, to.query) || tracked.hash.v != null && tracked.hash.v !== to.hash;
}
const DEFAULT_DEFINE_LOADER_OPTIONS = {
	lazy: false,
	server: true,
	commit: "after-load"
};
const toValueWithParameters = (optionValue, arg) => {
	return typeof optionValue === "function" ? optionValue(arg) : optionValue;
};
/**
* Transform the key to a string array so it can be used as a key in caches.
*
* @param key - key to transform
* @param to - route to use
*/
function serializeQueryKey(keyOption, to) {
	const key = toValueWithParameters(keyOption, to);
	const keys = Array.isArray(key) ? key : [key];
	return keys.map(stringifyFlatObject);
}
function stringifyFlatObject(obj) {
	return obj && typeof obj === "object" ? JSON.stringify(obj, Object.keys(obj).sort()) : String(obj);
}

//#endregion
exports.defineColadaLoader = defineColadaLoader;