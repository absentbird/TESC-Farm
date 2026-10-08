import type { PropType, Ref } from 'vue';
import type { GenericProps } from "../../util/index.js";
export interface VVirtualScrollSlot<T> {
    item: T;
    index: number;
}
export declare const makeVVirtualScrollProps: <Defaults extends {
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    itemHeight?: unknown;
    itemKey?: unknown;
    items?: unknown;
    renderless?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<import("vue").StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<import("vue").StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["style"] ? import("vue").StyleValue : import("vue").StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? import("vue").StyleValue : NonNullable<import("vue").StyleValue> | Defaults["style"];
    };
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
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    } : Omit<{
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemKey"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemKey"]>;
        default: unknown extends Defaults["itemKey"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemKey"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly unknown[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly unknown[] : readonly unknown[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly unknown[] : readonly unknown[] | Defaults["items"];
    };
    renderless: unknown extends Defaults["renderless"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"]>;
        default: unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"];
    };
};
export declare const VVirtualScroll: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "renderless">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VVirtualScrollSlot<unknown> | (VVirtualScrollSlot<unknown> & {
            itemRef: Ref<HTMLElement | undefined>;
        })) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
    }, {
        calculateVisibleItems: () => void;
        scrollToIndex: (index: number) => void;
    }, {}, {}, {}, {
        style: import("vue").StyleValue;
        itemHeight: string | number;
        itemKey: import("../../util/index.js").SelectItemKey;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    itemHeight: string | number;
    itemKey: import("../../util/index.js").SelectItemKey;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
}, {
    calculateVisibleItems: () => void;
    scrollToIndex: (index: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "renderless">, string, {
    style: import("vue").StyleValue;
    itemHeight: string | number;
    itemKey: import("../../util/index.js").SelectItemKey;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VVirtualScrollSlot<unknown> | (VVirtualScrollSlot<unknown> & {
        itemRef: Ref<HTMLElement | undefined>;
    })) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T, Renderless extends boolean = false>(props: {
    items?: readonly T[];
    renderless?: Renderless;
}, slots: {
    default: VVirtualScrollSlot<T> & (Renderless extends true ? {
        itemRef: Ref<HTMLElement | undefined>;
    } : {});
}) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    itemKey: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    items: {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    };
    renderless: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
    itemKey: {
        type: PropType<import("../../util/index.js").SelectItemKey>;
        default: null;
    };
    items: {
        type: PropType<readonly unknown[]>;
        default: () => never[];
    };
    renderless: BooleanConstructor;
}>>;
export type VVirtualScroll = InstanceType<typeof VVirtualScroll>;
