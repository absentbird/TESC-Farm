import type { PropType } from 'vue';
export interface srcObject {
    src?: string;
    srcset?: string;
    lazySrc?: string;
    aspect: number;
}
export type VImgSlots = {
    default: never;
    placeholder: never;
    error: never;
    sources: never;
};
export declare const makeVImgProps: <Defaults extends {
    transition?: unknown;
    rounded?: unknown;
    tile?: unknown;
    class?: unknown;
    style?: unknown;
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    aspectRatio?: unknown;
    contentClass?: unknown;
    inline?: unknown;
    absolute?: unknown;
    alt?: unknown;
    cover?: unknown;
    color?: unknown;
    draggable?: unknown;
    eager?: unknown;
    gradient?: unknown;
    lazySrc?: unknown;
    options?: unknown;
    sizes?: unknown;
    src?: unknown;
    crossorigin?: unknown;
    referrerpolicy?: unknown;
    srcset?: unknown;
    position?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    } : Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
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
    aspectRatio: unknown extends Defaults["aspectRatio"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["aspectRatio"] ? string | number : string | number | Defaults["aspectRatio"]>;
        default: unknown extends Defaults["aspectRatio"] ? string | number : NonNullable<string | number> | Defaults["aspectRatio"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    alt: unknown extends Defaults["alt"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["alt"] ? string : string | Defaults["alt"]>;
        default: unknown extends Defaults["alt"] ? string : string | Defaults["alt"];
    };
    cover: unknown extends Defaults["cover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"]>;
        default: unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    draggable: unknown extends Defaults["draggable"] ? {
        type: PropType<boolean | "true" | "false">;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | "true" | "false">;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["draggable"] ? boolean | "false" | "true" : boolean | "false" | "true" | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? boolean | "false" | "true" : Defaults["draggable"] | NonNullable<boolean | "false" | "true">;
    };
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    gradient: unknown extends Defaults["gradient"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"];
    };
    lazySrc: unknown extends Defaults["lazySrc"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"]>;
        default: unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"];
    };
    options: unknown extends Defaults["options"] ? {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    } : Omit<{
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"]>;
        default: unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"];
    };
    sizes: unknown extends Defaults["sizes"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"]>;
        default: unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"];
    };
    src: unknown extends Defaults["src"] ? {
        type: PropType<string | srcObject>;
        default: string;
    } : Omit<{
        type: PropType<string | srcObject>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["src"] ? string | srcObject : string | srcObject | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string | srcObject : Defaults["src"] | NonNullable<string | srcObject>;
    };
    crossorigin: unknown extends Defaults["crossorigin"] ? PropType<"" | "anonymous" | "use-credentials"> : {
        type: PropType<unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : "" | "anonymous" | "use-credentials" | Defaults["crossorigin"]>;
        default: unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : Defaults["crossorigin"] | NonNullable<"" | "anonymous" | "use-credentials">;
    };
    referrerpolicy: unknown extends Defaults["referrerpolicy"] ? PropType<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"> : {
        type: PropType<unknown extends Defaults["referrerpolicy"] ? "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | Defaults["referrerpolicy"]>;
        default: unknown extends Defaults["referrerpolicy"] ? "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : Defaults["referrerpolicy"] | NonNullable<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    };
    srcset: unknown extends Defaults["srcset"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"]>;
        default: unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"];
    };
    position: unknown extends Defaults["position"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["position"] ? string : string | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? string : string | Defaults["position"];
    };
};
export declare const VImg: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        absolute: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        eager: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
        tile: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        aspectRatio?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: string | undefined;
        draggable?: boolean | "false" | "true" | undefined;
        class?: any;
        alt?: string | undefined;
        referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onError?: ((value: string | undefined) => any) | undefined;
        onLoad?: ((value: string | undefined) => any) | undefined;
        onLoadstart?: ((value: string | undefined) => any) | undefined;
    }, {
        currentSrc: import("vue").ShallowRef<string, string>;
        image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
        state: import("vue").ShallowRef<"error" | "loaded" | "idle" | "loading", "error" | "loaded" | "idle" | "loading">;
        naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
        naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        loadstart: (value: string | undefined) => true;
        load: (value: string | undefined) => true;
        error: (value: string | undefined) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        absolute: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        draggable: boolean | "false" | "true";
        eager: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
        rounded: string | number | boolean;
        tile: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
        placeholder: () => import("vue").VNode[];
        error: () => import("vue").VNode[];
        sources: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        inline: boolean;
        absolute: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        eager: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
        tile: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        aspectRatio?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        position?: string | undefined;
        draggable?: boolean | "false" | "true" | undefined;
        class?: any;
        alt?: string | undefined;
        referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        rounded?: string | number | boolean | undefined;
        contentClass?: any;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
            default?: (() => import("vue").VNodeChild) | undefined;
            placeholder?: (() => import("vue").VNodeChild) | undefined;
            error?: (() => import("vue").VNodeChild) | undefined;
            sources?: (() => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
            placeholder?: false | (() => import("vue").VNodeChild) | undefined;
            error?: false | (() => import("vue").VNodeChild) | undefined;
            sources?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
        "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        onError?: ((value: string | undefined) => any) | undefined;
        onLoad?: ((value: string | undefined) => any) | undefined;
        onLoadstart?: ((value: string | undefined) => any) | undefined;
    }, {
        currentSrc: import("vue").ShallowRef<string, string>;
        image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
        state: import("vue").ShallowRef<"error" | "loaded" | "idle" | "loading", "error" | "loaded" | "idle" | "loading">;
        naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
        naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
    }, {}, {}, {}, {
        inline: boolean;
        absolute: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        });
        style: import("vue").StyleValue;
        draggable: boolean | "false" | "true";
        eager: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | srcObject;
        rounded: string | number | boolean;
        tile: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    absolute: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    style: import("vue").StyleValue;
    eager: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
    tile: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    aspectRatio?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    position?: string | undefined;
    draggable?: boolean | "false" | "true" | undefined;
    class?: any;
    alt?: string | undefined;
    referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
    crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
    sizes?: string | undefined;
    srcset?: string | undefined;
    rounded?: string | number | boolean | undefined;
    contentClass?: any;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | (() => import("vue").VNodeChild) | {
        default?: (() => import("vue").VNodeChild) | undefined;
        placeholder?: (() => import("vue").VNodeChild) | undefined;
        error?: (() => import("vue").VNodeChild) | undefined;
        sources?: (() => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
        placeholder?: false | (() => import("vue").VNodeChild) | undefined;
        error?: false | (() => import("vue").VNodeChild) | undefined;
        sources?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:placeholder"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:error"?: false | (() => import("vue").VNodeChild) | undefined;
    "v-slot:sources"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    onError?: ((value: string | undefined) => any) | undefined;
    onLoad?: ((value: string | undefined) => any) | undefined;
    onLoadstart?: ((value: string | undefined) => any) | undefined;
}, {
    currentSrc: import("vue").ShallowRef<string, string>;
    image: import("vue").Ref<HTMLImageElement | undefined, HTMLImageElement | undefined>;
    state: import("vue").ShallowRef<"error" | "loaded" | "idle" | "loading", "error" | "loaded" | "idle" | "loading">;
    naturalWidth: import("vue").ShallowRef<number | undefined, number | undefined>;
    naturalHeight: import("vue").ShallowRef<number | undefined, number | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    loadstart: (value: string | undefined) => true;
    load: (value: string | undefined) => true;
    error: (value: string | undefined) => true;
}, string, {
    inline: boolean;
    absolute: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: import("vue").Component;
    });
    style: import("vue").StyleValue;
    draggable: boolean | "false" | "true";
    eager: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | srcObject;
    rounded: string | number | boolean;
    tile: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    placeholder: () => import("vue").VNode[];
    error: () => import("vue").VNode[];
    sources: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    transition: {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: PropType<boolean | "true" | "false">;
        default: undefined;
    };
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    crossorigin: PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}, import("vue").ExtractPropTypes<{
    transition: {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: import("vue").Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    aspectRatio: (StringConstructor | NumberConstructor)[];
    contentClass: null;
    inline: BooleanConstructor;
    absolute: BooleanConstructor;
    alt: StringConstructor;
    cover: BooleanConstructor;
    color: StringConstructor;
    draggable: {
        type: PropType<boolean | "true" | "false">;
        default: undefined;
    };
    eager: BooleanConstructor;
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: PropType<string | srcObject>;
        default: string;
    };
    crossorigin: PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}>>;
export type VImg = InstanceType<typeof VImg>;
