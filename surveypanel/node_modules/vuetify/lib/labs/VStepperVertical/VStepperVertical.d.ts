import type { StepperVerticalItemActionSlot } from './VStepperVerticalItem.js';
import type { VStepperSlot } from "../../components/VStepper/VStepper.js";
import type { StepperItemSlot } from "../../components/VStepper/VStepperItem.js";
import type { GenericProps } from "../../util/index.js";
export type VStepperVerticalSlots<T> = {
    actions: StepperVerticalItemActionSlot<T>;
    default: VStepperSlot & {
        step: T;
    };
    icon: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
    prev: StepperVerticalItemActionSlot<T>;
    next: StepperVerticalItemActionSlot<T>;
} & {
    [key: `header-item.${string}`]: StepperItemSlot<T>;
    [key: `item.${string}`]: StepperItemSlot<T>;
};
export declare const makeVStepperVerticalProps: <Defaults extends {
    flat?: unknown;
    variant?: unknown;
    max?: unknown;
    color?: unknown;
    style?: unknown;
    eager?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    readonly?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    mandatory?: unknown;
    elevation?: unknown;
    focusable?: unknown;
    modelValue?: unknown;
    rounded?: unknown;
    tile?: unknown;
    selectedClass?: unknown;
    bgColor?: unknown;
    ripple?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    hideActions?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    altLabels?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    nonLinear?: unknown;
    prevText?: unknown;
    nextText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    } : Omit<Omit<{
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "default" | "inset" | "accordion" | "popout" : "default" | "inset" | "accordion" | "popout" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "default" | "inset" | "accordion" | "popout" : NonNullable<"default" | "inset" | "accordion" | "popout"> | Defaults["variant"];
    };
    max: unknown extends Defaults["max"] ? NumberConstructor : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
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
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: import("vue").PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    } : Omit<{
        type: import("vue").PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["mandatory"] ? boolean | "force" : boolean | "force" | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean | "force" : NonNullable<boolean | "force"> | Defaults["mandatory"];
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
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: null;
        default: undefined;
    } : Omit<{
        type: null;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
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
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
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
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["expandIcon"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? import("vue").PropType<number | import("../../types.js").DisplayBreakpoint> : {
        type: import("vue").PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : number | import("../../types.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../types.js").DisplayBreakpoint : NonNullable<number | import("../../types.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["completeIcon"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["editIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["errorIcon"];
    };
    items: unknown extends Defaults["items"] ? {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["items"] ? readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] : readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] : readonly import("../../components/VStepper/VStepperItem.js").StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
    };
};
export declare const VStepperVertical: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        focusable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemValue: string;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: import("../../composables/icons.js").IconValue | undefined;
        editIcon?: import("../../composables/icons.js").IconValue | undefined;
        errorIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (val: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:title" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | `v-slot:item.${string}` | "v-slot:icon" | `v-slot:header-item.${string}`>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        focusable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemValue: string;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header-item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
        [x: `item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
        actions: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
        default: (arg: VStepperSlot & {
            step: unknown;
        }) => import("vue").VNode[];
        icon: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
        title: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
        subtitle: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
        prev: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
        next: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
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
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        focusable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemValue: string;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        completeIcon?: import("../../composables/icons.js").IconValue | undefined;
        editIcon?: import("../../composables/icons.js").IconValue | undefined;
        errorIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {}, {}, {}, {}, {}, {
        flat: boolean;
        variant: "default" | "inset" | "accordion" | "popout";
        style: import("vue").StyleValue;
        eager: boolean;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        focusable: boolean;
        items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
        itemValue: string;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    variant: "default" | "inset" | "accordion" | "popout";
    style: import("vue").StyleValue;
    eager: boolean;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    focusable: boolean;
    items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
    itemValue: string;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    itemTitle: string;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    max?: number | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    mobileBreakpoint?: number | import("../../types.js").DisplayBreakpoint | undefined;
    rounded?: string | number | boolean | undefined;
    selectedClass?: string | undefined;
    bgColor?: string | undefined;
    completeIcon?: import("../../composables/icons.js").IconValue | undefined;
    editIcon?: import("../../composables/icons.js").IconValue | undefined;
    errorIcon?: import("../../composables/icons.js").IconValue | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:title" | "v-slot:next" | "v-slot:prev" | "v-slot:subtitle" | `v-slot:item.${string}` | "v-slot:icon" | `v-slot:header-item.${string}`>, string, {
    flat: boolean;
    variant: "default" | "inset" | "accordion" | "popout";
    style: import("vue").StyleValue;
    eager: boolean;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    focusable: boolean;
    items: readonly import("../../components/VStepper/VStepperItem.js").StepperItem[];
    itemValue: string;
    rounded: string | number | boolean;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    itemTitle: string;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
    [x: `item.${string}`]: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
    actions: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
    default: (arg: VStepperSlot & {
        step: unknown;
    }) => import("vue").VNode[];
    icon: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
    title: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
    subtitle: (arg: StepperItemSlot<unknown>) => import("vue").VNode[];
    prev: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
    next: (arg: StepperVerticalItemActionSlot<unknown>) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T = number>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
}, slots: VStepperVerticalSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    };
    max: NumberConstructor;
    color: StringConstructor;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    multiple: BooleanConstructor;
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    mandatory: {
        type: import("vue").PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    focusable: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    completeIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editable: BooleanConstructor;
    errorIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    items: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"default" | "inset" | "accordion" | "popout">;
        default: NonNullable<"default" | "inset" | "accordion" | "popout">;
    };
    max: NumberConstructor;
    color: StringConstructor;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    multiple: BooleanConstructor;
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    mandatory: {
        type: import("vue").PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    focusable: BooleanConstructor;
    modelValue: {
        type: null;
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    expandIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    mobile: {
        type: import("vue").PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: import("vue").PropType<number | import("../../types.js").DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    completeIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    editable: BooleanConstructor;
    errorIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    items: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").StepperItem[]>;
        default: () => never[];
    };
    itemTitle: {
        type: StringConstructor;
        default: string;
    };
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    nonLinear: BooleanConstructor;
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VStepperVertical = InstanceType<typeof VStepperVertical>;
