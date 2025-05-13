import { IconValue } from "../../composables/icons.js";
import type { PropType } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
interface ExpansionPanelTitleSlot {
    collapseIcon: IconValue;
    disabled: boolean | undefined;
    expanded: boolean;
    expandIcon: IconValue;
    readonly: boolean;
}
export type VExpansionPanelTitleSlots = {
    default: ExpansionPanelTitleSlot;
    actions: ExpansionPanelTitleSlot;
};
export declare const makeVExpansionPanelTitleProps: <Defaults extends {
    height?: unknown;
    maxHeight?: unknown;
    maxWidth?: unknown;
    minHeight?: unknown;
    minWidth?: unknown;
    width?: unknown;
    class?: unknown;
    style?: unknown;
    color?: unknown;
    expandIcon?: unknown;
    collapseIcon?: unknown;
    hideActions?: unknown;
    focusable?: unknown;
    static?: unknown;
    ripple?: unknown;
    readonly?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    expandIcon: unknown extends Defaults["expandIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["expandIcon"] ? IconValue : IconValue | Defaults["expandIcon"]>;
        default: unknown extends Defaults["expandIcon"] ? IconValue : NonNullable<IconValue> | Defaults["expandIcon"];
    };
    collapseIcon: unknown extends Defaults["collapseIcon"] ? {
        type: PropType<IconValue>;
        default: string;
    } : Omit<{
        type: PropType<IconValue>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["collapseIcon"] ? IconValue : IconValue | Defaults["collapseIcon"]>;
        default: unknown extends Defaults["collapseIcon"] ? IconValue : NonNullable<IconValue> | Defaults["collapseIcon"];
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
    focusable: unknown extends Defaults["focusable"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"]>;
        default: unknown extends Defaults["focusable"] ? boolean : boolean | Defaults["focusable"];
    };
    static: unknown extends Defaults["static"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"]>;
        default: unknown extends Defaults["static"] ? boolean : boolean | Defaults["static"];
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
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
};
export declare const VExpansionPanelTitle: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        style: import("vue").StyleValue;
        readonly: boolean;
        static: boolean;
        focusable: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        hideActions: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        readonly: boolean;
        static: boolean;
        focusable: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        hideActions: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: ExpansionPanelTitleSlot) => import("vue").VNode[];
        actions: (arg: ExpansionPanelTitleSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        style: import("vue").StyleValue;
        readonly: boolean;
        static: boolean;
        focusable: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        hideActions: boolean;
    } & {
        height?: string | number | undefined;
        width?: string | number | undefined;
        color?: string | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
            actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        readonly: boolean;
        static: boolean;
        focusable: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
        collapseIcon: IconValue;
        expandIcon: IconValue;
        hideActions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    style: import("vue").StyleValue;
    readonly: boolean;
    static: boolean;
    focusable: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    hideActions: boolean;
} & {
    height?: string | number | undefined;
    width?: string | number | undefined;
    color?: string | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        actions?: ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    } | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
        actions?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
    "v-slot:actions"?: false | ((arg: ExpansionPanelTitleSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    style: import("vue").StyleValue;
    readonly: boolean;
    static: boolean;
    focusable: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    hideActions: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: ExpansionPanelTitleSlot) => import("vue").VNode[];
    actions: (arg: ExpansionPanelTitleSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
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
    color: StringConstructor;
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    readonly: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
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
    color: StringConstructor;
    expandIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    collapseIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    hideActions: BooleanConstructor;
    focusable: BooleanConstructor;
    static: BooleanConstructor;
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    readonly: BooleanConstructor;
}>>;
export type VExpansionPanelTitle = InstanceType<typeof VExpansionPanelTitle>;

