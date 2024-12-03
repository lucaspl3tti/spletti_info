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
if (!themeColorOptions.includes(properties.theme)) {
  throw new Error(`The theme "${properties.theme}" is not valid for badge component!`);
}

if (!variantBasicOptions.includes(properties.variant)) {
  throw new Error(`The variant "${properties.variant}" is not valid for badge component!`);
}

if (!['default', ...sizeOptions].includes(properties.size)) {
  throw new Error(`The size "${properties.size}" is not valid for badge component!`);
}
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
