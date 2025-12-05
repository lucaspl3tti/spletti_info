<template>
  <div
    :class="[
      'form-check',
      'clb-form-checkbox',
      `clb-form-checkbox--${theme}`,
    ]"
  >
    <input
      :id="id"
      v-model="model"
      class="form-check-input clb-form-checkbox__input"
      type="checkbox"
    >
    <label
      class="form-check-label clb-form-checkbox__label"
      for="checkDefault"
    >
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
import type { FormCheckboxProperties } from '@/interfaces/components/form.interface';
import { colorVariants } from '@/consts/misc.consts';

const model = defineModel<boolean|null>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<FormCheckboxProperties>(), {
  id: undefined,
  label: '',
  rounded: false,
  theme: 'light',
});

checkComponentPropertyValidity(properties.theme, 'theme', 'form-checkbox', true, colorVariants);

watch(() => model.value, () => {
  console.log('model value changed', model.value); // eslint-disable-line no-console
});
</script>

<style lang="scss">
.clb-form-checkbox {
  --clb-checkbox-border-color: #{$color-gray-600};
  --clb-checkbox-bg-color: transparent;
  // @TODO: Implement correct white check mark
  --clb-checkbox-checkmark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#101010"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>');

  &__input {
    @include size(20px);
    margin-top: 0.1em;
    margin-right: 8px !important;
    border-width: 2px !important;
    border-color: var(--clb-checkbox-border-color);
    border-radius: 0 !important;
    background-color: transparent;

    &:checked {
      background-color: var(--clb-checkbox-bg-color);
      background-image: var(--clb-checkbox-checkmark-icon);
    }
  }

  &.clb-form-checkbox--primary {
    --clb-checkbox-border-color: #{$color-primary};
    --clb-checkbox-bg-color: #{$color-primary};
  }

  &.clb-form-checkbox--secondary {
    --clb-checkbox-border-color: #{$color-secondary};
    --clb-checkbox-bg-color: #{$color-secondary};
  }

  &.clb-form-checkbox--light {
    --clb-checkbox-border-color: #{$color-white};
    --clb-checkbox-bg-color: #{$color-white};
    // --clb-checkbox-checkmark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>');
  }

  &.clb-form-checkbox--dark {
    --clb-checkbox-border-color: #{$color-black};
    --clb-checkbox-bg-color: #{$color-black};
  }
}
</style>
