import { Fragment as _Fragment, mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Components
import { makeVConfirmEditProps, VConfirmEdit } from "../../components/VConfirmEdit/VConfirmEdit.js";
import { makeVDatePickerProps, VDatePicker } from "../../components/VDatePicker/VDatePicker.js";
import { VMenu } from "../../components/VMenu/VMenu.js";
import { makeVTextFieldProps, VTextField } from "../../components/VTextField/VTextField.js"; // Composables
import { useDate } from "../../composables/date/index.js";
import { makeDisplayProps, useDisplay } from "../../composables/display.js";
import { makeFocusProps, useFocus } from "../../composables/focus.js";
import { forwardRefs } from "../../composables/forwardRefs.js";
import { useLocale } from "../../composables/locale.js";
import { useProxiedModel } from "../../composables/proxiedModel.js"; // Utilities
import { computed, ref, shallowRef, watch } from 'vue';
import { genericComponent, omit, propsFactory, useRender, wrapInArray } from "../../util/index.js"; // Types
// Types
export const makeVDateInputProps = propsFactory({
  displayFormat: [Function, String],
  location: {
    type: String,
    default: 'bottom start'
  },
  ...makeDisplayProps(),
  ...makeFocusProps(),
  ...makeVConfirmEditProps({
    hideActions: true
  }),
  ...makeVTextFieldProps({
    placeholder: 'mm/dd/yyyy',
    prependIcon: '$calendar'
  }),
  ...omit(makeVDatePickerProps({
    hideHeader: true,
    showAdjacentMonths: true
  }), ['active', 'location', 'rounded'])
}, 'VDateInput');
export const VDateInput = genericComponent()({
  name: 'VDateInput',
  props: makeVDateInputProps(),
  emits: {
    save: value => true,
    cancel: () => true,
    'update:modelValue': val => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const adapter = useDate();
    const {
      mobile
    } = useDisplay(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, 'modelValue', props.multiple ? [] : null, val => Array.isArray(val) ? val.map(item => adapter.toJsDate(item)) : val ? adapter.toJsDate(val) : val, val => Array.isArray(val) ? val.map(item => adapter.date(item)) : val ? adapter.date(val) : val);
    const menu = shallowRef(false);
    const isEditingInput = shallowRef(false);
    const vTextFieldRef = ref();
    const disabledActions = ref(['save']);
    function format(date) {
      if (typeof props.displayFormat === 'function') {
        return props.displayFormat(date);
      }
      return adapter.format(date, props.displayFormat ?? 'keyboardDate');
    }
    const display = computed(() => {
      const value = wrapInArray(model.value);
      if (!value.length) return null;
      if (props.multiple === true) {
        return t('$vuetify.datePicker.itemsSelected', value.length);
      }
      if (props.multiple === 'range') {
        const start = value[0];
        const end = value[value.length - 1];
        if (!adapter.isValid(start) || !adapter.isValid(end)) return '';
        return `${format(adapter.date(start))} - ${format(adapter.date(end))}`;
      }
      return adapter.isValid(model.value) ? format(adapter.date(model.value)) : '';
    });
    const inputmode = computed(() => {
      if (!mobile.value) return undefined;
      if (isEditingInput.value) return 'text';
      return 'none';
    });
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    const isReadonly = computed(() => !(mobile.value && isEditingInput.value) && props.readonly);
    watch(menu, val => {
      if (val) return;
      isEditingInput.value = false;
      disabledActions.value = ['save'];
    });
    function onKeydown(e) {
      if (e.key !== 'Enter') return;
      if (!menu.value || !isFocused.value) {
        menu.value = true;
        return;
      }
      const target = e.target;
      model.value = adapter.isValid(target.value) ? target.value : null;
    }
    function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.value && mobile.value) {
        isEditingInput.value = true;
      } else {
        menu.value = true;
      }
    }
    function onCancel() {
      emit('cancel');
      menu.value = false;
      isEditingInput.value = false;
    }
    function onSave(value) {
      emit('save', value);
      menu.value = false;
    }
    function onUpdateDisplayModel(value) {
      if (value != null) return;
      model.value = null;
    }
    function onBlur() {
      blur();

      // When in mobile mode and editing is done (due to keyboard dismissal), close the menu
      if (mobile.value && isEditingInput.value && !isFocused.value) {
        menu.value = false;
        isEditingInput.value = false;
      }
    }
    useRender(() => {
      const confirmEditProps = VConfirmEdit.filterProps(props);
      const datePickerProps = VDatePicker.filterProps(omit(props, ['active', 'location', 'rounded']));
      const textFieldProps = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "class": props.class,
        "style": props.style,
        "modelValue": display.value,
        "inputmode": inputmode.value,
        "readonly": isReadonly.value,
        "onKeydown": isInteractive.value ? onKeydown : undefined,
        "focused": menu.value || isFocused.value,
        "onFocus": focus,
        "onBlur": onBlur,
        "onClick:control": isInteractive.value ? onClick : undefined,
        "onClick:prepend": isInteractive.value ? onClick : undefined,
        "onUpdate:modelValue": onUpdateDisplayModel
      }), {
        ...slots,
        default: () => _createVNode(_Fragment, null, [_createVNode(VMenu, {
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "min-width": "0",
          "eager": isFocused.value,
          "location": props.location,
          "closeOnContentClick": false,
          "openOnClick": false
        }, {
          default: () => [_createVNode(VConfirmEdit, _mergeProps(confirmEditProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "disabled": disabledActions.value,
            "onSave": onSave,
            "onCancel": onCancel
          }), {
            default: _ref2 => {
              let {
                actions,
                model: proxyModel,
                save,
                cancel,
                isPristine
              } = _ref2;
              function onUpdateModel(value) {
                if (!props.hideActions) {
                  proxyModel.value = value;
                } else {
                  model.value = value;
                  if (!props.multiple) {
                    menu.value = false;
                  }
                }
                emit('save', value);
                disabledActions.value = [];
              }
              return _createVNode(VDatePicker, _mergeProps(datePickerProps, {
                "modelValue": props.hideActions ? model.value : proxyModel.value,
                "onUpdate:modelValue": value => onUpdateModel(value),
                "onMousedown": e => e.preventDefault()
              }), {
                actions: !props.hideActions ? () => slots.actions?.({
                  save,
                  cancel,
                  isPristine
                }) ?? actions() : undefined
              });
            }
          })]
        }), slots.default?.()])
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});
//# sourceMappingURL=VDateInput.js.map