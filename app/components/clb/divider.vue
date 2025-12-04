<template>
  <div class="clb-divider-wrapper">
    <hr
      :class="[
        'clb-divider',
        `clb-divider--${properties.theme}`,
        `clb-divider--${properties.size}`,
      ]"
    >
  </div>
</template>

<script lang="ts" setup>
import type { ClbDividerProperties } from '@/interfaces/components/divider.interface';

const properties = withDefaults(defineProps<ClbDividerProperties>(), {
  theme: 'light',
  size: 'sm',
});

checkComponentPropertyValidity(properties.theme, 'theme', 'divider', true);
checkComponentPropertyValidity(properties.size, 'size', 'divider', true);
</script>

<style lang="scss">
.clb-divider {
  opacity: 1;

  &.clb-divider--primary {
    border-color: $color-primary-var;
  }

  &.clb-divider--secondary {
    border-color: $color-secondary-var;
  }

  &.clb-divider--light {
    border-color: $color-white;
  }

  &.clb-divider--dark {
    border-color: $color-black;
  }

  &.clb-divider--sm {
    border-width: 1px;
  }

  &.clb-divider--md {
    border-width: 2px;
  }

  &.clb-divider--lg {
    border-width: 4px;
  }
}
</style>
