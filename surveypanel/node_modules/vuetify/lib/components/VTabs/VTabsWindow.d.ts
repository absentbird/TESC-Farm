export declare const makeVTabsWindowProps: <Defaults extends {
    reverse?: unknown;
    direction?: unknown;
    style?: unknown;
    disabled?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    modelValue?: unknown;
    selectedClass?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
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
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
};
export declare const VTabsWindow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        selectedClass: string;
    } & {
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (v: unknown) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        selectedClass: string;
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
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        selectedClass: string;
    } & {
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        selectedClass: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    selectedClass: string;
} & {
    class?: any;
    theme?: string | undefined;
    modelValue?: any;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => true;
}, string, {
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    selectedClass: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    reverse: BooleanConstructor;
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: null;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    reverse: BooleanConstructor;
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    modelValue: null;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VTabsWindow = InstanceType<typeof VTabsWindow>;
