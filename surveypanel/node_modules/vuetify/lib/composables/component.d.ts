import type { PropType, StyleValue } from 'vue';
export type ClassValue = any;
export interface ComponentProps {
    class: ClassValue;
    style: StyleValue | undefined;
}
export declare const makeComponentProps: <Defaults extends {
    class?: unknown;
    style?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    class: unknown extends Defaults["class"] ? PropType<any> : {
        type: PropType<unknown extends Defaults["class"] ? any : any>;
        default: unknown extends Defaults["class"] ? any : any;
    };
    style: unknown extends Defaults["style"] ? {
        type: PropType<StyleValue>;
        default: null;
    } : Omit<{
        type: PropType<StyleValue>;
        default: null;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["style"] ? StyleValue : StyleValue | Defaults["style"]>;
        default: unknown extends Defaults["style"] ? StyleValue : Defaults["style"] | NonNullable<StyleValue>;
    };
};
