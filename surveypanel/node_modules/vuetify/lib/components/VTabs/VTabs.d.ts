import type { PropType } from 'vue';
import type { GenericProps } from "../../util/index.js";
export type TabItem = string | number | Record<string, any>;
export type VTabsSlot<T> = {
    item: T;
};
export type VTabsSlots<T> = {
    default: never;
    tab: VTabsSlot<T>;
    item: VTabsSlot<T>;
    window: never;
} & {
    [key: `tab.${string}`]: VTabsSlot<T>;
    [key: `item.${string}`]: VTabsSlot<T>;
};
export declare const makeVTabsProps: <Defaults extends {
    tag?: unknown;
    density?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    class?: unknown;
    style?: unknown;
    centerActive?: unknown;
    direction?: unknown;
    symbol?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    showArrows?: unknown;
    alignTabs?: unknown;
    color?: unknown;
    fixedTabs?: unknown;
    items?: unknown;
    stacked?: unknown;
    bgColor?: unknown;
    grow?: unknown;
    height?: unknown;
    hideSlider?: unknown;
    sliderColor?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    } : Omit<{
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean | "force" : boolean | "force" | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean | "force" : NonNullable<boolean | "force"> | Defaults["mandatory"];
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    } : Omit<Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    mobile: unknown extends Defaults["mobile"] ? Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    } : Omit<Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | import("../../types.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : NonNullable<number | import("../../types.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
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
    centerActive: unknown extends Defaults["centerActive"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"]>;
        default: unknown extends Defaults["centerActive"] ? boolean : boolean | Defaults["centerActive"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    symbol: unknown extends Defaults["symbol"] ? {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    } : Omit<{
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["nextIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prevIcon"];
    };
    showArrows: unknown extends Defaults["showArrows"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : NonNullable<string | boolean> | Defaults["showArrows"];
    };
    alignTabs: unknown extends Defaults["alignTabs"] ? {
        type: PropType<"start" | "title" | "center" | "end">;
        default: string;
    } : Omit<{
        type: PropType<"start" | "title" | "center" | "end">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["alignTabs"] ? "center" | "end" | "start" | "title" : "center" | "end" | "start" | "title" | Defaults["alignTabs"]>;
        default: unknown extends Defaults["alignTabs"] ? "center" | "end" | "start" | "title" : Defaults["alignTabs"] | NonNullable<"center" | "end" | "start" | "title">;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    fixedTabs: unknown extends Defaults["fixedTabs"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fixedTabs"] ? boolean : boolean | Defaults["fixedTabs"]>;
        default: unknown extends Defaults["fixedTabs"] ? boolean : boolean | Defaults["fixedTabs"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly TabItem[] : readonly TabItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly TabItem[] : readonly TabItem[] | Defaults["items"];
    };
    stacked: unknown extends Defaults["stacked"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"]>;
        default: unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    grow: unknown extends Defaults["grow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"]>;
        default: unknown extends Defaults["grow"] ? boolean : boolean | Defaults["grow"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    hideSlider: unknown extends Defaults["hideSlider"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSlider"] ? boolean : boolean | Defaults["hideSlider"]>;
        default: unknown extends Defaults["hideSlider"] ? boolean : boolean | Defaults["hideSlider"];
    };
    sliderColor: unknown extends Defaults["sliderColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["sliderColor"] ? string : string | Defaults["sliderColor"]>;
        default: unknown extends Defaults["sliderColor"] ? string : string | Defaults["sliderColor"];
    };
};
export declare const VTabs: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        symbol: any;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        density: import("../../composables/density.js").Density;
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
    } & {
        max?: number | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (v: unknown) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:item" | `v-slot:item.${string}` | "v-slot:window" | "v-slot:tab" | `v-slot:tab.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        symbol: any;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        modelValue: any;
        density: import("../../composables/density.js").Density;
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `tab.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
        [x: `item.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        tab: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
        item: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
        window: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        symbol: any;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        density: import("../../composables/density.js").Density;
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
    } & {
        max?: number | undefined;
        height?: string | number | undefined;
        color?: string | undefined;
        class?: any;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        modelValue?: any;
        bgColor?: string | undefined;
        showArrows?: string | boolean | undefined;
        sliderColor?: string | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {}, {}, {}, {}, {
        symbol: any;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        modelValue: any;
        density: import("../../composables/density.js").Density;
        selectedClass: string;
        stacked: boolean;
        centerActive: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        grow: boolean;
        hideSlider: boolean;
        alignTabs: "center" | "end" | "start" | "title";
        fixedTabs: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    symbol: any;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    density: import("../../composables/density.js").Density;
    selectedClass: string;
    stacked: boolean;
    centerActive: boolean;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    grow: boolean;
    hideSlider: boolean;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
} & {
    max?: number | undefined;
    height?: string | number | undefined;
    color?: string | undefined;
    class?: any;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    modelValue?: any;
    bgColor?: string | undefined;
    showArrows?: string | boolean | undefined;
    sliderColor?: string | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (v: unknown) => true;
}, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:item" | `v-slot:item.${string}` | "v-slot:window" | "v-slot:tab" | `v-slot:tab.${string}`>, string, {
    symbol: any;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    modelValue: any;
    density: import("../../composables/density.js").Density;
    selectedClass: string;
    stacked: boolean;
    centerActive: boolean;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    grow: boolean;
    hideSlider: boolean;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `tab.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
    [x: `item.${string}`]: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    tab: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
    item: (arg: VTabsSlot<unknown>) => import("vue").VNode[];
    window: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T = TabItem>(props: {
    items?: T[];
}, slots: VTabsSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"start" | "title" | "center" | "end">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}, import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    max: NumberConstructor;
    selectedClass: Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../types.js").DisplayBreakpoint>;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"start" | "title" | "center" | "end">;
        default: string;
    };
    color: StringConstructor;
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<readonly TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
}>>;
export type VTabs = InstanceType<typeof VTabs>;
