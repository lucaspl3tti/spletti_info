import { vBTooltip } from 'bootstrap-vue-next';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('b-tooltip', vBTooltip);
});
