import Particles from 'vue3-particles';

declare module 'vue3-particles';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Particles);
});
