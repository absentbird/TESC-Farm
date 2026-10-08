import type { PropType } from 'vue';
export declare const makeVAppBarProps: <Defaults extends {
    height?: unknown;
    scrollTarget?: unknown;
    scrollThreshold?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    collapse?: unknown;
    color?: unknown;
    density?: unknown;
    extended?: unknown;
    extensionHeight?: unknown;
    flat?: unknown;
    floating?: unknown;
    image?: unknown;
    title?: unknown;
    scrollBehavior?: unknown;
    modelValue?: unknown;
    location?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    scrollTarget: unknown extends Defaults["scrollTarget"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"]>;
        default: unknown extends Defaults["scrollTarget"] ? string : string | Defaults["scrollTarget"];
    };
    scrollThreshold: unknown extends Defaults["scrollThreshold"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["scrollThreshold"] ? string | number : string | number | Defaults["scrollThreshold"]>;
        default: unknown extends Defaults["scrollThreshold"] ? string | number : NonNullable<string | number> | Defaults["scrollThreshold"];
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
    collapse: unknown extends Defaults["collapse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["collapse"] ? boolean : boolean | Defaults["collapse"]>;
        default: unknown extends Defaults["collapse"] ? boolean : boolean | Defaults["collapse"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../VToolbar/VToolbar.js").Density : import("../VToolbar/VToolbar.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../VToolbar/VToolbar.js").Density : NonNullable<import("../VToolbar/VToolbar.js").Density> | Defaults["density"];
    };
    extended: unknown extends Defaults["extended"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"]>;
        default: unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"];
    };
    extensionHeight: unknown extends Defaults["extensionHeight"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["extensionHeight"] ? string | number : string | number | Defaults["extensionHeight"]>;
        default: unknown extends Defaults["extensionHeight"] ? string | number : NonNullable<string | number> | Defaults["extensionHeight"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    scrollBehavior: unknown extends Defaults["scrollBehavior"] ? PropType<"hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image"> : {
        type: PropType<unknown extends Defaults["scrollBehavior"] ? "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" : "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" | Defaults["scrollBehavior"]>;
        default: unknown extends Defaults["scrollBehavior"] ? "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" : string | Defaults["scrollBehavior"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    } : Omit<{
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["location"] ? "top" | "bottom" : "top" | "bottom" | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? "top" | "bottom" : Defaults["location"] | NonNullable<"top" | "bottom">;
    };
};
export declare const VAppBar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        absolute: boolean;
        location: "top" | "bottom";
        height: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        modelValue: boolean;
        density: import("../VToolbar/VToolbar.js").Density;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
        scrollThreshold: string | number;
    } & {
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        scrollBehavior?: "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" | undefined;
        title?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        scrollTarget?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            image?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            extension?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            extension?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        absolute: boolean;
        location: "top" | "bottom";
        height: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        modelValue: boolean;
        density: import("../VToolbar/VToolbar.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
        scrollThreshold: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        image: () => import("vue").VNode[];
        prepend: () => import("vue").VNode[];
        append: () => import("vue").VNode[];
        title: () => import("vue").VNode[];
        extension: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        absolute: boolean;
        location: "top" | "bottom";
        height: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        modelValue: boolean;
        density: import("../VToolbar/VToolbar.js").Density;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
        scrollThreshold: string | number;
    } & {
        name?: string | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        scrollBehavior?: "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" | undefined;
        title?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        scrollTarget?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            image?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            extension?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            image?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            extension?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        flat: boolean;
        absolute: boolean;
        location: "top" | "bottom";
        height: string | number;
        order: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        modelValue: boolean;
        density: import("../VToolbar/VToolbar.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
        scrollThreshold: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    absolute: boolean;
    location: "top" | "bottom";
    height: string | number;
    order: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapse: boolean;
    modelValue: boolean;
    density: import("../VToolbar/VToolbar.js").Density;
    tile: boolean;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
    scrollThreshold: string | number;
} & {
    name?: string | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    scrollBehavior?: "hide" | (string & {}) | "collapse" | "fully-hide" | "inverted" | "elevate" | "fade-image" | undefined;
    title?: string | undefined;
    image?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    scrollTarget?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        image?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        extension?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        image?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        extension?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:image"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:extension"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, {
    flat: boolean;
    absolute: boolean;
    location: "top" | "bottom";
    height: string | number;
    order: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapse: boolean;
    modelValue: boolean;
    density: import("../VToolbar/VToolbar.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
    scrollThreshold: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    image: () => import("vue").VNode[];
    prepend: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
    title: () => import("vue").VNode[];
    extension: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrollTarget: {
        type: StringConstructor;
    };
    scrollThreshold: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    scrollBehavior: PropType<"hide" | "fully-hide" | "inverted" | "collapse" | "elevate" | "fade-image" | (string & {})>;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    location: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    };
}, import("vue").ExtractPropTypes<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    scrollTarget: {
        type: StringConstructor;
    };
    scrollThreshold: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<import("../VToolbar/VToolbar.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    image: StringConstructor;
    title: StringConstructor;
    scrollBehavior: PropType<"hide" | "fully-hide" | "inverted" | "collapse" | "elevate" | "fade-image" | (string & {})>;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    location: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    };
}>>;
export type VAppBar = InstanceType<typeof VAppBar>;
