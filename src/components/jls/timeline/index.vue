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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<TimelineProperties>(), {
  align: 'center',
  direction: 'vertical',
  lineColor: undefined,
  lineThickness: undefined,
  side: undefined,
  truncateLine: undefined,
});
</script>
