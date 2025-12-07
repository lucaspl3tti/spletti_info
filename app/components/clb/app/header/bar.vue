<template>
  <b-navbar
    :class="[
      'clb-app-header-bar',
      { 'is-open': isOpenSidebar },
    ]"
    :container="true"
  >
    <clb-app-header-brand :text="logoText" is-handwriting-font />

    <div class="clb-app-header-bar__actions">
      <clb-theme-switch
        id="theme-switch-header-bar"
        :color-mode="colorMode"
        @theme-changed="toggleTheme"
      />

      <clb-app-header-language-switch v-if="languageSwitchEnabled" />

      <clb-app-header-hamburger
        :active="isOpenSidebar"
        @toggled="onToggledSidebar"
      />
    </div>
  </b-navbar>
</template>

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import type { ClbAppBarProperties } from '@/interfaces/base/app.interface';

const properties = withDefaults(defineProps<ClbAppBarProperties>(), {
  navItems: undefined,
  hideNav: false,
});

const emit = defineEmits(['toggle-sidebar']);

checkComponentPropertyValidity(properties.navItems, 'nav-items', 'app-bar');

const colorModeDefault = useColorMode();
const colorMode = computed(() => colorModeDefault.value === 'auto'
  ? 'dark'
  : colorModeDefault.value,
);
const runtimeConfig = useRuntimeConfig();
const { languageSwitchEnabled, logoText } = runtimeConfig.public;

const isOpenSidebar = ref(false);

function onToggledSidebar(toggled: boolean): void {
  isOpenSidebar.value = toggled;
  emit('toggle-sidebar', isOpenSidebar.value);
}

function toggleTheme(): void {
  colorModeDefault.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style lang="scss">
.clb-app-header-bar {
  @include position(fixed, $top: auto, $bottom: 0, $left: 0, $zIndex: $z-sticky + 10 !important);
  @include size(100dvw !important, $app-header-height);
  box-shadow: 0 0 14px 0 rgba($color: $color-black, $alpha: 0.45);
  border-radius: 28px 28px 0 0;
  background-color: $color-primary-var;
  padding-top: spacing(4);
  transition:
    height 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    right 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    top 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.is-open {
    box-shadow: none;
  }

  &__actions {
    @include flex(row nowrap, flex-end, center, spacing(4));
  }
}

@include tablet-up {
  .clb-app-header-bar {
    top: 0;
    bottom: auto;
    border-radius: 0 0 28px 28px;
  }
}
</style>
