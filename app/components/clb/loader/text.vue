<template>
  <div class="clb-loader-text">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts" setup>
import type { ClbLoaderTextProperties } from '@/interfaces/components/loader.interface';

const properties = withDefaults(defineProps<ClbLoaderTextProperties>(), {
  text: undefined,
});

checkComponentPropertyValidity(properties.text, 'variant', 'loader-dots', true);
</script>

<style lang="scss" scoped>
.clb-loader-text {
  &::after {
    content: '\2026';
    display: inline-block;
    width: 0;
    overflow: hidden;
    vertical-align: bottom;
    animation: ellipsis steps(4, end) 1.5s infinite;
  }
}

@keyframes ellipsis {
  to {
    width: 1.25rem;
  }
}
</style>
