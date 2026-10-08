import type { Ref } from 'vue';
import type { Group } from './group.js';
import type { EventProp } from "../../../util/index.js";
export declare const makeDataTablePaginateProps: <Defaults extends {
    page?: unknown;
    itemsPerPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
type PaginationProps = {
    page: number | string;
    'onUpdate:page': EventProp | undefined;
    itemsPerPage: number | string;
    'onUpdate:itemsPerPage': EventProp | undefined;
    itemsLength?: number | string;
};
export declare function createPagination(props: PaginationProps): {
    page: Ref<number, number> & {
        readonly externalValue: string | number;
    };
    itemsPerPage: Ref<number, number> & {
        readonly externalValue: string | number;
    };
};
export declare function providePagination(options: {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    itemsLength: Ref<number>;
}): {
    page: Ref<number, number>;
    itemsPerPage: Ref<number, number>;
    startIndex: import("vue").ComputedRef<number>;
    stopIndex: import("vue").ComputedRef<number>;
    pageCount: import("vue").ComputedRef<number>;
    itemsLength: Ref<number, number>;
    nextPage: () => void;
    prevPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};
export declare function usePagination(): {
    page: Ref<number>;
    itemsPerPage: Ref<number>;
    startIndex: Ref<number>;
    stopIndex: Ref<number>;
    pageCount: Ref<number>;
    itemsLength: Ref<number>;
    prevPage: () => void;
    nextPage: () => void;
    setPage: (value: number) => void;
    setItemsPerPage: (value: number) => void;
};
export declare function usePaginatedItems<T>(options: {
    items: Ref<readonly (T | Group<T>)[]>;
    startIndex: Ref<number>;
    stopIndex: Ref<number>;
    itemsPerPage: Ref<number>;
}): {
    paginatedItems: import("vue").ComputedRef<readonly (T | Group<T>)[]>;
};

