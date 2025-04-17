import type { PropType } from 'vue';
import type { RippleDirectiveBinding } from "../../directives/ripple/index.js";
export type VSliderThumbSlots = {
    'thumb-label': {
        modelValue: number;
    };
};
export declare const makeVSliderThumbProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
    focused?: unknown;
    max?: unknown;
    min?: unknown;
    modelValue?: unknown;
    position?: unknown;
    ripple?: unknown;
    name?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
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
    focused: unknown extends Defaults["focused"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"]>;
        default: unknown extends Defaults["focused"] ? boolean : boolean | Defaults["focused"];
    };
    max: unknown extends Defaults["max"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["max"] ? number : number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? number : number | Defaults["max"];
    };
    min: unknown extends Defaults["min"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["min"] ? number : number | Defaults["min"]>;
        default: unknown extends Defaults["min"] ? number : number | Defaults["min"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    position: unknown extends Defaults["position"] ? {
        type: NumberConstructor;
        required: true;
    } : Omit<{
        type: NumberConstructor;
        required: true;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["position"] ? number : number | Defaults["position"]>;
        default: unknown extends Defaults["position"] ? number : number | Defaults["position"];
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
    name: unknown extends Defaults["name"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["name"] ? string : string | Defaults["name"]>;
        default: unknown extends Defaults["name"] ? string : string | Defaults["name"];
    };
};
export declare const VSliderThumb: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        max: number;
        min: number;
        position: number;
        style: import("vue").StyleValue;
        focused: boolean;
        modelValue: number;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        name?: string | undefined;
        class?: any;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (v: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        style: import("vue").StyleValue;
        focused: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }, true, {}, import("vue").SlotsType<Partial<{
        'thumb-label': (arg: {
            modelValue: number;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        max: number;
        min: number;
        position: number;
        style: import("vue").StyleValue;
        focused: boolean;
        modelValue: number;
        ripple: boolean | {
            class: string;
        } | undefined;
    } & {
        name?: string | undefined;
        class?: any;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            'thumb-label'?: ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            'thumb-label'?: false | ((arg: {
                modelValue: number;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:thumb-label"?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((v: number) => any) | undefined;
    }, {}, {}, {}, {}, {
        style: import("vue").StyleValue;
        focused: boolean;
        ripple: boolean | {
            class: string;
        } | undefined;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    max: number;
    min: number;
    position: number;
    style: import("vue").StyleValue;
    focused: boolean;
    modelValue: number;
    ripple: boolean | {
        class: string;
    } | undefined;
} & {
    name?: string | undefined;
    class?: any;
} & {
    $children?: {} | import("vue").VNodeChild | {
        'thumb-label'?: ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        'thumb-label'?: false | ((arg: {
            modelValue: number;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:thumb-label"?: false | ((arg: {
        modelValue: number;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((v: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (v: number) => true;
}, string, {
    style: import("vue").StyleValue;
    focused: boolean;
    ripple: boolean | {
        class: string;
    } | undefined;
}, {}, string, import("vue").SlotsType<Partial<{
    'thumb-label': (arg: {
        modelValue: number;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    position: {
        type: NumberConstructor;
        required: true;
    };
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    name: StringConstructor;
}, import("vue").ExtractPropTypes<{
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    focused: BooleanConstructor;
    max: {
        type: NumberConstructor;
        required: true;
    };
    min: {
        type: NumberConstructor;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    position: {
        type: NumberConstructor;
        required: true;
    };
    ripple: {
        type: PropType<RippleDirectiveBinding["value"]>;
        default: boolean;
    };
    name: StringConstructor;
}>>;
export type VSliderThumb = InstanceType<typeof VSliderThumb>;
