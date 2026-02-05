import { ImportsMap, appendExtensionListToPattern, asRoutePath, joinPath, logTree, mergeAllExtensions, mergeRouteRecordOverride, resolveOptions, throttle, warn } from "./options-vQOEqZ01.js";
import { createUnplugin } from "unplugin";
import { promises } from "fs";
import path, { dirname, join, relative, resolve } from "pathe";
import { MagicString, babelParse, checkInvalidScopeReference, generateTransform, getLang, isCallOf, parseSFC } from "@vue-macros/common";
import { glob } from "tinyglobby";
import { parse } from "@vue/compiler-sfc";
import JSON5 from "json5";
import { parse as parse$1 } from "yaml";
import { watch } from "chokidar";
import picomatch from "picomatch";
import { walkAST } from "ast-walker-scope";
import { findStaticImports, parseStaticImport } from "mlly";
import { isPackageExists } from "local-pkg";
import { createFilter } from "unplugin-utils";
import MagicString$1 from "magic-string";

//#region src/core/treeNodeValue.ts
let TreeNodeType = /* @__PURE__ */ function(TreeNodeType$1) {
	TreeNodeType$1[TreeNodeType$1["static"] = 0] = "static";
	TreeNodeType$1[TreeNodeType$1["group"] = 1] = "group";
	TreeNodeType$1[TreeNodeType$1["param"] = 2] = "param";
	return TreeNodeType$1;
}({});
const EDITS_OVERRIDE_NAME = "@@edits";
var _TreeNodeValueBase = class {
	/**
	* flag based on the type of the segment
	*/
	_type;
	parent;
	/**
	* segment as defined by the file structure e.g. keeps the `index` name, `(group-name)`
	*/
	rawSegment;
	/**
	* transformed version of the segment into a vue-router path. e.g. `'index'` becomes `''` and `[param]` becomes
	* `:param`, `prefix-[param]-end` becomes `prefix-:param-end`.
	*/
	pathSegment;
	/**
	* Array of sub segments. This is usually one single elements but can have more for paths like `prefix-[param]-end.vue`
	*/
	subSegments;
	/**
	* Overrides defined by each file. The map is necessary to handle named views.
	*/
	_overrides = /* @__PURE__ */ new Map();
	/**
	* View name (Vue Router feature) mapped to their corresponding file. By default, the view name is `default` unless
	* specified with a `@` e.g. `index@aux.vue` will have a view name of `aux`.
	*/
	components = /* @__PURE__ */ new Map();
	constructor(rawSegment, parent, pathSegment = rawSegment, subSegments = [pathSegment]) {
		this._type = 0;
		this.rawSegment = rawSegment;
		this.pathSegment = pathSegment;
		this.subSegments = subSegments;
		this.parent = parent;
	}
	/**
	* Path of the node. Can be absolute or not. If it has been overridden, it
	* will return the overridden path.
	*/
	get path() {
		return this.overrides.path ?? this.pathSegment;
	}
	/**
	* Full path of the node including parent nodes.
	*/
	get fullPath() {
		const pathSegment = this.path;
		if (pathSegment.startsWith("/")) return pathSegment;
		return joinPath(this.parent?.fullPath ?? "", pathSegment);
	}
	toString() {
		return this.pathSegment || "<index>";
	}
	isParam() {
		return !!(this._type & TreeNodeType.param);
	}
	isStatic() {
		return this._type === TreeNodeType.static;
	}
	isGroup() {
		return this._type === TreeNodeType.group;
	}
	get overrides() {
		return [...this._overrides.entries()].sort(([nameA], [nameB]) => nameA === nameB ? 0 : nameA !== EDITS_OVERRIDE_NAME && (nameA < nameB || nameB === EDITS_OVERRIDE_NAME) ? -1 : 1).reduce((acc, [_path, routeBlock]) => {
			return mergeRouteRecordOverride(acc, routeBlock);
		}, {});
	}
	setOverride(filePath, routeBlock) {
		this._overrides.set(filePath, routeBlock || {});
	}
	/**
	* Remove all overrides for a given key.
	*
	* @param key - key to remove from the override, e.g. path, name, etc
	*/
	removeOverride(key) {
		for (const [_filePath, routeBlock] of this._overrides) delete routeBlock[key];
	}
	/**
	* Add an override to the current node by merging with the existing values.
	*
	* @param filePath - The file path to add to the override
	* @param routeBlock - The route block to add to the override
	*/
	mergeOverride(filePath, routeBlock) {
		const existing = this._overrides.get(filePath) || {};
		this._overrides.set(filePath, mergeRouteRecordOverride(existing, routeBlock));
	}
	/**
	* Add an override to the current node using the special file path `@@edits` that makes this added at build time.
	*
	* @param routeBlock -  The route block to add to the override
	*/
	addEditOverride(routeBlock) {
		return this.mergeOverride(EDITS_OVERRIDE_NAME, routeBlock);
	}
	/**
	* Set a specific value in the _edits_ override.
	*
	* @param key - key to set in the override, e.g. path, name, etc
	* @param value - value to set in the override
	*/
	setEditOverride(key, value) {
		if (!this._overrides.has(EDITS_OVERRIDE_NAME)) this._overrides.set(EDITS_OVERRIDE_NAME, {});
		const existing = this._overrides.get(EDITS_OVERRIDE_NAME);
		existing[key] = value;
	}
};
var TreeNodeValueStatic = class extends _TreeNodeValueBase {
	_type = TreeNodeType.static;
	constructor(rawSegment, parent, pathSegment = rawSegment) {
		super(rawSegment, parent, pathSegment);
	}
};
var TreeNodeValueGroup = class extends _TreeNodeValueBase {
	_type = TreeNodeType.group;
	groupName;
	constructor(rawSegment, parent, pathSegment, groupName) {
		super(rawSegment, parent, pathSegment);
		this.groupName = groupName;
	}
};
var TreeNodeValueParam = class extends _TreeNodeValueBase {
	params;
	_type = TreeNodeType.param;
	constructor(rawSegment, parent, params, pathSegment, subSegments) {
		super(rawSegment, parent, pathSegment, subSegments);
		this.params = params;
	}
};
/**
* Resolves the options for the TreeNodeValue.
*
* @param options - options to resolve
* @returns resolved options
*/
function resolveTreeNodeValueOptions(options) {
	return {
		format: "file",
		dotNesting: true,
		...options
	};
}
/**
* Creates a new TreeNodeValue based on the segment. The result can be a static segment, group segment or a param segment.
*
* @param segment - path segment
* @param parent - parent node
* @param options - options
*/
function createTreeNodeValue(segment, parent, opts = {}) {
	if (!segment || segment === "index") return new TreeNodeValueStatic(segment, parent, "");
	const options = resolveTreeNodeValueOptions(opts);
	const openingPar = segment.indexOf("(");
	if (options.format === "file" && openingPar >= 0) {
		let groupName;
		const closingPar = segment.lastIndexOf(")");
		if (closingPar < 0 || closingPar < openingPar) {
			warn(`Segment "${segment}" is missing the closing ")". It will be treated as a static segment.`);
			return new TreeNodeValueStatic(segment, parent, segment);
		}
		groupName = segment.slice(openingPar + 1, closingPar);
		const before = segment.slice(0, openingPar);
		const after = segment.slice(closingPar + 1);
		if (!before && !after) return new TreeNodeValueGroup(segment, parent, "", groupName);
	}
	const [pathSegment, params, subSegments] = options.format === "path" ? parseRawPathSegment(segment) : parseFileSegment(segment, options);
	if (params.length) return new TreeNodeValueParam(segment, parent, params, pathSegment, subSegments);
	return new TreeNodeValueStatic(segment, parent, pathSegment);
}
var ParseFileSegmentState = /* @__PURE__ */ function(ParseFileSegmentState$1) {
	ParseFileSegmentState$1[ParseFileSegmentState$1["static"] = 0] = "static";
	ParseFileSegmentState$1[ParseFileSegmentState$1["paramOptional"] = 1] = "paramOptional";
	ParseFileSegmentState$1[ParseFileSegmentState$1["param"] = 2] = "param";
	ParseFileSegmentState$1[ParseFileSegmentState$1["modifier"] = 3] = "modifier";
	return ParseFileSegmentState$1;
}(ParseFileSegmentState || {});
const IS_VARIABLE_CHAR_RE = /[0-9a-zA-Z_]/;
/**
* Parses a segment into the route path segment and the extracted params.
*
* @param segment - segment to parse without the extension
* @returns - the pathSegment and the params
*/
function parseFileSegment(segment, { dotNesting = true } = {}) {
	let buffer = "";
	let state = ParseFileSegmentState.static;
	const params = [];
	let pathSegment = "";
	const subSegments = [];
	let currentTreeRouteParam = createEmptyRouteParam();
	let pos = 0;
	let c;
	function consumeBuffer() {
		if (state === ParseFileSegmentState.static) {
			pathSegment += buffer;
			subSegments.push(buffer);
		} else if (state === ParseFileSegmentState.modifier) {
			currentTreeRouteParam.paramName = buffer;
			currentTreeRouteParam.modifier = currentTreeRouteParam.optional ? currentTreeRouteParam.repeatable ? "*" : "?" : currentTreeRouteParam.repeatable ? "+" : "";
			buffer = "";
			pathSegment += `:${currentTreeRouteParam.paramName}${currentTreeRouteParam.isSplat ? "(.*)" : pos < segment.length - 1 && IS_VARIABLE_CHAR_RE.test(segment[pos + 1]) ? "()" : ""}${currentTreeRouteParam.modifier}`;
			params.push(currentTreeRouteParam);
			subSegments.push(currentTreeRouteParam);
			currentTreeRouteParam = createEmptyRouteParam();
		}
		buffer = "";
	}
	for (pos = 0; pos < segment.length; pos++) {
		c = segment[pos];
		if (state === ParseFileSegmentState.static) if (c === "[") {
			consumeBuffer();
			state = ParseFileSegmentState.paramOptional;
		} else buffer += dotNesting && c === "." ? "/" : c;
		else if (state === ParseFileSegmentState.paramOptional) {
			if (c === "[") currentTreeRouteParam.optional = true;
			else if (c === ".") {
				currentTreeRouteParam.isSplat = true;
				pos += 2;
			} else buffer += c;
			state = ParseFileSegmentState.param;
		} else if (state === ParseFileSegmentState.param) if (c === "]") {
			if (currentTreeRouteParam.optional) pos++;
			state = ParseFileSegmentState.modifier;
		} else if (c === ".") {
			currentTreeRouteParam.isSplat = true;
			pos += 2;
		} else buffer += c;
		else if (state === ParseFileSegmentState.modifier) {
			if (c === "+") currentTreeRouteParam.repeatable = true;
			else pos--;
			consumeBuffer();
			state = ParseFileSegmentState.static;
		}
	}
	if (state === ParseFileSegmentState.param || state === ParseFileSegmentState.paramOptional) throw new Error(`Invalid segment: "${segment}"`);
	if (buffer) consumeBuffer();
	return [
		pathSegment,
		params,
		subSegments
	];
}
var ParseRawPathSegmentState = /* @__PURE__ */ function(ParseRawPathSegmentState$1) {
	ParseRawPathSegmentState$1[ParseRawPathSegmentState$1["static"] = 0] = "static";
	ParseRawPathSegmentState$1[ParseRawPathSegmentState$1["param"] = 1] = "param";
	ParseRawPathSegmentState$1[ParseRawPathSegmentState$1["regexp"] = 2] = "regexp";
	ParseRawPathSegmentState$1[ParseRawPathSegmentState$1["modifier"] = 3] = "modifier";
	return ParseRawPathSegmentState$1;
}(ParseRawPathSegmentState || {});
const IS_MODIFIER_RE = /[+*?]/;
/**
* Parses a raw path segment like the `:id` in a route `/users/:id`.
*
* @param segment - segment to parse without the extension
* @returns - the pathSegment and the params
*/
function parseRawPathSegment(segment) {
	let buffer = "";
	let state = ParseRawPathSegmentState.static;
	const params = [];
	const subSegments = [];
	let currentTreeRouteParam = createEmptyRouteParam();
	let pos = 0;
	let c;
	function consumeBuffer() {
		if (state === ParseRawPathSegmentState.static) subSegments.push(buffer);
		else if (state === ParseRawPathSegmentState.param || state === ParseRawPathSegmentState.regexp || state === ParseRawPathSegmentState.modifier) {
			subSegments.push(currentTreeRouteParam);
			params.push(currentTreeRouteParam);
			currentTreeRouteParam = createEmptyRouteParam();
		}
		buffer = "";
	}
	for (pos = 0; pos < segment.length; pos++) {
		c = segment[pos];
		if (c === "\\") {
			pos++;
			buffer += segment[pos];
			continue;
		}
		if (state === ParseRawPathSegmentState.static) if (c === ":") {
			consumeBuffer();
			state = ParseRawPathSegmentState.param;
		} else buffer += c;
		else if (state === ParseRawPathSegmentState.param) if (c === "(") {
			currentTreeRouteParam.paramName = buffer;
			buffer = "";
			state = ParseRawPathSegmentState.regexp;
		} else if (IS_MODIFIER_RE.test(c)) {
			currentTreeRouteParam.modifier = c;
			currentTreeRouteParam.optional = c === "?" || c === "*";
			currentTreeRouteParam.repeatable = c === "+" || c === "*";
			consumeBuffer();
			state = ParseRawPathSegmentState.static;
		} else if (IS_VARIABLE_CHAR_RE.test(c)) {
			buffer += c;
			currentTreeRouteParam.paramName = buffer;
		} else {
			currentTreeRouteParam.paramName = buffer;
			consumeBuffer();
			pos--;
			state = ParseRawPathSegmentState.static;
		}
		else if (state === ParseRawPathSegmentState.regexp) if (c === ")") {
			if (buffer === ".*") currentTreeRouteParam.isSplat = true;
			state = ParseRawPathSegmentState.modifier;
		} else buffer += c;
		else if (state === ParseRawPathSegmentState.modifier) {
			if (IS_MODIFIER_RE.test(c)) {
				currentTreeRouteParam.modifier = c;
				currentTreeRouteParam.optional = c === "?" || c === "*";
				currentTreeRouteParam.repeatable = c === "+" || c === "*";
			} else pos--;
			consumeBuffer();
			state = ParseRawPathSegmentState.static;
		}
	}
	if (state === ParseRawPathSegmentState.regexp) throw new Error(`Invalid segment: "${segment}"`);
	if (buffer || state === ParseRawPathSegmentState.modifier) consumeBuffer();
	return [
		segment,
		params,
		subSegments
	];
}
/**
* Helper function to create an empty route param used by the parser.
*
* @returns an empty route param
*/
function createEmptyRouteParam() {
	return {
		paramName: "",
		modifier: "",
		optional: false,
		repeatable: false,
		isSplat: false
	};
}

//#endregion
//#region src/core/tree.ts
var TreeNode = class TreeNode {
	/**
	* value of the node
	*/
	value;
	/**
	* children of the node
	*/
	children = /* @__PURE__ */ new Map();
	/**
	* Parent node.
	*/
	parent;
	/**
	* Plugin options taken into account by the tree.
	*/
	options;
	/**
	* Should this page import the page info
	*/
	hasDefinePage = false;
	/**
	* Creates a new tree node.
	*
	* @param options - TreeNodeOptions shared by all nodes
	* @param pathSegment - path segment of this node e.g. `users` or `:id`
	* @param parent
	*/
	constructor(options, pathSegment, parent) {
		this.options = options;
		this.parent = parent;
		this.value = createTreeNodeValue(pathSegment, parent?.value, options.treeNodeOptions || options.pathParser);
	}
	/**
	* Adds a path to the tree. `path` cannot start with a `/`.
	*
	* @param path - path segment to insert. **It shouldn't contain the file extension**
	* @param filePath - file path, must be a file (not a folder)
	*/
	insert(path$1, filePath) {
		const { tail, segment, viewName } = splitFilePath(path$1);
		if (!this.children.has(segment)) this.children.set(segment, new TreeNode(this.options, segment, this));
		const child = this.children.get(segment);
		if (!tail) child.value.components.set(viewName, filePath);
		else return child.insert(tail, filePath);
		return child;
	}
	/**
	* Adds a path that has already been parsed to the tree. `path` cannot start with a `/`. This method is similar to
	* `insert` but the path argument should be already parsed. e.g. `users/:id` for a file named `users/[id].vue`.
	*
	* @param path - path segment to insert, already parsed (e.g. users/:id)
	* @param filePath - file path, defaults to path for convenience and testing
	*/
	insertParsedPath(path$1, filePath = path$1) {
		const isComponent = true;
		const node = new TreeNode({
			...this.options,
			treeNodeOptions: {
				...this.options.pathParser,
				format: "path"
			}
		}, path$1, this);
		this.children.set(path$1, node);
		if (isComponent) node.value.components.set("default", filePath);
		return node;
	}
	/**
	* Saves a custom route block for a specific file path. The file path is used as a key. Some special file paths will
	* have a lower or higher priority.
	*
	* @param filePath - file path where the custom block is located
	* @param routeBlock - custom block to set
	*/
	setCustomRouteBlock(filePath, routeBlock) {
		this.value.setOverride(filePath, routeBlock);
	}
	/**
	* Generator that yields all descendants without sorting.
	* Use with Array.from() for now, native .map() support in Node 22+.
	*/
	*getChildrenDeep() {
		for (const child of this.children.values()) {
			yield child;
			yield* child.getChildrenDeep();
		}
	}
	/**
	* Comparator function for sorting TreeNodes.
	*
	* @internal
	*/
	static compare(a, b) {
		return a.path.localeCompare(b.path, "en");
	}
	/**
	* Get the children of this node sorted by their path.
	*/
	getChildrenSorted() {
		return Array.from(this.children.values()).sort(TreeNode.compare);
	}
	/**
	* Calls {@link getChildrenDeep} and sorts the result by path in the end.
	*/
	getChildrenDeepSorted() {
		return Array.from(this.getChildrenDeep()).sort(TreeNode.compare);
	}
	/**
	* Delete and detach itself from the tree.
	*/
	delete() {
		if (!this.parent) throw new Error("Cannot delete the root node.");
		this.parent.children.delete(this.value.rawSegment);
		this.parent = void 0;
	}
	/**
	* Remove a route from the tree. The path shouldn't start with a `/` but it can be a nested one. e.g. `foo/bar`.
	* The `path` should be relative to the page folder.
	*
	* @param path - path segment of the file
	*/
	remove(path$1) {
		const { tail, segment, viewName } = splitFilePath(path$1);
		const child = this.children.get(segment);
		if (!child) throw new Error(`Cannot Delete "${path$1}". "${segment}" not found at "${this.path}".`);
		if (tail) {
			child.remove(tail);
			if (child.children.size === 0 && child.value.components.size === 0) this.children.delete(segment);
		} else {
			child.value.components.delete(viewName);
			if (child.children.size === 0 && child.value.components.size === 0) this.children.delete(segment);
		}
	}
	/**
	* Returns the route path of the node without parent paths. If the path was overridden, it returns the override.
	*/
	get path() {
		return this.value.overrides.path ?? (this.parent?.isRoot() ? "/" : "") + this.value.pathSegment;
	}
	/**
	* Returns the route path of the node including parent paths.
	*/
	get fullPath() {
		return this.value.fullPath;
	}
	get components() {
		return Object.fromEntries(this.value.components.entries());
	}
	/**
	* Returns the route name of the node. If the name was overridden, it returns the override.
	*/
	get name() {
		const overrideName = this.value.overrides.name;
		return overrideName === void 0 ? this.options.getRouteName(this) : overrideName;
	}
	/**
	* Returns the meta property as an object.
	*/
	get metaAsObject() {
		return { ...this.value.overrides.meta };
	}
	/**
	* Returns the JSON string of the meta object of the node. If the meta was overridden, it returns the override. If
	* there is no override, it returns an empty string.
	*/
	get meta() {
		const overrideMeta = this.metaAsObject;
		return Object.keys(overrideMeta).length > 0 ? JSON.stringify(overrideMeta, null, 2) : "";
	}
	get params() {
		const params = this.value.isParam() ? [...this.value.params] : [];
		let node = this.parent;
		while (node) {
			if (node.value.isParam()) params.unshift(...node.value.params);
			node = node.parent;
		}
		return params;
	}
	/**
	* Returns wether this tree node is the root node of the tree.
	*
	* @returns true if the node is the root node
	*/
	isRoot() {
		return !this.parent && this.value.fullPath === "/" && !this.value.components.size;
	}
	toString() {
		return `${this.value}${this.value.components.size > 1 || this.value.components.size === 1 && !this.value.components.get("default") ? ` ⎈(${Array.from(this.value.components.keys()).join(", ")})` : ""}${this.hasDefinePage ? " ⚑ definePage()" : ""}`;
	}
};
/**
* Creates a new prefix tree. This is meant to only be the root node. It has access to extra methods that only make
* sense on the root node.
*/
var PrefixTree = class extends TreeNode {
	map = /* @__PURE__ */ new Map();
	constructor(options) {
		super(options, "");
	}
	insert(path$1, filePath) {
		const node = super.insert(path$1, filePath);
		this.map.set(filePath, node);
		return node;
	}
	/**
	* Returns the tree node of the given file path.
	*
	* @param filePath - file path of the tree node to get
	*/
	getChild(filePath) {
		return this.map.get(filePath);
	}
	/**
	* Removes the tree node of the given file path.
	*
	* @param filePath - file path of the tree node to remove
	*/
	removeChild(filePath) {
		if (this.map.has(filePath)) {
			this.map.get(filePath).delete();
			this.map.delete(filePath);
		}
	}
};
/**
* Splits a path into by finding the first '/' and returns the tail and segment. If it has an extension, it removes it.
* If it contains a named view, it returns the view name as well (otherwise it's default).
*
* @param filePath - filePath to split
*/
function splitFilePath(filePath) {
	const slashPos = filePath.indexOf("/");
	let head = slashPos < 0 ? filePath : filePath.slice(0, slashPos);
	const tail = slashPos < 0 ? "" : filePath.slice(slashPos + 1);
	let segment = head;
	let viewName = "default";
	const namedSeparatorPos = segment.indexOf("@");
	if (namedSeparatorPos > 0) {
		viewName = segment.slice(namedSeparatorPos + 1);
		segment = segment.slice(0, namedSeparatorPos);
	}
	return {
		segment,
		tail,
		viewName
	};
}

//#endregion
//#region src/codegen/generateRouteParams.ts
function generateRouteParams(node, isRaw) {
	const nodeParams = node.params;
	return nodeParams.length > 0 ? `{ ${nodeParams.map((param) => `${param.paramName}${param.optional ? "?" : ""}: ` + (param.modifier === "+" ? `ParamValueOneOrMore<${isRaw}>` : param.modifier === "*" ? `ParamValueZeroOrMore<${isRaw}>` : param.modifier === "?" ? `ParamValueZeroOrOne<${isRaw}>` : `ParamValue<${isRaw}>`)).join(", ")} }` : "Record<never, never>";
}

//#endregion
//#region src/codegen/generateRouteMap.ts
function generateRouteNamedMap(node) {
	if (node.isRoot()) return `export interface RouteNamedMap {
${node.getChildrenSorted().map(generateRouteNamedMap).join("")}}`;
	return (node.value.components.size > 0 && node.name ? `  '${node.name}': ${generateRouteRecordInfo(node)},\n` : "") + (node.children.size > 0 ? node.getChildrenSorted().map(generateRouteNamedMap).join("\n") : "");
}
function generateRouteRecordInfo(node) {
	const typeParams = [
		`'${node.name}'`,
		`'${node.fullPath}'`,
		generateRouteParams(node, true),
		generateRouteParams(node, false)
	];
	if (node.children.size > 0) {
		const deepNamedChildren = Array.from(node.getChildrenDeep()).filter((childRoute) => childRoute.value.components.size > 0 && childRoute.name).map((childRoute) => `'${childRoute.name}'`).sort();
		if (deepNamedChildren.length > 0) typeParams.push(deepNamedChildren.join(" | "));
	}
	return `RouteRecordInfo<${typeParams.join(", ")}>`;
}

//#endregion
//#region src/codegen/generateRouteFileInfoMap.ts
function generateRouteFileInfoMap(node, { root }) {
	if (!node.isRoot()) throw new Error("The provided node is not a root node");
	const routesInfoList = node.getChildrenSorted().flatMap((child) => generateRouteFileInfoLines(child, root));
	const routesInfo = /* @__PURE__ */ new Map();
	for (const routeInfo of routesInfoList) {
		let info = routesInfo.get(routeInfo.key);
		if (!info) routesInfo.set(routeInfo.key, info = {
			routes: [],
			views: []
		});
		info.routes.push(...routeInfo.routeNames);
		info.views.push(...routeInfo.childrenNamedViews || []);
	}
	const code = Array.from(routesInfo.entries()).map(([file, { routes, views }]) => `
  '${file}': {
    routes: ${routes.map((name) => `'${name}'`).join(" | ")}
    views: ${views.length > 0 ? views.map((view) => `'${view}'`).join(" | ") : "never"}
  }`).join("\n");
	return `export interface _RouteFileInfoMap {
${code}
}`;
}
/**
* Generate the route file info for a non-root node.
*/
function generateRouteFileInfoLines(node, rootDir) {
	const children = node.children.size > 0 ? node.getChildrenDeepSorted() : null;
	const childrenNamedViews = children ? Array.from(new Set(children.flatMap((child) => Array.from(child.value.components.keys())))) : null;
	const routeNames = [node, ...node.getChildrenDeepSorted()].filter((node$1) => !!node$1.name).map((node$1) => node$1.name);
	const currentRouteInfo = routeNames.length === 0 ? [] : Array.from(node.value.components.values()).map((file) => ({
		key: relative(rootDir, file).replaceAll("\\", "/"),
		routeNames,
		childrenNamedViews
	}));
	const childrenRouteInfo = node.getChildrenSorted().flatMap((child) => generateRouteFileInfoLines(child, rootDir));
	return currentRouteInfo.concat(childrenRouteInfo);
}

//#endregion
//#region src/core/moduleConstants.ts
/**
* @deprecated should be removed in favor of just vue-router
*/
const MODULE_VUE_ROUTER_AUTO = "vue-router/auto";
const MODULE_ROUTES_PATH = `${MODULE_VUE_ROUTER_AUTO}-routes`;
let time = Date.now();
/**
* Last time the routes were loaded from MODULE_ROUTES_PATH
*/
const ROUTES_LAST_LOAD_TIME = {
	get value() {
		return time;
	},
	update(when = Date.now()) {
		time = when;
	}
};
const VIRTUAL_PREFIX = "/__";
const ROUTE_BLOCK_ID = `${VIRTUAL_PREFIX}/vue-router/auto/route-block`;
function getVirtualId(id) {
	return id.startsWith(VIRTUAL_PREFIX) ? id.slice(VIRTUAL_PREFIX.length) : null;
}
const routeBlockQueryRE = /\?vue&type=route/;
function asVirtualId(id) {
	return VIRTUAL_PREFIX + id;
}
const DEFINE_PAGE_QUERY_RE = /\?.*\bdefinePage\&vue\b/;

//#endregion
//#region src/codegen/generateRouteRecords.ts
/**
* Generate the route records for the given node.
*
* @param node - the node to generate the route record for
* @param options - the options to use
* @param importsMap - the imports map to fill and use
* @param indent - the indent level
* @returns the code of the routes as a string
*/
function generateRouteRecord(node, options, importsMap, indent = 0) {
	if (node.isRoot()) return `[
${node.getChildrenSorted().map((child) => generateRouteRecord(child, options, importsMap, indent + 1)).join(",\n")}
]`;
	const definePageDataList = [];
	if (node.hasDefinePage) {
		for (const [name, filePath] of node.value.components) {
			const pageDataImport = `_definePage_${name}_${importsMap.size}`;
			definePageDataList.push(pageDataImport);
			const lang = getLang(filePath);
			importsMap.addDefault(`${filePath}?definePage&` + (lang === "vue" ? "vue&lang.tsx" : `lang.${lang}`), pageDataImport);
		}
		if (definePageDataList.length > 0) indent++;
	}
	const startIndent = " ".repeat(indent * 2);
	const indentStr = " ".repeat((indent + 1) * 2);
	const overrides = node.value.overrides;
	const routeRecord = `${startIndent}{
${indentStr}path: '${node.path}',
${indentStr}${node.value.components.size ? node.name ? `name: '${node.name}',` : `/* no name */` : `/* internal name: '${node.name}' */`}
${indentStr}${node.value.components.size ? generateRouteRecordComponent(node, indentStr, options.importMode, importsMap) : "/* no component */"}
${overrides.props != null ? indentStr + `props: ${overrides.props},\n` : ""}${overrides.alias != null ? indentStr + `alias: ${JSON.stringify(overrides.alias)},\n` : ""}${indentStr}${node.children.size > 0 ? `children: [
${node.getChildrenSorted().map((child) => generateRouteRecord(child, options, importsMap, indent + 2)).join(",\n")}
${indentStr}],` : "/* no children */"}${formatMeta(node, indentStr)}
${startIndent}}`;
	if (definePageDataList.length > 0) {
		const mergeCallIndent = startIndent.slice(2);
		importsMap.add("unplugin-vue-router/runtime", "_mergeRouteRecord");
		return `${mergeCallIndent}_mergeRouteRecord(
${routeRecord},
${definePageDataList.map((s) => startIndent + s).join(",\n")}
${mergeCallIndent})`;
	}
	return routeRecord;
}
function generateRouteRecordComponent(node, indentStr, importMode, importsMap) {
	const files = Array.from(node.value.components);
	const isDefaultExport = files.length === 1 && files[0][0] === "default";
	return isDefaultExport ? `component: ${generatePageImport(files[0][1], importMode, importsMap)},` : `components: {
${files.map(([key, path$1]) => `${indentStr + "  "}'${key}': ${generatePageImport(path$1, importMode, importsMap)}`).join(",\n")}
${indentStr}},`;
}
/**
* Generate the import (dynamic or static) for the given filepath. If the filepath is a static import, add it to the importsMap.
*
* @param filepath - the filepath to the file
* @param importMode - the import mode to use
* @param importsMap - the import list to fill
* @returns
*/
function generatePageImport(filepath, importMode, importsMap) {
	const mode = typeof importMode === "function" ? importMode(filepath) : importMode;
	if (mode === "async") return `() => import('${filepath}')`;
	const existingEntry = importsMap.getImportList(filepath).find((entry) => entry.name === "default");
	if (existingEntry) return existingEntry.as;
	const importName = `_page_${importsMap.size}`;
	importsMap.addDefault(filepath, importName);
	return importName;
}
function formatMeta(node, indent) {
	const meta = node.meta;
	const formatted = meta && meta.split("\n").map((line) => indent + line).join("\n");
	return formatted ? "\n" + indent + "meta: " + formatted.trimStart() : "";
}

//#endregion
//#region src/core/customBlock.ts
function getRouteBlock(path$1, content, options) {
	const parsedSFC = parse(content, { pad: "space" }).descriptor;
	const blockStr = parsedSFC?.customBlocks.find((b) => b.type === "route");
	if (blockStr) return parseCustomBlock(blockStr, path$1, options);
}
function parseCustomBlock(block, filePath, options) {
	const lang = block.lang ?? options.routeBlockLang;
	if (lang === "json5") try {
		return JSON5.parse(block.content);
	} catch (err) {
		warn(`Invalid JSON5 format of <${block.type}> content in ${filePath}\n${err.message}`);
	}
	else if (lang === "json") try {
		return JSON.parse(block.content);
	} catch (err) {
		warn(`Invalid JSON format of <${block.type}> content in ${filePath}\n${err.message}`);
	}
	else if (lang === "yaml" || lang === "yml") try {
		return parse$1(block.content);
	} catch (err) {
		warn(`Invalid YAML format of <${block.type}> content in ${filePath}\n${err.message}`);
	}
	else warn(`Language "${lang}" for <${block.type}> is not supported. Supported languages are: json5, json, yaml, yml. Found in in ${filePath}.`);
}

//#endregion
//#region src/core/RoutesFolderWatcher.ts
var RoutesFolderWatcher = class {
	src;
	path;
	extensions;
	filePatterns;
	exclude;
	watcher;
	constructor(folderOptions) {
		this.src = folderOptions.src;
		this.path = folderOptions.path;
		this.exclude = folderOptions.exclude;
		this.extensions = folderOptions.extensions;
		this.filePatterns = folderOptions.pattern;
		const isMatch = picomatch(this.filePatterns, { ignore: this.exclude });
		this.watcher = watch(".", {
			cwd: this.src,
			ignoreInitial: true,
			ignorePermissionErrors: true,
			ignored: (filePath, stats) => {
				if (!stats || stats.isDirectory()) return false;
				return !isMatch(path.relative(this.src, filePath));
			}
		});
	}
	on(event, handler) {
		this.watcher.on(event, (filePath) => {
			filePath = resolve(this.src, filePath);
			handler({
				filePath,
				routePath: asRoutePath({
					src: this.src,
					path: this.path,
					extensions: this.extensions
				}, filePath)
			});
		});
		return this;
	}
	close() {
		return this.watcher.close();
	}
};
function resolveFolderOptions(globalOptions, folderOptions) {
	const extensions = overrideOption(globalOptions.extensions, folderOptions.extensions);
	const filePatterns = overrideOption(globalOptions.filePatterns, folderOptions.filePatterns);
	return {
		src: path.resolve(globalOptions.root, folderOptions.src),
		pattern: appendExtensionListToPattern(filePatterns, extensions),
		path: folderOptions.path || "",
		extensions,
		filePatterns,
		exclude: overrideOption(globalOptions.exclude, folderOptions.exclude).map((p) => p.startsWith("**") ? p : resolve(p))
	};
}
function overrideOption(existing, newValue) {
	const asArray = typeof existing === "string" ? [existing] : existing;
	if (typeof newValue === "function") return newValue(asArray);
	if (typeof newValue !== "undefined") return typeof newValue === "string" ? [newValue] : newValue;
	return asArray;
}

//#endregion
//#region src/utils/index.ts
const ts = String.raw;

//#endregion
//#region src/codegen/generateDTS.ts
/**
* Removes empty lines and indent by two spaces to match the rest of the file.
*/
function normalizeLines(code) {
	return code.split("\n").filter((line) => line.length !== 0).map((line) => line && "  " + line).join("\n");
}
function generateDTS({ routesModule, routeNamedMap, routeFileInfoMap }) {
	return ts`
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module '${routesModule}' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
${normalizeLines(routeNamedMap)}

  /**
   * Route file to route info map by unplugin-vue-router.
   * Used by the volar plugin to automatically type useRoute()
   *
   * Each key is a file path relative to the project root with 2 properties:
   * - routes: union of route names of the possible routes when in this page (passed to useRoute<...>())
   * - views: names of nested views (can be passed to <RouterView name="...">)
   *
   * @internal
   */
${normalizeLines(routeFileInfoMap)}

  /**
   * Get a union of possible route names in a certain route component file.
   * Used by the volar plugin to automatically type useRoute()
   *
   * @internal
   */
  export type _RouteNamesForFilePath<FilePath extends string> =
    _RouteFileInfoMap extends Record<FilePath, infer Info>
      ? Info['routes']
      : keyof RouteNamedMap
}
`.trimStart();
}

//#endregion
//#region src/codegen/vueRouterModule.ts
function generateVueRouterProxy(_routesModule, _options, { addPiniaColada }) {
	return ts`
import { createRouter as _createRouter } from 'vue-router'

export * from 'vue-router'
export { definePage } from 'unplugin-vue-router/runtime'
export {
  DataLoaderPlugin,
  NavigationResult,
} from 'unplugin-vue-router/data-loaders'

export * from 'unplugin-vue-router/data-loaders/basic'
${addPiniaColada ? "export * from 'unplugin-vue-router/data-loaders/pinia-colada'" : ""}

export function createRouter(options) {
  const { extendRoutes, routes } = options
  if (extendRoutes) {
    console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.')
  }
  // use Object.assign for better browser support
  const router = _createRouter(Object.assign(
    options,
    { routes: typeof extendRoutes === 'function' ? (extendRoutes(routes) || routes) : routes },
  ))

  return router
}
`.trimStart();
}

//#endregion
//#region src/core/definePage.ts
const MACRO_DEFINE_PAGE = "definePage";
const MACRO_DEFINE_PAGE_QUERY = /[?&]definePage\b/;
/**
* Generate the ast from a code string and an id. Works with SFC and non-SFC files.
*/
function getCodeAst(code, id) {
	let offset = 0;
	let ast;
	const lang = getLang(id.split(MACRO_DEFINE_PAGE_QUERY)[0]);
	if (lang === "vue") {
		const sfc = parseSFC(code, id);
		if (sfc.scriptSetup) {
			ast = sfc.getSetupAst();
			offset = sfc.scriptSetup.loc.start.offset;
		} else if (sfc.script) {
			ast = sfc.getScriptAst();
			offset = sfc.script.loc.start.offset;
		}
	} else if (/[jt]sx?$/.test(lang)) ast = babelParse(code, lang);
	const definePageNodes = (ast?.body || []).map((node) => {
		const definePageCallNode = node.type === "ExpressionStatement" ? node.expression : node;
		return isCallOf(definePageCallNode, MACRO_DEFINE_PAGE) ? definePageCallNode : null;
	}).filter((node) => !!node);
	return {
		ast,
		offset,
		definePageNodes
	};
}
function definePageTransform({ code, id }) {
	const isExtractingDefinePage = MACRO_DEFINE_PAGE_QUERY.test(id);
	if (!code.includes(MACRO_DEFINE_PAGE)) return isExtractingDefinePage ? "export default {}" : void 0;
	const { ast, offset, definePageNodes } = getCodeAst(code, id);
	if (!ast) return;
	if (!definePageNodes.length) return isExtractingDefinePage ? "export default {}" : null;
	else if (definePageNodes.length > 1) throw new SyntaxError(`duplicate definePage() call`);
	const definePageNode = definePageNodes[0];
	if (isExtractingDefinePage) {
		const s = new MagicString(code);
		const routeRecord = definePageNode.arguments[0];
		if (!routeRecord) throw new SyntaxError(`[${id}]: definePage() expects an object expression as its only argument`);
		const scriptBindings = ast.body ? getIdentifiers(ast.body) : [];
		checkInvalidScopeReference(routeRecord, MACRO_DEFINE_PAGE, scriptBindings);
		s.remove(offset + routeRecord.end, code.length);
		s.remove(0, offset + routeRecord.start);
		s.prepend(`export default `);
		const staticImports = findStaticImports(code);
		const usedIds = /* @__PURE__ */ new Set();
		const localIds = /* @__PURE__ */ new Set();
		walkAST(routeRecord, {
			enter(node) {
				if (this.parent?.type === "ObjectProperty" && this.parent.key === node && !this.parent.computed && node.type === "Identifier") this.skip();
				else if (this.parent?.type === "MemberExpression" && this.parent.property === node && !this.parent.computed && node.type === "Identifier") this.skip();
				else if (node.type === "TSTypeAnnotation") this.skip();
				else if (node.type === "Identifier" && !localIds.has(node.name)) usedIds.add(node.name);
				else if ("scopeIds" in node && node.scopeIds instanceof Set) for (const id$1 of node.scopeIds) localIds.add(id$1);
			},
			leave(node) {
				if ("scopeIds" in node && node.scopeIds instanceof Set) for (const id$1 of node.scopeIds) localIds.delete(id$1);
			}
		});
		for (const imp of staticImports) {
			const importCode = generateFilteredImportStatement(parseStaticImport(imp), usedIds);
			if (importCode) s.prepend(importCode + "\n");
		}
		return generateTransform(s, id);
	} else {
		const s = new MagicString(code);
		s.remove(offset + definePageNode.start, offset + definePageNode.end);
		return generateTransform(s, id);
	}
}
function extractDefinePageNameAndPath(sfcCode, id) {
	if (!sfcCode.includes(MACRO_DEFINE_PAGE)) return;
	const { ast, definePageNodes } = getCodeAst(sfcCode, id);
	if (!ast) return;
	if (!definePageNodes.length) return;
	else if (definePageNodes.length > 1) throw new SyntaxError(`duplicate definePage() call`);
	const definePageNode = definePageNodes[0];
	const routeRecord = definePageNode.arguments[0];
	if (!routeRecord) throw new SyntaxError(`[${id}]: definePage() expects an object expression as its only argument`);
	if (routeRecord.type !== "ObjectExpression") throw new SyntaxError(`[${id}]: definePage() expects an object expression as its only argument`);
	const routeInfo = {};
	for (const prop of routeRecord.properties) if (prop.type === "ObjectProperty" && prop.key.type === "Identifier") {
		if (prop.key.name === "name") if (prop.value.type !== "StringLiteral" && (prop.value.type !== "BooleanLiteral" || prop.value.value !== false)) warn(`route name must be a string literal or false. Found in "${id}".`);
		else routeInfo.name = prop.value.value;
		else if (prop.key.name === "path") if (prop.value.type !== "StringLiteral") warn(`route path must be a string literal. Found in "${id}".`);
		else routeInfo.path = prop.value.value;
	}
	return routeInfo;
}
const getIdentifiers = (stmts) => {
	let ids = [];
	walkAST({
		type: "Program",
		body: stmts,
		directives: [],
		sourceType: "module"
	}, {
		enter(node) {
			if (node.type === "BlockStatement") this.skip();
		},
		leave(node) {
			if (node.type !== "Program") return;
			ids = Object.keys(this.scope);
		}
	});
	return ids;
};
/**
* Generate a filtere import statement based on a set of identifiers that should be kept.
*
* @param parsedImports - parsed imports with mlly
* @param usedIds - set of used identifiers
* @returns `null` if no import statement should be generated, otherwise the import statement as a string without a newline
*/
function generateFilteredImportStatement(parsedImports, usedIds) {
	if (!parsedImports || usedIds.size < 1) return null;
	const { namedImports, defaultImport, namespacedImport } = parsedImports;
	if (namespacedImport && usedIds.has(namespacedImport)) return `import * as ${namespacedImport} from '${parsedImports.specifier}'`;
	let importListCode = "";
	if (defaultImport && usedIds.has(defaultImport)) importListCode += defaultImport;
	let namedImportListCode = "";
	for (const importName in namedImports) if (usedIds.has(importName)) {
		namedImportListCode += namedImportListCode ? `, ` : "";
		namedImportListCode += importName === namedImports[importName] ? importName : `${importName} as ${namedImports[importName]}`;
	}
	importListCode += importListCode && namedImportListCode ? ", " : "";
	importListCode += namedImportListCode ? `{${namedImportListCode}}` : "";
	if (!importListCode) return null;
	return `import ${importListCode} from '${parsedImports.specifier}'`;
}

//#endregion
//#region src/core/extendRoutes.ts
/**
* A route node that can be modified by the user. The tree can be iterated to be traversed.
* @example
* ```js
* [...node] // creates an array of all the children
* for (const child of node) {
*   // do something with the child node
* }
* ```
*
* @experimental
*/
var EditableTreeNode = class EditableTreeNode {
	node;
	constructor(node) {
		this.node = node;
	}
	/**
	* Remove and detach the current route node from the tree. Subsequently, its children will be removed as well.
	*/
	delete() {
		return this.node.delete();
	}
	/**
	* Inserts a new route as a child of this route. This route cannot use `definePage()`. If it was meant to be included,
	* add it to the `routesFolder` option.
	*
	* @param path - path segment to insert. Note this is relative to the current route. **It shouldn't start with `/`**. If it does, it will be added to the root of the tree.
	* @param filePath - file path
	* @returns the new editable route node
	*/
	insert(path$1, filePath) {
		let addBackLeadingSlash = false;
		if (path$1.startsWith("/")) {
			path$1 = path$1.slice(1);
			addBackLeadingSlash = !this.node.isRoot();
		}
		const node = this.node.insertParsedPath(path$1, filePath);
		const editable = new EditableTreeNode(node);
		if (addBackLeadingSlash) editable.path = "/" + node.path;
		return editable;
	}
	/**
	* Get an editable version of the parent node if it exists.
	*/
	get parent() {
		return this.node.parent && new EditableTreeNode(this.node.parent);
	}
	/**
	* Return a Map of the files associated to the current route. The key of the map represents the name of the view (Vue
	* Router feature) while the value is the **resolved** file path.
	* By default, the name of the view is `default`.
	*/
	get components() {
		return this.node.value.components;
	}
	/**
	* Alias for `route.components.get('default')`.
	*/
	get component() {
		return this.node.value.components.get("default");
	}
	/**
	* Name of the route. Note that **all routes are named** but when the final `routes` array is generated, routes
	* without a `component` will not include their `name` property to avoid accidentally navigating to them and display
	* nothing.
	* @see {@link isPassThrough}
	*/
	get name() {
		return this.node.name;
	}
	/**
	* Override the name of the route.
	*/
	set name(name) {
		this.node.value.addEditOverride({ name });
	}
	/**
	* Whether the route is a pass-through route. A pass-through route is a route that does not have a component and is
	* used to group other routes under the same prefix `path` and/or `meta` properties.
	*/
	get isPassThrough() {
		return this.node.value.components.size === 0;
	}
	/**
	* Meta property of the route as an object. Note this property is readonly and will be serialized as JSON. It won't contain the meta properties defined with `definePage()` as it could contain expressions **but it does contain the meta properties defined with `<route>` blocks**.
	*/
	get meta() {
		return this.node.metaAsObject;
	}
	/**
	* Override the meta property of the route. This will discard any other meta property defined with `<route>` blocks or
	* through other means. If you want to keep the existing meta properties, use `addToMeta`.
	* @see {@link addToMeta}
	*/
	set meta(meta) {
		this.node.value.removeOverride("meta");
		this.node.value.setEditOverride("meta", meta);
	}
	/**
	* Add meta properties to the route keeping the existing ones. The passed object will be deeply merged with the
	* existing meta object if any. Note that the meta property is later on serialized as JSON so you can't pass functions
	* or any other non-serializable value.
	*/
	addToMeta(meta) {
		this.node.value.addEditOverride({ meta });
	}
	/**
	* Path of the route without parent paths.
	*/
	get path() {
		return this.node.path;
	}
	/**
	* Override the path of the route. You must ensure `params` match with the existing path.
	*/
	set path(path$1) {
		if ((!this.node.parent || this.node.parent.isRoot()) && !path$1.startsWith("/")) path$1 = "/" + path$1;
		this.node.value.addEditOverride({ path: path$1 });
	}
	/**
	* Alias of the route.
	*/
	get alias() {
		return this.node.value.overrides.alias;
	}
	/**
	* Add an alias to the route.
	*
	* @param alias - Alias to add to the route
	*/
	addAlias(alias) {
		this.node.value.addEditOverride({ alias });
	}
	/**
	* Array of the route params and all of its parent's params. Note that changing the params will not update the path,
	* you need to update both.
	*/
	get params() {
		return this.node.params;
	}
	/**
	* Path of the route including parent paths.
	*/
	get fullPath() {
		return this.node.fullPath;
	}
	/**
	* Computes an array of EditableTreeNode from the current node. Differently from iterating over the tree, this method
	* **only returns direct children**.
	*/
	get children() {
		return [...this.node.children.values()].map((node) => new EditableTreeNode(node));
	}
	/**
	* DFS traversal of the tree.
	* @example
	* ```ts
	* for (const node of tree) {
	*   // ...
	* }
	* ```
	*/
	*traverseDFS() {
		if (!this.node.isRoot()) yield this;
		for (const [_name, child] of this.node.children) yield* new EditableTreeNode(child).traverseDFS();
	}
	*[Symbol.iterator]() {
		yield* this.traverseBFS();
	}
	/**
	* BFS traversal of the tree as a generator.
	*
	* @example
	* ```ts
	* for (const node of tree) {
	*   // ...
	* }
	* ```
	*/
	*traverseBFS() {
		for (const [_name, child] of this.node.children) yield new EditableTreeNode(child);
		for (const [_name, child] of this.node.children) yield* new EditableTreeNode(child).traverseBFS();
	}
};

//#endregion
//#region src/core/context.ts
function createRoutesContext(options) {
	const { dts: preferDTS, root, routesFolder } = options;
	const dts = preferDTS === false ? false : preferDTS === true ? resolve(root, "typed-router.d.ts") : resolve(root, preferDTS);
	const routeTree = new PrefixTree(options);
	const editableRoutes = new EditableTreeNode(routeTree);
	const logger = new Proxy(console, { get(target, prop) {
		const res = Reflect.get(target, prop);
		if (typeof res === "function") return options.logs ? res : () => {};
		return res;
	} });
	const watchers = [];
	async function scanPages(startWatchers = true) {
		if (options.extensions.length < 1) throw new Error("\"extensions\" cannot be empty. Please specify at least one extension.");
		if (watchers.length > 0) return;
		await Promise.all(routesFolder.map((folder) => resolveFolderOptions(options, folder)).map((folder) => {
			if (startWatchers) watchers.push(setupWatcher(new RoutesFolderWatcher(folder)));
			const ignorePattern = folder.exclude.map((f) => f.startsWith("**") ? f : relative(folder.src, f));
			return glob(folder.pattern, {
				cwd: folder.src,
				ignore: ignorePattern,
				expandDirectories: false
			}).then((files) => Promise.all(files.map((file) => resolve(folder.src, file)).map((file) => addPage({
				routePath: asRoutePath(folder, file),
				filePath: file
			}))));
		}));
		for (const route of editableRoutes) await options.extendRoute?.(route);
		await _writeConfigFiles();
	}
	async function writeRouteInfoToNode(node, filePath) {
		const content = await promises.readFile(filePath, "utf8");
		node.hasDefinePage ||= content.includes("definePage");
		const definedPageNameAndPath = extractDefinePageNameAndPath(content, filePath);
		const routeBlock = getRouteBlock(filePath, content, options);
		node.setCustomRouteBlock(filePath, {
			...routeBlock,
			...definedPageNameAndPath
		});
	}
	async function addPage({ filePath, routePath }, triggerExtendRoute = false) {
		logger.log(`added "${routePath}" for "${filePath}"`);
		const node = routeTree.insert(routePath, filePath);
		await writeRouteInfoToNode(node, filePath);
		if (triggerExtendRoute) await options.extendRoute?.(new EditableTreeNode(node));
		server?.updateRoutes();
	}
	async function updatePage({ filePath, routePath }) {
		logger.log(`updated "${routePath}" for "${filePath}"`);
		const node = routeTree.getChild(filePath);
		if (!node) {
			logger.warn(`Cannot update "${filePath}": Not found.`);
			return;
		}
		await writeRouteInfoToNode(node, filePath);
		await options.extendRoute?.(new EditableTreeNode(node));
	}
	function removePage({ filePath, routePath }) {
		logger.log(`remove "${routePath}" for "${filePath}"`);
		routeTree.removeChild(filePath);
		server?.updateRoutes();
	}
	function setupWatcher(watcher) {
		logger.log(`🤖 Scanning files in ${watcher.src}`);
		return watcher.on("change", async (ctx) => {
			await updatePage(ctx);
			writeConfigFiles();
		}).on("add", async (ctx) => {
			await addPage(ctx, true);
			writeConfigFiles();
		}).on("unlink", (ctx) => {
			removePage(ctx);
			writeConfigFiles();
		});
	}
	function generateRoutes() {
		const importsMap = new ImportsMap();
		const routeList = `export const routes = ${generateRouteRecord(routeTree, options, importsMap)}\n`;
		let hmr = ts`
export function handleHotUpdate(_router, _hotUpdateCallback) {
  if (import.meta.hot) {
    import.meta.hot.data.router = _router
    import.meta.hot.data.router_hotUpdateCallback = _hotUpdateCallback
  }
}

if (import.meta.hot) {
  import.meta.hot.accept((mod) => {
    const router = import.meta.hot.data.router
    if (!router) {
      import.meta.hot.invalidate('[unplugin-vue-router:HMR] Cannot replace the routes because there is no active router. Reloading.')
      return
    }
    router.clearRoutes()
    for (const route of mod.routes) {
      router.addRoute(route)
    }
    // call the hotUpdateCallback for custom updates
    import.meta.hot.data.router_hotUpdateCallback?.(mod.routes)
    const route = router.currentRoute.value
    router.replace({
      ...route,
      // NOTE: we should be able to just do ...route but the router
      // currently skips resolving and can give errors with renamed routes
      // so we explicitly set remove matched and name
      name: undefined,
      matched: undefined,
      force: true
    })
  })
}
`;
		let imports = importsMap.toString();
		if (imports) imports += "\n";
		const newAutoRoutes = `${imports}${routeList}${hmr}\n`;
		return newAutoRoutes;
	}
	function generateDTS$1() {
		return generateDTS({
			vueRouterModule: MODULE_VUE_ROUTER_AUTO,
			routesModule: MODULE_ROUTES_PATH,
			routeNamedMap: generateRouteNamedMap(routeTree),
			routeFileInfoMap: generateRouteFileInfoMap(routeTree, { root })
		});
	}
	const isPiniaColadaInstalled = isPackageExists("@pinia/colada");
	function generateVueRouterProxy$1() {
		return generateVueRouterProxy(MODULE_ROUTES_PATH, options, { addPiniaColada: isPiniaColadaInstalled });
	}
	let lastDTS;
	async function _writeConfigFiles() {
		logger.time("writeConfigFiles");
		if (options.beforeWriteFiles) {
			await options.beforeWriteFiles(editableRoutes);
			logger.timeLog("writeConfigFiles", "beforeWriteFiles()");
		}
		logTree(routeTree, logger.log);
		if (dts) {
			const content = generateDTS$1();
			if (lastDTS !== content) {
				await promises.mkdir(dirname(dts), { recursive: true });
				await promises.writeFile(dts, content, "utf-8");
				logger.timeLog("writeConfigFiles", "wrote dts file");
				lastDTS = content;
			}
		}
		logger.timeEnd("writeConfigFiles");
	}
	const writeConfigFiles = throttle(_writeConfigFiles, 500, 100);
	function stopWatcher() {
		if (watchers.length) {
			logger.log("🛑 stopping watcher");
			watchers.forEach((watcher) => watcher.close());
		}
	}
	let server;
	function setServerContext(_server) {
		server = _server;
	}
	return {
		scanPages,
		writeConfigFiles,
		setServerContext,
		stopWatcher,
		generateRoutes,
		generateVueRouterProxy: generateVueRouterProxy$1,
		definePageTransform(code, id) {
			return definePageTransform({
				code,
				id
			});
		}
	};
}

//#endregion
//#region src/core/vite/index.ts
function createViteContext(server) {
	function invalidate(path$1) {
		const { moduleGraph } = server;
		const foundModule = moduleGraph.getModuleById(path$1);
		if (foundModule) {
			moduleGraph.invalidateModule(foundModule, void 0, void 0, true);
			setTimeout(() => {
				console.log(`Sending update for ${foundModule.url}`);
				server.ws.send({
					type: "update",
					updates: [{
						acceptedPath: path$1,
						path: path$1,
						timestamp: Date.now(),
						type: "js-update"
					}]
				});
			}, 100);
		}
		return !!foundModule;
	}
	function reload() {
		server.ws.send({
			type: "full-reload",
			path: "*"
		});
	}
	/**
	* Triggers HMR for the vue-router/auto-routes module.
	*/
	async function updateRoutes() {
		const modId = asVirtualId(MODULE_ROUTES_PATH);
		const mod = server.moduleGraph.getModuleById(modId);
		if (mod) return server.reloadModule(mod);
	}
	return {
		invalidate,
		updateRoutes,
		reload
	};
}

//#endregion
//#region src/data-loaders/auto-exports.ts
function extractLoadersToExport(code, filterPaths, root) {
	const imports = findStaticImports(code);
	const importNames = imports.flatMap((i) => {
		const parsed = parseStaticImport(i);
		const specifier = resolve(root, parsed.specifier.startsWith("/") ? parsed.specifier.slice(1) : parsed.specifier);
		if (!filterPaths(specifier)) return [];
		return [parsed.defaultImport, ...Object.values(parsed.namedImports || {})].filter((v) => !!v && !v.startsWith("_"));
	});
	return importNames;
}
const PLUGIN_NAME = "unplugin-vue-router:data-loaders-auto-export";
/**
* Vite Plugin to automatically export loaders from page components.
*
* @param options Options
* @experimental - This API is experimental and can be changed in the future. It's used internally by `experimental.autoExportsDataLoaders`

*/
function AutoExportLoaders({ transformFilter, loadersPathsGlobs, root = process.cwd() }) {
	const filterPaths = createFilter(loadersPathsGlobs);
	return {
		name: PLUGIN_NAME,
		transform: {
			order: "post",
			filter: { id: transformFilter },
			handler(code) {
				const loadersToExports = extractLoadersToExport(code, filterPaths, root);
				if (loadersToExports.length <= 0) return;
				const s = new MagicString$1(code);
				s.append(`\nexport const __loaders = [\n${loadersToExports.join(",\n")}\n];\n`);
				return {
					code: s.toString(),
					map: s.generateMap()
				};
			}
		}
	};
}
function createAutoExportPlugin(options) {
	return {
		name: PLUGIN_NAME,
		vite: AutoExportLoaders(options)
	};
}

//#endregion
//#region src/index.ts
var src_default = createUnplugin((opt = {}, _meta) => {
	const options = resolveOptions(opt);
	const ctx = createRoutesContext(options);
	function getVirtualId$1(id) {
		if (options._inspect) return id;
		return getVirtualId(id);
	}
	function asVirtualId$1(id) {
		if (options._inspect) return id;
		return asVirtualId(id);
	}
	const pageFilePattern = appendExtensionListToPattern(options.filePatterns, mergeAllExtensions(options));
	const IDS_TO_INCLUDE = options.routesFolder.flatMap((routeOption) => pageFilePattern.map((pattern) => join(routeOption.src, pattern)));
	const plugins = [{
		name: "unplugin-vue-router",
		enforce: "pre",
		resolveId: {
			filter: { id: { include: [
				new RegExp(`^${MODULE_VUE_ROUTER_AUTO}$`),
				new RegExp(`^${MODULE_ROUTES_PATH}$`),
				routeBlockQueryRE
			] } },
			handler(id) {
				if (id === MODULE_ROUTES_PATH || id === MODULE_VUE_ROUTER_AUTO) return asVirtualId$1(id);
				return ROUTE_BLOCK_ID;
			}
		},
		buildStart() {
			return ctx.scanPages(options.watch);
		},
		buildEnd() {
			ctx.stopWatcher();
		},
		transform: {
			filter: { id: {
				include: [...IDS_TO_INCLUDE, DEFINE_PAGE_QUERY_RE],
				exclude: options.exclude
			} },
			handler(code, id) {
				return ctx.definePageTransform(code, id);
			}
		},
		load: {
			filter: { id: { include: [
				new RegExp(`^${ROUTE_BLOCK_ID}$`),
				new RegExp(`^${VIRTUAL_PREFIX}${MODULE_VUE_ROUTER_AUTO}$`),
				new RegExp(`^${VIRTUAL_PREFIX}${MODULE_ROUTES_PATH}$`)
			] } },
			handler(id) {
				if (id === ROUTE_BLOCK_ID) return {
					code: `export default {}`,
					map: null
				};
				const resolvedId = getVirtualId$1(id);
				if (resolvedId === MODULE_ROUTES_PATH) {
					ROUTES_LAST_LOAD_TIME.update();
					return ctx.generateRoutes();
				}
				if (resolvedId === MODULE_VUE_ROUTER_AUTO) return ctx.generateVueRouterProxy();
				return;
			}
		},
		vite: {
			configureServer(server) {
				ctx.setServerContext(createViteContext(server));
			},
			handleHotUpdate: {
				order: "post",
				handler({ server, file, modules }) {
					const moduleList = server.moduleGraph.getModulesByFile(file);
					const definePageModule = Array.from(moduleList || []).find((mod) => {
						return mod?.id && MACRO_DEFINE_PAGE_QUERY.test(mod.id);
					});
					if (definePageModule) {
						const routesModule = server.moduleGraph.getModuleById(asVirtualId$1(MODULE_ROUTES_PATH));
						if (!routesModule) {
							console.error("🔥 HMR routes module not found");
							return;
						}
						return [
							...modules,
							definePageModule,
							routesModule
						];
					}
					return;
				}
			}
		}
	}];
	if (options.experimental.autoExportsDataLoaders) plugins.push(createAutoExportPlugin({
		transformFilter: {
			include: IDS_TO_INCLUDE,
			exclude: options.exclude
		},
		loadersPathsGlobs: options.experimental.autoExportsDataLoaders,
		root: options.root
	}));
	return plugins;
});
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
const VueRouterAutoImports = {
	"vue-router": [
		"useRoute",
		"useRouter",
		"onBeforeRouteUpdate",
		"onBeforeRouteLeave"
	],
	"unplugin-vue-router/runtime": []
};

//#endregion
export { AutoExportLoaders, EditableTreeNode, VueRouterAutoImports, createRoutesContext, createTreeNodeValue, src_default };