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
checkComponentPropertyValidity(properties.theme, 'theme', 'tooltip', true, themeBasicOptions);
checkComponentPropertyValidity(properties.location, 'location', 'tooltip', true, ['top', 'bottom', 'start', 'end']);
/* eslint-enable max-len */
</script>
