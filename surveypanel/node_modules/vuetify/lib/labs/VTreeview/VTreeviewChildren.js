import { Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Components
import { VTreeviewGroup } from "./VTreeviewGroup.js";
import { VTreeviewItem } from "./VTreeviewItem.js";
import { VCheckboxBtn } from "../../components/VCheckbox/index.js"; // Composables
import { makeDensityProps } from "../../composables/density.js";
import { IconValue } from "../../composables/icons.js"; // Utilities
import { computed, reactive, toRaw, withModifiers } from 'vue';
import { genericComponent, propsFactory } from "../../util/index.js"; // Types
export const makeVTreeviewChildrenProps = propsFactory({
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: '$loading'
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: undefined
  },
  indeterminateIcon: {
    type: IconValue,
    default: '$checkboxIndeterminate'
  },
  falseIcon: IconValue,
  trueIcon: IconValue,
  returnObject: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  ...makeDensityProps()
}, 'VTreeviewChildren');
export const VTreeviewChildren = genericComponent()({
  name: 'VTreeviewChildren',
  props: makeVTreeviewChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isLoading = reactive(new Set());
    const isClickOnOpen = computed(() => !props.disabled && (props.openOnClick != null ? props.openOnClick : props.selectable));
    async function checkChildren(item) {
      try {
        if (!props.items?.length || !props.loadChildren) return;
        if (item?.children?.length === 0) {
          isLoading.add(item.value);
          await props.loadChildren(item.raw);
        }
      } finally {
        isLoading.delete(item.value);
      }
    }
    function selectItem(select, isSelected) {
      if (props.selectable) {
        select(!isSelected);
      }
    }
    return () => slots.default?.() ?? props.items?.map(item => {
      const {
        children,
        props: itemProps
      } = item;
      const loading = isLoading.has(item.value);
      const slotsWithItem = {
        prepend: slotProps => _createVNode(_Fragment, null, [props.selectable && (!children || children && !['leaf', 'single-leaf'].includes(props.selectStrategy)) && _createVNode("div", null, [_createVNode(VCheckboxBtn, {
          "key": item.value,
          "modelValue": slotProps.isSelected,
          "disabled": props.disabled,
          "loading": loading,
          "color": props.selectedColor,
          "density": props.density,
          "indeterminate": slotProps.isIndeterminate,
          "indeterminateIcon": props.indeterminateIcon,
          "falseIcon": props.falseIcon,
          "trueIcon": props.trueIcon,
          "onClick": withModifiers(() => selectItem(slotProps.select, slotProps.isSelected), ['stop']),
          "onKeydown": e => {
            if (!['Enter', 'Space'].includes(e.key)) return;
            e.stopPropagation();
            selectItem(slotProps.select, slotProps.isSelected);
          }
        }, null)]), slots.prepend?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        })]),
        append: slots.append ? slotProps => slots.append?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        }) : undefined,
        title: slots.title ? slotProps => slots.title?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        }) : undefined,
        subtitle: slots.subtitle ? slotProps => slots.subtitle?.({
          ...slotProps,
          item: item.raw,
          internalItem: item
        }) : undefined
      };
      const treeviewGroupProps = VTreeviewGroup.filterProps(itemProps);
      const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
      return children ? _createVNode(VTreeviewGroup, _mergeProps(treeviewGroupProps, {
        "value": props.returnObject ? item.raw : treeviewGroupProps?.value
      }), {
        activator: _ref2 => {
          let {
            props: activatorProps
          } = _ref2;
          const listItemProps = {
            ...itemProps,
            ...activatorProps,
            value: itemProps?.value,
            onToggleExpand: [() => checkChildren(item), activatorProps.onClick],
            onClick: isClickOnOpen.value ? [() => checkChildren(item), activatorProps.onClick] : undefined
          };
          return _createVNode(VTreeviewItem, _mergeProps(listItemProps, {
            "value": props.returnObject ? item.raw : itemProps.value,
            "loading": loading
          }), slotsWithItem);
        },
        default: () => _createVNode(VTreeviewChildren, _mergeProps(treeviewChildrenProps, {
          "items": children,
          "returnObject": props.returnObject
        }), slots)
      }) : slots.item?.({
        props: itemProps,
        item: item.raw,
        internalItem: item
      }) ?? _createVNode(VTreeviewItem, _mergeProps(itemProps, {
        "value": props.returnObject ? toRaw(item.raw) : itemProps.value
      }), slotsWithItem);
    });
  }
});
//# sourceMappingURL=VTreeviewChildren.js.map