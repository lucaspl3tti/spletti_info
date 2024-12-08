<template>
  <client-only>
    <nuxt-particles
      id="tsparticles"
      :options="particlesOptions"
      @load="particlesLoaded"
    />
  </client-only>
</template>

<script setup lang="ts">
import type { LinktreeParticlesProperties } from '@/interfaces/components/linktree.interface'; // eslint-disable-line max-len

const runtimeConfig = useRuntimeConfig();
const { isDev } = runtimeConfig.public;

const properties = withDefaults(defineProps<LinktreeParticlesProperties>(), {
  color: '#cbcaca',
});

checkComponentPropertyValidity(properties.color, 'color', 'app-particles', true); // eslint-disable-line max-len

const particlesOptions = computed(() => {
  return {
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: properties.color,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.4,
        },
      },
      size: {
        value: {
          min: 0.5,
          max: 4,
        },
      },
    },
    retina_detect: true,
  };
});

function particlesLoaded(): void {
  if (!isDev) {
    return;
  }

  console.log('Particles container loaded'); // eslint-disable-line no-console
}
</script>
