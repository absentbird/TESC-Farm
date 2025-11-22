import { Options } from "./types-BCv0WNKI.cjs";

//#region src/astro.d.ts
declare function export_default(options: Options): {
  name: string;
  hooks: {
    'astro:config:setup': (astro: any) => Promise<void>;
  };
};
export = export_default;