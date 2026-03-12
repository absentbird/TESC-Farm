import { VSnackbar } from "../VSnackbar/VSnackbar.js";
import type { PropType, VNodeProps } from 'vue';
import type { GenericProps } from "../../util/index.js";
export type VSnackbarQueueSlots<T extends string | SnackbarMessage> = {
    default: {
        item: T;
    };
    text: {
        item: T;
    };
    actions: {
        item: T;
        props: {
            onClick: () => void;
        };
    };
};
export type SnackbarMessage = string | Omit<VSnackbar['$props'], 'modelValue' | 'onUpdate:modelValue' | 'activator' | 'activatorProps' | 'closeDelay' | 'openDelay' | 'openOnClick' | 'openOnFocus' | 'openOnHover' | '$children' | 'v-slots' | `v-slot:${string}` | keyof VNodeProps>;
export declare const makeVSnackbarQueueProps: <Defaults extends {
    variant?: unknown;
    offset?: unknown;
    absolute?: unknown;
    location?: unknown;
    origin?: unknown;
    height?: unknown;
    width?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    opacity?: unknown;
    position?: unknown;
    transition?: unknown;
    zIndex?: unknown;
    style?: unknown;
    text?: unknown;
    target?: unknown;
    eager?: unknown;
    disabled?: unknown;
    timeout?: unknown;
    class?: unknown;
    theme?: unknown;
    vertical?: unknown;
    timer?: unknown;
    locationStrategy?: unknown;
    rounded?: unknown;
    tile?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    activator?: unknown;
    activatorProps?: unknown;
    openOnClick?: unknown;
    openOnHover?: unknown;
    openOnFocus?: unknown;
    closeOnContentClick?: unknown;
    closeOnBack?: unknown;
    contained?: unknown;
    contentClass?: unknown;
    contentProps?: unknown;
    attach?: unknown;
    multiLine?: unknown;
    closable?: unknown;
    closeText?: unknown;
    modelValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
    offset: unknown extends Defaults["offset"] ? PropType<string | number | number[] | undefined> : {
        type: PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : NonNullable<string | number | number[] | undefined> | Defaults["offset"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    } : Omit<{
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : import("../../util/index.js").Anchor | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : NonNullable<import("../../util/index.js").Anchor> | Defaults["location"];
    };
    origin: unknown extends Defaults["origin"] ? {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    } : Omit<{
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["origin"] ? "auto" | import("../../util/index.js").Anchor | "overlap" : "auto" | import("../../util/index.js").Anchor | "overlap" | Defaults["origin"]>;
        default: unknown extends Defaults["origin"] ? "auto" | import("../../util/index.js").Anchor | "overlap" : NonNullable<"auto" | import("../../util/index.js").Anchor | "overlap"> | Defaults["origin"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
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
    opacity: unknown extends Defaults["opacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : NonNullable<string | number> | Defaults["opacity"];
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
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    } : Omit<Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) : string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) : NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | Defaults["transition"];
    };
    zIndex: unknown extends Defaults["zIndex"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["zIndex"] ? string | number : string | number | Defaults["zIndex"]>;
        default: unknown extends Defaults["zIndex"] ? string | number : NonNullable<string | number> | Defaults["zIndex"];
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
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    target: unknown extends Defaults["target"] ? PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined> : {
        type: PropType<unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined : Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | Defaults["target"] | undefined>;
        default: unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined : NonNullable<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined> | Defaults["target"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    timeout: unknown extends Defaults["timeout"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["timeout"] ? string | number : string | number | Defaults["timeout"]>;
        default: unknown extends Defaults["timeout"] ? string | number : NonNullable<string | number> | Defaults["timeout"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    vertical: unknown extends Defaults["vertical"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"]>;
        default: unknown extends Defaults["vertical"] ? boolean : boolean | Defaults["vertical"];
    };
    timer: unknown extends Defaults["timer"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["timer"] ? string | boolean : string | boolean | Defaults["timer"]>;
        default: unknown extends Defaults["timer"] ? string | boolean : NonNullable<string | boolean> | Defaults["timer"];
    };
    locationStrategy: unknown extends Defaults["locationStrategy"] ? {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction : "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction | Defaults["locationStrategy"]>;
        default: unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction : NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction> | Defaults["locationStrategy"];
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
    closeDelay: unknown extends Defaults["closeDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
    };
    activator: unknown extends Defaults["activator"] ? PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined> : {
        type: PropType<unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined : Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | Defaults["activator"] | undefined>;
        default: unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined : NonNullable<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined> | Defaults["activator"];
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: PropType<Record<string, any>>;
        default: () => {};
    } : Omit<{
        type: PropType<Record<string, any>>;
        default: () => {};
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
    closeOnBack: unknown extends Defaults["closeOnBack"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"]>;
        default: unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"];
    };
    contained: unknown extends Defaults["contained"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"]>;
        default: unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    contentProps: unknown extends Defaults["contentProps"] ? null : {
        type: PropType<unknown extends Defaults["contentProps"] ? any : any>;
        default: unknown extends Defaults["contentProps"] ? any : any;
    };
    attach: unknown extends Defaults["attach"] ? PropType<string | boolean | Element> : {
        type: PropType<unknown extends Defaults["attach"] ? string | boolean | Element : string | boolean | Element | Defaults["attach"]>;
        default: unknown extends Defaults["attach"] ? string | boolean | Element : NonNullable<string | boolean | Element> | Defaults["attach"];
    };
    multiLine: unknown extends Defaults["multiLine"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"]>;
        default: unknown extends Defaults["multiLine"] ? boolean : boolean | Defaults["multiLine"];
    };
    closable: unknown extends Defaults["closable"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["closable"] ? string | boolean : string | boolean | Defaults["closable"]>;
        default: unknown extends Defaults["closable"] ? string | boolean : NonNullable<string | boolean> | Defaults["closable"];
    };
    closeText: unknown extends Defaults["closeText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"]>;
        default: unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? readonly SnackbarMessage[] : readonly SnackbarMessage[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? readonly SnackbarMessage[] : readonly SnackbarMessage[] | Defaults["modelValue"];
    };
};
export declare const VSnackbarQueue: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        closeText: string;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        timer?: string | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        closable?: string | boolean | undefined;
    } & {}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (val: SnackbarMessage[]) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:text">, VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        rounded: string | number | boolean;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        closeText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            item: SnackbarMessage;
        }) => import("vue").VNode[];
        text: (arg: {
            item: SnackbarMessage;
        }) => import("vue").VNode[];
        actions: (arg: {
            item: SnackbarMessage;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        closeText: string;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        text?: string | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        timer?: string | boolean | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        closable?: string | boolean | undefined;
    } & {}, {}, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        absolute: boolean;
        location: import("../../util/index.js").Anchor;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        timeout: string | number;
        vertical: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        rounded: string | number | boolean;
        tile: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        multiLine: boolean;
        closeText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | import("../../util/index.js").Anchor | "overlap";
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    zIndex: string | number;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
    tile: boolean;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
    closeText: string;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    opacity?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    text?: string | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    theme?: string | undefined;
    timer?: string | boolean | undefined;
    rounded?: string | number | boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentClass?: any;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
    closable?: string | boolean | undefined;
} & {}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: SnackbarMessage[]) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:actions" | "v-slot:text">, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    absolute: boolean;
    location: import("../../util/index.js").Anchor;
    origin: "auto" | import("../../util/index.js").Anchor | "overlap";
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    zIndex: string | number;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    timeout: string | number;
    vertical: boolean;
    locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
    rounded: string | number | boolean;
    tile: boolean;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    multiLine: boolean;
    closeText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        item: SnackbarMessage;
    }) => import("vue").VNode[];
    text: (arg: {
        item: SnackbarMessage;
    }) => import("vue").VNode[];
    actions: (arg: {
        item: SnackbarMessage;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly SnackbarMessage[]>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (val: T) => void;
}, slots: VSnackbarQueueSlots<T[number]>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    variant: {
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    offset: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["offset"]>;
    absolute: BooleanConstructor;
    location: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    };
    origin: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    opacity: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    text: StringConstructor;
    target: PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    vertical: BooleanConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    locationStrategy: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined>;
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    attach: PropType<boolean | string | Element>;
    multiLine: BooleanConstructor;
    closable: (StringConstructor | BooleanConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    variant: {
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    };
    offset: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["offset"]>;
    absolute: BooleanConstructor;
    location: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    };
    origin: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    opacity: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    text: StringConstructor;
    target: PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    timeout: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    vertical: BooleanConstructor;
    timer: (StringConstructor | BooleanConstructor)[];
    locationStrategy: {
        type: PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined>;
    activatorProps: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    attach: PropType<boolean | string | Element>;
    multiLine: BooleanConstructor;
    closable: (StringConstructor | BooleanConstructor)[];
    closeText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: PropType<readonly SnackbarMessage[]>;
        default: () => never[];
    };
}>>;
export type VSnackbarQueue = InstanceType<typeof VSnackbarQueue>;
