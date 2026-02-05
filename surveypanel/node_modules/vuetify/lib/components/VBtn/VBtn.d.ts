import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
export type VBtnSlots = {
    default: never;
    prepend: never;
    append: never;
    loader: never;
};
export declare const makeVBtnProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    rounded?: unknown;
    tile?: unknown;
    position?: unknown;
    location?: unknown;
    loading?: unknown;
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    active?: unknown;
    activeColor?: unknown;
    baseColor?: unknown;
    symbol?: unknown;
    flat?: unknown;
    icon?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    block?: unknown;
    readonly?: unknown;
    slim?: unknown;
    stacked?: unknown;
    ripple?: unknown;
    text?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
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
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
    };
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? PropType<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> : {
        type: PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : NonNullable<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> | Defaults["to"];
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
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
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
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
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
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
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    symbol: unknown extends Defaults["symbol"] ? {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    } : Omit<{
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<boolean | IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? boolean | IconValue : boolean | IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? boolean | IconValue : NonNullable<boolean | IconValue> | Defaults["icon"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    block: unknown extends Defaults["block"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["block"] ? boolean : boolean | Defaults["block"]>;
        default: unknown extends Defaults["block"] ? boolean : boolean | Defaults["block"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    stacked: unknown extends Defaults["stacked"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"]>;
        default: unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : boolean | {
            class: string;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : Defaults["ripple"] | NonNullable<boolean | {
            class: string;
        } | undefined>;
    };
    text: unknown extends Defaults["text"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["text"] ? string | number | boolean : string | number | boolean | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["text"];
    };
};
export declare const VBtn: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        block: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        value?: any;
        loading?: string | boolean | undefined;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        icon?: boolean | IconValue | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        group: import("../../composables/group.js").GroupItemProvide | null;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        block: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        text: string | number | boolean;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        prepend: () => import("vue").VNode[];
        append: () => import("vue").VNode[];
        loader: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        block: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        value?: any;
        loading?: string | boolean | undefined;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        icon?: boolean | IconValue | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            loader?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            loader?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, {
        group: import("../../composables/group.js").GroupItemProvide | null;
    }, {}, {}, {}, {
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        block: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        text: string | number | boolean;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    symbol: any;
    replace: boolean;
    flat: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    block: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
} & {
    location?: import("../../util/index.js").Anchor | null | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    value?: any;
    loading?: string | boolean | undefined;
    text?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    icon?: boolean | IconValue | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    selectedClass?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        loader?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        loader?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    group: import("../../composables/group.js").GroupItemProvide | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    symbol: any;
    replace: boolean;
    flat: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    block: boolean;
    active: boolean;
    style: import("vue").StyleValue;
    text: string | number | boolean;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    prepend: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
    loader: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
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
    loading: (StringConstructor | BooleanConstructor)[];
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
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
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    flat: BooleanConstructor;
    icon: PropType<boolean | IconValue>;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    block: BooleanConstructor;
    readonly: BooleanConstructor;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
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
    loading: (StringConstructor | BooleanConstructor)[];
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
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
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeColor: StringConstructor;
    baseColor: StringConstructor;
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    flat: BooleanConstructor;
    icon: PropType<boolean | IconValue>;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    block: BooleanConstructor;
    readonly: BooleanConstructor;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
}>>;
export type VBtn = InstanceType<typeof VBtn>;
