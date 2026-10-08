import type { PropType } from 'vue';
import type { Group } from './composables/group.js';
import type { CellProps, DataTableItem, GroupHeaderSlot, ItemSlot, RowProps } from './types.js';
import type { VDataTableGroupHeaderRowSlots } from './VDataTableGroupHeaderRow.js';
import type { VDataTableRowSlots } from './VDataTableRow.js';
import type { GenericProps } from "../../util/index.js";
export type VDataTableRowsSlots<T> = VDataTableGroupHeaderRowSlots & VDataTableRowSlots<T> & {
    item: ItemSlot<T> & {
        props: Record<string, any>;
    };
    loading: never;
    'group-header': GroupHeaderSlot;
    'no-data': never;
    'expanded-row': ItemSlot<T>;
};
export declare const makeVDataTableRowsProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    loading?: unknown;
    loadingText?: unknown;
    hideNoData?: unknown;
    items?: unknown;
    noDataText?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
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
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly (DataTableItem | Group)[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly (DataTableItem | Group)[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly (DataTableItem<any> | Group<any>)[] : readonly (DataTableItem<any> | Group<any>)[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly (DataTableItem<any> | Group<any>)[] : readonly (DataTableItem<any> | Group<any>)[] | Defaults["items"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    rowProps: unknown extends Defaults["rowProps"] ? PropType<RowProps<any>> : {
        type: PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : RowProps<any> | Defaults["rowProps"]>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : NonNullable<RowProps<any>> | Defaults["rowProps"];
    };
    cellProps: unknown extends Defaults["cellProps"] ? PropType<CellProps<any>> : {
        type: PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : CellProps<any> | Defaults["cellProps"]>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : NonNullable<CellProps<any>> | Defaults["cellProps"];
    };
};
export declare const VDataTableRows: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
        noDataText: string;
        loadingText: string;
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        cellProps?: CellProps<any> | undefined;
        rowProps?: RowProps<any> | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "items" | "v-slot:item" | "v-slot:no-data" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
        noDataText: string;
        loadingText: string;
        hideNoData: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<unknown>) => import("vue").VNode[];
        [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'data-table-group': (arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        'item.data-table-select': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
        'item.data-table-expand': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
        'header.data-table-select': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'header.data-table-expand': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        item: (arg: {
            index: number;
            item: unknown;
            internalItem: DataTableItem<unknown>;
            isExpanded: ReturnType<typeof import("./composables/expand.js").provideExpanded>["isExpanded"];
            toggleExpand: ReturnType<typeof import("./composables/expand.js").provideExpanded>["toggleExpand"];
            isSelected: ReturnType<typeof import("./composables/select.js").provideSelection>["isSelected"];
            toggleSelect: ReturnType<typeof import("./composables/select.js").provideSelection>["toggleSelect"];
        } & {
            columns: import("./types.js").InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        loading: () => import("vue").VNode[];
        'group-header': (arg: GroupHeaderSlot) => import("vue").VNode[];
        'no-data': () => import("vue").VNode[];
        'expanded-row': (arg: ItemSlot<unknown>) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        mobile: boolean | null;
        noDataText: string;
        loadingText: string;
        hideNoData: boolean;
    } & {
        loading?: string | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        cellProps?: CellProps<any> | undefined;
        rowProps?: RowProps<any> | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
        noDataText: string;
        loadingText: string;
        hideNoData: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
    noDataText: string;
    loadingText: string;
    hideNoData: boolean;
} & {
    loading?: string | boolean | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    cellProps?: CellProps<any> | undefined;
    rowProps?: RowProps<any> | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "items" | "v-slot:item" | "v-slot:no-data" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row">, string, {
    mobile: boolean | null;
    noDataText: string;
    loadingText: string;
    hideNoData: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<unknown>) => import("vue").VNode[];
    [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'data-table-group': (arg: {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    'item.data-table-select': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
    'item.data-table-expand': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
    'header.data-table-select': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'header.data-table-expand': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    item: (arg: {
        index: number;
        item: unknown;
        internalItem: DataTableItem<unknown>;
        isExpanded: ReturnType<typeof import("./composables/expand.js").provideExpanded>["isExpanded"];
        toggleExpand: ReturnType<typeof import("./composables/expand.js").provideExpanded>["toggleExpand"];
        isSelected: ReturnType<typeof import("./composables/select.js").provideSelection>["isSelected"];
        toggleSelect: ReturnType<typeof import("./composables/select.js").provideSelection>["toggleSelect"];
    } & {
        columns: import("./types.js").InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => import("vue").VNode[];
    loading: () => import("vue").VNode[];
    'group-header': (arg: GroupHeaderSlot) => import("vue").VNode[];
    'no-data': () => import("vue").VNode[];
    'expanded-row': (arg: ItemSlot<unknown>) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: readonly (DataTableItem<T> | Group<T>)[];
}, slots: VDataTableRowsSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem | Group)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}, import("vue").ExtractPropTypes<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<readonly (DataTableItem | Group)[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowProps: PropType<RowProps<any>>;
    cellProps: PropType<CellProps<any>>;
}>>;
export type VDataTableRows = InstanceType<typeof VDataTableRows>;
