<template>
  <div>
    <seo-kit />

    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>

    <!-- <jls-mouse-glow /> -->
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
