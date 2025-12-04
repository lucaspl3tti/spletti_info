<template>
  <b-img
    class="clb-image"
    :src="src"
    :alt="alt"
    :fluid="!isNotFluid && !fluidGrow"
    :fluid-grow="!isNotFluid && fluidGrow"
    :lazy="lazy"
    :placement="placement"
    :rounded="rounded"
    :srcset="srcset"
    :sizes="sizes"
    :thumbnail="thumbnail"
  />
</template>

<script lang="ts" setup>
import type { ClbImageProperties } from '@/interfaces/components/image.interface';

const properties = withDefaults(defineProps<ClbImageProperties>(), {
  src: undefined,
  alt: undefined,
  fluidGrow: false,
  isNotFluid: false,
  lazy: false,
  placement: undefined,
  rounded: false,
  srcset: undefined,
  sizes: undefined,
  thumbnail: false,
});

checkComponentPropertyValidity(properties.src, 'src', 'image', true);
</script>

<!-- <style>

</style> -->
