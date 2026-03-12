export declare const makeVCarouselItemProps: <Defaults extends {
    eager?: unknown;
    value?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    class?: unknown;
    style?: unknown;
    reverseTransition?: unknown;
    transition?: unknown;
    rounded?: unknown;
    tile?: unknown;
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
    eager: unknown extends Defaults["eager"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"]>;
        default: unknown extends Defaults["eager"] ? boolean : boolean | Defaults["eager"];
    };
    value: unknown extends Defaults["value"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["value"] ? any : any>;
        default: unknown extends Defaults["value"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
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
    reverseTransition: unknown extends Defaults["reverseTransition"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["reverseTransition"] ? string | boolean : string | boolean | Defaults["reverseTransition"]>;
        default: unknown extends Defaults["reverseTransition"] ? string | boolean : NonNullable<string | boolean> | Defaults["reverseTransition"];
    };
    transition: unknown extends Defaults["transition"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean : string | boolean | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean : NonNullable<string | boolean> | Defaults["transition"];
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
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    maxHeight: unknown extends Defaults["maxHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxHeight"] ? string | number : string | number | Defaults["maxHeight"]>;
        default: unknown extends Defaults["maxHeight"] ? string | number : NonNullable<string | number> | Defaults["maxHeight"];
    };
    maxWidth: unknown extends Defaults["maxWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["maxWidth"] ? string | number : string | number | Defaults["maxWidth"]>;
        default: unknown extends Defaults["maxWidth"] ? string | number : NonNullable<string | number> | Defaults["maxWidth"];
    };
    minHeight: unknown extends Defaults["minHeight"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minHeight"] ? string | number : string | number | Defaults["minHeight"]>;
        default: unknown extends Defaults["minHeight"] ? string | number : NonNullable<string | number> | Defaults["minHeight"];
    };
    minWidth: unknown extends Defaults["minWidth"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["minWidth"] ? string | number : string | number | Defaults["minWidth"]>;
        default: unknown extends Defaults["minWidth"] ? string | number : NonNullable<string | number> | Defaults["minWidth"];
    };
    width: unknown extends Defaults["width"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["width"] ? string | number : string | number | Defaults["width"]>;
        default: unknown extends Defaults["width"] ? string | number : NonNullable<string | number> | Defaults["width"];
    };
    aspectRatio: unknown extends Defaults["aspectRatio"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["aspectRatio"] ? string | number : string | number | Defaults["aspectRatio"]>;
        default: unknown extends Defaults["aspectRatio"] ? string | number : NonNullable<string | number> | Defaults["aspectRatio"];
    };
    contentClass: unknown extends Defaults["contentClass"] ? null : {
        type: import("vue").PropType<unknown extends Defaults["contentClass"] ? any : any>;
        default: unknown extends Defaults["contentClass"] ? any : any;
    };
    inline: unknown extends Defaults["inline"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"]>;
        default: unknown extends Defaults["inline"] ? boolean : boolean | Defaults["inline"];
    };
    absolute: unknown extends Defaults["absolute"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"]>;
        default: unknown extends Defaults["absolute"] ? boolean : boolean | Defaults["absolute"];
    };
    alt: unknown extends Defaults["alt"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["alt"] ? string : string | Defaults["alt"]>;
        default: unknown extends Defaults["alt"] ? string : string | Defaults["alt"];
    };
    cover: unknown extends Defaults["cover"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"]>;
        default: unknown extends Defaults["cover"] ? boolean : boolean | Defaults["cover"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    draggable: unknown extends Defaults["draggable"] ? {
        type: import("vue").PropType<boolean | "true" | "false">;
        default: undefined;
    } : Omit<{
        type: import("vue").PropType<boolean | "true" | "false">;
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["draggable"] ? boolean | "false" | "true" : boolean | "false" | "true" | Defaults["draggable"]>;
        default: unknown extends Defaults["draggable"] ? boolean | "false" | "true" : NonNullable<boolean | "false" | "true"> | Defaults["draggable"];
    };
    gradient: unknown extends Defaults["gradient"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"]>;
        default: unknown extends Defaults["gradient"] ? string : string | Defaults["gradient"];
    };
    lazySrc: unknown extends Defaults["lazySrc"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"]>;
        default: unknown extends Defaults["lazySrc"] ? string : string | Defaults["lazySrc"];
    };
    options: unknown extends Defaults["options"] ? {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    } : Omit<{
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"]>;
        default: unknown extends Defaults["options"] ? IntersectionObserverInit : IntersectionObserverInit | Defaults["options"];
    };
    sizes: unknown extends Defaults["sizes"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"]>;
        default: unknown extends Defaults["sizes"] ? string : string | Defaults["sizes"];
    };
    src: unknown extends Defaults["src"] ? {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    } : Omit<{
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["src"] ? string | import("../VImg/VImg.js").srcObject : string | import("../VImg/VImg.js").srcObject | Defaults["src"]>;
        default: unknown extends Defaults["src"] ? string | import("../VImg/VImg.js").srcObject : NonNullable<string | import("../VImg/VImg.js").srcObject> | Defaults["src"];
    };
    crossorigin: unknown extends Defaults["crossorigin"] ? import("vue").PropType<"" | "anonymous" | "use-credentials"> : {
        type: import("vue").PropType<unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : "" | "anonymous" | "use-credentials" | Defaults["crossorigin"]>;
        default: unknown extends Defaults["crossorigin"] ? "" | "anonymous" | "use-credentials" : NonNullable<"" | "anonymous" | "use-credentials"> | Defaults["crossorigin"];
    };
    referrerpolicy: unknown extends Defaults["referrerpolicy"] ? import("vue").PropType<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"> : {
        type: import("vue").PropType<unknown extends Defaults["referrerpolicy"] ? "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | Defaults["referrerpolicy"]>;
        default: unknown extends Defaults["referrerpolicy"] ? "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" : NonNullable<"origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"> | Defaults["referrerpolicy"];
    };
    srcset: unknown extends Defaults["srcset"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"]>;
        default: unknown extends Defaults["srcset"] ? string : string | Defaults["srcset"];
    };
    position: unknown extends Defaults["position"] ? StringConstructor : {
        type: import("vue").PropType<unknown extends Defaults["position"] ? string : string | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? string : string | Defaults["position"];
    };
};
export declare const VCarouselItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        inline: boolean;
        absolute: boolean;
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | import("../VImg/VImg.js").srcObject;
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
        transition?: string | boolean | undefined;
        value?: any;
        draggable?: boolean | "false" | "true" | undefined;
        class?: any;
        alt?: string | undefined;
        referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        contentClass?: any;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        reverseTransition?: string | boolean | undefined;
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
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        inline: boolean;
        absolute: boolean;
        transition: string | boolean;
        style: import("vue").StyleValue;
        draggable: boolean | "false" | "true";
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | import("../VImg/VImg.js").srcObject;
        rounded: string | number | boolean;
        tile: boolean;
        reverseTransition: string | boolean;
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
        style: import("vue").StyleValue;
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | import("../VImg/VImg.js").srcObject;
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
        transition?: string | boolean | undefined;
        value?: any;
        draggable?: boolean | "false" | "true" | undefined;
        class?: any;
        alt?: string | undefined;
        referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
        sizes?: string | undefined;
        srcset?: string | undefined;
        rounded?: string | number | boolean | undefined;
        selectedClass?: string | undefined;
        contentClass?: any;
        gradient?: string | undefined;
        lazySrc?: string | undefined;
        reverseTransition?: string | boolean | undefined;
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
    }, {}, {}, {}, {}, {
        inline: boolean;
        absolute: boolean;
        transition: string | boolean;
        style: import("vue").StyleValue;
        draggable: boolean | "false" | "true";
        eager: boolean;
        disabled: boolean;
        options: IntersectionObserverInit;
        cover: boolean;
        src: string | import("../VImg/VImg.js").srcObject;
        rounded: string | number | boolean;
        tile: boolean;
        reverseTransition: string | boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    inline: boolean;
    absolute: boolean;
    style: import("vue").StyleValue;
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | import("../VImg/VImg.js").srcObject;
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
    transition?: string | boolean | undefined;
    value?: any;
    draggable?: boolean | "false" | "true" | undefined;
    class?: any;
    alt?: string | undefined;
    referrerpolicy?: "origin" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
    crossorigin?: "" | "anonymous" | "use-credentials" | undefined;
    sizes?: string | undefined;
    srcset?: string | undefined;
    rounded?: string | number | boolean | undefined;
    selectedClass?: string | undefined;
    contentClass?: any;
    gradient?: string | undefined;
    lazySrc?: string | undefined;
    reverseTransition?: string | boolean | undefined;
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
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    inline: boolean;
    absolute: boolean;
    transition: string | boolean;
    style: import("vue").StyleValue;
    draggable: boolean | "false" | "true";
    eager: boolean;
    disabled: boolean;
    options: IntersectionObserverInit;
    cover: boolean;
    src: string | import("../VImg/VImg.js").srcObject;
    rounded: string | number | boolean;
    tile: boolean;
    reverseTransition: string | boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
    placeholder: () => import("vue").VNode[];
    error: () => import("vue").VNode[];
    sources: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
        type: import("vue").PropType<boolean | "true" | "false">;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    };
    crossorigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: import("vue").PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}, import("vue").ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
        type: import("vue").PropType<boolean | "true" | "false">;
        default: undefined;
    };
    gradient: StringConstructor;
    lazySrc: StringConstructor;
    options: {
        type: import("vue").PropType<IntersectionObserverInit>;
        default: () => {
            root: undefined;
            rootMargin: undefined;
            threshold: undefined;
        };
    };
    sizes: StringConstructor;
    src: {
        type: import("vue").PropType<string | import("../VImg/VImg.js").srcObject>;
        default: string;
    };
    crossorigin: import("vue").PropType<"" | "anonymous" | "use-credentials">;
    referrerpolicy: import("vue").PropType<"no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url">;
    srcset: StringConstructor;
    position: StringConstructor;
}>>;
export type VCarouselItem = InstanceType<typeof VCarouselItem>;
