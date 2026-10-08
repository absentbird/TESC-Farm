import { IconValue } from "../../composables/icons.js";
import type { Prop } from 'vue';
type VRatingItemSlot = {
    value: number;
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    icon: IconValue;
    color?: string;
    props: Record<string, unknown>;
    rating: number;
};
type VRatingItemLabelSlot = {
    value: number;
    index: number;
    label?: string;
};
export declare const makeVRatingProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    name?: unknown;
    itemAriaLabel?: unknown;
    activeColor?: unknown;
    color?: unknown;
    clearable?: unknown;
    disabled?: unknown;
    emptyIcon?: unknown;
    fullIcon?: unknown;
    halfIncrements?: unknown;
    hover?: unknown;
    length?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    itemLabels?: unknown;
    itemLabelPosition?: unknown;
    ripple?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
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
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    itemAriaLabel: unknown extends Defaults["itemAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemAriaLabel"] ? string : string | Defaults["itemAriaLabel"]>;
        default: unknown extends Defaults["itemAriaLabel"] ? string : string | Defaults["itemAriaLabel"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    emptyIcon: unknown extends Defaults["emptyIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["emptyIcon"] ? IconValue : IconValue | Defaults["emptyIcon"]>;
        default: unknown extends Defaults["emptyIcon"] ? IconValue : NonNullable<IconValue> | Defaults["emptyIcon"];
    };
    fullIcon: unknown extends Defaults["fullIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["fullIcon"] ? IconValue : IconValue | Defaults["fullIcon"]>;
        default: unknown extends Defaults["fullIcon"] ? IconValue : NonNullable<IconValue> | Defaults["fullIcon"];
    };
    halfIncrements: unknown extends Defaults["halfIncrements"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["halfIncrements"] ? boolean : boolean | Defaults["halfIncrements"]>;
        default: unknown extends Defaults["halfIncrements"] ? boolean : boolean | Defaults["halfIncrements"];
    };
    hover: unknown extends Defaults["hover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"]>;
        default: unknown extends Defaults["hover"] ? boolean : boolean | Defaults["hover"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : NonNullable<string | number> | Defaults["length"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : NonNullable<string | number> | Defaults["modelValue"];
    };
    itemLabels: unknown extends Defaults["itemLabels"] ? Prop<string[]> : {
        type: import("vue").PropType<unknown extends Defaults["itemLabels"] ? string[] : string[] | Defaults["itemLabels"]>;
        default: unknown extends Defaults["itemLabels"] ? string[] : string[] | Defaults["itemLabels"];
    };
    itemLabelPosition: unknown extends Defaults["itemLabelPosition"] ? {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemLabelPosition"] ? string : string | Defaults["itemLabelPosition"]>;
        default: unknown extends Defaults["itemLabelPosition"] ? string : string | Defaults["itemLabelPosition"];
    };
    ripple: unknown extends Defaults["ripple"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"]>;
        default: unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"];
    };
};
export declare const VRating: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        length: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        ripple: boolean;
        clearable: boolean;
        hover: boolean;
        itemAriaLabel: string;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        itemLabelPosition: string;
    } & {
        name?: string | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        activeColor?: string | undefined;
        itemLabels?: string[] | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            'item-label'?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            'item-label'?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number | string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        length: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        ripple: boolean;
        clearable: boolean;
        hover: boolean;
        itemAriaLabel: string;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        itemLabelPosition: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        item: (arg: VRatingItemSlot) => import("vue").VNode[];
        'item-label': (arg: VRatingItemLabelSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        length: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        ripple: boolean;
        clearable: boolean;
        hover: boolean;
        itemAriaLabel: string;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        itemLabelPosition: string;
    } & {
        name?: string | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        activeColor?: string | undefined;
        itemLabels?: string[] | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            'item-label'?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
            'item-label'?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    }, {}, {}, {}, {}, {
        length: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        ripple: boolean;
        clearable: boolean;
        hover: boolean;
        itemAriaLabel: string;
        emptyIcon: IconValue;
        fullIcon: IconValue;
        halfIncrements: boolean;
        itemLabelPosition: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    length: string | number;
    style: import("vue").StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: string | number;
    density: import("../../composables/density.js").Density;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    itemAriaLabel: string;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    itemLabelPosition: string;
} & {
    name?: string | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    activeColor?: string | undefined;
    itemLabels?: string[] | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        item?: ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        'item-label'?: ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        item?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
        'item-label'?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: VRatingItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:item-label"?: false | ((arg: VRatingItemLabelSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number | string) => true;
}, string, {
    length: string | number;
    style: import("vue").StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: string | number;
    density: import("../../composables/density.js").Density;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    itemAriaLabel: string;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    halfIncrements: boolean;
    itemLabelPosition: string;
}, {}, string, import("vue").SlotsType<Partial<{
    item: (arg: VRatingItemSlot) => import("vue").VNode[];
    'item-label': (arg: VRatingItemLabelSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}>>;
export type VRating = InstanceType<typeof VRating>;

