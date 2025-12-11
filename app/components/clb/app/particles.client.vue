<template>
  <client-only>
    <Particles
      v-if="showParticles"
      id="tsparticles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="particlesOptions"
    />
  </client-only>
</template>

<script setup lang="ts">
import type { ClbAppParticlesProperties } from '@/interfaces/base/app.interface';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import Utilities from '@helper/utilities.helper';

const runtimeConfig = useRuntimeConfig();
const { isDev } = runtimeConfig.public;
const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();

const properties = withDefaults(defineProps<ClbAppParticlesProperties>(), {
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

checkComponentPropertyValidity(properties.color, 'color', 'app-particles', true);
checkComponentPropertyValidity(properties.particlesCount, 'particles-count', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumSize, 'minimum-size', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumSize, 'maximum-size', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumSpeed, 'minimum-speed', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumSpeed, 'maximum-speed', 'app-particles', true);
checkComponentPropertyValidity(properties.minimumOpacity, 'minimum-opacity', 'app-particles', true);
checkComponentPropertyValidity(properties.maximumOpacity, 'maximum-opacity', 'app-particles', true);

const showParticles = ref(true);
const isMobile = computed(() => {
  return activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm';
});
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

watch(() => properties.color, () => {
  initParticles();
});

watch(() => isMobile.value, () => {
  initParticles();
});

async function initParticles() {
  showParticles.value = false;
  await Utilities.delay(100);
  showParticles.value = true;
};

async function particlesInit(engine: any): Promise<void> {
  await loadStarsPreset(engine);
}

function particlesLoaded() {
  if (!isDev) {
    return;
  }

  console.log('Particles container loaded'); // eslint-disable-line no-console
}
</script>
