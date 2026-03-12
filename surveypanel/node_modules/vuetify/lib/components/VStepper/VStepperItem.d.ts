import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
export type StepperItem = string | Record<string, any>;
export type StepperItemSlot<T = any> = {
    canEdit: boolean;
    hasError: boolean;
    hasCompleted: boolean;
    title?: string | number;
    subtitle?: string | number;
    step: T;
};
export type VStepperItemSlots<T = any> = {
    default: StepperItemSlot<T>;
    icon: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
};
export type ValidationRule = () => string | boolean;
export declare const makeStepperItemProps: <Defaults extends {
    color?: unknown;
    title?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    ripple?: unknown;
    rules?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["completeIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? IconValue : NonNullable<IconValue> | Defaults["editIcon"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : NonNullable<IconValue> | Defaults["errorIcon"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"];
    };
};
export declare const makeVStepperItemProps: <Defaults extends {
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    color?: unknown;
    title?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    ripple?: unknown;
    rules?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["completeIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? IconValue : NonNullable<IconValue> | Defaults["editIcon"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : NonNullable<IconValue> | Defaults["errorIcon"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly ValidationRule[] : readonly ValidationRule[] | Defaults["rules"];
    };
};
export declare const VStepperItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        error: boolean;
        complete: boolean;
        disabled: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        errorIcon: IconValue;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        icon?: IconValue | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        error: boolean;
        complete: boolean;
        disabled: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        errorIcon: IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        icon: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        title: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        error: boolean;
        complete: boolean;
        disabled: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        errorIcon: IconValue;
    } & {
        color?: string | undefined;
        value?: any;
        title?: string | undefined;
        icon?: IconValue | undefined;
        selectedClass?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {}, {}, {}, {}, {
        error: boolean;
        complete: boolean;
        disabled: boolean;
        rules: readonly ValidationRule[];
        ripple: boolean | {
            class: string;
        } | undefined;
        completeIcon: IconValue;
        editable: boolean;
        editIcon: IconValue;
        errorIcon: IconValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    error: boolean;
    complete: boolean;
    disabled: boolean;
    rules: readonly ValidationRule[];
    ripple: boolean | {
        class: string;
    } | undefined;
    completeIcon: IconValue;
    editable: boolean;
    editIcon: IconValue;
    errorIcon: IconValue;
} & {
    color?: string | undefined;
    value?: any;
    title?: string | undefined;
    icon?: IconValue | undefined;
    selectedClass?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
        default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    error: boolean;
    complete: boolean;
    disabled: boolean;
    rules: readonly ValidationRule[];
    ripple: boolean | {
        class: string;
    } | undefined;
    completeIcon: IconValue;
    editable: boolean;
    editIcon: IconValue;
    errorIcon: IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    icon: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    title: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    icon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    color: StringConstructor;
    title: StringConstructor;
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    icon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
}>>;
export type VStepperItem = InstanceType<typeof VStepperItem>;
