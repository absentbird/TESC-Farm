export declare const makeVTreeviewGroupProps: <Defaults extends {
    color?: unknown;
    value?: unknown;
    style?: unknown;
    title?: unknown;
    class?: unknown;
    tag?: unknown;
    baseColor?: unknown;
    activeColor?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    fluid?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
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
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["expandIcon"];
    };
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
};
export declare const VTreeviewGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        class?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        activator: (arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        class?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isOpen: boolean;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    fluid: boolean;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    class?: any;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        activator?: ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        activator?: false | ((arg: {
            isOpen: boolean;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    fluid: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    activator: (arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    value: null;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    fluid: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    value: null;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    fluid: BooleanConstructor;
}>>;
export type VTreeviewGroup = InstanceType<typeof VTreeviewGroup>;
