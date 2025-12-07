<template>
  <b-col
    class="clb-grid-column"
    :align-self="alignSelf"
    :col="col"
    :cols="cols"
    :offset="offset"
    :order="order"
    :tag="tag"
    :lg="lg"
    :md="md"
    :sm="sm"
    :xl="xl"
    :xxl="xxl"
    :offset-lg="offsetLg"
    :offset-md="offsetMd"
    :offset-sm="offsetSm"
    :offset-xl="offsetXl"
    :offset-xxl="offsetXxl"
    :order-lg="orderLg"
    :order-md="orderMd"
    :order-sm="orderSm"
    :order-xl="orderXl"
    :order-xxl="orderXxl"
  >
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
