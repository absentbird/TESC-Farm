import type { PropType, Ref } from 'vue';
import type { SortItem } from './sort.js';
import type { DataTableItem } from '../types.js';
export interface GroupableItem<T = any> {
    type: 'item';
    raw: T;
}
export interface Group<T = any> {
    type: 'group';
    depth: number;
    id: string;
    key: string;
    value: any;
    items: readonly (T | Group<T>)[];
}
export declare const makeDataTableGroupProps: <Defaults extends {
    groupBy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    groupBy: unknown extends Defaults["groupBy"] ? {
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly SortItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"]>;
        default: unknown extends Defaults["groupBy"] ? readonly SortItem[] : readonly SortItem[] | Defaults["groupBy"];
    };
};
type GroupProps = {
    groupBy: readonly SortItem[];
    'onUpdate:groupBy': ((value: SortItem[]) => void) | undefined;
};
export declare function createGroupBy(props: GroupProps): {
    groupBy: Ref<readonly SortItem[], readonly SortItem[]> & {
        readonly externalValue: readonly SortItem[];
    };
};
export declare function provideGroupBy(options: {
    groupBy: Ref<readonly SortItem[]>;
    sortBy: Ref<readonly SortItem[]>;
    disableSort?: Ref<boolean>;
}): {
    sortByWithGroups: import("vue").ComputedRef<SortItem[]>;
    toggleGroup: (group: Group) => void;
    opened: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
    groupBy: Ref<readonly SortItem[], readonly SortItem[]>;
    extractRows: <T extends GroupableItem>(items: readonly (T | Group<T>)[]) => T[];
    isGroupOpen: (group: Group) => boolean;
};
export declare function useGroupBy(): {
    opened: Ref<Set<string>>;
    toggleGroup: (group: Group) => void;
    isGroupOpen: (group: Group) => boolean;
    sortByWithGroups: Ref<SortItem[]>;
    groupBy: Ref<readonly SortItem[]>;
    extractRows: (items: (DataTableItem | Group<DataTableItem>)[]) => DataTableItem[];
};
export declare function useGroupedItems<T extends GroupableItem>(items: Ref<T[]>, groupBy: Ref<readonly SortItem[]>, opened: Ref<Set<string>>): {
    flatItems: import("vue").ComputedRef<readonly (T | Group<T>)[]>;
};

