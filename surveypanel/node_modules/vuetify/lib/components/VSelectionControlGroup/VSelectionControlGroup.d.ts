import { IconValue } from "../../composables/icons.js";
import { deepEqual } from "../../util/index.js";
import type { InjectionKey, PropType, Ref } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
import type { GenericProps } from "../../util/index.js";
export interface VSelectionGroupContext {
    modelValue: Ref<any>;
    forceUpdate: () => void;
    onForceUpdate: (fn: () => void) => void;
}
export declare const VSelectionControlGroupSymbol: InjectionKey<VSelectionGroupContext>;
export declare const makeSelectionControlGroupProps: <Defaults extends {
    theme?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    defaultsTarget?: unknown;
    error?: unknown;
    id?: unknown;
    inline?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    ripple?: unknown;
    multiple?: unknown;
    name?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    type?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    defaultsTarget: unknown extends Defaults["defaultsTarget"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"]>;
        default: unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["falseIcon"] ? IconValue : IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["falseIcon"];
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["trueIcon"] ? IconValue : IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : NonNullable<IconValue> | Defaults["trueIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : boolean | {
            class: string;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : NonNullable<boolean | {
            class: string;
        } | undefined> | Defaults["ripple"];
    };
    multiple: unknown extends Defaults["multiple"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["multiple"] ? boolean | null : boolean | Defaults["multiple"] | null>;
        default: unknown extends Defaults["multiple"] ? boolean | null : NonNullable<boolean | null> | Defaults["multiple"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    } : Omit<{
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
};
export declare const makeVSelectionControlGroupProps: <Defaults extends {
    theme?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    defaultsTarget?: unknown;
    error?: unknown;
    id?: unknown;
    inline?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    ripple?: unknown;
    multiple?: unknown;
    name?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    type?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    defaultsTarget: unknown extends Defaults["defaultsTarget"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"]>;
        default: unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["falseIcon"] ? IconValue : IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["falseIcon"];
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["trueIcon"] ? IconValue : IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : NonNullable<IconValue> | Defaults["trueIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : boolean | {
            class: string;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : NonNullable<boolean | {
            class: string;
        } | undefined> | Defaults["ripple"];
    };
    multiple: unknown extends Defaults["multiple"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["multiple"] ? boolean | null : boolean | Defaults["multiple"] | null>;
        default: unknown extends Defaults["multiple"] ? boolean | null : NonNullable<boolean | null> | Defaults["multiple"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    } : Omit<{
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
};
export declare const VSelectionControlGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        defaultsTarget: string;
    } & {
        name?: string | undefined;
        type?: string | undefined;
        id?: string | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        defaultsTarget: string;
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
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        defaultsTarget: string;
    } & {
        name?: string | undefined;
        type?: string | undefined;
        id?: string | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
    } & {}, {}, {}, {}, {}, {
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        defaultsTarget: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    error: boolean;
    style: import("vue").StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    defaultsTarget: string;
} & {
    name?: string | undefined;
    type?: string | undefined;
    id?: string | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    falseIcon?: IconValue | undefined;
    trueIcon?: IconValue | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue">, string, {
    inline: boolean;
    error: boolean;
    style: import("vue").StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    defaultsTarget: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
}, slots: {
    default: never;
}) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: {
        type: PropType<string>;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: {
        type: PropType<string>;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
}>>;
export type VSelectionControlGroup = InstanceType<typeof VSelectionControlGroup>;
