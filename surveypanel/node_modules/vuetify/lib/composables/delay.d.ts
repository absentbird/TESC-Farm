export interface DelayProps {
    closeDelay?: number | string;
    openDelay?: number | string;
}
export declare const makeDelayProps: <Defaults extends {
    closeDelay?: unknown;
    openDelay?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    closeDelay: unknown extends Defaults["closeDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["closeDelay"] ? string | number : string | number | Defaults["closeDelay"]>;
        default: unknown extends Defaults["closeDelay"] ? string | number : NonNullable<string | number> | Defaults["closeDelay"];
    };
    openDelay: unknown extends Defaults["openDelay"] ? (StringConstructor | NumberConstructor)[] : {
        type: import("vue").PropType<unknown extends Defaults["openDelay"] ? string | number : string | number | Defaults["openDelay"]>;
        default: unknown extends Defaults["openDelay"] ? string | number : NonNullable<string | number> | Defaults["openDelay"];
    };
};
export declare function useDelay(props: DelayProps, cb?: (value: boolean) => void): {
    clearDelay: () => void;
    runOpenDelay: () => Promise<unknown>;
    runCloseDelay: () => Promise<unknown>;
};
