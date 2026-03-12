import { modes } from './util/index.js';
import type { PropType } from 'vue';
import type { HSV } from "../../util/colorUtils.js";
export declare const makeVColorPickerEditProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    mode?: unknown;
    modes?: unknown;
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
    color: unknown extends Defaults["color"] ? PropType<HSV | null> : {
        type: PropType<unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"] | null>;
        default: unknown extends Defaults["color"] ? HSV | null : HSV | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    mode: unknown extends Defaults["mode"] ? {
        type: PropType<keyof typeof modes>;
        default: string;
        validator: (v: string) => boolean;
    } : Omit<{
        type: PropType<keyof typeof modes>;
        default: string;
        validator: (v: string) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mode"] ? "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" : "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa" : Defaults["mode"] | NonNullable<"rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa">;
    };
    modes: unknown extends Defaults["modes"] ? {
        type: PropType<readonly (keyof typeof modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<readonly (keyof typeof modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modes"] ? readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] : readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] | Defaults["modes"]>;
        default: unknown extends Defaults["modes"] ? readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] : readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[] | Defaults["modes"];
    };
};
export declare const VColorPickerEdit: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        class: PropType<import("../../composables/component.js").ClassValue>;
        style: {
            type: PropType<import("vue").StyleValue>;
            default: null;
        };
        color: PropType<HSV | null>;
        disabled: BooleanConstructor;
        mode: {
            type: PropType<keyof typeof modes>;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: PropType<readonly (keyof typeof modes)[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa") => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:color': (color: HSV) => true;
        'update:mode': (mode: keyof typeof modes) => true;
    }, import("vue").PublicProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
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
        color: PropType<HSV | null>;
        disabled: BooleanConstructor;
        mode: {
            type: PropType<keyof typeof modes>;
            default: string;
            validator: (v: string) => boolean;
        };
        modes: {
            type: PropType<readonly (keyof typeof modes)[]>;
            default: () => string[];
            validator: (v: any) => boolean;
        };
    }>> & {
        "onUpdate:color"?: ((color: HSV) => any) | undefined;
        "onUpdate:mode"?: ((mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa") => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
        modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
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
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
    mode: {
        type: PropType<keyof typeof modes>;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly (keyof typeof modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
}>> & {
    "onUpdate:color"?: ((color: HSV) => any) | undefined;
    "onUpdate:mode"?: ((mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa") => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:color': (color: HSV) => true;
    'update:mode': (mode: keyof typeof modes) => true;
}, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    mode: "rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa";
    modes: readonly ("rgb" | "hex" | "hsl" | "rgba" | "hsla" | "hexa")[];
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
    mode: {
        type: PropType<keyof typeof modes>;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly (keyof typeof modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: PropType<HSV | null>;
    disabled: BooleanConstructor;
    mode: {
        type: PropType<keyof typeof modes>;
        default: string;
        validator: (v: string) => boolean;
    };
    modes: {
        type: PropType<readonly (keyof typeof modes)[]>;
        default: () => string[];
        validator: (v: any) => boolean;
    };
}>>;
export type VColorPickerEdit = InstanceType<typeof VColorPickerEdit>;
