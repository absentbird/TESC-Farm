import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
// Components
import { VDataTableColumn } from "./VDataTableColumn.js";
import { VBtn } from "../VBtn/index.js";
import { VCheckboxBtn } from "../VCheckbox/index.js"; // Composables
import { useGroupBy } from "./composables/group.js";
import { useHeaders } from "./composables/headers.js";
import { useSelection } from "./composables/select.js"; // Utilities
import { computed } from 'vue';
import { genericComponent, propsFactory } from "../../util/index.js"; // Types
export const makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, 'VDataTableGroupHeaderRow');
export const VDataTableGroupHeaderRow = genericComponent()({
  name: 'VDataTableGroupHeaderRow',
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => _createVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        '--v-data-table-group-header-row-depth': props.item.depth
      }
    }, [columns.value.map(column => {
      if (column.key === 'data-table-group') {
        const icon = isGroupOpen(props.item) ? '$expand' : '$next';
        const onClick = () => toggleGroup(props.item);
        return slots['data-table-group']?.({
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        }) ?? _createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [_createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), _createVNode("span", null, [props.item.value]), _createVNode("span", null, [_createTextVNode("("), rows.value.length, _createTextVNode(")")])]
        });
      }
      if (column.key === 'data-table-select') {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = v => select(rows.value, v);
        return slots['data-table-select']?.({
          props: {
            modelValue,
            indeterminate,
            'onUpdate:modelValue': selectGroup
          }
        }) ?? _createVNode("td", null, [_createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return _createVNode("td", null, null);
    })]);
  }
});
//# sourceMappingURL=VDataTableGroupHeaderRow.js.map