export declare const makeVProgressLinearProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    location?: unknown;
    class?: unknown;
    style?: unknown;
    absolute?: unknown;
    active?: unknown;
    bgColor?: unknown;
    bgOpacity?: unknown;
    bufferValue?: unknown;
    bufferColor?: unknown;
    bufferOpacity?: unknown;
    clickable?: unknown;
    color?: unknown;
    height?: unknown;
    indeterminate?: unknown;
    max?: unknown;
    modelValue?: unknown;
    opacity?: unknown;
    reverse?: unknown;
    stream?: unknown;
    striped?: unknown;
    roundedBar?: unknown;
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
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    bgOpacity: unknown extends Defaults["bgOpacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["bgOpacity"] ? string | number : string | number | Defaults["bgOpacity"]>;
        default: unknown extends Defaults["bgOpacity"] ? string | number : NonNullable<string | number> | Defaults["bgOpacity"];
    };
    bufferValue: unknown extends Defaults["bufferValue"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["bufferValue"] ? string | number : string | number | Defaults["bufferValue"]>;
        default: unknown extends Defaults["bufferValue"] ? string | number : NonNullable<string | number> | Defaults["bufferValue"];
    };
    bufferColor: unknown extends Defaults["bufferColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["bufferColor"] ? string : string | Defaults["bufferColor"]>;
        default: unknown extends Defaults["bufferColor"] ? string : string | Defaults["bufferColor"];
    };
    bufferOpacity: unknown extends Defaults["bufferOpacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["bufferOpacity"] ? string | number : string | number | Defaults["bufferOpacity"]>;
        default: unknown extends Defaults["bufferOpacity"] ? string | number : NonNullable<string | number> | Defaults["bufferOpacity"];
    };
    clickable: unknown extends Defaults["clickable"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["clickable"] ? boolean : boolean | Defaults["clickable"]>;
        default: unknown extends Defaults["clickable"] ? boolean : boolean | Defaults["clickable"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    indeterminate: unknown extends Defaults["indeterminate"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"]>;
        default: unknown extends Defaults["indeterminate"] ? boolean : boolean | Defaults["indeterminate"];
    };
    max: unknown extends Defaults["max"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? string | number : string | number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? string | number : NonNullable<string | number> | Defaults["modelValue"];
    };
    opacity: unknown extends Defaults["opacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : NonNullable<string | number> | Defaults["opacity"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    stream: unknown extends Defaults["stream"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["stream"] ? boolean : boolean | Defaults["stream"]>;
        default: unknown extends Defaults["stream"] ? boolean : boolean | Defaults["stream"];
    };
    striped: unknown extends Defaults["striped"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["striped"] ? boolean : boolean | Defaults["striped"]>;
        default: unknown extends Defaults["striped"] ? boolean : boolean | Defaults["striped"];
    };
    roundedBar: unknown extends Defaults["roundedBar"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["roundedBar"] ? boolean : boolean | Defaults["roundedBar"]>;
        default: unknown extends Defaults["roundedBar"] ? boolean : boolean | Defaults["roundedBar"];
    };
};
export declare const VProgressLinear: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reverse: boolean;
        max: string | number;
        absolute: boolean;
        location: import("../../util/index.js").Anchor | null;
        height: string | number;
        active: boolean;
        stream: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        indeterminate: boolean;
        modelValue: string | number;
        tile: boolean;
        bufferValue: string | number;
        clickable: boolean;
        striped: boolean;
        roundedBar: boolean;
    } & {
        color?: string | undefined;
        opacity?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | number | undefined;
        bufferColor?: string | undefined;
        bufferOpacity?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (value: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reverse: boolean;
        max: string | number;
        absolute: boolean;
        location: import("../../util/index.js").Anchor | null;
        height: string | number;
        active: boolean;
        stream: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        indeterminate: boolean;
        modelValue: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        bufferValue: string | number;
        clickable: boolean;
        striped: boolean;
        roundedBar: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        reverse: boolean;
        max: string | number;
        absolute: boolean;
        location: import("../../util/index.js").Anchor | null;
        height: string | number;
        active: boolean;
        stream: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        indeterminate: boolean;
        modelValue: string | number;
        tile: boolean;
        bufferValue: string | number;
        clickable: boolean;
        striped: boolean;
        roundedBar: boolean;
    } & {
        color?: string | undefined;
        opacity?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        bgOpacity?: string | number | undefined;
        bufferColor?: string | undefined;
        bufferOpacity?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                value: number;
                buffer: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        max: string | number;
        absolute: boolean;
        location: import("../../util/index.js").Anchor | null;
        height: string | number;
        active: boolean;
        stream: boolean;
        style: import("vue").StyleValue;
        tag: string | import("../../util/index.js").JSXComponent;
        indeterminate: boolean;
        modelValue: string | number;
        rounded: string | number | boolean;
        tile: boolean;
        bufferValue: string | number;
        clickable: boolean;
        striped: boolean;
        roundedBar: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    reverse: boolean;
    max: string | number;
    absolute: boolean;
    location: import("../../util/index.js").Anchor | null;
    height: string | number;
    active: boolean;
    stream: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    indeterminate: boolean;
    modelValue: string | number;
    tile: boolean;
    bufferValue: string | number;
    clickable: boolean;
    striped: boolean;
    roundedBar: boolean;
} & {
    color?: string | undefined;
    opacity?: string | number | undefined;
    class?: any;
    theme?: string | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    bgOpacity?: string | number | undefined;
    bufferColor?: string | undefined;
    bufferOpacity?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } | ((arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            value: number;
            buffer: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((value: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (value: number) => true;
}, string, {
    reverse: boolean;
    max: string | number;
    absolute: boolean;
    location: import("../../util/index.js").Anchor | null;
    height: string | number;
    active: boolean;
    stream: boolean;
    style: import("vue").StyleValue;
    tag: string | import("../../util/index.js").JSXComponent;
    indeterminate: boolean;
    modelValue: string | number;
    rounded: string | number | boolean;
    tile: boolean;
    bufferValue: string | number;
    clickable: boolean;
    striped: boolean;
    roundedBar: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        value: number;
        buffer: number;
    }) => import("vue").VNode[];
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
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    bufferColor: StringConstructor;
    bufferOpacity: (StringConstructor | NumberConstructor)[];
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
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
    location: {
        type: import("vue").PropType<import("../../util/index.js").Anchor | null>;
        default: NonNullable<import("../../util/index.js").Anchor | null>;
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    absolute: BooleanConstructor;
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: StringConstructor;
    bgOpacity: (StringConstructor | NumberConstructor)[];
    bufferValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    bufferColor: StringConstructor;
    bufferOpacity: (StringConstructor | NumberConstructor)[];
    clickable: BooleanConstructor;
    color: StringConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    indeterminate: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    reverse: BooleanConstructor;
    stream: BooleanConstructor;
    striped: BooleanConstructor;
    roundedBar: BooleanConstructor;
}>>;
export type VProgressLinear = InstanceType<typeof VProgressLinear>;
