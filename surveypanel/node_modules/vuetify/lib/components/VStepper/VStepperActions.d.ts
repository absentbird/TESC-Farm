import type { PropType } from 'vue';
export type VStepperActionsSlots = {
    prev: {
        props: {
            onClick: () => void;
        };
    };
    next: {
        props: {
            onClick: () => void;
        };
    };
};
export declare const makeVStepperActionsProps: <Defaults extends {
    color?: unknown;
    disabled?: unknown;
    prevText?: unknown;
    nextText?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    } : Omit<{
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | "next" | "prev" : boolean | "next" | "prev" | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean | "next" | "prev" : Defaults["disabled"] | NonNullable<boolean | "next" | "prev">;
    };
    prevText: unknown extends Defaults["prevText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"]>;
        default: unknown extends Defaults["prevText"] ? string : string | Defaults["prevText"];
    };
    nextText: unknown extends Defaults["nextText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"]>;
        default: unknown extends Defaults["nextText"] ? string : string | Defaults["nextText"];
    };
};
export declare const VStepperActions: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'click:prev': () => true;
        'click:next': () => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    }, true, {}, import("vue").SlotsType<Partial<{
        prev: (arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNode[];
        next: (arg: {
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
    }, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    } & {
        color?: string | undefined;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            prev?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            prev?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
            next?: false | ((arg: {
                props: {
                    onClick: () => void;
                };
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prev"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        "v-slot:next"?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onClick:prev"?: (() => any) | undefined;
        "onClick:next"?: (() => any) | undefined;
    }, {}, {}, {}, {}, {
        disabled: boolean | "next" | "prev";
        prevText: string;
        nextText: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
} & {
    color?: string | undefined;
} & {
    $children?: {} | import("vue").VNodeChild | {
        prev?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        next?: ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        prev?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
        next?: false | ((arg: {
            props: {
                onClick: () => void;
            };
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:prev"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
    "v-slot:next"?: false | ((arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onClick:prev"?: (() => any) | undefined;
    "onClick:next"?: (() => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'click:prev': () => true;
    'click:next': () => true;
}, string, {
    disabled: boolean | "next" | "prev";
    prevText: string;
    nextText: string;
}, {}, string, import("vue").SlotsType<Partial<{
    prev: (arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode[];
    next: (arg: {
        props: {
            onClick: () => void;
        };
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}, import("vue").ExtractPropTypes<{
    color: StringConstructor;
    disabled: {
        type: PropType<boolean | "next" | "prev">;
        default: boolean;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
}>>;
export type VStepperActions = InstanceType<typeof VStepperActions>;
