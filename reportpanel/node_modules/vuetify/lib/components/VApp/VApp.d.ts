export declare const makeVAppProps: <Defaults extends {
    theme?: unknown;
    overlaps?: unknown;
    fullHeight?: unknown;
    class?: unknown;
    style?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    overlaps: unknown extends Defaults["overlaps"] ? import("vue").Prop<string[]> : {
        type: import("vue").PropType<unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"]>;
        default: unknown extends Defaults["overlaps"] ? string[] : string[] | Defaults["overlaps"];
    };
    fullHeight: unknown extends Defaults["fullHeight"] ? {
        type: import("vue").PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["fullHeight"] ? boolean : boolean | Defaults["fullHeight"]>;
        default: unknown extends Defaults["fullHeight"] ? boolean : boolean | Defaults["fullHeight"];
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
};
export declare const VApp: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        fullHeight: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        overlaps?: string[] | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {
        getLayoutItem: (id: string) => {
            size: number;
            position: import("../../composables/layout.js").Position;
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
        } | undefined;
        items: import("vue").ComputedRef<{
            size: number;
            position: import("../../composables/layout.js").Position;
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
        }[]>;
        theme: import("../../composables/theme.js").ThemeInstance;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        fullHeight: boolean;
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
        fullHeight: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        overlaps?: string[] | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {
        getLayoutItem: (id: string) => {
            size: number;
            position: import("../../composables/layout.js").Position;
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
        } | undefined;
        items: import("vue").ComputedRef<{
            size: number;
            position: import("../../composables/layout.js").Position;
            top: number;
            bottom: number;
            left: number;
            right: number;
            id: string;
        }[]>;
        theme: import("../../composables/theme.js").ThemeInstance;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        fullHeight: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    fullHeight: boolean;
} & {
    class?: any;
    theme?: string | undefined;
    overlaps?: string[] | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {
    getLayoutItem: (id: string) => {
        size: number;
        position: import("../../composables/layout.js").Position;
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
    } | undefined;
    items: import("vue").ComputedRef<{
        size: number;
        position: import("../../composables/layout.js").Position;
        top: number;
        bottom: number;
        left: number;
        right: number;
        id: string;
    }[]>;
    theme: import("../../composables/theme.js").ThemeInstance;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    fullHeight: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    overlaps: import("vue").Prop<string[]>;
    fullHeight: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    overlaps: import("vue").Prop<string[]>;
    fullHeight: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
}>>;
export type VApp = InstanceType<typeof VApp>;
