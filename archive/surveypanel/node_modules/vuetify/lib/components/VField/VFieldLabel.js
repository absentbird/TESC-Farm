import { createVNode as _createVNode } from "vue";
// Components
import { VLabel } from "../VLabel/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, 'VFieldLabel');
export const VFieldLabel = genericComponent()({
  name: 'VFieldLabel',
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode(VLabel, {
      "class": ['v-field-label', {
        'v-field-label--floating': props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || undefined
    }, slots));
    return {};
  }
});
//# sourceMappingURL=VFieldLabel.js.map