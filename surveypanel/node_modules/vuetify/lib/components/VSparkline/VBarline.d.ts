export type VBarlineSlots = {
    default: void;
    label: {
        index: number;
        value: string;
    };
};
export type SparklineItem = number | {
    value: number;
};
export type SparklineText = {
    x: number;
    value: string;
};
export interface Boundary {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
export interface Bar {
    x: number;
    y: number;
    height: number;
    value: number;
}
export declare const makeVBarlineProps: <Defaults extends {
    autoDraw?: unknown;
    autoDrawDuration?: unknown;
    autoDrawEasing?: unknown;
    color?: unknown;
    gradient?: unknown;
    gradientDirection?: unknown;
    height?: unknown;
    labels?: unknown;
    labelSize?: unknown;
    lineWidth?: unknown;
    id?: unknown;
    itemValue?: unknown;
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    padding?: unknown;
    showLabels?: unknown;
    smooth?: unknown;
    width?: unknown;
    autoLineWidth?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    autoDraw: unknown extends Defaults["autoDraw"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"]>;
        default: unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"];
    };
    autoDrawDuration: unknown extends Defaults["autoDrawDuration"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["autoDrawDuration"] ? string | number : string | number | Defaults["autoDrawDuration"]>;
        default: unknown extends Defaults["autoDrawDuration"] ? string | number : NonNullable<string | number> | Defaults["autoDrawDuration"];
    };
    autoDrawEasing: unknown extends Defaults["autoDrawEasing"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"]>;
        default: unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    gradient: unknown extends Defaults["gradient"] ? {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"];
    };
    gradientDirection: unknown extends Defaults["gradientDirection"] ? {
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    } : Omit<{
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["gradientDirection"] ? "left" | "top" | "bottom" | "right" : "left" | "top" | "bottom" | "right" | Defaults["gradientDirection"]>;
        default: unknown extends Defaults["gradientDirection"] ? "left" | "top" | "bottom" | "right" : NonNullable<"left" | "top" | "bottom" | "right"> | Defaults["gradientDirection"];
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
    labels: unknown extends Defaults["labels"] ? {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["labels"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["labels"]>;
        default: unknown extends Defaults["labels"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["labels"];
    };
    labelSize: unknown extends Defaults["labelSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["labelSize"] ? string | number : string | number | Defaults["labelSize"]>;
        default: unknown extends Defaults["labelSize"] ? string | number : NonNullable<string | number> | Defaults["labelSize"];
    };
    lineWidth: unknown extends Defaults["lineWidth"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["lineWidth"] ? string | number : string | number | Defaults["lineWidth"]>;
        default: unknown extends Defaults["lineWidth"] ? string | number : NonNullable<string | number> | Defaults["lineWidth"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["modelValue"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? import("./util/line.js").SparklineItem[] : import("./util/line.js").SparklineItem[] | Defaults["modelValue"];
    };
    min: unknown extends Defaults["min"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : NonNullable<string | number> | Defaults["min"];
    };
    max: unknown extends Defaults["max"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
    };
    padding: unknown extends Defaults["padding"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["padding"] ? string | number : string | number | Defaults["padding"]>;
        default: unknown extends Defaults["padding"] ? string | number : NonNullable<string | number> | Defaults["padding"];
    };
    showLabels: unknown extends Defaults["showLabels"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"]>;
        default: unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"];
    };
    smooth: unknown extends Defaults["smooth"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["smooth"] ? string | number | boolean : string | number | boolean | Defaults["smooth"]>;
        default: unknown extends Defaults["smooth"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["smooth"];
    };
    width: unknown extends Defaults["width"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    autoLineWidth: unknown extends Defaults["autoLineWidth"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["autoLineWidth"] ? boolean : boolean | Defaults["autoLineWidth"]>;
        default: unknown extends Defaults["autoLineWidth"] ? boolean : boolean | Defaults["autoLineWidth"];
    };
};
export declare const VBarline: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        height: string | number;
        width: string | number;
        padding: string | number;
        labels: import("./util/line.js").SparklineItem[];
        modelValue: import("./util/line.js").SparklineItem[];
        itemValue: string;
        gradient: string[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "top" | "bottom" | "right";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    } & {
        max?: string | number | undefined;
        id?: string | undefined;
        smooth?: string | number | boolean | undefined;
        min?: string | number | undefined;
        color?: string | undefined;
        autoDrawDuration?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: void) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        height: string | number;
        width: string | number;
        padding: string | number;
        labels: import("./util/line.js").SparklineItem[];
        modelValue: import("./util/line.js").SparklineItem[];
        itemValue: string;
        gradient: string[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "top" | "bottom" | "right";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: void) => import("vue").VNode[];
        label: (arg: {
            index: number;
            value: string;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        height: string | number;
        width: string | number;
        padding: string | number;
        labels: import("./util/line.js").SparklineItem[];
        modelValue: import("./util/line.js").SparklineItem[];
        itemValue: string;
        gradient: string[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "top" | "bottom" | "right";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    } & {
        max?: string | number | undefined;
        id?: string | undefined;
        smooth?: string | number | boolean | undefined;
        min?: string | number | undefined;
        color?: string | undefined;
        autoDrawDuration?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: void) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: {
                index: number;
                value: string;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        height: string | number;
        width: string | number;
        padding: string | number;
        labels: import("./util/line.js").SparklineItem[];
        modelValue: import("./util/line.js").SparklineItem[];
        itemValue: string;
        gradient: string[];
        autoDraw: boolean;
        autoDrawEasing: string;
        gradientDirection: "left" | "top" | "bottom" | "right";
        labelSize: string | number;
        lineWidth: string | number;
        showLabels: boolean;
        autoLineWidth: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    height: string | number;
    width: string | number;
    padding: string | number;
    labels: import("./util/line.js").SparklineItem[];
    modelValue: import("./util/line.js").SparklineItem[];
    itemValue: string;
    gradient: string[];
    autoDraw: boolean;
    autoDrawEasing: string;
    gradientDirection: "left" | "top" | "bottom" | "right";
    labelSize: string | number;
    lineWidth: string | number;
    showLabels: boolean;
    autoLineWidth: boolean;
} & {
    max?: string | number | undefined;
    id?: string | undefined;
    smooth?: string | number | boolean | undefined;
    min?: string | number | undefined;
    color?: string | undefined;
    autoDrawDuration?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: void) => import("vue").VNodeChild) | undefined;
        label?: ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    } | ((arg: void) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: {
            index: number;
            value: string;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: void) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: {
        index: number;
        value: string;
    }) => import("vue").VNodeChild) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    height: string | number;
    width: string | number;
    padding: string | number;
    labels: import("./util/line.js").SparklineItem[];
    modelValue: import("./util/line.js").SparklineItem[];
    itemValue: string;
    gradient: string[];
    autoDraw: boolean;
    autoDrawEasing: string;
    gradientDirection: "left" | "top" | "bottom" | "right";
    labelSize: string | number;
    lineWidth: string | number;
    showLabels: boolean;
    autoLineWidth: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: void) => import("vue").VNode[];
    label: (arg: {
        index: number;
        value: string;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (StringConstructor | NumberConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labels: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    padding: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    autoLineWidth: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    autoDraw: BooleanConstructor;
    autoDrawDuration: (StringConstructor | NumberConstructor)[];
    autoDrawEasing: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    gradient: {
        type: import("vue").PropType<string[]>;
        default: () => never[];
    };
    gradientDirection: {
        type: import("vue").PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    labels: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    labelSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    lineWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    id: StringConstructor;
    itemValue: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<import("./util/line.js").SparklineItem[]>;
        default: () => never[];
    };
    min: (StringConstructor | NumberConstructor)[];
    max: (StringConstructor | NumberConstructor)[];
    padding: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showLabels: BooleanConstructor;
    smooth: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    autoLineWidth: BooleanConstructor;
}>>;
export type VBarline = InstanceType<typeof VBarline>;
