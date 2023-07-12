<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="particlesOptions"
  />
</template>

<script setup>
import { loadFull } from 'tsparticles'

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#000',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.2,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#808080',
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: {
        enable: false,
        mode: 'repulse',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
    },
    modes: {
      repulse: {
        distance: 70,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
}

async function particlesInit(engine) {
  await loadFull(engine)
}

async function particlesLoaded() {
  console.log('Particles container loaded')
}
</script>
