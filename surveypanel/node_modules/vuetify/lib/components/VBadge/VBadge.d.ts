import { IconValue } from "../../composables/icons.js";
export type VBadgeSlots = {
    default: never;
    badge: never;
};
export declare const makeVBadgeProps: <Defaults extends {
    transition?: unknown;
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    location?: unknown;
    class?: unknown;
    style?: unknown;
    bordered?: unknown;
    color?: unknown;
    content?: unknown;
    dot?: unknown;
    floating?: unknown;
    icon?: unknown;
    inline?: unknown;
    label?: unknown;
    max?: unknown;
    modelValue?: unknown;
    offsetX?: unknown;
    offsetY?: unknown;
    textColor?: unknown;
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
    location: unknown extends Defaults["location"] ? {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    } : Omit<{
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
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
    bordered: unknown extends Defaults["bordered"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bordered"] ? boolean : boolean | Defaults["bordered"]>;
        default: unknown extends Defaults["bordered"] ? boolean : boolean | Defaults["bordered"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    content: unknown extends Defaults["content"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["content"] ? string | number : string | number | Defaults["content"]>;
        default: unknown extends Defaults["content"] ? string | number : NonNullable<string | number> | Defaults["content"];
    };
    dot: unknown extends Defaults["dot"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dot"] ? boolean : boolean | Defaults["dot"]>;
        default: unknown extends Defaults["dot"] ? boolean : boolean | Defaults["dot"];
    };
    floating: unknown extends Defaults["floating"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"]>;
        default: unknown extends Defaults["floating"] ? boolean : boolean | Defaults["floating"];
    };
    icon: unknown extends Defaults["icon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    label: unknown extends Defaults["label"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    max: unknown extends Defaults["max"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
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
    offsetX: unknown extends Defaults["offsetX"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["offsetX"] ? string | number : string | number | Defaults["offsetX"]>;
        default: unknown extends Defaults["offsetX"] ? string | number : NonNullable<string | number> | Defaults["offsetX"];
    };
    offsetY: unknown extends Defaults["offsetY"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["offsetY"] ? string | number : string | number | Defaults["offsetY"]>;
        default: unknown extends Defaults["offsetY"] ? string | number : NonNullable<string | number> | Defaults["offsetY"];
    };
    textColor: unknown extends Defaults["textColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["textColor"] ? string : string | Defaults["textColor"]>;
        default: unknown extends Defaults["textColor"] ? string : string | Defaults["textColor"];
    };
};
export declare const VBadge: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        label: string;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dot: boolean;
        modelValue: boolean;
        tile: boolean;
        floating: boolean;
        bordered: boolean;
    } & {
        max?: string | number | undefined;
        color?: string | undefined;
        content?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        icon?: IconValue | undefined;
        offsetX?: string | number | undefined;
        offsetY?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        textColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            badge?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            badge?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        label: string;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dot: boolean;
        modelValue: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        floating: boolean;
        bordered: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        badge: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        inline: boolean;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        label: string;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dot: boolean;
        modelValue: boolean;
        tile: boolean;
        floating: boolean;
        bordered: boolean;
    } & {
        max?: string | number | undefined;
        color?: string | undefined;
        content?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        icon?: IconValue | undefined;
        offsetX?: string | number | undefined;
        offsetY?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        textColor?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            badge?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            badge?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        inline: boolean;
        location: import("../../util/index.js").Anchor | null;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        label: string;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        dot: boolean;
        modelValue: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        floating: boolean;
        bordered: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    location: import("../../util/index.js").Anchor | null;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    label: string;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    dot: boolean;
    modelValue: boolean;
    tile: boolean;
    floating: boolean;
    bordered: boolean;
} & {
    max?: string | number | undefined;
    color?: string | undefined;
    content?: string | number | undefined;
    class?: any;
    theme?: string | undefined;
    icon?: IconValue | undefined;
    offsetX?: string | number | undefined;
    offsetY?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    textColor?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        badge?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        badge?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:badge"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    location: import("../../util/index.js").Anchor | null;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    label: string;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    dot: boolean;
    modelValue: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    floating: boolean;
    bordered: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    badge: () => import("vue").VNode[];
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
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
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
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    bordered: BooleanConstructor;
    color: StringConstructor;
    content: (StringConstructor | NumberConstructor)[];
    dot: BooleanConstructor;
    floating: BooleanConstructor;
    icon: import("vue").PropType<IconValue>;
    inline: BooleanConstructor;
    label: {
        type: StringConstructor;
        default: string;
    };
    max: (StringConstructor | NumberConstructor)[];
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    offsetX: (StringConstructor | NumberConstructor)[];
    offsetY: (StringConstructor | NumberConstructor)[];
    textColor: StringConstructor;
}>>;
export type VBadge = InstanceType<typeof VBadge>;
