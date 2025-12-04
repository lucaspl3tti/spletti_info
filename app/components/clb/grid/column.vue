<template>
  <b-col class="clb-grid-column">
    <slot></slot>
  </b-col>
</template>

<script lang="ts" setup>
import type { ClbGridColumnProperties } from '@/interfaces/base/grid.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<ClbGridColumnProperties>(), {
  alignSelf: undefined,
  col: false,
  cols: undefined,
  offset: undefined,
  order: undefined,
  tag: 'div',
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xxl: false,
  offsetLg: undefined,
  offsetMd: undefined,
  offsetSm: undefined,
  offsetXl: undefined,
  offsetXxl: undefined,
  orderLg: undefined,
  orderMd: undefined,
  orderSm: undefined,
  orderXl: undefined,
  orderXxl: undefined,
});
</script>
