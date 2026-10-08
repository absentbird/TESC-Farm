import type { Ref } from 'vue';
export interface ElevationProps {
    elevation?: number | string | null;
}
export declare const makeElevationProps: <Defaults extends {
    elevation?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    elevation: unknown extends Defaults["elevation"] ? {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    } : Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: import("vue").PropType<unknown extends Defaults["elevation"] ? string | number : string | number | Defaults["elevation"]>;
        default: unknown extends Defaults["elevation"] ? string | number : NonNullable<string | number> | Defaults["elevation"];
    };
};
type ElevationData = {
    elevationClasses: Ref<string[]>;
};
export declare function useElevation(props: ElevationProps | Ref<number | string | undefined>): ElevationData;

