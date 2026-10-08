import * as unplugin from 'unplugin';
import { Options } from './types.mjs';
import 'vite';

declare const _default: (options?: Options | undefined) => unplugin.EsbuildPlugin;

export { _default as default };
