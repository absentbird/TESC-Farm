import type { PropType } from 'vue';
export type VDatePickerMonthsSlots = {
    month: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    };
};
export declare const makeVDatePickerMonthsProps: <Defaults extends {
    color?: unknown;
    height?: unknown;
    min?: unknown;
    max?: unknown;
    modelValue?: unknown;
    year?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    height: unknown extends Defaults["height"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["height"] ? string | number : string | number | Defaults["height"]>;
        default: unknown extends Defaults["height"] ? string | number : NonNullable<string | number> | Defaults["height"];
    };
    min: unknown extends Defaults["min"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["min"] ? unknown : unknown>;
        default: unknown extends Defaults["min"] ? unknown : {} | Defaults["min"];
    };
    max: unknown extends Defaults["max"] ? PropType<unknown> : {
        type: PropType<unknown extends Defaults["max"] ? unknown : unknown>;
        default: unknown extends Defaults["max"] ? unknown : {} | Defaults["max"];
    };
    modelValue: unknown extends Defaults["modelValue"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"]>;
        default: unknown extends Defaults["modelValue"] ? number : number | Defaults["modelValue"];
    };
    year: unknown extends Defaults["year"] ? NumberConstructor : {
        type: PropType<unknown extends Defaults["year"] ? number : number | Defaults["year"]>;
        default: unknown extends Defaults["year"] ? number : number | Defaults["year"];
    };
};
export declare const VDatePickerMonths: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
        max?: unknown;
        height?: string | number | undefined;
        min?: unknown;
        color?: string | undefined;
        year?: number | undefined;
        modelValue?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            month?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:month"?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (date: any) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        month: (arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {} & {
        max?: unknown;
        height?: string | number | undefined;
        min?: unknown;
        color?: string | undefined;
        year?: number | undefined;
        modelValue?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            month?: ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            month?: false | ((arg: {
                month: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:month"?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((date: any) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{} & {
    max?: unknown;
    height?: string | number | undefined;
    min?: unknown;
    color?: string | undefined;
    year?: number | undefined;
    modelValue?: number | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        month?: ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        month?: false | ((arg: {
            month: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:month"?: false | ((arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((date: any) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (date: any) => true;
}, string, {}, {}, string, import("vue").SlotsType<Partial<{
    month: (arg: {
        month: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
    year: NumberConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
    year: NumberConstructor;
}>>;
export type VDatePickerMonths = InstanceType<typeof VDatePickerMonths>;
