import type { IfAny } from '@vue/shared';
import type { ComponentObjectPropsOptions, Prop, PropType } from 'vue';
/**
 * Creates a factory function for props definitions.
 * This is used to define props in a composable then override
 * default values in an implementing component.
 *
 * @example Simplified signature
 * (props: Props) => (defaults?: Record<keyof props, any>) => Props
 *
 * @example Usage
 * const makeProps = propsFactory({
 *   foo: String,
 * })
 *
 * defineComponent({
 *   props: {
 *     ...makeProps({
 *       foo: 'a',
 *     }),
 *   },
 *   setup (props) {
 *     // would be "string | undefined", now "string" because a default has been provided
 *     props.foo
 *   },
 * }
 */
export declare function propsFactory<PropsOptions extends ComponentObjectPropsOptions>(props: PropsOptions, source: string): <Defaults extends PartialKeys<PropsOptions> = {}>(defaults?: Defaults) => AppendDefault<PropsOptions, Defaults>;
type AppendDefault<T extends ComponentObjectPropsOptions, D extends PartialKeys<T>> = {
    [P in keyof T]-?: unknown extends D[P] ? T[P] : T[P] extends Record<string, unknown> ? Omit<T[P], 'type' | 'default'> & {
        type: PropType<MergeTypeDefault<T[P], D[P]>>;
        default: MergeDefault<T[P], D[P]>;
    } : {
        type: PropType<MergeTypeDefault<T[P], D[P]>>;
        default: MergeDefault<T[P], D[P]>;
    };
};
type MergeTypeDefault<T, D, P = InferPropType<T>> = unknown extends D ? P : (P | D);
type MergeDefault<T, D, P = InferPropType<T>> = unknown extends D ? P : (NonNullable<P> | D);
/**
 * Like `Partial<T>` but doesn't care what the value is
 */
type PartialKeys<T> = {
    [P in keyof T]?: unknown;
};
type InferPropType<T> = [T] extends [null] ? any : [T] extends [{
    type: null | true;
}] ? any : [T] extends [ObjectConstructor | {
    type: ObjectConstructor;
}] ? Record<string, any> : [T] extends [BooleanConstructor | {
    type: BooleanConstructor;
}] ? boolean : [T] extends [DateConstructor | {
    type: DateConstructor;
}] ? Date : [T] extends [(infer U)[] | {
    type: (infer U)[];
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;

