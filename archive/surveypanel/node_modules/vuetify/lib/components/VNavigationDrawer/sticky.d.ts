import type { CSSProperties, Ref, StyleValue } from 'vue';
interface StickyProps {
    rootEl: Ref<HTMLElement | undefined>;
    isSticky: Ref<boolean>;
    layoutItemStyles: Ref<CSSProperties>;
}
export declare function useSticky({ rootEl, isSticky, layoutItemStyles }: StickyProps): {
    isStuck: import("vue").ShallowRef<boolean | "top" | "bottom", boolean | "top" | "bottom">;
    stickyStyles: import("vue").ComputedRef<StyleValue>;
};

