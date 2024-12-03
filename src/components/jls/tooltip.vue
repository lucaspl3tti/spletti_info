<template>
  <v-tooltip activator="parent" :theme="theme" :location="location">
    {{ text }}
  </v-tooltip>
</template>

<script setup lang="ts">
import type { TooltipProperties } from '@/interfaces/components/misc.interface';
import { themeBasicOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<TooltipProperties>(), {
  text: undefined,
  theme: 'light',
  location: 'bottom',
});

/* eslint-disable max-len */
if (!themeBasicOptions.includes(properties.theme)) {
  throw new Error(`The heading theme "${properties.theme}" is not valid for tooltip component!`);
}

if (!['top', 'bottom', 'start', 'end'].includes(properties.location)) {
  throw new Error(`The text location "${properties.location}" is not valid for tooltip component!`);
}
/* eslint-enable max-len */
</script>
