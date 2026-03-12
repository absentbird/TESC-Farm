import { IconValue } from "../../composables/icons.js";
import type { PropType, VNode } from 'vue';
export type VFileUploadSlots = {
    browse: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    };
    default: never;
    icon: never;
    input: {
        inputNode: VNode;
    };
    item: {
        file: File;
        props: {
            'onClick:remove': () => void;
        };
    };
    title: never;
    divider: never;
};
export declare const makeVFileUploadProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    position?: unknown;
    location?: unknown;
    elevation?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    border?: unknown;
    color?: unknown;
    length?: unknown;
    opacity?: unknown;
    thickness?: unknown;
    density?: unknown;
    closeDelay?: unknown;
    openDelay?: unknown;
    browseText?: unknown;
    dividerText?: unknown;
    title?: unknown;
    subtitle?: unknown;
    icon?: unknown;
    modelValue?: unknown;
    clearable?: unknown;
    disabled?: unknown;
    hideBrowse?: unknown;
    multiple?: unknown;
    scrim?: unknown;
    showSize?: unknown;
    name?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    location: unknown extends Defaults["location"] ? PropType<import("../../util/index.js").Anchor | null> : {
        type: PropType<unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : import("../../util/index.js").Anchor | Defaults["location"] | null>;
        default: unknown extends Defaults["location"] ? import("../../util/index.js").Anchor | null : NonNullable<import("../../util/index.js").Anchor | null> | Defaults["location"];
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    length: unknown extends Defaults["length"] ? {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    } : Omit<{
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["length"] ? string | number : string | number | Defaults["length"]>;
        default: unknown extends Defaults["length"] ? string | number : NonNullable<string | number> | Defaults["length"];
    };
    opacity: unknown extends Defaults["opacity"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["opacity"] ? string | number : string | number | Defaults["opacity"]>;
        default: unknown extends Defaults["opacity"] ? string | number : NonNullable<string | number> | Defaults["opacity"];
    };
    thickness: unknown extends Defaults["thickness"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["thickness"] ? string | number : string | number | Defaults["thickness"]>;
        default: unknown extends Defaults["thickness"] ? string | number : NonNullable<string | number> | Defaults["thickness"];
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
    closeDelay: unknown extends Defaults["closeDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
    };
    browseText: unknown extends Defaults["browseText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"]>;
        default: unknown extends Defaults["browseText"] ? string : string | Defaults["browseText"];
    };
    dividerText: unknown extends Defaults["dividerText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"]>;
        default: unknown extends Defaults["dividerText"] ? string : string | Defaults["dividerText"];
    };
    title: unknown extends Defaults["title"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["title"] ? string : string | Defaults["title"]>;
        default: unknown extends Defaults["title"] ? string : string | Defaults["title"];
    };
    subtitle: unknown extends Defaults["subtitle"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"]>;
        default: unknown extends Defaults["subtitle"] ? string : string | Defaults["subtitle"];
    };
    icon: unknown extends Defaults["icon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? File | File[] : File | File[] | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? File | File[] : Defaults["modelValue"] | NonNullable<File | File[]>;
    };
    clearable: unknown extends Defaults["clearable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"]>;
        default: unknown extends Defaults["clearable"] ? boolean : boolean | Defaults["clearable"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    hideBrowse: unknown extends Defaults["hideBrowse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"]>;
        default: unknown extends Defaults["hideBrowse"] ? boolean : boolean | Defaults["hideBrowse"];
    };
    multiple: unknown extends Defaults["multiple"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"]>;
        default: unknown extends Defaults["multiple"] ? boolean : boolean | Defaults["multiple"];
    };
    scrim: unknown extends Defaults["scrim"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["scrim"] ? string | boolean : string | boolean | Defaults["scrim"]>;
        default: unknown extends Defaults["scrim"] ? string | boolean : NonNullable<string | boolean> | Defaults["scrim"];
    };
    showSize: unknown extends Defaults["showSize"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"]>;
        default: unknown extends Defaults["showSize"] ? boolean : boolean | Defaults["showSize"];
    };
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
};
export declare const VFileUpload: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        length: string | number;
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        icon: IconValue;
        modelValue: File | File[];
        density: import("../../composables/density.js").Density;
        tile: boolean;
        scrim: string | boolean;
        clearable: boolean;
        showSize: boolean;
        browseText: string;
        dividerText: string;
        hideBrowse: boolean;
    } & {
        name?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        subtitle?: string | undefined;
        thickness?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            input?: ((arg: {
                inputNode: VNode;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: {
                inputNode: VNode;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: {
            inputNode: VNode;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (files: File[]) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        length: string | number;
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        icon: IconValue;
        modelValue: File | File[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        scrim: string | boolean;
        clearable: boolean;
        showSize: boolean;
        browseText: string;
        dividerText: string;
        hideBrowse: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        browse: (arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => VNode[];
        default: () => VNode[];
        icon: () => VNode[];
        input: (arg: {
            inputNode: VNode;
        }) => VNode[];
        item: (arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => VNode[];
        title: () => VNode[];
        divider: () => VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        length: string | number;
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        icon: IconValue;
        modelValue: File | File[];
        density: import("../../composables/density.js").Density;
        tile: boolean;
        scrim: string | boolean;
        clearable: boolean;
        showSize: boolean;
        browseText: string;
        dividerText: string;
        hideBrowse: boolean;
    } & {
        name?: string | undefined;
        location?: import("../../util/index.js").Anchor | null | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        border?: string | number | boolean | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        opacity?: string | number | undefined;
        position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
        class?: any;
        theme?: string | undefined;
        elevation?: string | number | undefined;
        rounded?: string | number | boolean | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        subtitle?: string | undefined;
        thickness?: string | number | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            browse?: ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: (() => import("vue").VNodeChild) | undefined;
            icon?: (() => import("vue").VNodeChild) | undefined;
            input?: ((arg: {
                inputNode: VNode;
            }) => import("vue").VNodeChild) | undefined;
            item?: ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: (() => import("vue").VNodeChild) | undefined;
            divider?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            browse?: false | ((arg: {
                props: {
                    onClick: (e: MouseEvent) => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            default?: false | (() => import("vue").VNodeChild) | undefined;
            icon?: false | (() => import("vue").VNodeChild) | undefined;
            input?: false | ((arg: {
                inputNode: VNode;
            }) => import("vue").VNodeChild) | undefined;
            item?: false | ((arg: {
                file: File;
                props: {
                    "onClick:remove": () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            title?: false | (() => import("vue").VNodeChild) | undefined;
            divider?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:browse"?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:input"?: false | ((arg: {
            inputNode: VNode;
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:item"?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        length: string | number;
        style: import("vue").StyleValue;
        title: string;
        disabled: boolean;
        multiple: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        icon: IconValue;
        modelValue: File | File[];
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
        scrim: string | boolean;
        clearable: boolean;
        showSize: boolean;
        browseText: string;
        dividerText: string;
        hideBrowse: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    length: string | number;
    style: import("vue").StyleValue;
    title: string;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    icon: IconValue;
    modelValue: File | File[];
    density: import("../../composables/density.js").Density;
    tile: boolean;
    scrim: string | boolean;
    clearable: boolean;
    showSize: boolean;
    browseText: string;
    dividerText: string;
    hideBrowse: boolean;
} & {
    name?: string | undefined;
    location?: import("../../util/index.js").Anchor | null | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    border?: string | number | boolean | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    opacity?: string | number | undefined;
    position?: "fixed" | "absolute" | "relative" | "static" | "sticky" | undefined;
    class?: any;
    theme?: string | undefined;
    elevation?: string | number | undefined;
    rounded?: string | number | boolean | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    subtitle?: string | undefined;
    thickness?: string | number | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        browse?: ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: (() => import("vue").VNodeChild) | undefined;
        icon?: (() => import("vue").VNodeChild) | undefined;
        input?: ((arg: {
            inputNode: VNode;
        }) => import("vue").VNodeChild) | undefined;
        item?: ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        title?: (() => import("vue").VNodeChild) | undefined;
        divider?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        browse?: false | ((arg: {
            props: {
                onClick: (e: MouseEvent) => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        default?: false | (() => import("vue").VNodeChild) | undefined;
        icon?: false | (() => import("vue").VNodeChild) | undefined;
        input?: false | ((arg: {
            inputNode: VNode;
        }) => import("vue").VNodeChild) | undefined;
        item?: false | ((arg: {
            file: File;
            props: {
                "onClick:remove": () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        title?: false | (() => import("vue").VNodeChild) | undefined;
        divider?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:browse"?: false | ((arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:icon"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:input"?: false | ((arg: {
        inputNode: VNode;
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:item"?: false | ((arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:title"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:divider"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((files: File[]) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (files: File[]) => true;
}, string, {
    length: string | number;
    style: import("vue").StyleValue;
    title: string;
    disabled: boolean;
    multiple: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    icon: IconValue;
    modelValue: File | File[];
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
    scrim: string | boolean;
    clearable: boolean;
    showSize: boolean;
    browseText: string;
    dividerText: string;
    hideBrowse: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    browse: (arg: {
        props: {
            onClick: (e: MouseEvent) => void;
        };
    }) => VNode[];
    default: () => VNode[];
    icon: () => VNode[];
    input: (arg: {
        inputNode: VNode;
    }) => VNode[];
    item: (arg: {
        file: File;
        props: {
            "onClick:remove": () => void;
        };
    }) => VNode[];
    title: () => VNode[];
    divider: () => VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<import("../../util/index.js").Anchor | null>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    length: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    thickness: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    modelValue: {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    };
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    name: StringConstructor;
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    position: {
        type: PropType<"fixed" | "absolute" | "relative" | "static" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: PropType<import("../../util/index.js").Anchor | null>;
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
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    color: StringConstructor;
    length: {
        type: PropType<string | number>;
        default: NonNullable<string | number>;
    };
    opacity: (StringConstructor | NumberConstructor)[];
    thickness: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<import("../../composables/density.js").Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    browseText: {
        type: StringConstructor;
        default: string;
    };
    dividerText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    subtitle: StringConstructor;
    icon: {
        type: PropType<IconValue>;
        default: string;
    };
    modelValue: {
        type: PropType<File[] | File>;
        default: null;
        validator: (val: any) => boolean;
    };
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    hideBrowse: BooleanConstructor;
    multiple: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    showSize: BooleanConstructor;
    name: StringConstructor;
}>>;
export type VFileUpload = InstanceType<typeof VFileUpload>;
