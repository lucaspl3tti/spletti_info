<template>
  <div class="nuxt-layout nuxt-layout--default">
    <nuxt-loading-indicator />
    <clb-app-loader v-if="useAppLoader" />

    <client-only>
      <clb-app-particles
        :color="particlesColor"
        :particles-count="particlesCount"
      />
    </client-only>

    <div class="clb-navigation">
      <clb-app-header-bar
        :nav-items="navItems"
        hide-nav
        @toggle-sidebar="onToggledSidebar"
      />

      <div class="clb-app-menu">
        <clb-app-menu-layer
          v-model="isOpenSidebar"
          :items="navItems"
          is-handwriting-font
          show-social-list
        />
      </div>
    </div>


    <div class="page-content">
      <slot />
    </div>

    <clb-app-footer />
    <clb-social-list />
    <clb-scroll-to-top />
  </div>
</template>

<script setup lang="ts">
// import aosInit from '@/mixins/aos';
import type { ClbNavItem } from '@/interfaces/base/app.interface';
import { useColorMode } from '@vueuse/core';
import { useTranslationsStore } from '@/stores/translations.store';
import { useNavItemsStore } from '@/stores/nav-items.store';

const runtimeConfig = useRuntimeConfig();
const { apiUrl, useAppLoader } = runtimeConfig.public;
const { locale } = useI18n();
const translationsStore = useTranslationsStore();
const navItemsStore = useNavItemsStore();
const navItems = ref<ClbNavItem[]>([]);
await translationsStore.loadTranslations(apiUrl, locale.value);
navItems.value = navItemsStore.getItems();

const colorModeStore = useColorMode().store;
const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();

// onMounted(() => {
//   aosInit();
// });

const isOpenSidebar = ref(false);
const colorMode = computed(() => colorModeStore.value === 'auto' ? 'dark' : colorModeStore.value);
const isMobile = computed(() => {
  return activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm';
});

const particlesColor = computed(() => colorMode.value === 'dark'
  ? '#cbcaca'
  : '#777',
);
const particlesCount = computed(() => !isMobile.value ? 100 : 80);

function onToggledSidebar(toggled: boolean): void {
  isOpenSidebar.value = toggled;
}
</script>
