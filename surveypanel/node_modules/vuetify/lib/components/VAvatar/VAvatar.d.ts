import { IconValue } from "../../composables/icons.js";
export declare const makeVAvatarProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    rounded?: unknown;
    tile?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    start?: unknown;
    end?: unknown;
    icon?: unknown;
    image?: unknown;
    text?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    start: unknown extends Defaults["start"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["start"] ? boolean : boolean | Defaults["start"]>;
        default: unknown extends Defaults["start"] ? boolean : boolean | Defaults["start"];
    };
    end: unknown extends Defaults["end"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["end"] ? boolean : boolean | Defaults["end"]>;
        default: unknown extends Defaults["end"] ? boolean : boolean | Defaults["end"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
};
export declare const VAvatar: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        end: boolean;
        start: boolean;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        text?: string | undefined;
        class?: any;
        theme?: string | undefined;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        end: boolean;
        start: boolean;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
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
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        end: boolean;
        start: boolean;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        tile: boolean;
    } & {
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        image?: string | undefined;
        text?: string | undefined;
        class?: any;
        theme?: string | undefined;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        end: boolean;
        start: boolean;
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    end: boolean;
    start: boolean;
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    tile: boolean;
} & {
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    image?: string | undefined;
    text?: string | undefined;
    class?: any;
    theme?: string | undefined;
    icon?: IconValue | undefined;
    rounded?: string | number | boolean | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    end: boolean;
    start: boolean;
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    image: StringConstructor;
    text: StringConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: import("vue").PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    density: {
        type: import("vue").PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    image: StringConstructor;
    text: StringConstructor;
}>>;
export type VAvatar = InstanceType<typeof VAvatar>;
