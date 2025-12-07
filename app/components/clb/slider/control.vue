<template>
  <clb-button
    :class="[
      'clb-slider__control',
      `clb-slider__control--${type}`,
      { 'disabled': disabled }
    ]"
    :theme="theme"
    :variant="variant"
    border-style="rounded"
    is-icon-btn
  >
    <clb-icon
      :name="controlIcon"
      pack="bi"
      size="24"
      color="currentColor"
    />
  </clb-button>
</template>

<script lang="ts" setup>
import type { ClbSliderControlProperties } from '@/interfaces/components/slider.interface';

const properties = withDefaults(defineProps<ClbSliderControlProperties>(), {
  type: undefined,
  disabled: false,
  theme: 'primary',
  variant: 'default',
});

checkComponentPropertyValidity(properties.type, 'type', 'slider-item', true, ['prev', 'next']);

const controlIcon = computed(() => {
  return properties.type === 'prev' ? 'arrow-left' : 'arrow-right';
});
</script>
