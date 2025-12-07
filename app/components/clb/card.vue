<template>
  <div
    :class="[
      'card',
      'clb-card',
      `clb-card--${theme}`,
      {
        'clb-card-default': !isModal,
        'clb-card-modal': isModal
      },
    ]"
  >
    <div class="clb-card__container">
      <slot name="content">
        <div class="clb-card__image image-wrapper">
          <slot name="image">
            <img
              v-if="imgSrc"
              class="image img-fluid card-img-top"
              :src="imgSrc"
              :alt="imgAlt"
            />
          </slot>
        </div>

        <div class="card-body clb-card__body">
          <div class="clb-card__content">
            <div class="clb-card__title h5 mt-0">
              <slot name="title">
                {{ title }}
              </slot>
            </div>

            <slot></slot>
          </div>

          <div v-if="!hideActions" class="clb-card__actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ClbCardProperties } from '@/interfaces/components/card.interface';
import { colorVariants } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<ClbCardProperties>(), {
  title: undefined,
  theme: 'dark',
  hideActions: false,
  imgAlt: undefined,
  imgSrc: undefined,
  isModal: false,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'card', true, colorVariants);
</script>

<style lang="scss">
.clb-card {
  border: 0;
  border-radius: 30px;
  overflow: hidden;

  &__body {
    padding: 0;
  }

  &__title {
    margin: spacing(2) 0 spacing(4);
    font-weight: $font-weight-bold;
  }

  &--primary {
    &:not(.clb-card--outlined) {
      background-color: $color-primary-var;
    }

    &.clb-card--outlined {
      color: $color-primary-var;
    }
  }

  &--secondary {
    &:not(.clb-card--outlined) {
      background-color: $color-secondary-var;
    }

    &.clb-card--outlined {
      color: $color-secondary-var;
    }
  }
}

.clb-card-default {
  width: 100%;

  .clb-card__image {
    &__img {
      height: 200px !important;
    }
  }

  .clb-card__container {
    height: 100%;
  }

  .clb-card__body {
    @include flex(column, $justify: space-between);
    height: calc(100% - 200px);
    padding: spacing(5);
  }
}

@include tablet-up {
  .clb-card-default {
    width: 350px;
  }
}
</style>
