import type { GenericProps, TemplateRef } from "../../util/index.js";
export declare const makeVVirtualScrollItemProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    renderless?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    renderless: unknown extends Defaults["renderless"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"]>;
        default: unknown extends Defaults["renderless"] ? boolean : boolean | Defaults["renderless"];
    };
};
export declare const VVirtualScrollItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
    } & {
        class?: any;
    } & {
        "onUpdate:height"?: ((height: number) => any) | undefined;
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:height': (height: number) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "renderless">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            itemRef: TemplateRef;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
    } & {
        class?: any;
    } & {
        "onUpdate:height"?: ((height: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
} & {
    class?: any;
} & {
    "onUpdate:height"?: ((height: number) => any) | undefined;
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:height': (height: number) => true;
}, "$children" | "v-slots" | "v-slot:default" | "renderless">, string, {
    style: import("vue").StyleValue;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        itemRef: TemplateRef;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <Renderless extends boolean = false>(props: {
    renderless?: Renderless;
}, slots: {
    default: Renderless extends true ? {
        itemRef: TemplateRef;
    } : never;
}) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    renderless: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    renderless: BooleanConstructor;
}>>;
