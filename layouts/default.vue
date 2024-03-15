<template>
  <div class="nuxt-layout nuxt-layout--default">
    <app-particles v-if="mode === 'dark'" color="#cbcaca" />
    <app-particles v-if="mode === 'light'" color="#191727" />

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
