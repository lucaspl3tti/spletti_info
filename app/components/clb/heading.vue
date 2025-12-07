<template>
  <component
    :is="headingType"
    :class="[
      'clb-heading',
      `clb-heading--${theme}`,
      `text-${position}`,
      { 'handwriting-font': isHandwritingFont }
    ]"
  >
    <template v-if="!hideDot">
      <span class="clb-heading__text">
        <slot>
          <span v-html="text" />
        </slot>
      </span>
      <span class="clb-heading__dot">.</span>
    </template>

    <template v-else>
      <slot>
        <span v-html="text" />
      </slot>
    </template>
  </component>
</template>

<script setup lang="ts">
import type { ClbHeadingProperties } from '@/interfaces/components/heading.interface';
import {
  colorThemes,
  headingTypes,
  textPositions,
} from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbHeadingProperties>(), {
  headingType: 'h1',
  text: '',
  position: 'start',
  theme: 'secondary',
  hideDot: false,
  isHandwritingFont: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.headingType, 'heading-type', 'heading', true, headingTypes);
checkComponentPropertyValidity(properties.position, 'position', 'heading', true, textPositions);
checkComponentPropertyValidity(properties.theme, 'theme', 'heading', true, colorThemes);
/* eslint-enable max-len */
</script>

<style lang="scss">
.clb-heading {
  &__dot {
    color: $color-secondary-var;
  }

  &--primary {
    .clb-heading__dot {
      color: $color-primary-var;
    }
  }
}
</style>
