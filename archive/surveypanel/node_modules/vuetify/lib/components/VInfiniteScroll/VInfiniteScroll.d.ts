import type { PropType } from 'vue';
export type InfiniteScrollSide = 'start' | 'end' | 'both';
export type InfiniteScrollStatus = 'ok' | 'empty' | 'loading' | 'error';
type InfiniteScrollSlot = {
    side: InfiniteScrollSide;
    props: Record<string, any>;
};
export declare const makeVInfiniteScrollProps: <Defaults extends {
    tag?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    color?: unknown;
    direction?: unknown;
    side?: unknown;
    mode?: unknown;
    margin?: unknown;
    loadMoreText?: unknown;
    emptyText?: unknown;
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"vertical" | "horizontal">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"vertical" | "horizontal">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    side: unknown extends Defaults["side"] ? {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["side"] ? InfiniteScrollSide : InfiniteScrollSide | Defaults["side"]>;
        default: unknown extends Defaults["side"] ? InfiniteScrollSide : Defaults["side"] | NonNullable<InfiniteScrollSide>;
    };
    mode: unknown extends Defaults["mode"] ? {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mode"] ? "manual" | "intersect" : "manual" | "intersect" | Defaults["mode"]>;
        default: unknown extends Defaults["mode"] ? "manual" | "intersect" : Defaults["mode"] | NonNullable<"manual" | "intersect">;
    };
    margin: unknown extends Defaults["margin"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["margin"] ? string | number : string | number | Defaults["margin"]>;
        default: unknown extends Defaults["margin"] ? string | number : NonNullable<string | number> | Defaults["margin"];
    };
    loadMoreText: unknown extends Defaults["loadMoreText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["loadMoreText"] ? string : string | Defaults["loadMoreText"]>;
        default: unknown extends Defaults["loadMoreText"] ? string : string | Defaults["loadMoreText"];
    };
    emptyText: unknown extends Defaults["emptyText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["emptyText"] ? string : string | Defaults["emptyText"]>;
        default: unknown extends Defaults["emptyText"] ? string : string | Defaults["emptyText"];
    };
};
export declare const VInfiniteScrollIntersect: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        side: {
            type: PropType<InfiniteScrollSide>;
            required: true;
        };
        rootMargin: StringConstructor;
    }>> & {
        onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        intersect: (side: InfiniteScrollSide, isIntersecting: boolean) => true;
    }, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        side: {
            type: PropType<InfiniteScrollSide>;
            required: true;
        };
        rootMargin: StringConstructor;
    }>> & {
        onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}>> & {
    onIntersect?: ((side: InfiniteScrollSide, isIntersecting: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    intersect: (side: InfiniteScrollSide, isIntersecting: boolean) => true;
}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}, import("vue").ExtractPropTypes<{
    side: {
        type: PropType<InfiniteScrollSide>;
        required: true;
    };
    rootMargin: StringConstructor;
}>>;
export declare const VInfiniteScroll: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        direction: "horizontal" | "vertical";
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "manual" | "intersect";
        side: InfiniteScrollSide;
        loadMoreText: string;
        emptyText: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        margin?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            'load-more'?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            'load-more'?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        load: (options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        direction: "horizontal" | "vertical";
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "manual" | "intersect";
        side: InfiniteScrollSide;
        loadMoreText: string;
        emptyText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        loading: (arg: InfiniteScrollSlot) => import("vue").VNode[];
        error: (arg: InfiniteScrollSlot) => import("vue").VNode[];
        empty: (arg: InfiniteScrollSlot) => import("vue").VNode[];
        'load-more': (arg: InfiniteScrollSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        direction: "horizontal" | "vertical";
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "manual" | "intersect";
        side: InfiniteScrollSide;
        loadMoreText: string;
        emptyText: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        margin?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            'load-more'?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
            'load-more'?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onLoad?: ((options: {
            side: InfiniteScrollSide;
            done: (status: InfiniteScrollStatus) => void;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        direction: "horizontal" | "vertical";
        tag: string | import("../../util/index.js").JSXComponent;
        mode: "manual" | "intersect";
        side: InfiniteScrollSide;
        loadMoreText: string;
        emptyText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    direction: "horizontal" | "vertical";
    tag: string | import("../../util/index.js").JSXComponent;
    mode: "manual" | "intersect";
    side: InfiniteScrollSide;
    loadMoreText: string;
    emptyText: string;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    margin?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        loading?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        error?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        empty?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        'load-more'?: ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        loading?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        error?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        empty?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
        'load-more'?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loading"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:error"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:empty"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:load-more"?: false | ((arg: InfiniteScrollSlot) => import("vue").VNodeChild) | undefined;
} & {
    onLoad?: ((options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (options: {
        side: InfiniteScrollSide;
        done: (status: InfiniteScrollStatus) => void;
    }) => true;
}, string, {
    direction: "horizontal" | "vertical";
    tag: string | import("../../util/index.js").JSXComponent;
    mode: "manual" | "intersect";
    side: InfiniteScrollSide;
    loadMoreText: string;
    emptyText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    loading: (arg: InfiniteScrollSlot) => import("vue").VNode[];
    error: (arg: InfiniteScrollSlot) => import("vue").VNode[];
    empty: (arg: InfiniteScrollSlot) => import("vue").VNode[];
    'load-more': (arg: InfiniteScrollSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    direction: {
        type: PropType<"vertical" | "horizontal">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (StringConstructor | NumberConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    direction: {
        type: PropType<"vertical" | "horizontal">;
        default: string;
        validator: (v: any) => boolean;
    };
    side: {
        type: PropType<InfiniteScrollSide>;
        default: string;
        validator: (v: any) => boolean;
    };
    mode: {
        type: PropType<"intersect" | "manual">;
        default: string;
        validator: (v: any) => boolean;
    };
    margin: (StringConstructor | NumberConstructor)[];
    loadMoreText: {
        type: StringConstructor;
        default: string;
    };
    emptyText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VInfiniteScroll = InstanceType<typeof VInfiniteScroll>;

