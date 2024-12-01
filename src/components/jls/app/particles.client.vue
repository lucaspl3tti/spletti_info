<template>
  <client-only>
    <vue-particles
      id="tsparticles"
      :particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />
  </client-only>
</template>

<script setup lang="ts">
import type { AppParticlesProperties } from '@/interfaces/components/app.interface'; // eslint-disable-line max-len

const runtimeConfig = useRuntimeConfig();
const { isDev } = runtimeConfig.public;

const properties = withDefaults(defineProps<AppParticlesProperties>(), {
  color: '#cbcaca',
});

const particlesOptions = computed<Record<string, unknown>>(() => {
  const options: Record<string, unknown> = {
    preset: 'stars',
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      number: {
        value: 50,
      },
      color: {
        value: properties.color,
      },
      shape: {
        stroke: {
          width: 0,
          color: properties.color,
        },
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

  return options;
});

function particlesLoaded(): void {
  if (!isDev) {
    return;
  }

  console.log('Particles container loaded'); // eslint-disable-line no-console
}
</script>
