<template>
  <client-only>
    <jls-app-particles
      :color="color"
      particles-count="80"
    />
  </client-only>
</template>

<script setup lang="ts">
import type { LinktreeParticlesProperties } from '@/interfaces/components/linktree.interface'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<LinktreeParticlesProperties>(), {
  color: '#cbcaca',
});

checkComponentPropertyValidity(properties.color, 'color', 'app-particles', true); // eslint-disable-line max-len
</script>
