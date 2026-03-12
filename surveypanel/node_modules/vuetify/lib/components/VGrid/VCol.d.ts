import type { Prop, PropType } from 'vue';
declare const ALIGN_SELF_VALUES: readonly ["auto", "start", "end", "center", "baseline", "stretch"];
export declare const makeVColProps: <Defaults extends {
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    alignSelf?: unknown;
    orderSm?: unknown;
    orderMd?: unknown;
    orderLg?: unknown;
    orderXl?: unknown;
    orderXxl?: unknown;
    order?: unknown;
    offsetSm?: unknown;
    offsetMd?: unknown;
    offsetLg?: unknown;
    offsetXl?: unknown;
    offsetXxl?: unknown;
    offset?: unknown;
    sm?: unknown;
    md?: unknown;
    lg?: unknown;
    xl?: unknown;
    xxl?: unknown;
    cols?: unknown;
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
    alignSelf: unknown extends Defaults["alignSelf"] ? {
        type: PropType<(typeof ALIGN_SELF_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    } : Omit<{
        type: PropType<(typeof ALIGN_SELF_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["alignSelf"] ? "auto" | "center" | "end" | "start" | "stretch" | "baseline" : "auto" | "center" | "end" | "start" | "stretch" | "baseline" | Defaults["alignSelf"]>;
        default: unknown extends Defaults["alignSelf"] ? "auto" | "center" | "end" | "start" | "stretch" | "baseline" : Defaults["alignSelf"] | NonNullable<"auto" | "center" | "end" | "start" | "stretch" | "baseline">;
    };
    orderSm: unknown extends Defaults["orderSm"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderSm"] ? string | number : string | number | Defaults["orderSm"]>;
        default: unknown extends Defaults["orderSm"] ? string | number : NonNullable<string | number> | Defaults["orderSm"];
    };
    orderMd: unknown extends Defaults["orderMd"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderMd"] ? string | number : string | number | Defaults["orderMd"]>;
        default: unknown extends Defaults["orderMd"] ? string | number : NonNullable<string | number> | Defaults["orderMd"];
    };
    orderLg: unknown extends Defaults["orderLg"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderLg"] ? string | number : string | number | Defaults["orderLg"]>;
        default: unknown extends Defaults["orderLg"] ? string | number : NonNullable<string | number> | Defaults["orderLg"];
    };
    orderXl: unknown extends Defaults["orderXl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderXl"] ? string | number : string | number | Defaults["orderXl"]>;
        default: unknown extends Defaults["orderXl"] ? string | number : NonNullable<string | number> | Defaults["orderXl"];
    };
    orderXxl: unknown extends Defaults["orderXxl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["orderXxl"] ? string | number : string | number | Defaults["orderXxl"]>;
        default: unknown extends Defaults["orderXxl"] ? string | number : NonNullable<string | number> | Defaults["orderXxl"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : NonNullable<string | number> | Defaults["order"];
    };
    offsetSm: unknown extends Defaults["offsetSm"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetSm"] ? string | number : string | number | Defaults["offsetSm"]>;
        default: unknown extends Defaults["offsetSm"] ? string | number : NonNullable<string | number> | Defaults["offsetSm"];
    };
    offsetMd: unknown extends Defaults["offsetMd"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetMd"] ? string | number : string | number | Defaults["offsetMd"]>;
        default: unknown extends Defaults["offsetMd"] ? string | number : NonNullable<string | number> | Defaults["offsetMd"];
    };
    offsetLg: unknown extends Defaults["offsetLg"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetLg"] ? string | number : string | number | Defaults["offsetLg"]>;
        default: unknown extends Defaults["offsetLg"] ? string | number : NonNullable<string | number> | Defaults["offsetLg"];
    };
    offsetXl: unknown extends Defaults["offsetXl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetXl"] ? string | number : string | number | Defaults["offsetXl"]>;
        default: unknown extends Defaults["offsetXl"] ? string | number : NonNullable<string | number> | Defaults["offsetXl"];
    };
    offsetXxl: unknown extends Defaults["offsetXxl"] ? Prop<string | number, null> : {
        type: PropType<unknown extends Defaults["offsetXxl"] ? string | number : string | number | Defaults["offsetXxl"]>;
        default: unknown extends Defaults["offsetXxl"] ? string | number : NonNullable<string | number> | Defaults["offsetXxl"];
    };
    offset: unknown extends Defaults["offset"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["offset"] ? string | number : string | number | Defaults["offset"]>;
        default: unknown extends Defaults["offset"] ? string | number : NonNullable<string | number> | Defaults["offset"];
    };
    sm: unknown extends Defaults["sm"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["sm"] ? string | number | boolean : string | number | boolean | Defaults["sm"]>;
        default: unknown extends Defaults["sm"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["sm"];
    };
    md: unknown extends Defaults["md"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["md"] ? string | number | boolean : string | number | boolean | Defaults["md"]>;
        default: unknown extends Defaults["md"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["md"];
    };
    lg: unknown extends Defaults["lg"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["lg"] ? string | number | boolean : string | number | boolean | Defaults["lg"]>;
        default: unknown extends Defaults["lg"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["lg"];
    };
    xl: unknown extends Defaults["xl"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["xl"] ? string | number | boolean : string | number | boolean | Defaults["xl"]>;
        default: unknown extends Defaults["xl"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["xl"];
    };
    xxl: unknown extends Defaults["xxl"] ? Prop<string | number | boolean, false> : {
        type: PropType<unknown extends Defaults["xxl"] ? string | number | boolean : string | number | boolean | Defaults["xxl"]>;
        default: unknown extends Defaults["xxl"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["xxl"];
    };
    cols: unknown extends Defaults["cols"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["cols"] ? string | number | boolean : string | number | boolean | Defaults["cols"]>;
        default: unknown extends Defaults["cols"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["cols"];
    };
};
export declare const VCol: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        offset: string | number;
        alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
    } & {
        class?: any;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
        offsetSm?: string | number | undefined;
        offsetMd?: string | number | undefined;
        offsetLg?: string | number | undefined;
        offsetXl?: string | number | undefined;
        offsetXxl?: string | number | undefined;
        orderSm?: string | number | undefined;
        orderMd?: string | number | undefined;
        orderLg?: string | number | undefined;
        orderXl?: string | number | undefined;
        orderXxl?: string | number | undefined;
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
        offset: string | number;
        alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
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
        offset: string | number;
        alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
    } & {
        class?: any;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
        offsetSm?: string | number | undefined;
        offsetMd?: string | number | undefined;
        offsetLg?: string | number | undefined;
        offsetXl?: string | number | undefined;
        offsetXxl?: string | number | undefined;
        orderSm?: string | number | undefined;
        orderMd?: string | number | undefined;
        orderLg?: string | number | undefined;
        orderXl?: string | number | undefined;
        orderXxl?: string | number | undefined;
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
        offset: string | number;
        alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        cols: string | number | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    offset: string | number;
    alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
    order: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    cols: string | number | boolean;
} & {
    class?: any;
    sm?: string | number | boolean | undefined;
    md?: string | number | boolean | undefined;
    lg?: string | number | boolean | undefined;
    xl?: string | number | boolean | undefined;
    xxl?: string | number | boolean | undefined;
    offsetSm?: string | number | undefined;
    offsetMd?: string | number | undefined;
    offsetLg?: string | number | undefined;
    offsetXl?: string | number | undefined;
    offsetXxl?: string | number | undefined;
    orderSm?: string | number | undefined;
    orderMd?: string | number | undefined;
    orderLg?: string | number | undefined;
    orderXl?: string | number | undefined;
    orderXxl?: string | number | undefined;
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
    offset: string | number;
    alignSelf: "auto" | "center" | "end" | "start" | "stretch" | "baseline";
    order: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    cols: string | number | boolean;
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
    alignSelf: {
        type: PropType<(typeof ALIGN_SELF_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    orderSm: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offsetSm: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetLg: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    sm: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    lg: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
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
    alignSelf: {
        type: PropType<(typeof ALIGN_SELF_VALUES)[number]>;
        default: null;
        validator: (str: any) => boolean;
    };
    orderSm: Prop<string | number, null>;
    orderMd: Prop<string | number, null>;
    orderLg: Prop<string | number, null>;
    orderXl: Prop<string | number, null>;
    orderXxl: Prop<string | number, null>;
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    offsetSm: Prop<string | number, null>;
    offsetMd: Prop<string | number, null>;
    offsetLg: Prop<string | number, null>;
    offsetXl: Prop<string | number, null>;
    offsetXxl: Prop<string | number, null>;
    offset: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    sm: Prop<string | number | boolean, false>;
    md: Prop<string | number | boolean, false>;
    lg: Prop<string | number | boolean, false>;
    xl: Prop<string | number | boolean, false>;
    xxl: Prop<string | number | boolean, false>;
    cols: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
}>>;
export type VCol = InstanceType<typeof VCol>;

