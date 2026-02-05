import type { PropType } from 'vue';
export type Density = null | 'prominent' | 'default' | 'comfortable' | 'compact';
export declare const makeVToolbarProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    absolute?: unknown;
    collapse?: unknown;
    color?: unknown;
    density?: unknown;
    extended?: unknown;
    extensionHeight?: unknown;
    flat?: unknown;
    floating?: unknown;
    height?: unknown;
    image?: unknown;
    title?: unknown;
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
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
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
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? Density : Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? Density : Defaults["density"] | NonNullable<Density>;
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
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
};
export type VToolbarSlots = {
    default: never;
    image: never;
    prepend: never;
    append: never;
    title: never;
    extension: never;
};
export declare const VToolbar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        absolute: boolean;
        height: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        density: Density;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        title?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
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
    }, {
        contentHeight: import("vue").ComputedRef<number>;
        extensionHeight: import("vue").ComputedRef<number>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        absolute: boolean;
        height: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        density: Density;
        rounded: string | number | boolean;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
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
        height: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        density: Density;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        title?: string | undefined;
        image?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
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
    }, {
        contentHeight: import("vue").ComputedRef<number>;
        extensionHeight: import("vue").ComputedRef<number>;
    }, {}, {}, {}, {
        flat: boolean;
        absolute: boolean;
        height: string | number;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        collapse: boolean;
        density: Density;
        rounded: string | number | boolean;
        tile: boolean;
        extended: boolean;
        extensionHeight: string | number;
        floating: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    absolute: boolean;
    height: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapse: boolean;
    density: Density;
    tile: boolean;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
} & {
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    title?: string | undefined;
    image?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
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
}, {
    contentHeight: import("vue").ComputedRef<number>;
    extensionHeight: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    flat: boolean;
    absolute: boolean;
    height: string | number;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    collapse: boolean;
    density: Density;
    rounded: string | number | boolean;
    tile: boolean;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    image: () => import("vue").VNode[];
    prepend: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
    title: () => import("vue").VNode[];
    extension: () => import("vue").VNode[];
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
    absolute: BooleanConstructor;
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<Density>;
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
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    title: StringConstructor;
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
    absolute: BooleanConstructor;
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<Density>;
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
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    title: StringConstructor;
}>>;
export type VToolbar = InstanceType<typeof VToolbar>;
