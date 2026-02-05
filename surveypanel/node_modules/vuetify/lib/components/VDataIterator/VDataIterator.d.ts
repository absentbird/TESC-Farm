import { provideExpanded } from "../VDataTable/composables/expand.js";
import { provideGroupBy } from "../VDataTable/composables/group.js";
import { providePagination } from "../VDataTable/composables/paginate.js";
import { provideSelection } from "../VDataTable/composables/select.js";
import { provideSort } from "../VDataTable/composables/sort.js";
import type { Component } from 'vue';
import type { DataIteratorItem } from './composables/items.js';
import type { Group } from "../VDataTable/composables/group.js";
import type { SortItem } from "../VDataTable/composables/sort.js";
import type { LoaderSlotProps } from "../../composables/loader.js";
import type { GenericProps } from "../../util/index.js";
type VDataIteratorSlotProps<T> = {
    page: number;
    itemsPerPage: number;
    sortBy: readonly SortItem[];
    pageCount: number;
    toggleSort: ReturnType<typeof provideSort>['toggleSort'];
    prevPage: ReturnType<typeof providePagination>['prevPage'];
    nextPage: ReturnType<typeof providePagination>['nextPage'];
    setPage: ReturnType<typeof providePagination>['setPage'];
    setItemsPerPage: ReturnType<typeof providePagination>['setItemsPerPage'];
    isSelected: ReturnType<typeof provideSelection>['isSelected'];
    select: ReturnType<typeof provideSelection>['select'];
    selectAll: ReturnType<typeof provideSelection>['selectAll'];
    toggleSelect: ReturnType<typeof provideSelection>['toggleSelect'];
    isExpanded: ReturnType<typeof provideExpanded>['isExpanded'];
    toggleExpand: ReturnType<typeof provideExpanded>['toggleExpand'];
    isGroupOpen: ReturnType<typeof provideGroupBy>['isGroupOpen'];
    toggleGroup: ReturnType<typeof provideGroupBy>['toggleGroup'];
    items: readonly DataIteratorItem<T>[];
    groupedItems: readonly (DataIteratorItem<T> | Group<DataIteratorItem<T>>)[];
};
export type VDataIteratorSlots<T> = {
    default: VDataIteratorSlotProps<T>;
    header: VDataIteratorSlotProps<T>;
    footer: VDataIteratorSlotProps<T>;
    loader: LoaderSlotProps;
    'no-data': never;
};
export declare const makeVDataIteratorProps: <Defaults extends {
    transition?: unknown;
    tag?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    groupBy?: unknown;
    expandOnClick?: unknown;
    showExpand?: unknown;
    expanded?: unknown;
    page?: unknown;
    itemsPerPage?: unknown;
    sortBy?: unknown;
    customKeySort?: unknown;
    multiSort?: unknown;
    mustSort?: unknown;
    showSelect?: unknown;
    selectStrategy?: unknown;
    modelValue?: unknown;
    valueComparator?: unknown;
    items?: unknown;
    itemValue?: unknown;
    itemSelectable?: unknown;
    returnObject?: unknown;
    class?: unknown;
    style?: unknown;
    search?: unknown;
    loading?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            hideOnLeave: boolean;
        };
    } : Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            hideOnLeave: boolean;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        } : string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        } | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        } : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        }>;
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
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"];
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
    itemsPerPage: unknown extends Defaults["itemsPerPage"] ? Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemsPerPage"] ? string | number : string | number | Defaults["itemsPerPage"]>;
        default: unknown extends Defaults["itemsPerPage"] ? string | number : NonNullable<string | number> | Defaults["itemsPerPage"];
    };
    sortBy: unknown extends Defaults["sortBy"] ? {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"]>;
        default: unknown extends Defaults["sortBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["sortBy"];
    };
    customKeySort: unknown extends Defaults["customKeySort"] ? import("vue").PropType<Record<string, import("../VDataTable/types.js").DataTableCompareFunction>> : {
        type: import("vue").PropType<unknown extends Defaults["customKeySort"] ? Record<string, import("../VDataTable/types.js").DataTableCompareFunction> : Record<string, import("../VDataTable/types.js").DataTableCompareFunction> | Defaults["customKeySort"]>;
        default: unknown extends Defaults["customKeySort"] ? Record<string, import("../VDataTable/types.js").DataTableCompareFunction> : Record<string, import("../VDataTable/types.js").DataTableCompareFunction> | Defaults["customKeySort"];
    };
    multiSort: unknown extends Defaults["multiSort"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"]>;
        default: unknown extends Defaults["multiSort"] ? boolean : boolean | Defaults["multiSort"];
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
        type: import("vue").PropType<import("./composables/items.js").DataIteratorItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./composables/items.js").DataIteratorItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemValue"];
    };
    itemSelectable: unknown extends Defaults["itemSelectable"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemSelectable"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemSelectable"]>;
        default: unknown extends Defaults["itemSelectable"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemSelectable"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
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
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
    loading: unknown extends Defaults["loading"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? boolean : boolean | Defaults["loading"];
    };
};
export declare const VDataIterator: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        page: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        };
        expanded: readonly string[];
        loading: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sortBy: readonly SortItem[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        modelValue: readonly any[];
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        itemsPerPage: string | number;
    } & {
        search?: string | undefined;
        class?: any;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../VDataTable/types.js").DataTableCompareFunction> | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any[]) => true;
        'update:groupBy': (value: any) => true;
        'update:page': (value: number) => true;
        'update:itemsPerPage': (value: number) => true;
        'update:sortBy': (value: any) => true;
        'update:options': (value: any) => true;
        'update:expanded': (value: any) => true;
        'update:currentItems': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:loader" | "v-slot:header" | "v-slot:no-data" | "v-slot:footer">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        page: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        };
        expanded: readonly string[];
        loading: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sortBy: readonly SortItem[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        modelValue: readonly any[];
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        itemsPerPage: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
        header: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
        footer: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
        loader: (arg: LoaderSlotProps) => import("vue").VNode[];
        'no-data': () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        page: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        };
        expanded: readonly string[];
        loading: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sortBy: readonly SortItem[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        modelValue: readonly any[];
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        itemsPerPage: string | number;
    } & {
        search?: string | undefined;
        class?: any;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
        customKeySort?: Record<string, import("../VDataTable/types.js").DataTableCompareFunction> | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
        "onUpdate:expanded"?: ((value: any) => any) | undefined;
        "onUpdate:sortBy"?: ((value: any) => any) | undefined;
        "onUpdate:groupBy"?: ((value: any) => any) | undefined;
        "onUpdate:page"?: ((value: number) => any) | undefined;
        "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
        "onUpdate:options"?: ((value: any) => any) | undefined;
        "onUpdate:currentItems"?: ((value: any) => any) | undefined;
    }, {}, {}, {}, {}, {
        page: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        };
        expanded: readonly string[];
        loading: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        sortBy: readonly SortItem[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        modelValue: readonly any[];
        expandOnClick: boolean;
        showExpand: boolean;
        multiSort: boolean;
        mustSort: boolean;
        groupBy: readonly SortItem[];
        itemValue: import("../../util/index.js").SelectItemKey;
        itemSelectable: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        showSelect: boolean;
        selectStrategy: "all" | "page" | "single";
        valueComparator: typeof import("../../util/index.js").deepEqual;
        itemsPerPage: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    page: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: Component;
    }) | {
        component: Component;
        hideOnLeave: boolean;
    };
    expanded: readonly string[];
    loading: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    sortBy: readonly SortItem[];
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    modelValue: readonly any[];
    expandOnClick: boolean;
    showExpand: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    itemValue: import("../../util/index.js").SelectItemKey;
    itemSelectable: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    valueComparator: typeof import("../../util/index.js").deepEqual;
    itemsPerPage: string | number;
} & {
    search?: string | undefined;
    class?: any;
    customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    filterKeys?: import("../../composables/filter.js").FilterKeys | undefined;
    customKeySort?: Record<string, import("../VDataTable/types.js").DataTableCompareFunction> | undefined;
} & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:currentItems"?: ((value: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any[]) => true;
    'update:groupBy': (value: any) => true;
    'update:page': (value: number) => true;
    'update:itemsPerPage': (value: number) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:expanded': (value: any) => true;
    'update:currentItems': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:loader" | "v-slot:header" | "v-slot:no-data" | "v-slot:footer">, string, {
    page: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: Component;
    }) | {
        component: Component;
        hideOnLeave: boolean;
    };
    expanded: readonly string[];
    loading: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    sortBy: readonly SortItem[];
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    modelValue: readonly any[];
    expandOnClick: boolean;
    showExpand: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: readonly SortItem[];
    itemValue: import("../../util/index.js").SelectItemKey;
    itemSelectable: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    showSelect: boolean;
    selectStrategy: "all" | "page" | "single";
    valueComparator: typeof import("../../util/index.js").deepEqual;
    itemsPerPage: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
    header: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
    footer: (arg: VDataIteratorSlotProps<unknown>) => import("vue").VNode[];
    loader: (arg: LoaderSlotProps) => import("vue").VNode[];
    'no-data': () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: readonly T[];
}, slots: VDataIteratorSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            hideOnLeave: boolean;
        };
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    sortBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../VDataTable/types.js").DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
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
        type: import("vue").PropType<import("./composables/items.js").DataIteratorItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    search: StringConstructor;
    loading: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            hideOnLeave: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            hideOnLeave: boolean;
        };
    };
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    groupBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: import("vue").PropType<readonly string[]>;
        default: () => never[];
    };
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    sortBy: {
        type: import("vue").PropType<readonly SortItem[]>;
        default: () => never[];
    };
    customKeySort: import("vue").PropType<Record<string, import("../VDataTable/types.js").DataTableCompareFunction>>;
    multiSort: BooleanConstructor;
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
        type: import("vue").PropType<import("./composables/items.js").DataIteratorItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemSelectable: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    returnObject: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    search: StringConstructor;
    loading: BooleanConstructor;
}>>;
export type VDataIterator = InstanceType<typeof VDataIterator>;

