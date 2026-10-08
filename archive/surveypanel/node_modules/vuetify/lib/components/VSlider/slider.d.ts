import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue';
import type { VSliderTrack } from './VSliderTrack.js';
export type Tick = {
    value: number;
    position: number;
    label?: string;
};
type SliderProvide = {
    activeThumbRef: Ref<HTMLElement | undefined>;
    color: Ref<string | undefined>;
    decimals: Ref<number>;
    direction: Ref<'vertical' | 'horizontal'>;
    disabled: Ref<boolean | null | undefined>;
    elevation: Ref<number | string | undefined>;
    min: Ref<number>;
    max: Ref<number>;
    mousePressed: Ref<boolean>;
    numTicks: Ref<number>;
    onSliderMousedown: (e: MouseEvent) => void;
    onSliderTouchstart: (e: TouchEvent) => void;
    parseMouseMove: (e: MouseEvent | TouchEvent) => number | void;
    position: (val: number) => number;
    readonly: Ref<boolean | null | undefined>;
    rounded: Ref<boolean | number | string | undefined>;
    roundValue: (value: number) => number;
    thumbLabel: Ref<boolean | string | undefined>;
    showTicks: Ref<boolean | 'always'>;
    startOffset: Ref<number>;
    step: Ref<number>;
    thumbSize: Ref<number>;
    thumbColor: Ref<string | undefined>;
    trackColor: Ref<string | undefined>;
    trackFillColor: Ref<string | undefined>;
    trackSize: Ref<number>;
    ticks: Ref<readonly number[] | Record<string, string> | undefined>;
    tickSize: Ref<number>;
    trackContainerRef: Ref<VSliderTrack | undefined>;
    vertical: Ref<boolean>;
    parsedTicks: Ref<Tick[]>;
    hasLabels: Ref<boolean>;
    isReversed: Ref<boolean>;
    indexFromEnd: Ref<boolean>;
};
export declare const VSliderSymbol: InjectionKey<SliderProvide>;
export declare function getOffset(e: MouseEvent | TouchEvent, el: HTMLElement, direction: string): number;
export declare const makeSliderProps: <Defaults extends {
    ripple?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    disabled?: unknown;
    error?: unknown;
    readonly?: unknown;
    max?: unknown;
    min?: unknown;
    step?: unknown;
    thumbColor?: unknown;
    thumbLabel?: unknown;
    thumbSize?: unknown;
    showTicks?: unknown;
    ticks?: unknown;
    tickSize?: unknown;
    color?: unknown;
    trackColor?: unknown;
    trackFillColor?: unknown;
    trackSize?: unknown;
    direction?: unknown;
    reverse?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    ripple: unknown extends Defaults["ripple"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"]>;
        default: unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"];
    };
    elevation: unknown extends Defaults["elevation"] ? Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
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
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    max: unknown extends Defaults["max"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : NonNullable<string | number> | Defaults["min"];
    };
    step: unknown extends Defaults["step"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["step"] ? string | number : string | number | Defaults["step"]>;
        default: unknown extends Defaults["step"] ? string | number : NonNullable<string | number> | Defaults["step"];
    };
    thumbColor: unknown extends Defaults["thumbColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"]>;
        default: unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"];
    };
    thumbLabel: unknown extends Defaults["thumbLabel"] ? {
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["thumbLabel"] ? boolean | "always" | undefined : boolean | "always" | Defaults["thumbLabel"] | undefined>;
        default: unknown extends Defaults["thumbLabel"] ? boolean | "always" | undefined : Defaults["thumbLabel"] | NonNullable<boolean | "always" | undefined>;
    };
    thumbSize: unknown extends Defaults["thumbSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["thumbSize"] ? string | number : string | number | Defaults["thumbSize"]>;
        default: unknown extends Defaults["thumbSize"] ? string | number : NonNullable<string | number> | Defaults["thumbSize"];
    };
    showTicks: unknown extends Defaults["showTicks"] ? {
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showTicks"] ? boolean | "always" : boolean | "always" | Defaults["showTicks"]>;
        default: unknown extends Defaults["showTicks"] ? boolean | "always" : Defaults["showTicks"] | NonNullable<boolean | "always">;
    };
    ticks: unknown extends Defaults["ticks"] ? {
        type: PropType<readonly number[] | Record<number, string>>;
    } : Omit<{
        type: PropType<readonly number[] | Record<number, string>>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : readonly number[] | Record<number, string> | Defaults["ticks"]>;
        default: unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : Defaults["ticks"] | NonNullable<readonly number[] | Record<number, string>>;
    };
    tickSize: unknown extends Defaults["tickSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tickSize"] ? string | number : string | number | Defaults["tickSize"]>;
        default: unknown extends Defaults["tickSize"] ? string | number : NonNullable<string | number> | Defaults["tickSize"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
    };
    trackFillColor: unknown extends Defaults["trackFillColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"]>;
        default: unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"];
    };
    trackSize: unknown extends Defaults["trackSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["trackSize"] ? string | number : string | number | Defaults["trackSize"]>;
        default: unknown extends Defaults["trackSize"] ? string | number : NonNullable<string | number> | Defaults["trackSize"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
};
type SliderProps = ExtractPropTypes<ReturnType<typeof makeSliderProps>>;
type SliderData = {
    value: number;
};
export declare const useSteps: (props: SliderProps) => {
    min: import("vue").ComputedRef<number>;
    max: import("vue").ComputedRef<number>;
    step: import("vue").ComputedRef<number>;
    decimals: import("vue").ComputedRef<number>;
    roundValue: (value: string | number) => number;
};
export declare const useSlider: ({ props, steps, onSliderStart, onSliderMove, onSliderEnd, getActiveThumb, }: {
    props: SliderProps;
    steps: ReturnType<typeof useSteps>;
    onSliderEnd: (data: SliderData) => void;
    onSliderStart: (data: SliderData) => void;
    onSliderMove: (data: SliderData) => void;
    getActiveThumb: (e: MouseEvent | TouchEvent) => HTMLElement;
}) => SliderProvide;

