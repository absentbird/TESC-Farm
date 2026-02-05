import { createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js"; // Utilities
import { genericComponent, useRender } from "../../util/index.js";
export const VCardActions = genericComponent()({
  name: 'VCardActions',
  props: makeComponentProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        slim: true,
        variant: 'text'
      }
    });
    useRender(() => _createVNode("div", {
      "class": ['v-card-actions', props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VCardActions.js.map