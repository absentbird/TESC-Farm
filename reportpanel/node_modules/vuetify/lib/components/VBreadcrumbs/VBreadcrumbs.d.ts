import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { LinkProps } from "../../composables/router.js";
import type { GenericProps } from "../../util/index.js";
export type InternalBreadcrumbItem = Partial<LinkProps> & {
    title: string;
    disabled?: boolean;
};
export type BreadcrumbItem = string | InternalBreadcrumbItem;
export declare const makeVBreadcrumbsProps: <Defaults extends {
    tag?: unknown;
    rounded?: unknown;
    tile?: unknown;
    density?: unknown;
    class?: unknown;
    style?: unknown;
    activeClass?: unknown;
    activeColor?: unknown;
    bgColor?: unknown;
    color?: unknown;
    disabled?: unknown;
    divider?: unknown;
    icon?: unknown;
    items?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    activeClass: unknown extends Defaults["activeClass"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"]>;
        default: unknown extends Defaults["activeClass"] ? string : string | Defaults["activeClass"];
    };
    activeColor: unknown extends Defaults["activeColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"]>;
        default: unknown extends Defaults["activeColor"] ? string : string | Defaults["activeColor"];
    };
    bgColor: unknown extends Defaults["bgColor"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"]>;
        default: unknown extends Defaults["bgColor"] ? string : string | Defaults["bgColor"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    divider: unknown extends Defaults["divider"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["divider"] ? string : string | Defaults["divider"]>;
        default: unknown extends Defaults["divider"] ? string : string | Defaults["divider"];
    };
    icon: unknown extends Defaults["icon"] ? PropType<IconValue> : {
        type: PropType<unknown extends Defaults["icon"] ? IconValue : IconValue | Defaults["icon"]>;
        default: unknown extends Defaults["icon"] ? IconValue : NonNullable<IconValue> | Defaults["icon"];
    };
    items: unknown extends Defaults["items"] ? {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["items"] ? readonly BreadcrumbItem[] : readonly BreadcrumbItem[] | Defaults["items"]>;
        default: unknown extends Defaults["items"] ? readonly BreadcrumbItem[] : readonly BreadcrumbItem[] | Defaults["items"];
    };
};
export declare const VBreadcrumbs: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divider: string;
        density: import("../../composables/density.js").Density;
        tile: boolean;
    } & {
        color?: string | undefined;
        class?: any;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:title" | "v-slot:item" | "v-slot:divider">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divider: string;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        prepend: () => import("vue").VNode[];
        title: (arg: {
            item: InternalBreadcrumbItem;
            index: number;
        }) => import("vue").VNode[];
        divider: (arg: {
            item: BreadcrumbItem;
            index: number;
        }) => import("vue").VNode[];
        item: (arg: {
            item: InternalBreadcrumbItem;
            index: number;
        }) => import("vue").VNode[];
        default: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divider: string;
        density: import("../../composables/density.js").Density;
        tile: boolean;
    } & {
        color?: string | undefined;
        class?: any;
        icon?: IconValue | undefined;
        rounded?: string | number | boolean | undefined;
        bgColor?: string | undefined;
        activeColor?: string | undefined;
        activeClass?: string | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        divider: string;
        density: import("../../composables/density.js").Density;
        rounded: string | number | boolean;
        tile: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divider: string;
    density: import("../../composables/density.js").Density;
    tile: boolean;
} & {
    color?: string | undefined;
    class?: any;
    icon?: IconValue | undefined;
    rounded?: string | number | boolean | undefined;
    bgColor?: string | undefined;
    activeColor?: string | undefined;
    activeClass?: string | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "items" | "v-slot:prepend" | "v-slot:title" | "v-slot:item" | "v-slot:divider">, string, {
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    divider: string;
    density: import("../../composables/density.js").Density;
    rounded: string | number | boolean;
    tile: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    prepend: () => import("vue").VNode[];
    title: (arg: {
        item: InternalBreadcrumbItem;
        index: number;
    }) => import("vue").VNode[];
    divider: (arg: {
        item: BreadcrumbItem;
        index: number;
    }) => import("vue").VNode[];
    item: (arg: {
        item: InternalBreadcrumbItem;
        index: number;
    }) => import("vue").VNode[];
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T extends BreadcrumbItem>(props: {
    items?: T[];
}, slots: {
    prepend: never;
    title: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    divider: {
        item: T;
        index: number;
    };
    item: {
        item: InternalBreadcrumbItem;
        index: number;
    };
    default: never;
}) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: PropType<IconValue>;
    items: {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    tag: Omit<{
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: NonNullable<string | import("../../util/index.js").JSXComponent>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    tile: BooleanConstructor;
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
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: PropType<IconValue>;
    items: {
        type: PropType<readonly BreadcrumbItem[]>;
        default: () => never[];
    };
}>>;
export type VBreadcrumbs = InstanceType<typeof VBreadcrumbs>;
