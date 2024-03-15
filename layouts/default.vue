<template>
  <div class="nuxt-layout nuxt-layout--default">
    <app-particles />

    <div class="jls-navigation">
      <app-navbar />
    </div>

    <div class="page-content">
      <slot />
    </div>

    <div class="jls-footer">
      <app-footer />
    </div>

    <jls-social-list />

    <jls-scroll-to-top />

    <nuxt-loading-indicator />
  </div>
</template>

<script setup>
const { store } = useColorMode();
const mode = computed(() => store.value === 'auto' ? 'dark' : store.value); // eslint-disable-line
</script>
