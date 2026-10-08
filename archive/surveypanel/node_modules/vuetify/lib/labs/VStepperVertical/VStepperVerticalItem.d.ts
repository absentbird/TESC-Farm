import type { StepperItemSlot } from "../../components/VStepper/VStepperItem.js";
export type StepperVerticalItemActionSlot<T = any> = StepperItemSlot<T> & {
    next: () => void;
    prev: () => void;
};
export type VStepperVerticalItemSlots<T = any> = {
    default: StepperItemSlot<T>;
    icon: StepperItemSlot<T>;
    subtitle: StepperItemSlot<T>;
    title: StepperItemSlot<T>;
    text: StepperItemSlot<T>;
    prev: StepperVerticalItemActionSlot<T>;
    next: StepperVerticalItemActionSlot<T>;
    actions: StepperVerticalItemActionSlot<T>;
};
export declare const makeVStepperVerticalItemProps: <Defaults extends {
    height?: unknown;
    width?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    value?: unknown;
    style?: unknown;
    title?: unknown;
    text?: unknown;
    eager?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    class?: unknown;
    tag?: unknown;
    static?: unknown;
    elevation?: unknown;
    focusable?: unknown;
    rounded?: unknown;
    tile?: unknown;
    selectedClass?: unknown;
    bgColor?: unknown;
    ripple?: unknown;
    collapseIcon?: unknown;
    expandIcon?: unknown;
    subtitle?: unknown;
    complete?: unknown;
    completeIcon?: unknown;
    editable?: unknown;
    editIcon?: unknown;
    error?: unknown;
    errorIcon?: unknown;
    icon?: unknown;
    rules?: unknown;
    hideActions?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
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
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
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
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
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
    collapseIcon: unknown extends Defaults["collapseIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["collapseIcon"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["expandIcon"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    complete: unknown extends Defaults["complete"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"]>;
        default: unknown extends Defaults["complete"] ? boolean : boolean | Defaults["complete"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["completeIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["editIcon"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["errorIcon"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["icon"];
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] : readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] : readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[] | Defaults["rules"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
};
export declare const VStepperVerticalItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        error: boolean;
        complete: boolean;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        errorIcon: import("../../composables/icons.js").IconValue;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | undefined;
        text?: string | undefined;
        class?: any;
        icon?: import("../../composables/icons.js").IconValue | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:finish"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:next': () => true;
        'click:prev': () => true;
        'click:finish': () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        error: boolean;
        complete: boolean;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        errorIcon: import("../../composables/icons.js").IconValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        icon: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        title: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        text: (arg: StepperItemSlot<any>) => import("vue").VNode[];
        prev: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
        next: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
        actions: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
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
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        errorIcon: import("../../composables/icons.js").IconValue;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | undefined;
        text?: string | undefined;
        class?: any;
        icon?: import("../../composables/icons.js").IconValue | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        bgColor?: string | undefined;
        subtitle?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
            default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
            prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:finish"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        error: boolean;
        complete: boolean;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        static: boolean;
        focusable: boolean;
        rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: import("../../composables/icons.js").IconValue;
        expandIcon: import("../../composables/icons.js").IconValue;
        hideActions: boolean;
        completeIcon: import("../../composables/icons.js").IconValue;
        editable: boolean;
        editIcon: import("../../composables/icons.js").IconValue;
        errorIcon: import("../../composables/icons.js").IconValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    error: boolean;
    complete: boolean;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    static: boolean;
    focusable: boolean;
    rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    completeIcon: import("../../composables/icons.js").IconValue;
    editable: boolean;
    editIcon: import("../../composables/icons.js").IconValue;
    errorIcon: import("../../composables/icons.js").IconValue;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    title?: string | undefined;
    text?: string | undefined;
    class?: any;
    icon?: import("../../composables/icons.js").IconValue | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    selectedClass?: string | undefined;
    bgColor?: string | undefined;
    subtitle?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | {
        default?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        text?: ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        prev?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        next?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        text?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
        prev?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | ((arg: StepperItemSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: StepperVerticalItemActionSlot<any>) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:finish"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:next': () => true;
    'click:prev': () => true;
    'click:finish': () => true;
}, string, {
    error: boolean;
    complete: boolean;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    static: boolean;
    focusable: boolean;
    rules: readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[];
    rounded: string | number | boolean;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: import("../../composables/icons.js").IconValue;
    expandIcon: import("../../composables/icons.js").IconValue;
    hideActions: boolean;
    completeIcon: import("../../composables/icons.js").IconValue;
    editable: boolean;
    editIcon: import("../../composables/icons.js").IconValue;
    errorIcon: import("../../composables/icons.js").IconValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    icon: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    subtitle: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    title: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    text: (arg: StepperItemSlot<any>) => import("vue").VNode[];
    prev: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
    next: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
    actions: (arg: StepperVerticalItemActionSlot<any>) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    value: null;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    icon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    rules: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    value: null;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    title: StringConstructor;
    text: StringConstructor;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    selectedClass: StringConstructor;
    bgColor: StringConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    collapseIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    expandIcon: Omit<{
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    subtitle: StringConstructor;
    complete: BooleanConstructor;
    completeIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    editable: BooleanConstructor;
    editIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    error: BooleanConstructor;
    errorIcon: {
        type: import("vue").PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    icon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    rules: {
        type: import("vue").PropType<readonly import("../../components/VStepper/VStepperItem.js").ValidationRule[]>;
        default: () => never[];
    };
    hideActions: BooleanConstructor;
}>>;
export type VStepperVerticalItem = InstanceType<typeof VStepperVerticalItem>;
