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
import type { AppParticlesProperties } from '@/interfaces/components/app.interface'; // eslint-disable-line max-len

const runtimeConfig = useRuntimeConfig();
const { isDev } = runtimeConfig.public;

const properties = withDefaults(defineProps<AppParticlesProperties>(), {
  color: '#cbcaca',
  particlesCount: 100,
  enableLinks: false,
  disableMovement: false,
  minimumSize: 0.5,
  maximumSize: 4,
  minimumSpeed: 0.1,
  maximumSpeed: 0.5,
  minimumOpacity: 0.1,
  maximumOpacity: 0.4,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.color, 'color', 'app-particles', true);
checkComponentPropertyValidity(properties.particlesCount, 'particles-count', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumSize, 'minimum-size', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumSize, 'maximum-size', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumSpeed, 'minimum-speed', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumSpeed, 'maximum-speed', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumOpacity, 'minimum-opacity', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumOpacity, 'maximum-opacity', 'app-particles', true);
/* eslint-enabel max-len */

const particlesOptions = computed(() => {
  return {
    background: {
      color: {
        value: 'transparent',
      },
    },

    particles: {
      color: {
        value: properties.color,
      },

      links: {
        color: properties.color,
        enable: properties.enableLinks,
      },

      move: {
        enable: !properties.disableMovement,

        speed: {
          min: Number(properties.minimumSpeed),
          max: Number(properties.maximumSpeed),
        },
      },

      number: {
        value: Number(properties.particlesCount),
      },

      opacity: {
        value: {
          min: Number(properties.minimumOpacity),
          max: Number(properties.maximumOpacity),
        },
      },

      size: {
        value: {
          min: Number(properties.minimumSize),
          max: Number(properties.maximumSize),
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
