<template>
  <v-checkbox
    v-if="!inline"
    v-model="model"
    :class="['jls-form-checkbox', `jls-form-checkbox--${theme}`]"
    :label="label"
  ></v-checkbox>

  <v-checkbox-btn
    v-else
    v-model="model"
    :class="['jls-form-checkbox', `jls-form-checkbox--${theme}`]"
    :label="label"
  ></v-checkbox-btn>
</template>

<script setup lang="ts">
import type { FormCheckboxProperties } from '@/interfaces/components/form.interface'; // eslint-disable-line max-len

import { themeOptions } from '@/consts/misc';

const model = defineModel<string|string[] | boolean>({
  default: false,
  required: true,
});

const properties = withDefaults(defineProps<FormCheckboxProperties>(), {
  label: '',
  theme: 'light',
  inline: false,
});

if (!themeOptions.includes(properties.theme)) {
  throw new Error(`The theme "${properties.theme}" is not valid for form checkbox component!`); // eslint-disable-line max-len
}
</script>

<style lang="scss">
.jls-form-checkbox {
  .v-selection-control__input > .v-icon {
    color: "currentColor";
  }

  .v-label {
    color: $color-white !important;
  }

  &--light {
    color: $color-white;
  }

  &--primary {
    color: $color-purple-300;
  }

  &--secondary {
    color: $color-secondary;
  }

  &--dark {
    color: $color-black;
  }
}
</style>
