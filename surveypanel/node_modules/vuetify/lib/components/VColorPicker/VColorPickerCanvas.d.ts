import type { PropType } from 'vue';
import type { HSV } from "../../util/index.js";
export declare const makeVColorPickerCanvasProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    dotSize?: unknown;
    height?: unknown;
    width?: unknown;
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
    color: unknown extends Defaults["color"] ? {
        type: PropType<HSV | null>;
    } : Omit<{
        type: PropType<HSV | null>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"] | null>;
        default: unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    dotSize: unknown extends Defaults["dotSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["dotSize"] ? string | number : string | number | Defaults["dotSize"]>;
        default: unknown extends Defaults["dotSize"] ? string | number : NonNullable<string | number> | Defaults["dotSize"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
};
export declare const VColorPickerCanvas: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        class: PropType<import("../../composables/component.js").ClassValue>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        color: {
            type: PropType<HSV | null>;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:position"?: ((hue: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:color': (color: HSV) => true;
        'update:position': (hue: any) => true;
    }, import("vue").PublicProps, {
        height: string | number;
        width: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        dotSize: string | number;
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
        color: {
            type: PropType<HSV | null>;
        };
        disabled: BooleanConstructor;
        dotSize: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:position"?: ((hue: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        height: string | number;
        width: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        dotSize: string | number;
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
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
    "onUpdate:position"?: ((hue: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:color': (color: HSV) => true;
    'update:position': (hue: any) => true;
}, string, {
    height: string | number;
    width: string | number;
    style: import("vue").StyleValue;
    disabled: boolean;
    dotSize: string | number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: {
        type: PropType<HSV | null>;
    };
    disabled: BooleanConstructor;
    dotSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
export type VColorPickerCanvas = InstanceType<typeof VColorPickerCanvas>;
