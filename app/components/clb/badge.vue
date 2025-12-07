<template>
  <div
    :class="[
      'badge',
      'rounded-pill',
      'clb-badge',
      `clb-badge--${theme}`,
      `clb-badge--${variant}`,
      `clb-badge--${size}`,
    ]"
    pill
  >
    <div class="clb-badge__underlay" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ClbBadgeProperties } from '@/interfaces/components/badge.interface';
import {
  colorThemes,
  sizes,
} from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbBadgeProperties>(), {
  theme: 'primary',
  size: 'md',
  variant: 'default',
});

checkComponentPropertyValidity(properties.theme, 'theme', 'badge', true, colorThemes);
checkComponentPropertyValidity(properties.size, 'size', 'badge', true, sizes);
</script>

<style lang="scss">
.clb-badge {
  --clb-badge-height: 32px;
  --clb-badge-bg-color: #{$color-black};
  --clb-badge-padding-x: 12px;
  --clb-badge-font-size: 14px;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: var(--clb-badge-height);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 0 var(--clb-badge-padding-x);
  color: var(--clb-badge-bg-color);
  font-size: var(--clb-badge-font-size);
  font-weight: $font-weight-normal;

  &__underlay {
    pointer-events: none;
    @include position(
      absolute,
      $top: 0,
      $left: 0,
      $right: 0,
      $bottom: 0
    );
    opacity: 0.12;
    border-radius: inherit;
    background-color: var(--clb-badge-bg-color);
  }

  &.clb-badge--ghost {
    border-color: var(--clb-badge-bg-color);
    color: var(--clb-badge-bg-color);

    .clb-badge__underlay {
      display: none;
    }
  }

  &.clb-badge--primary {
    --clb-badge-bg-color: #{$color-primary-var};
  }

  &.clb-badge--secondary {
    --clb-badge-bg-color: #{$color-orange-300};
  }

  &.clb-badge--sm {
    --clb-badge-height: 26px;
    --clb-badge-padding-x: 10px;
    --clb-badge-font-size: 12px;
  }

  &.clb-badge--lg {
    --clb-badge-height: 38px;
    --clb-badge-padding-x: 14px;
    --clb-badge-font-size: 16px;
  }
}
</style>
