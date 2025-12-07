<template>
  <div class="clb-theme-switch">
    <clb-button
      :id="id"
      theme="light"
      variant="text"
      :icon="{
        name: themeIcon,
        pack: 'bi',
        size: '24',
        color: 'currentColor',
      }"
      is-icon-btn
      @click="toggleTheme"
    />

    <clb-tooltip
      v-model="tooltipIsOpen"
      :target="id"
      placement="bottom"
      :theme="colorMode"
    >
      {{ $trans('general.toggleTheme.label') }}
    </clb-tooltip>
  </div>
</template>

<script setup lang="ts">
import { NativeEventEmitter } from '@helper/event-emitter.helper';
import type { ClbThemeSwitchProperties } from '@/interfaces/components/theme-switch.interface';
import type { ClbThemeIcon } from '@/types/misc.types';
import { useColorMode } from '@vueuse/core';

const colorModeStore = useColorMode().store;

const properties = withDefaults(defineProps<ClbThemeSwitchProperties>(), {
  colorMode: 'dark',
  id: undefined,
});

checkComponentPropertyValidity(properties.colorMode, 'color-mode', 'theme-switch', true, ['dark', 'light']);  // eslint-disable-line max-len
checkComponentPropertyValidity(properties.id, 'id', 'theme-switch', true);

const tooltipIsOpen = ref(false);
const themeIcon = computed<ClbThemeIcon>(() => {
  return properties.colorMode === 'dark' ? 'moon-fill' : 'sun-fill';
});
const colorMode = computed(() => colorModeStore.value === 'auto' ? 'dark' : colorModeStore.value);

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
