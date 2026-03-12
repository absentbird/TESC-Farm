import { IconValue } from "../../composables/icons.js";
import type { VInputSlots } from "../VInput/VInput.js";
import type { GenericProps } from "../../util/index.js";
export type VRadioGroupSlots = Omit<VInputSlots, 'default'> & {
    default: never;
    label: {
        label: string | undefined;
        props: Record<string, any>;
    };
};
export declare const makeVRadioGroupProps: <Defaults extends {
    trueIcon?: unknown;
    falseIcon?: unknown;
    type?: unknown;
    name?: unknown;
    inline?: unknown;
    error?: unknown;
    id?: unknown;
    color?: unknown;
    style?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    class?: unknown;
    theme?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    density?: unknown;
    ripple?: unknown;
    defaultsTarget?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    label?: unknown;
    rules?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    width?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    centerAffix?: unknown;
    glow?: unknown;
    iconColor?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    direction?: unknown;
    'onClick:prepend'?: unknown;
    'onClick:append'?: unknown;
    height?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    trueIcon: unknown extends Defaults["trueIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["trueIcon"] ? IconValue : IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : NonNullable<IconValue> | Defaults["trueIcon"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["falseIcon"] ? IconValue : IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["falseIcon"];
    };
    type: unknown extends Defaults["type"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    style: unknown extends Defaults["style"] ? {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : import("vue").StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : NonNullable<import("vue").StyleValue> | Defaults["style"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    } : Omit<{
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean | {
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
    defaultsTarget: unknown extends Defaults["defaultsTarget"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"]>;
        default: unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"];
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? import("vue").PropType<(args_0: boolean) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : NonNullable<string | readonly string[] | null> | Defaults["errorMessages"];
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : NonNullable<string | number> | Defaults["maxErrors"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"];
    };
    validateOn: unknown extends Defaults["validateOn"] ? import("vue").PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? import("vue").PropType<boolean | "auto"> : {
        type: import("vue").PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : NonNullable<boolean | "auto"> | Defaults["hideDetails"];
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : NonNullable<string | readonly string[]> | Defaults["messages"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
};
export declare const VRadioGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        type: string;
        inline: boolean;
        error: boolean;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: IconValue;
        trueIcon: IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        defaultsTarget?: string | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:label" | "v-slot:message" | "v-slot:details">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        type: string;
        inline: boolean;
        error: boolean;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: IconValue;
        trueIcon: IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        label: (arg: {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        type: string;
        inline: boolean;
        error: boolean;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: IconValue;
        trueIcon: IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        baseColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        defaultsTarget?: string | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {}, {}, {}, {}, {
        type: string;
        inline: boolean;
        error: boolean;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: IconValue;
        trueIcon: IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    falseIcon: IconValue;
    trueIcon: IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    baseColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    defaultsTarget?: string | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:label" | "v-slot:message" | "v-slot:details">, string, {
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    falseIcon: IconValue;
    trueIcon: IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | null;
    "onUpdate:modelValue"?: (value: T | null) => void;
}, slots: VRadioGroupSlots) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    color: StringConstructor;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    modelValue: null;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    rules: {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    appendIcon: import("vue").PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    trueIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    color: StringConstructor;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    modelValue: null;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    defaultsTarget: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    rules: {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    appendIcon: import("vue").PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: import("vue").PropType<IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>>;
export type VRadioGroup = InstanceType<typeof VRadioGroup>;
