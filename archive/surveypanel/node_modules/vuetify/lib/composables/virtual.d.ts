import type { PropType, Ref } from 'vue';
import type { SelectItemKey } from "../util/index.js";
type VirtualProps = {
    itemHeight: number | string | null | undefined;
    itemKey: SelectItemKey;
    height: number | string | undefined;
};
export declare const makeVirtualProps: <Defaults extends {
    itemHeight?: unknown;
    itemKey?: unknown;
    height?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    itemHeight: unknown extends Defaults["itemHeight"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemHeight"] ? string | number : string | number | Defaults["itemHeight"]>;
        default: unknown extends Defaults["itemHeight"] ? string | number : NonNullable<string | number> | Defaults["itemHeight"];
    };
    itemKey: unknown extends Defaults["itemKey"] ? {
        type: PropType<SelectItemKey>;
        default: null;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemKey"] ? SelectItemKey : SelectItemKey | Defaults["itemKey"]>;
        default: unknown extends Defaults["itemKey"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemKey"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
};
export declare function useVirtual<T>(props: VirtualProps, items: Ref<readonly T[]>): {
    calculateVisibleItems: () => void;
    containerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    markerRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    computedItems: import("vue").ComputedRef<{
        raw: T;
        index: number;
        key: any;
    }[]>;
    paddingTop: import("vue").ShallowRef<number, number>;
    paddingBottom: import("vue").ShallowRef<number, number>;
    scrollToIndex: (index: number) => void;
    handleScroll: () => void;
    handleScrollend: () => void;
    handleItemResize: (index: number, height: number) => void;
};

