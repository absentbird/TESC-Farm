import type { PropType, Ref, VNode } from 'vue';
import type { GenericProps } from "../../util/index.js";
export type VConfirmEditSlots<T> = {
    default: {
        model: Ref<T>;
        save: () => void;
        cancel: () => void;
        isPristine: boolean;
        get actions(): (props?: {}) => VNode;
    };
};
export declare const makeVConfirmEditProps: <Defaults extends {
    modelValue?: unknown;
    color?: unknown;
    cancelText?: unknown;
    okText?: unknown;
    disabled?: unknown;
    hideActions?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    modelValue: unknown extends Defaults["modelValue"] ? null : {
        type: PropType<unknown extends Defaults["modelValue"] ? any : any>;
        default: unknown extends Defaults["modelValue"] ? any : any;
    };
    color: unknown extends Defaults["color"] ? StringConstructor : {
        type: PropType<unknown extends Defaults["color"] ? string : string | Defaults["color"]>;
        default: unknown extends Defaults["color"] ? string : string | Defaults["color"];
    };
    cancelText: unknown extends Defaults["cancelText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"]>;
        default: unknown extends Defaults["cancelText"] ? string : string | Defaults["cancelText"];
    };
    okText: unknown extends Defaults["okText"] ? {
        type: StringConstructor;
        default: string;
    } : Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["okText"] ? string : string | Defaults["okText"]>;
        default: unknown extends Defaults["okText"] ? string : string | Defaults["okText"];
    };
    disabled: unknown extends Defaults["disabled"] ? {
        type: PropType<boolean | ("save" | "cancel")[]>;
        default: undefined;
    } : Omit<{
        type: PropType<boolean | ("save" | "cancel")[]>;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["disabled"] ? boolean | ("cancel" | "save")[] : boolean | ("cancel" | "save")[] | Defaults["disabled"]>;
        default: unknown extends Defaults["disabled"] ? boolean | ("cancel" | "save")[] : Defaults["disabled"] | NonNullable<boolean | ("cancel" | "save")[]>;
    };
    hideActions: unknown extends Defaults["hideActions"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"]>;
        default: unknown extends Defaults["hideActions"] ? boolean : boolean | Defaults["hideActions"];
    };
};
export declare const VConfirmEdit: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        cancelText: string;
        okText: string;
        hideActions: boolean;
    } & {
        color?: string | undefined;
        disabled?: boolean | ("cancel" | "save")[] | undefined;
    } & {
        onCancel?: (() => any) | undefined;
    }, {
        save: () => void;
        cancel: () => void;
        isPristine: import("vue").ComputedRef<boolean>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        cancel: () => true;
        save: (value: any) => true;
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "save">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        disabled: boolean | ("cancel" | "save")[];
        cancelText: string;
        okText: string;
        hideActions: boolean;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            model: Ref<unknown, unknown>;
            save: () => void;
            cancel: () => void;
            isPristine: boolean;
            readonly actions: (props?: {}) => VNode;
        }) => VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        cancelText: string;
        okText: string;
        hideActions: boolean;
    } & {
        color?: string | undefined;
        disabled?: boolean | ("cancel" | "save")[] | undefined;
    } & {
        onCancel?: (() => any) | undefined;
    }, {
        save: () => void;
        cancel: () => void;
        isPristine: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        disabled: boolean | ("cancel" | "save")[];
        cancelText: string;
        okText: string;
        hideActions: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    cancelText: string;
    okText: string;
    hideActions: boolean;
} & {
    color?: string | undefined;
    disabled?: boolean | ("cancel" | "save")[] | undefined;
} & {
    onCancel?: (() => any) | undefined;
}, {
    save: () => void;
    cancel: () => void;
    isPristine: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    cancel: () => true;
    save: (value: any) => true;
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "save">, string, {
    disabled: boolean | ("cancel" | "save")[];
    cancelText: string;
    okText: string;
    hideActions: boolean;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        model: Ref<unknown, unknown>;
        save: () => void;
        cancel: () => void;
        isPristine: boolean;
        readonly actions: (props?: {}) => VNode;
    }) => VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T;
    "onUpdate:modelValue"?: (value: T) => void;
    "onSave"?: (value: T) => void;
}, slots: VConfirmEditSlots<T>) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    modelValue: null;
    color: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<boolean | ("save" | "cancel")[]>;
        default: undefined;
    };
    hideActions: BooleanConstructor;
}, import("vue").ExtractPropTypes<{
    modelValue: null;
    color: StringConstructor;
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: PropType<boolean | ("save" | "cancel")[]>;
        default: undefined;
    };
    hideActions: BooleanConstructor;
}>>;
export type VConfirmEdit = InstanceType<typeof VConfirmEdit>;
