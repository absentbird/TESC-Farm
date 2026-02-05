import type { DeepReadonly, PropType } from 'vue';
import type { Color, HSV } from "../../util/index.js";
export declare const makeVColorPickerSwatchesProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    swatches?: unknown;
    disabled?: unknown;
    color?: unknown;
    maxHeight?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : import("vue").StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : NonNullable<import("vue").StyleValue> | Defaults["style"];
    };
    swatches: unknown extends Defaults["swatches"] ? {
        type: PropType<DeepReadonly<Color[][]>>;
        default: () => string[][];
    } : Omit<{
        type: PropType<DeepReadonly<Color[][]>>;
        default: () => string[][];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"]>;
        default: unknown extends Defaults["swatches"] ? readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] : readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[] | Defaults["swatches"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    color: unknown extends Defaults["color"] ? PropType<HSV | null> : {
        type: PropType<unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"] | null>;
        default: unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
};
export declare const VColorPickerSwatches: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        class: PropType<import("../../composables/component.js").ClassValue>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        swatches: {
            type: PropType<DeepReadonly<Color[][]>>;
            default: () => string[][];
        };
        disabled: BooleanConstructor;
        color: PropType<HSV | null>;
        maxHeight: (StringConstructor | NumberConstructor)[];
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:color': (color: HSV) => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        swatches: readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[];
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        class: PropType<import("../../composables/component.js").ClassValue>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        swatches: {
            type: PropType<DeepReadonly<Color[][]>>;
            default: () => string[][];
        };
        disabled: BooleanConstructor;
        color: PropType<HSV | null>;
        maxHeight: (StringConstructor | NumberConstructor)[];
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        swatches: readonly (readonly (string | number | {
            readonly r: number;
            readonly g: number;
            readonly b: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly v: number;
            readonly a?: number | undefined;
        } | {
            readonly h: number;
            readonly s: number;
            readonly l: number;
            readonly a?: number | undefined;
        })[])[];
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    swatches: {
        type: PropType<DeepReadonly<Color[][]>>;
        default: () => string[][];
    };
    disabled: BooleanConstructor;
    color: PropType<HSV | null>;
    maxHeight: (StringConstructor | NumberConstructor)[];
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:color': (color: HSV) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    swatches: readonly (readonly (string | number | {
        readonly r: number;
        readonly g: number;
        readonly b: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly v: number;
        readonly a?: number | undefined;
    } | {
        readonly h: number;
        readonly s: number;
        readonly l: number;
        readonly a?: number | undefined;
    })[])[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    swatches: {
        type: PropType<DeepReadonly<Color[][]>>;
        default: () => string[][];
    };
    disabled: BooleanConstructor;
    color: PropType<HSV | null>;
    maxHeight: (StringConstructor | NumberConstructor)[];
}, import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    swatches: {
        type: PropType<DeepReadonly<Color[][]>>;
        default: () => string[][];
    };
    disabled: BooleanConstructor;
    color: PropType<HSV | null>;
    maxHeight: (StringConstructor | NumberConstructor)[];
}>>;
export type VColorPickerSwatches = InstanceType<typeof VColorPickerSwatches>;
