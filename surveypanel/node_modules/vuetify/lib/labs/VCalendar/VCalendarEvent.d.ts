export declare const makeVCalendarEventProps: <Defaults extends {
    allDay?: unknown;
    day?: unknown;
    event?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    allDay: unknown extends Defaults["allDay"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["allDay"] ? boolean : boolean | Defaults["allDay"]>;
        default: unknown extends Defaults["allDay"] ? boolean : boolean | Defaults["allDay"];
    };
    day: unknown extends Defaults["day"] ? ObjectConstructor : {
        type: import("vue").PropType<unknown extends Defaults["day"] ? Record<string, any> : Record<string, any> | Defaults["day"]>;
        default: unknown extends Defaults["day"] ? Record<string, any> : Record<string, any> | Defaults["day"];
    };
    event: unknown extends Defaults["event"] ? ObjectConstructor : {
        type: import("vue").PropType<unknown extends Defaults["event"] ? Record<string, any> : Record<string, any> | Defaults["event"]>;
        default: unknown extends Defaults["event"] ? Record<string, any> : Record<string, any> | Defaults["event"];
    };
};
export declare const VCalendarEvent: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        allDay: boolean;
    } & {
        event?: Record<string, any> | undefined;
        day?: Record<string, any> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        allDay: boolean;
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
        allDay: boolean;
    } & {
        event?: Record<string, any> | undefined;
        day?: Record<string, any> | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: (() => import("vue").VNodeChild) | undefined;
        } | (() => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | (() => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
    }, {}, {}, {}, {}, {
        allDay: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    allDay: boolean;
} & {
    event?: Record<string, any> | undefined;
    day?: Record<string, any> | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: (() => import("vue").VNodeChild) | undefined;
    } | (() => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | (() => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | (() => import("vue").VNodeChild) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
    allDay: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: () => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    allDay: BooleanConstructor;
    day: ObjectConstructor;
    event: ObjectConstructor;
}, import("vue").ExtractPropTypes<{
    allDay: BooleanConstructor;
    day: ObjectConstructor;
    event: ObjectConstructor;
}>>;
export type VCalendarEvent = InstanceType<typeof VCalendarEvent>;
