import { IconValue } from "../../composables/icons.js";
import type { Prop, PropType } from 'vue';
export type TimelineItemSide = 'start' | 'end' | undefined;
export type VTimelineItemSlots = {
    default: never;
    icon: never;
    opposite: never;
};
export declare const makeVTimelineItemProps: <Defaults extends {
    tag?: unknown;
    size?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    density?: unknown;
    dotColor?: unknown;
    fillDot?: unknown;
    hideDot?: unknown;
    hideOpposite?: unknown;
    icon?: unknown;
    iconColor?: unknown;
    lineInset?: unknown;
    side?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
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
    density: unknown extends Defaults["density"] ? PropType<"default" | "compact"> : {
        type: PropType<unknown extends Defaults["density"] ? "default" | "compact" : "default" | "compact" | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? "default" | "compact" : Defaults["density"] | NonNullable<"default" | "compact">;
    };
    dotColor: unknown extends Defaults["dotColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"]>;
        default: unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"];
    };
    fillDot: unknown extends Defaults["fillDot"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"]>;
        default: unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"];
    };
    hideDot: unknown extends Defaults["hideDot"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideDot"] ? boolean : boolean | Defaults["hideDot"]>;
        default: unknown extends Defaults["hideDot"] ? boolean : boolean | Defaults["hideDot"];
    };
    hideOpposite: unknown extends Defaults["hideOpposite"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"]>;
        default: unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"];
    };
    lineInset: unknown extends Defaults["lineInset"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["lineInset"] ? string | number : string | number | Defaults["lineInset"]>;
        default: unknown extends Defaults["lineInset"] ? string | number : NonNullable<string | number> | Defaults["lineInset"];
    };
    side: unknown extends Defaults["side"] ? Prop<TimelineItemSide> : {
        type: PropType<unknown extends Defaults["side"] ? TimelineItemSide : TimelineItemSide | Defaults["side"]>;
        default: unknown extends Defaults["side"] ? TimelineItemSide : Defaults["side"] | NonNullable<TimelineItemSide>;
    };
};
export declare const VTimelineItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        icon?: IconValue | undefined;
        elevation?: string | number | undefined;
        side?: TimelineItemSide;
        density?: "default" | "compact" | undefined;
        rounded?: string | number | boolean | undefined;
        iconColor?: string | undefined;
        dotColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        lineInset?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            opposite?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            opposite?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:opposite"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        rounded: string | number | boolean;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
        hideOpposite: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        icon: () => import("vue").VNode[];
        opposite: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        icon?: IconValue | undefined;
        elevation?: string | number | undefined;
        side?: TimelineItemSide;
        density?: "default" | "compact" | undefined;
        rounded?: string | number | boolean | undefined;
        iconColor?: string | undefined;
        dotColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        lineInset?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            opposite?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            opposite?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:opposite"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        rounded: string | number | boolean;
        tile: boolean;
        fillDot: boolean;
        hideDot: boolean;
        hideOpposite: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    tile: boolean;
    fillDot: boolean;
    hideDot: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
    icon?: IconValue | undefined;
    elevation?: string | number | undefined;
    side?: TimelineItemSide;
    density?: "default" | "compact" | undefined;
    rounded?: string | number | boolean | undefined;
    iconColor?: string | undefined;
    dotColor?: string | undefined;
    hideOpposite?: boolean | undefined;
    lineInset?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        icon?: (() => import("vue").VNodeChild) | undefined;
        opposite?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        icon?: false | (() => import("vue").VNodeChild) | undefined;
        opposite?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:opposite"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    rounded: string | number | boolean;
    tile: boolean;
    fillDot: boolean;
    hideDot: boolean;
    hideOpposite: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    icon: () => import("vue").VNode[];
    opposite: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: PropType<"default" | "compact">;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    lineInset: (StringConstructor | NumberConstructor)[];
    side: Prop<TimelineItemSide>;
}, import("vue").ExtractPropTypes<{
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    density: PropType<"default" | "compact">;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    icon: PropType<IconValue>;
    iconColor: StringConstructor;
    lineInset: (StringConstructor | NumberConstructor)[];
    side: Prop<TimelineItemSide>;
}>>;
export type VTimelineItem = InstanceType<typeof VTimelineItem>;
