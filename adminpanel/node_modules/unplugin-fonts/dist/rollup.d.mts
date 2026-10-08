import * as rollup from 'rollup';
import { Options } from './types.mjs';
import 'vite';

declare const _default: (options?: Options | undefined) => rollup.Plugin<any> | rollup.Plugin<any>[];

export { _default as default };
