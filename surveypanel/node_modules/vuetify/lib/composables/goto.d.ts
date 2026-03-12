import type { ComponentPublicInstance, InjectionKey, Ref } from 'vue';
import type { LocaleInstance, RtlInstance } from './locale.js';
export interface GoToInstance {
    rtl: Ref<boolean>;
    options: InternalGoToOptions;
}
export interface InternalGoToOptions {
    container: ComponentPublicInstance | HTMLElement | string;
    duration: number;
    layout: boolean;
    offset: number;
    easing: string | ((t: number) => number);
    patterns: Record<string, (t: number) => number>;
}
export type GoToOptions = Partial<InternalGoToOptions>;
export declare const GoToSymbol: InjectionKey<GoToInstance>;
export declare function createGoTo(options: GoToOptions | undefined, locale: LocaleInstance & RtlInstance): GoToInstance;
export declare function scrollTo(_target: ComponentPublicInstance | HTMLElement | number | string, _options: GoToOptions, horizontal?: boolean, goTo?: GoToInstance): Promise<unknown>;
export declare function useGoTo(_options?: GoToOptions): {
    (target: ComponentPublicInstance | HTMLElement | string | number, options?: Partial<GoToOptions>): Promise<unknown>;
    horizontal(target: ComponentPublicInstance | HTMLElement | string | number, options?: Partial<GoToOptions>): Promise<unknown>;
};
