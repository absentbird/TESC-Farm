import { createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js";
import { provideDefaults } from "../../composables/defaults.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVBannerActionsProps = propsFactory({
  color: String,
  density: String,
  ...makeComponentProps()
}, 'VBannerActions');
export const VBannerActions = genericComponent()({
  name: 'VBannerActions',
  props: makeVBannerActionsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: props.color,
        density: props.density,
        slim: true,
        variant: 'text'
      }
    });
    useRender(() => _createVNode("div", {
      "class": ['v-banner-actions', props.class],
      "style": props.style
    }, [slots.default?.()]));
    return {};
  }
});
//# sourceMappingURL=VBannerActions.js.map