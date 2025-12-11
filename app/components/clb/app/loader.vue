<template>
  <div
    :class="[
      'clb-app-loader',
      {
        'clb-app-loader--active': active,
        'clb-app-loader--animating': animating,
      },
    ]"
  >
    <!-- <clb-loader-dots variant="jumping" size="md" /> -->
     <!-- <clb-loader-text text="Loading" /> -->

     <clb-loader-shapes />
  </div>
</template>

<script setup lang="ts">
import NativeEventEmitter from '@helper/event-emitter.helper';
import { useRouterStore } from '@/stores/router.store';

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const routerStore = useRouterStore();
const { appLoaderSpeed } = runtimeConfig.public;
const loaderSpeed = appLoaderSpeed || 1500;
const animating = ref(false);
const active = ref(true);
let emitter: InstanceType<typeof NativeEventEmitter>;

onMounted(() => {
  emitter = new NativeEventEmitter();
  hideLoader();
});

watch(
  () => route.path,
  () => {
    if (routerStore.isHardReload) {
      return routerStore.setHardReload(false);
    }

    if (route.path === 'linktree') {
      return;
    }

    active.value = true;
    hideLoader();
  },
);

async function hideLoader() {
  await delay(loaderSpeed);
  animating.value = true;
  await delay(330);
  animating.value = false;
  active.value = false;
  emitter.publish('app-loaded');
}
</script>

<style lang="scss">
body:has(.clb-app-loader--active) {
  overflow: hidden;

  .clb-navigation,
  .page-content,
  .clb-footer,
  .clb-social-list,
  .clb-scroll-to-top {
    display: none;
  }
}

.clb-app-loader {
  @include position(absolute, $top: 0, $left: 0, $zIndex: 99999);
  display: none !important;
  justify-content: center;
  align-items: center;
  @include size(100dvw, 100dvh);
  background-color: $app-loader-background-color;
  transition: opacity $animation-speed;

  &--animating {
    opacity: 0;
  }

  &--active {
    display: flex !important;
  }
}
</style>
