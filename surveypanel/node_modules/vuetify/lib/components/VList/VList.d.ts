import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { VListChildrenSlots } from './VListChildren.js';
import type { ItemProps, ListItem } from "../../composables/list-items.js";
import type { GenericProps, SelectItemKey } from "../../util/index.js";
export interface InternalListItem<T = any> extends ListItem<T> {
    type?: 'item' | 'subheader' | 'divider';
}
export declare function useListItems(props: ItemProps & {
    itemType?: string;
}): {
    items: import("vue").ComputedRef<InternalListItem<any>[]>;
};
export declare const makeVListProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
    itemType?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    activatable?: unknown;
    selectable?: unknown;
    activeStrategy?: unknown;
    selectStrategy?: unknown;
    openStrategy?: unknown;
    opened?: unknown;
    activated?: unknown;
    selected?: unknown;
    mandatory?: unknown;
    baseColor?: unknown;
    activeColor?: unknown;
    activeClass?: unknown;
    bgColor?: unknown;
    disabled?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    lines?: unknown;
    slim?: unknown;
    nav?: unknown;
    'onClick:open'?: unknown;
    'onClick:select'?: unknown;
    'onUpdate:opened'?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
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
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof import("../../util/index.js").deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    itemType: unknown extends Defaults["itemType"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemType"] ? string : string | Defaults["itemType"]>;
        default: unknown extends Defaults["itemType"] ? string : string | Defaults["itemType"];
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
    };
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
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    activatable: unknown extends Defaults["activatable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"]>;
        default: unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    activeStrategy: unknown extends Defaults["activeStrategy"] ? PropType<import("../../composables/nested/nested.js").ActiveStrategyProp> : {
        type: PropType<unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : import("../../composables/nested/nested.js").ActiveStrategyProp | Defaults["activeStrategy"]>;
        default: unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : NonNullable<import("../../composables/nested/nested.js").ActiveStrategyProp> | Defaults["activeStrategy"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    } : Omit<{
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : import("../../composables/nested/nested.js").SelectStrategyProp | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp> | Defaults["selectStrategy"];
    };
    openStrategy: unknown extends Defaults["openStrategy"] ? {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    } : Omit<{
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openStrategy"] ? import("../../composables/nested/nested.js").OpenStrategyProp : import("../../composables/nested/nested.js").OpenStrategyProp | Defaults["openStrategy"]>;
        default: unknown extends Defaults["openStrategy"] ? import("../../composables/nested/nested.js").OpenStrategyProp : NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp> | Defaults["openStrategy"];
    };
    opened: unknown extends Defaults["opened"] ? null : {
        type: PropType<unknown extends Defaults["opened"] ? any : any>;
        default: unknown extends Defaults["opened"] ? any : any;
    };
    activated: unknown extends Defaults["activated"] ? null : {
        type: PropType<unknown extends Defaults["activated"] ? any : any>;
        default: unknown extends Defaults["activated"] ? any : any;
    };
    selected: unknown extends Defaults["selected"] ? null : {
        type: PropType<unknown extends Defaults["selected"] ? any : any>;
        default: unknown extends Defaults["selected"] ? any : any;
    };
    mandatory: unknown extends Defaults["mandatory"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["expandIcon"] ? IconValue : IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : NonNullable<IconValue> | Defaults["expandIcon"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["collapseIcon"] ? IconValue : IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["collapseIcon"];
    };
    lines: unknown extends Defaults["lines"] ? {
        type: PropType<"one" | "two" | "three" | false>;
        default: string;
    } : Omit<{
        type: PropType<"one" | "two" | "three" | false>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : false | "one" | "two" | "three" | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : NonNullable<false | "one" | "two" | "three"> | Defaults["lines"];
    };
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    nav: unknown extends Defaults["nav"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"]>;
        default: unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"];
    };
    'onClick:open': unknown extends Defaults["onClick:open"] ? PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: PropType<unknown extends Defaults["onClick:open"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:open"]>;
        default: unknown extends Defaults["onClick:open"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:open"];
    };
    'onClick:select': unknown extends Defaults["onClick:select"] ? PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: PropType<unknown extends Defaults["onClick:select"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:select"]>;
        default: unknown extends Defaults["onClick:select"] ? (args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void : ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | Defaults["onClick:select"];
    };
    'onUpdate:opened': unknown extends Defaults["onUpdate:opened"] ? PropType<() => void> : {
        type: PropType<unknown extends Defaults["onUpdate:opened"] ? () => void : (() => void) | Defaults["onUpdate:opened"]>;
        default: unknown extends Defaults["onUpdate:opened"] ? () => void : (() => void) | Defaults["onUpdate:opened"];
    };
};
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
export declare const VList: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activated?: any;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        collapseIcon?: IconValue | undefined;
        expandIcon?: IconValue | undefined;
    } & {
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        open: (id: unknown, value: boolean, event?: Event) => void;
        select: (id: unknown, value: boolean, event?: Event) => void;
        focus: (location?: "next" | "prev" | "first" | "last") => void;
        children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
        parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
        getPath: (id: unknown) => unknown[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:selected': (value: unknown) => true;
        'update:activated': (value: unknown) => true;
        'update:opened': (value: unknown) => true;
        'click:open': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        'click:activate': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        'click:select': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
    }, "$children" | "selected" | "v-slots" | "v-slot:default" | "opened" | "items" | "itemValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "click:open" | "click:select" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader" | "itemTitle" | "itemChildren" | "itemProps" | "update:selected" | "update:opened">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        title: (arg: import("./VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNode[];
        append: (arg: import("./VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNode[];
        prepend: (arg: import("./VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNode[];
        subtitle: (arg: import("./VListItem.js").ListItemSubtitleSlot & {
            item: any;
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
    }, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activated?: any;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        collapseIcon?: IconValue | undefined;
        expandIcon?: IconValue | undefined;
    } & {
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {
        open: (id: unknown, value: boolean, event?: Event) => void;
        select: (id: unknown, value: boolean, event?: Event) => void;
        focus: (location?: "next" | "prev" | "first" | "last") => void;
        children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
        parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
        getPath: (id: unknown) => unknown[];
    }, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    nav: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    mandatory: boolean;
    returnObject: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    activatable: boolean;
    selectable: boolean;
    openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
    itemType: string;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    activated?: any;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    activeColor?: string | undefined;
    activeClass?: string | undefined;
    activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
    collapseIcon?: IconValue | undefined;
    expandIcon?: IconValue | undefined;
} & {
    "onUpdate:activated"?: ((value: unknown) => any) | undefined;
    "onClick:activate"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
}, {
    open: (id: unknown, value: boolean, event?: Event) => void;
    select: (id: unknown, value: boolean, event?: Event) => void;
    focus: (location?: "next" | "prev" | "first" | "last") => void;
    children: import("vue").Ref<Map<unknown, unknown[]>, Map<unknown, unknown[]>>;
    parents: import("vue").Ref<Map<unknown, unknown>, Map<unknown, unknown>>;
    getPath: (id: unknown) => unknown[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:selected': (value: unknown) => true;
    'update:activated': (value: unknown) => true;
    'update:opened': (value: unknown) => true;
    'click:open': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
    'click:activate': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
    'click:select': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
}, "$children" | "selected" | "v-slots" | "v-slot:default" | "opened" | "items" | "itemValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "click:open" | "click:select" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader" | "itemTitle" | "itemChildren" | "itemProps" | "update:selected" | "update:opened">, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    nav: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    mandatory: boolean;
    returnObject: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    activatable: boolean;
    selectable: boolean;
    openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
    itemType: string;
}, {}, string, import("vue").SlotsType<Partial<{
    title: (arg: import("./VListItem.js").ListItemTitleSlot & {
        item: any;
    }) => import("vue").VNode[];
    append: (arg: import("./VListItem.js").ListItemSlot & {
        item: any;
    }) => import("vue").VNode[];
    prepend: (arg: import("./VListItem.js").ListItemSlot & {
        item: any;
    }) => import("vue").VNode[];
    subtitle: (arg: import("./VListItem.js").ListItemSubtitleSlot & {
        item: any;
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
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly any[], S = unknown, O = unknown>(props: {
    items?: T;
    itemTitle?: SelectItemKey<ItemType<T>>;
    itemValue?: SelectItemKey<ItemType<T>>;
    itemChildren?: SelectItemKey<ItemType<T>>;
    itemProps?: SelectItemKey<ItemType<T>>;
    selected?: S;
    "onUpdate:selected"?: (value: S) => void;
    "onClick:open"?: (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void;
    "onClick:select"?: (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void;
    opened?: O;
    "onUpdate:opened"?: (value: O) => void;
}, slots: VListChildrenSlots<ItemType<T>>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    items: {
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<typeof import("../../util/index.js").deepEqual>;
    itemType: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    openStrategy: {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    expandIcon: PropType<IconValue>;
    collapseIcon: PropType<IconValue>;
    lines: {
        type: PropType<"one" | "two" | "three" | false>;
        default: string;
    };
    slim: BooleanConstructor;
    nav: BooleanConstructor;
    'onClick:open': PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onUpdate:opened': PropType<() => void>;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    items: {
        type: PropType<ItemProps["items"]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<typeof import("../../util/index.js").deepEqual>;
    itemType: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    selectStrategy: {
        type: PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    openStrategy: {
        type: PropType<import("../../composables/nested/nested.js").OpenStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").OpenStrategyProp>;
    };
    opened: null;
    activated: null;
    selected: null;
    mandatory: BooleanConstructor;
    baseColor: StringConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    expandIcon: PropType<IconValue>;
    collapseIcon: PropType<IconValue>;
    lines: {
        type: PropType<"one" | "two" | "three" | false>;
        default: string;
    };
    slim: BooleanConstructor;
    nav: BooleanConstructor;
    'onClick:open': PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onUpdate:opened': PropType<() => void>;
}>>;
export type VList = InstanceType<typeof VList>;

