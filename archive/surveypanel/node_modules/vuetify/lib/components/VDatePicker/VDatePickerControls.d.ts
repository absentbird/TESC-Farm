import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
export declare const makeVDatePickerControlsProps: <Defaults extends {
    active?: unknown;
    controlHeight?: unknown;
    disabled?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    modeIcon?: unknown;
    text?: unknown;
    viewMode?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    active: unknown extends Defaults["active"] ? {
        type: PropType<string | string[]>;
        default: undefined;
    } : Omit<{
        type: PropType<string | string[]>;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["active"] ? string | string[] : string | string[] | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? string | string[] : Defaults["active"] | NonNullable<string | string[]>;
    };
    controlHeight: unknown extends Defaults["controlHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["controlHeight"] ? string | number : string | number | Defaults["controlHeight"]>;
        default: unknown extends Defaults["controlHeight"] ? string | number : NonNullable<string | number> | Defaults["controlHeight"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | string | string[] | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | string | string[] | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? string | boolean | string[] | null : string | boolean | string[] | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? string | boolean | string[] | null : Defaults["disabled"] | NonNullable<string | boolean | string[] | null>;
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : NonNullable<IconValue> | Defaults["nextIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prevIcon"];
    };
    modeIcon: unknown extends Defaults["modeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modeIcon"] ? IconValue : IconValue | Defaults["modeIcon"]>;
        default: unknown extends Defaults["modeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["modeIcon"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: PropType<"month" | "months" | "year">;
        default: string;
    } : Omit<{
        type: PropType<"month" | "months" | "year">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["viewMode"] ? "month" | "year" | "months" : "month" | "year" | "months" | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? "month" | "year" | "months" : Defaults["viewMode"] | NonNullable<"month" | "year" | "months">;
    };
};
export declare const VDatePickerControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "year" | "months";
    } & {
        active?: string | string[] | undefined;
        text?: string | undefined;
        controlHeight?: string | number | undefined;
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
        "onClick:year"?: (() => any) | undefined;
        "onClick:month"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:text"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:year': () => true;
        'click:month': () => true;
        'click:prev': () => true;
        'click:next': () => true;
        'click:text': () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: string | string[];
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "year" | "months";
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
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "year" | "months";
    } & {
        active?: string | string[] | undefined;
        text?: string | undefined;
        controlHeight?: string | number | undefined;
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
        "onClick:year"?: (() => any) | undefined;
        "onClick:month"?: (() => any) | undefined;
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
        "onClick:text"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        active: string | string[];
        disabled: string | boolean | string[] | null;
        nextIcon: IconValue;
        prevIcon: IconValue;
        modeIcon: IconValue;
        viewMode: "month" | "year" | "months";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: string | boolean | string[] | null;
    nextIcon: IconValue;
    prevIcon: IconValue;
    modeIcon: IconValue;
    viewMode: "month" | "year" | "months";
} & {
    active?: string | string[] | undefined;
    text?: string | undefined;
    controlHeight?: string | number | undefined;
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
    "onClick:year"?: (() => any) | undefined;
    "onClick:month"?: (() => any) | undefined;
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
    "onClick:text"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:year': () => true;
    'click:month': () => true;
    'click:prev': () => true;
    'click:next': () => true;
    'click:text': () => true;
}, string, {
    active: string | string[];
    disabled: string | boolean | string[] | null;
    nextIcon: IconValue;
    prevIcon: IconValue;
    modeIcon: IconValue;
    viewMode: "month" | "year" | "months";
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (StringConstructor | NumberConstructor)[];
    disabled: {
        type: PropType<boolean | string | string[] | null>;
        default: null;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    modeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    active: {
        type: PropType<string | string[]>;
        default: undefined;
    };
    controlHeight: (StringConstructor | NumberConstructor)[];
    disabled: {
        type: PropType<boolean | string | string[] | null>;
        default: null;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    modeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    text: StringConstructor;
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
}>>;
export type VDatePickerControls = InstanceType<typeof VDatePickerControls>;
