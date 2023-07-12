<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesOptions"
  />
</template>

<script setup>
import { loadStarsPreset } from 'tsparticles-preset-stars'

let particlesOptions = {
  preset: 'stars',
}

particlesOptions = {
  ...particlesOptions,
  background: {
    color: {
      value: 'transparent',
    },
  },
  particles: {
    color: {
      value: '#000',
    },
    shape: {
      stroke: {
        width: 0,
        color: '#fff',
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

async function particlesInit(engine) {
  await loadStarsPreset(engine)
}

const particlesLoaded = async () => {
  console.log('Particles container loaded')
}
</script>
