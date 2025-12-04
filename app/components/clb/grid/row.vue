<template>
  <b-row class="clb-grid-row">
    <slot></slot>
  </b-row>
</template>

<script lang="ts" setup>
import type { ClbGridRowProperties } from '@/interfaces/base/grid.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<ClbGridRowProperties>(), {
  tag: 'div',
  gutterX: undefined,
  gutterY: undefined,
  noGutters: false,
  alignV: undefined,
  alignH: undefined,
  alignContent: undefined,
  cols: undefined,
  colsLg: undefined,
  colsMd: undefined,
  colsSm: undefined,
  colsXl: undefined,
  colsXxl: undefined,
});
</script>
