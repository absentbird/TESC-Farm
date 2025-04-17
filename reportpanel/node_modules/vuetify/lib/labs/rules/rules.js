// Utilities
import { inject } from 'vue';
import { mergeDeep } from "../../util/index.js"; // Types
export function createRules(options, locale) {
  const {
    t
  } = locale;
  return mergeDeep({
    aliases: {
      required: err => {
        return v => {
          // If the modifier .number is used, the 0 will be a number and it's a falsy value so we need to check for it
          return v === 0 || !!v || t(err || '$vuetify.rules.required');
        };
      },
      email: err => {
        return v => !v || typeof v === 'string' && /^.+@\S+\.\S+$/.test(v) || t(err || '$vuetify.rules.email');
      },
      number: err => {
        return v => !!Number(v) || t(err || '$vuetify.rules.number');
      },
      integer: err => {
        return v => /^[\d]*$/.test(v) || t(err || '$vuetify.rules.integer');
      },
      capital: err => {
        return v => /^[A-Z]*$/.test(v) || t(err || '$vuetify.rules.capital');
      },
      maxLength: (len, err) => {
        return v => !v || v.length <= len || t(err || '$vuetify.rules.maxLength', [len]);
      },
      minLength: (len, err) => {
        return v => !v || v.length >= len || t(err || '$vuetify.rules.minLength', [len]);
      },
      strictLength: (len, err) => {
        return v => !v || v.length === len || t(err || '$vuetify.rules.strictLength', [len]);
      },
      exclude: (forbiddenCharacters, err) => {
        return v => {
          let error = true;
          for (const character of forbiddenCharacters) {
            if (v.includes(character)) error = err || t('$vuetify.rules.exclude', character);
          }
          return error;
        };
      },
      notEmpty: err => {
        return v => v && v.length > 0 || t(err || '$vuetify.rules.notEmpty');
      },
      pattern: (pattern, err) => {
        return v => !v || pattern.test(v) || t(err || '$vuetify.rules.pattern');
      }
    }
  }, options);
}
export const RulesSymbol = Symbol.for('vuetify:rules');
export function useRules() {
  const ruleOptions = inject(RulesSymbol);
  if (!ruleOptions) throw new Error('Could not find Vuetify rules injection');
  return ruleOptions.aliases;
}
//# sourceMappingURL=rules.js.map