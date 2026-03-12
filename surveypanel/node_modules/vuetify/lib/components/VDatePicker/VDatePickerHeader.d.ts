import { IconValue } from "../../composables/icons.js";
export type VDatePickerHeaderSlots = {
    prepend: never;
    default: never;
    append: never;
};
export declare const makeVDatePickerHeaderProps: <Defaults extends {
    appendIcon?: unknown;
    color?: unknown;
    header?: unknown;
    transition?: unknown;
    onClick?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    header: unknown extends Defaults["header"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["header"] ? string : string | Defaults["header"]>;
        default: unknown extends Defaults["header"] ? string : string | Defaults["header"];
    };
    transition: unknown extends Defaults["transition"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string : string | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string : string | Defaults["transition"];
    };
    onClick: unknown extends Defaults["onClick"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"];
    };
};
export declare const VDatePickerHeader: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
        color?: string | undefined;
        transition?: string | undefined;
        header?: string | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            prepend?: (() => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: (() => any) | undefined;
        "onClick:append"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: () => true;
        'click:append': () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode[];
        default: () => import("vue").VNode[];
        append: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {} & {
        color?: string | undefined;
        transition?: string | undefined;
        header?: string | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        appendIcon?: IconValue | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            prepend?: (() => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: (() => any) | undefined;
        "onClick:append"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{} & {
    color?: string | undefined;
    transition?: string | undefined;
    header?: string | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    appendIcon?: IconValue | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        prepend?: (() => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onClick?: (() => any) | undefined;
    "onClick:append"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => true;
    'click:append': () => true;
}, string, {}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode[];
    default: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    appendIcon: import("vue").PropType<IconValue>;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: import("vue").PropType<(args_0: MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    appendIcon: import("vue").PropType<IconValue>;
    color: StringConstructor;
    header: StringConstructor;
    transition: StringConstructor;
    onClick: import("vue").PropType<(args_0: MouseEvent) => void>;
}>>;
export type VDatePickerHeader = InstanceType<typeof VDatePickerHeader>;
