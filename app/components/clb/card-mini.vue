<template>
  <div :class="['clb-card-mini', `clb-card-mini--${theme}`]">
    <slot name="image">
      <img
        :src="imageSrc"
        class="clb-card-mini__image"
        :alt="imageAlt"
      />
    </slot>

    <p class="clb-card-mini__text">
      <slot>{{ title }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ClbCardMiniComponents } from '@/interfaces/components/card.interface';
import { colorModes } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbCardMiniComponents>(), {
  theme: 'light',
  title: undefined,
  imageSrc: undefined,
  imageAlt: undefined,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'card-mini', true, colorModes);
</script>

<style lang="scss">
.clb-card-mini {
  @include flex(column, $justify: space-between, $align: center);
  flex: 0 0 30%;
  aspect-ratio: 1/1;
  max-width: 30%;
  border-radius: 13px;
  background-color: $color-white;
  padding: 1%;
  color: $color-black;
  font-size: map.get($clb-font-sizes, 'smaller', 'md');

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
    font-size: map.get($clb-font-sizes, 'smaller', 'md');
  }
}

@include phone-portrait-up {
  .clb-card-mini {
    flex: 0 0 22%;
    max-width: 22%;
    font-size: map.get($clb-font-sizes, 'smaller', 'md');
  }
}

@include tablet-up {
  .clb-card-mini {
    &__text {
      font-size: map.get($clb-font-sizes, 'smaller', 'xl');
    }
  }
}

@include tablet-portrait-up {
  .clb-card-mini {
    flex: 0 0 12%;
    min-width: 140px;
    max-width: 12%;
    min-height: 140px;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
}

@include desktop-up {
  .clb-card-mini {
    &__text {
      font-size: map.get($clb-font-sizes, 'small', 'md');
    }
  }
}
</style>
