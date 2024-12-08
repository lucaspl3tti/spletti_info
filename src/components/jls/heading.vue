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
import {
  headingTypes,
  textPositionOptions,
  themeColorOptions,
} from '@/consts/misc';

const properties = withDefaults(defineProps<HeadingProperties>(), {
  headingType: 'h1',
  text: '',
  position: 'left',
  theme: 'secondary',
  hideDot: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.position, 'position', 'heading', true, textPositionOptions);
checkComponentPropertyValidity(properties.theme, 'theme', 'heading', true, themeColorOptions);
checkComponentPropertyValidity(properties.headingType, 'heading-type', 'heading', true, headingTypes);
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
