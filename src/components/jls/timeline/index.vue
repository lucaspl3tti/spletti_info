<template>
  <v-timeline
    class="jls-timeline"
    :align="align"
    :direction="direction"
    :line-color="lineColor"
    :line-thickness="lineThickness"
    :side="side"
    :truncate-line="truncateLine"
  >
    <slot />
  </v-timeline>
</template>

<script setup lang="ts">
import type { TimelineProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len


const properties = withDefaults(defineProps<TimelineProperties>(), {
  align: 'center',
  direction: 'vertical',
  lineColor: undefined,
  lineThickness: undefined,
  side: undefined,
  truncateLine: undefined,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.align, 'align', 'timeline', true, ['start', 'center']);
checkComponentPropertyValidity(properties.direction, 'direction', 'timeline', true, ['horizontal', 'vertical']);
checkComponentPropertyValidity(properties.side, 'side', 'timeline', false, ['start', 'end']);
checkComponentPropertyValidity(properties.truncateLine, 'truncate-line', 'timeline', true, ['align', 'end', 'both']);
/* eslint-enable max-len */
</script>

<style lang="scss">
@include desktop-up {
  .jls-timeline {
    &.v-timeline--vertical.v-timeline--justify-auto {
      grid-template-columns:
        calc(50% - 16px) min-content calc(50% - 16px) !important;
    }
  }
}
</style>
