<template>
  <div class="nuxt-layout nuxt-layout--default">
    <nuxt-loading-indicator />
    <jls-app-loader v-if="useAppLoader" />
    <!-- <jls-app-cursor /> -->

    <client-only>
      <jls-app-particles v-if="mode === 'dark'" color="#cbcaca" />
      <jls-app-particles v-if="mode === 'light'" color="#191727" />
    </client-only>

    <div class="jls-navigation">
      <jls-app-bar :nav-items="navItems" hide-nav />
    </div>

    <div class="page-content">
      <slot />
    </div>

    <div class="jls-footer">
      <jls-app-footer />
    </div>

    <jls-social-list />

    <jls-scroll-to-top />
  </div>
</template>

<script setup lang="ts">
import aosInit from '@/mixins/aos';
import { navItems } from '@/consts/nav-items';

const runtimeConfig = useRuntimeConfig();
const { useAppLoader } = runtimeConfig.public;

onMounted(() => {
  aosInit();
});

const { store } = useColorMode();
const mode = computed(() => store.value === 'auto' ? 'dark' : store.value);
</script>
