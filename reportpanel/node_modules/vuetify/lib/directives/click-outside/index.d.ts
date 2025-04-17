import type { DirectiveBinding } from 'vue';
interface ClickOutsideBindingArgs {
    handler: (e: MouseEvent) => void;
    closeConditional?: (e: Event) => boolean;
    include?: () => HTMLElement[];
}
interface ClickOutsideDirectiveBinding extends DirectiveBinding {
    value: ((e: MouseEvent) => void) | ClickOutsideBindingArgs;
}
export declare const ClickOutside: {
    mounted(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
    beforeUnmount(el: HTMLElement, binding: ClickOutsideDirectiveBinding): void;
};
export default ClickOutside;
