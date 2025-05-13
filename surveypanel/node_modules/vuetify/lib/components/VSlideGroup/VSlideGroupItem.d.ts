import type { UnwrapRef } from 'vue';
import type { GroupItemProvide } from "../../composables/group.js";
export declare const VSlideGroupItem: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
                select: GroupItemProvide["select"];
                toggle: GroupItemProvide["toggle"];
                selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
                select: GroupItemProvide["select"];
                toggle: GroupItemProvide["toggle"];
                selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        'group:selected': (val: {
            value: boolean;
        }) => true;
    }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        disabled: boolean;
    } & {
        value?: any;
        selectedClass?: string | undefined;
    } & {
        $children?: import("vue").VNodeChild | {
            default?: ((arg: {
                isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
                select: GroupItemProvide["select"];
                toggle: GroupItemProvide["toggle"];
                selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
            }) => import("vue").VNodeChild) | undefined;
        } | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild);
        'v-slots'?: {
            default?: false | ((arg: {
                isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
                select: GroupItemProvide["select"];
                toggle: GroupItemProvide["toggle"];
                selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
            }) => import("vue").VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild) | undefined;
    } & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    disabled: boolean;
} & {
    value?: any;
    selectedClass?: string | undefined;
} & {
    $children?: import("vue").VNodeChild | {
        default?: ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild) | undefined;
    } | ((arg: {
        isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
        select: GroupItemProvide["select"];
        toggle: GroupItemProvide["toggle"];
        selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
    }) => import("vue").VNodeChild);
    'v-slots'?: {
        default?: false | ((arg: {
            isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
            select: GroupItemProvide["select"];
            toggle: GroupItemProvide["toggle"];
            selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
        }) => import("vue").VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((arg: {
        isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
        select: GroupItemProvide["select"];
        toggle: GroupItemProvide["toggle"];
        selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
    }) => import("vue").VNodeChild) | undefined;
} & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, {
    disabled: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        isSelected: UnwrapRef<GroupItemProvide["isSelected"]>;
        select: GroupItemProvide["select"];
        toggle: GroupItemProvide["toggle"];
        selectedClass: UnwrapRef<GroupItemProvide["selectedClass"]>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("../../util/index.js").FilterPropsOptions<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, import("vue").ExtractPropTypes<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}>>;
export type VSlideGroupItem = InstanceType<typeof VSlideGroupItem>;
