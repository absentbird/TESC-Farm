import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { VWindowSlots } from "../VWindow/VWindow.js";
import type { GroupProvide } from "../../composables/group.js";
import type { GenericProps } from "../../util/index.js";
export declare const makeVCarouselProps: <Defaults extends {
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
    color?: unknown;
    cycle?: unknown;
    delimiterIcon?: unknown;
    height?: unknown;
    hideDelimiters?: unknown;
    hideDelimiterBackground?: unknown;
    interval?: unknown;
    progress?: unknown;
    verticalDelimiters?: unknown;
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
    continuous: unknown extends Defaults["continuous"] ? {
        type: PropType<boolean>;
        default: boolean;
    } : Omit<{
        type: PropType<boolean>;
        default: boolean;
    }, "type" | "default"> & {
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
    showArrows: unknown extends Defaults["showArrows"] ? Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    } : Omit<Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["showArrows"] ? string | boolean : string | boolean | Defaults["showArrows"]>;
        default: unknown extends Defaults["showArrows"] ? string | boolean : NonNullable<string | boolean> | Defaults["showArrows"];
    };
    touch: unknown extends Defaults["touch"] ? {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["touch"] ? boolean | import("../../directives/touch/index.js").TouchHandlers : boolean | import("../../directives/touch/index.js").TouchHandlers | Defaults["touch"]>;
        default: unknown extends Defaults["touch"] ? boolean | import("../../directives/touch/index.js").TouchHandlers : NonNullable<boolean | import("../../directives/touch/index.js").TouchHandlers> | Defaults["touch"];
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
    mandatory: unknown extends Defaults["mandatory"] ? Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    } : Omit<Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["mandatory"] ? boolean | "force" : boolean | "force" | Defaults["mandatory"]>;
        default: unknown extends Defaults["mandatory"] ? boolean | "force" : NonNullable<boolean | "force"> | Defaults["mandatory"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    cycle: unknown extends Defaults["cycle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["cycle"] ? boolean : boolean | Defaults["cycle"]>;
        default: unknown extends Defaults["cycle"] ? boolean : boolean | Defaults["cycle"];
    };
    delimiterIcon: unknown extends Defaults["delimiterIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["delimiterIcon"] ? IconValue : IconValue | Defaults["delimiterIcon"]>;
        default: unknown extends Defaults["delimiterIcon"] ? IconValue : NonNullable<IconValue> | Defaults["delimiterIcon"];
    };
    height: unknown extends Defaults["height"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    hideDelimiters: unknown extends Defaults["hideDelimiters"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideDelimiters"] ? boolean : boolean | Defaults["hideDelimiters"]>;
        default: unknown extends Defaults["hideDelimiters"] ? boolean : boolean | Defaults["hideDelimiters"];
    };
    hideDelimiterBackground: unknown extends Defaults["hideDelimiterBackground"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideDelimiterBackground"] ? boolean : boolean | Defaults["hideDelimiterBackground"]>;
        default: unknown extends Defaults["hideDelimiterBackground"] ? boolean : boolean | Defaults["hideDelimiterBackground"];
    };
    interval: unknown extends Defaults["interval"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["interval"] ? string | number : string | number | Defaults["interval"]>;
        default: unknown extends Defaults["interval"] ? string | number : NonNullable<string | number> | Defaults["interval"];
    };
    progress: unknown extends Defaults["progress"] ? (StringConstructor | BooleanConstructor)[] : {
        type: PropType<unknown extends Defaults["progress"] ? string | boolean : string | boolean | Defaults["progress"]>;
        default: unknown extends Defaults["progress"] ? string | boolean : NonNullable<string | boolean> | Defaults["progress"];
    };
    verticalDelimiters: unknown extends Defaults["verticalDelimiters"] ? PropType<boolean | "left" | "right"> : {
        type: PropType<unknown extends Defaults["verticalDelimiters"] ? boolean | "left" | "right" : boolean | "left" | "right" | Defaults["verticalDelimiters"]>;
        default: unknown extends Defaults["verticalDelimiters"] ? boolean | "left" | "right" : Defaults["verticalDelimiters"] | NonNullable<boolean | "left" | "right">;
    };
};
type VCarouselSlots = VWindowSlots & {
    item: {
        props: Record<string, any>;
        item: {
            id: string;
            value: unknown;
            disabled: boolean | undefined;
        };
    };
};
export declare const VCarousel: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        reverse: boolean;
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        cycle: boolean;
        mandatory: boolean | "force";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: string | boolean;
        continuous: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    } & {
        progress?: string | boolean | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
        verticalDelimiters?: boolean | "left" | "right" | undefined;
    } & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:next" | "v-slot:prev" | "v-slot:item">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        reverse: boolean;
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        cycle: boolean;
        mandatory: boolean | "force";
        touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: string | boolean;
        continuous: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode[];
        additional: (arg: {
            group: GroupProvide;
        }) => import("vue").VNode[];
        prev: (arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                'aria-label': string;
            };
        }) => import("vue").VNode[];
        next: (arg: {
            props: {
                icon: IconValue;
                class: string;
                onClick: () => void;
                'aria-label': string;
            };
        }) => import("vue").VNode[];
        item: (arg: {
            props: Record<string, any>;
            item: {
                id: string;
                value: unknown;
                disabled: boolean | undefined;
            };
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
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        cycle: boolean;
        mandatory: boolean | "force";
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: string | boolean;
        continuous: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    } & {
        progress?: string | boolean | undefined;
        color?: string | undefined;
        class?: any;
        theme?: string | undefined;
        touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
        verticalDelimiters?: boolean | "left" | "right" | undefined;
    } & {}, {}, {}, {}, {}, {
        reverse: boolean;
        interval: string | number;
        height: string | number;
        direction: "horizontal" | "vertical";
        style: import("vue").StyleValue;
        disabled: boolean;
        tag: string | import("../../util/index.js").JSXComponent;
        cycle: boolean;
        mandatory: boolean | "force";
        touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
        selectedClass: string;
        nextIcon: IconValue;
        prevIcon: IconValue;
        showArrows: string | boolean;
        continuous: boolean;
        delimiterIcon: IconValue;
        hideDelimiters: boolean;
        hideDelimiterBackground: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    cycle: boolean;
    mandatory: boolean | "force";
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: string | boolean;
    continuous: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
} & {
    progress?: string | boolean | undefined;
    color?: string | undefined;
    class?: any;
    theme?: string | undefined;
    touch?: boolean | import("../../directives/touch/index.js").TouchHandlers | undefined;
    verticalDelimiters?: boolean | "left" | "right" | undefined;
} & {}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:additional" | "v-slot:next" | "v-slot:prev" | "v-slot:item">, string, {
    reverse: boolean;
    interval: string | number;
    height: string | number;
    direction: "horizontal" | "vertical";
    style: import("vue").StyleValue;
    disabled: boolean;
    tag: string | import("../../util/index.js").JSXComponent;
    cycle: boolean;
    mandatory: boolean | "force";
    touch: boolean | import("../../directives/touch/index.js").TouchHandlers;
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    showArrows: string | boolean;
    continuous: boolean;
    delimiterIcon: IconValue;
    hideDelimiters: boolean;
    hideDelimiterBackground: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode[];
    additional: (arg: {
        group: GroupProvide;
    }) => import("vue").VNode[];
    prev: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            'aria-label': string;
        };
    }) => import("vue").VNode[];
    next: (arg: {
        props: {
            icon: IconValue;
            class: string;
            onClick: () => void;
            'aria-label': string;
        };
    }) => import("vue").VNode[];
    item: (arg: {
        props: Record<string, any>;
        item: {
            id: string;
            value: unknown;
            disabled: boolean | undefined;
        };
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
}, slots: VCarouselSlots) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
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
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    touch: {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
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
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
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
    continuous: {
        type: PropType<boolean>;
        default: boolean;
    };
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: Omit<{
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean>;
        default: NonNullable<string | boolean>;
    };
    touch: {
        type: PropType<boolean | import("../../directives/touch/index.js").TouchHandlers>;
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
    mandatory: Omit<{
        type: PropType<boolean | "force">;
        default: "force";
    }, "type" | "default"> & {
        type: PropType<boolean | "force">;
        default: NonNullable<boolean | "force">;
    };
    color: StringConstructor;
    cycle: BooleanConstructor;
    delimiterIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    hideDelimiters: BooleanConstructor;
    hideDelimiterBackground: BooleanConstructor;
    interval: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
        validator: (value: string | number) => boolean;
    };
    progress: (StringConstructor | BooleanConstructor)[];
    verticalDelimiters: PropType<boolean | "left" | "right">;
}>>;
export type VCarousel = InstanceType<typeof VCarousel>;

