<template>
  <form
    :id="id"
    ref="formElement"
    class="clb-form"
    :action="action"
    :method="method"
  >
    <slot />
  </form>
</template>

<script lang="ts" setup>
import type { ClbFormProperties } from '@/interfaces/components/form.interface';

const properties = withDefaults(defineProps<ClbFormProperties>(), {
  id: undefined,
  action: undefined,
  method: undefined,
  novalidate: false,
});

const formElement = useTemplateRef('formElement');

function resetForm(): void {
  if (formElement.value) {
    formElement.value.reset();
  }
}

defineExpose({
  action: properties.action,
  method: properties.method,
  reset: resetForm,
});
</script>
