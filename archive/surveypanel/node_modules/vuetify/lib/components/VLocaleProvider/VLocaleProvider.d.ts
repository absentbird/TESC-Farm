export declare const makeVLocaleProviderProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    locale?: unknown;
    fallbackLocale?: unknown;
    messages?: unknown;
    rtl?: unknown;
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
    locale: unknown extends Defaults["locale"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["locale"] ? string : string | Defaults["locale"]>;
        default: unknown extends Defaults["locale"] ? string : string | Defaults["locale"];
    };
    fallbackLocale: unknown extends Defaults["fallbackLocale"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fallbackLocale"] ? string : string | Defaults["fallbackLocale"]>;
        default: unknown extends Defaults["fallbackLocale"] ? string : string | Defaults["fallbackLocale"];
    };
    messages: unknown extends Defaults["messages"] ? ObjectConstructor : {
        type: import("vue").PropType<unknown extends Defaults["messages"] ? Record<string, any> : Record<string, any> | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? Record<string, any> : Record<string, any> | Defaults["messages"];
    };
    rtl: unknown extends Defaults["rtl"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rtl"] ? boolean : boolean | Defaults["rtl"]>;
        default: unknown extends Defaults["rtl"] ? boolean : boolean | Defaults["rtl"];
    };
};
export declare const VLocaleProvider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
    } & {
        rtl?: boolean | undefined;
        class?: any;
        locale?: string | undefined;
        fallbackLocale?: string | undefined;
        messages?: Record<string, any> | undefined;
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
        rtl: boolean;
        style: import("vue").StyleValue;
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
        style: import("vue").StyleValue;
    } & {
        rtl?: boolean | undefined;
        class?: any;
        locale?: string | undefined;
        fallbackLocale?: string | undefined;
        messages?: Record<string, any> | undefined;
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
        rtl: boolean;
        style: import("vue").StyleValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
} & {
    rtl?: boolean | undefined;
    class?: any;
    locale?: string | undefined;
    fallbackLocale?: string | undefined;
    messages?: Record<string, any> | undefined;
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
    rtl: boolean;
    style: import("vue").StyleValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    locale: StringConstructor;
    fallbackLocale: StringConstructor;
    messages: ObjectConstructor;
    rtl: {
        type: BooleanConstructor;
        default: undefined;
    };
}>>;
export type VLocaleProvider = InstanceType<typeof VLocaleProvider>;
