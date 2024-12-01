<template>
  <v-card
    :class="[
      'jls-card',
      `jls-card--${theme}`,
      `jls-card--${variant}`,
      {
        'jls-card-default': !isModal,
        'jls-card-modal': isModal
      },
    ]"
    :theme="theme"
    :variant="variant"
  >
    <div class="jls-card__container">
      <slot name="content">
        <div class="jls-card__image image-wrapper">
          <slot name="image"></slot>
        </div>

        <div class="jls-card__body">
          <div class="jls-card__content">
            <div class="jls-card__title text-h5">
              <slot name="title">
                {{ title }}
              </slot>
            </div>

            <slot></slot>
          </div>

          <v-card-actions v-if="!hideActions">
            <slot name="actions"></slot>
          </v-card-actions>
        </div>
      </slot>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { CardProperties } from '@/interfaces/components/misc.interface';
import { themeOptions, variantBasicOptions } from '@/consts/misc';

const properties = withDefaults(defineProps<CardProperties>(), {
  title: '',
  theme: 'dark',
  variant: 'elevated',
  hideActions: false,
  isModal: false,
});

/* eslint-disable max-len */
if (!themeOptions.includes(properties.theme)) {
  throw new Error(`The theme "${properties.theme}" is not valid for card component!`);
}

if (!variantBasicOptions.includes(properties.variant)) {
  throw new Error(`The variant "${properties.variant}" is not valid for card component!`);
}
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-card {
  border-radius: 30px;

  &__title {
    margin: spacing(2) 0 spacing(4);
    font-weight: $font-weight-bold;
  }

  &--primary {
    &:not(.jls-card--outlined) {
      background-color: $color-primary;
    }

    &.jls-card--outlined {
      color: $color-purple-300;
    }
  }

  &--secondary {
    &:not(.jls-card--outlined) {
      background-color: $color-secondary;
    }

    &.jls-card--outlined {
      color: $color-secondary;
    }
  }
}

.jls-card-default {
  width: 100%;

  .jls-card__image {
    &__img {
      height: 200px !important;
    }
  }

  .jls-card__container {
    height: 100%;
  }

  .jls-card__body {
    @include flex(column, $justify: space-between);
    height: calc(100% - 200px);
    padding: spacing(5);
  }
}

@include tablet-up {
  .jls-card-default {
    width: 350px;
  }
}
</style>
