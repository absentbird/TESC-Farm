export type VPickerSlots = {
    header: never;
    default: never;
    actions: never;
    title: never;
};
export declare const makeVPickerProps: <Defaults extends {
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
    bgColor?: unknown;
    divided?: unknown;
    landscape?: unknown;
    title?: unknown;
    hideHeader?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    position: unknown extends Defaults["position"] ? {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : "fixed" | "absolute" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : NonNullable<"fixed" | "absolute" | "relative" | "static" | "sticky"> | Defaults["position"];
    };
    location: unknown extends Defaults["location"] ? import("vue").PropType<import("../../util/index.js").Anchor | null> : {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
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
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
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
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    landscape: unknown extends Defaults["landscape"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"]>;
        default: unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
};
export declare const VPicker: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        tile: boolean;
        divided: boolean;
        hideHeader: boolean;
    } & {
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
        title?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            header?: (() => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        hideHeader: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        header: () => import("vue").VNode[];
        default: () => import("vue").VNode[];
        actions: () => import("vue").VNode[];
        title: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        tile: boolean;
        divided: boolean;
        hideHeader: boolean;
    } & {
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
        title?: string | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            header?: (() => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            actions?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            header?: false | (() => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            actions?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        hideHeader: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    landscape: boolean;
    tile: boolean;
    divided: boolean;
    hideHeader: boolean;
} & {
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
    title?: string | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        header?: (() => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        actions?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        header?: false | (() => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        actions?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:header"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    landscape: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    divided: boolean;
    hideHeader: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    header: () => import("vue").VNode[];
    default: () => import("vue").VNode[];
    actions: () => import("vue").VNode[];
    title: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
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
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
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
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    bgColor: StringConstructor;
    divided: BooleanConstructor;
    landscape: BooleanConstructor;
    title: StringConstructor;
    hideHeader: BooleanConstructor;
}>>;
export type VPicker = InstanceType<typeof VPicker>;
