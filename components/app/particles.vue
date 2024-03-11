<template>
  <Particles
    id="tsparticles"
    :particles-init="particlesInit"
    :particles-loaded="particlesLoaded"
    :options="particlesOptions"
  />
</template>

<script setup>
import { loadStarsPreset } from 'tsparticles-preset-stars';

let particlesOptions = {
  preset: 'stars',
};

particlesOptions = {
  ...particlesOptions,
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
      value: '#cbcaca',
    },
    shape: {
      stroke: {
        width: 0,
        color: '#cbcaca',
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

async function particlesInit(engine) {
  await loadStarsPreset(engine);
}

function particlesLoaded() {
  console.log('Particles container loaded'); // eslint-disable-line
}
</script>
