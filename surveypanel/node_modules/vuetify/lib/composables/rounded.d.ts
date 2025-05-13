import type { Ref } from 'vue';
type RoundedValue = boolean | string | number | null | undefined;
export interface RoundedProps {
    rounded?: RoundedValue;
    tile?: boolean;
}
type RoundedData = {
    roundedClasses: Ref<string[]>;
};
export declare const makeRoundedProps: <Defaults extends {
    rounded?: unknown;
    tile?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    rounded: unknown extends Defaults["rounded"] ? {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    } : Omit<{
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["rounded"] ? string | number | boolean : string | number | boolean | Defaults["rounded"]>;
        default: unknown extends Defaults["rounded"] ? string | number | boolean : NonNullable<string | number | boolean> | Defaults["rounded"];
    };
    tile: unknown extends Defaults["tile"] ? BooleanConstructor : {
        type: import("vue").PropType<unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"]>;
        default: unknown extends Defaults["tile"] ? boolean : boolean | Defaults["tile"];
    };
};
export declare function useRounded(props: RoundedProps | Ref<RoundedValue>, name?: string): RoundedData;

