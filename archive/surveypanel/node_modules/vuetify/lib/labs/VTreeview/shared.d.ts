import type { ComputedRef, InjectionKey } from 'vue';
export interface TreeViewProvide {
    visibleIds: ComputedRef<Set<unknown> | null>;
}
export declare const VTreeviewSymbol: InjectionKey<TreeViewProvide>;
