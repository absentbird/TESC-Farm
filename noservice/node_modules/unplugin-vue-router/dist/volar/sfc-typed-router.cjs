const require_chunk = require('./chunk-CUT6urMc.cjs');
const muggle_string = require_chunk.__toESM(require("muggle-string"));
const pathe = require_chunk.__toESM(require("pathe"));

//#region src/volar/utils/augment-vls-ctx.ts
/**
* Augments the VLS context (volar) with additianal type information.
*
* @param content - content retrieved from the volar pluign
* @param  getCodes - function that computes the code to add to the VLS context.
*/
function augmentVlsCtx(content, getCodes) {
	let from = -1;
	let to = -1;
	for (let i = 0; i < content.length; i++) {
		const code = content[i];
		if (typeof code !== "string") continue;
		if (from === -1 && code.startsWith(`const __VLS_ctx`)) from = i;
		else if (from !== -1 && code === `;\n`) {
			to = i;
			break;
		}
	}
	if (to === -1) return;
	content.splice(to, 0, getCodes());
}

//#endregion
//#region src/volar/entries/sfc-typed-router.ts
const plugin = (ctx) => {
	const RE = {
		USE_ROUTE: {
			BEFORE_PARENTHESES: /(?<=useRoute)(\s*)(?=\(\))/g,
			BEFORE: /(?=useRoute(\s*)\(\))/g,
			AFTER: /(?<=useRoute(\s*)\(\))/g
		},
		DOLLAR_ROUTE: { VLS_CTX: /\b__VLS_ctx.\$route\b/g }
	};
	return {
		version: 2.1,
		resolveEmbeddedCode(fileName, _sfc, embeddedCode) {
			if (!embeddedCode.id.startsWith("script_")) return;
			const relativeFilePath = ctx.compilerOptions.baseUrl ? (0, pathe.relative)(ctx.compilerOptions.baseUrl, fileName) : fileName;
			const useRouteNameType = `import('vue-router/auto-routes')._RouteNamesForFilePath<'${relativeFilePath}'>`;
			const useRouteNameTypeParam = `<${useRouteNameType}>`;
			const typedCall = `useRoute${useRouteNameTypeParam}`;
			if (embeddedCode.id.startsWith("script_ts")) (0, muggle_string.replaceAll)(embeddedCode.content, RE.USE_ROUTE.BEFORE_PARENTHESES, useRouteNameTypeParam);
			else if (embeddedCode.id.startsWith("script_js")) {
				(0, muggle_string.replaceAll)(embeddedCode.content, RE.USE_ROUTE.BEFORE, `(`);
				(0, muggle_string.replaceAll)(embeddedCode.content, RE.USE_ROUTE.AFTER, ` as ReturnType<typeof ${typedCall}>)`);
			}
			const contentStr = (0, muggle_string.toString)(embeddedCode.content);
			const vlsCtxAugmentations = [];
			if (contentStr.match(RE.DOLLAR_ROUTE.VLS_CTX)) vlsCtxAugmentations.push(`$route: ReturnType<typeof ${typedCall}>;`);
			if (vlsCtxAugmentations.length > 0) augmentVlsCtx(embeddedCode.content, () => ` & {
  ${vlsCtxAugmentations.join("\n  ")}
}`);
		}
	};
};
var sfc_typed_router_default = plugin;

//#endregion
module.exports = sfc_typed_router_default;