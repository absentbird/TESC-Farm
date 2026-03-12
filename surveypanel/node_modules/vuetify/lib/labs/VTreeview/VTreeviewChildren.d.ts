import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { InternalListItem } from "../../components/VList/VList.js";
import type { VListItemSlots } from "../../components/VList/VListItem.js";
import type { SelectStrategyProp } from "../../composables/nested/nested.js";
import type { GenericProps } from "../../util/index.js";
export type VTreeviewChildrenSlots<T> = {
    [K in keyof Omit<VListItemSlots, 'default'>]: VListItemSlots[K] & {
        item: T;
        internalItem: InternalListItem<T>;
    };
} & {
    default: never;
    item: {
        props: InternalListItem['props'];
        item: T;
        internalItem: InternalListItem<T>;
    };
};
export declare const makeVTreeviewChildrenProps: <Defaults extends {
    density?: unknown;
    disabled?: unknown;
    loadChildren?: unknown;
    loadingIcon?: unknown;
    items?: unknown;
    openOnClick?: unknown;
    indeterminateIcon?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    returnObject?: unknown;
    selectable?: unknown;
    selectedColor?: unknown;
    selectStrategy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    loadChildren: unknown extends Defaults["loadChildren"] ? PropType<(item: unknown) => Promise<void>> : {
        type: PropType<unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"]>;
        default: unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"];
    };
    loadingIcon: unknown extends Defaults["loadingIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"]>;
        default: unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"];
    };
    items: unknown extends Defaults["items"] ? PropType<readonly InternalListItem<any>[]> : {
        type: PropType<unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly InternalListItem<any>[] : readonly InternalListItem<any>[] | Defaults["items"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    indeterminateIcon: unknown extends Defaults["indeterminateIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["indeterminateIcon"] ? IconValue : IconValue | Defaults["indeterminateIcon"]>;
        default: unknown extends Defaults["indeterminateIcon"] ? IconValue : NonNullable<IconValue> | Defaults["indeterminateIcon"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["falseIcon"] ? IconValue : IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["falseIcon"];
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["trueIcon"] ? IconValue : IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? IconValue : NonNullable<IconValue> | Defaults["trueIcon"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    selectedColor: unknown extends Defaults["selectedColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"]>;
        default: unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? PropType<SelectStrategyProp> : {
        type: PropType<unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : SelectStrategyProp | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? SelectStrategyProp : NonNullable<SelectStrategyProp> | Defaults["selectStrategy"];
    };
};
export declare const VTreeviewChildren: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        returnObject: boolean;
        density: import("../../composables/density.js").Density;
        indeterminateIcon: IconValue;
        selectable: boolean;
        loadingIcon: string;
    } & {
        selectStrategy?: SelectStrategyProp | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        selectedColor?: string | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    }, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | JSX.Element)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        returnObject: boolean;
        density: import("../../composables/density.js").Density;
        openOnClick: boolean;
        indeterminateIcon: IconValue;
        selectable: boolean;
        loadingIcon: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode[];
        prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode[];
        subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        item: (arg: {
            props: InternalListItem["props"];
            item: InternalListItem<any>;
            internalItem: InternalListItem<InternalListItem<any>>;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        disabled: boolean;
        returnObject: boolean;
        density: import("../../composables/density.js").Density;
        indeterminateIcon: IconValue;
        selectable: boolean;
        loadingIcon: string;
    } & {
        selectStrategy?: SelectStrategyProp | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        selectedColor?: string | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    }, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | JSX.Element)[] | undefined, {}, {}, {}, {
        disabled: boolean;
        returnObject: boolean;
        density: import("../../composables/density.js").Density;
        openOnClick: boolean;
        indeterminateIcon: IconValue;
        selectable: boolean;
        loadingIcon: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    returnObject: boolean;
    density: import("../../composables/density.js").Density;
    indeterminateIcon: IconValue;
    selectable: boolean;
    loadingIcon: string;
} & {
    selectStrategy?: SelectStrategyProp | undefined;
    openOnClick?: boolean | undefined;
    falseIcon?: IconValue | undefined;
    trueIcon?: IconValue | undefined;
    selectedColor?: string | undefined;
    loadChildren?: ((item: unknown) => Promise<void>) | undefined;
}, () => (import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | JSX.Element)[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item">, string, {
    disabled: boolean;
    returnObject: boolean;
    density: import("../../composables/density.js").Density;
    openOnClick: boolean;
    indeterminateIcon: IconValue;
    selectable: boolean;
    loadingIcon: string;
}, {}, string, import("vue").SlotsType<Partial<{
    title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode[];
    append: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode[];
    prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode[];
    subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    item: (arg: {
        props: InternalListItem["props"];
        item: InternalListItem<any>;
        internalItem: InternalListItem<InternalListItem<any>>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends InternalListItem>(props: {
    items?: readonly T[];
}, slots: VTreeviewChildrenSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    disabled: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<readonly InternalListItem[]>;
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    returnObject: BooleanConstructor;
    selectable: BooleanConstructor;
    selectedColor: StringConstructor;
    selectStrategy: PropType<SelectStrategyProp>;
}, import("vue").ExtractPropTypes<{
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    disabled: BooleanConstructor;
    loadChildren: PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    items: PropType<readonly InternalListItem[]>;
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    returnObject: BooleanConstructor;
    selectable: BooleanConstructor;
    selectedColor: StringConstructor;
    selectStrategy: PropType<SelectStrategyProp>;
}>>;
