import type { PropType } from 'vue';
import type { StrategyProps } from "../../components/VOverlay/locationStrategies.js";
import type { VTextFieldSlots } from "../../components/VTextField/VTextField.js";
export type VDateInputActionsSlot = {
    save: () => void;
    cancel: () => void;
    isPristine: boolean;
};
export type VDateInputSlots = Omit<VTextFieldSlots, 'default'> & {
    actions: VDateInputActionsSlot;
    default: never;
};
export declare const makeVDateInputProps: <Defaults extends {
    max?: unknown;
    height?: unknown;
    width?: unknown;
    min?: unknown;
    border?: unknown;
    color?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    position?: unknown;
    transition?: unknown;
    header?: unknown;
    style?: unknown;
    title?: unknown;
    text?: unknown;
    disabled?: unknown;
    multiple?: unknown;
    month?: unknown;
    year?: unknown;
    class?: unknown;
    theme?: unknown;
    tag?: unknown;
    landscape?: unknown;
    elevation?: unknown;
    modelValue?: unknown;
    tile?: unknown;
    divided?: unknown;
    bgColor?: unknown;
    controlHeight?: unknown;
    headerColor?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    reverseTransition?: unknown;
    hideHeader?: unknown;
    modeIcon?: unknown;
    viewMode?: unknown;
    showAdjacentMonths?: unknown;
    weekdays?: unknown;
    weeksInMonth?: unknown;
    firstDayOfWeek?: unknown;
    allowedDates?: unknown;
    hideWeekdays?: unknown;
    showWeek?: unknown;
    rounded?: unknown;
    loading?: unknown;
    appendInnerIcon?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    active?: unknown;
    centerAffix?: unknown;
    baseColor?: unknown;
    dirty?: unknown;
    glow?: unknown;
    error?: unknown;
    flat?: unknown;
    iconColor?: unknown;
    label?: unknown;
    persistentClear?: unknown;
    prependInnerIcon?: unknown;
    reverse?: unknown;
    singleLine?: unknown;
    variant?: unknown;
    'onClick:clear'?: unknown;
    'onClick:appendInner'?: unknown;
    'onClick:prependInner'?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    name?: unknown;
    readonly?: unknown;
    rules?: unknown;
    validateOn?: unknown;
    validationValue?: unknown;
    density?: unknown;
    id?: unknown;
    appendIcon?: unknown;
    prependIcon?: unknown;
    hideDetails?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    messages?: unknown;
    direction?: unknown;
    'onClick:prepend'?: unknown;
    'onClick:append'?: unknown;
    autofocus?: unknown;
    counter?: unknown;
    counterValue?: unknown;
    prefix?: unknown;
    placeholder?: unknown;
    persistentPlaceholder?: unknown;
    persistentCounter?: unknown;
    suffix?: unknown;
    role?: unknown;
    type?: unknown;
    modelModifiers?: unknown;
    cancelText?: unknown;
    okText?: unknown;
    hideActions?: unknown;
    mobile?: unknown;
    mobileBreakpoint?: unknown;
    displayFormat?: unknown;
    location?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    max: unknown extends Defaults["max"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    min: unknown extends Defaults["min"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    position: unknown extends Defaults["position"] ? {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : "fixed" | "absolute" | "relative" | "static" | "sticky" | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? "fixed" | "absolute" | "relative" | "static" | "sticky" : NonNullable<"fixed" | "absolute" | "relative" | "static" | "sticky"> | Defaults["position"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transition"] ? string : string | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string : string | Defaults["transition"];
    };
    header: unknown extends Defaults["header"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["header"] ? string : string | Defaults["header"]>;
        default: unknown extends Defaults["header"] ? string : string | Defaults["header"];
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
    title: unknown extends Defaults["title"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    text: unknown extends Defaults["text"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["text"] ? string : string | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string : string | Defaults["text"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: BooleanConstructor;
        default: null;
    } : Omit<{
        type: BooleanConstructor;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    multiple: unknown extends Defaults["multiple"] ? PropType<number | boolean | "range" | (string & {})> : {
        type: PropType<unknown extends Defaults["multiple"] ? number | boolean | "range" | (string & {}) : number | boolean | "range" | (string & {}) | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? number | boolean | "range" | (string & {}) : NonNullable<number | boolean | "range" | (string & {})> | Defaults["multiple"];
    };
    month: unknown extends Defaults["month"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["month"] ? string | number : string | number | Defaults["month"]>;
        default: unknown extends Defaults["month"] ? string | number : NonNullable<string | number> | Defaults["month"];
    };
    year: unknown extends Defaults["year"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["year"] ? number : number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? number : number | Defaults["year"];
    };
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
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
    landscape: unknown extends Defaults["landscape"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"]>;
        default: unknown extends Defaults["landscape"] ? boolean : boolean | Defaults["landscape"];
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
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
    divided: unknown extends Defaults["divided"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"]>;
        default: unknown extends Defaults["divided"] ? boolean : boolean | Defaults["divided"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    controlHeight: unknown extends Defaults["controlHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["controlHeight"] ? string | number : string | number | Defaults["controlHeight"]>;
        default: unknown extends Defaults["controlHeight"] ? string | number : NonNullable<string | number> | Defaults["controlHeight"];
    };
    headerColor: unknown extends Defaults["headerColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["headerColor"] ? string : string | Defaults["headerColor"]>;
        default: unknown extends Defaults["headerColor"] ? string : string | Defaults["headerColor"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["nextIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prevIcon"];
    };
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string : string | Defaults["reverseTransition"];
    };
    hideHeader: unknown extends Defaults["hideHeader"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"]>;
        default: unknown extends Defaults["hideHeader"] ? boolean : boolean | Defaults["hideHeader"];
    };
    modeIcon: unknown extends Defaults["modeIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modeIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["modeIcon"]>;
        default: unknown extends Defaults["modeIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["modeIcon"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? {
        type: PropType<"month" | "months" | "year">;
        default: string;
    } : Omit<{
        type: PropType<"month" | "months" | "year">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["viewMode"] ? "month" | "year" | "months" : "month" | "year" | "months" | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? "month" | "year" | "months" : NonNullable<"month" | "year" | "months"> | Defaults["viewMode"];
    };
    showAdjacentMonths: unknown extends Defaults["showAdjacentMonths"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"]>;
        default: unknown extends Defaults["showAdjacentMonths"] ? boolean : boolean | Defaults["showAdjacentMonths"];
    };
    weekdays: unknown extends Defaults["weekdays"] ? {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    } : Omit<{
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"]>;
        default: unknown extends Defaults["weekdays"] ? import("../../composables/calendar.js").CalendarWeekdays[] : import("../../composables/calendar.js").CalendarWeekdays[] | Defaults["weekdays"];
    };
    weeksInMonth: unknown extends Defaults["weeksInMonth"] ? Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<"static" | "dynamic">;
        default: NonNullable<"static" | "dynamic">;
    } : Omit<Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<"static" | "dynamic">;
        default: NonNullable<"static" | "dynamic">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : "static" | "dynamic" | Defaults["weeksInMonth"]>;
        default: unknown extends Defaults["weeksInMonth"] ? "static" | "dynamic" : NonNullable<"static" | "dynamic"> | Defaults["weeksInMonth"];
    };
    firstDayOfWeek: unknown extends Defaults["firstDayOfWeek"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["firstDayOfWeek"] ? string | number : string | number | Defaults["firstDayOfWeek"]>;
        default: unknown extends Defaults["firstDayOfWeek"] ? string | number : NonNullable<string | number> | Defaults["firstDayOfWeek"];
    };
    allowedDates: unknown extends Defaults["allowedDates"] ? PropType<unknown[] | ((date: unknown) => boolean)> : {
        type: PropType<unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : unknown[] | ((date: unknown) => boolean) | Defaults["allowedDates"]>;
        default: unknown extends Defaults["allowedDates"] ? unknown[] | ((date: unknown) => boolean) : NonNullable<unknown[] | ((date: unknown) => boolean)> | Defaults["allowedDates"];
    };
    hideWeekdays: unknown extends Defaults["hideWeekdays"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"]>;
        default: unknown extends Defaults["hideWeekdays"] ? boolean : boolean | Defaults["hideWeekdays"];
    };
    showWeek: unknown extends Defaults["showWeek"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"]>;
        default: unknown extends Defaults["showWeek"] ? boolean : boolean | Defaults["showWeek"];
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
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    appendInnerIcon: unknown extends Defaults["appendInnerIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendInnerIcon"]>;
        default: unknown extends Defaults["appendInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendInnerIcon"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    clearIcon: unknown extends Defaults["clearIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["clearIcon"]>;
        default: unknown extends Defaults["clearIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["clearIcon"];
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    centerAffix: unknown extends Defaults["centerAffix"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"]>;
        default: unknown extends Defaults["centerAffix"] ? boolean : boolean | Defaults["centerAffix"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    dirty: unknown extends Defaults["dirty"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"]>;
        default: unknown extends Defaults["dirty"] ? boolean : boolean | Defaults["dirty"];
    };
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
    };
    persistentClear: unknown extends Defaults["persistentClear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"]>;
        default: unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"];
    };
    prependInnerIcon: unknown extends Defaults["prependInnerIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependInnerIcon"]>;
        default: unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependInnerIcon"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    singleLine: unknown extends Defaults["singleLine"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"]>;
        default: unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"];
    };
    variant: unknown extends Defaults["variant"] ? {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled" : NonNullable<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled"> | Defaults["variant"];
    };
    'onClick:clear': unknown extends Defaults["onClick:clear"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"]>;
        default: unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"];
    };
    'onClick:appendInner': unknown extends Defaults["onClick:appendInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"]>;
        default: unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"];
    };
    'onClick:prependInner': unknown extends Defaults["onClick:prependInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"]>;
        default: unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"];
    };
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    'onUpdate:focused': unknown extends Defaults["onUpdate:focused"] ? PropType<(args_0: boolean) => void> : {
        type: PropType<unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"]>;
        default: unknown extends Defaults["onUpdate:focused"] ? (args_0: boolean) => void : ((args_0: boolean) => void) | Defaults["onUpdate:focused"];
    };
    errorMessages: unknown extends Defaults["errorMessages"] ? {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : string | readonly string[] | Defaults["errorMessages"] | null>;
        default: unknown extends Defaults["errorMessages"] ? string | readonly string[] | null : NonNullable<string | readonly string[] | null> | Defaults["errorMessages"];
    };
    maxErrors: unknown extends Defaults["maxErrors"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["maxErrors"] ? string | number : string | number | Defaults["maxErrors"]>;
        default: unknown extends Defaults["maxErrors"] ? string | number : NonNullable<string | number> | Defaults["maxErrors"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
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
    rules: unknown extends Defaults["rules"] ? {
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"]>;
        default: unknown extends Defaults["rules"] ? readonly import("../../types.js").ValidationRule[] : readonly import("../../types.js").ValidationRule[] | Defaults["rules"];
    };
    validateOn: unknown extends Defaults["validateOn"] ? PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
    };
    validationValue: unknown extends Defaults["validationValue"] ? null : {
        type: PropType<unknown extends Defaults["validationValue"] ? any : any>;
        default: unknown extends Defaults["validationValue"] ? any : any;
    };
    density: unknown extends Defaults["density"] ? {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    } : Omit<{
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["density"] ? import("../../composables/density.js").Density : import("../../composables/density.js").Density | Defaults["density"]>;
        default: unknown extends Defaults["density"] ? import("../../composables/density.js").Density : NonNullable<import("../../composables/density.js").Density> | Defaults["density"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    hideDetails: unknown extends Defaults["hideDetails"] ? PropType<boolean | "auto"> : {
        type: PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : NonNullable<boolean | "auto"> | Defaults["hideDetails"];
    };
    hideSpinButtons: unknown extends Defaults["hideSpinButtons"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"]>;
        default: unknown extends Defaults["hideSpinButtons"] ? boolean : boolean | Defaults["hideSpinButtons"];
    };
    hint: unknown extends Defaults["hint"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["hint"] ? string : string | Defaults["hint"]>;
        default: unknown extends Defaults["hint"] ? string : string | Defaults["hint"];
    };
    persistentHint: unknown extends Defaults["persistentHint"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"]>;
        default: unknown extends Defaults["persistentHint"] ? boolean : boolean | Defaults["persistentHint"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : NonNullable<string | readonly string[]> | Defaults["messages"];
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
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
    };
    counter: unknown extends Defaults["counter"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["counter"] ? string | number | boolean : string | number | boolean | Defaults["counter"]>;
        default: unknown extends Defaults["counter"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["counter"];
    };
    counterValue: unknown extends Defaults["counterValue"] ? PropType<number | ((value: any) => number)> : {
        type: PropType<unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : number | ((value: any) => number) | Defaults["counterValue"]>;
        default: unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : NonNullable<number | ((value: any) => number)> | Defaults["counterValue"];
    };
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
    };
    persistentPlaceholder: unknown extends Defaults["persistentPlaceholder"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"]>;
        default: unknown extends Defaults["persistentPlaceholder"] ? boolean : boolean | Defaults["persistentPlaceholder"];
    };
    persistentCounter: unknown extends Defaults["persistentCounter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"]>;
        default: unknown extends Defaults["persistentCounter"] ? boolean : boolean | Defaults["persistentCounter"];
    };
    suffix: unknown extends Defaults["suffix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"]>;
        default: unknown extends Defaults["suffix"] ? string : string | Defaults["suffix"];
    };
    role: unknown extends Defaults["role"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["role"] ? string : string | Defaults["role"]>;
        default: unknown extends Defaults["role"] ? string : string | Defaults["role"];
    };
    type: unknown extends Defaults["type"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["type"] ? string : string | Defaults["type"]>;
        default: unknown extends Defaults["type"] ? string : string | Defaults["type"];
    };
    modelModifiers: unknown extends Defaults["modelModifiers"] ? PropType<Record<string, boolean>> : {
        type: PropType<unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"]>;
        default: unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"];
    };
    cancelText: unknown extends Defaults["cancelText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"]>;
        default: unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"];
    };
    okText: unknown extends Defaults["okText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["okText"] ? string : string | Defaults["okText"]>;
        default: unknown extends Defaults["okText"] ? string : string | Defaults["okText"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    mobile: unknown extends Defaults["mobile"] ? {
        type: PropType<boolean | null>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | null>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mobile"] ? boolean | null : boolean | Defaults["mobile"] | null>;
        default: unknown extends Defaults["mobile"] ? boolean | null : NonNullable<boolean | null> | Defaults["mobile"];
    };
    mobileBreakpoint: unknown extends Defaults["mobileBreakpoint"] ? PropType<number | import("../../composables/display.js").DisplayBreakpoint> : {
        type: PropType<unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : number | import("../../composables/display.js").DisplayBreakpoint | Defaults["mobileBreakpoint"]>;
        default: unknown extends Defaults["mobileBreakpoint"] ? number | import("../../composables/display.js").DisplayBreakpoint : NonNullable<number | import("../../composables/display.js").DisplayBreakpoint> | Defaults["mobileBreakpoint"];
    };
    displayFormat: unknown extends Defaults["displayFormat"] ? (FunctionConstructor | StringConstructor)[] : {
        type: PropType<unknown extends Defaults["displayFormat"] ? string | Function : string | Function | Defaults["displayFormat"]>;
        default: unknown extends Defaults["displayFormat"] ? string | Function : NonNullable<string | Function> | Defaults["displayFormat"];
    };
    location: unknown extends Defaults["location"] ? {
        type: PropType<StrategyProps["location"]>;
        default: string;
    } : Omit<{
        type: PropType<StrategyProps["location"]>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : import("../../util/index.js").Anchor | Defaults["location"]>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor : NonNullable<import("../../util/index.js").Anchor> | Defaults["location"];
    };
};
export declare const VDateInput: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        location: import("../../util/index.js").Anchor;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string;
        header: string;
        style: import("vue").StyleValue;
        title: string;
        autofocus: boolean;
        mobile: boolean | null;
        disabled: boolean;
        readonly: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        placeholder: string;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        divided: boolean;
        prependIcon: import("../../composables/icons.js").IconValue;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        hideHeader: boolean;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        hideWeekdays: boolean;
        showWeek: boolean;
    } & {
        name?: string | undefined;
        max?: unknown;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        min?: unknown;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        text?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        multiple?: number | boolean | "range" | (string & {}) | undefined;
        month?: string | number | undefined;
        year?: number | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        counter?: string | number | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        controlHeight?: string | number | undefined;
        headerColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        firstDayOfWeek?: string | number | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayFormat?: string | Function | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onCancel?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        onSave?: ((value: string) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'click:control': (e: MouseEvent) => true;
            'mousedown:control': (e: MouseEvent) => true;
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "innerHTML" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextmenu" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
        _allExposed: (HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }) | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        save: (value: string) => true;
        cancel: () => true;
        'update:modelValue': (val: string) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        location: import("../../util/index.js").Anchor;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string;
        header: string;
        style: import("vue").StyleValue;
        title: string;
        autofocus: boolean;
        mobile: boolean | null;
        disabled: boolean;
        readonly: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        placeholder: string;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        prependIcon: import("../../composables/icons.js").IconValue;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        hideHeader: boolean;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        firstDayOfWeek: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        actions: (arg: VDateInputActionsSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        location: import("../../util/index.js").Anchor;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string;
        header: string;
        style: import("vue").StyleValue;
        title: string;
        autofocus: boolean;
        mobile: boolean | null;
        disabled: boolean;
        readonly: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        placeholder: string;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        divided: boolean;
        prependIcon: import("../../composables/icons.js").IconValue;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        hideHeader: boolean;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        hideWeekdays: boolean;
        showWeek: boolean;
    } & {
        name?: string | undefined;
        max?: unknown;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        min?: unknown;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        text?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        multiple?: number | boolean | "range" | (string & {}) | undefined;
        month?: string | number | undefined;
        year?: number | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        counter?: string | number | boolean | undefined;
        mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        controlHeight?: string | number | undefined;
        headerColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        firstDayOfWeek?: string | number | undefined;
        allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
        displayFormat?: string | Function | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onCancel?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        onSave?: ((value: string) => any) | undefined;
    }, Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        } & {
            name?: string | undefined;
            id?: string | undefined;
            width?: string | number | undefined;
            color?: string | undefined;
            maxWidth?: string | number | undefined;
            minWidth?: string | number | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            prefix?: string | undefined;
            role?: string | undefined;
            class?: any;
            theme?: string | undefined;
            placeholder?: string | undefined;
            counter?: string | number | boolean | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            modelValue?: any;
            validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
            validationValue?: any;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            suffix?: string | undefined;
            counterValue?: number | ((value: any) => number) | undefined;
            modelModifiers?: Record<string, boolean> | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:modelValue"?: ((val: string) => any) | undefined;
            "onClick:control"?: ((e: MouseEvent) => any) | undefined;
            "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
        }, HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'click:control': (e: MouseEvent) => true;
            'mousedown:control': (e: MouseEvent) => true;
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (val: string) => true;
        }, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            type: string;
            error: boolean;
            active: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            autofocus: boolean;
            disabled: boolean;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            persistentPlaceholder: boolean;
            persistentCounter: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "innerHTML" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextmenu" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
        _allExposed: (HTMLInputElement & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }> & Omit<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
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
                baseColor?: string | undefined;
                prependIcon?: import("../../composables/icons.js").IconValue | undefined;
                appendIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
                iconColor?: string | boolean | undefined;
                hint?: string | undefined;
                hideDetails?: boolean | "auto" | undefined;
            } & {}, {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
                error: boolean;
                direction: "horizontal" | "vertical";
                style: import("vue").StyleValue;
                disabled: boolean | null;
                readonly: boolean | null;
                messages: string | readonly string[];
                rules: readonly import("../../types.js").ValidationRule[];
                focused: boolean;
                errorMessages: string | readonly string[] | null;
                maxErrors: string | number;
                density: import("../../composables/density.js").Density;
                centerAffix: boolean;
                glow: boolean;
                hideSpinButtons: boolean;
                persistentHint: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }> & Omit<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance | null;
            $parent: import("vue").ComponentPublicInstance | null;
            $host: Element | null;
            $emit: (event: "update:focused", focused: boolean) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<{
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            } & {
                id?: string | undefined;
                color?: string | undefined;
                loading?: string | boolean | undefined;
                label?: string | undefined;
                class?: any;
                theme?: string | undefined;
                'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
                rounded?: string | number | boolean | undefined;
                baseColor?: string | undefined;
                bgColor?: string | undefined;
                appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
                'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
                'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
                centerAffix?: boolean | undefined;
                iconColor?: string | boolean | undefined;
            } & {
                "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            }, {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
                'update:focused': (focused: boolean) => true;
                'update:modelValue': (value: any) => true;
            }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
                flat: boolean;
                reverse: boolean;
                variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
                error: boolean;
                active: boolean;
                style: import("vue").StyleValue;
                disabled: boolean;
                focused: boolean;
                rounded: string | number | boolean;
                tile: boolean;
                clearIcon: import("../../composables/icons.js").IconValue;
                centerAffix: boolean;
                glow: boolean;
                clearable: boolean;
                dirty: boolean;
                persistentClear: boolean;
                singleLine: boolean;
            }, {}, string, import("vue").SlotsType<Partial<{
                clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
            }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
                beforeCreate?: (() => void) | (() => void)[];
                created?: (() => void) | (() => void)[];
                beforeMount?: (() => void) | (() => void)[];
                mounted?: (() => void) | (() => void)[];
                beforeUpdate?: (() => void) | (() => void)[];
                updated?: (() => void) | (() => void)[];
                activated?: (() => void) | (() => void)[];
                deactivated?: (() => void) | (() => void)[];
                beforeDestroy?: (() => void) | (() => void)[];
                beforeUnmount?: (() => void) | (() => void)[];
                destroyed?: (() => void) | (() => void)[];
                unmounted?: (() => void) | (() => void)[];
                renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
                errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
        } & Readonly<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
            _allExposed: {
                reset: () => Promise<void>;
                resetValidation: () => Promise<void>;
                validate: (silent?: boolean) => Promise<string[]>;
                isValid: import("vue").ComputedRef<boolean | null>;
                errorMessages: import("vue").ComputedRef<string[]>;
            } | {
                controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
                fieldIconColor: import("vue").ComputedRef<string | undefined>;
            } | {};
        }) | {};
    }, {}, {}, {}, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        location: import("../../util/index.js").Anchor;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string;
        header: string;
        style: import("vue").StyleValue;
        title: string;
        autofocus: boolean;
        mobile: boolean | null;
        disabled: boolean;
        readonly: boolean | null;
        tag: string | import("../../util/index.js").JSXComponent;
        landscape: boolean;
        placeholder: string;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        divided: boolean;
        prependIcon: import("../../composables/icons.js").IconValue;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        nextIcon: import("../../composables/icons.js").IconValue;
        prevIcon: import("../../composables/icons.js").IconValue;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        reverseTransition: string;
        hideHeader: boolean;
        cancelText: string;
        okText: string;
        hideActions: boolean;
        modeIcon: import("../../composables/icons.js").IconValue;
        viewMode: "month" | "year" | "months";
        showAdjacentMonths: boolean;
        weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
        weeksInMonth: "static" | "dynamic";
        firstDayOfWeek: string | number;
        hideWeekdays: boolean;
        showWeek: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    location: import("../../util/index.js").Anchor;
    active: boolean;
    direction: "horizontal" | "vertical";
    transition: string;
    header: string;
    style: import("vue").StyleValue;
    title: string;
    autofocus: boolean;
    mobile: boolean | null;
    disabled: boolean;
    readonly: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    landscape: boolean;
    placeholder: string;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    divided: boolean;
    prependIcon: import("../../composables/icons.js").IconValue;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    reverseTransition: string;
    hideHeader: boolean;
    cancelText: string;
    okText: string;
    hideActions: boolean;
    modeIcon: import("../../composables/icons.js").IconValue;
    viewMode: "month" | "year" | "months";
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "static" | "dynamic";
    hideWeekdays: boolean;
    showWeek: boolean;
} & {
    name?: string | undefined;
    max?: unknown;
    id?: string | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    min?: unknown;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    text?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    multiple?: number | boolean | "range" | (string & {}) | undefined;
    month?: string | number | undefined;
    year?: number | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    counter?: string | number | boolean | undefined;
    mobileBreakpoint?: number | import("../../composables/display.js").DisplayBreakpoint | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: any;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    controlHeight?: string | number | undefined;
    headerColor?: string | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
    firstDayOfWeek?: string | number | undefined;
    allowedDates?: unknown[] | ((date: unknown) => boolean) | undefined;
    displayFormat?: string | Function | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: VDateInputActionsSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onCancel?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    onSave?: ((value: string) => any) | undefined;
}, Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        default?: (() => import("vue").VNode[]) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: ((event: "update:modelValue", val: string) => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "click:control", e: MouseEvent) => void) & ((event: "mousedown:control", e: MouseEvent) => void);
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    } & {
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        role?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        modelValue?: any;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        suffix?: string | undefined;
        counterValue?: number | ((value: any) => number) | undefined;
        modelModifiers?: Record<string, boolean> | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
        "onClick:control"?: ((e: MouseEvent) => any) | undefined;
        "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
    }, HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:control': (e: MouseEvent) => true;
        'mousedown:control': (e: MouseEvent) => true;
        'update:focused': (focused: boolean) => true;
        'update:modelValue': (val: string) => true;
    }, string, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
}> & Omit<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    autofocus: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
} & {
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    role?: string | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    counter?: string | number | boolean | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    modelValue?: any;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    suffix?: string | undefined;
    counterValue?: number | ((value: any) => number) | undefined;
    modelModifiers?: Record<string, boolean> | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    "onClick:control"?: ((e: MouseEvent) => any) | undefined;
    "onMousedown:control"?: ((e: MouseEvent) => any) | undefined;
}, "normalize" | "flat" | "reverse" | "variant" | "name" | "max" | "required" | "type" | "error" | "id" | "matches" | "height" | "width" | "active" | "remove" | "min" | "direction" | "translate" | "contains" | "value" | "hidden" | "form" | "select" | "slot" | "style" | "title" | "dir" | "animate" | "pattern" | "blur" | "click" | "focus" | "reset" | "scroll" | "autocomplete" | "checkValidity" | "reportValidity" | "addEventListener" | "removeEventListener" | "accessKey" | "accessKeyLabel" | "autocapitalize" | "draggable" | "inert" | "innerText" | "lang" | "offsetHeight" | "offsetLeft" | "offsetParent" | "offsetTop" | "offsetWidth" | "outerText" | "popover" | "spellcheck" | "attachInternals" | "hidePopover" | "showPopover" | "togglePopover" | "attributes" | "classList" | "className" | "clientHeight" | "clientLeft" | "clientTop" | "clientWidth" | "localName" | "namespaceURI" | "onfullscreenchange" | "onfullscreenerror" | "outerHTML" | "ownerDocument" | "part" | "prefix" | "scrollHeight" | "scrollLeft" | "scrollTop" | "scrollWidth" | "shadowRoot" | "tagName" | "attachShadow" | "checkVisibility" | "closest" | "computedStyleMap" | "getAttribute" | "getAttributeNS" | "getAttributeNames" | "getAttributeNode" | "getAttributeNodeNS" | "getBoundingClientRect" | "getClientRects" | "getElementsByClassName" | "getElementsByTagName" | "getElementsByTagNameNS" | "hasAttribute" | "hasAttributeNS" | "hasAttributes" | "hasPointerCapture" | "insertAdjacentElement" | "insertAdjacentHTML" | "insertAdjacentText" | "releasePointerCapture" | "removeAttribute" | "removeAttributeNS" | "removeAttributeNode" | "requestFullscreen" | "requestPointerLock" | "scrollBy" | "scrollIntoView" | "scrollTo" | "setAttribute" | "setAttributeNS" | "setAttributeNode" | "setAttributeNodeNS" | "setHTMLUnsafe" | "setPointerCapture" | "toggleAttribute" | "webkitMatchesSelector" | "_clickOutside" | "_onResize" | "_ripple" | "_observe" | "_mutate" | "_onScroll" | "_touchHandlers" | "_transitionInitialStyles" | "baseURI" | "childNodes" | "firstChild" | "isConnected" | "lastChild" | "nextSibling" | "nodeName" | "nodeType" | "nodeValue" | "parentElement" | "parentNode" | "previousSibling" | "textContent" | "appendChild" | "cloneNode" | "compareDocumentPosition" | "getRootNode" | "hasChildNodes" | "insertBefore" | "isDefaultNamespace" | "isEqualNode" | "isSameNode" | "lookupNamespaceURI" | "lookupPrefix" | "removeChild" | "replaceChild" | "ELEMENT_NODE" | "ATTRIBUTE_NODE" | "TEXT_NODE" | "CDATA_SECTION_NODE" | "ENTITY_REFERENCE_NODE" | "ENTITY_NODE" | "PROCESSING_INSTRUCTION_NODE" | "COMMENT_NODE" | "DOCUMENT_NODE" | "DOCUMENT_TYPE_NODE" | "DOCUMENT_FRAGMENT_NODE" | "NOTATION_NODE" | "DOCUMENT_POSITION_DISCONNECTED" | "DOCUMENT_POSITION_PRECEDING" | "DOCUMENT_POSITION_FOLLOWING" | "DOCUMENT_POSITION_CONTAINS" | "DOCUMENT_POSITION_CONTAINED_BY" | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC" | "dispatchEvent" | "ariaAtomic" | "ariaAutoComplete" | "ariaBrailleLabel" | "ariaBrailleRoleDescription" | "ariaBusy" | "ariaChecked" | "ariaColCount" | "ariaColIndex" | "ariaColSpan" | "ariaCurrent" | "ariaDescription" | "ariaDisabled" | "ariaExpanded" | "ariaHasPopup" | "ariaHidden" | "ariaInvalid" | "ariaKeyShortcuts" | "ariaLabel" | "ariaLevel" | "ariaLive" | "ariaModal" | "ariaMultiLine" | "ariaMultiSelectable" | "ariaOrientation" | "ariaPlaceholder" | "ariaPosInSet" | "ariaPressed" | "ariaReadOnly" | "ariaRequired" | "ariaRoleDescription" | "ariaRowCount" | "ariaRowIndex" | "ariaRowSpan" | "ariaSelected" | "ariaSetSize" | "ariaSort" | "ariaValueMax" | "ariaValueMin" | "ariaValueNow" | "ariaValueText" | "role" | "getAnimations" | "after" | "before" | "replaceWith" | "innerHTML" | "nextElementSibling" | "previousElementSibling" | "childElementCount" | "children" | "firstElementChild" | "lastElementChild" | "append" | "prepend" | "querySelector" | "querySelectorAll" | "replaceChildren" | "assignedSlot" | "attributeStyleMap" | "contentEditable" | "enterKeyHint" | "inputMode" | "isContentEditable" | "onabort" | "onanimationcancel" | "onanimationend" | "onanimationiteration" | "onanimationstart" | "onauxclick" | "onbeforeinput" | "onbeforetoggle" | "onblur" | "oncancel" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "onclose" | "oncontextmenu" | "oncopy" | "oncuechange" | "oncut" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformdata" | "ongotpointercapture" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onlostpointercapture" | "onmousedown" | "onmouseenter" | "onmouseleave" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onpaste" | "onpause" | "onplay" | "onplaying" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onscroll" | "onscrollend" | "onsecuritypolicyviolation" | "onseeked" | "onseeking" | "onselect" | "onselectionchange" | "onselectstart" | "onslotchange" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "ontoggle" | "ontouchcancel" | "ontouchend" | "ontouchmove" | "ontouchstart" | "ontransitioncancel" | "ontransitionend" | "ontransitionrun" | "ontransitionstart" | "onvolumechange" | "onwaiting" | "onwebkitanimationend" | "onwebkitanimationiteration" | "onwebkitanimationstart" | "onwebkittransitionend" | "onwheel" | "autofocus" | "dataset" | "nonce" | "tabIndex" | "disabled" | "labels" | "multiple" | "size" | "validationMessage" | "validity" | "willValidate" | "setCustomValidity" | "showPicker" | "readonly" | "maxLength" | "list" | "accept" | "readOnly" | "_" | "alt" | "step" | "placeholder" | "src" | "capture" | "checked" | "indeterminate" | "align" | "messages" | "rules" | "minLength" | "isValid" | "focused" | "errorMessages" | "maxErrors" | "validate" | "resetValidation" | "density" | "rounded" | "tile" | "_allExposed" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "controlRef" | "fieldIconColor" | "persistentPlaceholder" | "persistentCounter" | "defaultChecked" | "defaultValue" | "dirName" | "files" | "formAction" | "formEnctype" | "formMethod" | "formNoValidate" | "formTarget" | "selectionDirection" | "selectionEnd" | "selectionStart" | "useMap" | "valueAsDate" | "valueAsNumber" | "webkitEntries" | "webkitdirectory" | "setRangeText" | "setSelectionRange" | "stepDown" | "stepUp" | "popoverTargetAction" | "popoverTargetElement"> & import("vue").ShallowUnwrapRef<HTMLInputElement & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: string, ...args: any[]) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
}> & Omit<{
    error: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
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
    baseColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
    iconColor?: string | boolean | undefined;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
} & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
    reset: () => Promise<void>;
    resetValidation: () => Promise<void>;
    validate: (silent?: boolean) => Promise<string[]>;
    isValid: import("vue").ComputedRef<boolean | null>;
    errorMessages: import("vue").ComputedRef<string[]>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
    $: import("vue").ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
    $attrs: {
        [x: string]: unknown;
    };
    $refs: {
        [x: string]: unknown;
    };
    $slots: Readonly<{
        clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
    }>;
    $root: import("vue").ComponentPublicInstance | null;
    $parent: import("vue").ComponentPublicInstance | null;
    $host: Element | null;
    $emit: (event: "update:focused", focused: boolean) => void;
    $el: any;
    $options: import("vue").ComponentOptionsBase<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:focused': (focused: boolean) => true;
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }, {}, string, import("vue").SlotsType<Partial<{
        clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
        beforeCreate?: (() => void) | (() => void)[];
        created?: (() => void) | (() => void)[];
        beforeMount?: (() => void) | (() => void)[];
        mounted?: (() => void) | (() => void)[];
        beforeUpdate?: (() => void) | (() => void)[];
        updated?: (() => void) | (() => void)[];
        activated?: (() => void) | (() => void)[];
        deactivated?: (() => void) | (() => void)[];
        beforeDestroy?: (() => void) | (() => void)[];
        beforeUnmount?: (() => void) | (() => void)[];
        destroyed?: (() => void) | (() => void)[];
        unmounted?: (() => void) | (() => void)[];
        renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
        errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
    };
    $forceUpdate: () => void;
    $nextTick: typeof import("vue").nextTick;
    $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
} & Readonly<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    error: boolean;
    active: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    focused: boolean;
    rounded: string | number | boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
}> & Omit<{
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    error: boolean;
    active: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    focused: boolean;
    tile: boolean;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
} & {
    id?: string | undefined;
    color?: string | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
    'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
    'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
    centerAffix?: boolean | undefined;
    iconColor?: string | boolean | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
}, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
    controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    fieldIconColor: import("vue").ComputedRef<string | undefined>;
}> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
    _allExposed: {
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    } | {
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    } | {};
}> & {} & import("vue").ComponentCustomProperties & {}, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "loading" | "label" | "prefix" | "role" | "class" | "theme" | "placeholder" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "counter" | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:append" | "onClick:prepend" | "onClick:appendInner" | "onClick:prependInner" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "suffix" | "counterValue" | "modelModifiers" | "onClick:control" | "onMousedown:control" | ("flat" | "reverse" | "variant" | "type" | "error" | "active" | "direction" | "style" | "autofocus" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint" | "clearable" | "dirty" | "persistentClear" | "singleLine" | "persistentPlaceholder" | "persistentCounter") | "v-slot:counter">, `$${any}`> & {
    _allExposed: (HTMLInputElement & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }> & Omit<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
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
            baseColor?: string | undefined;
            prependIcon?: import("../../composables/icons.js").IconValue | undefined;
            appendIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
            iconColor?: string | boolean | undefined;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
        } & {}, {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:message" | "v-slot:details">, string, {
            error: boolean;
            direction: "horizontal" | "vertical";
            style: import("vue").StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            messages: string | readonly string[];
            rules: readonly import("../../types.js").ValidationRule[];
            focused: boolean;
            errorMessages: string | readonly string[] | null;
            maxErrors: string | number;
            density: import("../../composables/density.js").Density;
            centerAffix: boolean;
            glow: boolean;
            hideSpinButtons: boolean;
            persistentHint: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            default: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
    }> & Omit<{
        error: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        messages: string | readonly string[];
        rules: readonly import("../../types.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
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
        baseColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:append'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prepend'?: ((args_0: MouseEvent) => void) | undefined;
        iconColor?: string | boolean | undefined;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
    } & {}, "reset" | "isValid" | "validate" | "resetValidation" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")> & import("vue").ShallowUnwrapRef<{
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        isValid: import("vue").ComputedRef<boolean | null>;
        errorMessages: import("vue").ComputedRef<string[]>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VInput/VInput.js").VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }> & Omit<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: (((args_0: boolean) => void) & ((focused: boolean) => any)) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            clear?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance | null;
        $parent: import("vue").ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: "update:focused", focused: boolean) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<{
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        } & {
            id?: string | undefined;
            color?: string | undefined;
            loading?: string | boolean | undefined;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
            'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
            'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
            centerAffix?: boolean | undefined;
            iconColor?: string | boolean | undefined;
        } & {
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        }, {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
            'update:focused': (focused: boolean) => true;
            'update:modelValue': (value: any) => true;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:loader" | "v-slot:label" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner">, string, {
            flat: boolean;
            reverse: boolean;
            variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
            error: boolean;
            active: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            focused: boolean;
            rounded: string | number | boolean;
            tile: boolean;
            clearIcon: import("../../composables/icons.js").IconValue;
            centerAffix: boolean;
            glow: boolean;
            clearable: boolean;
            dirty: boolean;
            persistentClear: boolean;
            singleLine: boolean;
        }, {}, string, import("vue").SlotsType<Partial<{
            clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../../components/VField/VField.js").VFieldSlot) => import("vue").VNode[];
        }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import("@vue/reactivity").OnCleanup]) => any : (...args: [any, any, import("@vue/reactivity").OnCleanup]) => any, options?: import("vue").WatchOptions): import("vue").WatchStopHandle;
    } & Readonly<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        rounded: string | number | boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    }> & Omit<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        error: boolean;
        active: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        focused: boolean;
        tile: boolean;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        clearable: boolean;
        dirty: boolean;
        persistentClear: boolean;
        singleLine: boolean;
    } & {
        id?: string | undefined;
        color?: string | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        appendInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        prependInnerIcon?: import("../../composables/icons.js").IconValue | undefined;
        'onClick:clear'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:appendInner'?: ((args_0: MouseEvent) => void) | undefined;
        'onClick:prependInner'?: ((args_0: MouseEvent) => void) | undefined;
        centerAffix?: boolean | undefined;
        iconColor?: string | boolean | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    }, ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine") | "controlRef" | "fieldIconColor"> & import("vue").ShallowUnwrapRef<{
        controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        fieldIconColor: import("vue").ComputedRef<string | undefined>;
    }> & {} & import("vue").ComponentCustomProperties & {} & import("../../util/index.js").GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, import("../../components/VField/VField.js").VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
        _allExposed: {
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            isValid: import("vue").ComputedRef<boolean | null>;
            errorMessages: import("vue").ComputedRef<string[]>;
        } | {
            controlRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
            fieldIconColor: import("vue").ComputedRef<string | undefined>;
        } | {};
    }) | {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    save: (value: string) => true;
    cancel: () => true;
    'update:modelValue': (val: string) => true;
}, string, {
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    location: import("../../util/index.js").Anchor;
    active: boolean;
    direction: "horizontal" | "vertical";
    transition: string;
    header: string;
    style: import("vue").StyleValue;
    title: string;
    autofocus: boolean;
    mobile: boolean | null;
    disabled: boolean;
    readonly: boolean | null;
    tag: string | import("../../util/index.js").JSXComponent;
    landscape: boolean;
    placeholder: string;
    messages: string | readonly string[];
    rules: readonly import("../../types.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    divided: boolean;
    prependIcon: import("../../composables/icons.js").IconValue;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    nextIcon: import("../../composables/icons.js").IconValue;
    prevIcon: import("../../composables/icons.js").IconValue;
    clearable: boolean;
    dirty: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    reverseTransition: string;
    hideHeader: boolean;
    cancelText: string;
    okText: string;
    hideActions: boolean;
    modeIcon: import("../../composables/icons.js").IconValue;
    viewMode: "month" | "year" | "months";
    showAdjacentMonths: boolean;
    weekdays: import("../../composables/calendar.js").CalendarWeekdays[];
    weeksInMonth: "static" | "dynamic";
    firstDayOfWeek: string | number;
    hideWeekdays: boolean;
    showWeek: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: import("../../components/VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    clear: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNode[];
    details: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    label: (arg: import("../../components/VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNode[];
    append: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    prepend: (arg: import("../../components/VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
    counter: (arg: import("../../components/VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
    'prepend-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    'append-inner': (arg: import("../../components/VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    actions: (arg: VDateInputActionsSlot) => import("vue").VNode[];
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    max: PropType<unknown>;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    text: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    multiple: PropType<boolean | "range" | number | (string & {})>;
    month: (StringConstructor | NumberConstructor)[];
    year: NumberConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    landscape: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    modelValue: null;
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    controlHeight: (StringConstructor | NumberConstructor)[];
    headerColor: StringConstructor;
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    hideHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    modeIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
    showAdjacentMonths: {
        type: PropType<boolean>;
        default: boolean;
    };
    weekdays: {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<"static" | "dynamic">;
        default: NonNullable<"static" | "dynamic">;
    };
    firstDayOfWeek: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    allowedDates: PropType<unknown[] | ((date: unknown) => boolean)>;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideDetails: PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: PropType<Record<string, boolean>>;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: {
        type: PropType<boolean>;
        default: boolean;
    };
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    displayFormat: (FunctionConstructor | StringConstructor)[];
    location: {
        type: PropType<StrategyProps["location"]>;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    max: PropType<unknown>;
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    header: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    title: {
        type: PropType<string>;
        default: string;
    };
    text: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    multiple: PropType<boolean | "range" | number | (string & {})>;
    month: (StringConstructor | NumberConstructor)[];
    year: NumberConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    landscape: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    modelValue: null;
    tile: BooleanConstructor;
    divided: BooleanConstructor;
    bgColor: StringConstructor;
    controlHeight: (StringConstructor | NumberConstructor)[];
    headerColor: StringConstructor;
    nextIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    reverseTransition: {
        type: StringConstructor;
        default: string;
    };
    hideHeader: {
        type: PropType<boolean>;
        default: boolean;
    };
    modeIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    viewMode: {
        type: PropType<"month" | "months" | "year">;
        default: string;
    };
    showAdjacentMonths: {
        type: PropType<boolean>;
        default: boolean;
    };
    weekdays: {
        type: PropType<import("../../composables/calendar.js").CalendarWeekdays[]>;
        default: () => number[];
    };
    weeksInMonth: Omit<{
        type: PropType<"dynamic" | "static">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<"static" | "dynamic">;
        default: NonNullable<"static" | "dynamic">;
    };
    firstDayOfWeek: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    allowedDates: PropType<unknown[] | ((date: unknown) => boolean)>;
    hideWeekdays: BooleanConstructor;
    showWeek: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    loading: (StringConstructor | BooleanConstructor)[];
    appendInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    clearable: BooleanConstructor;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    active: BooleanConstructor;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    baseColor: StringConstructor;
    dirty: BooleanConstructor;
    glow: BooleanConstructor;
    error: BooleanConstructor;
    flat: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    persistentClear: BooleanConstructor;
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    reverse: BooleanConstructor;
    singleLine: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<(args_0: boolean) => void>;
    errorMessages: {
        type: PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    id: StringConstructor;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    prependIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: NonNullable<import("../../composables/icons.js").IconValue>;
    };
    hideDetails: PropType<boolean | "auto">;
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    autofocus: BooleanConstructor;
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    counterValue: PropType<number | ((value: any) => number)>;
    prefix: StringConstructor;
    placeholder: {
        type: PropType<string>;
        default: string;
    };
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    role: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: PropType<Record<string, boolean>>;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    hideActions: {
        type: PropType<boolean>;
        default: boolean;
    };
    mobile: {
        type: PropType<boolean | null>;
        default: boolean;
    };
    mobileBreakpoint: PropType<number | import("../../composables/display.js").DisplayBreakpoint>;
    displayFormat: (FunctionConstructor | StringConstructor)[];
    location: {
        type: PropType<StrategyProps["location"]>;
        default: string;
    };
}>>;
export type VDateInput = InstanceType<typeof VDateInput>;
