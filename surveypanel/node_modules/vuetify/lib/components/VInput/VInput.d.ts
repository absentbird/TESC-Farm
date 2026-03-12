import { IconValue } from "../../composables/icons.js";
import type { ComputedRef, PropType, Ref } from 'vue';
import type { VMessageSlot } from "../VMessages/VMessages.js";
import type { GenericProps } from "../../util/index.js";
export interface VInputSlot {
    id: ComputedRef<string>;
    messagesId: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}
export declare const makeVInputProps: <Defaults extends {
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    disabled?: unknown;
    error?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    label?: unknown;
    readonly?: unknown;
    rules?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    theme?: unknown;
    width?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    centerAffix?: unknown;
    color?: unknown;
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
} = {}>(defaults?: Defaults | undefined) => {
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
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
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : NonNullable<string | readonly string[] | null> | Defaults["errorMessages"];
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : NonNullable<string | number> | Defaults["maxErrors"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly import("../../composables/validation.js").ValidationRule[] : readonly import("../../composables/validation.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../composables/validation.js").ValidationRule[] : readonly import("../../composables/validation.js").ValidationRule[] | Defaults["rules"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
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
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? PropType<boolean | "auto"> : {
        type: PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : Defaults["hideDetails"] | NonNullable<boolean | "auto">;
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : NonNullable<string | readonly string[]> | Defaults["messages"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : Defaults["direction"] | NonNullable<"horizontal" | "vertical">;
    };
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
};
export type VInputSlots = {
    default: VInputSlot;
    prepend: VInputSlot;
    append: VInputSlot;
    details: VInputSlot;
    message: VMessageSlot;
};
export declare const VInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
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
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: ComputedRef<boolean | null>;
        errorMessages: ComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VInputSlot) => import("vue").VNode[];
        prepend: (arg: VInputSlot) => import("vue").VNode[];
        append: (arg: VInputSlot) => import("vue").VNode[];
        details: (arg: VInputSlot) => import("vue").VNode[];
        message: (arg: VMessageSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
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
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: ComputedRef<boolean | null>;
        errorMessages: ComputedRef<string[]>;
    }, {}, {}, {}, {
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../composables/validation.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
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
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {}, {
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    validate: (silent?: boolean) => Promise<string[]>;
    isValid: ComputedRef<boolean | null>;
    errorMessages: ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../composables/validation.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VInputSlot) => import("vue").VNode[];
    prepend: (arg: VInputSlot) => import("vue").VNode[];
    append: (arg: VInputSlot) => import("vue").VNode[];
    details: (arg: VInputSlot) => import("vue").VNode[];
    message: (arg: VMessageSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | null;
    "onUpdate:modelValue"?: (value: T | null) => void;
}, slots: VInputSlots) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    theme: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
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
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    theme: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
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
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
}>>;
export type VInput = InstanceType<typeof VInput>;
