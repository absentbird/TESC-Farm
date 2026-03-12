import { provideExpanded } from './composables/expand.js';
import { provideGroupBy } from './composables/group.js';
import { providePagination } from './composables/paginate.js';
import { provideSelection } from './composables/select.js';
import { provideSort } from './composables/sort.js';
import type { DeepReadonly, UnwrapRef } from 'vue';
import type { Group } from './composables/group.js';
import type { CellProps, DataTableHeader, DataTableItem, InternalDataTableHeader, RowProps } from './types.js';
import type { VDataTableHeadersSlots } from './VDataTableHeaders.js';
import type { VDataTableRowsSlots } from './VDataTableRows.js';
import type { GenericProps, SelectItemKey } from "../../util/index.js";
export type VDataTableSlotProps<T> = {
    page: number;
    itemsPerPage: number;
    sortBy: UnwrapRef<ReturnType<typeof provideSort>['sortBy']>;
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    someSelected: boolean;
    allSelected: boolean;
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly T[];
    internalItems: readonly DataTableItem[];
    groupedItems: readonly (DataTableItem<T> | Group<DataTableItem<T>>)[];
    columns: InternalDataTableHeader[];
    headers: InternalDataTableHeader[][];
};
export type VDataTableSlots<T> = VDataTableRowsSlots<T> & VDataTableHeadersSlots & {
    default: VDataTableSlotProps<T>;
    colgroup: VDataTableSlotProps<T>;
    top: VDataTableSlotProps<T>;
    body: VDataTableSlotProps<T>;
    tbody: VDataTableSlotProps<T>;
    thead: VDataTableSlotProps<T>;
    tfoot: VDataTableSlotProps<T>;
    bottom: VDataTableSlotProps<T>;
    'body.prepend': VDataTableSlotProps<T>;
    'body.append': VDataTableSlotProps<T>;
    'footer.prepend': never;
};
export declare const makeDataTableProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    fixedHeader?: unknown;
    fixedFooter?: unknown;
    height?: unknown;
    hover?: unknown;
    loading?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    color?: unknown;
    disableSort?: unknown;
    multiSort?: unknown;
    sortAscIcon?: unknown;
    sortDescIcon?: unknown;
    headerProps?: unknown;
    sticky?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    mustSort?: unknown;
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
    returnObject?: unknown;
    headers?: unknown;
    groupBy?: unknown;
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
    hideDefaultBody?: unknown;
    hideDefaultFooter?: unknown;
    hideDefaultHeader?: unknown;
    width?: unknown;
    search?: unknown;
    loadingText?: unknown;
    hideNoData?: unknown;
    noDataText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
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
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    fixedFooter: unknown extends Defaults["fixedFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"]>;
        default: unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? import("vue").PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: import("vue").PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | import("../../types.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : NonNullable<number | import("../../types.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableSort: unknown extends Defaults["disableSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"]>;
        default: unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    sortAscIcon: unknown extends Defaults["sortAscIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["sortAscIcon"]>;
        default: unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["sortAscIcon"];
    };
    sortDescIcon: unknown extends Defaults["sortDescIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["sortDescIcon"]>;
        default: unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["sortDescIcon"];
    };
    headerProps: unknown extends Defaults["headerProps"] ? {
        type: import("vue").PropType<Record<string, any>>;
    } : Omit<{
        type: import("vue").PropType<Record<string, any>>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"]>;
        default: unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? import("vue").PropType<Record<string, import("./types.js").DataTableCompareFunction>> : {
        type: import("vue").PropType<unknown extends Defaults["customKeySort"] ? Record<string, import("./types.js").DataTableCompareFunction> : Record<string, import("./types.js").DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, import("./types.js").DataTableCompareFunction> : Record<string, import("./types.js").DataTableCompareFunction> | Defaults["customKeySort"];
    };
    mustSort: unknown extends Defaults["mustSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"]>;
        default: unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"];
    };
    showSelect: unknown extends Defaults["showSelect"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"]>;
        default: unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : "all" | "page" | "single" | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : NonNullable<"all" | "page" | "single"> | Defaults["selectStrategy"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    } : Omit<{
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemValue"];
    };
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemSelectable"] ? SelectItemKey : SelectItemKey | Defaults["itemSelectable"]>;
        default: unknown extends Defaults["itemSelectable"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemSelectable"];
    };
    rowProps: unknown extends Defaults["rowProps"] ? import("vue").PropType<RowProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : RowProps<any> | Defaults["rowProps"]>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : NonNullable<RowProps<any>> | Defaults["rowProps"];
    };
    cellProps: unknown extends Defaults["cellProps"] ? import("vue").PropType<CellProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : CellProps<any> | Defaults["cellProps"]>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : NonNullable<CellProps<any>> | Defaults["cellProps"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    headers: unknown extends Defaults["headers"] ? import("vue").PropType<readonly {
        readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: ("start" | "end" | "center") | undefined;
        readonly width?: (number | string) | undefined;
        readonly minWidth?: (number | string) | undefined;
        readonly maxWidth?: (number | string) | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
        readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
        readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]> : {
        type: import("vue").PropType<unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"]>;
        default: unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"];
    };
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["groupBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["groupBy"];
    };
    expandOnClick: unknown extends Defaults["expandOnClick"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"]>;
        default: unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"];
    };
    showExpand: unknown extends Defaults["showExpand"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"]>;
        default: unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"];
    };
    expanded: unknown extends Defaults["expanded"] ? {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"]>;
        default: unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"];
    };
    hideDefaultBody: unknown extends Defaults["hideDefaultBody"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"]>;
        default: unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"];
    };
    hideDefaultFooter: unknown extends Defaults["hideDefaultFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"]>;
        default: unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"];
    };
    hideDefaultHeader: unknown extends Defaults["hideDefaultHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"]>;
        default: unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
};
export declare const makeVDataTableProps: <Defaults extends {
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
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    theme?: unknown;
    tag?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    fixedHeader?: unknown;
    fixedFooter?: unknown;
    height?: unknown;
    hover?: unknown;
    loading?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    color?: unknown;
    disableSort?: unknown;
    multiSort?: unknown;
    sortAscIcon?: unknown;
    sortDescIcon?: unknown;
    headerProps?: unknown;
    sticky?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    mustSort?: unknown;
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    rowProps?: unknown;
    cellProps?: unknown;
    returnObject?: unknown;
    headers?: unknown;
    groupBy?: unknown;
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
    hideDefaultBody?: unknown;
    hideDefaultFooter?: unknown;
    hideDefaultHeader?: unknown;
    width?: unknown;
    search?: unknown;
    loadingText?: unknown;
    hideNoData?: unknown;
    noDataText?: unknown;
    page?: unknown;
    itemsPerPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prevIcon"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["nextIcon"];
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["firstIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["firstIcon"]>;
        default: unknown extends Defaults["firstIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["firstIcon"];
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lastIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["lastIcon"]>;
        default: unknown extends Defaults["lastIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["lastIcon"];
    };
    itemsPerPageText: unknown extends Defaults["itemsPerPageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"]>;
        default: unknown extends Defaults["itemsPerPageText"] ? string : string | Defaults["itemsPerPageText"];
    };
    pageText: unknown extends Defaults["pageText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"]>;
        default: unknown extends Defaults["pageText"] ? string : string | Defaults["pageText"];
    };
    firstPageLabel: unknown extends Defaults["firstPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"]>;
        default: unknown extends Defaults["firstPageLabel"] ? string : string | Defaults["firstPageLabel"];
    };
    prevPageLabel: unknown extends Defaults["prevPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"]>;
        default: unknown extends Defaults["prevPageLabel"] ? string : string | Defaults["prevPageLabel"];
    };
    nextPageLabel: unknown extends Defaults["nextPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"]>;
        default: unknown extends Defaults["nextPageLabel"] ? string : string | Defaults["nextPageLabel"];
    };
    lastPageLabel: unknown extends Defaults["lastPageLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"]>;
        default: unknown extends Defaults["lastPageLabel"] ? string : string | Defaults["lastPageLabel"];
    };
    itemsPerPageOptions: unknown extends Defaults["itemsPerPageOptions"] ? {
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    } : Omit<{
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPageOptions"] ? readonly (number | {
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
        type: import("vue").PropType<unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"]>;
        default: unknown extends Defaults["showCurrentPage"] ? boolean : boolean | Defaults["showCurrentPage"];
    };
    customFilter: unknown extends Defaults["customFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterFunction> : {
        type: import("vue").PropType<unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: import("vue").PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeys> : {
        type: import("vue").PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : import("../../composables/filter.js").FilterKeys | Defaults["filterKeys"]>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : NonNullable<import("../../composables/filter.js").FilterKeys> | Defaults["filterKeys"];
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : import("../../composables/filter.js").FilterMode | Defaults["filterMode"]>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : NonNullable<import("../../composables/filter.js").FilterMode> | Defaults["filterMode"];
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
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
    fixedHeader: unknown extends Defaults["fixedHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"]>;
        default: unknown extends Defaults["fixedHeader"] ? boolean : boolean | Defaults["fixedHeader"];
    };
    fixedFooter: unknown extends Defaults["fixedFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"]>;
        default: unknown extends Defaults["fixedFooter"] ? boolean : boolean | Defaults["fixedFooter"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? import("vue").PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: import("vue").PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | import("../../types.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : NonNullable<number | import("../../types.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disableSort: unknown extends Defaults["disableSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"]>;
        default: unknown extends Defaults["disableSort"] ? boolean : boolean | Defaults["disableSort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
    };
    sortAscIcon: unknown extends Defaults["sortAscIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["sortAscIcon"]>;
        default: unknown extends Defaults["sortAscIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["sortAscIcon"];
    };
    sortDescIcon: unknown extends Defaults["sortDescIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["sortDescIcon"]>;
        default: unknown extends Defaults["sortDescIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["sortDescIcon"];
    };
    headerProps: unknown extends Defaults["headerProps"] ? {
        type: import("vue").PropType<Record<string, any>>;
    } : Omit<{
        type: import("vue").PropType<Record<string, any>>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"]>;
        default: unknown extends Defaults["headerProps"] ? Record<string, any> : Record<string, any> | Defaults["headerProps"];
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? import("vue").PropType<Record<string, import("./types.js").DataTableCompareFunction>> : {
        type: import("vue").PropType<unknown extends Defaults["customKeySort"] ? Record<string, import("./types.js").DataTableCompareFunction> : Record<string, import("./types.js").DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, import("./types.js").DataTableCompareFunction> : Record<string, import("./types.js").DataTableCompareFunction> | Defaults["customKeySort"];
    };
    mustSort: unknown extends Defaults["mustSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"]>;
        default: unknown extends Defaults["mustSort"] ? boolean : boolean | Defaults["mustSort"];
    };
    showSelect: unknown extends Defaults["showSelect"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"]>;
        default: unknown extends Defaults["showSelect"] ? boolean : boolean | Defaults["showSelect"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : "all" | "page" | "single" | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? "all" | "page" | "single" : NonNullable<"all" | "page" | "single"> | Defaults["selectStrategy"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly any[] : readonly any[] | Defaults["modelValue"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    } : Omit<{
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemValue"];
    };
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemSelectable"] ? SelectItemKey : SelectItemKey | Defaults["itemSelectable"]>;
        default: unknown extends Defaults["itemSelectable"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemSelectable"];
    };
    rowProps: unknown extends Defaults["rowProps"] ? import("vue").PropType<RowProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["rowProps"] ? RowProps<any> : RowProps<any> | Defaults["rowProps"]>;
        default: unknown extends Defaults["rowProps"] ? RowProps<any> : NonNullable<RowProps<any>> | Defaults["rowProps"];
    };
    cellProps: unknown extends Defaults["cellProps"] ? import("vue").PropType<CellProps<any>> : {
        type: import("vue").PropType<unknown extends Defaults["cellProps"] ? CellProps<any> : CellProps<any> | Defaults["cellProps"]>;
        default: unknown extends Defaults["cellProps"] ? CellProps<any> : NonNullable<CellProps<any>> | Defaults["cellProps"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    headers: unknown extends Defaults["headers"] ? import("vue").PropType<readonly {
        readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
        readonly value?: SelectItemKey<Record<string, any>>;
        readonly title?: string | undefined;
        readonly fixed?: boolean | undefined;
        readonly align?: ("start" | "end" | "center") | undefined;
        readonly width?: (number | string) | undefined;
        readonly minWidth?: (number | string) | undefined;
        readonly maxWidth?: (number | string) | undefined;
        readonly nowrap?: boolean | undefined;
        readonly headerProps?: {
            readonly [x: string]: any;
        } | undefined;
        readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
        readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
        readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]> : {
        type: import("vue").PropType<unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"]>;
        default: unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: SelectItemKey<Record<string, any>>;
            readonly title?: string | undefined;
            readonly fixed?: boolean | undefined;
            readonly align?: ("start" | "end" | "center") | undefined;
            readonly width?: (number | string) | undefined;
            readonly minWidth?: (number | string) | undefined;
            readonly maxWidth?: (number | string) | undefined;
            readonly nowrap?: boolean | undefined;
            readonly headerProps?: {
                readonly [x: string]: any;
            } | undefined;
            readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
            readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
            readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: SelectItemKey<Record<string, any>>;
                readonly title?: string | undefined;
                readonly fixed?: boolean | undefined;
                readonly align?: ("start" | "end" | "center") | undefined;
                readonly width?: (number | string) | undefined;
                readonly minWidth?: (number | string) | undefined;
                readonly maxWidth?: (number | string) | undefined;
                readonly nowrap?: boolean | undefined;
                readonly headerProps?: {
                    readonly [x: string]: any;
                } | undefined;
                readonly cellProps?: import("./types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: import("./types.js").DataTableCompareFunction | undefined;
                readonly sortRaw?: import("./types.js").DataTableCompareFunction | undefined;
                readonly filter?: import("../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"];
    };
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["groupBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly import("./composables/sort.js").SortItem[] : readonly import("./composables/sort.js").SortItem[] | Defaults["groupBy"];
    };
    expandOnClick: unknown extends Defaults["expandOnClick"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"]>;
        default: unknown extends Defaults["expandOnClick"] ? boolean : boolean | Defaults["expandOnClick"];
    };
    showExpand: unknown extends Defaults["showExpand"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"]>;
        default: unknown extends Defaults["showExpand"] ? boolean : boolean | Defaults["showExpand"];
    };
    expanded: unknown extends Defaults["expanded"] ? {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"]>;
        default: unknown extends Defaults["expanded"] ? readonly string[] : readonly string[] | Defaults["expanded"];
    };
    hideDefaultBody: unknown extends Defaults["hideDefaultBody"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"]>;
        default: unknown extends Defaults["hideDefaultBody"] ? boolean : boolean | Defaults["hideDefaultBody"];
    };
    hideDefaultFooter: unknown extends Defaults["hideDefaultFooter"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"]>;
        default: unknown extends Defaults["hideDefaultFooter"] ? boolean : boolean | Defaults["hideDefaultFooter"];
    };
    hideDefaultHeader: unknown extends Defaults["hideDefaultHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"]>;
        default: unknown extends Defaults["hideDefaultHeader"] ? boolean : boolean | Defaults["hideDefaultHeader"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    loadingText: unknown extends Defaults["loadingText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"]>;
        default: unknown extends Defaults["loadingText"] ? string : string | Defaults["loadingText"];
    };
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    page: unknown extends Defaults["page"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["page"] ? string | number : string | number | Defaults["page"]>;
        default: unknown extends Defaults["page"] ? string | number : NonNullable<string | number> | Defaults["page"];
    };
    itemsPerPage: unknown extends Defaults["itemsPerPage"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPage"] ? string | number : string | number | Defaults["itemsPerPage"]>;
        default: unknown extends Defaults["itemsPerPage"] ? string | number : NonNullable<string | number> | Defaults["itemsPerPage"];
    };
};
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
export declare const VDataTable: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        page: string | number;
        expanded: readonly string[];
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly import("./composables/sort.js").SortItem[];
        pageText: string;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly import("./composables/sort.js").SortItem[];
        disableSort: boolean;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        hideNoData: boolean;
        hover: boolean;
        itemsPerPage: string | number;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        fixedHeader: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("./types.js").DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any[]) => true;
        'update:page': (value: number) => true;
        'update:itemsPerPage': (value: number) => true;
        'update:sortBy': (value: any) => true;
        'update:options': (value: any) => true;
        'update:groupBy': (value: any) => true;
        'update:expanded': (value: any) => true;
        'update:currentItems': (value: any) => true;
    }, "headers" | "$children" | "v-slots" | "v-slot:default" | "modelValue" | "cellProps" | "items" | "itemValue" | "itemSelectable" | "rowProps" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "v-slot:no-data" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        page: string | number;
        expanded: readonly string[];
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly import("./composables/sort.js").SortItem[];
        pageText: string;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly import("./composables/sort.js").SortItem[];
        disableSort: boolean;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        hideNoData: boolean;
        hover: boolean;
        itemsPerPage: string | number;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        fixedHeader: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<any>) => import("vue").VNode[];
        [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'data-table-group': (arg: {
            item: Group;
            count: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        'data-table-select': (arg: {
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        'item.data-table-select': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode[];
        'item.data-table-expand': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode[];
        'header.data-table-select': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        'header.data-table-expand': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
        item: (arg: {
            index: number;
            item: any;
            internalItem: DataTableItem<any>;
            isExpanded: ReturnType<typeof provideExpanded>["isExpanded"];
            toggleExpand: ReturnType<typeof provideExpanded>["toggleExpand"];
            isSelected: ReturnType<typeof provideSelection>["isSelected"];
            toggleSelect: ReturnType<typeof provideSelection>["toggleSelect"];
        } & {
            columns: InternalDataTableHeader[];
        } & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        loading: () => import("vue").VNode[];
        'group-header': (arg: import("./types.js").GroupHeaderSlot) => import("vue").VNode[];
        'no-data': () => import("vue").VNode[];
        'expanded-row': (arg: import("./types.js").ItemSlot<any>) => import("vue").VNode[];
        headers: (arg: import("./VDataTableHeaders.js").HeadersSlotProps) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        default: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        colgroup: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        top: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        body: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        tbody: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        thead: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        tfoot: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        bottom: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        'body.prepend': (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        'body.append': (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
        'footer.prepend': () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        page: string | number;
        expanded: readonly string[];
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly import("./composables/sort.js").SortItem[];
        pageText: string;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly import("./composables/sort.js").SortItem[];
        disableSort: boolean;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        hideNoData: boolean;
        hover: boolean;
        itemsPerPage: string | number;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        fixedHeader: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    } & {
        search?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("./types.js").DataTableCompareFunction> | undefined;
        headerProps?: Record<string, any> | undefined;
    } & {
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        page: string | number;
        expanded: readonly string[];
        style: import("vue").StyleValue;
        mobile: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        noDataText: string;
        loadingText: string;
        itemsPerPageText: string;
        sortBy: readonly import("./composables/sort.js").SortItem[];
        pageText: string;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly import("./composables/sort.js").SortItem[];
        disableSort: boolean;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        hideNoData: boolean;
        hover: boolean;
        itemsPerPage: string | number;
        firstIcon: import("../../composables/icons.js").IconValue;
        lastIcon: import("../../composables/icons.js").IconValue;
        firstPageLabel: string;
        prevPageLabel: string;
        nextPageLabel: string;
        lastPageLabel: string;
        itemsPerPageOptions: readonly (number | {
            title: string;
            value: number;
        })[];
        showCurrentPage: boolean;
        fixedHeader: boolean;
        sortAscIcon: import("../../composables/icons.js").IconValue;
        sortDescIcon: import("../../composables/icons.js").IconValue;
        fixedFooter: boolean;
        hideDefaultBody: boolean;
        hideDefaultFooter: boolean;
        hideDefaultHeader: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    page: string | number;
    expanded: readonly string[];
    style: import("vue").StyleValue;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly import("./composables/sort.js").SortItem[];
    pageText: string;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly import("./composables/sort.js").SortItem[];
    disableSort: boolean;
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    hideNoData: boolean;
    hover: boolean;
    itemsPerPage: string | number;
    firstIcon: import("../../composables/icons.js").IconValue;
    lastIcon: import("../../composables/icons.js").IconValue;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    fixedHeader: boolean;
    sortAscIcon: import("../../composables/icons.js").IconValue;
    sortDescIcon: import("../../composables/icons.js").IconValue;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
} & {
    search?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
    customKeySort?: Record<string, import("./types.js").DataTableCompareFunction> | undefined;
    headerProps?: Record<string, any> | undefined;
} & {
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:currentItems"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any[]) => true;
    'update:page': (value: number) => true;
    'update:itemsPerPage': (value: number) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:groupBy': (value: any) => true;
    'update:expanded': (value: any) => true;
    'update:currentItems': (value: any) => true;
}, "headers" | "$children" | "v-slots" | "v-slot:default" | "modelValue" | "cellProps" | "items" | "itemValue" | "itemSelectable" | "rowProps" | "update:modelValue" | "v-slot:loader" | "v-slot:item" | "v-slot:no-data" | "v-slot:headers" | `v-slot:header.${string}` | "v-slot:data-table-group" | "v-slot:data-table-select" | `v-slot:item.${string}` | "v-slot:loading" | "v-slot:group-header" | "v-slot:expanded-row" | "v-slot:top" | "v-slot:bottom" | "v-slot:body" | "v-slot:colgroup" | "v-slot:tbody" | "v-slot:tfoot" | "v-slot:thead" | "v-slot:body.prepend" | "v-slot:body.append" | "v-slot:footer.prepend">, string, {
    page: string | number;
    expanded: readonly string[];
    style: import("vue").StyleValue;
    mobile: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
    noDataText: string;
    loadingText: string;
    itemsPerPageText: string;
    sortBy: readonly import("./composables/sort.js").SortItem[];
    pageText: string;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly import("./composables/sort.js").SortItem[];
    disableSort: boolean;
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    hideNoData: boolean;
    hover: boolean;
    itemsPerPage: string | number;
    firstIcon: import("../../composables/icons.js").IconValue;
    lastIcon: import("../../composables/icons.js").IconValue;
    firstPageLabel: string;
    prevPageLabel: string;
    nextPageLabel: string;
    lastPageLabel: string;
    itemsPerPageOptions: readonly (number | {
        title: string;
        value: number;
    })[];
    showCurrentPage: boolean;
    fixedHeader: boolean;
    sortAscIcon: import("../../composables/icons.js").IconValue;
    sortDescIcon: import("../../composables/icons.js").IconValue;
    fixedFooter: boolean;
    hideDefaultBody: boolean;
    hideDefaultFooter: boolean;
    hideDefaultHeader: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `item.${string}`]: (arg: import("./types.js").ItemKeySlot<any>) => import("vue").VNode[];
    [x: `header.${string}`]: (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'data-table-group': (arg: {
        item: Group;
        count: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    'data-table-select': (arg: {
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    'item.data-table-select': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode[];
    'item.data-table-expand': (arg: import("./VDataTableRow.js").VDataTableItemCellColumnSlotProps<any>) => import("vue").VNode[];
    'header.data-table-select': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    'header.data-table-expand': (arg: import("./VDataTableHeaders.js").VDataTableHeaderCellColumnSlotProps) => import("vue").VNode[];
    item: (arg: {
        index: number;
        item: any;
        internalItem: DataTableItem<any>;
        isExpanded: ReturnType<typeof provideExpanded>["isExpanded"];
        toggleExpand: ReturnType<typeof provideExpanded>["toggleExpand"];
        isSelected: ReturnType<typeof provideSelection>["isSelected"];
        toggleSelect: ReturnType<typeof provideSelection>["toggleSelect"];
    } & {
        columns: InternalDataTableHeader[];
    } & {
        props: Record<string, any>;
    }) => import("vue").VNode[];
    loading: () => import("vue").VNode[];
    'group-header': (arg: import("./types.js").GroupHeaderSlot) => import("vue").VNode[];
    'no-data': () => import("vue").VNode[];
    'expanded-row': (arg: import("./types.js").ItemSlot<any>) => import("vue").VNode[];
    headers: (arg: import("./VDataTableHeaders.js").HeadersSlotProps) => import("vue").VNode[];
    loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
    default: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    colgroup: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    top: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    body: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    tbody: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    thead: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    tfoot: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    bottom: (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    'body.prepend': (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    'body.append': (arg: VDataTableSlotProps<any>) => import("vue").VNode[];
    'footer.prepend': () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly any[], V>(props: {
    items?: T;
    itemValue?: SelectItemKey<ItemType<T>>;
    rowProps?: RowProps<ItemType<T>>;
    cellProps?: CellProps<ItemType<T>>;
    itemSelectable?: SelectItemKey<ItemType<T>>;
    headers?: DeepReadonly<DataTableHeader<ItemType<T>>[]>;
    modelValue?: V;
    "onUpdate:modelValue"?: (value: V) => void;
}, slots: VDataTableSlots<ItemType<T>>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    firstIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
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
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    headerProps: {
        type: import("vue").PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
    sortBy: {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("./types.js").DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    items: {
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    rowProps: import("vue").PropType<RowProps<any>>;
    cellProps: import("vue").PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: import("vue").PropType<DeepReadonly<DataTableHeader[]>>;
    groupBy: {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    prevIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    firstIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
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
        type: import("vue").PropType<readonly (number | {
            title: string;
            value: number;
        })[]>;
        default: () => {
            value: number;
            title: string;
        }[];
    };
    showCurrentPage: BooleanConstructor;
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    hover: BooleanConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    color: StringConstructor;
    disableSort: BooleanConstructor;
    multiSort: BooleanConstructor;
    sortAscIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    sortDescIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    headerProps: {
        type: import("vue").PropType<Record<string, any>>;
    };
    sticky: BooleanConstructor;
    sortBy: {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("./types.js").DataTableCompareFunction>>;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<"single" | "page" | "all">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<readonly any[]>;
        default: () => never[];
    };
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    items: {
        type: import("vue").PropType<import("./composables/items.js").DataTableItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<SelectItemKey>;
        default: null;
    };
    rowProps: import("vue").PropType<RowProps<any>>;
    cellProps: import("vue").PropType<CellProps<any>>;
    returnObject: BooleanConstructor;
    headers: import("vue").PropType<DeepReadonly<DataTableHeader[]>>;
    groupBy: {
        type: import("vue").PropType<readonly import("./composables/sort.js").SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    hideDefaultBody: BooleanConstructor;
    hideDefaultFooter: BooleanConstructor;
    hideDefaultHeader: BooleanConstructor;
    width: (StringConstructor | NumberConstructor)[];
    search: StringConstructor;
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
export type VDataTable = InstanceType<typeof VDataTable>;

