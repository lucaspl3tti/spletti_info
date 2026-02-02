<template>
  <div :id="id" class="clb-theme-switch">
    <clb-button
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
import NativeEventEmitter from '@helper/event-emitter.helper';
import type { ClbThemeSwitchProperties } from '@/interfaces/components/theme-switch.interface';
import type { ClbThemeIcon } from '@/types/misc.types';
import { useColorMode } from '@vueuse/core';

const properties = withDefaults(defineProps<ClbThemeSwitchProperties>(), {
  id: undefined,
});

checkComponentPropertyValidity(properties.id, 'id', 'theme-switch', true);

const { store: colorModeStore } = useColorMode();
const colorMode = computed(() => colorModeStore.value === 'auto' ? 'dark' : colorModeStore.value);

const tooltipIsOpen = ref(false);
const themeIcon = computed<ClbThemeIcon>(() => {
  return colorMode.value === 'dark' ? 'moon-fill' : 'sun-fill';
});

let emitter: InstanceType<typeof NativeEventEmitter>;
const emit = defineEmits(['theme-changed']);

onMounted(() => {
  emitter = new NativeEventEmitter();
});

function toggleTheme(): void {
  colorModeStore.value = colorMode.value === 'dark' ? 'light' : 'dark';

  emit('theme-changed');
  emitter.publish('theme-changed');
}
</script>
