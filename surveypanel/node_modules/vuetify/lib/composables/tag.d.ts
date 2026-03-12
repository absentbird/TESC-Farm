import type { PropType } from 'vue';
import type { JSXComponent } from "../util/index.js";
export interface TagProps {
    tag: string | JSXComponent;
}
export declare const makeTagProps: <Defaults extends {
    tag?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    tag: unknown extends Defaults["tag"] ? {
        type: PropType<string | JSXComponent>;
        default: string;
    } : Omit<{
        type: PropType<string | JSXComponent>;
        default: string;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["tag"] ? string | JSXComponent : string | JSXComponent | Defaults["tag"]>;
        default: unknown extends Defaults["tag"] ? string | JSXComponent : NonNullable<string | JSXComponent> | Defaults["tag"];
    };
};
