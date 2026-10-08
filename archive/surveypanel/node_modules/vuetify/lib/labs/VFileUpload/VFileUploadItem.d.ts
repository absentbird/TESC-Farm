import type { PropType } from 'vue';
import type { VListItemSlots } from "../../components/VList/VListItem.js";
export type VFileUploadItemSlots = {
    clear: {
        props: {
            onClick: () => void;
        };
    };
} & VListItemSlots;
export declare const makeVFileUploadItemProps: <Defaults extends {
    color?: unknown;
    variant?: unknown;
    theme?: unknown;
    tag?: unknown;
    href?: unknown;
    replace?: unknown;
    to?: unknown;
    exact?: unknown;
    rounded?: unknown;
    tile?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    active?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    appendAvatar?: unknown;
    appendIcon?: unknown;
    baseColor?: unknown;
    disabled?: unknown;
    lines?: unknown;
    link?: unknown;
    nav?: unknown;
    prependAvatar?: unknown;
    prependIcon?: unknown;
    ripple?: unknown;
    slim?: unknown;
    subtitle?: unknown;
    title?: unknown;
    value?: unknown;
    onClick?: unknown;
    onClickOnce?: unknown;
    clearable?: unknown;
    file?: unknown;
    fileIcon?: unknown;
    showSize?: unknown;
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
    rounded: unknown extends Defaults["rounded"] ? Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    } : Omit<Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
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
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
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
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
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
    border: unknown extends Defaults["border"] ? {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    } : Omit<{
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["border"] ? string | number | boolean : string | number | boolean | Defaults["border"]>;
        default: unknown extends Defaults["border"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["border"];
    };
    active: unknown extends Defaults["active"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    appendAvatar: unknown extends Defaults["appendAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"]>;
        default: unknown extends Defaults["appendAvatar"] ? string : string | Defaults["appendAvatar"];
    };
    appendIcon: unknown extends Defaults["appendIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["appendIcon"]>;
        default: unknown extends Defaults["appendIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["appendIcon"];
    };
    baseColor: unknown extends Defaults["baseColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"]>;
        default: unknown extends Defaults["baseColor"] ? string : string | Defaults["baseColor"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    lines: unknown extends Defaults["lines"] ? {
        type: PropType<false | "one" | "two" | "three">;
        default: NonNullable<false | "one" | "two" | "three">;
    } : Omit<{
        type: PropType<false | "one" | "two" | "three">;
        default: NonNullable<false | "one" | "two" | "three">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : false | "one" | "two" | "three" | Defaults["lines"]>;
        default: unknown extends Defaults["lines"] ? false | "one" | "two" | "three" : NonNullable<false | "one" | "two" | "three"> | Defaults["lines"];
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
    nav: unknown extends Defaults["nav"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"]>;
        default: unknown extends Defaults["nav"] ? boolean : boolean | Defaults["nav"];
    };
    prependAvatar: unknown extends Defaults["prependAvatar"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"]>;
        default: unknown extends Defaults["prependAvatar"] ? string : string | Defaults["prependAvatar"];
    };
    prependIcon: unknown extends Defaults["prependIcon"] ? PropType<import("../../composables/icons.js").IconValue> : {
        type: PropType<unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : import("../../composables/icons.js").IconValue | Defaults["prependIcon"]>;
        default: unknown extends Defaults["prependIcon"] ? import("../../composables/icons.js").IconValue : NonNullable<import("../../composables/icons.js").IconValue> | Defaults["prependIcon"];
    };
    ripple: unknown extends Defaults["ripple"] ? {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    } : Omit<{
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
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
    slim: unknown extends Defaults["slim"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"]>;
        default: unknown extends Defaults["slim"] ? boolean : boolean | Defaults["slim"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["subtitle"] ? string | number | boolean : string | number | boolean | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["subtitle"];
    };
    title: unknown extends Defaults["title"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["title"] ? string | number | boolean : string | number | boolean | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["title"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    onClick: unknown extends Defaults["onClick"] ? PropType<(args_0: MouseEvent | KeyboardEvent) => void> : {
        type: PropType<unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"]>;
        default: unknown extends Defaults["onClick"] ? (args_0: MouseEvent | KeyboardEvent) => void : ((args_0: MouseEvent | KeyboardEvent) => void) | Defaults["onClick"];
    };
    onClickOnce: unknown extends Defaults["onClickOnce"] ? PropType<(args_0: MouseEvent) => void> : {
        type: PropType<unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"]>;
        default: unknown extends Defaults["onClickOnce"] ? (args_0: MouseEvent) => void : ((args_0: MouseEvent) => void) | Defaults["onClickOnce"];
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    file: unknown extends Defaults["file"] ? {
        type: PropType<File>;
        default: null;
    } : Omit<{
        type: PropType<File>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["file"] ? File : File | Defaults["file"]>;
        default: unknown extends Defaults["file"] ? File : File | Defaults["file"];
    };
    fileIcon: unknown extends Defaults["fileIcon"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["fileIcon"] ? string : string | Defaults["fileIcon"]>;
        default: unknown extends Defaults["fileIcon"] ? string : string | Defaults["fileIcon"];
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
};
export declare const VFileUploadItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        file: File;
        border: string | number | boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        clearable: boolean;
        showSize: boolean;
        fileIcon: string;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            clear?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        "onClick:remove"?: (() => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:remove': () => true;
        click: (e: MouseEvent | KeyboardEvent) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        file: File;
        active: boolean;
        border: string | number | boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        subtitle: string | number | boolean;
        clearable: boolean;
        showSize: boolean;
        fileIcon: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        clear: (arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode[];
        prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        append: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        default: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
        title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
        subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        replace: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        file: File;
        border: string | number | boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        clearable: boolean;
        showSize: boolean;
        fileIcon: string;
    } & {
        link?: boolean | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        active?: boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        value?: any;
        title?: string | number | boolean | undefined;
        class?: any;
        theme?: string | undefined;
        to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
        onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
        onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
        href?: string | undefined;
        elevation?: string | number | undefined;
        baseColor?: string | undefined;
        activeColor?: string | undefined;
        prependIcon?: import("../../composables/icons.js").IconValue | undefined;
        appendIcon?: import("../../composables/icons.js").IconValue | undefined;
        activeClass?: string | undefined;
        appendAvatar?: string | undefined;
        prependAvatar?: string | undefined;
        subtitle?: string | number | boolean | undefined;
    } & {
        $children?: import("vue").VNodeChild | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
            clear?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            clear?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
            title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
            subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:clear"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        "onClick:remove"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        replace: boolean;
        link: boolean;
        variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        exact: boolean;
        file: File;
        active: boolean;
        border: string | number | boolean;
        nav: boolean;
        style: import("vue").StyleValue;
        title: string | number | boolean;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        lines: false | "one" | "two" | "three";
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        slim: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        subtitle: string | number | boolean;
        clearable: boolean;
        showSize: boolean;
        fileIcon: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    replace: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    file: File;
    border: string | number | boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    clearable: boolean;
    showSize: boolean;
    fileIcon: string;
} & {
    link?: boolean | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    active?: boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    value?: any;
    title?: string | number | boolean | undefined;
    class?: any;
    theme?: string | undefined;
    to?: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric | undefined;
    onClick?: ((args_0: MouseEvent | KeyboardEvent) => void) | undefined;
    onClickOnce?: ((args_0: MouseEvent) => void) | undefined;
    href?: string | undefined;
    elevation?: string | number | undefined;
    baseColor?: string | undefined;
    activeColor?: string | undefined;
    prependIcon?: import("../../composables/icons.js").IconValue | undefined;
    appendIcon?: import("../../composables/icons.js").IconValue | undefined;
    activeClass?: string | undefined;
    appendAvatar?: string | undefined;
    prependAvatar?: string | undefined;
    subtitle?: string | number | boolean | undefined;
} & {
    $children?: import("vue").VNodeChild | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | {
        clear?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        prepend?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        clear?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        prepend?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        append?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        default?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
        title?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
        subtitle?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:clear"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:append"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:subtitle"?: false | ((arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNodeChild) | undefined;
} & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    "onClick:remove"?: (() => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:remove': () => true;
    click: (e: MouseEvent | KeyboardEvent) => true;
}, string, {
    replace: boolean;
    link: boolean;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    exact: boolean;
    file: File;
    active: boolean;
    border: string | number | boolean;
    nav: boolean;
    style: import("vue").StyleValue;
    title: string | number | boolean;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    lines: false | "one" | "two" | "three";
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    slim: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    subtitle: string | number | boolean;
    clearable: boolean;
    showSize: boolean;
    fileIcon: string;
}, {}, string, import("vue").SlotsType<Partial<{
    clear: (arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode[];
    prepend: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    append: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    default: (arg: import("../../components/VList/VListItem.js").ListItemSlot) => import("vue").VNode[];
    title: (arg: import("../../components/VList/VListItem.js").ListItemTitleSlot) => import("vue").VNode[];
    subtitle: (arg: import("../../components/VList/VListItem.js").ListItemSubtitleSlot) => import("vue").VNode[];
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
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
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: NonNullable<false | "one" | "two" | "three">;
    };
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    slim: BooleanConstructor;
    subtitle: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    title: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    clearable: BooleanConstructor;
    file: {
        type: PropType<File>;
        default: null;
    };
    fileIcon: {
        type: StringConstructor;
        default: string;
    };
    showSize: BooleanConstructor;
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
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<import("vue-router").RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    tile: BooleanConstructor;
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
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
    border: {
        type: PropType<string | number | boolean>;
        default: NonNullable<string | number | boolean>;
    };
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<import("../../composables/icons.js").IconValue>;
    baseColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: NonNullable<false | "one" | "two" | "three">;
    };
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<import("../../composables/icons.js").IconValue>;
    ripple: {
        type: PropType<import("../../directives/ripple/index.js").RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    slim: BooleanConstructor;
    subtitle: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    title: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    value: null;
    onClick: PropType<(args_0: MouseEvent | KeyboardEvent) => void>;
    onClickOnce: PropType<(args_0: MouseEvent) => void>;
    clearable: BooleanConstructor;
    file: {
        type: PropType<File>;
        default: null;
    };
    fileIcon: {
        type: StringConstructor;
        default: string;
    };
    showSize: BooleanConstructor;
}>>;
export type VFileUploadItem = InstanceType<typeof VFileUploadItem>;
