import type { Anchor } from "../../util/index.js";
export declare const makeVSpeedDialProps: <Defaults extends {
    offset?: unknown;
    location?: unknown;
    origin?: unknown;
    height?: unknown;
    width?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    opacity?: unknown;
    transition?: unknown;
    zIndex?: unknown;
    style?: unknown;
    target?: unknown;
    eager?: unknown;
    disabled?: unknown;
    class?: unknown;
    theme?: unknown;
    persistent?: unknown;
    modelValue?: unknown;
    locationStrategy?: unknown;
    scrollStrategy?: unknown;
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
    noClickAnimation?: unknown;
    scrim?: unknown;
    attach?: unknown;
    id?: unknown;
    submenu?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    offset: unknown extends Defaults["offset"] ? {
        type: import("vue").PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    } : Omit<{
        type: import("vue").PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["offset"] ? string | number | number[] | undefined : string | number | number[] | Defaults["offset"] | undefined>;
        default: unknown extends Defaults["offset"] ? string | number | number[] | undefined : NonNullable<string | number | number[] | undefined> | Defaults["offset"];
    };
    location: unknown extends Defaults["location"] ? Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor> | undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor | undefined>;
    } : Omit<Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor> | undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor | undefined>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["location"] ? Anchor | undefined : Anchor | Defaults["location"] | undefined>;
        default: unknown extends Defaults["location"] ? Anchor | undefined : NonNullable<Anchor | undefined> | Defaults["location"];
    };
    origin: unknown extends Defaults["origin"] ? {
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["origin"] ? "auto" | Anchor | "overlap" : "auto" | Anchor | "overlap" | Defaults["origin"]>;
        default: unknown extends Defaults["origin"] ? "auto" | Anchor | "overlap" : NonNullable<"auto" | Anchor | "overlap"> | Defaults["origin"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
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
    minWidth: unknown extends Defaults["minWidth"] ? {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    opacity: unknown extends Defaults["opacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : NonNullable<string | number> | Defaults["opacity"];
    };
    transition: unknown extends Defaults["transition"] ? Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | {
            component: import("vue").Component;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
    } : Omit<Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | {
            component: import("vue").Component;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        } : string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        } | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        } : NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }> | Defaults["transition"];
    };
    zIndex: unknown extends Defaults["zIndex"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["zIndex"] ? string | number : string | number | Defaults["zIndex"]>;
        default: unknown extends Defaults["zIndex"] ? string | number : NonNullable<string | number> | Defaults["zIndex"];
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
    target: unknown extends Defaults["target"] ? import("vue").PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined : Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | Defaults["target"] | undefined>;
        default: unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined : NonNullable<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined> | Defaults["target"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    persistent: unknown extends Defaults["persistent"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"]>;
        default: unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    locationStrategy: unknown extends Defaults["locationStrategy"] ? Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
        default: NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
        default: NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction : "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction | Defaults["locationStrategy"]>;
        default: unknown extends Defaults["locationStrategy"] ? "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction : NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction> | Defaults["locationStrategy"];
    };
    scrollStrategy: unknown extends Defaults["scrollStrategy"] ? Omit<{
        type: import("vue").PropType<import("../VOverlay/scrollStrategies.js").StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
        default: NonNullable<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/scrollStrategies.js").StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
        default: NonNullable<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["scrollStrategy"] ? "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition" : "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition" | Defaults["scrollStrategy"]>;
        default: unknown extends Defaults["scrollStrategy"] ? "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition" : NonNullable<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition"> | Defaults["scrollStrategy"];
    };
    closeDelay: unknown extends Defaults["closeDelay"] ? Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
    };
    activator: unknown extends Defaults["activator"] ? import("vue").PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined : Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | Defaults["activator"] | undefined>;
        default: unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined : NonNullable<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined> | Defaults["activator"];
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    } : Omit<{
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? {
        type: import("vue").PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: import("vue").PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
    closeOnBack: unknown extends Defaults["closeOnBack"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"]>;
        default: unknown extends Defaults["closeOnBack"] ? boolean : boolean | Defaults["closeOnBack"];
    };
    contained: unknown extends Defaults["contained"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"]>;
        default: unknown extends Defaults["contained"] ? boolean : boolean | Defaults["contained"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    contentProps: unknown extends Defaults["contentProps"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentProps"] ? any : any>;
        default: unknown extends Defaults["contentProps"] ? any : any;
    };
    noClickAnimation: unknown extends Defaults["noClickAnimation"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["noClickAnimation"] ? boolean : boolean | Defaults["noClickAnimation"]>;
        default: unknown extends Defaults["noClickAnimation"] ? boolean : boolean | Defaults["noClickAnimation"];
    };
    scrim: unknown extends Defaults["scrim"] ? Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    } : Omit<Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : NonNullable<string | boolean> | Defaults["scrim"];
    };
    attach: unknown extends Defaults["attach"] ? import("vue").PropType<string | boolean | Element> : {
        type: import("vue").PropType<unknown extends Defaults["attach"] ? string | boolean | Element : string | boolean | Element | Defaults["attach"]>;
        default: unknown extends Defaults["attach"] ? string | boolean | Element : NonNullable<string | boolean | Element> | Defaults["attach"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    submenu: unknown extends Defaults["submenu"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["submenu"] ? boolean : boolean | Defaults["submenu"]>;
        default: unknown extends Defaults["submenu"] ? boolean : boolean | Defaults["submenu"];
    };
};
export declare const VSpeedDial: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        offset: string | number | number[] | undefined;
        location: Anchor | undefined;
        origin: "auto" | Anchor | "overlap";
        minWidth: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
    } & {
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        opacity?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        offset: string | number | number[] | undefined;
        location: Anchor | undefined;
        origin: "auto" | Anchor | "overlap";
        minWidth: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNode[];
        activator: (arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        offset: string | number | number[] | undefined;
        location: Anchor | undefined;
        origin: "auto" | Anchor | "overlap";
        minWidth: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
    } & {
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        opacity?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        offset: string | number | number[] | undefined;
        location: Anchor | undefined;
        origin: "auto" | Anchor | "overlap";
        minWidth: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    offset: string | number | number[] | undefined;
    location: Anchor | undefined;
    origin: "auto" | Anchor | "overlap";
    minWidth: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    }) | {
        component: import("vue").Component;
    };
    zIndex: string | number;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    persistent: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
    scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
    closeDelay: string | number;
    openDelay: string | number;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    scrim: string | boolean;
    submenu: boolean;
} & {
    id?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    opacity?: string | number | undefined;
    target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
    class?: any;
    theme?: string | undefined;
    activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentClass?: any;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        activator?: ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } | ((arg: {
        isActive: import("vue").Ref<boolean>;
    }) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        activator?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isActive: import("vue").Ref<boolean>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:activator"?: false | ((arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: import("../../util/index.js").TemplateRef;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, {
    offset: string | number | number[] | undefined;
    location: Anchor | undefined;
    origin: "auto" | Anchor | "overlap";
    minWidth: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    }) | {
        component: import("vue").Component;
    };
    zIndex: string | number;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    persistent: boolean;
    modelValue: boolean;
    locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
    scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
    closeDelay: string | number;
    openDelay: string | number;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    scrim: string | boolean;
    submenu: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isActive: import("vue").Ref<boolean>;
    }) => import("vue").VNode[];
    activator: (arg: {
        isActive: boolean;
        props: Record<string, any>;
        targetRef: import("../../util/index.js").TemplateRef;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    offset: {
        type: import("vue").PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    location: Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor> | undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor | undefined>;
    };
    origin: {
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    transition: Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | {
            component: import("vue").Component;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    target: import("vue").PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    persistent: BooleanConstructor;
    modelValue: BooleanConstructor;
    locationStrategy: Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
        default: NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
    };
    scrollStrategy: Omit<{
        type: import("vue").PropType<import("../VOverlay/scrollStrategies.js").StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
        default: NonNullable<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
    };
    closeDelay: Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    openDelay: Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    activator: import("vue").PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined>;
    activatorProps: {
        type: import("vue").PropType<Record<string, any>>;
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
    closeOnContentClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    noClickAnimation: BooleanConstructor;
    scrim: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    attach: import("vue").PropType<boolean | string | Element>;
    id: StringConstructor;
    submenu: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    offset: {
        type: import("vue").PropType<string | number | number[] | undefined>;
        default: NonNullable<string | number | number[] | undefined>;
    };
    location: Omit<Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor> | undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<Anchor | undefined>;
        default: NonNullable<Anchor | undefined>;
    };
    origin: {
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["origin"]>;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    transition: Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | {
            component: import("vue").Component;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        }>;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    target: import("vue").PropType<Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined>;
    eager: BooleanConstructor;
    disabled: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    persistent: BooleanConstructor;
    modelValue: BooleanConstructor;
    locationStrategy: Omit<{
        type: import("vue").PropType<import("../VOverlay/locationStrategies.js").StrategyProps["locationStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
        default: NonNullable<"connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction>;
    };
    scrollStrategy: Omit<{
        type: import("vue").PropType<import("../VOverlay/scrollStrategies.js").StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
        default: NonNullable<"none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition">;
    };
    closeDelay: Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    openDelay: Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    activator: import("vue").PropType<Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined>;
    activatorProps: {
        type: import("vue").PropType<Record<string, any>>;
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
    closeOnContentClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    noClickAnimation: BooleanConstructor;
    scrim: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    attach: import("vue").PropType<boolean | string | Element>;
    id: StringConstructor;
    submenu: BooleanConstructor;
}>>;
export type VSpeedDial = InstanceType<typeof VSpeedDial>;
