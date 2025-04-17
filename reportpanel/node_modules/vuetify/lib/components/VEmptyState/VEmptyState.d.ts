import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
export type VEmptyStateSlots = {
    actions: {
        props: {
            onClick: (e: Event) => void;
        };
    };
    default: never;
    headline: never;
    title: never;
    media: never;
    text: never;
};
export declare const makeVEmptyStateProps: <Defaults extends {
    theme?: unknown;
    size?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    actionText?: unknown;
    bgColor?: unknown;
    color?: unknown;
    icon?: unknown;
    image?: unknown;
    justify?: unknown;
    headline?: unknown;
    title?: unknown;
    text?: unknown;
    textWidth?: unknown;
    href?: unknown;
    to?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    size: unknown extends Defaults["size"] ? Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | number | undefined>;
        default: NonNullable<string | number> | undefined;
    } : Omit<Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | number | undefined>;
        default: NonNullable<string | number> | undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number | undefined : string | number | Defaults["size"] | undefined>;
        default: unknown extends Defaults["size"] ? string | number | undefined : Defaults["size"] | NonNullable<string | number | undefined>;
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
    actionText: unknown extends Defaults["actionText"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["actionText"] ? string : string | Defaults["actionText"]>;
        default: unknown extends Defaults["actionText"] ? string : string | Defaults["actionText"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    image: unknown extends Defaults["image"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["image"] ? string : string | Defaults["image"]>;
        default: unknown extends Defaults["image"] ? string : string | Defaults["image"];
    };
    justify: unknown extends Defaults["justify"] ? {
        type: PropType<"start" | "center" | "end">;
        default: string;
    } : Omit<{
        type: PropType<"start" | "center" | "end">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["justify"] ? "center" | "end" | "start" : "center" | "end" | "start" | Defaults["justify"]>;
        default: unknown extends Defaults["justify"] ? "center" | "end" | "start" : Defaults["justify"] | NonNullable<"center" | "end" | "start">;
    };
    headline: unknown extends Defaults["headline"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["headline"] ? string : string | Defaults["headline"]>;
        default: unknown extends Defaults["headline"] ? string : string | Defaults["headline"];
    };
    title: unknown extends Defaults["title"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    textWidth: unknown extends Defaults["textWidth"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["textWidth"] ? string | number : string | number | Defaults["textWidth"]>;
        default: unknown extends Defaults["textWidth"] ? string | number : NonNullable<string | number> | Defaults["textWidth"];
    };
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    to: unknown extends Defaults["to"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["to"] ? string : string | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string : string | Defaults["to"];
    };
};
export declare const VEmptyState: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        size: string | number | undefined;
        justify: "center" | "end" | "start";
        textWidth: string | number;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        title?: string | undefined;
        image?: string | undefined;
        text?: string | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | undefined;
        icon?: IconValue | undefined;
        href?: string | undefined;
        bgColor?: string | undefined;
        actionText?: string | undefined;
        headline?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            actions?: ((arg: {
                props: {
                    onClick: (e: Event) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            headline?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            media?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            actions?: false | ((arg: {
                props: {
                    onClick: (e: Event) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            headline?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            media?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: {
            props: {
                onClick: (e: Event) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:headline"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:media"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:action"?: ((e: Event) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:action': (e: Event) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        size: string | number | undefined;
        justify: "center" | "end" | "start";
        textWidth: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        actions: (arg: {
            props: {
                onClick: (e: Event) => void;
            };
        }) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        headline: () => import("vue").VNode[];
        title: () => import("vue").VNode[];
        media: () => import("vue").VNode[];
        text: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        size: string | number | undefined;
        justify: "center" | "end" | "start";
        textWidth: string | number;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        title?: string | undefined;
        image?: string | undefined;
        text?: string | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | undefined;
        icon?: IconValue | undefined;
        href?: string | undefined;
        bgColor?: string | undefined;
        actionText?: string | undefined;
        headline?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            actions?: ((arg: {
                props: {
                    onClick: (e: Event) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            headline?: (() => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            media?: (() => import("vue").VNodeChild) | undefined;
            text?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            actions?: false | ((arg: {
                props: {
                    onClick: (e: Event) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            headline?: false | (() => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            media?: false | (() => import("vue").VNodeChild) | undefined;
            text?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:actions"?: false | ((arg: {
            props: {
                onClick: (e: Event) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:headline"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:media"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:action"?: ((e: Event) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        size: string | number | undefined;
        justify: "center" | "end" | "start";
        textWidth: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    size: string | number | undefined;
    justify: "center" | "end" | "start";
    textWidth: string | number;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    title?: string | undefined;
    image?: string | undefined;
    text?: string | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | undefined;
    icon?: IconValue | undefined;
    href?: string | undefined;
    bgColor?: string | undefined;
    actionText?: string | undefined;
    headline?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        actions?: ((arg: {
            props: {
                onClick: (e: Event) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        headline?: (() => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        media?: (() => import("vue").VNodeChild) | undefined;
        text?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        actions?: false | ((arg: {
            props: {
                onClick: (e: Event) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        headline?: false | (() => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        media?: false | (() => import("vue").VNodeChild) | undefined;
        text?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:actions"?: false | ((arg: {
        props: {
            onClick: (e: Event) => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:headline"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:media"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:text"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onClick:action"?: ((e: Event) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:action': (e: Event) => true;
}, string, {
    style: import("vue").StyleValue;
    size: string | number | undefined;
    justify: "center" | "end" | "start";
    textWidth: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    actions: (arg: {
        props: {
            onClick: (e: Event) => void;
        };
    }) => import("vue").VNode[];
    default: () => import("vue").VNode[];
    headline: () => import("vue").VNode[];
    title: () => import("vue").VNode[];
    media: () => import("vue").VNode[];
    text: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    size: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | number | undefined>;
        default: NonNullable<string | number> | undefined;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    actionText: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    icon: PropType<IconValue>;
    image: StringConstructor;
    justify: {
        type: PropType<"start" | "center" | "end">;
        default: string;
    };
    headline: StringConstructor;
    title: StringConstructor;
    text: StringConstructor;
    textWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    href: StringConstructor;
    to: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    size: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | number | undefined>;
        default: NonNullable<string | number> | undefined;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    actionText: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    icon: PropType<IconValue>;
    image: StringConstructor;
    justify: {
        type: PropType<"start" | "center" | "end">;
        default: string;
    };
    headline: StringConstructor;
    title: StringConstructor;
    text: StringConstructor;
    textWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    href: StringConstructor;
    to: StringConstructor;
}>>;
export type VEmptyState = InstanceType<typeof VEmptyState>;
