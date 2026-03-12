import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { StepperItem, StepperItemSlot } from './VStepperItem.js';
export type VStepperSlot = {
    prev: () => void;
    next: () => void;
};
export type VStepperSlots = {
    actions: VStepperSlot;
    default: VStepperSlot;
    header: StepperItem;
    'header-item': StepperItemSlot;
    icon: StepperItemSlot;
    title: StepperItemSlot;
    subtitle: StepperItemSlot;
    item: StepperItem;
    prev: never;
    next: never;
} & {
    [key: `header-item.${string}`]: StepperItemSlot;
    [key: `item.${string}`]: StepperItem;
};
export declare const makeStepperProps: <Defaults extends {
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    altLabels?: unknown;
    bgColor?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    hideActions?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    nonLinear?: unknown;
    flat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../composables/display.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : number | import("../../composables/display.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : NonNullable<number | import("../../composables/display.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["completeIcon"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? IconValue : NonNullable<IconValue> | Defaults["editIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : NonNullable<IconValue> | Defaults["errorIcon"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
};
export declare const makeVStepperProps: <Defaults extends {
    prevText?: unknown;
    nextText?: unknown;
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    position?: unknown;
    location?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    color?: unknown;
    modelValue?: unknown;
    multiple?: unknown;
    mandatory?: unknown;
    max?: unknown;
    selectedClass?: unknown;
    disabled?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    altLabels?: unknown;
    bgColor?: unknown;
    completeIcon?: unknown;
    editIcon?: unknown;
    editable?: unknown;
    errorIcon?: unknown;
    hideActions?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    nonLinear?: unknown;
    flat?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
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
    position: unknown extends Defaults["position"] ? {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : "fixed" | "absolute" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : NonNullable<"fixed" | "absolute" | "relative" | "static" | "sticky"> | Defaults["position"];
    };
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
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
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../composables/display.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : number | import("../../composables/display.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : NonNullable<number | import("../../composables/display.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    altLabels: unknown extends Defaults["altLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"]>;
        default: unknown extends Defaults["altLabels"] ? boolean : boolean | Defaults["altLabels"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    completeIcon: unknown extends Defaults["completeIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["completeIcon"] ? IconValue : IconValue | Defaults["completeIcon"]>;
        default: unknown extends Defaults["completeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["completeIcon"];
    };
    editIcon: unknown extends Defaults["editIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["editIcon"] ? IconValue : IconValue | Defaults["editIcon"]>;
        default: unknown extends Defaults["editIcon"] ? IconValue : NonNullable<IconValue> | Defaults["editIcon"];
    };
    editable: unknown extends Defaults["editable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"]>;
        default: unknown extends Defaults["editable"] ? boolean : boolean | Defaults["editable"];
    };
    errorIcon: unknown extends Defaults["errorIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["errorIcon"] ? IconValue : IconValue | Defaults["errorIcon"]>;
        default: unknown extends Defaults["errorIcon"] ? IconValue : NonNullable<IconValue> | Defaults["errorIcon"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly StepperItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly StepperItem[] : readonly StepperItem[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? string : string | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    nonLinear: unknown extends Defaults["nonLinear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"]>;
        default: unknown extends Defaults["nonLinear"] ? boolean : boolean | Defaults["nonLinear"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
};
export declare const VStepper: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        items: readonly StepperItem[];
        itemValue: string;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        completeIcon?: IconValue | undefined;
        editIcon?: IconValue | undefined;
        errorIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            header?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            item?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            prev?: (() => import("vue").VNodeChild) | undefined;
            next?: (() => import("vue").VNodeChild) | undefined;
        } | ((arg: VStepperSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            prev?: false | (() => import("vue").VNodeChild) | undefined;
            next?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        prev: () => void;
        next: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (v: unknown) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        modelValue: any;
        items: readonly StepperItem[];
        itemValue: string;
        rounded: string | number | boolean;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        [x: `header-item.${string}`]: (arg: StepperItemSlot) => import("vue").VNode[];
        [x: `item.${string}`]: (arg: StepperItem) => import("vue").VNode[];
        actions: (arg: VStepperSlot) => import("vue").VNode[];
        default: (arg: VStepperSlot) => import("vue").VNode[];
        header: (arg: StepperItem) => import("vue").VNode[];
        'header-item': (arg: StepperItemSlot) => import("vue").VNode[];
        icon: (arg: StepperItemSlot) => import("vue").VNode[];
        title: (arg: StepperItemSlot) => import("vue").VNode[];
        subtitle: (arg: StepperItemSlot) => import("vue").VNode[];
        item: (arg: StepperItem) => import("vue").VNode[];
        prev: () => import("vue").VNode[];
        next: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        items: readonly StepperItem[];
        itemValue: string;
        tile: boolean;
        selectedClass: string;
        itemTitle: string;
        hideActions: boolean;
        prevText: string;
        nextText: string;
        editable: boolean;
        altLabels: boolean;
        nonLinear: boolean;
    } & {
        max?: number | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        completeIcon?: IconValue | undefined;
        editIcon?: IconValue | undefined;
        errorIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            [x: `header-item.${string}`]: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            [x: `item.${string}`]: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            header?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            'header-item'?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            icon?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            item?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            prev?: (() => import("vue").VNodeChild) | undefined;
            next?: (() => import("vue").VNodeChild) | undefined;
        } | ((arg: VStepperSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            [x: `item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            'header-item'?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            icon?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
            prev?: false | (() => import("vue").VNodeChild) | undefined;
            next?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:header-item"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        "v-slot:prev"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
    }, {
        prev: () => void;
        next: () => void;
    }, {}, {}, {}, {
        flat: boolean;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        modelValue: any;
        items: readonly StepperItem[];
        itemValue: string;
        rounded: string | number | boolean;
        tile: boolean;
        selectedClass: string;
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
    style: import("vue").StyleValue;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    items: readonly StepperItem[];
    itemValue: string;
    tile: boolean;
    selectedClass: string;
    itemTitle: string;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
} & {
    max?: number | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    modelValue?: any;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    completeIcon?: IconValue | undefined;
    editIcon?: IconValue | undefined;
    errorIcon?: IconValue | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        [x: `header-item.${string}`]: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        [x: `item.${string}`]: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        header?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        'header-item'?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        icon?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        item?: ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        prev?: (() => import("vue").VNodeChild) | undefined;
        next?: (() => import("vue").VNodeChild) | undefined;
    } | ((arg: VStepperSlot) => import("vue").VNodeChild);
    'v-slots'?: {
        [x: `header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        [x: `item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
        header?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        'header-item'?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        icon?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
        prev?: false | (() => import("vue").VNodeChild) | undefined;
        next?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    [x: `v-slot:header-item.${string}`]: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
    [x: `v-slot:item.${string}`]: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: VStepperSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:header"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
    "v-slot:header-item"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: StepperItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: StepperItem) => import("vue").VNodeChild) | undefined;
    "v-slot:prev"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    prev: () => void;
    next: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => true;
}, string, {
    flat: boolean;
    style: import("vue").StyleValue;
    mobile: boolean | null;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    modelValue: any;
    items: readonly StepperItem[];
    itemValue: string;
    rounded: string | number | boolean;
    tile: boolean;
    selectedClass: string;
    itemTitle: string;
    hideActions: boolean;
    prevText: string;
    nextText: string;
    editable: boolean;
    altLabels: boolean;
    nonLinear: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    [x: `header-item.${string}`]: (arg: StepperItemSlot) => import("vue").VNode[];
    [x: `item.${string}`]: (arg: StepperItem) => import("vue").VNode[];
    actions: (arg: VStepperSlot) => import("vue").VNode[];
    default: (arg: VStepperSlot) => import("vue").VNode[];
    header: (arg: StepperItem) => import("vue").VNode[];
    'header-item': (arg: StepperItemSlot) => import("vue").VNode[];
    icon: (arg: StepperItemSlot) => import("vue").VNode[];
    title: (arg: StepperItemSlot) => import("vue").VNode[];
    subtitle: (arg: StepperItemSlot) => import("vue").VNode[];
    item: (arg: StepperItem) => import("vue").VNode[];
    prev: () => import("vue").VNode[];
    next: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
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
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<import("../../util/index.js").Anchor | null>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
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
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: PropType<IconValue>;
    editIcon: PropType<IconValue>;
    editable: BooleanConstructor;
    errorIcon: PropType<IconValue>;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
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
    flat: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
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
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<import("../../util/index.js").Anchor | null>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
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
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    altLabels: BooleanConstructor;
    bgColor: StringConstructor;
    completeIcon: PropType<IconValue>;
    editIcon: PropType<IconValue>;
    editable: BooleanConstructor;
    errorIcon: PropType<IconValue>;
    hideActions: BooleanConstructor;
    items: {
        type: PropType<readonly StepperItem[]>;
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
    flat: BooleanConstructor;
}>>;
export type VStepper = InstanceType<typeof VStepper>;
