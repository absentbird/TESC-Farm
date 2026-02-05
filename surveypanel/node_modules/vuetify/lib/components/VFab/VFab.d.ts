export declare const makeVFabProps: <Defaults extends {
    transition?: unknown;
    location?: unknown;
    name?: unknown;
    order?: unknown;
    absolute?: unknown;
    symbol?: unknown;
    replace?: unknown;
    flat?: unknown;
    variant?: unknown;
    exact?: unknown;
    block?: unknown;
    height?: unknown;
    width?: unknown;
    active?: unknown;
    border?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    position?: unknown;
    value?: unknown;
    loading?: unknown;
    style?: unknown;
    text?: unknown;
    disabled?: unknown;
    size?: unknown;
    readonly?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    to?: unknown;
    icon?: unknown;
    href?: unknown;
    elevation?: unknown;
    density?: unknown;
    rounded?: unknown;
    tile?: unknown;
    baseColor?: unknown;
    selectedClass?: unknown;
    activeColor?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    slim?: unknown;
    stacked?: unknown;
    ripple?: unknown;
    app?: unknown;
    appear?: unknown;
    extended?: unknown;
    layout?: unknown;
    offset?: unknown;
    modelValue?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
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
    location: unknown extends Defaults["location"] ? import("vue").PropType<import("../../util/index.js").Anchor | null> : {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
    };
    name: unknown extends Defaults["name"] ? {
        type: StringConstructor;
    } : Omit<{
        type: StringConstructor;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    order: unknown extends Defaults["order"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["order"] ? string | number : string | number | Defaults["order"]>;
        default: unknown extends Defaults["order"] ? string | number : NonNullable<string | number> | Defaults["order"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    symbol: unknown extends Defaults["symbol"] ? {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    } : Omit<{
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["symbol"] ? any : any>;
        default: unknown extends Defaults["symbol"] ? any : any;
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
    };
    block: unknown extends Defaults["block"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["block"] ? boolean : boolean | Defaults["block"]>;
        default: unknown extends Defaults["block"] ? boolean : boolean | Defaults["block"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    active: unknown extends Defaults["active"] ? Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<boolean>;
        default: boolean;
    } : Omit<Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
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
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
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
    text: unknown extends Defaults["text"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string | number | boolean : string | number | boolean | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["text"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    class: unknown extends Defaults["class"] ? import("vue").PropType<any> : {
        type: import("vue").PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    to: unknown extends Defaults["to"] ? import("vue").PropType<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> : {
        type: import("vue").PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : NonNullable<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> | Defaults["to"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<boolean | import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? boolean | import("../../composables/icons.js").IconValue : boolean | import("../../composables/icons.js").IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? boolean | import("../../composables/icons.js").IconValue : NonNullable<boolean | import("../../composables/icons.js").IconValue> | Defaults["icon"];
    };
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
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
    density: unknown extends Defaults["density"] ? {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
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
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    stacked: unknown extends Defaults["stacked"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"]>;
        default: unknown extends Defaults["stacked"] ? boolean : boolean | Defaults["stacked"];
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
    app: unknown extends Defaults["app"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["app"] ? boolean : boolean | Defaults["app"]>;
        default: unknown extends Defaults["app"] ? boolean : boolean | Defaults["app"];
    };
    appear: unknown extends Defaults["appear"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["appear"] ? boolean : boolean | Defaults["appear"]>;
        default: unknown extends Defaults["appear"] ? boolean : boolean | Defaults["appear"];
    };
    extended: unknown extends Defaults["extended"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"]>;
        default: unknown extends Defaults["extended"] ? boolean : boolean | Defaults["extended"];
    };
    layout: unknown extends Defaults["layout"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["layout"] ? boolean : boolean | Defaults["layout"]>;
        default: unknown extends Defaults["layout"] ? boolean : boolean | Defaults["layout"];
    };
    offset: unknown extends Defaults["offset"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["offset"] ? boolean : boolean | Defaults["offset"]>;
        default: unknown extends Defaults["offset"] ? boolean : boolean | Defaults["offset"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
};
export declare const VFab: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        offset: boolean;
        exact: boolean;
        absolute: boolean;
        block: boolean;
        active: boolean;
        order: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        appear: boolean;
        layout: boolean;
        app: boolean;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        extended: boolean;
    } & {
        name?: string | undefined;
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
        value?: any;
        loading?: string | boolean | undefined;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        icon?: boolean | import("../../composables/icons.js").IconValue | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: boolean) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        offset: boolean;
        exact: boolean;
        absolute: boolean;
        block: boolean;
        active: boolean;
        order: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        text: string | number | boolean;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        appear: boolean;
        layout: boolean;
        app: boolean;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        extended: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
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
        offset: boolean;
        exact: boolean;
        absolute: boolean;
        block: boolean;
        active: boolean;
        order: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        appear: boolean;
        layout: boolean;
        app: boolean;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        extended: boolean;
    } & {
        name?: string | undefined;
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
        value?: any;
        loading?: string | boolean | undefined;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        icon?: boolean | import("../../composables/icons.js").IconValue | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }, {}, {}, {}, {}, {
        symbol: any;
        replace: boolean;
        flat: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        offset: boolean;
        exact: boolean;
        absolute: boolean;
        block: boolean;
        active: boolean;
        order: string | number;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        text: string | number | boolean;
        disabled: boolean;
        size: string | number;
        readonly: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        appear: boolean;
        layout: boolean;
        app: boolean;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        stacked: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        extended: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    symbol: any;
    replace: boolean;
    flat: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    offset: boolean;
    exact: boolean;
    absolute: boolean;
    block: boolean;
    active: boolean;
    order: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    style: import("vue").StyleValue;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    appear: boolean;
    layout: boolean;
    app: boolean;
    modelValue: boolean;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    extended: boolean;
} & {
    name?: string | undefined;
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
    value?: any;
    loading?: string | boolean | undefined;
    text?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    icon?: boolean | import("../../composables/icons.js").IconValue | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    selectedClass?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => true;
}, string, {
    symbol: any;
    replace: boolean;
    flat: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    offset: boolean;
    exact: boolean;
    absolute: boolean;
    block: boolean;
    active: boolean;
    order: string | number;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    style: import("vue").StyleValue;
    text: string | number | boolean;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    appear: boolean;
    layout: boolean;
    app: boolean;
    modelValue: boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    stacked: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    extended: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    replace: BooleanConstructor;
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    exact: BooleanConstructor;
    block: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    active: Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    value: null;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: BooleanConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    icon: import("vue").PropType<boolean | import("../../composables/icons.js").IconValue>;
    href: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    selectedClass: StringConstructor;
    activeColor: StringConstructor;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    app: BooleanConstructor;
    appear: BooleanConstructor;
    extended: BooleanConstructor;
    layout: BooleanConstructor;
    offset: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}, import("vue").ExtractPropTypes<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    location: import("vue").PropType<import("../../util/index.js").Anchor | null>;
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
    symbol: {
        type: null;
        default: import("vue").InjectionKey<import("../../composables/group.js").GroupProvide>;
    };
    replace: BooleanConstructor;
    flat: BooleanConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    exact: BooleanConstructor;
    block: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    active: Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: import("vue").PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    value: null;
    loading: (StringConstructor | BooleanConstructor)[];
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: BooleanConstructor;
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    readonly: BooleanConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: Omit<{
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    to: import("vue").PropType<import("vue-router").RouteLocationRaw>;
    icon: import("vue").PropType<boolean | import("../../composables/icons.js").IconValue>;
    href: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    selectedClass: StringConstructor;
    activeColor: StringConstructor;
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    slim: BooleanConstructor;
    stacked: BooleanConstructor;
    ripple: {
        type: import("vue").PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    app: BooleanConstructor;
    appear: BooleanConstructor;
    extended: BooleanConstructor;
    layout: BooleanConstructor;
    offset: BooleanConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>;
export type VFab = InstanceType<typeof VFab>;
