import type { PropType } from 'vue';
export declare const makeVProgressCircularProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    class?: unknown;
    style?: unknown;
    bgColor?: unknown;
    color?: unknown;
    indeterminate?: unknown;
    modelValue?: unknown;
    rotate?: unknown;
    width?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
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
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    indeterminate: unknown extends Defaults["indeterminate"] ? PropType<boolean | "disable-shrink"> : {
        type: PropType<unknown extends Defaults["indeterminate"] ? boolean | "disable-shrink" : boolean | "disable-shrink" | Defaults["indeterminate"]>;
        default: unknown extends Defaults["indeterminate"] ? boolean | "disable-shrink" : Defaults["indeterminate"] | NonNullable<boolean | "disable-shrink">;
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : NonNullable<string | number> | Defaults["modelValue"];
    };
    rotate: unknown extends Defaults["rotate"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rotate"] ? string | number : string | number | Defaults["rotate"]>;
        default: unknown extends Defaults["rotate"] ? string | number : NonNullable<string | number> | Defaults["rotate"];
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
export declare const VProgressCircular: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        width: string | number;
        rotate: string | number;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
    } & {
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        indeterminate?: boolean | "disable-shrink" | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            value: number;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        width: string | number;
        rotate: string | number;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            value: number;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        width: string | number;
        rotate: string | number;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
    } & {
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        indeterminate?: boolean | "disable-shrink" | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            value: number;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        width: string | number;
        rotate: string | number;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    width: string | number;
    rotate: string | number;
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: string | number;
} & {
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    indeterminate?: boolean | "disable-shrink" | undefined;
    bgColor?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    } | ((arg: {
        value: number;
    }) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            value: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
    }) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    width: string | number;
    rotate: string | number;
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        value: number;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    bgColor: StringConstructor;
    color: StringConstructor;
    indeterminate: PropType<boolean | "disable-shrink">;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rotate: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
export type VProgressCircular = InstanceType<typeof VProgressCircular>;
