import { deepEqual } from "../util/index.js";
import type { PropType } from 'vue';
import type { InternalItem } from "./filter.js";
import type { SelectItemKey } from "../util/index.js";
export interface ListItem<T = any> extends InternalItem<T> {
    title: string;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children?: ListItem<T>[];
}
export interface ItemProps {
    items: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    returnObject: boolean;
    valueComparator: typeof deepEqual | undefined;
}
export declare const makeItemsProps: <Defaults extends {
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    items: unknown extends Defaults["items"] ? {
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : SelectItemKey | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemValue"];
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemChildren"] ? SelectItemKey : SelectItemKey | Defaults["itemChildren"]>;
        default: unknown extends Defaults["itemChildren"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemChildren"];
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : SelectItemKey | Defaults["itemProps"]>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemProps"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
};
export declare function transformItem(props: Omit<ItemProps, 'items'>, item: any): ListItem;
export declare function transformItems(props: Omit<ItemProps, 'items'>, items: ItemProps['items']): ListItem<any>[];
export declare function useItems(props: ItemProps): {
    items: import("vue").ComputedRef<ListItem<any>[]>;
    transformIn: (value: any[]) => ListItem[];
    transformOut: (value: ListItem[]) => any[];
};
