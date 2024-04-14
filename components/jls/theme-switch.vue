<template>
  <div class="jls-theme-switch">
    <v-tooltip text="Toggle Theme" theme="light" location="bottom">
      <template #activator="{ props }">
        <jls-button variant="text" v-bind="props" @click="toggleTheme">
          <jls-icon
            pack="bi"
            :name="themeIcon"
            size="24"
            color="currentColor"
          />
        </jls-button>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup>
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();
const themeIcon = computed(() => {
  return mode.value === 'dark' ? 'moon-fill' : 'sun-fill';
});

function toggleTheme() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}
</script>

<style lang="scss" scoped></style>
