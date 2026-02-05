export declare const makeVParallaxProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    scale?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    scale: unknown extends Defaults["scale"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["scale"] ? string | number : string | number | Defaults["scale"]>;
        default: unknown extends Defaults["scale"] ? string | number : NonNullable<string | number> | Defaults["scale"];
    };
};
export declare const VParallax: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        scale: string | number;
        style: import("vue").StyleValue;
    } & {
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        scale: string | number;
        style: import("vue").StyleValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        placeholder: () => import("vue").VNode[];
        error: () => import("vue").VNode[];
        sources: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        scale: string | number;
        style: import("vue").StyleValue;
    } & {
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        scale: string | number;
        style: import("vue").StyleValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    scale: string | number;
    style: import("vue").StyleValue;
} & {
    class?: any;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        placeholder?: (() => import("vue").VNodeChild) | undefined;
        error?: (() => import("vue").VNodeChild) | undefined;
        sources?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        placeholder?: false | (() => import("vue").VNodeChild) | undefined;
        error?: false | (() => import("vue").VNodeChild) | undefined;
        sources?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    scale: string | number;
    style: import("vue").StyleValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    placeholder: () => import("vue").VNode[];
    error: () => import("vue").VNode[];
    sources: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    scale: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
export type VParallax = InstanceType<typeof VParallax>;
