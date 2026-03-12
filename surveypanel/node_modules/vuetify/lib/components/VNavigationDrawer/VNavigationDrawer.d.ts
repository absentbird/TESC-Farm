import type { PropType } from 'vue';
export type VNavigationDrawerImageSlot = {
    image: string | undefined;
};
export type VNavigationDrawerSlots = {
    default: never;
    prepend: never;
    append: never;
    image: VNavigationDrawerImageSlot;
};
declare const locations: readonly ["start", "end", "left", "right", "top", "bottom"];
export declare const makeVNavigationDrawerProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    elevation?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    color?: unknown;
    disableResizeWatcher?: unknown;
    disableRouteWatcher?: unknown;
    expandOnHover?: unknown;
    floating?: unknown;
    modelValue?: unknown;
    permanent?: unknown;
    rail?: unknown;
    railWidth?: unknown;
    scrim?: unknown;
    image?: unknown;
    temporary?: unknown;
    persistent?: unknown;
    touchless?: unknown;
    width?: unknown;
    location?: unknown;
    sticky?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
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
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : NonNullable<string | number> | Defaults["order"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
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
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../composables/display.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : number | import("../../composables/display.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : NonNullable<number | import("../../composables/display.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    closeDelay: unknown extends Defaults["closeDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
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
    disableResizeWatcher: unknown extends Defaults["disableResizeWatcher"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableResizeWatcher"] ? boolean : boolean | Defaults["disableResizeWatcher"]>;
        default: unknown extends Defaults["disableResizeWatcher"] ? boolean : boolean | Defaults["disableResizeWatcher"];
    };
    disableRouteWatcher: unknown extends Defaults["disableRouteWatcher"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disableRouteWatcher"] ? boolean : boolean | Defaults["disableRouteWatcher"]>;
        default: unknown extends Defaults["disableRouteWatcher"] ? boolean : boolean | Defaults["disableRouteWatcher"];
    };
    expandOnHover: unknown extends Defaults["expandOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["expandOnHover"] ? boolean : boolean | Defaults["expandOnHover"]>;
        default: unknown extends Defaults["expandOnHover"] ? boolean : boolean | Defaults["expandOnHover"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean | null : boolean | Defaults["modelValue"] | null>;
        default: unknown extends Defaults["modelValue"] ? boolean | null : NonNullable<boolean | null> | Defaults["modelValue"];
    };
    permanent: unknown extends Defaults["permanent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["permanent"] ? boolean : boolean | Defaults["permanent"]>;
        default: unknown extends Defaults["permanent"] ? boolean : boolean | Defaults["permanent"];
    };
    rail: unknown extends Defaults["rail"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rail"] ? boolean | null : boolean | Defaults["rail"] | null>;
        default: unknown extends Defaults["rail"] ? boolean | null : NonNullable<boolean | null> | Defaults["rail"];
    };
    railWidth: unknown extends Defaults["railWidth"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["railWidth"] ? string | number : string | number | Defaults["railWidth"]>;
        default: unknown extends Defaults["railWidth"] ? string | number : NonNullable<string | number> | Defaults["railWidth"];
    };
    scrim: unknown extends Defaults["scrim"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : NonNullable<string | boolean> | Defaults["scrim"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    temporary: unknown extends Defaults["temporary"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["temporary"] ? boolean : boolean | Defaults["temporary"]>;
        default: unknown extends Defaults["temporary"] ? boolean : boolean | Defaults["temporary"];
    };
    persistent: unknown extends Defaults["persistent"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"]>;
        default: unknown extends Defaults["persistent"] ? boolean : boolean | Defaults["persistent"];
    };
    touchless: unknown extends Defaults["touchless"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["touchless"] ? boolean : boolean | Defaults["touchless"]>;
        default: unknown extends Defaults["touchless"] ? boolean : boolean | Defaults["touchless"];
    };
    width: unknown extends Defaults["width"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<(typeof locations)[number]>;
        default: string;
        validator: (value: any) => boolean;
    } : Omit<{
        type: PropType<(typeof locations)[number]>;
        default: string;
        validator: (value: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["location"] ? "end" | "start" | "left" | "top" | "bottom" | "right" : "end" | "start" | "left" | "top" | "bottom" | "right" | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? "end" | "start" | "left" | "top" | "bottom" | "right" : Defaults["location"] | NonNullable<"end" | "start" | "left" | "top" | "bottom" | "right">;
    };
    sticky: unknown extends Defaults["sticky"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"]>;
        default: unknown extends Defaults["sticky"] ? boolean : boolean | Defaults["sticky"];
    };
};
export declare const VNavigationDrawer: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        absolute: boolean;
        location: "end" | "start" | "left" | "top" | "bottom" | "right";
        width: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        temporary: boolean;
        persistent: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        modelValue: boolean | null;
        tile: boolean;
        scrim: string | boolean;
        floating: boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
    } & {
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
        "onUpdate:rail"?: ((val: boolean) => any) | undefined;
    }, {
        isStuck: import("vue").ShallowRef<boolean | "top" | "bottom", boolean | "top" | "bottom">;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (val: boolean) => true;
        'update:rail': (val: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        absolute: boolean;
        location: "end" | "start" | "left" | "top" | "bottom" | "right";
        width: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        temporary: boolean;
        persistent: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        modelValue: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        scrim: string | boolean;
        floating: boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        prepend: () => import("vue").VNode[];
        append: () => import("vue").VNode[];
        image: (arg: VNavigationDrawerImageSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        absolute: boolean;
        location: "end" | "start" | "left" | "top" | "bottom" | "right";
        width: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        temporary: boolean;
        persistent: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        modelValue: boolean | null;
        tile: boolean;
        scrim: string | boolean;
        floating: boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
    } & {
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
        "onUpdate:rail"?: ((val: boolean) => any) | undefined;
    }, {
        isStuck: import("vue").ShallowRef<boolean | "top" | "bottom", boolean | "top" | "bottom">;
    }, {}, {}, {}, {
        absolute: boolean;
        location: "end" | "start" | "left" | "top" | "bottom" | "right";
        width: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        mobile: boolean | null;
        temporary: boolean;
        persistent: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        sticky: boolean;
        modelValue: boolean | null;
        rounded: string | number | boolean;
        tile: boolean;
        scrim: string | boolean;
        floating: boolean;
        touchless: boolean;
        disableResizeWatcher: boolean;
        disableRouteWatcher: boolean;
        expandOnHover: boolean;
        permanent: boolean;
        rail: boolean | null;
        railWidth: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    absolute: boolean;
    location: "end" | "start" | "left" | "top" | "bottom" | "right";
    width: string | number;
    order: string | number;
    style: import("vue").StyleValue;
    mobile: boolean | null;
    temporary: boolean;
    persistent: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
    modelValue: boolean | null;
    tile: boolean;
    scrim: string | boolean;
    floating: boolean;
    touchless: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    permanent: boolean;
    rail: boolean | null;
    railWidth: string | number;
} & {
    name?: string | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    image?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    rounded?: string | number | boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        image?: ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        image?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:image"?: false | ((arg: VNavigationDrawerImageSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
    "onUpdate:rail"?: ((val: boolean) => any) | undefined;
}, {
    isStuck: import("vue").ShallowRef<boolean | "top" | "bottom", boolean | "top" | "bottom">;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (val: boolean) => true;
    'update:rail': (val: boolean) => true;
}, string, {
    absolute: boolean;
    location: "end" | "start" | "left" | "top" | "bottom" | "right";
    width: string | number;
    order: string | number;
    style: import("vue").StyleValue;
    mobile: boolean | null;
    temporary: boolean;
    persistent: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    sticky: boolean;
    modelValue: boolean | null;
    rounded: string | number | boolean;
    tile: boolean;
    scrim: string | boolean;
    floating: boolean;
    touchless: boolean;
    disableResizeWatcher: boolean;
    disableRouteWatcher: boolean;
    expandOnHover: boolean;
    permanent: boolean;
    rail: boolean | null;
    railWidth: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    prepend: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
    image: (arg: VNavigationDrawerImageSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: {
        type: PropType<boolean | null>;
        default: null;
    };
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    persistent: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    location: {
        type: PropType<(typeof locations)[number]>;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    mobile: Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<boolean | null>;
        default: NonNullable<boolean | null> | null;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    disableResizeWatcher: BooleanConstructor;
    disableRouteWatcher: BooleanConstructor;
    expandOnHover: BooleanConstructor;
    floating: BooleanConstructor;
    modelValue: {
        type: PropType<boolean | null>;
        default: null;
    };
    permanent: BooleanConstructor;
    rail: {
        type: PropType<boolean | null>;
        default: null;
    };
    railWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    image: StringConstructor;
    temporary: BooleanConstructor;
    persistent: BooleanConstructor;
    touchless: BooleanConstructor;
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    location: {
        type: PropType<(typeof locations)[number]>;
        default: string;
        validator: (value: any) => boolean;
    };
    sticky: BooleanConstructor;
}>>;
export type VNavigationDrawer = InstanceType<typeof VNavigationDrawer>;

