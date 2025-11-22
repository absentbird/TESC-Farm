const require_createDataLoader = require('./createDataLoader-DPzze8fV.cjs');
const vue_router = require_createDataLoader.__toESM(require("vue-router"));
const unplugin_vue_router_data_loaders = require_createDataLoader.__toESM(require("unplugin-vue-router/data-loaders"));
const vue = require_createDataLoader.__toESM(require("vue"));

//#region src/data-loaders/defineLoader.ts
function defineBasicLoader(nameOrLoader, _loaderOrOptions, opts) {
	const loader = typeof nameOrLoader === "function" ? nameOrLoader : _loaderOrOptions;
	opts = typeof _loaderOrOptions === "object" ? _loaderOrOptions : opts;
	const options = {
		...DEFAULT_DEFINE_LOADER_OPTIONS,
		...opts,
		commit: opts?.commit || DEFAULT_DEFINE_LOADER_OPTIONS.commit
	};
	function load(to, router, from, parent) {
		const entries = router[unplugin_vue_router_data_loaders.LOADER_ENTRIES_KEY];
		const isSSR = router[unplugin_vue_router_data_loaders.IS_SSR_KEY];
		if (!entries.has(loader)) entries.set(loader, {
			data: (0, vue.shallowRef)(),
			isLoading: (0, vue.shallowRef)(false),
			error: (0, vue.shallowRef)(),
			to,
			options,
			children: /* @__PURE__ */ new Set(),
			resetPending() {
				this.pendingLoad = null;
				this.pendingTo = null;
			},
			pendingLoad: null,
			pendingTo: null,
			staged: unplugin_vue_router_data_loaders.STAGED_NO_VALUE,
			stagedError: null,
			commit
		});
		const entry = entries.get(loader);
		if (entry.pendingTo === to && entry.pendingLoad) return entry.pendingLoad;
		const { error, isLoading, data } = entry;
		const initialRootData = router[INITIAL_DATA_KEY];
		const key = options.key || "";
		let initialData = unplugin_vue_router_data_loaders.STAGED_NO_VALUE;
		if (initialRootData && key in initialRootData) {
			initialData = initialRootData[key];
			delete initialRootData[key];
		}
		if (initialData !== unplugin_vue_router_data_loaders.STAGED_NO_VALUE) {
			data.value = initialData;
			return entry.pendingLoad = Promise.resolve();
		}
		entry.pendingTo = to;
		isLoading.value = true;
		const currentContext = (0, unplugin_vue_router_data_loaders.getCurrentContext)();
		if (process.env.NODE_ENV === "development") {
			if (parent !== currentContext[0]) console.warn(`❌👶 "${options.key}" has a different parent than the current context. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`);
		}
		(0, unplugin_vue_router_data_loaders.setCurrentContext)([
			entry,
			router,
			to
		]);
		entry.staged = unplugin_vue_router_data_loaders.STAGED_NO_VALUE;
		entry.stagedError = error.value;
		const currentLoad = Promise.resolve(loader(to, { signal: to.meta[unplugin_vue_router_data_loaders.ABORT_CONTROLLER_KEY]?.signal })).then((d) => {
			if (entry.pendingLoad === currentLoad) if (d instanceof unplugin_vue_router_data_loaders.NavigationResult) to.meta[unplugin_vue_router_data_loaders.NAVIGATION_RESULTS_KEY].push(d);
			else {
				entry.staged = d;
				entry.stagedError = null;
			}
		}).catch((e) => {
			if (entry.pendingLoad === currentLoad) {
				entry.stagedError = e;
				if (!require_createDataLoader.toLazyValue(options.lazy, to, from) || isSSR) throw e;
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
		if (this.pendingTo === to) {
			if (process.env.NODE_ENV === "development") {
				if (this.staged === unplugin_vue_router_data_loaders.STAGED_NO_VALUE) console.warn(`Loader "${options.key}"'s "commit()" was called but there is no staged data.`);
			}
			if (this.staged !== unplugin_vue_router_data_loaders.STAGED_NO_VALUE) this.data.value = this.staged;
			this.error.value = this.stagedError;
			this.staged = unplugin_vue_router_data_loaders.STAGED_NO_VALUE;
			this.stagedError = this.error.value;
			this.pendingTo = null;
			this.to = to;
			for (const childEntry of this.children) childEntry.commit(to);
		}
	}
	const useDataLoader = () => {
		const currentContext = (0, unplugin_vue_router_data_loaders.getCurrentContext)();
		const [parentEntry, _router, _route] = currentContext;
		const router = _router || (0, vue_router.useRouter)();
		const route = _route || (0, vue_router.useRoute)();
		const entries = router[unplugin_vue_router_data_loaders.LOADER_ENTRIES_KEY];
		let entry = entries.get(loader);
		if (!entry || parentEntry && entry.pendingTo !== route || !entry.pendingLoad) router[unplugin_vue_router_data_loaders.APP_KEY].runWithContext(() => load(route, router, void 0, parentEntry));
		entry = entries.get(loader);
		if (parentEntry) {
			if (parentEntry === entry) console.warn(`👶❌ "${options.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`);
			parentEntry.children.add(entry);
		}
		const { data, error, isLoading } = entry;
		const useDataLoaderResult = {
			data,
			error,
			isLoading,
			reload: (to = router.currentRoute.value) => router[unplugin_vue_router_data_loaders.APP_KEY].runWithContext(() => load(to, router)).then(() => entry.commit(to))
		};
		const promise = entry.pendingLoad.then(() => {
			return entry.staged === unplugin_vue_router_data_loaders.STAGED_NO_VALUE ? data.value : entry.staged;
		}).catch((e) => parentEntry ? Promise.reject(e) : null);
		(0, unplugin_vue_router_data_loaders.setCurrentContext)(currentContext);
		return Object.assign(promise, useDataLoaderResult);
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
const DEFAULT_DEFINE_LOADER_OPTIONS = {
	lazy: false,
	server: true,
	commit: "after-load"
};
/**
* Symbol used to store the data in the router so it can be retrieved after the initial navigation.
* @internal
*/
const SERVER_INITIAL_DATA_KEY = Symbol();
/**
* Initial data generated on server and consumed on client.
* @internal
*/
const INITIAL_DATA_KEY = Symbol();

//#endregion
exports.defineBasicLoader = defineBasicLoader;