import type { Ref } from 'vue';
export interface ScrollProps {
    scrollTarget?: string;
    scrollThreshold?: string | number;
}
export interface ThresholdMetCallbackData {
    isScrollingUp: boolean;
    currentThreshold: number;
    savedScroll: Ref<number>;
}
export declare const makeScrollProps: <Defaults extends {
    scrollTarget?: unknown;
    scrollThreshold?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    scrollTarget: unknown extends Defaults["scrollTarget"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"]>;
        default: unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"];
    };
    scrollThreshold: unknown extends Defaults["scrollThreshold"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["scrollThreshold"] ? string | number : string | number | Defaults["scrollThreshold"]>;
        default: unknown extends Defaults["scrollThreshold"] ? string | number : NonNullable<string | number> | Defaults["scrollThreshold"];
    };
};
export interface ScrollArguments {
    canScroll?: Readonly<Ref<boolean>>;
}
export declare function useScroll(props: ScrollProps, args?: ScrollArguments): {
    scrollThreshold: import("vue").ComputedRef<number>;
    currentScroll: import("vue").ShallowRef<number, number>;
    currentThreshold: import("vue").ShallowRef<number, number>;
    isScrollActive: import("vue").ShallowRef<boolean, boolean>;
    scrollRatio: import("vue").ComputedRef<number>;
    isScrollingUp: import("vue").ShallowRef<boolean, boolean>;
    savedScroll: import("vue").ShallowRef<number, number>;
};
