import { useValidation } from "../../composables/validation.js";
import type { GenericProps } from "../../util/index.js";
export type VValidationSlots = {
    default: ReturnType<typeof useValidation>;
};
export declare const VValidation: {
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<{
        error: boolean;
        disabled: boolean | null;
        readonly: boolean | null;
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
    } & {
        name?: string | undefined;
        label?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
    } & {}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
        'update:modelValue': (value: any) => true;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue">, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, {
        error: boolean;
        disabled: boolean | null;
        readonly: boolean | null;
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
    }, true, {}, import("vue").SlotsType<Partial<{
        default: (arg: {
            errorMessages: import("vue").ComputedRef<string[]>;
            isDirty: import("vue").ComputedRef<boolean>;
            isDisabled: import("vue").ComputedRef<boolean>;
            isReadonly: import("vue").ComputedRef<boolean>;
            isPristine: import("vue").ShallowRef<boolean, boolean>;
            isValid: import("vue").ComputedRef<boolean | null>;
            isValidating: import("vue").ShallowRef<boolean, boolean>;
            reset: () => Promise<void>;
            resetValidation: () => Promise<void>;
            validate: (silent?: boolean) => Promise<string[]>;
            validationClasses: import("vue").ComputedRef<{
                [x: string]: boolean;
            }>;
        }) => import("vue").VNode[];
    }>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, {
        error: boolean;
        disabled: boolean | null;
        readonly: boolean | null;
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
    } & {
        name?: string | undefined;
        label?: string | undefined;
        'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
        validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
        validationValue?: any;
    } & {}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[] | undefined, {}, {}, {}, {
        error: boolean;
        disabled: boolean | null;
        readonly: boolean | null;
        rules: readonly import("../../composables/validation.js").ValidationRule[];
        focused: boolean;
        errorMessages: string | readonly string[] | null;
        maxErrors: string | number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<{
    error: boolean;
    disabled: boolean | null;
    readonly: boolean | null;
    rules: readonly import("../../composables/validation.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
} & {
    name?: string | undefined;
    label?: string | undefined;
    'onUpdate:focused'?: ((args_0: boolean) => void) | undefined;
    validateOn?: ("eager" | "lazy" | ("input" | "blur" | "submit" | "invalid-input") | "input lazy" | "blur lazy" | "submit lazy" | "invalid-input lazy" | "input eager" | "blur eager" | "submit eager" | "invalid-input eager" | "lazy input" | "lazy blur" | "lazy submit" | "lazy invalid-input" | "eager input" | "eager blur" | "eager submit" | "eager invalid-input") | undefined;
    validationValue?: any;
} & {}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => true;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue">, string, {
    error: boolean;
    disabled: boolean | null;
    readonly: boolean | null;
    rules: readonly import("../../composables/validation.js").ValidationRule[];
    focused: boolean;
    errorMessages: string | readonly string[] | null;
    maxErrors: string | number;
}, {}, string, import("vue").SlotsType<Partial<{
    default: (arg: {
        errorMessages: import("vue").ComputedRef<string[]>;
        isDirty: import("vue").ComputedRef<boolean>;
        isDisabled: import("vue").ComputedRef<boolean>;
        isReadonly: import("vue").ComputedRef<boolean>;
        isPristine: import("vue").ShallowRef<boolean, boolean>;
        isValid: import("vue").ComputedRef<boolean | null>;
        isValidating: import("vue").ShallowRef<boolean, boolean>;
        reset: () => Promise<void>;
        resetValidation: () => Promise<void>;
        validate: (silent?: boolean) => Promise<string[]>;
        validationClasses: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
    }) => import("vue").VNode[];
}>>, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new <T>(props: {
    modelValue?: T | null;
    "onUpdate:modelValue"?: (value: T | null) => void;
}, slots: VValidationSlots) => GenericProps<typeof props, typeof slots>) & import("../../util/index.js").FilterPropsOptions<{
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
}, import("vue").ExtractPropTypes<{
    focused: BooleanConstructor;
    'onUpdate:focused': import("vue").PropType<(args_0: boolean) => void>;
    disabled: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    errorMessages: {
        type: import("vue").PropType<string | readonly string[] | null>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: {
        type: import("vue").PropType<boolean | null>;
        default: null;
    };
    rules: {
        type: import("vue").PropType<readonly import("../../composables/validation.js").ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: import("vue").PropType<import("../../composables/validation.js").ValidationProps["validateOn"]>;
    validationValue: null;
}>>;
export type VValidation = InstanceType<typeof VValidation>;
