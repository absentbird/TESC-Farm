import type { ComputedRef, InjectionKey, PropType, Ref } from 'vue';
import type { GroupItemProvide, GroupProvide } from "../../composables/group.js";
import type { IconValue } from "../../composables/icons.js";
import type { TouchHandlers } from "../../directives/touch/index.js";
import type { GenericProps } from "../../util/index.js";
export type VWindowSlots = {
    default: {
        group: GroupProvide;
    };
    additional: {
        group: GroupProvide;
    };
    prev: {
        props: ControlProps;
    };
    next: {
        props: ControlProps;
    };
};
type WindowProvide = {
    transition: ComputedRef<undefined | string>;
    transitionCount: Ref<number>;
    transitionHeight: Ref<undefined | string>;
    isReversed: Ref<boolean>;
    rootRef: Ref<HTMLElement | undefined>;
};
type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    'aria-label': string;
};
export declare const VWindowSymbol: InjectionKey<WindowProvide>;
export declare const VWindowGroupSymbol: InjectionKey<GroupItemProvide>;
export declare const makeVWindowProps: <Defaults extends {
    theme?: unknown;
    tag?: unknown;
    class?: unknown;
    style?: unknown;
    continuous?: unknown;
    nextIcon?: unknown;
    prevIcon?: unknown;
    reverse?: unknown;
    showArrows?: unknown;
    touch?: unknown;
    direction?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    selectedClass?: unknown;
    mandatory?: unknown;
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
    continuous: unknown extends Defaults["continuous"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["continuous"] ? boolean : boolean | Defaults["continuous"]>;
        default: unknown extends Defaults["continuous"] ? boolean : boolean | Defaults["continuous"];
    };
    nextIcon: unknown extends Defaults["nextIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextIcon"] ? IconValue : IconValue | Defaults["nextIcon"]>;
        default: unknown extends Defaults["nextIcon"] ? IconValue : NonNullable<IconValue> | Defaults["nextIcon"];
    };
    prevIcon: unknown extends Defaults["prevIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevIcon"] ? IconValue : IconValue | Defaults["prevIcon"]>;
        default: unknown extends Defaults["prevIcon"] ? IconValue : NonNullable<IconValue> | Defaults["prevIcon"];
    };
    reverse: unknown extends Defaults["reverse"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"]>;
        default: unknown extends Defaults["reverse"] ? boolean : boolean | Defaults["reverse"];
    };
    showArrows: unknown extends Defaults["showArrows"] ? {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : NonNullable<string | boolean> | Defaults["showArrows"];
    };
    touch: unknown extends Defaults["touch"] ? {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["touch"] ? boolean | TouchHandlers : boolean | TouchHandlers | Defaults["touch"]>;
        default: unknown extends Defaults["touch"] ? boolean | TouchHandlers : Defaults["touch"] | NonNullable<boolean | TouchHandlers>;
    };
    direction: unknown extends Defaults["direction"] ? {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    } : Omit<{
        type: PropType<"horizontal" | "vertical">;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["direction"] ? "horizontal" | "vertical" : "horizontal" | "vertical" | Defaults["direction"]>;
        default: unknown extends Defaults["direction"] ? "horizontal" | "vertical" : NonNullable<"horizontal" | "vertical"> | Defaults["direction"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    selectedClass: unknown extends Defaults["selectedClass"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"]>;
        default: unknown extends Defaults["selectedClass"] ? string : string | Defaults["selectedClass"];
    };
    mandatory: unknown extends Defaults["mandatory"] ? {
        type: PropType<boolean | "force">;
        default: "force";
    } : Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean | "force" : boolean | "force" | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean | "force" : NonNullable<boolean | "force"> | Defaults["mandatory"];
    };
};
export declare const VWindow: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        touch?: boolean | TouchHandlers | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        group: GroupProvide;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:next" | "v-slot:prev">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        touch: boolean | TouchHandlers;
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode[];
        additional: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode[];
        prev: (arg: {
            props: ControlProps;
        }) => import("vue").VNode[];
        next: (arg: {
            props: ControlProps;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    } & {
        class?: any;
        theme?: string | undefined;
        touch?: boolean | TouchHandlers | undefined;
        showArrows?: string | boolean | undefined;
    } & {}, {
        group: GroupProvide;
    }, {}, {}, {}, {
        reverse: boolean;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        mandatory: boolean | "force";
        touch: boolean | TouchHandlers;
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        continuous: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    continuous: boolean;
} & {
    class?: any;
    theme?: string | undefined;
    touch?: boolean | TouchHandlers | undefined;
    showArrows?: string | boolean | undefined;
} & {}, {
    group: GroupProvide;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:next" | "v-slot:prev">, string, {
    reverse: boolean;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    mandatory: boolean | "force";
    touch: boolean | TouchHandlers;
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    continuous: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode[];
    additional: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode[];
    prev: (arg: {
        props: ControlProps;
    }) => import("vue").VNode[];
    next: (arg: {
        props: ControlProps;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
}, slots: VWindowSlots) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}, import("vue").ExtractPropTypes<{
    theme: StringConstructor;
    tag: {
        type: PropType<string | import("../../util/index.js").JSXComponent>;
        default: string;
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        type: PropType<boolean | "force">;
        default: "force";
    };
}>>;
export type VWindow = InstanceType<typeof VWindow>;

