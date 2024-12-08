<template>
  <v-progress-circular
    :class="[
      'jls-loader-block-circle',
      `jls-loader-block-circle--${theme}`,
      `jls-loader-block-circle--${size}`,
    ]"
    indeterminate
  />
</template>

<script setup lang="ts">
import type { LoaderCircleProperties } from '~/src/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { sizeOptions, themeOptions } from '~/src/consts/misc'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<LoaderCircleProperties>(), {
  theme: 'light',
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.theme, 'theme', 'circle-loader', true, themeOptions);
checkComponentPropertyValidity(properties.size, 'size', 'circle-loader', true, [...sizeOptions, 'default']);
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-loader-block-circle {
  &--primary {
    color: $color-primary-var;
  }

  &--secondary {
    color: $color-secondary-var;
  }

  &--light {
    color: $color-white;
  }

  &--dark {
    color: $color-black;
  }

  &--x-small {
    width: 16px;
    height: 16px;
  }

  &--small {
    width: 24px;
    height: 24px;
  }

  &--default {
    width: 32px;
    height: 32px;
  }

  &--large {
    width: 48px;
    height: 48px;
  }

  &--x-large {
    width: 64px;
    height: 64px;
  }
}
</style>
