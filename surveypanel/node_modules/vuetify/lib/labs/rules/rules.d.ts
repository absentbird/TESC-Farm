import type { InjectionKey } from 'vue';
import type { LocaleInstance } from "../../composables/locale.js";
import type { ValidationRule } from "../../composables/validation.js";
export type ValidationRuleBuilderWithoutOptions = (err?: string) => ValidationRule;
export type ValidationRuleBuilderWithOptions<T> = (options: T, err?: string) => ValidationRule;
export type ValidationRuleBuilder = ValidationRuleBuilderWithoutOptions | ValidationRuleBuilderWithOptions<any>;
export interface RuleAliases {
    [name: string]: ValidationRuleBuilder;
    required: ValidationRuleBuilderWithoutOptions;
    email: ValidationRuleBuilderWithoutOptions;
    number: ValidationRuleBuilderWithoutOptions;
    integer: ValidationRuleBuilderWithoutOptions;
    capital: ValidationRuleBuilderWithoutOptions;
    maxLength: ValidationRuleBuilderWithOptions<number>;
    minLength: ValidationRuleBuilderWithOptions<number>;
    strictLength: ValidationRuleBuilderWithOptions<number>;
    exclude: ValidationRuleBuilderWithOptions<string[]>;
    notEmpty: ValidationRuleBuilderWithoutOptions;
    pattern: ValidationRuleBuilderWithOptions<RegExp>;
}
export type RulesOptions = {
    aliases?: Partial<RuleAliases>;
};
export declare function createRules(options: RulesOptions | undefined, locale: LocaleInstance): Record<string, any>;
export declare const RulesSymbol: InjectionKey<RulesOptions>;
export declare function useRules(): Partial<RuleAliases> | undefined;
