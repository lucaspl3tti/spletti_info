<template>
  <div
    :class="[
      'form-check',
      'clb-form-checkbox',
      `clb-form-checkbox--${theme}`,
      { 'clb-form-checkbox--rounded': rounded },
    ]"
  >
    <input
      :id="id"
      v-model="model"
      :name="name"
      class="form-check-input clb-form-checkbox__input"
      type="checkbox"
      :required="required"
      @change="onChange"
    >
    <label
      class="form-check-label clb-form-checkbox__label"
      :for="id"
      v-html="label"
    />

    <transition>
      <div v-show="isInvalid" class="clb-form-input__hint clb-form-input__hint--error">
        {{ validationMessage }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { ClbFormCheckboxProperties } from '@/interfaces/components/form.interface';
import { colorVariants } from '@/consts/misc.consts';

const model = defineModel<boolean|null>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<ClbFormCheckboxProperties>(), {
  id: undefined,
  name: undefined,
  isInvalid: false,
  label: '',
  required: false,
  rounded: false,
  theme: 'light',
  validationMessage: undefined,
});

const emit = defineEmits(['change']);

checkComponentPropertyValidity(properties.theme, 'theme', 'form-checkbox', true, colorVariants);

function onChange(event: Event): void {
  emit('change', event);
}
</script>

<!-- eslint-disable max-len -->
<style lang="scss">
.clb-form-checkbox {
  --clb-checkbox-border-color: #{$color-gray-600};
  --clb-checkbox-bg-color: transparent;
  --clb-checkbox-checkmark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="%23f4f4f4" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>');
  position: relative;
  z-index: 1;
  margin-bottom: spacing(4);

  &__input {
    @include size(20px);
    margin-top: 0.1em;
    border-width: 2px !important;
    border-color: var(--clb-checkbox-border-color) !important;
    border-radius: 0 !important;
    background-color: transparent;

    &:checked {
      border: 0;
      background-color: var(--clb-checkbox-bg-color);
      background-image: var(--clb-checkbox-checkmark-icon);
    }
  }

  &__hint {
    @include position(absolute, $top: 100%, $left: 0, $zIndex: 1);
    width: 100%;
    padding: spacing(1.5) spacing(4) 0;
    font-size: map.get($clb-font-sizes, 'smaller', 'xs');

    &--error {
      color: $color-error;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: translate $animation-speed ease, opacity $animation-speed ease;
  }

  .v-enter-from,
  .v-leave-to {
    z-index: -1;
    translate: 0 -100%;
    opacity: 0;
  }

  &.clb-form-checkbox--rounded {
    .clb-form-checkbox__input {
      border-radius: 4px !important;
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
    --clb-checkbox-checkmark-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="%23101010" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>');
  }

  &.clb-form-checkbox--dark {
    --clb-checkbox-border-color: #{$color-black};
    --clb-checkbox-bg-color: #{$color-black};
  }
}
</style>
<!-- eslint-enable max-len -->
