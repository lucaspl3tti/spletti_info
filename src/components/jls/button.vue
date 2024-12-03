<template>
  <v-btn
    :variant="variant"
    :color="color"
    :class="[
      'jls-btn',
      `jls-btn--${variant}`,
      theme !== 'none' ? `jls-btn--${theme}` : '',
      {
        'jls-btn--uneven': unevenBorder,
        'jls-btn--mirrored': mirrored,
        'jls-btn--prepend': hasPrependSlot,
        'jls-btn--append': hasAppendSlot,
        'jls-btn--icon': iconBtn,
        'v-btn--variant-text': variant === 'text',
      },
      nameClass,
      ...buttonCustomClasses,
    ]"
    :href="href"
    :to="to"
    :type="type"
    :density="density"
    :size="size"
    :block="block"
    :rounded="rounded"
    :ripple="ripple"
    :style="[width ? `width: ${width}px` : '']"
  >
    <template #prepend>
      <slot name="prepend"></slot>
    </template>

    <slot>
      {{ text }}
    </slot>

    <template #append>
      <slot name="append"></slot>
    </template>
  </v-btn>
</template>

<script setup lang="ts">
import type { ButtonProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import {
  densityOptions,
  sizeOptions,
  themeOptions,
  variantOptions,
} from '@/consts/misc';

const slots = useSlots();

const properties = withDefaults(defineProps<ButtonProperties>(), {
  text: undefined,
  classes: '',
  variant: 'elevated',
  theme: 'primary',
  name: undefined,
  width: undefined,
  color: '',
  href: undefined,
  to: undefined,
  type: undefined,
  density: 'default',
  size: '',
  block: false,
  rounded: undefined,
  elevation: 2,
  ripple: true,
  iconBtn: false,
  unevenBorder: false,
  mirrored: false,
});

/* eslint-disable max-len */
if (!variantOptions.includes(properties.variant)) {
  throw new Error(`The variant "${properties.variant}" is not valid for button component!`);
}

if (![...themeOptions, 'none'].includes(properties.theme)) {
  throw new Error(`The theme "${properties.theme}" is not valid for button component!`);
}

if (!densityOptions.includes(properties.density)) {
  throw new Error(`The density "${properties.density}" is not valid for button component!`);
}

if (!['', ...sizeOptions].includes(properties.size)) {
  throw new Error(`The size "${properties.size}" is not valid for button component!`);
}
/* eslint-enable max-len */

const buttonCustomClasses = computed(
  () => typeof properties.classes === 'string'
    ? [properties.classes] : properties.classes,
);

const nameClass = computed(
  () => properties.name ? `jls-btn--${properties.name}` : '',
);

const hasPrependSlot = computed(() => !!slots.prepend);
const hasAppendSlot = computed(() => !!slots.append);
</script>

<style lang="scss">
.jls-btn.v-btn {
  text-indent: 0;

  &:not(.jls-btn--text):not(.jls-btn--plain) {
    @include flex($justify: center, $align: center, $gap: spacing(2));
    min-width: 150px;
    height: 50px;
    border: 2px solid $color-black;
    border-radius: 8px;
    background-color: $color-black;
    padding: spacing(1.5) spacing(6);
    outline: 0;
    color: $color-white;
    font-size: map.get($font-sizes-copy, 'default', 'xs');
    line-height: map.get($font-sizes-copy, 'default', 'xs');
    font-weight: $font-weight-medium;
    letter-spacing: 0;
    text-transform: none;
    transition:
      border-radius 0.4s ease-out,
      border-color $animation-speed,
      background-color $animation-speed,
      color $animation-speed;

    .nuxt-icon {
      transition: transform 0.25s ease-in;
    }

    .v-btn__prepend,
    .v-btn__append,
    .v-btn__overlay,
    .v-btn__underlay {
      display: none;
    }

    &.jls-btn--prepend {
      .v-btn__prepend {
        display: block;
      }
    }

    &.jls-btn--append {
      .v-btn__append {
        display: block;
      }
    }

    &:hover:not(.jls-btn--icon) {
      border-color: color.adjust($color-black, $lightness: 4%);
      background-color: color.adjust($color-black, $lightness: 4%);

      .nuxt-icon {
        transform: translateX(spacing(2));
      }
    }

    &.jls-btn--outlined {
      border-color: $color-black;
      background-color: transparent;
      color: $color-black;

      &:hover {
        border-color: color.adjust($color-black, $lightness: 4%);
        background-color: transparent;
        color: color.adjust($color-black, $lightness: 4%);
      }
    }

    &.v-btn--size-x-small {
      height: 30px;
      padding: spacing(1) spacing(1.5);
      font-size: map.get($font-sizes-copy, 'smaller', 'xs');
    }

    &.v-btn--size-small {
      height: 40px;
      padding: spacing(1) spacing(2);
      font-size: map.get($font-sizes-copy, 'smaller', 'md');
    }

    &.v-btn--size-large {
      height: 60px;
      padding: spacing(2) spacing(4);
      font-size: map.get($font-sizes-copy, 'default', 'md');
    }

    &.v-btn--size-x-large {
      height: 70px;
      padding: spacing(3) spacing(6);
      font-size: map.get($font-sizes-copy, 'large', 'xs');
    }

    &.jls-btn--primary {
      border-color: $color-primary;
      background-color: $color-primary;
      color: $color-white;

      &:hover {
        border-color: color.adjust($color-primary, $lightness: -8%);
        background-color: color.adjust($color-primary, $lightness: -8%);
      }

      &.jls-btn--outlined {
        border-color: $color-primary;
        background-color: transparent;
        color: $color-primary;

        &:hover {
          border-color: color.adjust($color-primary, $lightness: -8%);
          color: color.adjust($color-primary, $lightness: -8%);
        }
      }
    }

    &.jls-btn--secondary {
      border-color: $color-orange-500;
      background-color: $color-orange-500;
      color: $color-white;

      &:hover {
        border-color: color.adjust($color-orange-500, $lightness: -12%);
        background-color: color.adjust($color-orange-500, $lightness: -12%);
      }

      &.jls-btn--outlined {
        border-color: $color-orange-500;
        background-color: transparent;
        color: $color-orange-500;

        &:hover {
          border-color: color.adjust($color-orange-500, $lightness: -12%);
          color: color.adjust($color-orange-500, $lightness: -12%);
        }
      }
    }

    &.jls-btn--light {
      border-color: $color-white;
      background-color: $color-white;
      color: $color-black;

      &:hover {
        border-color: color.adjust($color-white, $lightness: -30%);
        background-color: color.adjust($color-white, $lightness: -30%);
      }

      &.jls-btn--outlined {
        border-color: $color-white;
        background-color: transparent;
        color: $color-white;

        &:hover {
          border-color: color.adjust($color-white, $lightness: -30%);
          color: color.adjust($color-white, $lightness: -30%);
        }
      }
    }

    &.jls-btn--uneven {
      --jls-border-radius-uneven: 25px;

      border-radius: 0 var(--jls-border-radius-uneven);

      &:hover {
        border-radius: var(--jls-border-radius-uneven) 0;
      }

      &.jls-btn--mirrored {
        border-radius: var(--jls-border-radius-uneven) 0;

        &:hover:not(.jls-btn--icon) {
          border-radius: 0 var(--jls-border-radius-uneven);
        }
      }

      &.v-btn--size-x-small {
        --jls-border-radius-uneven: 15px;
      }

      &.v-btn--size-small {
        --jls-border-radius-uneven: 20px;
      }

      &.v-btn--size-large {
        --jls-border-radius-uneven: 30px;
      }

      &.v-btn--size-x-large {
        --jls-border-radius-uneven: 35px;
      }
    }

    &.jls-btn--icon {
      @include flex($justify: center, $align: center);
      @include size(50px);
      min-width: unset;
      border-radius: 50%;
      padding: 0;

      .nuxt-icon {
        margin-left: 0;
      }

      &:hover {
        .nuxt-icon {
          transform: scale(1.1);
        }
      }
    }
  }

  &.jls-btn--text {
    box-shadow: none;
    border: 8px;
    background: none !important;
    padding: spacing(2);
    color: $color-white !important;

    &:hover {
      .v-btn__overlay {
        opacity:
          calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier));
      }
    }
  }

  &.jls-btn--prepend {
    .v-btn__prepend {
      display: block;
    }
  }

  &.jls-btn--append {
    .v-btn__append {
      display: block;
    }
  }

  &.v-btn--rounded {
    border-radius: 50px !important;
  }
}
</style>
