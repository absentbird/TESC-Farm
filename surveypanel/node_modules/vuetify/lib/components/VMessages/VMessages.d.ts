import type { Component, PropType } from 'vue';
export type VMessageSlot = {
    message: string;
};
export type VMessagesSlots = {
    message: VMessageSlot;
};
export declare const makeVMessagesProps: <Defaults extends {
    transition?: unknown;
    class?: unknown;
    style?: unknown;
    active?: unknown;
    color?: unknown;
    messages?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
    } : Omit<Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } : string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        } : Defaults["transition"] | NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
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
    active: unknown extends Defaults["active"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"]>;
        default: unknown extends Defaults["active"] ? boolean : boolean | Defaults["active"];
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    messages: unknown extends Defaults["messages"] ? {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    } : Omit<{
        type: PropType<string | readonly string[]>;
        default: () => never[];
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["messages"] ? string | readonly string[] : string | readonly string[] | Defaults["messages"]>;
        default: unknown extends Defaults["messages"] ? string | readonly string[] : Defaults["messages"] | NonNullable<string | readonly string[]>;
    };
};
export declare const VMessages: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
        style: import("vue").StyleValue;
        messages: string | readonly string[];
    } & {
        color?: string | undefined;
        class?: any;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
        style: import("vue").StyleValue;
        messages: string | readonly string[];
    }, true, {}, import("vue").SlotsType<Partial<{
        message: (arg: VMessageSlot) => import("vue").VNode[];
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
            leaveAbsolute: boolean;
            group: boolean;
        };
        style: import("vue").StyleValue;
        messages: string | readonly string[];
    } & {
        color?: string | undefined;
        class?: any;
    } & {
        $children?: {} | import("vue").VNodeChild | {
            message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        };
        'v-slots'?: {
            message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        active: boolean;
        transition: string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
        style: import("vue").StyleValue;
        messages: string | readonly string[];
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
        leaveAbsolute: boolean;
        group: boolean;
    };
    style: import("vue").StyleValue;
    messages: string | readonly string[];
} & {
    color?: string | undefined;
    class?: any;
} & {
    $children?: {} | import("vue").VNodeChild | {
        message?: ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    };
    'v-slots'?: {
        message?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:message"?: false | ((arg: VMessageSlot) => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    active: boolean;
    transition: string | boolean | (import("vue").TransitionProps & {
        component?: Component;
    }) | {
        component: Component;
        leaveAbsolute: boolean;
        group: boolean;
    };
    style: import("vue").StyleValue;
    messages: string | readonly string[];
}, {}, string, import("vue").SlotsType<Partial<{
    message: (arg: VMessageSlot) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}, import("vue").ExtractPropTypes<{
    transition: Omit<{
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        }) | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        }>;
        default: NonNullable<string | boolean | (import("vue").TransitionProps & {
            component?: Component;
        })> | {
            component: Component;
            leaveAbsolute: boolean;
            group: boolean;
        };
    };
    class: PropType<import("../../composables/component.js").ClassValue>;
    style: {
        type: PropType<import("vue").StyleValue>;
        default: null;
    };
    active: BooleanConstructor;
    color: StringConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
}>>;
export type VMessages = InstanceType<typeof VMessages>;
