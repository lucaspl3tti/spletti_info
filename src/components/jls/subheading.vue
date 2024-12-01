<template>
  <p :class="['jls-subheading', `text-${position}`]">
    <span v-if="!isHtml">
      {{ text }}
    </span>

    <span v-else v-html="text" />
  </p>
</template>

<script setup lang="ts">
import type { SubheadingProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { textPositionOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<SubheadingProperties>(), {
  text: undefined,
  isHtml: false,
  position: 'left',
});

/* eslint-disable max-len */
if (!textPositionOptions.includes(properties.position)) {
  throw new Error(`The position "${properties.position}" is not valid for subheading component!`);
}
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-subheading {
  margin-bottom: spacing(2);
  font-family: $font-handwriting !important;
  font-size: map.get($font-sizes-copy, 'large', 'xl') !important;
  font-weight: $font-weight-medium !important;
}

@include tablet-up {
  .jls-subheading {
    font-size: map.get($font-sizes-heading, 'xs', '2') !important;
  }
}
</style>
