import Particles from '@tsparticles/vue3';
import { loadStarsPreset } from '@tsparticles/preset-stars';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Particles, {
    init: async (engine) => {
      await loadStarsPreset(engine);
    },
  });
});
