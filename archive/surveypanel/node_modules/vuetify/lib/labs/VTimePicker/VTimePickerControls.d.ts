import type { PropType } from 'vue';
import type { VTimePickerViewMode } from './shared.js';
type Period = 'am' | 'pm';
export declare const makeVTimePickerControlsProps: <Defaults extends {
    ampm?: unknown;
    ampmInTitle?: unknown;
    ampmReadonly?: unknown;
    color?: unknown;
    disabled?: unknown;
    hour?: unknown;
    minute?: unknown;
    second?: unknown;
    period?: unknown;
    readonly?: unknown;
    useSeconds?: unknown;
    value?: unknown;
    viewMode?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    ampm: unknown extends Defaults["ampm"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"]>;
        default: unknown extends Defaults["ampm"] ? boolean : boolean | Defaults["ampm"];
    };
    ampmInTitle: unknown extends Defaults["ampmInTitle"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampmInTitle"] ? boolean : boolean | Defaults["ampmInTitle"]>;
        default: unknown extends Defaults["ampmInTitle"] ? boolean : boolean | Defaults["ampmInTitle"];
    };
    ampmReadonly: unknown extends Defaults["ampmReadonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["ampmReadonly"] ? boolean : boolean | Defaults["ampmReadonly"]>;
        default: unknown extends Defaults["ampmReadonly"] ? boolean : boolean | Defaults["ampmReadonly"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    hour: unknown extends Defaults["hour"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["hour"] ? number : number | Defaults["hour"]>;
        default: unknown extends Defaults["hour"] ? number : number | Defaults["hour"];
    };
    minute: unknown extends Defaults["minute"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["minute"] ? number : number | Defaults["minute"]>;
        default: unknown extends Defaults["minute"] ? number : number | Defaults["minute"];
    };
    second: unknown extends Defaults["second"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["second"] ? number : number | Defaults["second"]>;
        default: unknown extends Defaults["second"] ? number : number | Defaults["second"];
    };
    period: unknown extends Defaults["period"] ? PropType<Period> : {
        type: PropType<unknown extends Defaults["period"] ? Period : Period | Defaults["period"]>;
        default: unknown extends Defaults["period"] ? Period : Defaults["period"] | NonNullable<Period>;
    };
    readonly: unknown extends Defaults["readonly"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"]>;
        default: unknown extends Defaults["readonly"] ? boolean : boolean | Defaults["readonly"];
    };
    useSeconds: unknown extends Defaults["useSeconds"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"]>;
        default: unknown extends Defaults["useSeconds"] ? boolean : boolean | Defaults["useSeconds"];
    };
    value: unknown extends Defaults["value"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["value"] ? number : number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? number : number | Defaults["value"];
    };
    viewMode: unknown extends Defaults["viewMode"] ? PropType<VTimePickerViewMode> : {
        type: PropType<unknown extends Defaults["viewMode"] ? VTimePickerViewMode : VTimePickerViewMode | Defaults["viewMode"]>;
        default: unknown extends Defaults["viewMode"] ? VTimePickerViewMode : Defaults["viewMode"] | NonNullable<VTimePickerViewMode>;
    };
};
export declare const VTimePickerControls: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmInTitle: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    } & {
        color?: string | undefined;
        value?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        viewMode?: VTimePickerViewMode | undefined;
        period?: Period | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
        "onUpdate:period"?: ((data: Period) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:period': (data: Period) => true;
        'update:viewMode': (data: VTimePickerViewMode) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmInTitle: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: () => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmInTitle: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    } & {
        color?: string | undefined;
        value?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        viewMode?: VTimePickerViewMode | undefined;
        period?: Period | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
        "onUpdate:period"?: ((data: Period) => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean;
        readonly: boolean;
        ampm: boolean;
        ampmInTitle: boolean;
        ampmReadonly: boolean;
        useSeconds: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
    readonly: boolean;
    ampm: boolean;
    ampmInTitle: boolean;
    ampmReadonly: boolean;
    useSeconds: boolean;
} & {
    color?: string | undefined;
    value?: number | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
    second?: number | undefined;
    viewMode?: VTimePickerViewMode | undefined;
    period?: Period | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:viewMode"?: ((data: VTimePickerViewMode) => any) | undefined;
    "onUpdate:period"?: ((data: Period) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:period': (data: Period) => true;
    'update:viewMode': (data: VTimePickerViewMode) => true;
}, string, {
    disabled: boolean;
    readonly: boolean;
    ampm: boolean;
    ampmInTitle: boolean;
    ampmReadonly: boolean;
    useSeconds: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    ampm: BooleanConstructor;
    ampmInTitle: BooleanConstructor;
    ampmReadonly: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}, import("vue").ExtractPropTypes<{
    ampm: BooleanConstructor;
    ampmInTitle: BooleanConstructor;
    ampmReadonly: BooleanConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    hour: NumberConstructor;
    minute: NumberConstructor;
    second: NumberConstructor;
    period: PropType<Period>;
    readonly: BooleanConstructor;
    useSeconds: BooleanConstructor;
    value: NumberConstructor;
    viewMode: PropType<VTimePickerViewMode>;
}>>;
export type VTimePickerControls = InstanceType<typeof VTimePickerControls>;

