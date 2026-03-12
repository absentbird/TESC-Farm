import { createVNode as _createVNode } from "vue";
// Composables
import { makeComponentProps } from "../../composables/component.js"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeVBreadcrumbsDividerProps = propsFactory({
  divider: [Number, String],
  ...makeComponentProps()
}, 'VBreadcrumbsDivider');
export const VBreadcrumbsDivider = genericComponent()({
  name: 'VBreadcrumbsDivider',
  props: makeVBreadcrumbsDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => _createVNode("li", {
      "aria-hidden": "true",
      "class": ['v-breadcrumbs-divider', props.class],
      "style": props.style
    }, [slots?.default?.() ?? props.divider]));
    return {};
  }
});
//# sourceMappingURL=VBreadcrumbsDivider.js.map