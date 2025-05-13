import type { PropType } from 'vue';
import type { InternalListItem } from './VList.js';
import type { VListItemSlots } from './VListItem.js';
import type { GenericProps } from "../../util/index.js";
export type VListChildrenSlots<T> = {
    [K in keyof Omit<VListItemSlots, 'default'>]: VListItemSlots[K] & {
        item: T;
    };
} & {
    default: never;
    item: {
        props: InternalListItem['props'];
    };
    divider: {
        props: InternalListItem['props'];
    };
    subheader: {
        props: InternalListItem['props'];
    };
    header: {
        props: InternalListItem['props'];
    };
};
export declare const makeVListChildrenProps: <Defaults extends {
    items?: unknown;
    returnObject?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    items: unknown extends Defaults["items"] ? PropType<readonly InternalListItem<any>[]> : {
        type: PropType<unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
};
export declare const VListChildren: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | JSX.Element)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "returnObject" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        title: (arg: import("./VListItem.js").ListItemTitleSlot & {
            item: InternalListItem<any>;
        }) => import("vue").VNode[];
        append: (arg: import("./VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
        }) => import("vue").VNode[];
        prepend: (arg: import("./VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
        }) => import("vue").VNode[];
        subtitle: (arg: import("./VListItem.js").ListItemSubtitleSlot & {
            item: InternalListItem<any>;
        }) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        item: (arg: {
            props: InternalListItem["props"];
        }) => import("vue").VNode[];
        divider: (arg: {
            props: InternalListItem["props"];
        }) => import("vue").VNode[];
        subheader: (arg: {
            props: InternalListItem["props"];
        }) => import("vue").VNode[];
        header: (arg: {
            props: InternalListItem["props"];
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {} & {}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | JSX.Element)[] | undefined, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{} & {}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | JSX.Element)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "returnObject" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader">, string, {}, {}, string, import("vue").SlotsType<Partial<{
    title: (arg: import("./VListItem.js").ListItemTitleSlot & {
        item: InternalListItem<any>;
    }) => import("vue").VNode[];
    append: (arg: import("./VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
    }) => import("vue").VNode[];
    prepend: (arg: import("./VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
    }) => import("vue").VNode[];
    subtitle: (arg: import("./VListItem.js").ListItemSubtitleSlot & {
        item: InternalListItem<any>;
    }) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    item: (arg: {
        props: InternalListItem["props"];
    }) => import("vue").VNode[];
    divider: (arg: {
        props: InternalListItem["props"];
    }) => import("vue").VNode[];
    subheader: (arg: {
        props: InternalListItem["props"];
    }) => import("vue").VNode[];
    header: (arg: {
        props: InternalListItem["props"];
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends InternalListItem>(props: {
    items?: readonly T[];
    returnObject?: boolean;
}, slots: VListChildrenSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    items: PropType<readonly InternalListItem[]>;
    returnObject: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    items: PropType<readonly InternalListItem[]>;
    returnObject: BooleanConstructor;
}>>;
