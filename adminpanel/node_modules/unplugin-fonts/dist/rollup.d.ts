import * as rollup from 'rollup';
import { Options } from './types.js';
import 'vite';

declare const _default: (options?: Options | undefined) => rollup.Plugin<any> | rollup.Plugin<any>[];

export { _default as default };
