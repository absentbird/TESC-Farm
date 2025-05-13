import type { PropType } from 'vue';
export type SparklineItem = string | number | {
    value: number;
};
export declare const makeLineProps: <Defaults extends {
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
} = {}>(defaults?: Defaults | undefined) => {
    autoDraw: unknown extends Defaults["autoDraw"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"]>;
        default: unknown extends Defaults["autoDraw"] ? boolean : boolean | Defaults["autoDraw"];
    };
    autoDrawDuration: unknown extends Defaults["autoDrawDuration"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["autoDrawDuration"] ? string | number : string | number | Defaults["autoDrawDuration"]>;
        default: unknown extends Defaults["autoDrawDuration"] ? string | number : NonNullable<string | number> | Defaults["autoDrawDuration"];
    };
    autoDrawEasing: unknown extends Defaults["autoDrawEasing"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"]>;
        default: unknown extends Defaults["autoDrawEasing"] ? string : string | Defaults["autoDrawEasing"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    gradient: unknown extends Defaults["gradient"] ? {
        type: PropType<string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string[] : string[] | Defaults["gradient"];
    };
    gradientDirection: unknown extends Defaults["gradientDirection"] ? {
        type: PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    } : Omit<{
        type: PropType<"top" | "bottom" | "left" | "right">;
        validator: (val: string) => boolean;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["gradientDirection"] ? "left" | "top" | "bottom" | "right" : "left" | "top" | "bottom" | "right" | Defaults["gradientDirection"]>;
        default: unknown extends Defaults["gradientDirection"] ? "left" | "top" | "bottom" | "right" : NonNullable<"left" | "top" | "bottom" | "right"> | Defaults["gradientDirection"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    labels: unknown extends Defaults["labels"] ? {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<SparklineItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["labels"] ? SparklineItem[] : SparklineItem[] | Defaults["labels"]>;
        default: unknown extends Defaults["labels"] ? SparklineItem[] : SparklineItem[] | Defaults["labels"];
    };
    labelSize: unknown extends Defaults["labelSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["labelSize"] ? string | number : string | number | Defaults["labelSize"]>;
        default: unknown extends Defaults["labelSize"] ? string | number : NonNullable<string | number> | Defaults["labelSize"];
    };
    lineWidth: unknown extends Defaults["lineWidth"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["lineWidth"] ? string | number : string | number | Defaults["lineWidth"]>;
        default: unknown extends Defaults["lineWidth"] ? string | number : NonNullable<string | number> | Defaults["lineWidth"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? string : string | Defaults["itemValue"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<SparklineItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<SparklineItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? SparklineItem[] : SparklineItem[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? SparklineItem[] : SparklineItem[] | Defaults["modelValue"];
    };
    min: unknown extends Defaults["min"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : NonNullable<string | number> | Defaults["min"];
    };
    max: unknown extends Defaults["max"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
    };
    padding: unknown extends Defaults["padding"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["padding"] ? string | number : string | number | Defaults["padding"]>;
        default: unknown extends Defaults["padding"] ? string | number : NonNullable<string | number> | Defaults["padding"];
    };
    showLabels: unknown extends Defaults["showLabels"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"]>;
        default: unknown extends Defaults["showLabels"] ? boolean : boolean | Defaults["showLabels"];
    };
    smooth: unknown extends Defaults["smooth"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["smooth"] ? string | number | boolean : string | number | boolean | Defaults["smooth"]>;
        default: unknown extends Defaults["smooth"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["smooth"];
    };
    width: unknown extends Defaults["width"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
};
