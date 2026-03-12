import type { PropType } from 'vue';
import type { HSV } from "../../util/index.js";
export declare const makeVColorPickerPreviewProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    hideAlpha?: unknown;
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
    hideAlpha: unknown extends Defaults["hideAlpha"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideAlpha"] ? boolean : boolean | Defaults["hideAlpha"]>;
        default: unknown extends Defaults["hideAlpha"] ? boolean : boolean | Defaults["hideAlpha"];
    };
};
export declare const VColorPickerPreview: {
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
        hideAlpha: BooleanConstructor;
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:color': (color: HSV) => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        hideAlpha: boolean;
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
        hideAlpha: BooleanConstructor;
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        hideAlpha: boolean;
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
    hideAlpha: BooleanConstructor;
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:color': (color: HSV) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    hideAlpha: boolean;
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
    hideAlpha: BooleanConstructor;
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
    hideAlpha: BooleanConstructor;
}>>;
export type VColorPickerPreview = InstanceType<typeof VColorPickerPreview>;
