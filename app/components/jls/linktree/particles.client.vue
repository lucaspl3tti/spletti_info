<template>
  <client-only>
    <clb-app-particles
      :color="color"
      particles-count="80"
    />
  </client-only>
</template>

<script setup lang="ts">
import type { JlsLinktreeParticlesProperties } from '@/interfaces/content/linktree.interface';

const properties = withDefaults(defineProps<JlsLinktreeParticlesProperties>(), {
  color: '#cbcaca',
});

checkComponentPropertyValidity(properties.color, 'color', 'app-particles', true);
</script>
