type SelectStrategyFunction = (data: {
    id: unknown;
    value: boolean;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformInFunction = (v: readonly unknown[] | undefined, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => Map<unknown, 'on' | 'off' | 'indeterminate'>;
type SelectStrategyTransformOutFunction = (v: Map<unknown, 'on' | 'off' | 'indeterminate'>, children: Map<unknown, unknown[]>, parents: Map<unknown, unknown>) => unknown[];
export type SelectStrategy = {
    select: SelectStrategyFunction;
    in: SelectStrategyTransformInFunction;
    out: SelectStrategyTransformOutFunction;
};
export declare const independentSelectStrategy: (mandatory?: boolean) => SelectStrategy;
export declare const independentSingleSelectStrategy: (mandatory?: boolean) => SelectStrategy;
export declare const leafSelectStrategy: (mandatory?: boolean) => SelectStrategy;
export declare const leafSingleSelectStrategy: (mandatory?: boolean) => SelectStrategy;
export declare const classicSelectStrategy: (mandatory?: boolean) => SelectStrategy;
export declare const trunkSelectStrategy: (mandatory?: boolean) => SelectStrategy;

