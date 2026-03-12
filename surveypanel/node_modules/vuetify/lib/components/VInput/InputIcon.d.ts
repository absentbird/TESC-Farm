import type { IconValue } from "../../composables/icons.js";
import type { EventProp } from "../../util/index.js";
type names = 'clear' | 'prepend' | 'append' | 'appendInner' | 'prependInner';
type InputIconProps<T extends names> = {
    label: string | undefined;
} & {
    [K in `${T}Icon`]: IconValue | undefined;
} & {
    [K in `onClick:${T}`]: EventProp | undefined;
};
type Listeners<T extends {}, U = keyof T> = U extends `onClick:${infer V extends names}` ? V : never;
export declare function useInputIcon<T extends {}, K extends names = Listeners<T>>(props: T & InputIconProps<K>): {
    InputIcon: ({ name, color }: {
        name: Extract<names, K>;
        color?: string;
    }) => JSX.Element;
};

