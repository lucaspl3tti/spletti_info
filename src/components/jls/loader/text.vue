<template>
  <div class="jls-loader-text">
    <component :is="elementTag" class="jls-loader-text__text">
      <slot>{{ text }}</slot>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { LoaderTextProperties } from '~/src/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { headingTypes, themeOptions } from '~/src/consts/misc';

const properties = withDefaults(defineProps<LoaderTextProperties>(), {
  text: 'Loading',
  theme: 'light',
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.text, 'text', 'text-loader', true);
checkComponentPropertyValidity(properties.theme, 'theme', 'text-loader', true, themeOptions);
checkComponentPropertyValidity(properties.size, 'size', 'text-loader', true, [...headingTypes, 'default']);
/* eslint-enable max-len */

const elementTag = computed(() => {
  if (properties.size === 'default') {
    return 'p';
  }

  return `${properties.size}`;
});
</script>

<style lang="scss" scoped>
.jls-loader-text {
  &__text {
    &::after {
      content: '\2026';
      display: inline-block;
      width: 0;
      overflow: hidden;
      vertical-align: bottom;
      animation: ellipsis steps(4, end) 1.5s infinite;
    }
  }
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}
</style>
