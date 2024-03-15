<template>
  <div class="jls-theme-switch">
    <jls-button
      variant="text"
      @click="toggleTheme"
    >
      <jls-icon pack="bi" :name="themeIcon" size="24" color="currentColor" />
    </jls-button>
  </div>
</template>

<script setup>
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();
const themeIcon = computed(() => {
  return mode.value === 'dark' ? 'moon-fill' : 'sun-fill';
});

function toggleTheme () {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style lang="scss" scoped>

</style>
