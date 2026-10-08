import type { Prop, PropType } from 'vue';
declare const ALIGN_VALUES: readonly ["start", "end", "center", "baseline", "stretch"];
declare const ALIGN_CONTENT_VALUES: readonly ["start", "end", "center", "space-between", "space-around", "space-evenly", "stretch"];
export declare const makeVRowProps: <Defaults extends {
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    alignContentSm?: unknown;
    alignContentMd?: unknown;
    alignContentLg?: unknown;
    alignContentXl?: unknown;
    alignContentXxl?: unknown;
    alignContent?: unknown;
    justifySm?: unknown;
    justifyMd?: unknown;
    justifyLg?: unknown;
    justifyXl?: unknown;
    justifyXxl?: unknown;
    justify?: unknown;
    alignSm?: unknown;
    alignMd?: unknown;
    alignLg?: unknown;
    alignXl?: unknown;
    alignXxl?: unknown;
    dense?: unknown;
    noGutters?: unknown;
    align?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
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
    alignContentSm: unknown extends Defaults["alignContentSm"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentSm"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContentSm"]>;
        default: unknown extends Defaults["alignContentSm"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : Defaults["alignContentSm"] | NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch">;
    };
    alignContentMd: unknown extends Defaults["alignContentMd"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentMd"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContentMd"]>;
        default: unknown extends Defaults["alignContentMd"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["alignContentMd"];
    };
    alignContentLg: unknown extends Defaults["alignContentLg"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentLg"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContentLg"]>;
        default: unknown extends Defaults["alignContentLg"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["alignContentLg"];
    };
    alignContentXl: unknown extends Defaults["alignContentXl"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentXl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContentXl"]>;
        default: unknown extends Defaults["alignContentXl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["alignContentXl"];
    };
    alignContentXxl: unknown extends Defaults["alignContentXxl"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null> : {
        type: PropType<unknown extends Defaults["alignContentXxl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContentXxl"]>;
        default: unknown extends Defaults["alignContentXxl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["alignContentXxl"];
    };
    alignContent: unknown extends Defaults["alignContent"] ? {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["alignContent"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["alignContent"]>;
        default: unknown extends Defaults["alignContent"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["alignContent"];
    };
    justifySm: unknown extends Defaults["justifySm"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null> : {
        type: PropType<unknown extends Defaults["justifySm"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | Defaults["justifySm"]>;
        default: unknown extends Defaults["justifySm"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : Defaults["justifySm"] | NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly">;
    };
    justifyMd: unknown extends Defaults["justifyMd"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null> : {
        type: PropType<unknown extends Defaults["justifyMd"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | Defaults["justifyMd"]>;
        default: unknown extends Defaults["justifyMd"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly"> | Defaults["justifyMd"];
    };
    justifyLg: unknown extends Defaults["justifyLg"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null> : {
        type: PropType<unknown extends Defaults["justifyLg"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | Defaults["justifyLg"]>;
        default: unknown extends Defaults["justifyLg"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly"> | Defaults["justifyLg"];
    };
    justifyXl: unknown extends Defaults["justifyXl"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null> : {
        type: PropType<unknown extends Defaults["justifyXl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | Defaults["justifyXl"]>;
        default: unknown extends Defaults["justifyXl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly"> | Defaults["justifyXl"];
    };
    justifyXxl: unknown extends Defaults["justifyXxl"] ? Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null> : {
        type: PropType<unknown extends Defaults["justifyXxl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | Defaults["justifyXxl"]>;
        default: unknown extends Defaults["justifyXxl"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly"> | Defaults["justifyXxl"];
    };
    justify: unknown extends Defaults["justify"] ? {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["justify"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | Defaults["justify"]>;
        default: unknown extends Defaults["justify"] ? "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" : NonNullable<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch"> | Defaults["justify"];
    };
    alignSm: unknown extends Defaults["alignSm"] ? Prop<"center" | "end" | "start" | "stretch" | "baseline", null> : {
        type: PropType<unknown extends Defaults["alignSm"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignSm"]>;
        default: unknown extends Defaults["alignSm"] ? "center" | "end" | "start" | "stretch" | "baseline" : Defaults["alignSm"] | NonNullable<"center" | "end" | "start" | "stretch" | "baseline">;
    };
    alignMd: unknown extends Defaults["alignMd"] ? Prop<"center" | "end" | "start" | "stretch" | "baseline", null> : {
        type: PropType<unknown extends Defaults["alignMd"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignMd"]>;
        default: unknown extends Defaults["alignMd"] ? "center" | "end" | "start" | "stretch" | "baseline" : NonNullable<"center" | "end" | "start" | "stretch" | "baseline"> | Defaults["alignMd"];
    };
    alignLg: unknown extends Defaults["alignLg"] ? Prop<"center" | "end" | "start" | "stretch" | "baseline", null> : {
        type: PropType<unknown extends Defaults["alignLg"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignLg"]>;
        default: unknown extends Defaults["alignLg"] ? "center" | "end" | "start" | "stretch" | "baseline" : NonNullable<"center" | "end" | "start" | "stretch" | "baseline"> | Defaults["alignLg"];
    };
    alignXl: unknown extends Defaults["alignXl"] ? Prop<"center" | "end" | "start" | "stretch" | "baseline", null> : {
        type: PropType<unknown extends Defaults["alignXl"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignXl"]>;
        default: unknown extends Defaults["alignXl"] ? "center" | "end" | "start" | "stretch" | "baseline" : NonNullable<"center" | "end" | "start" | "stretch" | "baseline"> | Defaults["alignXl"];
    };
    alignXxl: unknown extends Defaults["alignXxl"] ? Prop<"center" | "end" | "start" | "stretch" | "baseline", null> : {
        type: PropType<unknown extends Defaults["alignXxl"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignXxl"]>;
        default: unknown extends Defaults["alignXxl"] ? "center" | "end" | "start" | "stretch" | "baseline" : NonNullable<"center" | "end" | "start" | "stretch" | "baseline"> | Defaults["alignXxl"];
    };
    dense: unknown extends Defaults["dense"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["dense"] ? boolean : boolean | Defaults["dense"]>;
        default: unknown extends Defaults["dense"] ? boolean : boolean | Defaults["dense"];
    };
    noGutters: unknown extends Defaults["noGutters"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noGutters"] ? boolean : boolean | Defaults["noGutters"]>;
        default: unknown extends Defaults["noGutters"] ? boolean : boolean | Defaults["noGutters"];
    };
    align: unknown extends Defaults["align"] ? {
        type: PropType<(typeof ALIGN_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<(typeof ALIGN_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["align"] ? "center" | "end" | "start" | "stretch" | "baseline" : "center" | "end" | "start" | "stretch" | "baseline" | Defaults["align"]>;
        default: unknown extends Defaults["align"] ? "center" | "end" | "start" | "stretch" | "baseline" : NonNullable<"center" | "end" | "start" | "stretch" | "baseline"> | Defaults["align"];
    };
};
export declare const VRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dense: boolean;
        justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        align: "center" | "end" | "start" | "stretch" | "baseline";
        noGutters: boolean;
    } & {
        class?: any;
        alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dense: boolean;
        justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        align: "center" | "end" | "start" | "stretch" | "baseline";
        noGutters: boolean;
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
        alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dense: boolean;
        justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        align: "center" | "end" | "start" | "stretch" | "baseline";
        noGutters: boolean;
    } & {
        class?: any;
        alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
        justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
        alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
        alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, {}, {}, {}, {
        alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dense: boolean;
        justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
        align: "center" | "end" | "start" | "stretch" | "baseline";
        noGutters: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    dense: boolean;
    justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    align: "center" | "end" | "start" | "stretch" | "baseline";
    noGutters: boolean;
} & {
    class?: any;
    alignSm?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignMd?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignLg?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignXl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    alignXxl?: "center" | "end" | "start" | "stretch" | "baseline" | undefined;
    justifySm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    justifyXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | undefined;
    alignContentSm?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentMd?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentLg?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentXl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
    alignContentXxl?: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch" | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    alignContent: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    dense: boolean;
    justify: "center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch";
    align: "center" | "end" | "start" | "stretch" | "baseline";
    noGutters: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    alignContentSm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContent: {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    justifySm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justify: {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    alignSm: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignMd: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignLg: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXxl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<(typeof ALIGN_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    alignContentSm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContentXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly" | "stretch", null>;
    alignContent: {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    justifySm: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyMd: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyLg: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justifyXxl: Prop<"center" | "end" | "start" | "space-around" | "space-between" | "space-evenly", null>;
    justify: {
        type: PropType<(typeof ALIGN_CONTENT_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    alignSm: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignMd: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignLg: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    alignXxl: Prop<"center" | "end" | "start" | "stretch" | "baseline", null>;
    dense: BooleanConstructor;
    noGutters: BooleanConstructor;
    align: {
        type: PropType<(typeof ALIGN_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
}>>;
export type VRow = InstanceType<typeof VRow>;

