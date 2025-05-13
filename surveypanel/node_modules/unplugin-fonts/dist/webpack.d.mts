import * as webpack from 'webpack';
import { Options } from './types.mjs';
import 'vite';

declare const _default: (options?: Options | undefined) => webpack.WebpackPluginInstance;

export { _default as default };
