<template>
  <v-timeline-item
    class="jls-timeline-item"
    :dot-color="dotColor"
    :fill-dot="fillDot"
  >
    <template #opposite>
      <slot name="opposite" />
    </template>

    <slot />
  </v-timeline-item>
</template>

<script setup lang="ts">
import type { TimelineItemProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<TimelineItemProperties>(), {
  dotColor: undefined,
  fillDot: false,
});
</script>
