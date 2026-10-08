import type { PropType } from 'vue';
import type { CellProps, DataTableItem, ItemKeySlot } from './types.js';
import type { VDataTableHeaderCellColumnSlotProps } from './VDataTableHeaders.js';
import type { GenericProps } from "../../util/index.js";
export type VDataTableItemCellColumnSlotProps<T> = Omit<ItemKeySlot<T>, 'value'> & {
    props: Record<string, unknown>;
};
export type VDataTableRowSlots<T> = {
    'item.data-table-select': VDataTableItemCellColumnSlotProps<T>;
    'item.data-table-expand': VDataTableItemCellColumnSlotProps<T>;
    'header.data-table-select': VDataTableHeaderCellColumnSlotProps;
    'header.data-table-expand': VDataTableHeaderCellColumnSlotProps;
} & {
    [key: `item.${string}`]: ItemKeySlot<T>;
    [key: `header.${string}`]: VDataTableHeaderCellColumnSlotProps;
};
export declare const makeVDataTableRowProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    index?: unknown;
    item?: unknown;
    cellProps?: unknown;
    onClick?: unknown;
    onContextmenu?: unknown;
    onDblclick?: unknown;
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
    index: unknown extends Defaults["index"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["index"] ? number : number | Defaults["index"]>;
        default: unknown extends Defaults["index"] ? number : number | Defaults["index"];
    };
    item: unknown extends Defaults["item"] ? PropType<DataTableItem<any>> : {
        type: PropType<unknown extends Defaults["item"] ? DataTableItem<any> : DataTableItem<any> | Defaults["item"]>;
        default: unknown extends Defaults["item"] ? DataTableItem<any> : DataTableItem<any> | Defaults["item"];
    };
    cellProps: unknown extends Defaults["cellProps"] ? PropType<CellProps<any>> : {
        type: PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : CellProps<any> | Defaults["cellProps"]>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : NonNullable<CellProps<any>> | Defaults["cellProps"];
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"];
    };
    onContextmenu: unknown extends Defaults["onContextmenu"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onContextmenu"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onContextmenu"]>;
        default: unknown extends Defaults["onContextmenu"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onContextmenu"];
    };
    onDblclick: unknown extends Defaults["onDblclick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onDblclick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onDblclick"]>;
        default: unknown extends Defaults["onDblclick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onDblclick"];
    };
};
export declare const VDataTableRow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        mobile: boolean | null;
    } & {
        index?: number | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "item" | "$children" | "v-slots" | "cellProps" | `v-slot:header.${string}` | `v-slot:item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        mobile: boolean | null;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => import("vue").VNode[];
        [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'item.data-table-select': (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
        'item.data-table-expand': (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
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
    } & {
        index?: number | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
        onDblclick?: ((args_0: MouseEvent) => void) | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    }, {}, {}, {}, {}, {
        mobile: boolean | null;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    mobile: boolean | null;
} & {
    index?: number | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onContextmenu?: ((args_0: MouseEvent) => void) | undefined;
    onDblclick?: ((args_0: MouseEvent) => void) | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "item" | "$children" | "v-slots" | "cellProps" | `v-slot:header.${string}` | `v-slot:item.${string}`>, string, {
    mobile: boolean | null;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: ItemKeySlot<unknown>) => import("vue").VNode[];
    [x: `header.${string}`]: (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'item.data-table-select': (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
    'item.data-table-expand': (arg: VDataTableItemCellColumnSlotProps<unknown>) => import("vue").VNode[];
    'header.data-table-select': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'header.data-table-expand': (arg: VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    item?: DataTableItem<T>;
    cellProps?: CellProps<T>;
}, slots: VDataTableRowSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    index: NumberConstructor;
    item: PropType<DataTableItem>;
    cellProps: PropType<CellProps<any>>;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    index: NumberConstructor;
    item: PropType<DataTableItem>;
    cellProps: PropType<CellProps<any>>;
    onClick: PropType<(args_0: MouseEvent) => void>;
    onContextmenu: PropType<(args_0: MouseEvent) => void>;
    onDblclick: PropType<(args_0: MouseEvent) => void>;
}>>;
export type VDataTableRow = InstanceType<typeof VDataTableRow>;
