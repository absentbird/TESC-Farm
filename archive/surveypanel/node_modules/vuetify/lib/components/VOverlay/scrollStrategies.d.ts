import type { EffectScope, PropType, Ref } from 'vue';
export interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    targetEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
export type ScrollStrategyFunction = (data: ScrollStrategyData, props: StrategyProps, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
export interface StrategyProps {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFunction;
    contained: boolean | undefined;
}
export declare const makeScrollStrategyProps: <Defaults extends {
    scrollStrategy?: unknown;
} = {}>(defaults?: Defaults | undefined) => {
    scrollStrategy: unknown extends Defaults["scrollStrategy"] ? {
        type: PropType<StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    } : Omit<{
        type: PropType<StrategyProps["scrollStrategy"]>;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<unknown extends Defaults["scrollStrategy"] ? "none" | "block" | "close" | ScrollStrategyFunction | "reposition" : "none" | "block" | "close" | ScrollStrategyFunction | "reposition" | Defaults["scrollStrategy"]>;
        default: unknown extends Defaults["scrollStrategy"] ? "none" | "block" | "close" | ScrollStrategyFunction | "reposition" : NonNullable<"none" | "block" | "close" | ScrollStrategyFunction | "reposition"> | Defaults["scrollStrategy"];
    };
};
export declare function useScrollStrategies(props: StrategyProps, data: ScrollStrategyData): void;
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps, scope: EffectScope): void;

