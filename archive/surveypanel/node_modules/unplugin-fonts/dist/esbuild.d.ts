import * as unplugin from 'unplugin';
import { Options } from './types.js';
import 'vite';

declare const _default: (options?: Options | undefined) => unplugin.EsbuildPlugin;

export { _default as default };
