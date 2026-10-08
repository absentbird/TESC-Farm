import { Fragment as _Fragment, createVNode as _createVNode } from "vue";
// Components
import { VCardSubtitle } from "./VCardSubtitle.js";
import { VCardTitle } from "./VCardTitle.js";
import { VAvatar } from "../VAvatar/index.js";
import { VDefaultsProvider } from "../VDefaultsProvider/index.js";
import { VIcon } from "../VIcon/index.js"; // Composables
import { makeComponentProps } from "../../composables/component.js";
import { makeDensityProps } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { toDisplayString } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.js";
export const makeCardItemProps = propsFactory({
  appendAvatar: String,
  appendIcon: IconValue,
  prependAvatar: String,
  prependIcon: IconValue,
  subtitle: {
    type: [String, Number, Boolean],
    default: undefined
  },
  title: {
    type: [String, Number, Boolean],
    default: undefined
  },
  ...makeComponentProps(),
  ...makeDensityProps()
}, 'VCardItem');
export const VCardItem = genericComponent()({
  name: 'VCardItem',
  props: makeCardItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasTitle = !!(props.title != null || slots.title);
      const hasSubtitle = !!(props.subtitle != null || slots.subtitle);
      return _createVNode("div", {
        "class": ['v-card-item', props.class],
        "style": props.style
      }, [hasPrepend && _createVNode("div", {
        "key": "prepend",
        "class": "v-card-item__prepend"
      }, [!slots.prepend ? _createVNode(_Fragment, null, [props.prependAvatar && _createVNode(VAvatar, {
        "key": "prepend-avatar",
        "density": props.density,
        "image": props.prependAvatar
      }, null), props.prependIcon && _createVNode(VIcon, {
        "key": "prepend-icon",
        "density": props.density,
        "icon": props.prependIcon
      }, null)]) : _createVNode(VDefaultsProvider, {
        "key": "prepend-defaults",
        "disabled": !hasPrependMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.prependAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.prependIcon
          }
        }
      }, slots.prepend)]), _createVNode("div", {
        "class": "v-card-item__content"
      }, [hasTitle && _createVNode(VCardTitle, {
        "key": "title"
      }, {
        default: () => [slots.title?.() ?? toDisplayString(props.title)]
      }), hasSubtitle && _createVNode(VCardSubtitle, {
        "key": "subtitle"
      }, {
        default: () => [slots.subtitle?.() ?? toDisplayString(props.subtitle)]
      }), slots.default?.()]), hasAppend && _createVNode("div", {
        "key": "append",
        "class": "v-card-item__append"
      }, [!slots.append ? _createVNode(_Fragment, null, [props.appendIcon && _createVNode(VIcon, {
        "key": "append-icon",
        "density": props.density,
        "icon": props.appendIcon
      }, null), props.appendAvatar && _createVNode(VAvatar, {
        "key": "append-avatar",
        "density": props.density,
        "image": props.appendAvatar
      }, null)]) : _createVNode(VDefaultsProvider, {
        "key": "append-defaults",
        "disabled": !hasAppendMedia,
        "defaults": {
          VAvatar: {
            density: props.density,
            image: props.appendAvatar
          },
          VIcon: {
            density: props.density,
            icon: props.appendIcon
          }
        }
      }, slots.append)])]);
    });
    return {};
  }
});
//# sourceMappingURL=VCardItem.js.map