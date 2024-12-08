<template>
  <v-chip
    :class="[
      'jls-badge',
      `jls-badge--${theme}`,
      `jls-badge--${variant}`,
      `jls-badge--${size}`,
    ]"
    :variant="variant"
    :size="size"
  >
    <slot />
  </v-chip>
</template>

<script setup lang="ts">
import type { BadgeProperties } from '@/interfaces/components/misc.interface';
import {
  sizeOptions,
  themeColorOptions,
  variantBasicOptions,
} from '@/consts/misc';

const properties = withDefaults(defineProps<BadgeProperties>(), {
  theme: 'primary',
  variant: 'tonal',
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.theme, 'theme', 'badge', true, themeColorOptions);
checkComponentPropertyValidity(properties.variant, 'variant', 'badge', true, variantBasicOptions);
checkComponentPropertyValidity(properties.size, 'size', 'badge', true, ['default', ...sizeOptions]);
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-badge {
  &.jls-badge--primary {
    &:not(.jls-badge--tonal):not(.jls-badge--outlined) {
      background-color: $color-primary;
      color: $color-white;
    }

    &.jls-badge--tonal,
    &.jls-badge--outlined {
      color: $color-purple-300;
    }
  }

  &.jls-badge--secondary {
    &:not(.jls-badge--tonal):not(.jls-badge--outlined) {
      background-color: $color-secondary;
      color: $color-white;
    }

    &.jls-badge--tonal,
    &.jls-badge--outlined {
      color: $color-secondary;
    }
  }
}
</style>
