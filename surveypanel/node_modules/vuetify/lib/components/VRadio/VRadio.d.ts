export declare const makeVRadioProps: <Defaults extends {
    theme?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    disabled?: unknown;
    defaultsTarget?: unknown;
    error?: unknown;
    id?: unknown;
    inline?: unknown;
    falseIcon?: unknown;
    trueIcon?: unknown;
    ripple?: unknown;
    multiple?: unknown;
    name?: unknown;
    readonly?: unknown;
    modelValue?: unknown;
    type?: unknown;
    valueComparator?: unknown;
    label?: unknown;
    baseColor?: unknown;
    trueValue?: unknown;
    falseValue?: unknown;
    value?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    defaultsTarget: unknown extends Defaults["defaultsTarget"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"]>;
        default: unknown extends Defaults["defaultsTarget"] ? string : string | Defaults["defaultsTarget"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    falseIcon: unknown extends Defaults["falseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["falseIcon"]>;
        default: unknown extends Defaults["falseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["falseIcon"];
    };
    trueIcon: unknown extends Defaults["trueIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["trueIcon"]>;
        default: unknown extends Defaults["trueIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["trueIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean | {
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
    multiple: unknown extends Defaults["multiple"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? boolean | null : boolean | Defaults["multiple"] | null>;
        default: unknown extends Defaults["multiple"] ? boolean | null : NonNullable<boolean | null> | Defaults["multiple"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    type: unknown extends Defaults["type"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    } : Omit<{
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof import("../../util/index.js").deepEqual : typeof import("../../util/index.js").deepEqual | Defaults["valueComparator"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    trueValue: unknown extends Defaults["trueValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["trueValue"] ? any : any>;
        default: unknown extends Defaults["trueValue"] ? any : any;
    };
    falseValue: unknown extends Defaults["falseValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["falseValue"] ? any : any>;
        default: unknown extends Defaults["falseValue"] ? any : any;
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
};
export declare const VRadio: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: import("../../composables/icons.js").IconValue;
        trueIcon: import("../../composables/icons.js").IconValue;
    } & {
        name?: string | undefined;
        type?: string | undefined;
        id?: string | undefined;
        color?: string | undefined;
        value?: any;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
        baseColor?: string | undefined;
        defaultsTarget?: string | undefined;
        trueValue?: any;
        falseValue?: any;
    } & {
        $children?: import("vue").VNodeChild | ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | {
            default?: ((arg: {
                backgroundColorClasses: import("vue").Ref<string[]>;
                backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            input?: ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: {
                backgroundColorClasses: import("vue").Ref<string[]>;
                backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: import("../../composables/icons.js").IconValue;
        trueIcon: import("../../composables/icons.js").IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNode[];
        label: (arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        input: (arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: import("../../composables/icons.js").IconValue;
        trueIcon: import("../../composables/icons.js").IconValue;
    } & {
        name?: string | undefined;
        type?: string | undefined;
        id?: string | undefined;
        color?: string | undefined;
        value?: any;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
        baseColor?: string | undefined;
        defaultsTarget?: string | undefined;
        trueValue?: any;
        falseValue?: any;
    } & {
        $children?: import("vue").VNodeChild | ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | {
            default?: ((arg: {
                backgroundColorClasses: import("vue").Ref<string[]>;
                backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            input?: ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: {
                backgroundColorClasses: import("vue").Ref<string[]>;
                backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        inline: boolean;
        error: boolean;
        style: import("vue").StyleValue;
        disabled: boolean | null;
        multiple: boolean | null;
        readonly: boolean | null;
        valueComparator: typeof import("../../util/index.js").deepEqual;
        density: import("../../composables/density.js").Density;
        ripple: boolean | {
            class: string;
        } | undefined;
        falseIcon: import("../../composables/icons.js").IconValue;
        trueIcon: import("../../composables/icons.js").IconValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    error: boolean;
    style: import("vue").StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    falseIcon: import("../../composables/icons.js").IconValue;
    trueIcon: import("../../composables/icons.js").IconValue;
} & {
    name?: string | undefined;
    type?: string | undefined;
    id?: string | undefined;
    color?: string | undefined;
    value?: any;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    modelValue?: any;
    baseColor?: string | undefined;
    defaultsTarget?: string | undefined;
    trueValue?: any;
    falseValue?: any;
} & {
    $children?: import("vue").VNodeChild | ((arg: {
        backgroundColorClasses: import("vue").Ref<string[]>;
        backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
    }) => import("vue").VNodeChild) | {
        default?: ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | undefined;
        label?: ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        input?: ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: {
            backgroundColorClasses: import("vue").Ref<string[]>;
            backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
        }) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => import("vue").VNodeChild) | undefined;
        input?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        backgroundColorClasses: import("vue").Ref<string[]>;
        backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | ((arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    error: boolean;
    style: import("vue").StyleValue;
    disabled: boolean | null;
    multiple: boolean | null;
    readonly: boolean | null;
    valueComparator: typeof import("../../util/index.js").deepEqual;
    density: import("../../composables/density.js").Density;
    ripple: boolean | {
        class: string;
    } | undefined;
    falseIcon: import("../../composables/icons.js").IconValue;
    trueIcon: import("../../composables/icons.js").IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        backgroundColorClasses: import("vue").Ref<string[]>;
        backgroundColorStyles: import("vue").Ref<import("vue").CSSProperties>;
    }) => import("vue").VNode[];
    label: (arg: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    input: (arg: import("../VSelectionControl/VSelectionControl.js").SelectionControlSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
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
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    trueIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    multiple: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    label: StringConstructor;
    baseColor: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
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
    color: StringConstructor;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    trueIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    multiple: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: import("vue").PropType<typeof import("../../util/index.js").deepEqual>;
        default: typeof import("../../util/index.js").deepEqual;
    };
    label: StringConstructor;
    baseColor: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
}>>;
export type VRadio = InstanceType<typeof VRadio>;
