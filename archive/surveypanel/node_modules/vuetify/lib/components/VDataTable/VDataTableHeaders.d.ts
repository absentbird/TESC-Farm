import { IconValue } from "../../composables/icons.js";
import type { PropType, UnwrapRef } from 'vue';
import type { provideSelection } from './composables/select.js';
import type { provideSort } from './composables/sort.js';
import type { InternalDataTableHeader } from './types.js';
import type { LoaderSlotProps } from "../../composables/loader.js";
export type HeadersSlotProps = {
    headers: InternalDataTableHeader[][];
    columns: InternalDataTableHeader[];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
    isSorted: ReturnType<typeof provideSort>['isSorted'];
};
export type VDataTableHeaderCellColumnSlotProps = {
    column: InternalDataTableHeader;
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    isSorted: ReturnType<typeof provideSort>['isSorted'];
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    someSelected: UnwrapRef<ReturnType<typeof provideSelection>['someSelected']>;
    allSelected: UnwrapRef<ReturnType<typeof provideSelection>['allSelected']>;
    getSortIcon: (column: InternalDataTableHeader) => IconValue;
};
export type VDataTableHeadersSlots = {
    headers: HeadersSlotProps;
    loader: LoaderSlotProps;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
export declare const makeVDataTableHeadersProps: <Defaults extends {
    loading?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    color?: unknown;
    disableSort?: unknown;
    fixedHeader?: unknown;
    multiSort?: unknown;
    sortAscIcon?: unknown;
    sortDescIcon?: unknown;
    headerProps?: unknown;
    sticky?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../composables/display.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : number | import("../../composables/display.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : NonNullable<number | import("../../composables/display.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableSort: unknown extends Defaults["disableSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"]>;
        default: unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"];
    };
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    sortAscIcon: unknown extends Defaults["sortAscIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["sortAscIcon"] ? IconValue : IconValue | Defaults["sortAscIcon"]>;
        default: unknown extends Defaults["sortAscIcon"] ? IconValue : NonNullable<IconValue> | Defaults["sortAscIcon"];
    };
    sortDescIcon: unknown extends Defaults["sortDescIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["sortDescIcon"] ? IconValue : IconValue | Defaults["sortDescIcon"]>;
        default: unknown extends Defaults["sortDescIcon"] ? IconValue : NonNullable<IconValue> | Defaults["sortDescIcon"];
    };
    headerProps: unknown extends Defaults["headerProps"] ? {
        type: PropType<Record<string, any>>;
    } : Omit<{
        type: PropType<Record<string, any>>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"]>;
        default: unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
};
export declare const VDataTableHeaders: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        fixedHeader: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        fixedHeader: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        headers: (arg: HeadersSlotProps) => import("vue").VNode[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode[];
        'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        fixedHeader: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    } & {
        color?: string | undefined;
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
            'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        sticky: boolean;
        multiSort: boolean;
        disableSort: boolean;
        fixedHeader: boolean;
        sortAscIcon: IconValue;
        sortDescIcon: IconValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
    sticky: boolean;
    multiSort: boolean;
    disableSort: boolean;
    fixedHeader: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
} & {
    color?: string | undefined;
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    headerProps?: Record<string, any> | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        [x: `header.${string}`]: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        headers?: ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'header.data-table-select'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        'header.data-table-expand'?: ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        [x: `header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        headers?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'header.data-table-select'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
        'header.data-table-expand'?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header.${string}`]: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:headers"?: false | ((arg: HeadersSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:header.data-table-select"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:header.data-table-expand"?: false | ((arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    mobile: boolean | null;
    sticky: boolean;
    multiSort: boolean;
    disableSort: boolean;
    fixedHeader: boolean;
    sortAscIcon: IconValue;
    sortDescIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    headers: (arg: HeadersSlotProps) => import("vue").VNode[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    fixedHeader: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    fixedHeader: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    headerProps: {
        type: PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
}>>;
export type VDataTableHeaders = InstanceType<typeof VDataTableHeaders>;
