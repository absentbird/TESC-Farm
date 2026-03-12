import type { VSliderThumbSlots } from './VSliderThumb.js';
import type { VSliderTrackSlots } from './VSliderTrack.js';
import type { VInputSlot, VInputSlots } from "../VInput/VInput.js";
export type VSliderSlots = VInputSlots & VSliderThumbSlots & VSliderTrackSlots & {
    label: VInputSlot;
};
export declare const makeVSliderProps: <Defaults extends {
    modelValue?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    disabled?: unknown;
    error?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    label?: unknown;
    readonly?: unknown;
    rules?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    theme?: unknown;
    width?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    centerAffix?: unknown;
    color?: unknown;
    glow?: unknown;
    iconColor?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    direction?: unknown;
    'onClick:prepend'?: unknown;
    'onClick:append'?: unknown;
    ripple?: unknown;
    elevation?: unknown;
    rounded?: unknown;
    tile?: unknown;
    max?: unknown;
    min?: unknown;
    step?: unknown;
    thumbColor?: unknown;
    thumbLabel?: unknown;
    thumbSize?: unknown;
    showTicks?: unknown;
    ticks?: unknown;
    tickSize?: unknown;
    trackColor?: unknown;
    trackFillColor?: unknown;
    trackSize?: unknown;
    reverse?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? import("vue").PropType<(args_0: boolean) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean | null : boolean | Defaults["disabled"] | null>;
        default: unknown extends Defaults["disabled"] ? boolean | null : NonNullable<boolean | null> | Defaults["disabled"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : NonNullable<string | readonly string[] | null> | Defaults["errorMessages"];
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : NonNullable<string | number> | Defaults["maxErrors"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    readonly: unknown extends Defaults["readonly"] ? {
        type: import("vue").PropType<boolean | null>;
        default: null;
    } : Omit<{
        type: import("vue").PropType<boolean | null>;
        default: null;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["readonly"] ? boolean | null : boolean | Defaults["readonly"] | null>;
        default: unknown extends Defaults["readonly"] ? boolean | null : NonNullable<boolean | null> | Defaults["readonly"];
    };
    rules: unknown extends Defaults["rules"] ? {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"];
    };
    validateOn: unknown extends Defaults["validateOn"] ? import("vue").PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: import("vue").PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
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
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? import("vue").PropType<import("../../composables/icons.js").IconValue> : {
        type: import("vue").PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? import("vue").PropType<boolean | "auto"> : {
        type: import("vue").PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : NonNullable<boolean | "auto"> | Defaults["hideDetails"];
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : NonNullable<string | readonly string[]> | Defaults["messages"];
    };
    direction: unknown extends Defaults["direction"] ? {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? import("vue").PropType<(args_0: MouseEvent) => void> : {
        type: import("vue").PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"]>;
        default: unknown extends Defaults["ripple"] ? boolean : boolean | Defaults["ripple"];
    };
    elevation: unknown extends Defaults["elevation"] ? Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
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
    min: unknown extends Defaults["min"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["min"] ? string | number : string | number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? string | number : NonNullable<string | number> | Defaults["min"];
    };
    step: unknown extends Defaults["step"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["step"] ? string | number : string | number | Defaults["step"]>;
        default: unknown extends Defaults["step"] ? string | number : NonNullable<string | number> | Defaults["step"];
    };
    thumbColor: unknown extends Defaults["thumbColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"]>;
        default: unknown extends Defaults["thumbColor"] ? string : string | Defaults["thumbColor"];
    };
    thumbLabel: unknown extends Defaults["thumbLabel"] ? {
        type: import("vue").PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["thumbLabel"] ? boolean | "always" | undefined : boolean | "always" | Defaults["thumbLabel"] | undefined>;
        default: unknown extends Defaults["thumbLabel"] ? boolean | "always" | undefined : NonNullable<boolean | "always" | undefined> | Defaults["thumbLabel"];
    };
    thumbSize: unknown extends Defaults["thumbSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["thumbSize"] ? string | number : string | number | Defaults["thumbSize"]>;
        default: unknown extends Defaults["thumbSize"] ? string | number : NonNullable<string | number> | Defaults["thumbSize"];
    };
    showTicks: unknown extends Defaults["showTicks"] ? {
        type: import("vue").PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    } : Omit<{
        type: import("vue").PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["showTicks"] ? boolean | "always" : boolean | "always" | Defaults["showTicks"]>;
        default: unknown extends Defaults["showTicks"] ? boolean | "always" : NonNullable<boolean | "always"> | Defaults["showTicks"];
    };
    ticks: unknown extends Defaults["ticks"] ? {
        type: import("vue").PropType<readonly number[] | Record<number, string>>;
    } : Omit<{
        type: import("vue").PropType<readonly number[] | Record<number, string>>;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : readonly number[] | Record<number, string> | Defaults["ticks"]>;
        default: unknown extends Defaults["ticks"] ? readonly number[] | Record<number, string> : NonNullable<readonly number[] | Record<number, string>> | Defaults["ticks"];
    };
    tickSize: unknown extends Defaults["tickSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["tickSize"] ? string | number : string | number | Defaults["tickSize"]>;
        default: unknown extends Defaults["tickSize"] ? string | number : NonNullable<string | number> | Defaults["tickSize"];
    };
    trackColor: unknown extends Defaults["trackColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"]>;
        default: unknown extends Defaults["trackColor"] ? string : string | Defaults["trackColor"];
    };
    trackFillColor: unknown extends Defaults["trackFillColor"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"]>;
        default: unknown extends Defaults["trackFillColor"] ? string : string | Defaults["trackFillColor"];
    };
    trackSize: unknown extends Defaults["trackSize"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["trackSize"] ? string | number : string | number | Defaults["trackSize"]>;
        default: unknown extends Defaults["trackSize"] ? string | number : NonNullable<string | number> | Defaults["trackSize"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
};
export declare const VSlider: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbSize: string | number;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        thumbColor?: string | undefined;
        thumbLabel?: boolean | "always" | undefined;
        ticks?: readonly number[] | Record<number, string> | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: VInputSlot) => import("vue").VNodeChild) | {
            default?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: ((arg: {
                tick: import("./slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: false | ((arg: {
                tick: import("./slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("./slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onStart?: ((value: number) => any) | undefined;
        onEnd?: ((value: number) => any) | undefined;
        "onUpdate:focused"?: ((value: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:focused': (value: boolean) => true;
        'update:modelValue': (v: number) => true;
        start: (value: number) => true;
        end: (value: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbLabel: boolean | "always" | undefined;
        thumbSize: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VInputSlot) => import("vue").VNode[];
        prepend: (arg: VInputSlot) => import("vue").VNode[];
        append: (arg: VInputSlot) => import("vue").VNode[];
        details: (arg: VInputSlot) => import("vue").VNode[];
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        'thumb-label': (arg: {
            modelValue: number;
        }) => import("vue").VNode[];
        'tick-label': (arg: {
            tick: import("./slider.js").Tick;
            index: number;
        }) => import("vue").VNode[];
        label: (arg: VInputSlot) => import("vue").VNode[];
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
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbSize: string | number;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        thumbColor?: string | undefined;
        thumbLabel?: boolean | "always" | undefined;
        ticks?: readonly number[] | Record<number, string> | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: VInputSlot) => import("vue").VNodeChild) | {
            default?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: ((arg: {
                tick: import("./slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
            'tick-label'?: false | ((arg: {
                tick: import("./slider.js").Tick;
                index: number;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:tick-label"?: false | ((arg: {
            tick: import("./slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onStart?: ((value: number) => any) | undefined;
        onEnd?: ((value: number) => any) | undefined;
        "onUpdate:focused"?: ((value: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        reverse: boolean;
        max: string | number;
        error: boolean;
        min: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        elevation: string | number;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        modelValue: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbLabel: boolean | "always" | undefined;
        thumbSize: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    reverse: boolean;
    max: string | number;
    error: boolean;
    min: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    step: string | number;
    elevation: string | number;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    modelValue: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    ripple: boolean;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    showTicks: boolean | "always";
    tickSize: string | number;
    trackSize: string | number;
    thumbSize: string | number;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    trackColor?: string | undefined;
    trackFillColor?: string | undefined;
    thumbColor?: string | undefined;
    thumbLabel?: boolean | "always" | undefined;
    ticks?: readonly number[] | Record<number, string> | undefined;
} & {
    $children?: import("vue").VNodeChild | ((arg: VInputSlot) => import("vue").VNodeChild) | {
        default?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        'thumb-label'?: ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        'tick-label'?: ((arg: {
            tick: import("./slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        label?: ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
        message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        'thumb-label'?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
        'tick-label'?: false | ((arg: {
            tick: import("./slider.js").Tick;
            index: number;
        }) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:thumb-label"?: false | ((arg: {
        modelValue: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:tick-label"?: false | ((arg: {
        tick: import("./slider.js").Tick;
        index: number;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: VInputSlot) => import("vue").VNodeChild) | undefined;
} & {
    onStart?: ((value: number) => any) | undefined;
    onEnd?: ((value: number) => any) | undefined;
    "onUpdate:focused"?: ((value: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((v: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:focused': (value: boolean) => true;
    'update:modelValue': (v: number) => true;
    start: (value: number) => true;
    end: (value: number) => true;
}, string, {
    reverse: boolean;
    max: string | number;
    error: boolean;
    min: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    step: string | number;
    elevation: string | number;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    modelValue: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    ripple: boolean;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    showTicks: boolean | "always";
    tickSize: string | number;
    trackSize: string | number;
    thumbLabel: boolean | "always" | undefined;
    thumbSize: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VInputSlot) => import("vue").VNode[];
    prepend: (arg: VInputSlot) => import("vue").VNode[];
    append: (arg: VInputSlot) => import("vue").VNode[];
    details: (arg: VInputSlot) => import("vue").VNode[];
    message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    'thumb-label': (arg: {
        modelValue: number;
    }) => import("vue").VNode[];
    'tick-label': (arg: {
        tick: import("./slider.js").Tick;
        index: number;
    }) => import("vue").VNode[];
    label: (arg: VInputSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    theme: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
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
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: import("vue").PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: import("vue").PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: import("vue").PropType<readonly number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    theme: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
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
    id: StringConstructor;
    appendIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    prependIcon: import("vue").PropType<import("../../composables/icons.js").IconValue>;
    hideDetails: import("vue").PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: import("vue").PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': import("vue").PropType<(args_0: MouseEvent) => void>;
    'onClick:append': import("vue").PropType<(args_0: MouseEvent) => void>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | number>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: import("vue").PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: import("vue").PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: import("vue").PropType<readonly number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    reverse: BooleanConstructor;
}>>;
export type VSlider = InstanceType<typeof VSlider>;
