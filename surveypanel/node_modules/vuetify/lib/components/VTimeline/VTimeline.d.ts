import type { Prop } from 'vue';
export type TimelineDirection = 'vertical' | 'horizontal';
export type TimelineSide = 'start' | 'end' | undefined;
export type TimelineAlign = 'center' | 'start';
export type TimelineTruncateLine = 'start' | 'end' | 'both' | undefined;
export declare const makeVTimelineProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    size?: unknown;
    iconColor?: unknown;
    dotColor?: unknown;
    fillDot?: unknown;
    hideOpposite?: unknown;
    lineInset?: unknown;
    align?: unknown;
    direction?: unknown;
    justify?: unknown;
    side?: unknown;
    lineThickness?: unknown;
    lineColor?: unknown;
    truncateLine?: unknown;
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
    iconColor: unknown extends Defaults["iconColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string : string | Defaults["iconColor"];
    };
    dotColor: unknown extends Defaults["dotColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"]>;
        default: unknown extends Defaults["dotColor"] ? string : string | Defaults["dotColor"];
    };
    fillDot: unknown extends Defaults["fillDot"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"]>;
        default: unknown extends Defaults["fillDot"] ? boolean : boolean | Defaults["fillDot"];
    };
    hideOpposite: unknown extends Defaults["hideOpposite"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"]>;
        default: unknown extends Defaults["hideOpposite"] ? boolean : boolean | Defaults["hideOpposite"];
    };
    lineInset: unknown extends Defaults["lineInset"] ? {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lineInset"] ? string | number : string | number | Defaults["lineInset"]>;
        default: unknown extends Defaults["lineInset"] ? string | number : NonNullable<string | number> | Defaults["lineInset"];
    };
    align: unknown extends Defaults["align"] ? Prop<TimelineAlign> : {
        type: import("vue").PropType<unknown extends Defaults["align"] ? TimelineAlign : TimelineAlign | Defaults["align"]>;
        default: unknown extends Defaults["align"] ? TimelineAlign : Defaults["align"] | NonNullable<TimelineAlign>;
    };
    direction: unknown extends Defaults["direction"] ? Prop<TimelineDirection> : {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? TimelineDirection : TimelineDirection | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? TimelineDirection : Defaults["direction"] | NonNullable<TimelineDirection>;
    };
    justify: unknown extends Defaults["justify"] ? {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["justify"] ? string : string | Defaults["justify"]>;
        default: unknown extends Defaults["justify"] ? string : string | Defaults["justify"];
    };
    side: unknown extends Defaults["side"] ? Prop<TimelineSide> : {
        type: import("vue").PropType<unknown extends Defaults["side"] ? TimelineSide : TimelineSide | Defaults["side"]>;
        default: unknown extends Defaults["side"] ? TimelineSide : Defaults["side"] | NonNullable<TimelineSide>;
    };
    lineThickness: unknown extends Defaults["lineThickness"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lineThickness"] ? string | number : string | number | Defaults["lineThickness"]>;
        default: unknown extends Defaults["lineThickness"] ? string | number : NonNullable<string | number> | Defaults["lineThickness"];
    };
    lineColor: unknown extends Defaults["lineColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"]>;
        default: unknown extends Defaults["lineColor"] ? string : string | Defaults["lineColor"];
    };
    truncateLine: unknown extends Defaults["truncateLine"] ? Prop<TimelineTruncateLine> : {
        type: import("vue").PropType<unknown extends Defaults["truncateLine"] ? TimelineTruncateLine : TimelineTruncateLine | Defaults["truncateLine"]>;
        default: unknown extends Defaults["truncateLine"] ? TimelineTruncateLine : Defaults["truncateLine"] | NonNullable<TimelineTruncateLine>;
    };
};
export declare const VTimeline: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        justify: string;
        density: import("../../composables/density.js").Density;
        fillDot: boolean;
        lineInset: string | number;
        lineThickness: string | number;
    } & {
        direction?: TimelineDirection | undefined;
        class?: any;
        theme?: string | undefined;
        align?: TimelineAlign | undefined;
        side?: TimelineSide;
        iconColor?: string | undefined;
        dotColor?: string | undefined;
        lineColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        truncateLine?: TimelineTruncateLine;
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
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        justify: string;
        density: import("../../composables/density.js").Density;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: string | number;
        lineThickness: string | number;
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
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        justify: string;
        density: import("../../composables/density.js").Density;
        fillDot: boolean;
        lineInset: string | number;
        lineThickness: string | number;
    } & {
        direction?: TimelineDirection | undefined;
        class?: any;
        theme?: string | undefined;
        align?: TimelineAlign | undefined;
        side?: TimelineSide;
        iconColor?: string | undefined;
        dotColor?: string | undefined;
        lineColor?: string | undefined;
        hideOpposite?: boolean | undefined;
        truncateLine?: TimelineTruncateLine;
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
        style: import("vue").StyleValue;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        justify: string;
        density: import("../../composables/density.js").Density;
        fillDot: boolean;
        hideOpposite: boolean;
        lineInset: string | number;
        lineThickness: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    justify: string;
    density: import("../../composables/density.js").Density;
    fillDot: boolean;
    lineInset: string | number;
    lineThickness: string | number;
} & {
    direction?: TimelineDirection | undefined;
    class?: any;
    theme?: string | undefined;
    align?: TimelineAlign | undefined;
    side?: TimelineSide;
    iconColor?: string | undefined;
    dotColor?: string | undefined;
    lineColor?: string | undefined;
    hideOpposite?: boolean | undefined;
    truncateLine?: TimelineTruncateLine;
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
    style: import("vue").StyleValue;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    justify: string;
    density: import("../../composables/density.js").Density;
    fillDot: boolean;
    hideOpposite: boolean;
    lineInset: string | number;
    lineThickness: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconColor: StringConstructor;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    lineInset: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: import("vue").PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
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
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    iconColor: StringConstructor;
    dotColor: StringConstructor;
    fillDot: BooleanConstructor;
    hideOpposite: {
        type: BooleanConstructor;
        default: undefined;
    };
    lineInset: {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    align: Prop<TimelineAlign>;
    direction: Prop<TimelineDirection>;
    justify: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    side: Prop<TimelineSide>;
    lineThickness: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineColor: StringConstructor;
    truncateLine: Prop<TimelineTruncateLine>;
}>>;
export type VTimeline = InstanceType<typeof VTimeline>;
