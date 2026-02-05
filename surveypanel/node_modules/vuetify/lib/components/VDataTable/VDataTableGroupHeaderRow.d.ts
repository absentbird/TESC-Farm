import type { PropType } from 'vue';
import type { Group } from './composables/group.js';
export type VDataTableGroupHeaderRowSlots = {
    'data-table-group': {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    };
    'data-table-select': {
        props: Record<string, unknown>;
    };
};
export declare const makeVDataTableGroupHeaderRowProps: <Defaults extends {
    item?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    item: unknown extends Defaults["item"] ? {
        type: PropType<Group>;
        required: true;
    } : Omit<{
        type: PropType<Group>;
        required: true;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["item"] ? Group<any> : Group<any> | Defaults["item"]>;
        default: unknown extends Defaults["item"] ? Group<any> : Group<any> | Defaults["item"];
    };
};
export declare const VDataTableGroupHeaderRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        item: Group<any>;
    } & {} & {
        $children?: {} | import("vue").VNodeChild | {
            'data-table-group'?: ((arg: {
                item: Group;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'data-table-group'?: false | ((arg: {
                item: Group;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        'data-table-group': (arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        'data-table-select': (arg: {
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
        item: Group<any>;
    } & {} & {
        $children?: {} | import("vue").VNodeChild | {
            'data-table-group'?: ((arg: {
                item: Group;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'data-table-select'?: ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'data-table-group'?: false | ((arg: {
                item: Group;
                count: number;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            'data-table-select'?: false | ((arg: {
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:data-table-group"?: false | ((arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:data-table-select"?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    }, () => JSX.Element, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    item: Group<any>;
} & {} & {
    $children?: {} | import("vue").VNodeChild | {
        'data-table-group'?: ((arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        'data-table-select'?: ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        'data-table-group'?: false | ((arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        'data-table-select'?: false | ((arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:data-table-group"?: false | ((arg: {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:data-table-select"?: false | ((arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {}, {}, string, import("vue").SlotsType<Partial<{
    'data-table-group': (arg: {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    item: {
        type: PropType<Group>;
        required: true;
    };
}, import("vue").ExtractPropTypes<{
    item: {
        type: PropType<Group>;
        required: true;
    };
}>>;
