import type { PropType, VNode } from 'vue';
type VSkeletonBone<T> = T | VSkeletonBone<T>[];
export type VSkeletonBones = VSkeletonBone<VNode>;
export type VSkeletonLoaderType = keyof typeof rootTypes;
export declare const rootTypes: {
    readonly actions: "button@2";
    readonly article: "heading, paragraph";
    readonly avatar: "avatar";
    readonly button: "button";
    readonly card: "image, heading";
    readonly 'card-avatar': "image, list-item-avatar";
    readonly chip: "chip";
    readonly 'date-picker': "list-item, heading, divider, date-picker-options, date-picker-days, actions";
    readonly 'date-picker-options': "text, avatar@2";
    readonly 'date-picker-days': "avatar@28";
    readonly divider: "divider";
    readonly heading: "heading";
    readonly image: "image";
    readonly 'list-item': "text";
    readonly 'list-item-avatar': "avatar, text";
    readonly 'list-item-two-line': "sentences";
    readonly 'list-item-avatar-two-line': "avatar, sentences";
    readonly 'list-item-three-line': "paragraph";
    readonly 'list-item-avatar-three-line': "avatar, paragraph";
    readonly ossein: "ossein";
    readonly paragraph: "text@3";
    readonly sentences: "text@2";
    readonly subtitle: "text";
    readonly table: "table-heading, table-thead, table-tbody, table-tfoot";
    readonly 'table-heading': "chip, text";
    readonly 'table-thead': "heading@6";
    readonly 'table-tbody': "table-row-divider@6";
    readonly 'table-row-divider': "table-row, divider";
    readonly 'table-row': "text@6";
    readonly 'table-tfoot': "text@2, avatar@2";
    readonly text: "text";
};
export declare const makeVSkeletonLoaderProps: <Defaults extends {
    theme?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    boilerplate?: unknown;
    color?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    type?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
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
    boilerplate: unknown extends Defaults["boilerplate"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["boilerplate"] ? boolean : boolean | Defaults["boilerplate"]>;
        default: unknown extends Defaults["boilerplate"] ? boolean : boolean | Defaults["boilerplate"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    type: unknown extends Defaults["type"] ? {
        type: PropType<VSkeletonLoaderType | (string & {}) | ReadonlyArray<VSkeletonLoaderType | (string & {})>>;
        default: string;
    } : Omit<{
        type: PropType<VSkeletonLoaderType | (string & {}) | ReadonlyArray<VSkeletonLoaderType | (string & {})>>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["type"] ? "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[] : "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[] | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[] : Defaults["type"] | NonNullable<"button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[]>;
    };
};
export declare const VSkeletonLoader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        theme?: string | undefined;
        elevation?: string | number | undefined;
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
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        theme?: string | undefined;
        elevation?: string | number | undefined;
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
        type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
        loading: boolean;
        loadingText: string;
        boilerplate: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    theme?: string | undefined;
    elevation?: string | number | undefined;
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
    type: "button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot" | readonly ("button" | "article" | "table" | "image" | "text" | (string & {}) | "table-row" | "list-item" | "sentences" | "heading" | "divider" | "actions" | "subtitle" | "chip" | "avatar" | "paragraph" | "ossein" | "card" | "card-avatar" | "date-picker" | "date-picker-options" | "date-picker-days" | "list-item-avatar" | "list-item-two-line" | "list-item-avatar-two-line" | "list-item-three-line" | "list-item-avatar-three-line" | "table-heading" | "table-thead" | "table-tbody" | "table-row-divider" | "table-tfoot")[];
    loading: boolean;
    loadingText: string;
    boilerplate: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<VSkeletonLoaderType | (string & {}) | ReadonlyArray<VSkeletonLoaderType | (string & {})>>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    boilerplate: BooleanConstructor;
    color: StringConstructor;
    loading: BooleanConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<VSkeletonLoaderType | (string & {}) | ReadonlyArray<VSkeletonLoaderType | (string & {})>>;
        default: string;
    };
}>>;
export type VSkeletonLoader = InstanceType<typeof VSkeletonLoader>;

