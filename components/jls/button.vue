<template>
  <v-btn
    :color="color"
    :class="[
      'jls-btn',
      `jls-btn--${variant}`,
      theme !== 'none' ? `jls-btn--${theme}` : '',
      {
        'jls-btn--mirrored': mirrored,
        'jls-btn--prepend': hasPrependSlot,
        'jls-btn--append': hasAppendSlot,
        'jls-btn--icon': iconBtn,
        'v-btn--variant-text': variant === 'text',
      },
      nameClass,
      ...classes,
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

<script setup>
const slots = useSlots();

const properties = defineProps({
  text: {
    type: String,
    default: null,
  },
  classes: {
    type: Array,
    default: () => [],
  },
  mirrored: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'elevated',
    validator(value) {
      return [
        'elevated',
        'flat',
        'tonal',
        'outlined',
        'text',
        'plain',
      ].includes(value);
    },
  },
  theme: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary', 'none'].includes(value);
    },
  },
  name: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  density: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'compact', 'comfortable'].includes(value);
    },
  },
  size: {
    type: String,
    default: '',
    validator(value) {
      if (value === '') return true;
      return ['x-small', 'small', 'large', 'x-large'].includes(value);
    },
  },
  block: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: String,
    default: null,
    validator(value) {
      return ['xs', 'sm', 'lg', 'xl'].includes(value) || Number(value) >= 0;
    },
  },
  elevation: {
    type: String,
    default: '2',
    validator(value) {
      const number = Number(value);
      return number === 2 || (number >= 4 && number <= 24 && number % 4 === 0);
    },
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  iconBtn: {
    type: Boolean,
    default: false,
  },
});

const nameClass = computed(() => {
  return properties.name ? `jls-btn--${properties.name}` : '';
});

const hasPrependSlot = computed(() => !!slots.prepend);
const hasAppendSlot = computed(() => !!slots.append);
</script>

<style lang="scss">
.jls-btn.v-btn {
  &:not(.jls-btn--text) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    min-width: 150px;
    height: 50px;
    border: 0;
    border-radius: 0 25px;
    padding: 12px;
    background-color: $color-black;
    color: $color-white;
    font-size: 16px;
    font-weight: $font-weight-medium;
    letter-spacing: 0;
    text-transform: none;
    transition:
      border-radius 0.4s ease-out,
      background-color $animation-speed,
      color $animation-speed;
    outline: 0;

    .bi {
      margin-left: 4px;
      transition: transform 0.25s ease-in;
    }

    .v-btn__prepend {
      display: none;
    }

    .v-btn__append {
      display: none;
    }

    &:hover:not(.jls-btn--icon) {
      border-radius: 25px 0;
    }

    &.jls-btn--mirrored {
      border-radius: 25px 0;

      &:hover:not(.jls-btn--icon) {
        border-radius: 0 25px;
      }
    }
  }

  &:hover {
    .bi {
      transform: translateX(0.5rem);
    }
  }

  &.jls-btn--primary {
    background-color: $color-primary;
    color: $color-white;

    &:hover {
      background-color: darken($color-primary, 5%);

      .v-btn__overlay {
        opacity: 0;
      }
    }
  }

  &.jls-btn--secondary {
    background-color: $color-orange-500;
    color: $color-white;

    &:hover {
      background-color: darken($color-orange-500, 5%);

      .v-btn__overlay {
        opacity: 0;
      }
    }
  }

  &.jls-btn--text {
    border: 8px;
    padding: spacing(2);
    background: none;
    color: $color-white;
    box-shadow: none;
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

  &.jls-btn--icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    min-width: unset;
  }

  &.v-btn--rounded {
    border-radius: 50px;
  }
}
</style>
