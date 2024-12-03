<template>
  <component
    :is="headingType"
    :class="[
      'jls-heading',
      `jls-heading--${position}`,
      `jls-heading--${theme}`,
    ]"
  >
    <template v-if="!hideDot">
      <span class="heading__text">
        <slot>
          <span v-html="text" />
        </slot>
      </span>
      <span class="heading-dot">.</span>
    </template>

    <template v-else>
      <slot>
        <span v-html="text" />
      </slot>
    </template>
  </component>
</template>

<script setup lang="ts">
import type { HeadingProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { textPositionOptions, themeColorOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<HeadingProperties>(), {
  headingType: 'h1',
  text: '',
  position: 'left',
  theme: 'secondary',
  hideDot: false,
});

/* eslint-disable max-len */
if (!textPositionOptions.includes(properties.position)) {
  throw new Error(`The position "${properties.position}" is not valid for heading component!`);
}

if (!themeColorOptions.includes(properties.theme)) {
  throw new Error(`The theme "${properties.theme}" is not valid for heading component!`);
}
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-heading {
  text-align: left;

  .heading-dot {
    color: $color-secondary;
  }

  &--primary {
    .heading-dot {
      color: $color-purple-300;
    }
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }
}

@include light-mode {
  .jls-heading {
    &--primary {
      .heading-dot {
        color: $color-primary;
      }
    }
  }
}
</style>
