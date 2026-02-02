<template>
  <img
    :class="[
      'clb-image',
      {
        'float-start': properties.placement === 'start',
        'float-end': properties.placement === 'end',
        'mx-auto': properties.placement === 'center',
        'img-thumbnail': properties.thumbnail,
        'img-fluid': !properties.isNotFluid || properties.fluidGrow,
        'w-100': properties.fluidGrow,
        'rounded': typeof properties.rounded === 'boolean' && properties.rounded,
        'rounded-circle': properties.rounded === 'circle',
      },
    ]"
    :src="src"
    :alt="alt"
    :height="computedDimentions.height || undefined"
    :loading="lazy ? 'lazy' : 'eager'"
    :sizes="computedSizes"
    :srcset="computedSrcset"
    :width="computedDimentions.width || undefined"
  />
</template>

<script lang="ts" setup>
import type { ClbImageProperties } from '@/interfaces/components/image.interface';
import { useToNumber } from '@vueuse/core';

const properties = withDefaults(defineProps<ClbImageProperties>(), {
  src: undefined,
  alt: undefined,
  fluidGrow: false,
  height: undefined,
  isNotFluid: false,
  lazy: false,
  placement: undefined,
  rounded: false,
  srcset: undefined,
  sizes: undefined,
  thumbnail: false,
  width: undefined,
});

checkComponentPropertyValidity(properties.src, 'src', 'image', true);

const heightNumber = useToNumber(() => properties.height ?? Number.NaN);
const widthNumber = useToNumber(() => properties.width ?? Number.NaN);

const computedSrcset = computed(() => {
  if (!properties.srcset) {
    return undefined;
  }

  return typeof properties.srcset === 'string'
    ? properties.srcset
    : Array.isArray(properties.srcset)
      ? (properties.srcset as string[]).filter((srcItem) => srcItem).join(',')
      : undefined;
});

const computedSizes = computed(() => {
  if (!properties.sizes) {
    return undefined;
  }

  return typeof properties.sizes === 'string'
    ? properties.sizes
    : Array.isArray(properties.sizes)
      ? (properties.sizes as string[]).filter((sizeItem) => sizeItem).join(',')
      : undefined;
});

const computedDimentions = computed<{height: number | undefined; width: number | undefined}>(() => {
  const width = Number.isNaN(widthNumber.value) ? undefined : widthNumber.value;
  const height = Number.isNaN(heightNumber.value) ? undefined : heightNumber.value;

  return {
    width,
    height,
  };
});
</script>
