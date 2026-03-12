import { createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
// Components
import { VDialog } from "../VDialog.js"; // Utilities
import { render, screen, userEvent } from '@test';
import { nextTick, ref } from 'vue';

// Tests
describe('VDialog', () => {
  it('should render correctly', async () => {
    const model = ref(false);
    const {
      element
    } = render(() => _createVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "data-testid": "dialog"
    }, {
      default: () => [_createVNode("div", {
        "data-testid": "content"
      }, [_createTextVNode("Content")])]
    })]));
    expect(screen.queryByTestId('dialog')).toBeNull();
    model.value = true;
    await nextTick();
    await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
    await expect.element(await screen.findByTestId('content')).toBeVisible();
    await userEvent.click(element);
    await expect.poll(() => model.value).toBeFalsy();
    await expect.poll(() => screen.queryByTestId('dialog')).toBeNull();
    await expect.poll(() => screen.queryByTestId('content')).toBeNull();
  });
  it('should emit afterLeave', async () => {
    const model = ref(true);
    const onAfterLeave = vi.fn();
    const {
      element
    } = render(() => _createVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [_createVNode("div", {
        "data-test": "content"
      }, [_createTextVNode("Content")])]
    })]));
    await userEvent.click(element);
    await expect.poll(() => onAfterLeave).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=VDialog.spec.browser.js.map