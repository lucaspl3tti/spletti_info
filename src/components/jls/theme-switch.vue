<template>
  <div class="jls-theme-switch">
    <jls-button variant="text" @click="toggleTheme">
      <jls-icon
        pack="bi"
        :name="themeIcon"
        size="24"
        color="currentColor"
      />

      <jls-tooltip text="Toggle Theme" theme="light" location="bottom" />
    </jls-button>
  </div>
</template>

<script setup lang="ts">
import { NativeEventEmitter } from '@/helper/event-emitter.helper';
import type { ThemeSwitchProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import type { ThemeIcon } from '@/types/misc.types';

const properties = withDefaults(defineProps<ThemeSwitchProperties>(), {
  colorMode: 'dark',
});

const themeIcon = computed<ThemeIcon>((): ThemeIcon => {
  return properties.colorMode === 'dark' ? 'moon-fill' : 'sun-fill';
});

let emitter: InstanceType<typeof NativeEventEmitter>;
const emit = defineEmits(['theme-changed']);

onMounted(() => {
  emitter = new NativeEventEmitter();
});

function toggleTheme(): void {
  emit('theme-changed');
  emitter.publish('theme-changed');
}
</script>
