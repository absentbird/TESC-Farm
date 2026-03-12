import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
export type VChipSlots = {
    default: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    };
    label: never;
    prepend: never;
    append: never;
    close: never;
    filter: never;
};
export declare const makeVChipProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    size?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    rounded?: unknown;
    tile?: unknown;
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    elevation?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    activeClass?: unknown;
    appendAvatar?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    closable?: unknown;
    closeIcon?: unknown;
    closeLabel?: unknown;
    draggable?: unknown;
    filter?: unknown;
    filterIcon?: unknown;
    label?: unknown;
    link?: unknown;
    pill?: unknown;
    prependAvatar?: unknown;
    prependIcon?: unknown;
    ripple?: unknown;
    text?: unknown;
    modelValue?: unknown;
    onClick?: unknown;
    onClickOnce?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    variant: unknown extends Defaults["variant"] ? Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    } : Omit<Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" | Defaults["variant"]>;
        default: unknown extends Defaults["variant"] ? "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain" : NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain"> | Defaults["variant"];
    };
    theme: unknown extends Defaults["theme"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["theme"] ? string : string | Defaults["theme"]>;
        default: unknown extends Defaults["theme"] ? string : string | Defaults["theme"];
    };
    tag: unknown extends Defaults["tag"] ? Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    } : Omit<Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : string | import("../../util/index.js").JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | import("../../util/index.js").JSXComponent : NonNullable<string | import("../../util/index.js").JSXComponent> | Defaults["tag"];
    };
    size: unknown extends Defaults["size"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["size"] ? string | number : string | number | Defaults["size"]>;
        default: unknown extends Defaults["size"] ? string | number : NonNullable<string | number> | Defaults["size"];
    };
    href: unknown extends Defaults["href"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["href"] ? string : string | Defaults["href"]>;
        default: unknown extends Defaults["href"] ? string : string | Defaults["href"];
    };
    replace: unknown extends Defaults["replace"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"]>;
        default: unknown extends Defaults["replace"] ? boolean : boolean | Defaults["replace"];
    };
    to: unknown extends Defaults["to"] ? PropType<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> : {
        type: PropType<unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | Defaults["to"]>;
        default: unknown extends Defaults["to"] ? string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric : NonNullable<string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric> | Defaults["to"];
    };
    exact: unknown extends Defaults["exact"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"]>;
        default: unknown extends Defaults["exact"] ? boolean : boolean | Defaults["exact"];
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
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
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
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
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
    border: unknown extends Defaults["border"] ? (StringConstructor | BooleanConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    appendAvatar: unknown extends Defaults["appendAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"]>;
        default: unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? IconValue : IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? IconValue : NonNullable<IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    closable: unknown extends Defaults["closable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"]>;
        default: unknown extends Defaults["closable"] ? boolean : boolean | Defaults["closable"];
    };
    closeIcon: unknown extends Defaults["closeIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closeIcon"] ? IconValue : IconValue | Defaults["closeIcon"]>;
        default: unknown extends Defaults["closeIcon"] ? IconValue : NonNullable<IconValue> | Defaults["closeIcon"];
    };
    closeLabel: unknown extends Defaults["closeLabel"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["closeLabel"] ? string : string | Defaults["closeLabel"]>;
        default: unknown extends Defaults["closeLabel"] ? string : string | Defaults["closeLabel"];
    };
    draggable: unknown extends Defaults["draggable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["draggable"] ? boolean : boolean | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? boolean : boolean | Defaults["draggable"];
    };
    filter: unknown extends Defaults["filter"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"]>;
        default: unknown extends Defaults["filter"] ? boolean : boolean | Defaults["filter"];
    };
    filterIcon: unknown extends Defaults["filterIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["filterIcon"] ? IconValue : IconValue | Defaults["filterIcon"]>;
        default: unknown extends Defaults["filterIcon"] ? IconValue : NonNullable<IconValue> | Defaults["filterIcon"];
    };
    label: unknown extends Defaults["label"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["label"] ? boolean : boolean | Defaults["label"]>;
        default: unknown extends Defaults["label"] ? boolean : boolean | Defaults["label"];
    };
    link: unknown extends Defaults["link"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"]>;
        default: unknown extends Defaults["link"] ? boolean : boolean | Defaults["link"];
    };
    pill: unknown extends Defaults["pill"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["pill"] ? boolean : boolean | Defaults["pill"]>;
        default: unknown extends Defaults["pill"] ? boolean : boolean | Defaults["pill"];
    };
    prependAvatar: unknown extends Defaults["prependAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"]>;
        default: unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? IconValue : IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prependIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : boolean | {
            class: string;
        } | Defaults["ripple"] | undefined>;
        default: unknown extends Defaults["ripple"] ? boolean | {
            class: string;
        } | undefined : NonNullable<boolean | {
            class: string;
        } | undefined> | Defaults["ripple"];
    };
    text: unknown extends Defaults["text"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["text"] ? string | number | boolean : string | number | boolean | Defaults["text"]>;
        default: unknown extends Defaults["text"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["text"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: BooleanConstructor;
        default: boolean;
    } : Omit<{
        type: BooleanConstructor;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? boolean : boolean | Defaults["modelValue"];
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClick"];
    };
    onClickOnce: unknown extends Defaults["onClickOnce"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"]>;
        default: unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"];
    };
};
export declare const VChip: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        replace: boolean;
        filter: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        label: boolean;
        style: import("vue").StyleValue;
        draggable: boolean;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        filterIcon: IconValue;
        pill: boolean;
    } & {
        link?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: (() => import("vue").VNodeChild) | undefined;
            filter?: (() => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | (() => import("vue").VNodeChild) | undefined;
            filter?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
    }, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:close': (e: MouseEvent) => true;
        'update:modelValue': (value: boolean) => true;
        'group:selected': (val: {
            value: boolean;
        }) => true;
        click: (e: MouseEvent | KeyboardEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        replace: boolean;
        link: boolean;
        filter: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        label: boolean;
        style: import("vue").StyleValue;
        text: string | number | boolean;
        draggable: boolean;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        filterIcon: IconValue;
        pill: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNode[];
        label: () => import("vue").VNode[];
        prepend: () => import("vue").VNode[];
        append: () => import("vue").VNode[];
        close: () => import("vue").VNode[];
        filter: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        replace: boolean;
        filter: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        label: boolean;
        style: import("vue").StyleValue;
        draggable: boolean;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        filterIcon: IconValue;
        pill: boolean;
    } & {
        link?: boolean | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        value?: any;
        text?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        onClick?: ((args_0: MouseEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        baseColor?: string | undefined;
        selectedClass?: string | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: (() => import("vue").VNodeChild) | undefined;
            prepend?: (() => import("vue").VNodeChild) | undefined;
            append?: (() => import("vue").VNodeChild) | undefined;
            close?: (() => import("vue").VNodeChild) | undefined;
            filter?: (() => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: boolean | undefined;
                selectedClass: boolean | (string | undefined)[] | undefined;
                select: ((value: boolean) => void) | undefined;
                toggle: (() => void) | undefined;
                value: unknown;
                disabled: boolean;
            }) => import("vue").VNodeChild) | undefined;
            label?: false | (() => import("vue").VNodeChild) | undefined;
            prepend?: false | (() => import("vue").VNodeChild) | undefined;
            append?: false | (() => import("vue").VNodeChild) | undefined;
            close?: false | (() => import("vue").VNodeChild) | undefined;
            filter?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
        "onClick:close"?: ((e: MouseEvent) => any) | undefined;
    }, () => false | JSX.Element, {}, {}, {}, {
        replace: boolean;
        link: boolean;
        filter: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        label: boolean;
        style: import("vue").StyleValue;
        text: string | number | boolean;
        draggable: boolean;
        disabled: boolean;
        size: string | number;
        tag: string | import("../../util/index.js").JSXComponent;
        modelValue: boolean;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        closable: boolean;
        closeIcon: IconValue;
        closeLabel: string;
        filterIcon: IconValue;
        pill: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    replace: boolean;
    filter: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    label: boolean;
    style: import("vue").StyleValue;
    draggable: boolean;
    disabled: boolean;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: boolean;
    density: import("../../composables/density.js").Density;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    filterIcon: IconValue;
    pill: boolean;
} & {
    link?: boolean | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    value?: any;
    text?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    onClick?: ((args_0: MouseEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    baseColor?: string | undefined;
    selectedClass?: string | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        label?: (() => import("vue").VNodeChild) | undefined;
        prepend?: (() => import("vue").VNodeChild) | undefined;
        append?: (() => import("vue").VNodeChild) | undefined;
        close?: (() => import("vue").VNodeChild) | undefined;
        filter?: (() => import("vue").VNodeChild) | undefined;
    } | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: boolean | undefined;
            selectedClass: boolean | (string | undefined)[] | undefined;
            select: ((value: boolean) => void) | undefined;
            toggle: (() => void) | undefined;
            value: unknown;
            disabled: boolean;
        }) => import("vue").VNodeChild) | undefined;
        label?: false | (() => import("vue").VNodeChild) | undefined;
        prepend?: false | (() => import("vue").VNodeChild) | undefined;
        append?: false | (() => import("vue").VNodeChild) | undefined;
        close?: false | (() => import("vue").VNodeChild) | undefined;
        filter?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:label"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:close"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:filter"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
    "onClick:close"?: ((e: MouseEvent) => any) | undefined;
}, () => false | JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:close': (e: MouseEvent) => true;
    'update:modelValue': (value: boolean) => true;
    'group:selected': (val: {
        value: boolean;
    }) => true;
    click: (e: MouseEvent | KeyboardEvent) => true;
}, string, {
    replace: boolean;
    link: boolean;
    filter: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    label: boolean;
    style: import("vue").StyleValue;
    text: string | number | boolean;
    draggable: boolean;
    disabled: boolean;
    size: string | number;
    tag: string | import("../../util/index.js").JSXComponent;
    modelValue: boolean;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    closable: boolean;
    closeIcon: IconValue;
    closeLabel: string;
    filterIcon: IconValue;
    pill: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isSelected: boolean | undefined;
        selectedClass: boolean | (string | undefined)[] | undefined;
        select: ((value: boolean) => void) | undefined;
        toggle: (() => void) | undefined;
        value: unknown;
        disabled: boolean;
    }) => import("vue").VNode[];
    label: () => import("vue").VNode[];
    prepend: () => import("vue").VNode[];
    append: () => import("vue").VNode[];
    close: () => import("vue").VNode[];
    filter: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<import("../../composables/variant.js").Variant>;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
    };
    theme: StringConstructor;
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    activeClass: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    baseColor: StringConstructor;
    closable: BooleanConstructor;
    closeIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    closeLabel: {
        type: StringConstructor;
        default: string;
    };
    draggable: BooleanConstructor;
    filter: BooleanConstructor;
    filterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    label: BooleanConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    pill: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    text: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClick: PropType<(args_0: MouseEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
}>>;
export type VChip = InstanceType<typeof VChip>;
