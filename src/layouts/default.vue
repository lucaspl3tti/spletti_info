<template>
  <div class="nuxt-layout nuxt-layout--default">
    <nuxt-loading-indicator />
    <jls-app-loader v-if="useAppLoader" />
    <!-- <jls-app-cursor /> -->

    <client-only>
      <jls-app-particles
        :color="particlesColor"
        :particles-count="particlesCount"
      />
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
import { useColorMode } from '@vueuse/core';

const runtimeConfig = useRuntimeConfig();
const { useAppLoader } = runtimeConfig.public;
const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();

onMounted(() => {
  aosInit();
});

const { store } = useColorMode();
const mode = computed(() => store.value === 'auto' ? 'dark' : store.value);
const isMobile = computed(() => {
  return activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm';
});

const particlesColor = computed(() => mode.value === 'dark'
  ? '#cbcaca'
  : '#191727',
);
const particlesCount = computed(() => !isMobile.value ? 100 : 80);
</script>
