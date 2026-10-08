import type { Component } from 'vue';
export declare const makeVCounterProps: <Defaults extends {
    transition?: unknown;
    class?: unknown;
    style?: unknown;
    active?: unknown;
    disabled?: unknown;
    max?: unknown;
    value?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
        };
    } : Omit<Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
        };
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        } : string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        } | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        } : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        }>;
    };
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
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    disabled: unknown extends Defaults["disabled"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean : boolean | Defaults["disabled"];
    };
    max: unknown extends Defaults["max"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["max"] ? string | number : string | number | Defaults["max"]>;
        default: unknown extends Defaults["max"] ? string | number : NonNullable<string | number> | Defaults["max"];
    };
    value: unknown extends Defaults["value"] ? {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["value"] ? string | number : string | number | Defaults["value"]>;
        default: unknown extends Defaults["value"] ? string | number : NonNullable<string | number> | Defaults["value"];
    };
};
export type VCounterSlot = {
    counter: string;
    max: string | number | undefined;
    value: string | number | undefined;
};
export declare const VCounter: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        };
        value: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
    } & {
        max?: string | number | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | ((arg: VCounterSlot) => import("vue").VNodeChild) | {
            default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        };
        value: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: VCounterSlot) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        };
        value: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
    } & {
        max?: string | number | undefined;
        class?: any;
    } & {
        $children?: import("vue").VNodeChild | ((arg: VCounterSlot) => import("vue").VNodeChild) | {
            default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        };
        value: string | number;
        style: import("vue").StyleValue;
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    active: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: Component;
    }) | {
        component: Component;
    };
    value: string | number;
    style: import("vue").StyleValue;
    disabled: boolean;
} & {
    max?: string | number | undefined;
    class?: any;
} & {
    $children?: import("vue").VNodeChild | ((arg: VCounterSlot) => import("vue").VNodeChild) | {
        default?: ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: VCounterSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: Component;
    }) | {
        component: Component;
    };
    value: string | number;
    style: import("vue").StyleValue;
    disabled: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: VCounterSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
        };
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, import("vue").ExtractPropTypes<{
    transition: Omit<{
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
        };
    };
    class: import("vue").PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: import("vue").PropType<import("vue").StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    disabled: BooleanConstructor;
    max: (StringConstructor | NumberConstructor)[];
    value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>>;
export type VCounter = InstanceType<typeof VCounter>;
