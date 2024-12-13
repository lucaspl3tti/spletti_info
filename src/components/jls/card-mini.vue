<template>
  <div :class="['jls-card-mini', `jls-card-mini--${theme}`]">
    <slot name="image">
      <img
        :src="imageSrc"
        class="jls-card-mini__image"
        :alt="imageAlt"
      />
    </slot>

    <p class="jls-card-mini__text">
      <slot>{{ title }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CardMiniComponents } from '~/src/interfaces/components/cards.interface'; // eslint-disable-line max-len
import { themeBasicOptions } from '~/src/consts/misc';

const properties = withDefaults(defineProps<CardMiniComponents>(), {
  theme: 'light',
  title: undefined,
  imageSrc: undefined,
  imageAlt: undefined,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'card-mini', true, themeBasicOptions); // eslint-disable-line max-len
</script>

<style lang="scss">
.jls-card-mini {
  aspect-ratio: 1/1;
  @include flex(column, $justify: space-between, $align: center);
  flex: 0 0 30%;
  max-width: 30%;
  border-radius: 13px;
  background-color: $color-white;
  padding: 1%;
  color: $color-black;
  font-size: map.get($font-sizes-copy, 'smaller', 'md');

  &--dark {
    background-color: $color-dark;
    color: $color-white;
  }

  &__image {
    @include size(70% !important);

    .nuxt-icon {
      @include size(100% !important);
    }
  }

  &__text {
    margin: spacing(1.5) 0 0;
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }
}

@include phone-portrait-up {
  .jls-card-mini {
    flex: 0 0 22%;
    max-width: 22%;
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }
}

@include tablet-up {
  .jls-card-mini {
    &__text {
      font-size: map.get($font-sizes-copy, 'smaller', 'xl');
    }
  }
}

@include tablet-portrait-up {
  .jls-card-mini {
    flex: 0 0 12%;
    min-width: 140px;
    max-width: 12%;
    min-height: 140px;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
}

@include desktop-up {
  .jls-card-mini {
    &__text {
      font-size: map.get($font-sizes-copy, 'small', 'md');
    }
  }
}
</style>
