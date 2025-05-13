import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
export declare const makeVDataTableFooterProps: <Defaults extends {
    prevIcon?: unknown;
    nextIcon?: unknown;
    firstIcon?: unknown;
    lastIcon?: unknown;
    itemsPerPageText?: unknown;
    pageText?: unknown;
    firstPageLabel?: unknown;
    prevPageLabel?: unknown;
    nextPageLabel?: unknown;
    lastPageLabel?: unknown;
    itemsPerPageOptions?: unknown;
    showCurrentPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prevIcon"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : NonNullable<IconValue> | Defaults["nextIcon"];
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["firstIcon"] ? IconValue : IconValue | Defaults["firstIcon"]>;
        default: unknown extends Defaults["firstIcon"] ? IconValue : NonNullable<IconValue> | Defaults["firstIcon"];
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["lastIcon"] ? IconValue : IconValue | Defaults["lastIcon"]>;
        default: unknown extends Defaults["lastIcon"] ? IconValue : NonNullable<IconValue> | Defaults["lastIcon"];
    };
    itemsPerPageText: unknown extends Defaults["itemsPerPageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"]>;
        default: unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"];
    };
    pageText: unknown extends Defaults["pageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"]>;
        default: unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"];
    };
    firstPageLabel: unknown extends Defaults["firstPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"]>;
        default: unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"];
    };
    prevPageLabel: unknown extends Defaults["prevPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"]>;
        default: unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"];
    };
    nextPageLabel: unknown extends Defaults["nextPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"]>;
        default: unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"];
    };
    lastPageLabel: unknown extends Defaults["lastPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"]>;
        default: unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"];
    };
    itemsPerPageOptions: unknown extends Defaults["itemsPerPageOptions"] ? {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    } : Omit<{
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"]>;
        default: unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
            title: string;
            value: number;
        })[] : readonly (number | {
            title: string;
            value: number;
        })[] | Defaults["itemsPerPageOptions"];
    };
    showCurrentPage: unknown extends Defaults["showCurrentPage"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"]>;
        default: unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"];
    };
};
export declare const VDataTableFooter: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        itemsPerPageText: string;
        pageText: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | import("vue").VNodeChild | {
            prepend?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    } & {} & {
        $children?: {} | import("vue").VNodeChild | {
            prepend?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        itemsPerPageText: string;
        pageText: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    itemsPerPageText: string;
    pageText: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
} & {} & {
    $children?: {} | import("vue").VNodeChild | {
        prepend?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    itemsPerPageText: string;
    pageText: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    firstIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    firstIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    itemsPerPageText: {
        type: StringConstructor;
        default: string;
    };
    pageText: {
        type: StringConstructor;
        default: string;
    };
    firstPageLabel: {
        type: StringConstructor;
        default: string;
    };
    prevPageLabel: {
        type: StringConstructor;
        default: string;
    };
    nextPageLabel: {
        type: StringConstructor;
        default: string;
    };
    lastPageLabel: {
        type: StringConstructor;
        default: string;
    };
    itemsPerPageOptions: {
        type: PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
}>>;
export type VDataTableFooter = InstanceType<typeof VDataTableFooter>;
