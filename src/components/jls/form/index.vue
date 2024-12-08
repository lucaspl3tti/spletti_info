<template>
  <v-form
    ref="form"
    v-model="model"
    class="jls-form"
    :action="action"
    :method="method"
    :disabled="disabled"
    :fast-fail="fastFail"
    :readonly="readonly"
    :validate-on="validateOn"
  >
    <slot />
  </v-form>
</template>

<script setup lang="ts">
import type { FormProperties } from '@/interfaces/components/form.interface';
import { formValidationModes, formRequestMethods } from '@/consts/form';

const model = defineModel<boolean>({ default: false, required: false });
const form = ref();

const properties = withDefaults(defineProps<FormProperties>(), {
  action: undefined,
  method: 'post',
  disabled: false,
  fastFail: false,
  readonly: false,
  validateOn: 'input',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.validateOn, 'validate-on', 'form', true, formValidationModes);
checkComponentPropertyValidity(properties.method, 'method', 'form', false, formRequestMethods);
/* eslint-enable max-len */

defineExpose({
  validate: () => form.value?.validate(),
  reset: () => form.value?.reset(),
  resetValidation: () => form.value?.resetValidation(),
});
</script>
