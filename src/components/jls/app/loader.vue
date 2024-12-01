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
    <div class="app-loader__loader loader">
      <div
        v-for="number in 3"
        :key="`loader-circle-${number}`"
        class="loader__circle"
      >
        <div class="loader__circle-dot"></div>
        <div class="loader__circle-outline"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const loaderSpeed = 1500;
const animating = ref(false);
const active = ref(true);

onMounted(() => {
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

.loader {
  @include flex($justify: center, $align: center);
  @include size(100dvw, 100dvh);

  &__circle {
    position: relative;
    @include flex($justify: center, $align: center);
    @include size(20px);
    margin: 0 spacing(2.5);
    border: solid 2px $app-loader-color;
    border-radius: 50%;
    background-color: transparent;
    animation: circle-keys 2s ease-in-out infinite;

    &:nth-child(1) {
      .outline {
        animation-delay: 0.9s;
      }
    }

    &:nth-child(2) {
      animation-delay: 0.3s;

      .dot {
        animation-delay: 0.3s;
      }

      .outline {
        animation-delay: 1.2s;
      }
    }

    &:nth-child(3) {
      animation-delay: 0.6s;

      .dot {
        animation-delay: 0.6s;
      }

      .outline {
        animation-delay: 1.5s;
      }
    }

    &:nth-child(4) {
      animation-delay: 0.9s;

      .dot {
        animation-delay: 0.9s;
      }

      .outline {
        animation-delay: 1.8s;
      }
    }

    &:nth-child(5) {
      animation-delay: 1.2s;

      .dot {
        animation-delay: 1.2s;
      }

      .outline {
        animation-delay: 2.1s;
      }
    }

    &-dot {
      position: absolute;
      @include size(16px);
      border-radius: 50%;
      background-color: $app-loader-color;
      transform: translate(-50%, -50%);
      animation: dot-keys 2s ease-in-out infinite;
    }

    &-outline {
      position: absolute;
      @include size(20px);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: outline-keys 2s ease-in-out infinite;
    }
  }
}

@keyframes circle-keys {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dot-keys {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes outline-keys {
  0% {
    opacity: 1;
    outline: solid 20px $app-loader-color;
    outline-offset: 0;
    transform: scale(0);
  }

  100% {
    opacity: 0;
    outline: solid 0 transparent;
    outline-offset: 20px;
    transform: scale(1);
  }
}

</style>
