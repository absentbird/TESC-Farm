import type { InternalListItem } from "../../components/VList/VList.js";
import type { VListChildrenSlots } from "../../components/VList/VListChildren.js";
import type { GenericProps } from "../../util/index.js";
export declare const makeVTreeviewProps: <Defaults extends {
    modelValue?: unknown;
    variant?: unknown;
    height?: unknown;
    width?: unknown;
    border?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    style?: unknown;
    disabled?: unknown;
    activated?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    lines?: unknown;
    mandatory?: unknown;
    selected?: unknown;
    elevation?: unknown;
    opened?: unknown;
    items?: unknown;
    itemValue?: unknown;
    returnObject?: unknown;
    selectStrategy?: unknown;
    valueComparator?: unknown;
    density?: unknown;
    rounded?: unknown;
    tile?: unknown;
    baseColor?: unknown;
    bgColor?: unknown;
    activeColor?: unknown;
    slim?: unknown;
    activeClass?: unknown;
    activatable?: unknown;
    selectable?: unknown;
    activeStrategy?: unknown;
    'onUpdate:opened'?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    itemTitle?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    'onClick:open'?: unknown;
    'onClick:select'?: unknown;
    loadChildren?: unknown;
    loadingIcon?: unknown;
    openOnClick?: unknown;
    indeterminateIcon?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    selectedColor?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    fluid?: unknown;
    openAll?: unknown;
    search?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: ArrayConstructor;
        default: () => never[];
    } : Omit<{
        type: ArrayConstructor;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? unknown[] : unknown[] | Defaults["modelValue"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
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
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    activated: unknown extends Defaults["activated"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["activated"] ? any : any>;
        default: unknown extends Defaults["activated"] ? any : any;
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
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
    lines: unknown extends Defaults["lines"] ? {
        type: import("vue").PropType<"one" | "two" | "three" | false>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"one" | "two" | "three" | false>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : false | "one" | "two" | "three" | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : NonNullable<false | "one" | "two" | "three"> | Defaults["lines"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean : boolean | Defaults["mandatory"];
    };
    selected: unknown extends Defaults["selected"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["selected"] ? any : any>;
        default: unknown extends Defaults["selected"] ? any : any;
    };
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
    };
    opened: unknown extends Defaults["opened"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["opened"] ? any : any>;
        default: unknown extends Defaults["opened"] ? any : any;
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("../../composables/list-items.js").ItemProps["items"]>;
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
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    selectStrategy: unknown extends Defaults["selectStrategy"] ? {
        type: import("vue").PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : import("../../composables/nested/nested.js").SelectStrategyProp | Defaults["selectStrategy"]>;
        default: unknown extends Defaults["selectStrategy"] ? import("../../composables/nested/nested.js").SelectStrategyProp : NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp> | Defaults["selectStrategy"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? import("vue").PropType<typeof import("../../util/index.js").deepEqual> : {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    slim: unknown extends Defaults["slim"] ? {
        type: import("vue").PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activatable: unknown extends Defaults["activatable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"]>;
        default: unknown extends Defaults["activatable"] ? boolean : boolean | Defaults["activatable"];
    };
    selectable: unknown extends Defaults["selectable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"]>;
        default: unknown extends Defaults["selectable"] ? boolean : boolean | Defaults["selectable"];
    };
    activeStrategy: unknown extends Defaults["activeStrategy"] ? import("vue").PropType<import("../../composables/nested/nested.js").ActiveStrategyProp> : {
        type: import("vue").PropType<unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : import("../../composables/nested/nested.js").ActiveStrategyProp | Defaults["activeStrategy"]>;
        default: unknown extends Defaults["activeStrategy"] ? import("../../composables/nested/nested.js").ActiveStrategyProp : NonNullable<import("../../composables/nested/nested.js").ActiveStrategyProp> | Defaults["activeStrategy"];
    };
    'onUpdate:opened': unknown extends Defaults["onUpdate:opened"] ? import("vue").PropType<() => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:opened"] ? () => void : (() => void) | Defaults["onUpdate:opened"]>;
        default: unknown extends Defaults["onUpdate:opened"] ? () => void : (() => void) | Defaults["onUpdate:opened"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["expandIcon"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemTitle"];
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemChildren"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemChildren"]>;
        default: unknown extends Defaults["itemChildren"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemChildren"];
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : import("../../util/index.js").SelectItemKey | Defaults["itemProps"]>;
        default: unknown extends Defaults["itemProps"] ? import("../../util/index.js").SelectItemKey : NonNullable<import("../../util/index.js").SelectItemKey> | Defaults["itemProps"];
    };
    'onClick:open': unknown extends Defaults["onClick:open"] ? import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:open"] ? (args_0: {
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
    'onClick:select': unknown extends Defaults["onClick:select"] ? import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:select"] ? (args_0: {
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
    loadChildren: unknown extends Defaults["loadChildren"] ? import("vue").PropType<(item: unknown) => Promise<void>> : {
        type: import("vue").PropType<unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"]>;
        default: unknown extends Defaults["loadChildren"] ? (item: unknown) => Promise<void> : ((item: unknown) => Promise<void>) | Defaults["loadChildren"];
    };
    loadingIcon: unknown extends Defaults["loadingIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"]>;
        default: unknown extends Defaults["loadingIcon"] ? string : string | Defaults["loadingIcon"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    indeterminateIcon: unknown extends Defaults["indeterminateIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["indeterminateIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["indeterminateIcon"]>;
        default: unknown extends Defaults["indeterminateIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["indeterminateIcon"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["falseIcon"];
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["trueIcon"];
    };
    selectedColor: unknown extends Defaults["selectedColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"]>;
        default: unknown extends Defaults["selectedColor"] ? string : string | Defaults["selectedColor"];
    };
    customFilter: unknown extends Defaults["customFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterFunction> : {
        type: import("vue").PropType<unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: import("vue").PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? {
        type: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    }, "type" | "default"> & {
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
    fluid: unknown extends Defaults["fluid"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"]>;
        default: unknown extends Defaults["fluid"] ? boolean : boolean | Defaults["fluid"];
    };
    openAll: unknown extends Defaults["openAll"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["openAll"] ? boolean : boolean | Defaults["openAll"]>;
        default: unknown extends Defaults["openAll"] ? boolean : boolean | Defaults["openAll"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
};
export declare const VTreeview: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        modelValue: unknown[];
        itemValue: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        activatable: boolean;
        selectable: boolean;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        loadingIcon: string;
        openAll: boolean;
    } & {
        search?: string | undefined;
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
        selected?: any;
        elevation?: string | number | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        opened?: any;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: import("../../composables/icons.js").IconValue | undefined;
        trueIcon?: import("../../composables/icons.js").IconValue | undefined;
        activeClass?: string | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        'onUpdate:opened'?: (() => void) | undefined;
        'onClick:open'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        selectedColor?: string | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:opened': (val: unknown) => true;
        'update:activated': (val: unknown) => true;
        'update:selected': (val: unknown) => true;
        'update:modelValue': (val: unknown) => true;
        'click:open': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
        'click:select': (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        modelValue: unknown[];
        itemValue: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        openOnClick: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        activatable: boolean;
        selectable: boolean;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        loadingIcon: string;
        openAll: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
            item: unknown;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: unknown;
        }) => import("vue").VNode[];
        prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
            item: unknown;
        }) => import("vue").VNode[];
        subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
            item: unknown;
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
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        modelValue: unknown[];
        itemValue: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        activatable: boolean;
        selectable: boolean;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        loadingIcon: string;
        openAll: boolean;
    } & {
        search?: string | undefined;
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
        selected?: any;
        elevation?: string | number | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        opened?: any;
        valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        openOnClick?: boolean | undefined;
        falseIcon?: import("../../composables/icons.js").IconValue | undefined;
        trueIcon?: import("../../composables/icons.js").IconValue | undefined;
        activeClass?: string | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        'onUpdate:opened'?: (() => void) | undefined;
        'onClick:open'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        'onClick:select'?: ((args_0: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) | undefined;
        selectedColor?: string | undefined;
        loadChildren?: ((item: unknown) => Promise<void>) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
        "onUpdate:activated"?: ((val: unknown) => any) | undefined;
        "onUpdate:selected"?: ((val: unknown) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        modelValue: unknown[];
        itemValue: import("../../util/index.js").SelectItemKey;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        openOnClick: boolean;
        indeterminateIcon: import("../../composables/icons.js").IconValue;
        activatable: boolean;
        selectable: boolean;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        fluid: boolean;
        itemTitle: import("../../util/index.js").SelectItemKey;
        itemChildren: import("../../util/index.js").SelectItemKey;
        itemProps: import("../../util/index.js").SelectItemKey;
        loadingIcon: string;
        openAll: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    mandatory: boolean;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    modelValue: unknown[];
    itemValue: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    indeterminateIcon: import("../../composables/icons.js").IconValue;
    activatable: boolean;
    selectable: boolean;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    fluid: boolean;
    itemTitle: import("../../util/index.js").SelectItemKey;
    itemChildren: import("../../util/index.js").SelectItemKey;
    itemProps: import("../../util/index.js").SelectItemKey;
    loadingIcon: string;
    openAll: boolean;
} & {
    search?: string | undefined;
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
    selected?: any;
    elevation?: string | number | undefined;
    customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    opened?: any;
    valueComparator?: typeof import("../../util/index.js").deepEqual | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    activeColor?: string | undefined;
    openOnClick?: boolean | undefined;
    falseIcon?: import("../../composables/icons.js").IconValue | undefined;
    trueIcon?: import("../../composables/icons.js").IconValue | undefined;
    activeClass?: string | undefined;
    activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
    'onUpdate:opened'?: (() => void) | undefined;
    'onClick:open'?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    'onClick:select'?: ((args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void) | undefined;
    selectedColor?: string | undefined;
    loadChildren?: ((item: unknown) => Promise<void>) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
    "onUpdate:activated"?: ((val: unknown) => any) | undefined;
    "onUpdate:selected"?: ((val: unknown) => any) | undefined;
    "onUpdate:opened"?: ((val: unknown) => any) | undefined;
    "onClick:open"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:opened': (val: unknown) => true;
    'update:activated': (val: unknown) => true;
    'update:selected': (val: unknown) => true;
    'update:modelValue': (val: unknown) => true;
    'click:open': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
    'click:select': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => true;
}, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle" | "v-slot:item" | "v-slot:header" | "v-slot:divider" | "v-slot:subheader">, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    mandatory: boolean;
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    modelValue: unknown[];
    itemValue: import("../../util/index.js").SelectItemKey;
    returnObject: boolean;
    selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    openOnClick: boolean;
    indeterminateIcon: import("../../composables/icons.js").IconValue;
    activatable: boolean;
    selectable: boolean;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    fluid: boolean;
    itemTitle: import("../../util/index.js").SelectItemKey;
    itemChildren: import("../../util/index.js").SelectItemKey;
    itemProps: import("../../util/index.js").SelectItemKey;
    loadingIcon: string;
    openAll: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot & {
        item: unknown;
    }) => import("vue").VNode[];
    append: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
        item: unknown;
    }) => import("vue").VNode[];
    prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot & {
        item: unknown;
    }) => import("vue").VNode[];
    subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot & {
        item: unknown;
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
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    items?: T[];
}, slots: VListChildrenSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    activated: null;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    lines: {
        type: import("vue").PropType<"one" | "two" | "three" | false>;
        default: string;
    };
    mandatory: BooleanConstructor;
    selected: null;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    opened: null;
    items: {
        type: import("vue").PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    activeColor: StringConstructor;
    slim: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    activeClass: StringConstructor;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: import("vue").PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    'onUpdate:opened': import("vue").PropType<() => void>;
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    itemTitle: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    'onClick:open': import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    loadChildren: import("vue").PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    falseIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    trueIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    selectedColor: StringConstructor;
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    fluid: BooleanConstructor;
    openAll: BooleanConstructor;
    search: StringConstructor;
}, import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    disabled: BooleanConstructor;
    activated: null;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    lines: {
        type: import("vue").PropType<"one" | "two" | "three" | false>;
        default: string;
    };
    mandatory: BooleanConstructor;
    selected: null;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    opened: null;
    items: {
        type: import("vue").PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    };
    itemValue: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    selectStrategy: {
        type: import("vue").PropType<import("../../composables/nested/nested.js").SelectStrategyProp>;
        default: NonNullable<import("../../composables/nested/nested.js").SelectStrategyProp>;
    };
    valueComparator: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    activeColor: StringConstructor;
    slim: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    activeClass: StringConstructor;
    activatable: BooleanConstructor;
    selectable: BooleanConstructor;
    activeStrategy: import("vue").PropType<import("../../composables/nested/nested.js").ActiveStrategyProp>;
    'onUpdate:opened': import("vue").PropType<() => void>;
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    itemTitle: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: import("vue").PropType<import("../../util/index.js").SelectItemKey>;
        default: string;
    };
    'onClick:open': import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    'onClick:select': import("vue").PropType<(args_0: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => void>;
    loadChildren: import("vue").PropType<(item: unknown) => Promise<void>>;
    loadingIcon: {
        type: StringConstructor;
        default: string;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    indeterminateIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    falseIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    trueIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    selectedColor: StringConstructor;
    customFilter: import("vue").PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: import("vue").PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: import("vue").PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    fluid: BooleanConstructor;
    openAll: BooleanConstructor;
    search: StringConstructor;
}>>;
export type VTreeview = InstanceType<typeof VTreeview>;
