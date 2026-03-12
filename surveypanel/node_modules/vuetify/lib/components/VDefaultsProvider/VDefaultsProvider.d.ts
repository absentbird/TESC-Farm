import type { PropType } from 'vue';
import type { DefaultsOptions } from "../../composables/defaults.js";
export declare const makeVDefaultsProviderProps: <Defaults extends {
    defaults?: unknown;
    disabled?: unknown;
    reset?: unknown;
    root?: unknown;
    scoped?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    defaults: unknown extends Defaults["defaults"] ? PropType<DefaultsOptions> : {
        type: PropType<unknown extends Defaults["defaults"] ? DefaultsOptions : DefaultsOptions | Defaults["defaults"]>;
        default: unknown extends Defaults["defaults"] ? DefaultsOptions : Partial<{
            [key: string]: Record<string, unknown> | undefined;
            global?: Record<string, unknown>;
        }> | Defaults["defaults"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    reset: unknown extends Defaults["reset"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["reset"] ? string | number : string | number | Defaults["reset"]>;
        default: unknown extends Defaults["reset"] ? string | number : NonNullable<string | number> | Defaults["reset"];
    };
    root: unknown extends Defaults["root"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["root"] ? string | boolean : string | boolean | Defaults["root"]>;
        default: unknown extends Defaults["root"] ? string | boolean : NonNullable<string | boolean> | Defaults["root"];
    };
    scoped: unknown extends Defaults["scoped"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scoped"] ? boolean : boolean | Defaults["scoped"]>;
        default: unknown extends Defaults["scoped"] ? boolean : boolean | Defaults["scoped"];
    };
};
export declare const VDefaultsProvider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        scoped: boolean;
    } & {
        reset?: string | number | undefined;
        root?: string | boolean | undefined;
        defaults?: DefaultsOptions;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        scoped: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        disabled: boolean;
        scoped: boolean;
    } & {
        reset?: string | number | undefined;
        root?: string | boolean | undefined;
        defaults?: DefaultsOptions;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
        scoped: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    scoped: boolean;
} & {
    reset?: string | number | undefined;
    root?: string | boolean | undefined;
    defaults?: DefaultsOptions;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    disabled: boolean;
    scoped: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    defaults: PropType<DefaultsOptions>;
    disabled: BooleanConstructor;
    reset: (StringConstructor | NumberConstructor)[];
    root: (StringConstructor | BooleanConstructor)[];
    scoped: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    defaults: PropType<DefaultsOptions>;
    disabled: BooleanConstructor;
    reset: (StringConstructor | NumberConstructor)[];
    root: (StringConstructor | BooleanConstructor)[];
    scoped: BooleanConstructor;
}>>;
export type VDefaultsProvider = InstanceType<typeof VDefaultsProvider>;
