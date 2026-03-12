import type { PropType } from 'vue';
export type VOtpInputSlots = {
    default: never;
    loader: never;
};
export declare const makeVOtpInputProps: <Defaults extends {
    variant?: unknown;
    error?: unknown;
    color?: unknown;
    loading?: unknown;
    style?: unknown;
    disabled?: unknown;
    class?: unknown;
    theme?: unknown;
    rounded?: unknown;
    baseColor?: unknown;
    bgColor?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    autofocus?: unknown;
    divider?: unknown;
    focusAll?: unknown;
    label?: unknown;
    length?: unknown;
    modelValue?: unknown;
    placeholder?: unknown;
    type?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    } : Omit<Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled"> | Defaults["variant"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
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
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    divider: unknown extends Defaults["divider"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["divider"] ? string : string | Defaults["divider"]>;
        default: unknown extends Defaults["divider"] ? string : string | Defaults["divider"];
    };
    focusAll: unknown extends Defaults["focusAll"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusAll"] ? boolean : boolean | Defaults["focusAll"]>;
        default: unknown extends Defaults["focusAll"] ? boolean : boolean | Defaults["focusAll"];
    };
    label: unknown extends Defaults["label"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : NonNullable<string | number> | Defaults["length"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : NonNullable<string | number> | Defaults["modelValue"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<"text" | "password" | "number">;
        default: string;
    } : Omit<{
        type: PropType<"text" | "password" | "number">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["type"] ? "number" | "text" | "password" : "number" | "text" | "password" | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? "number" | "text" | "password" : Defaults["type"] | NonNullable<"number" | "text" | "password">;
    };
};
export declare const VOtpInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        length: string | number;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: "number" | "text" | "password";
        error: boolean;
        label: string;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        focused: boolean;
        focusAll: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        divider?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((val: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        onFinish?: ((val: string) => any) | undefined;
    }, {
        blur: () => void;
        focus: () => void;
        reset: () => void;
        isFocused: import("vue").Ref<boolean, boolean> & {
            readonly externalValue: boolean;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        finish: (val: string) => true;
        'update:focused': (val: boolean) => true;
        'update:modelValue': (val: string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        length: string | number;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: "number" | "text" | "password";
        error: boolean;
        label: string;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        focused: boolean;
        modelValue: string | number;
        rounded: string | number | boolean;
        focusAll: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        loader: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        length: string | number;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: "number" | "text" | "password";
        error: boolean;
        label: string;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        focused: boolean;
        focusAll: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        divider?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((val: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        onFinish?: ((val: string) => any) | undefined;
    }, {
        blur: () => void;
        focus: () => void;
        reset: () => void;
        isFocused: import("vue").Ref<boolean, boolean> & {
            readonly externalValue: boolean;
        };
    }, {}, {}, {}, {
        length: string | number;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: "number" | "text" | "password";
        error: boolean;
        label: string;
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        focused: boolean;
        modelValue: string | number;
        rounded: string | number | boolean;
        focusAll: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    length: string | number;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: "number" | "text" | "password";
    error: boolean;
    label: string;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    focused: boolean;
    focusAll: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    divider?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        loader?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        loader?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:focused"?: ((val: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    onFinish?: ((val: string) => any) | undefined;
}, {
    blur: () => void;
    focus: () => void;
    reset: () => void;
    isFocused: import("vue").Ref<boolean, boolean> & {
        readonly externalValue: boolean;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    finish: (val: string) => true;
    'update:focused': (val: boolean) => true;
    'update:modelValue': (val: string) => true;
}, string, {
    length: string | number;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: "number" | "text" | "password";
    error: boolean;
    label: string;
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    focused: boolean;
    modelValue: string | number;
    rounded: string | number | boolean;
    focusAll: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    loader: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    };
    error: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"text" | "password" | "number">;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    variant: Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
    };
    error: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    autofocus: BooleanConstructor;
    divider: StringConstructor;
    focusAll: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    placeholder: StringConstructor;
    type: {
        type: PropType<"text" | "password" | "number">;
        default: string;
    };
}>>;
export type VOtpInput = InstanceType<typeof VOtpInput>;
