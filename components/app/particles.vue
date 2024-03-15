<template>
  <client-only>
    <Particles
      id="tsparticles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />
  </client-only>
</template>

<script setup>
import { loadStarsPreset } from 'tsparticles-preset-stars';

const runtimeConfig = useRuntimeConfig();
const { isDev } = runtimeConfig.public;

const properties = defineProps({
  color: {
    type: String,
    default: '#cbcaca',
  },
});

const particlesOptions = computed(() => {
  return {
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
  }
});

async function particlesInit(engine) {
  await loadStarsPreset(engine);
}

function particlesLoaded() {
  if (!isDev) return;
  console.log('Particles container loaded'); // eslint-disable-line
}
</script>
