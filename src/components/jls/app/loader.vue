<template>
  <div
    :class="[
      'app-loader',
      {
        'app-loader--active': active,
        'app-loader--animating': animating,
      },
    ]"
  >
    <jls-loader-dots variant="jumping" size="default" />
  </div>
</template>

<script setup lang="ts">
import { NativeEventEmitter } from '@/helper/event-emitter.helper';

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
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
    if (route.path === 'linktree') {
      return;
    }

    active.value = true;
    hideLoader();
  },
);

async function hideLoader() {
  await sleep(loaderSpeed);
  animating.value = true;
  await sleep(330);
  animating.value = false;
  active.value = false;
  emitter.publish('app-loaded');
}
</script>

<style lang="scss">
body:has(.app-loader--active) {
  overflow: hidden;

  .jls-navigation,
  .page-content,
  .jls-footer,
  .jls-social-list,
  .jls-scroll-to-top {
    display: none;
  }
}

.app-loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
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
