import { VList } from "../VList/index.js";
import { VMenu } from "../VMenu/index.js";
import { nextTick } from 'vue';
import { deepEqual } from "../../util/index.js";
import type { PropType } from 'vue';
import type { VFieldSlots } from "../VField/VField.js";
import type { VInputSlots } from "../VInput/VInput.js";
import type { ListItem } from "../../composables/list-items.js";
import type { GenericProps, SelectItemKey } from "../../util/index.js";
type Primitive = string | number | boolean | symbol;
type Val<T, ReturnObject extends boolean> = [T] extends [Primitive] ? T : (ReturnObject extends true ? T : any);
type Value<T, ReturnObject extends boolean, Multiple extends boolean> = Multiple extends true ? readonly Val<T, ReturnObject>[] : Val<T, ReturnObject> | null;
export declare const makeVAutocompleteProps: <Defaults extends {
    transition?: unknown;
    flat?: unknown;
    reverse?: unknown;
    variant?: unknown;
    name?: unknown;
    type?: unknown;
    error?: unknown;
    id?: unknown;
    width?: unknown;
    active?: unknown;
    color?: unknown;
    direction?: unknown;
    maxWidth?: unknown;
    minWidth?: unknown;
    loading?: unknown;
    label?: unknown;
    style?: unknown;
    prefix?: unknown;
    role?: unknown;
    autofocus?: unknown;
    disabled?: unknown;
    readonly?: unknown;
    class?: unknown;
    theme?: unknown;
    placeholder?: unknown;
    messages?: unknown;
    rules?: unknown;
    counter?: unknown;
    focused?: unknown;
    'onUpdate:focused'?: unknown;
    errorMessages?: unknown;
    maxErrors?: unknown;
    modelValue?: unknown;
    validateOn?: unknown;
    density?: unknown;
    rounded?: unknown;
    tile?: unknown;
    baseColor?: unknown;
    bgColor?: unknown;
    prependIcon?: unknown;
    appendIcon?: unknown;
    clearIcon?: unknown;
    prependInnerIcon?: unknown;
    'onClick:clear'?: unknown;
    'onClick:append'?: unknown;
    'onClick:prepend'?: unknown;
    'onClick:appendInner'?: unknown;
    'onClick:prependInner'?: unknown;
    centerAffix?: unknown;
    glow?: unknown;
    iconColor?: unknown;
    hideSpinButtons?: unknown;
    hint?: unknown;
    persistentHint?: unknown;
    hideDetails?: unknown;
    clearable?: unknown;
    persistentClear?: unknown;
    singleLine?: unknown;
    persistentPlaceholder?: unknown;
    persistentCounter?: unknown;
    suffix?: unknown;
    counterValue?: unknown;
    modelModifiers?: unknown;
    items?: unknown;
    itemTitle?: unknown;
    itemValue?: unknown;
    itemChildren?: unknown;
    itemProps?: unknown;
    returnObject?: unknown;
    valueComparator?: unknown;
    chips?: unknown;
    closableChips?: unknown;
    closeText?: unknown;
    openText?: unknown;
    eager?: unknown;
    hideNoData?: unknown;
    hideSelected?: unknown;
    listProps?: unknown;
    menu?: unknown;
    menuIcon?: unknown;
    menuProps?: unknown;
    multiple?: unknown;
    noDataText?: unknown;
    openOnClear?: unknown;
    itemColor?: unknown;
    customFilter?: unknown;
    customKeyFilter?: unknown;
    filterKeys?: unknown;
    filterMode?: unknown;
    noFilter?: unknown;
    autoSelectFirst?: unknown;
    clearOnSelect?: unknown;
    search?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    } : Omit<Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) : string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) : NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })> | Defaults["transition"];
    };
    flat: unknown extends Defaults["flat"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"]>;
        default: unknown extends Defaults["flat"] ? boolean : boolean | Defaults["flat"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
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
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
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
    error: unknown extends Defaults["error"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"]>;
        default: unknown extends Defaults["error"] ? boolean : boolean | Defaults["error"];
    };
    id: unknown extends Defaults["id"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["id"] ? string : string | Defaults["id"]>;
        default: unknown extends Defaults["id"] ? string : string | Defaults["id"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
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
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    loading: unknown extends Defaults["loading"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["loading"] ? string | boolean : string | boolean | Defaults["loading"]>;
        default: unknown extends Defaults["loading"] ? string | boolean : NonNullable<string | boolean> | Defaults["loading"];
    };
    label: unknown extends Defaults["label"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["label"] ? string : string | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? string : string | Defaults["label"];
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
    prefix: unknown extends Defaults["prefix"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"]>;
        default: unknown extends Defaults["prefix"] ? string : string | Defaults["prefix"];
    };
    role: unknown extends Defaults["role"] ? {
        type: PropType<string>;
        default: string;
    } : Omit<{
        type: PropType<string>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["role"] ? string : string | Defaults["role"]>;
        default: unknown extends Defaults["role"] ? string : string | Defaults["role"];
    };
    autofocus: unknown extends Defaults["autofocus"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"]>;
        default: unknown extends Defaults["autofocus"] ? boolean : boolean | Defaults["autofocus"];
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
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    placeholder: unknown extends Defaults["placeholder"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"]>;
        default: unknown extends Defaults["placeholder"] ? string : string | Defaults["placeholder"];
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
    counter: unknown extends Defaults["counter"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["counter"] ? string | number | boolean : string | number | boolean | Defaults["counter"]>;
        default: unknown extends Defaults["counter"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["counter"];
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
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<any>;
        default: any;
    } : Omit<{
        type: PropType<any>;
        default: any;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    validateOn: unknown extends Defaults["validateOn"] ? PropType<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> : {
        type: PropType<unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | Defaults["validateOn"] | undefined>;
        default: unknown extends Defaults["validateOn"] ? ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined : NonNullable<("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined> | Defaults["validateOn"];
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
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
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
    prependInnerIcon: unknown extends Defaults["prependInnerIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependInnerIcon"]>;
        default: unknown extends Defaults["prependInnerIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependInnerIcon"];
    };
    'onClick:clear': unknown extends Defaults["onClick:clear"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"]>;
        default: unknown extends Defaults["onClick:clear"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:clear"];
    };
    'onClick:append': unknown extends Defaults["onClick:append"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"]>;
        default: unknown extends Defaults["onClick:append"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:append"];
    };
    'onClick:prepend': unknown extends Defaults["onClick:prepend"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"]>;
        default: unknown extends Defaults["onClick:prepend"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prepend"];
    };
    'onClick:appendInner': unknown extends Defaults["onClick:appendInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"]>;
        default: unknown extends Defaults["onClick:appendInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:appendInner"];
    };
    'onClick:prependInner': unknown extends Defaults["onClick:prependInner"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"]>;
        default: unknown extends Defaults["onClick:prependInner"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick:prependInner"];
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
    glow: unknown extends Defaults["glow"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"]>;
        default: unknown extends Defaults["glow"] ? boolean : boolean | Defaults["glow"];
    };
    iconColor: unknown extends Defaults["iconColor"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["iconColor"] ? string | boolean : string | boolean | Defaults["iconColor"]>;
        default: unknown extends Defaults["iconColor"] ? string | boolean : NonNullable<string | boolean> | Defaults["iconColor"];
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
    hideDetails: unknown extends Defaults["hideDetails"] ? PropType<boolean | "auto"> : {
        type: PropType<unknown extends Defaults["hideDetails"] ? boolean | "auto" : boolean | "auto" | Defaults["hideDetails"]>;
        default: unknown extends Defaults["hideDetails"] ? boolean | "auto" : NonNullable<boolean | "auto"> | Defaults["hideDetails"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    persistentClear: unknown extends Defaults["persistentClear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"]>;
        default: unknown extends Defaults["persistentClear"] ? boolean : boolean | Defaults["persistentClear"];
    };
    singleLine: unknown extends Defaults["singleLine"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"]>;
        default: unknown extends Defaults["singleLine"] ? boolean : boolean | Defaults["singleLine"];
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
    counterValue: unknown extends Defaults["counterValue"] ? PropType<number | ((value: any) => number)> : {
        type: PropType<unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : number | ((value: any) => number) | Defaults["counterValue"]>;
        default: unknown extends Defaults["counterValue"] ? number | ((value: any) => number) : NonNullable<number | ((value: any) => number)> | Defaults["counterValue"];
    };
    modelModifiers: unknown extends Defaults["modelModifiers"] ? PropType<Record<string, boolean>> : {
        type: PropType<unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"]>;
        default: unknown extends Defaults["modelModifiers"] ? Record<string, boolean> : Record<string, boolean> | Defaults["modelModifiers"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    } : Omit<{
        type: PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? any[] : any[] | Defaults["items"];
    };
    itemTitle: unknown extends Defaults["itemTitle"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemTitle"] ? SelectItemKey : SelectItemKey | Defaults["itemTitle"]>;
        default: unknown extends Defaults["itemTitle"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemTitle"];
    };
    itemValue: unknown extends Defaults["itemValue"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemValue"] ? SelectItemKey : SelectItemKey | Defaults["itemValue"]>;
        default: unknown extends Defaults["itemValue"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemValue"];
    };
    itemChildren: unknown extends Defaults["itemChildren"] ? Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<SelectItemKey>;
        default: NonNullable<SelectItemKey>;
    } : Omit<Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<SelectItemKey>;
        default: NonNullable<SelectItemKey>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemChildren"] ? SelectItemKey : SelectItemKey | Defaults["itemChildren"]>;
        default: unknown extends Defaults["itemChildren"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemChildren"];
    };
    itemProps: unknown extends Defaults["itemProps"] ? {
        type: PropType<SelectItemKey>;
        default: string;
    } : Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["itemProps"] ? SelectItemKey : SelectItemKey | Defaults["itemProps"]>;
        default: unknown extends Defaults["itemProps"] ? SelectItemKey : NonNullable<SelectItemKey> | Defaults["itemProps"];
    };
    returnObject: unknown extends Defaults["returnObject"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"]>;
        default: unknown extends Defaults["returnObject"] ? boolean : boolean | Defaults["returnObject"];
    };
    valueComparator: unknown extends Defaults["valueComparator"] ? PropType<typeof deepEqual> : {
        type: PropType<unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"]>;
        default: unknown extends Defaults["valueComparator"] ? typeof deepEqual : typeof deepEqual | Defaults["valueComparator"];
    };
    chips: unknown extends Defaults["chips"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["chips"] ? boolean : boolean | Defaults["chips"]>;
        default: unknown extends Defaults["chips"] ? boolean : boolean | Defaults["chips"];
    };
    closableChips: unknown extends Defaults["closableChips"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closableChips"] ? boolean : boolean | Defaults["closableChips"]>;
        default: unknown extends Defaults["closableChips"] ? boolean : boolean | Defaults["closableChips"];
    };
    closeText: unknown extends Defaults["closeText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"]>;
        default: unknown extends Defaults["closeText"] ? string : string | Defaults["closeText"];
    };
    openText: unknown extends Defaults["openText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openText"] ? string : string | Defaults["openText"]>;
        default: unknown extends Defaults["openText"] ? string : string | Defaults["openText"];
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    hideNoData: unknown extends Defaults["hideNoData"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"]>;
        default: unknown extends Defaults["hideNoData"] ? boolean : boolean | Defaults["hideNoData"];
    };
    hideSelected: unknown extends Defaults["hideSelected"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideSelected"] ? boolean : boolean | Defaults["hideSelected"]>;
        default: unknown extends Defaults["hideSelected"] ? boolean : boolean | Defaults["hideSelected"];
    };
    listProps: unknown extends Defaults["listProps"] ? {
        type: PropType<VList["$props"]>;
    } : Omit<{
        type: PropType<VList["$props"]>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["listProps"] ? Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        } : (Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        }) | Defaults["listProps"]>;
        default: unknown extends Defaults["listProps"] ? Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        } : NonNullable<Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        }> | Defaults["listProps"];
    };
    menu: unknown extends Defaults["menu"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["menu"] ? boolean : boolean | Defaults["menu"]>;
        default: unknown extends Defaults["menu"] ? boolean : boolean | Defaults["menu"];
    };
    menuIcon: unknown extends Defaults["menuIcon"] ? {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["menuIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["menuIcon"]>;
        default: unknown extends Defaults["menuIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["menuIcon"];
    };
    menuProps: unknown extends Defaults["menuProps"] ? {
        type: PropType<VMenu["$props"]>;
    } : Omit<{
        type: PropType<VMenu["$props"]>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["menuProps"] ? Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu"> : (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu">) | Defaults["menuProps"]>;
        default: unknown extends Defaults["menuProps"] ? Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu"> : NonNullable<Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu">> | Defaults["menuProps"];
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    noDataText: unknown extends Defaults["noDataText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"]>;
        default: unknown extends Defaults["noDataText"] ? string : string | Defaults["noDataText"];
    };
    openOnClear: unknown extends Defaults["openOnClear"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openOnClear"] ? boolean : boolean | Defaults["openOnClear"]>;
        default: unknown extends Defaults["openOnClear"] ? boolean : boolean | Defaults["openOnClear"];
    };
    itemColor: unknown extends Defaults["itemColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["itemColor"] ? string : string | Defaults["itemColor"]>;
        default: unknown extends Defaults["itemColor"] ? string : string | Defaults["itemColor"];
    };
    customFilter: unknown extends Defaults["customFilter"] ? PropType<import("../../composables/filter.js").FilterFunction> : {
        type: PropType<unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"]>;
        default: unknown extends Defaults["customFilter"] ? import("../../composables/filter.js").FilterFunction : import("../../composables/filter.js").FilterFunction | Defaults["customFilter"];
    };
    customKeyFilter: unknown extends Defaults["customKeyFilter"] ? PropType<import("../../composables/filter.js").FilterKeyFunctions> : {
        type: PropType<unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"]>;
        default: unknown extends Defaults["customKeyFilter"] ? import("../../composables/filter.js").FilterKeyFunctions : import("../../composables/filter.js").FilterKeyFunctions | Defaults["customKeyFilter"];
    };
    filterKeys: unknown extends Defaults["filterKeys"] ? {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : import("../../composables/filter.js").FilterKeys | Defaults["filterKeys"]>;
        default: unknown extends Defaults["filterKeys"] ? import("../../composables/filter.js").FilterKeys : NonNullable<import("../../composables/filter.js").FilterKeys> | Defaults["filterKeys"];
    };
    filterMode: unknown extends Defaults["filterMode"] ? {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    } : Omit<{
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : import("../../composables/filter.js").FilterMode | Defaults["filterMode"]>;
        default: unknown extends Defaults["filterMode"] ? import("../../composables/filter.js").FilterMode : NonNullable<import("../../composables/filter.js").FilterMode> | Defaults["filterMode"];
    };
    noFilter: unknown extends Defaults["noFilter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"]>;
        default: unknown extends Defaults["noFilter"] ? boolean : boolean | Defaults["noFilter"];
    };
    autoSelectFirst: unknown extends Defaults["autoSelectFirst"] ? {
        type: PropType<boolean | "exact">;
    } : Omit<{
        type: PropType<boolean | "exact">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["autoSelectFirst"] ? boolean | "exact" : boolean | "exact" | Defaults["autoSelectFirst"]>;
        default: unknown extends Defaults["autoSelectFirst"] ? boolean | "exact" : Defaults["autoSelectFirst"] | NonNullable<boolean | "exact">;
    };
    clearOnSelect: unknown extends Defaults["clearOnSelect"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearOnSelect"] ? boolean : boolean | Defaults["clearOnSelect"]>;
        default: unknown extends Defaults["clearOnSelect"] ? boolean : boolean | Defaults["clearOnSelect"];
    };
    search: unknown extends Defaults["search"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["search"] ? string : string | Defaults["search"]>;
        default: unknown extends Defaults["search"] ? string : string | Defaults["search"];
    };
};
type ItemType<T> = T extends readonly (infer U)[] ? U : never;
export declare const VAutocomplete: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        menu: boolean;
        style: import("vue").StyleValue;
        role: string;
        autofocus: boolean;
        eager: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        noDataText: string;
        rules: readonly import("../../types.js").ValidationRule[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        closeText: string;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        itemChildren: SelectItemKey;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: import("../../composables/icons.js").IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    } & {
        search?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        valueComparator?: typeof deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
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
        listProps?: (Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        }) | undefined;
        menuProps?: (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu">) | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: any) => any) | undefined;
    }, {
        isFocused: import("vue").ShallowRef<boolean, boolean>;
        isPristine: import("vue").ShallowRef<boolean, boolean>;
        menu: import("vue").WritableComputedRef<boolean, boolean>;
        search: import("vue").Ref<string | undefined, string | undefined> & {
            readonly externalValue: string | undefined;
        };
        filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
        select: (item: ListItem | undefined, set?: boolean | null) => void;
    } & Omit<Omit<{
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
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
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
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
        }) | {
            isFocused: import("vue").ShallowRef<boolean, boolean>;
            isPristine: import("vue").ShallowRef<boolean, boolean>;
            menu: import("vue").WritableComputedRef<boolean, boolean>;
            search: import("vue").Ref<string | undefined, string | undefined> & {
                readonly externalValue: string | undefined;
            };
            filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
            select: (item: ListItem | undefined, set?: boolean | null) => void;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:focused': (focused: boolean) => true;
        'update:search': (value: any) => true;
        'update:modelValue': (value: any) => true;
        'update:menu': (value: boolean) => true;
    }, "multiple" | "$children" | "v-slots" | "modelValue" | "items" | "itemValue" | "returnObject" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "v-slot:item" | "itemTitle" | "itemProps" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        menu: boolean;
        style: import("vue").StyleValue;
        role: string;
        autofocus: boolean;
        eager: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        noDataText: string;
        rules: readonly import("../../types.js").ValidationRule[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        closeText: string;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        itemChildren: SelectItemKey;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: import("../../composables/icons.js").IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        item: (arg: {
            item: ListItem<unknown>;
            index: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        chip: (arg: {
            item: ListItem<unknown>;
            index: number;
            props: Record<string, unknown>;
        }) => import("vue").VNode[];
        selection: (arg: {
            item: ListItem<unknown>;
            index: number;
        }) => import("vue").VNode[];
        'prepend-item': () => import("vue").VNode[];
        'append-item': () => import("vue").VNode[];
        'no-data': () => import("vue").VNode[];
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
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        menu: boolean;
        style: import("vue").StyleValue;
        role: string;
        autofocus: boolean;
        eager: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        noDataText: string;
        rules: readonly import("../../types.js").ValidationRule[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        closeText: string;
        clearIcon: import("../../composables/icons.js").IconValue;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        itemChildren: SelectItemKey;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: import("../../composables/icons.js").IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
    } & {
        search?: string | undefined;
        name?: string | undefined;
        id?: string | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxWidth?: string | number | undefined;
        minWidth?: string | number | undefined;
        loading?: string | boolean | undefined;
        label?: string | undefined;
        prefix?: string | undefined;
        class?: any;
        theme?: string | undefined;
        placeholder?: string | undefined;
        counter?: string | number | boolean | undefined;
        customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
        customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        valueComparator?: typeof deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
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
        listProps?: (Partial<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            rounded: string | number | boolean;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
        }> & Omit<{
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            nav: boolean;
            style: import("vue").StyleValue;
            disabled: boolean;
            tag: string | import("../../util/index.js").JSXComponent;
            lines: false | "one" | "two" | "three";
            mandatory: boolean;
            returnObject: boolean;
            selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
            density: import("../../composables/density.js").Density;
            tile: boolean;
            slim: boolean;
            activatable: boolean;
            selectable: boolean;
            openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
            itemType: string;
            height?: string | number | undefined;
            width?: string | number | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            activated?: any;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            valueComparator?: typeof deepEqual | undefined;
            rounded?: string | number | boolean | undefined;
            baseColor?: string | undefined;
            bgColor?: string | undefined;
            activeColor?: string | undefined;
            activeClass?: string | undefined;
            activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
            collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
            expandIcon?: import("../../composables/icons.js").IconValue | undefined;
            "onUpdate:activated"?: ((value: unknown) => any) | undefined;
            "onClick:activate"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
            items?: readonly any[] | undefined;
            itemTitle?: SelectItemKey<any>;
            itemValue?: SelectItemKey<any>;
            itemChildren?: SelectItemKey<any>;
            itemProps?: SelectItemKey<any>;
            selected?: unknown;
            'onUpdate:selected'?: ((value: unknown) => void) | undefined;
            'onClick:open'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            'onClick:select'?: (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => void;
            opened?: unknown;
            'onUpdate:opened'?: ((value: unknown) => void) | undefined;
        } & {
            $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
                title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                item?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                    item: any;
                }) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                item?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                divider?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                subheader?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
                header?: false | ((arg: {
                    props: import("../VList/VList.js").InternalListItem["props"];
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:item"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:divider"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:subheader"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:header"?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        }) | undefined;
        menuProps?: (Partial<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
        }> & Omit<{
            location: import("../../util/index.js").Anchor | undefined;
            origin: "auto" | import("../../util/index.js").Anchor | "overlap";
            transition: string | boolean | (import("vue").TransitionProps & {
                component?: import("vue").Component;
            }) | {
                component: import("vue").Component;
            };
            zIndex: string | number;
            style: import("vue").StyleValue;
            eager: boolean;
            disabled: boolean;
            persistent: boolean;
            modelValue: boolean;
            locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
            scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
            closeDelay: string | number;
            openDelay: string | number;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            scrim: string | boolean;
            submenu: boolean;
            offset?: string | number | number[] | undefined;
            id?: string | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            opacity?: string | number | undefined;
            target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
            class?: any;
            theme?: string | undefined;
            activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentClass?: any;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
            $children?: import("vue").VNodeChild | {
                default?: ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild);
            'v-slots'?: {
                default?: false | ((arg: {
                    isActive: import("vue").Ref<boolean>;
                }) => import("vue").VNodeChild) | undefined;
                activator?: false | ((arg: {
                    isActive: boolean;
                    props: Record<string, any>;
                    targetRef: import("../../util/index.js").TemplateRef;
                }) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:default"?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:activator"?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu">) | undefined;
        itemColor?: string | undefined;
        autoSelectFirst?: boolean | "exact" | undefined;
    } & {
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:menu"?: ((value: boolean) => any) | undefined;
        "onUpdate:search"?: ((value: any) => any) | undefined;
    }, {
        isFocused: import("vue").ShallowRef<boolean, boolean>;
        isPristine: import("vue").ShallowRef<boolean, boolean>;
        menu: import("vue").WritableComputedRef<boolean, boolean>;
        search: import("vue").Ref<string | undefined, string | undefined> & {
            readonly externalValue: string | undefined;
        };
        filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
        select: (item: ListItem | undefined, set?: boolean | null) => void;
    } & Omit<Omit<{
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
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            default?: (() => import("vue").VNode[]) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
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
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: (() => import("vue").VNodeChild) | undefined;
                counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            };
            'v-slots'?: {
                message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
                clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNodeChild) | undefined;
                append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
                loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
                'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
                default?: false | (() => import("vue").VNodeChild) | undefined;
                counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
            "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            default: () => import("vue").VNode[];
            counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
                default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
                message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
                default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
                message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
                clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
                label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[]) | undefined;
                loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
                default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
                clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
                label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                    label: string | undefined;
                    props: Record<string, any>;
                }) => import("vue").VNode[];
                loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
                default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
            $nextTick: typeof nextTick;
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
        }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
            modelValue?: unknown;
            'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
        }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
        }) | {
            isFocused: import("vue").ShallowRef<boolean, boolean>;
            isPristine: import("vue").ShallowRef<boolean, boolean>;
            menu: import("vue").WritableComputedRef<boolean, boolean>;
            search: import("vue").Ref<string | undefined, string | undefined> & {
                readonly externalValue: string | undefined;
            };
            filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
            select: (item: ListItem | undefined, set?: boolean | null) => void;
        };
    }, {}, {}, {}, {
        flat: boolean;
        reverse: boolean;
        variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
        type: string;
        error: boolean;
        active: boolean;
        direction: "horizontal" | "vertical";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        menu: boolean;
        style: import("vue").StyleValue;
        role: string;
        autofocus: boolean;
        eager: boolean;
        disabled: boolean;
        readonly: boolean | null;
        messages: string | readonly string[];
        noDataText: string;
        rules: readonly import("../../types.js").ValidationRule[];
        filterMode: import("../../composables/filter.js").FilterMode;
        noFilter: boolean;
        filterKeys: import("../../composables/filter.js").FilterKeys;
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        closeText: string;
        clearIcon: import("../../composables/icons.js").IconValue;
        centerAffix: boolean;
        glow: boolean;
        hideSpinButtons: boolean;
        persistentHint: boolean;
        itemChildren: SelectItemKey;
        clearable: boolean;
        persistentClear: boolean;
        singleLine: boolean;
        persistentPlaceholder: boolean;
        persistentCounter: boolean;
        chips: boolean;
        closableChips: boolean;
        openText: string;
        hideNoData: boolean;
        hideSelected: boolean;
        menuIcon: import("../../composables/icons.js").IconValue;
        openOnClear: boolean;
        clearOnSelect: boolean;
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
    active: boolean;
    direction: "horizontal" | "vertical";
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    menu: boolean;
    style: import("vue").StyleValue;
    role: string;
    autofocus: boolean;
    eager: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    noDataText: string;
    rules: readonly import("../../types.js").ValidationRule[];
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    closeText: string;
    clearIcon: import("../../composables/icons.js").IconValue;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    itemChildren: SelectItemKey;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: import("../../composables/icons.js").IconValue;
    openOnClear: boolean;
    clearOnSelect: boolean;
} & {
    search?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    loading?: string | boolean | undefined;
    label?: string | undefined;
    prefix?: string | undefined;
    class?: any;
    theme?: string | undefined;
    placeholder?: string | undefined;
    counter?: string | number | boolean | undefined;
    customFilter?: import("../../composables/filter.js").FilterFunction | undefined;
    customKeyFilter?: import("../../composables/filter.js").FilterKeyFunctions | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    valueComparator?: typeof deepEqual | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    bgColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
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
    listProps?: (Partial<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
    }> & Omit<{
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        mandatory: boolean;
        returnObject: boolean;
        selectStrategy: import("../../composables/nested/nested.js").SelectStrategyProp;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        slim: boolean;
        activatable: boolean;
        selectable: boolean;
        openStrategy: import("../../composables/nested/nested.js").OpenStrategyProp;
        itemType: string;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        activated?: any;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        valueComparator?: typeof deepEqual | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
        activeStrategy?: import("../../composables/nested/nested.js").ActiveStrategyProp | undefined;
        collapseIcon?: import("../../composables/icons.js").IconValue | undefined;
        expandIcon?: import("../../composables/icons.js").IconValue | undefined;
        "onUpdate:activated"?: ((value: unknown) => any) | undefined;
        "onClick:activate"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "variant" | "nav" | "style" | "disabled" | "tag" | "lines" | "mandatory" | "returnObject" | "selectStrategy" | "density" | "rounded" | "tile" | "slim" | "activatable" | "selectable" | "openStrategy" | "itemType"> & {
        items?: readonly any[] | undefined;
        itemTitle?: SelectItemKey<any>;
        itemValue?: SelectItemKey<any>;
        itemChildren?: SelectItemKey<any>;
        itemProps?: SelectItemKey<any>;
        selected?: unknown;
        'onUpdate:selected'?: ((value: unknown) => void) | undefined;
        'onClick:open'?: (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void;
        'onClick:select'?: (value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void;
        opened?: unknown;
        'onUpdate:opened'?: ((value: unknown) => void) | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            title?: ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            divider?: ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            subheader?: ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            header?: ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            title?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
                item: any;
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            divider?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            subheader?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
            header?: false | ((arg: {
                props: import("../VList/VList.js").InternalListItem["props"];
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:title"?: false | ((arg: import("../VList/VListItem.js").ListItemTitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VList/VListItem.js").ListItemSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../VList/VListItem.js").ListItemSubtitleSlot & {
            item: any;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            props: import("../VList/VList.js").InternalListItem["props"];
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | ((arg: {
            props: import("../VList/VList.js").InternalListItem["props"];
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:subheader"?: false | ((arg: {
            props: import("../VList/VList.js").InternalListItem["props"];
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:header"?: false | ((arg: {
            props: import("../VList/VList.js").InternalListItem["props"];
        }) => import("vue").VNodeChild) | undefined;
    }) | undefined;
    menuProps?: (Partial<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
    }> & Omit<{
        location: import("../../util/index.js").Anchor | undefined;
        origin: "auto" | import("../../util/index.js").Anchor | "overlap";
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        }) | {
            component: import("vue").Component;
        };
        zIndex: string | number;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        persistent: boolean;
        modelValue: boolean;
        locationStrategy: "connected" | "static" | import("../VOverlay/locationStrategies.js").LocationStrategyFunction;
        scrollStrategy: "none" | "block" | "close" | import("../VOverlay/scrollStrategies.js").ScrollStrategyFunction | "reposition";
        closeDelay: string | number;
        openDelay: string | number;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        scrim: string | boolean;
        submenu: boolean;
        offset?: string | number | number[] | undefined;
        id?: string | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        target?: Element | "cursor" | "parent" | (string & {}) | import("vue").ComponentPublicInstance | [x: number, y: number] | undefined;
        class?: any;
        theme?: string | undefined;
        activator?: Element | "parent" | (string & {}) | import("vue").ComponentPublicInstance | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentClass?: any;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isActive: import("vue").Ref<boolean>;
            }) => import("vue").VNodeChild) | undefined;
            activator?: false | ((arg: {
                isActive: boolean;
                props: Record<string, any>;
                targetRef: import("../../util/index.js").TemplateRef;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:default"?: false | ((arg: {
            isActive: import("vue").Ref<boolean>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:activator"?: false | ((arg: {
            isActive: boolean;
            props: Record<string, any>;
            targetRef: import("../../util/index.js").TemplateRef;
        }) => import("vue").VNodeChild) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "location" | "origin" | "transition" | "zIndex" | "style" | "eager" | "disabled" | "persistent" | "modelValue" | "locationStrategy" | "scrollStrategy" | "closeDelay" | "openDelay" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "closeOnBack" | "contained" | "noClickAnimation" | "scrim" | "submenu">) | undefined;
    itemColor?: string | undefined;
    autoSelectFirst?: boolean | "exact" | undefined;
} & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:menu"?: ((value: boolean) => any) | undefined;
    "onUpdate:search"?: ((value: any) => any) | undefined;
}, {
    isFocused: import("vue").ShallowRef<boolean, boolean>;
    isPristine: import("vue").ShallowRef<boolean, boolean>;
    menu: import("vue").WritableComputedRef<boolean, boolean>;
    search: import("vue").Ref<string | undefined, string | undefined> & {
        readonly externalValue: string | undefined;
    };
    filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
    select: (item: ListItem | undefined, set?: boolean | null) => void;
} & Omit<Omit<{
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        default?: (() => import("vue").VNode[]) | undefined;
        counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[]) | undefined;
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
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
            clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
            loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
            'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
        clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        label: (arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        default: () => import("vue").VNode[];
        counter: (arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNode[];
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
    $nextTick: typeof nextTick;
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
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        counter?: ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
        clear?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        details?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        label?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
        loader?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
        'prepend-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        'append-inner'?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        counter?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:clear"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:details"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:loader"?: false | ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append-inner"?: false | ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:counter"?: false | ((arg: import("../VCounter/VCounter.js").VCounterSlot) => import("vue").VNodeChild) | undefined;
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
        default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
        message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
        default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
        message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
    $nextTick: typeof nextTick;
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
}> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
        clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
        label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[]) | undefined;
        loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
        default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
        clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
            props: Record<string, any>;
        }) => import("vue").VNode[];
        'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
        label: (arg: import("../VField/VField.js").DefaultInputSlot & {
            label: string | undefined;
            props: Record<string, any>;
        }) => import("vue").VNode[];
        loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
        default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
    $nextTick: typeof nextTick;
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
}> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
    modelValue?: unknown;
    'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
}, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
            default?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            prepend?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            append?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            details?: ((arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[]) | undefined;
            message?: ((arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[]) | undefined;
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
            default: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
            message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VInputSlots>, "name" | "id" | "width" | "color" | "maxWidth" | "minWidth" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "validateOn" | "validationValue" | "onUpdate:modelValue" | "baseColor" | "prependIcon" | "appendIcon" | "v-slot:prepend" | "v-slot:append" | "onClick:append" | "onClick:prepend" | "v-slot:message" | "iconColor" | "hint" | "hideDetails" | "v-slot:details" | ("error" | "direction" | "style" | "disabled" | "readonly" | "messages" | "rules" | "focused" | "errorMessages" | "maxErrors" | "density" | "centerAffix" | "glow" | "hideSpinButtons" | "persistentHint")>, `$${any}`> & Omit<Omit<{
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
            clear?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            'prepend-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            'append-inner'?: ((arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[]) | undefined;
            label?: ((arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[]) | undefined;
            loader?: ((arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[]) | undefined;
            default?: ((arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[]) | undefined;
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
            clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
                props: Record<string, any>;
            }) => import("vue").VNode[];
            'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
            label: (arg: import("../VField/VField.js").DefaultInputSlot & {
                label: string | undefined;
                props: Record<string, any>;
            }) => import("vue").VNode[];
            loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
            default: (arg: import("../VField/VField.js").VFieldSlot) => import("vue").VNode[];
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
        $nextTick: typeof nextTick;
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
    }> & {} & import("vue").ComponentCustomProperties & {} & GenericProps<{
        modelValue?: unknown;
        'onUpdate:modelValue'?: ((value: unknown) => void) | undefined;
    }, VFieldSlots>, "id" | "color" | "loading" | "label" | "class" | "theme" | "$children" | "v-slots" | "v-slot:default" | keyof import("vue").VNodeProps | "onUpdate:focused" | "modelValue" | "onUpdate:modelValue" | "baseColor" | "bgColor" | "v-slot:loader" | "v-slot:label" | "appendInnerIcon" | "prependInnerIcon" | "onClick:clear" | "onClick:appendInner" | "onClick:prependInner" | "iconColor" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | ("flat" | "reverse" | "variant" | "error" | "active" | "style" | "disabled" | "focused" | "rounded" | "tile" | "clearIcon" | "centerAffix" | "glow" | "clearable" | "dirty" | "persistentClear" | "singleLine")>, `$${any}`> & {
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
    }) | {
        isFocused: import("vue").ShallowRef<boolean, boolean>;
        isPristine: import("vue").ShallowRef<boolean, boolean>;
        menu: import("vue").WritableComputedRef<boolean, boolean>;
        search: import("vue").Ref<string | undefined, string | undefined> & {
            readonly externalValue: string | undefined;
        };
        filteredItems: import("vue").ShallowRef<ListItem<any>[], ListItem<any>[]>;
        select: (item: ListItem | undefined, set?: boolean | null) => void;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:focused': (focused: boolean) => true;
    'update:search': (value: any) => true;
    'update:modelValue': (value: any) => true;
    'update:menu': (value: boolean) => true;
}, "multiple" | "$children" | "v-slots" | "modelValue" | "items" | "itemValue" | "returnObject" | "update:modelValue" | "v-slot:prepend" | "v-slot:append" | "v-slot:loader" | "v-slot:label" | "v-slot:message" | "v-slot:details" | "v-slot:item" | "itemTitle" | "itemProps" | "v-slot:clear" | "v-slot:prepend-inner" | "v-slot:append-inner" | "v-slot:chip" | "v-slot:selection" | "v-slot:prepend-item" | "v-slot:append-item" | "v-slot:no-data">, string, {
    flat: boolean;
    reverse: boolean;
    variant: "filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled";
    type: string;
    error: boolean;
    active: boolean;
    direction: "horizontal" | "vertical";
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    menu: boolean;
    style: import("vue").StyleValue;
    role: string;
    autofocus: boolean;
    eager: boolean;
    disabled: boolean;
    readonly: boolean | null;
    messages: string | readonly string[];
    noDataText: string;
    rules: readonly import("../../types.js").ValidationRule[];
    filterMode: import("../../composables/filter.js").FilterMode;
    noFilter: boolean;
    filterKeys: import("../../composables/filter.js").FilterKeys;
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    closeText: string;
    clearIcon: import("../../composables/icons.js").IconValue;
    centerAffix: boolean;
    glow: boolean;
    hideSpinButtons: boolean;
    persistentHint: boolean;
    itemChildren: SelectItemKey;
    clearable: boolean;
    persistentClear: boolean;
    singleLine: boolean;
    persistentPlaceholder: boolean;
    persistentCounter: boolean;
    chips: boolean;
    closableChips: boolean;
    openText: string;
    hideNoData: boolean;
    hideSelected: boolean;
    menuIcon: import("../../composables/icons.js").IconValue;
    openOnClear: boolean;
    clearOnSelect: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: import("../VMessages/VMessages.js").VMessageSlot) => import("vue").VNode[];
    clear: (arg: import("../VField/VField.js").DefaultInputSlot & {
        props: Record<string, any>;
    }) => import("vue").VNode[];
    details: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    label: (arg: import("../VField/VField.js").DefaultInputSlot & {
        label: string | undefined;
        props: Record<string, any>;
    }) => import("vue").VNode[];
    append: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    prepend: (arg: import("../VInput/VInput.js").VInputSlot) => import("vue").VNode[];
    loader: (arg: import("../../composables/loader.js").LoaderSlotProps) => import("vue").VNode[];
    'prepend-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    'append-inner': (arg: import("../VField/VField.js").DefaultInputSlot) => import("vue").VNode[];
    item: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    chip: (arg: {
        item: ListItem<unknown>;
        index: number;
        props: Record<string, unknown>;
    }) => import("vue").VNode[];
    selection: (arg: {
        item: ListItem<unknown>;
        index: number;
    }) => import("vue").VNode[];
    'prepend-item': () => import("vue").VNode[];
    'append-item': () => import("vue").VNode[];
    'no-data': () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends readonly any[], Item = ItemType<T>, ReturnObject extends boolean = false, Multiple extends boolean = false, V extends Value<Item, ReturnObject, Multiple> = Value<Item, ReturnObject, Multiple>>(props: {
    items?: T;
    itemTitle?: SelectItemKey<ItemType<T>>;
    itemValue?: SelectItemKey<ItemType<T>>;
    itemProps?: SelectItemKey<ItemType<T>>;
    returnObject?: ReturnObject;
    multiple?: Multiple;
    modelValue?: V | null;
    "onUpdate:modelValue"?: (value: V) => void;
}, slots: Omit<VInputSlots & VFieldSlots, "default"> & {
    item: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    chip: {
        item: ListItem<Item>;
        index: number;
        props: Record<string, unknown>;
    };
    selection: {
        item: ListItem<Item>;
        index: number;
    };
    "prepend-item": never;
    "append-item": never;
    "no-data": never;
}) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    flat: BooleanConstructor;
    reverse: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    name: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    active: BooleanConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    loading: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    prefix: StringConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    autofocus: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    placeholder: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    rules: {
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
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
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<SelectItemKey>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<typeof deepEqual>;
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    listProps: {
        type: PropType<VList["$props"]>;
    };
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<VMenu["$props"]>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    clearOnSelect: BooleanConstructor;
    search: StringConstructor;
}, import("vue").ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
    };
    flat: BooleanConstructor;
    reverse: BooleanConstructor;
    variant: {
        type: PropType<"filled" | "outlined" | "plain" | "underlined" | "solo" | "solo-inverted" | "solo-filled">;
        default: string;
        validator: (v: any) => boolean;
    };
    name: StringConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    error: BooleanConstructor;
    id: StringConstructor;
    width: (StringConstructor | NumberConstructor)[];
    active: BooleanConstructor;
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    maxWidth: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    loading: (StringConstructor | BooleanConstructor)[];
    label: StringConstructor;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    prefix: StringConstructor;
    role: {
        type: PropType<string>;
        default: string;
    };
    autofocus: BooleanConstructor;
    disabled: {
        type: BooleanConstructor;
        default: null;
    };
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    theme: StringConstructor;
    placeholder: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    rules: {
        type: PropType<readonly import("../../types.js").ValidationRule[]>;
        default: () => never[];
    };
    counter: (StringConstructor | BooleanConstructor | NumberConstructor)[];
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
    modelValue: {
        type: PropType<any>;
        default: any;
    };
    validateOn: PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    baseColor: StringConstructor;
    bgColor: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    clearIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    prependInnerIcon: PropType<import("../../composables/icons.js").IconValue>;
    'onClick:clear': PropType<(args_0: MouseEvent) => void>;
    'onClick:append': PropType<(args_0: MouseEvent) => void>;
    'onClick:prepend': PropType<(args_0: MouseEvent) => void>;
    'onClick:appendInner': PropType<(args_0: MouseEvent) => void>;
    'onClick:prependInner': PropType<(args_0: MouseEvent) => void>;
    centerAffix: {
        type: BooleanConstructor;
        default: undefined;
    };
    glow: BooleanConstructor;
    iconColor: (StringConstructor | BooleanConstructor)[];
    hideSpinButtons: BooleanConstructor;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    hideDetails: PropType<boolean | "auto">;
    clearable: BooleanConstructor;
    persistentClear: BooleanConstructor;
    singleLine: BooleanConstructor;
    persistentPlaceholder: BooleanConstructor;
    persistentCounter: BooleanConstructor;
    suffix: StringConstructor;
    counterValue: PropType<number | ((value: any) => number)>;
    modelModifiers: PropType<Record<string, boolean>>;
    items: {
        type: PropType<import("../../composables/list-items.js").ItemProps["items"]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: Omit<{
        type: PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<SelectItemKey>;
        default: NonNullable<SelectItemKey>;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    valueComparator: PropType<typeof deepEqual>;
    chips: BooleanConstructor;
    closableChips: BooleanConstructor;
    closeText: {
        type: StringConstructor;
        default: string;
    };
    openText: {
        type: StringConstructor;
        default: string;
    };
    eager: BooleanConstructor;
    hideNoData: BooleanConstructor;
    hideSelected: BooleanConstructor;
    listProps: {
        type: PropType<VList["$props"]>;
    };
    menu: BooleanConstructor;
    menuIcon: {
        type: PropType<import("../../composables/icons.js").IconValue>;
        default: string;
    };
    menuProps: {
        type: PropType<VMenu["$props"]>;
    };
    multiple: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    openOnClear: BooleanConstructor;
    itemColor: StringConstructor;
    customFilter: PropType<import("../../composables/filter.js").FilterFunction>;
    customKeyFilter: PropType<import("../../composables/filter.js").FilterKeyFunctions>;
    filterKeys: {
        type: PropType<import("../../composables/filter.js").FilterKeys>;
        default: NonNullable<import("../../composables/filter.js").FilterKeys>;
    };
    filterMode: {
        type: PropType<import("../../composables/filter.js").FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    autoSelectFirst: {
        type: PropType<boolean | "exact">;
    };
    clearOnSelect: BooleanConstructor;
    search: StringConstructor;
}>>;
export type VAutocomplete = InstanceType<typeof VAutocomplete>;

