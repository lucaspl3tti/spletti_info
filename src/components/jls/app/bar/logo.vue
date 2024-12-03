<template>
  <v-app-bar-title class="jls-app-bar-logo">
    <jls-link
      to="/"
      theme="light"
      :class="[
        'nav-logo',
        'h1',
        'mb-0',
        { 'handwriting-font': isHandwritingFont },
      ]"
      no-underline
    >
      {{ text }}<span v-if="!hideDot" class="heading-dot">.</span>
    </jls-link>
  </v-app-bar-title>
</template>

<script setup lang="ts">
import type { AppBarLogoProperties } from '@/interfaces/components/app.interface'; // eslint-disable-line max-len

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<AppBarLogoProperties>(), {
  text: '',
  isHandwritingFont: false,
  hideDot: false,
});
</script>

<style lang="scss">
.jls-app-bar .jls-app-bar-logo {
  @include flex(row nowrap);
  place-items: center;
  align-self: center;
  height: 55px;
  border-radius: 25px;
  padding: spacing(1) spacing(5);
  padding-left: 0;
  color: $color-white;
  font-size: map.get($font-sizes-heading, 'md', 4);

  &:hover {
    color: color.adjust($color-white, $lightness: -10%);
  }

  .v-toolbar-title__placeholder {
    overflow: visible;
    white-space: unset;
    text-overflow: unset;
  }
}

.nav-logo {
  color: inherit !important;
}

@include tablet-portrait-up {
  .jls-app-bar .jls-app-bar-logo {
    box-shadow: none;
    font-size: 38px;
  }
}
</style>
