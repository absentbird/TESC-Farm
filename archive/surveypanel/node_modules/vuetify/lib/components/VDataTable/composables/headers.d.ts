import type { DeepReadonly, InjectionKey, PropType, Ref } from 'vue';
import type { SortItem } from './sort.js';
import type { DataTableCompareFunction, DataTableHeader, InternalDataTableHeader } from '../types.js';
import type { FilterKeyFunctions } from "../../../composables/filter.js";
export declare const makeDataTableHeaderProps: <Defaults extends {
    headers?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    headers: unknown extends Defaults["headers"] ? PropType<readonly {
        readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
        readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
        readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
            readonly [x: string]: any;
        } | undefined;
        readonly sortable?: boolean | undefined;
        readonly sort?: DataTableCompareFunction | undefined;
        readonly sortRaw?: DataTableCompareFunction | undefined;
        readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
        readonly children?: readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
            readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction | undefined;
            readonly sortRaw?: DataTableCompareFunction | undefined;
            readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly any[] | undefined;
        }[] | undefined;
    }[]> : {
        type: PropType<unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
            readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction | undefined;
            readonly sortRaw?: DataTableCompareFunction | undefined;
            readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
                readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction | undefined;
                readonly sortRaw?: DataTableCompareFunction | undefined;
                readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
            readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction | undefined;
            readonly sortRaw?: DataTableCompareFunction | undefined;
            readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
                readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction | undefined;
                readonly sortRaw?: DataTableCompareFunction | undefined;
                readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"]>;
        default: unknown extends Defaults["headers"] ? readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
            readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction | undefined;
            readonly sortRaw?: DataTableCompareFunction | undefined;
            readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
                readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction | undefined;
                readonly sortRaw?: DataTableCompareFunction | undefined;
                readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] : readonly {
            readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
            readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
            readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                readonly [x: string]: any;
            } | undefined;
            readonly sortable?: boolean | undefined;
            readonly sort?: DataTableCompareFunction | undefined;
            readonly sortRaw?: DataTableCompareFunction | undefined;
            readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
            readonly children?: readonly {
                readonly key?: ("data-table-group" | "data-table-select" | "data-table-expand" | (string & {})) | undefined;
                readonly value?: import("../../../util/index.js").SelectItemKey<Record<string, any>>;
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
                readonly cellProps?: import("../types.js").HeaderCellPropsFunction | {
                    readonly [x: string]: any;
                } | undefined;
                readonly sortable?: boolean | undefined;
                readonly sort?: DataTableCompareFunction | undefined;
                readonly sortRaw?: DataTableCompareFunction | undefined;
                readonly filter?: import("../../../composables/filter.js").FilterFunction | undefined;
                readonly children?: readonly any[] | undefined;
            }[] | undefined;
        }[] | Defaults["headers"];
    };
};
export declare const VDataTableHeadersSymbol: InjectionKey<{
    headers: Ref<InternalDataTableHeader[][]>;
    columns: Ref<InternalDataTableHeader[]>;
}>;
type HeaderProps = {
    headers: DeepReadonly<DataTableHeader[]> | undefined;
    items: any[];
};
export declare function createHeaders(props: HeaderProps, options?: {
    groupBy?: Ref<readonly SortItem[]>;
    showSelect?: Ref<boolean>;
    showExpand?: Ref<boolean>;
}): {
    headers: Ref<{
        fixed?: boolean | undefined;
        filter?: import("../../../composables/filter.js").FilterFunction | undefined;
        sort?: DataTableCompareFunction | undefined;
        width?: (number | string) | undefined;
        maxWidth?: (number | string) | undefined;
        minWidth?: (number | string) | undefined;
        title?: string | undefined;
        nowrap?: boolean | undefined;
        align?: ("start" | "end" | "center") | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sortRaw?: DataTableCompareFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey | null;
        fixedOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[][], InternalDataTableHeader[][] | {
        fixed?: boolean | undefined;
        filter?: import("../../../composables/filter.js").FilterFunction | undefined;
        sort?: DataTableCompareFunction | undefined;
        width?: (number | string) | undefined;
        maxWidth?: (number | string) | undefined;
        minWidth?: (number | string) | undefined;
        title?: string | undefined;
        nowrap?: boolean | undefined;
        align?: ("start" | "end" | "center") | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sortRaw?: DataTableCompareFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey | null;
        fixedOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[][]>;
    columns: Ref<{
        fixed?: boolean | undefined;
        filter?: import("../../../composables/filter.js").FilterFunction | undefined;
        sort?: DataTableCompareFunction | undefined;
        width?: (number | string) | undefined;
        maxWidth?: (number | string) | undefined;
        minWidth?: (number | string) | undefined;
        title?: string | undefined;
        nowrap?: boolean | undefined;
        align?: ("start" | "end" | "center") | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sortRaw?: DataTableCompareFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey | null;
        fixedOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[], InternalDataTableHeader[] | {
        fixed?: boolean | undefined;
        filter?: import("../../../composables/filter.js").FilterFunction | undefined;
        sort?: DataTableCompareFunction | undefined;
        width?: (number | string) | undefined;
        maxWidth?: (number | string) | undefined;
        minWidth?: (number | string) | undefined;
        title?: string | undefined;
        nowrap?: boolean | undefined;
        align?: ("start" | "end" | "center") | undefined;
        headerProps?: Record<string, any> | undefined;
        cellProps?: import("../types.js").HeaderCellProps | undefined;
        sortable: boolean;
        sortRaw?: DataTableCompareFunction | undefined;
        key: string | null;
        value: import("../../../util/index.js").SelectItemKey | null;
        fixedOffset?: number | undefined;
        lastFixed?: boolean | undefined;
        colspan?: number | undefined;
        rowspan?: number | undefined;
        children?: any[] | undefined;
    }[]>;
    sortFunctions: Ref<Record<string, DataTableCompareFunction>, Record<string, DataTableCompareFunction>>;
    sortRawFunctions: Ref<Record<string, DataTableCompareFunction>, Record<string, DataTableCompareFunction>>;
    filterFunctions: Ref<FilterKeyFunctions, FilterKeyFunctions>;
};
export declare function useHeaders(): {
    headers: Ref<InternalDataTableHeader[][]>;
    columns: Ref<InternalDataTableHeader[]>;
};

