import type { PropType } from 'vue';
export type VDatePickerYearsSlots = {
    year: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: 'flat' | 'text';
            onClick: () => void;
        };
    };
};
export declare const makeVDatePickerYearsProps: <Defaults extends {
    color?: unknown;
    height?: unknown;
    min?: unknown;
    max?: unknown;
    modelValue?: unknown;
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
};
export declare const VDatePickerYears: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{} & {
        max?: unknown;
        height?: string | number | undefined;
        min?: unknown;
        color?: string | undefined;
        modelValue?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            year?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:year"?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((year: number) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'update:modelValue': (year: number) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {}, true, {}, import("vue").SlotsType<Partial<{
        year: (arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
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
        modelValue?: number | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            year?: ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            year?: false | ((arg: {
                year: {
                    text: string;
                    value: number;
                };
                i: number;
                props: {
                    active: boolean;
                    color?: string;
                    rounded: boolean;
                    text: string;
                    variant: "flat" | "text";
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:year"?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onUpdate:modelValue"?: ((year: number) => any) | undefined;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{} & {
    max?: unknown;
    height?: string | number | undefined;
    min?: unknown;
    color?: string | undefined;
    modelValue?: number | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        year?: ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        year?: false | ((arg: {
            year: {
                text: string;
                value: number;
            };
            i: number;
            props: {
                active: boolean;
                color?: string;
                rounded: boolean;
                text: string;
                variant: "flat" | "text";
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:year"?: false | ((arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: "flat" | "text";
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onUpdate:modelValue"?: ((year: number) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (year: number) => true;
}, string, {}, {}, string, import("vue").SlotsType<Partial<{
    year: (arg: {
        year: {
            text: string;
            value: number;
        };
        i: number;
        props: {
            active: boolean;
            color?: string;
            rounded: boolean;
            text: string;
            variant: "flat" | "text";
            onClick: () => void;
        };
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    height: (StringConstructor | NumberConstructor)[];
    min: PropType<unknown>;
    max: PropType<unknown>;
    modelValue: NumberConstructor;
}>>;
export type VDatePickerYears = InstanceType<typeof VDatePickerYears>;
