import type { Component, FunctionalComponent, PropType, TransitionProps } from 'vue';
export declare const makeTransitionProps: <Defaults extends {
    transition?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    transition: unknown extends Defaults["transition"] ? {
        type: PropType<string | boolean | (TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    } : Omit<{
        type: PropType<string | boolean | (TransitionProps & {
            component?: Component;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["transition"] ? string | boolean | (TransitionProps & {
            component?: Component;
        }) : string | boolean | (TransitionProps & {
            component?: Component;
        }) | Defaults["transition"]>;
        default: unknown extends Defaults["transition"] ? string | boolean | (TransitionProps & {
            component?: Component;
        }) : NonNullable<string | boolean | (TransitionProps & {
            component?: Component;
        })> | Defaults["transition"];
    };
};
interface MaybeTransitionProps extends TransitionProps {
    transition?: string | boolean | TransitionProps & {
        component?: any;
    };
    disabled?: boolean;
    group?: boolean;
}
export declare const MaybeTransition: FunctionalComponent<MaybeTransitionProps>;

