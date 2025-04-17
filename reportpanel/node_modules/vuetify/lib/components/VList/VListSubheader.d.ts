export declare const makeVListSubheaderProps: <Defaults extends {
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    inset?: unknown;
    sticky?: unknown;
    title?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    inset: unknown extends Defaults["inset"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"]>;
        default: unknown extends Defaults["inset"] ? boolean : boolean | Defaults["inset"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
};
export declare const VListSubheader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inset: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
    } & {
        color?: string | undefined;
        title?: string | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inset: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
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
        inset: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
    } & {
        color?: string | undefined;
        title?: string | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        inset: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inset: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
} & {
    color?: string | undefined;
    title?: string | undefined;
    class?: any;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    inset: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
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
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
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
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
}>>;
export type VListSubheader = InstanceType<typeof VListSubheader>;
