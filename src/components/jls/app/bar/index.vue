<template>
  <v-layout
    :class="[
      'jls-app-bar',
      { 'jls-app-bar--menu-open': openSidebar },
    ]"
  >
    <jls-app-menu
      v-model="openSidebar"
      :items="navItems"
      :logo-text="logoText"
      is-handwriting-font
      show-social-list
    />

    <v-app-bar prominent>
      <v-container>
        <jls-app-bar-logo :text="logoText" is-handwriting-font />

        <jls-app-nav v-if="!hideNav" :items="navItems" is-handwriting-font />

        <div class="jls-app-bar__actions">
          <jls-theme-switch
            :color-mode="colorMode"
            @theme-changed="toggleTheme"
          />

          <jls-language-switch :disabled="!languageSwitchEnabled" />

          <jls-hamburger
            :active="openSidebar"
            @toggled="onToggledSidebar"
          />
        </div>
      </v-container>
    </v-app-bar>
  </v-layout>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import type { AppBarProperties } from '@/interfaces/components/app.interface';

const properties = withDefaults(defineProps<AppBarProperties>(), {
  navItems: undefined,
  hideNav: false,
});

checkComponentPropertyValidity(properties.navItems, 'nav-items', 'app-bar', true); // eslint-disable-line max-len

const colorModeDefault = useColorMode();
const colorMode = computed(() => colorModeDefault.value === 'auto'
  ? 'dark'
  : colorModeDefault.value,
);
const runtimeConfig = useRuntimeConfig();
const { languageSwitchEnabled, logoText } = runtimeConfig.public;

const openSidebar = ref(false);

function onToggledSidebar(toggled: boolean): void {
  openSidebar.value = toggled;
}

function toggleTheme(): void {
  colorModeDefault.value = colorMode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style lang="scss">
.jls-app-bar {
  &__actions {
    @include flex(row nowrap, flex-end, center, spacing(4));
  }

  .v-app-bar.v-toolbar {
    left: 0 !important;
    z-index: $z-model + 10 !important;
    @include size(100dvw !important, 90px);
    margin: 0;
    box-shadow: 0 0 14px 0 rgba($color: $color-black, $alpha: 0.45);
    border-radius: 0 0 28px 28px;
    background-color: $color-primary-var;
    padding-top: spacing(4);
    transition:
      background-color ($animation-speed + 300ms),
      height 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      max-width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      left 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      right 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      top 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    .v-container {
      @include flex(row nowrap, space-between, center);
    }

    .c-navigation {
      display: none;

      &--sidebar {
        display: block;
      }
    }
  }

  &.jls-app-bar--menu-open {
    .v-app-bar.v-toolbar {
      box-shadow: none;
      background-color: transparent;
    }
  }
}
</style>
