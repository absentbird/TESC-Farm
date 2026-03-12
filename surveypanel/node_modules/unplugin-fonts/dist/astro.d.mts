import { AstroIntegration } from 'astro';
import { Options } from './types.mjs';
import 'vite';

declare function export_default(options: Options): AstroIntegration;

export { export_default as default };
