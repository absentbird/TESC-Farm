import { IconValue } from "../../composables/icons.js";
export type VListGroupSlots = {
    default: never;
    activator: {
        isOpen: boolean;
        props: Record<string, unknown>;
    };
};
export declare const makeVListGroupProps: <Defaults extends {
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    activeColor?: unknown;
    baseColor?: unknown;
    color?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    fluid?: unknown;
    subgroup?: unknown;
    title?: unknown;
    value?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? IconValue : IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? IconValue : IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : NonNullable<IconValue> | Defaults["expandIcon"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
    subgroup: unknown extends Defaults["subgroup"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["subgroup"] ? boolean : boolean | Defaults["subgroup"]>;
        default: unknown extends Defaults["subgroup"] ? boolean : boolean | Defaults["subgroup"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
};
export declare const VListGroup: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        subgroup: boolean;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        fluid: boolean;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        class?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
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
    }, {
        isOpen: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        subgroup: boolean;
        collapseIcon: IconValue;
        expandIcon: IconValue;
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
        subgroup: boolean;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        fluid: boolean;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        class?: any;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
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
    }, {
        isOpen: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        subgroup: boolean;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        fluid: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    subgroup: boolean;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    fluid: boolean;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    class?: any;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
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
}, {
    isOpen: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    subgroup: boolean;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    fluid: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    activator: (arg: {
        isOpen: boolean;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prependIcon: import("vue").PropType<IconValue>;
    appendIcon: import("vue").PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}, import("vue").ExtractPropTypes<{
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prependIcon: import("vue").PropType<IconValue>;
    appendIcon: import("vue").PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    title: StringConstructor;
    value: null;
}>>;
export type VListGroup = InstanceType<typeof VListGroup>;
