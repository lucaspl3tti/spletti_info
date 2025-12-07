import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRouterStore = defineStore('routerStore', () => {
  const isHardReload = ref(false);

  function setHardReload(value: boolean) {
    isHardReload.value = value;
  }

  return { isHardReload, setHardReload };
});
