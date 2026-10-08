import type { InjectionKey, Ref } from 'vue';
export declare const DepthKey: InjectionKey<Ref<number>>;
export declare function useDepth(hasPrepend?: Ref<boolean>): import("vue").ComputedRef<number>;
export declare const ListKey: InjectionKey<{
    hasPrepend: Ref<boolean>;
    updateHasPrepend: (value: boolean) => void;
}>;
export declare function createList(): {
    hasPrepend: Ref<boolean>;
    updateHasPrepend: (value: boolean) => void;
};
export declare function useList(): {
    hasPrepend: Ref<boolean>;
    updateHasPrepend: (value: boolean) => void;
} | null;
