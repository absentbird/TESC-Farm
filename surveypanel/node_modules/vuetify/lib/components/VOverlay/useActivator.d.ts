import type { ComponentPublicInstance, PropType, Ref } from 'vue';
import type { DelayProps } from "../../composables/delay.js";
interface ActivatorProps extends DelayProps {
    target: 'parent' | 'cursor' | (string & {}) | Element | ComponentPublicInstance | [x: number, y: number] | undefined;
    activator: 'parent' | (string & {}) | Element | ComponentPublicInstance | undefined;
    activatorProps: Record<string, any>;
    openOnClick: boolean | undefined;
    openOnHover: boolean;
    openOnFocus: boolean | undefined;
    closeOnContentClick: boolean;
}
export declare const makeActivatorProps: <Defaults extends {
    closeDelay?: unknown;
    openDelay?: unknown;
    target?: unknown;
    activator?: unknown;
    activatorProps?: unknown;
    openOnClick?: unknown;
    openOnHover?: unknown;
    openOnFocus?: unknown;
    closeOnContentClick?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeDelay: unknown extends Defaults["closeDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
    };
    target: unknown extends Defaults["target"] ? PropType<Element | "cursor" | "parent" | (string & {}) | ComponentPublicInstance | [x: number, y: number] | undefined> : {
        type: PropType<unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | ComponentPublicInstance | [x: number, y: number] | undefined : Element | "cursor" | "parent" | (string & {}) | ComponentPublicInstance | [x: number, y: number] | Defaults["target"] | undefined>;
        default: unknown extends Defaults["target"] ? Element | "cursor" | "parent" | (string & {}) | ComponentPublicInstance | [x: number, y: number] | undefined : Defaults["target"] | NonNullable<Element | "cursor" | "parent" | (string & {}) | ComponentPublicInstance | [x: number, y: number] | undefined>;
    };
    activator: unknown extends Defaults["activator"] ? PropType<Element | "parent" | (string & {}) | ComponentPublicInstance | undefined> : {
        type: PropType<unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | ComponentPublicInstance | undefined : Element | "parent" | (string & {}) | ComponentPublicInstance | Defaults["activator"] | undefined>;
        default: unknown extends Defaults["activator"] ? Element | "parent" | (string & {}) | ComponentPublicInstance | undefined : Defaults["activator"] | NonNullable<Element | "parent" | (string & {}) | ComponentPublicInstance | undefined>;
    };
    activatorProps: unknown extends Defaults["activatorProps"] ? {
        type: PropType<ActivatorProps["activatorProps"]>;
        default: () => {};
    } : Omit<{
        type: PropType<ActivatorProps["activatorProps"]>;
        default: () => {};
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"]>;
        default: unknown extends Defaults["activatorProps"] ? Record<string, any> : Record<string, any> | Defaults["activatorProps"];
    };
    openOnClick: unknown extends Defaults["openOnClick"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"]>;
        default: unknown extends Defaults["openOnClick"] ? boolean : boolean | Defaults["openOnClick"];
    };
    openOnHover: unknown extends Defaults["openOnHover"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"]>;
        default: unknown extends Defaults["openOnHover"] ? boolean : boolean | Defaults["openOnHover"];
    };
    openOnFocus: unknown extends Defaults["openOnFocus"] ? {
        type: BooleanConstructor;
        default: undefined;
    } : Omit<{
        type: BooleanConstructor;
        default: undefined;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"]>;
        default: unknown extends Defaults["openOnFocus"] ? boolean : boolean | Defaults["openOnFocus"];
    };
    closeOnContentClick: unknown extends Defaults["closeOnContentClick"] ? BooleanConstructor : {
        type: PropType<unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"]>;
        default: unknown extends Defaults["closeOnContentClick"] ? boolean : boolean | Defaults["closeOnContentClick"];
    };
};
export declare function useActivator(props: ActivatorProps, { isActive, isTop, contentEl }: {
    isActive: Ref<boolean>;
    isTop: Ref<boolean>;
    contentEl: Ref<HTMLElement | undefined>;
}): {
    activatorEl: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    activatorRef: import("../../util/index.js").TemplateRef;
    target: import("vue").ComputedRef<HTMLElement | [x: number, y: number] | undefined>;
    targetEl: import("vue").ComputedRef<HTMLElement | undefined>;
    targetRef: import("../../util/index.js").TemplateRef;
    activatorEvents: import("vue").ComputedRef<Partial<{
        onClick: (e: MouseEvent) => void;
        onMouseenter: (e: MouseEvent) => void;
        onMouseleave: (e: MouseEvent) => void;
        onFocus: (e: FocusEvent) => void;
        onBlur: (e: FocusEvent) => void;
    }>>;
    contentEvents: import("vue").ComputedRef<Record<string, EventListener>>;
    scrimEvents: import("vue").ComputedRef<Record<string, EventListener>>;
};

