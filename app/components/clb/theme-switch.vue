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
      {{ tooltipText }}
    </clb-tooltip>
  </div>
</template>

<script setup lang="ts">
import { NativeEventEmitter } from '@helper/event-emitter.helper';
import type { ClbThemeSwitchProperties } from '@/interfaces/components/theme-switch.interface';
import type { ThemeIcon } from '@/types/misc.types';
import { useColorMode } from '@vueuse/core';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();
const colorModeStore = useColorMode().store;

const properties = withDefaults(defineProps<ClbThemeSwitchProperties>(), {
  colorMode: 'dark',
  id: undefined,
});

checkComponentPropertyValidity(properties.colorMode, 'color-mode', 'theme-switch', true, ['dark', 'light']);  // eslint-disable-line max-len
checkComponentPropertyValidity(properties.id, 'id', 'theme-switch', true);

const tooltipIsOpen = ref(false);
const tooltipText = ref('');
const themeIcon = computed<ThemeIcon>((): ThemeIcon => {
  return properties.colorMode === 'dark' ? 'moon-fill' : 'sun-fill';
});
const colorMode = computed(() => colorModeStore.value === 'auto' ? 'dark' : colorModeStore.value);

let emitter: InstanceType<typeof NativeEventEmitter>;
const emit = defineEmits(['theme-changed']);

tooltipText.value = await $trans(
  apiUrl,
  'general.toggleTheme.label',
  locale.value,
);

onMounted(() => {
  emitter = new NativeEventEmitter();
});

function toggleTheme(): void {
  emit('theme-changed');
  emitter.publish('theme-changed');
}
</script>
