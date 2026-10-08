import { createVNode as _createVNode } from "vue";
// Components
import { VIcon } from "../VIcon/index.mjs"; // Composables
import { useLocale } from "../../composables/locale.mjs"; // Utilities
import { callEvent } from "../../util/index.mjs"; // Types
export function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: 'prependAction',
      prependInner: 'prependAction',
      append: 'appendAction',
      appendInner: 'appendAction',
      clear: 'clear'
    }[name];
    const listener = props[`onClick:${name}`];
    function onKeydown(e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      e.preventDefault();
      e.stopPropagation();
      callEvent(listener, new PointerEvent('click', e));
    }
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? '') : undefined;
    return _createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener,
      "onKeydown": onKeydown
    }, null);
  }
  return {
    InputIcon
  };
}
//# sourceMappingURL=InputIcon.mjs.map