import type { PropType } from 'vue';
import type { VTimePickerViewMode } from './shared.js';
import type { VPickerSlots } from "../VPicker/VPicker.js";
type Period = 'am' | 'pm';
type AllowFunction = (val: number) => boolean;
export type VTimePickerSlots = Omit<VPickerSlots, 'header'>;
export declare const makeVTimePickerProps: <Defaults extends {
    location?: unknown;
    height?: unknown;
    width?: unknown;
    border?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    position?: unknown;
    style?: unknown;
    title?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    divided?: unknown;
    bgColor?: unknown;
    hideHeader?: unknown;
    allowedHours?: unknown;
    allowedMinutes?: unknown;
    allowedSeconds?: unknown;
    ampmInTitle?: unknown;
    disabled?: unknown;
    format?: unknown;
    max?: unknown;
    min?: unknown;
    viewMode?: unknown;
    modelValue?: unknown;
    readonly?: unknown;
    scrollable?: unknown;
    useSeconds?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    title: unknown extends Defaults["title"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    allowedHours: unknown extends Defaults["allowedHours"] ? PropType<number[] | AllowFunction> : {
        type: PropType<unknown extends Defaults["allowedHours"] ? number[] | AllowFunction : number[] | AllowFunction | Defaults["allowedHours"]>;
        default: unknown extends Defaults["allowedHours"] ? number[] | AllowFunction : Defaults["allowedHours"] | NonNullable<number[] | AllowFunction>;
    };
    allowedMinutes: unknown extends Defaults["allowedMinutes"] ? PropType<number[] | AllowFunction> : {
        type: PropType<unknown extends Defaults["allowedMinutes"] ? number[] | AllowFunction : number[] | AllowFunction | Defaults["allowedMinutes"]>;
        default: unknown extends Defaults["allowedMinutes"] ? number[] | AllowFunction : NonNullable<number[] | AllowFunction> | Defaults["allowedMinutes"];
    };
    allowedSeconds: unknown extends Defaults["allowedSeconds"] ? PropType<number[] | AllowFunction> : {
        type: PropType<unknown extends Defaults["allowedSeconds"] ? number[] | AllowFunction : number[] | AllowFunction | Defaults["allowedSeconds"]>;
        default: unknown extends Defaults["allowedSeconds"] ? number[] | AllowFunction : NonNullable<number[] | AllowFunction> | Defaults["allowedSeconds"];
    };
    ampmInTitle: unknown extends Defaults["ampmInTitle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampmInTitle"] ? boolean : boolean | Defaults["ampmInTitle"]>;
        default: unknown extends Defaults["ampmInTitle"] ? boolean : boolean | Defaults["ampmInTitle"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    format: unknown extends Defaults["format"] ? {
        type: PropType<"ampm" | "24hr">;
        default: string;
    } : Omit<{
        type: PropType<"ampm" | "24hr">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["format"] ? "ampm" | "24hr" : "ampm" | "24hr" | Defaults["format"]>;
        default: unknown extends Defaults["format"] ? "ampm" | "24hr" : Defaults["format"] | NonNullable<"ampm" | "24hr">;
    };
    max: unknown extends Defaults["max"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["max"] ? string : string | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string : string | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["min"] ? string : string | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string : string | Defaults["min"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: PropType<VTimePickerViewMode>;
        default: string;
    } : Omit<{
        type: PropType<VTimePickerViewMode>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["viewMode"] ? VTimePickerViewMode : VTimePickerViewMode | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? VTimePickerViewMode : NonNullable<VTimePickerViewMode> | Defaults["viewMode"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    scrollable: unknown extends Defaults["scrollable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"]>;
        default: unknown extends Defaults["scrollable"] ? boolean : boolean | Defaults["scrollable"];
    };
    useSeconds: unknown extends Defaults["useSeconds"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"]>;
        default: unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"];
    };
};
export declare const VTimePicker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        readonly: boolean;
        format: "ampm" | "24hr";
        tag: string | import("../../util/index.js").JSXComponent;
        tile: boolean;
        divided: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        viewMode: VTimePickerViewMode;
        ampmInTitle: boolean;
        useSeconds: boolean;
    } & {
        max?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        min?: string | undefined;
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
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        allowedHours?: number[] | AllowFunction | undefined;
        allowedMinutes?: number[] | AllowFunction | undefined;
        allowedSeconds?: number[] | AllowFunction | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
        "onUpdate:period"?: ((val: Period) => any) | undefined;
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:hour': (val: number) => true;
        'update:minute': (val: number) => true;
        'update:period': (val: Period) => true;
        'update:second': (val: number) => true;
        'update:modelValue': (val: string) => true;
        'update:viewMode': (val: VTimePickerViewMode) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        readonly: boolean;
        format: "ampm" | "24hr";
        tag: string | import("../../util/index.js").JSXComponent;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        viewMode: VTimePickerViewMode;
        ampmInTitle: boolean;
        useSeconds: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        title: () => import("vue").VNode[];
        actions: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        readonly: boolean;
        format: "ampm" | "24hr";
        tag: string | import("../../util/index.js").JSXComponent;
        tile: boolean;
        divided: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        viewMode: VTimePickerViewMode;
        ampmInTitle: boolean;
        useSeconds: boolean;
    } & {
        max?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        min?: string | undefined;
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
        modelValue?: any;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        allowedHours?: number[] | AllowFunction | undefined;
        allowedMinutes?: number[] | AllowFunction | undefined;
        allowedSeconds?: number[] | AllowFunction | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
        "onUpdate:period"?: ((val: Period) => any) | undefined;
        "onUpdate:hour"?: ((val: number) => any) | undefined;
        "onUpdate:minute"?: ((val: number) => any) | undefined;
        "onUpdate:second"?: ((val: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        readonly: boolean;
        format: "ampm" | "24hr";
        tag: string | import("../../util/index.js").JSXComponent;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        scrollable: boolean;
        hideHeader: boolean;
        viewMode: VTimePickerViewMode;
        ampmInTitle: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    title: string;
    disabled: boolean;
    readonly: boolean;
    format: "ampm" | "24hr";
    tag: string | import("../../util/index.js").JSXComponent;
    tile: boolean;
    divided: boolean;
    scrollable: boolean;
    hideHeader: boolean;
    viewMode: VTimePickerViewMode;
    ampmInTitle: boolean;
    useSeconds: boolean;
} & {
    max?: string | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    min?: string | undefined;
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
    modelValue?: any;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    allowedHours?: number[] | AllowFunction | undefined;
    allowedMinutes?: number[] | AllowFunction | undefined;
    allowedSeconds?: number[] | AllowFunction | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        actions?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        actions?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onUpdate:viewMode"?: ((val: VTimePickerViewMode) => any) | undefined;
    "onUpdate:period"?: ((val: Period) => any) | undefined;
    "onUpdate:hour"?: ((val: number) => any) | undefined;
    "onUpdate:minute"?: ((val: number) => any) | undefined;
    "onUpdate:second"?: ((val: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:hour': (val: number) => true;
    'update:minute': (val: number) => true;
    'update:period': (val: Period) => true;
    'update:second': (val: number) => true;
    'update:modelValue': (val: string) => true;
    'update:viewMode': (val: VTimePickerViewMode) => true;
}, string, {
    style: import("vue").StyleValue;
    title: string;
    disabled: boolean;
    readonly: boolean;
    format: "ampm" | "24hr";
    tag: string | import("../../util/index.js").JSXComponent;
    rounded: string | number | boolean;
    tile: boolean;
    divided: boolean;
    scrollable: boolean;
    hideHeader: boolean;
    viewMode: VTimePickerViewMode;
    ampmInTitle: boolean;
    useSeconds: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    title: () => import("vue").VNode[];
    actions: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    location: PropType<import("../../util/index.js").Anchor | null>;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    hideHeader: BooleanConstructor;
    allowedHours: PropType<AllowFunction | number[]>;
    allowedMinutes: PropType<AllowFunction | number[]>;
    allowedSeconds: PropType<AllowFunction | number[]>;
    ampmInTitle: BooleanConstructor;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"ampm" | "24hr">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    viewMode: {
        type: PropType<VTimePickerViewMode>;
        default: string;
    };
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    location: PropType<import("../../util/index.js").Anchor | null>;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    hideHeader: BooleanConstructor;
    allowedHours: PropType<AllowFunction | number[]>;
    allowedMinutes: PropType<AllowFunction | number[]>;
    allowedSeconds: PropType<AllowFunction | number[]>;
    ampmInTitle: BooleanConstructor;
    disabled: BooleanConstructor;
    format: {
        type: PropType<"ampm" | "24hr">;
        default: string;
    };
    max: StringConstructor;
    min: StringConstructor;
    viewMode: {
        type: PropType<VTimePickerViewMode>;
        default: string;
    };
    modelValue: PropType<any>;
    readonly: BooleanConstructor;
    scrollable: BooleanConstructor;
    useSeconds: BooleanConstructor;
}>>;
export type VTimePicker = InstanceType<typeof VTimePicker>;

