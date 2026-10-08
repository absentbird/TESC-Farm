import { IconValue } from "../../composables/icons.js";
type ItemSlot = {
    isActive: boolean;
    key: string | number;
    page: string;
    props: Record<string, any>;
};
type ControlSlot = {
    icon: IconValue;
    onClick: (e: Event) => void;
    disabled: boolean;
    'aria-label': string;
    'aria-disabled': boolean;
};
export type VPaginationSlots = {
    item: ItemSlot;
    first: ControlSlot;
    prev: ControlSlot;
    next: ControlSlot;
    last: ControlSlot;
};
export declare const makeVPaginationProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    activeColor?: unknown;
    start?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    length?: unknown;
    totalVisible?: unknown;
    firstIcon?: unknown;
    prevIcon?: unknown;
    nextIcon?: unknown;
    lastIcon?: unknown;
    ariaLabel?: unknown;
    pageAriaLabel?: unknown;
    currentPageAriaLabel?: unknown;
    firstAriaLabel?: unknown;
    previousAriaLabel?: unknown;
    nextAriaLabel?: unknown;
    lastAriaLabel?: unknown;
    ellipsis?: unknown;
    showFirstLastPage?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
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
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    start: unknown extends Defaults["start"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["start"] ? string | number : string | number | Defaults["start"]>;
        default: unknown extends Defaults["start"] ? string | number : NonNullable<string | number> | Defaults["start"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        default: (props: any) => number;
    } : Omit<{
        type: NumberConstructor;
        default: (props: any) => number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    length: unknown extends Defaults["length"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : NonNullable<string | number> | Defaults["length"];
    };
    totalVisible: unknown extends Defaults["totalVisible"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["totalVisible"] ? string | number : string | number | Defaults["totalVisible"]>;
        default: unknown extends Defaults["totalVisible"] ? string | number : NonNullable<string | number> | Defaults["totalVisible"];
    };
    firstIcon: unknown extends Defaults["firstIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["firstIcon"] ? IconValue : IconValue | Defaults["firstIcon"]>;
        default: unknown extends Defaults["firstIcon"] ? IconValue : NonNullable<IconValue> | Defaults["firstIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["prevIcon"] ? IconValue : IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prevIcon"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextIcon"] ? IconValue : IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : NonNullable<IconValue> | Defaults["nextIcon"];
    };
    lastIcon: unknown extends Defaults["lastIcon"] ? {
        type: import("vue").PropType<IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lastIcon"] ? IconValue : IconValue | Defaults["lastIcon"]>;
        default: unknown extends Defaults["lastIcon"] ? IconValue : NonNullable<IconValue> | Defaults["lastIcon"];
    };
    ariaLabel: unknown extends Defaults["ariaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ariaLabel"] ? string : string | Defaults["ariaLabel"]>;
        default: unknown extends Defaults["ariaLabel"] ? string : string | Defaults["ariaLabel"];
    };
    pageAriaLabel: unknown extends Defaults["pageAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["pageAriaLabel"] ? string : string | Defaults["pageAriaLabel"]>;
        default: unknown extends Defaults["pageAriaLabel"] ? string : string | Defaults["pageAriaLabel"];
    };
    currentPageAriaLabel: unknown extends Defaults["currentPageAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["currentPageAriaLabel"] ? string : string | Defaults["currentPageAriaLabel"]>;
        default: unknown extends Defaults["currentPageAriaLabel"] ? string : string | Defaults["currentPageAriaLabel"];
    };
    firstAriaLabel: unknown extends Defaults["firstAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["firstAriaLabel"] ? string : string | Defaults["firstAriaLabel"]>;
        default: unknown extends Defaults["firstAriaLabel"] ? string : string | Defaults["firstAriaLabel"];
    };
    previousAriaLabel: unknown extends Defaults["previousAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["previousAriaLabel"] ? string : string | Defaults["previousAriaLabel"]>;
        default: unknown extends Defaults["previousAriaLabel"] ? string : string | Defaults["previousAriaLabel"];
    };
    nextAriaLabel: unknown extends Defaults["nextAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextAriaLabel"] ? string : string | Defaults["nextAriaLabel"]>;
        default: unknown extends Defaults["nextAriaLabel"] ? string : string | Defaults["nextAriaLabel"];
    };
    lastAriaLabel: unknown extends Defaults["lastAriaLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lastAriaLabel"] ? string : string | Defaults["lastAriaLabel"]>;
        default: unknown extends Defaults["lastAriaLabel"] ? string : string | Defaults["lastAriaLabel"];
    };
    ellipsis: unknown extends Defaults["ellipsis"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ellipsis"] ? string : string | Defaults["ellipsis"]>;
        default: unknown extends Defaults["ellipsis"] ? string : string | Defaults["ellipsis"];
    };
    showFirstLastPage: unknown extends Defaults["showFirstLastPage"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showFirstLastPage"] ? boolean : boolean | Defaults["showFirstLastPage"]>;
        default: unknown extends Defaults["showFirstLastPage"] ? boolean : boolean | Defaults["showFirstLastPage"];
    };
};
export declare const VPagination: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        length: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        start: string | number;
        style: import("vue").StyleValue;
        ariaLabel: string;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        ellipsis: string;
        modelValue: number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number) => true;
        first: (value: number) => true;
        prev: (value: number) => true;
        next: (value: number) => true;
        last: (value: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        length: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        start: string | number;
        style: import("vue").StyleValue;
        ariaLabel: string;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        ellipsis: string;
        modelValue: number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        item: (arg: ItemSlot) => import("vue").VNode[];
        first: (arg: ControlSlot) => import("vue").VNode[];
        prev: (arg: ControlSlot) => import("vue").VNode[];
        next: (arg: ControlSlot) => import("vue").VNode[];
        last: (arg: ControlSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        length: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        start: string | number;
        style: import("vue").StyleValue;
        ariaLabel: string;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        ellipsis: string;
        modelValue: number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        activeColor?: string | undefined;
        totalVisible?: string | number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
            first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
            last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
        onNext?: ((value: number) => any) | undefined;
        onPrev?: ((value: number) => any) | undefined;
        onFirst?: ((value: number) => any) | undefined;
        onLast?: ((value: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        length: string | number;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        start: string | number;
        style: import("vue").StyleValue;
        ariaLabel: string;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        ellipsis: string;
        modelValue: number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        nextIcon: IconValue;
        prevIcon: IconValue;
        firstIcon: IconValue;
        lastIcon: IconValue;
        pageAriaLabel: string;
        currentPageAriaLabel: string;
        firstAriaLabel: string;
        previousAriaLabel: string;
        nextAriaLabel: string;
        lastAriaLabel: string;
        showFirstLastPage: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    length: string | number;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    start: string | number;
    style: import("vue").StyleValue;
    ariaLabel: string;
    disabled: boolean;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    ellipsis: string;
    modelValue: number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
} & {
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    activeColor?: string | undefined;
    totalVisible?: string | number | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        item?: ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        first?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        prev?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        next?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        last?: ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        item?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
        first?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        prev?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
        last?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:item"?: false | ((arg: ItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:first"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:last"?: false | ((arg: ControlSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    onNext?: ((value: number) => any) | undefined;
    onPrev?: ((value: number) => any) | undefined;
    onFirst?: ((value: number) => any) | undefined;
    onLast?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
    first: (value: number) => true;
    prev: (value: number) => true;
    next: (value: number) => true;
    last: (value: number) => true;
}, string, {
    length: string | number;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    start: string | number;
    style: import("vue").StyleValue;
    ariaLabel: string;
    disabled: boolean;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    ellipsis: string;
    modelValue: number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
    firstIcon: IconValue;
    lastIcon: IconValue;
    pageAriaLabel: string;
    currentPageAriaLabel: string;
    firstAriaLabel: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
    lastAriaLabel: string;
    showFirstLastPage: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    item: (arg: ItemSlot) => import("vue").VNode[];
    first: (arg: ControlSlot) => import("vue").VNode[];
    prev: (arg: ControlSlot) => import("vue").VNode[];
    next: (arg: ControlSlot) => import("vue").VNode[];
    last: (arg: ControlSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
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
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeColor: StringConstructor;
    start: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: (props: any) => number;
    };
    disabled: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
    totalVisible: (StringConstructor | NumberConstructor)[];
    firstIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    nextIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    lastIcon: {
        type: import("vue").PropType<IconValue>;
        default: string;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    pageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    currentPageAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    firstAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    previousAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    nextAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    lastAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    ellipsis: {
        type: StringConstructor;
        default: string;
    };
    showFirstLastPage: BooleanConstructor;
}>>;
export type VPagination = InstanceType<typeof VPagination>;

