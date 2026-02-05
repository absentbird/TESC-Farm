import type { PropType } from 'vue';
declare const allowedVariants: readonly ["default", "accordion", "inset", "popout"];
type Variant = typeof allowedVariants[number];
export type VExpansionPanelSlot = {
    prev: () => void;
    next: () => void;
};
export type VExpansionPanelSlots = {
    default: VExpansionPanelSlot;
};
export declare const makeVExpansionPanelsProps: <Defaults extends {
    variant?: unknown;
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    theme?: unknown;
    color?: unknown;
    eager?: unknown;
    readonly?: unknown;
    static?: unknown;
    elevation?: unknown;
    focusable?: unknown;
    rounded?: unknown;
    tile?: unknown;
    bgColor?: unknown;
    ripple?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    hideActions?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    flat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "default" | "inset" | "accordion" | "popout" : "default" | "inset" | "accordion" | "popout" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "default" | "inset" | "accordion" | "popout" : NonNullable<"default" | "inset" | "accordion" | "popout"> | Defaults["variant"];
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
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
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
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
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
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : boolean | {
            class: string;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : NonNullable<boolean | {
            class: string;
        } | undefined> | Defaults["ripple"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["expandIcon"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
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
    mandatory: unknown extends Defaults["mandatory"] ? PropType<boolean | "force"> : {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean | "force" : boolean | "force" | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean | "force" : NonNullable<boolean | "force"> | Defaults["mandatory"];
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
};
export declare const VExpansionPanels: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
    } & {
        max?: number | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        mandatory?: boolean | "force" | undefined;
        elevation?: string | number | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
    }, {
        next: () => void;
        prev: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (val: unknown) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        modelValue: any;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VExpansionPanelSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
    } & {
        max?: number | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        mandatory?: boolean | "force" | undefined;
        elevation?: string | number | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
    }, {
        next: () => void;
        prev: () => void;
    }, {}, {}, {}, {
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        modelValue: any;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    variant: "default" | "inset" | "accordion" | "popout";
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    static: boolean;
    focusable: boolean;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
} & {
    max?: number | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    mandatory?: boolean | "force" | undefined;
    elevation?: string | number | undefined;
    modelValue?: any;
    rounded?: string | number | boolean | undefined;
    selectedClass?: string | undefined;
    bgColor?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
    } | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VExpansionPanelSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: unknown) => any) | undefined;
}, {
    next: () => void;
    prev: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: unknown) => true;
}, string, {
    flat: boolean;
    variant: "default" | "inset" | "accordion" | "popout";
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    static: boolean;
    focusable: boolean;
    modelValue: any;
    rounded: string | number | boolean;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VExpansionPanelSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    variant: {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    theme: StringConstructor;
    color: StringConstructor;
    eager: BooleanConstructor;
    readonly: BooleanConstructor;
    static: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    focusable: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    variant: {
        type: PropType<Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    theme: StringConstructor;
    color: StringConstructor;
    eager: BooleanConstructor;
    readonly: BooleanConstructor;
    static: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    focusable: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: StringConstructor;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
}>>;
export type VExpansionPanels = InstanceType<typeof VExpansionPanels>;

