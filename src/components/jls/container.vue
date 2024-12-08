<template>
  <v-container :class="['jls-container', `jls-container--${size}`]">
    <slot />
  </v-container>
</template>

<script setup lang="ts">
import type { ContainerProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { sizeOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<ContainerProperties>(), {
  size: 'default',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.size, 'size', 'card', true, [...sizeOptions, 'default']);
/* eslint-enable max-len */
</script>

<style lang="scss">
@include tablet-portrait-up {
  .jls-container {
    --container-max-width-desktop: 1100px !important;
    --container-max-width-desktop-md: 1250px !important;
    --container-padding-mobile: #{spacing(4)} #{spacing(17.5)};
    --container-padding-desktop-md: #{spacing(4)};
    padding: var(--container-padding-mobile) !important;

    &--x-small {
      --container-max-width-desktop: 1200px !important;
      --container-max-width-desktop-md: 1350px !important;
      --container-padding-mobile: #{spacing(2)} #{spacing(5.5)};
      --container-padding-desktop-md: #{spacing(2)};
    }

    &--small {
      --container-max-width-desktop: 1150px !important;
      --container-max-width-desktop-md: 1300px !important;
      --container-padding-mobile: #{spacing(4)} #{spacing(12.5)};
      --container-padding-desktop-md: #{spacing(4)};
    }

    &--large {
      --container-max-width-desktop: 1050px !important;
      --container-max-width-desktop-md: 1150px !important;
      --container-padding-mobile: #{spacing(6)} #{spacing(18.5)};
      --container-padding-desktop-md: #{spacing(6)};
    }

    &--x-large {
      --container-max-width-desktop: 1000px !important;
      --container-max-width-desktop-md: 1100px !important;
      --container-padding-mobile: #{spacing(8)} #{spacing(20.5)};
      --container-padding-desktop-md: #{spacing(8)};
    }
  }
}

@include desktop-up {
  .jls-container {
    max-width: var(--container-max-width-desktop) !important;
  }
}

@include desktop-medium-up {
  .jls-container {
    max-width: var(--container-max-width-desktop-md) !important;
    padding: var(--container-padding-desktop-md) !important;
  }
}
</style>
