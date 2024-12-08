<template>
  <div
    :class="[
      'jls-bento-card__image',
      'image-wrapper',
      !hasPaddingBottom ? 'pb-0' : '',
    ]"
  >
    <img
      class="jls-bento-card__image__img"
      :src="getImageFullPath(thumbnail!.path)"
      :alt="thumbnail!.metadata?.alt"
      :style="['aspect-ratio: ' + thumbnail!.ratio]"
      @click="onClickImage"
    />

    <div
      class="jls-bento-card__image__zoom"
      @click="onClickImage"
    >
      <jls-icon
        pack="bi"
        name="zoom-in"
        size="24"
        color="currentColor"
      />
    </div>

    <jls-modal
      v-model="zoomModalOpen"
      theme="primary"
      width="100%"
      hide-actions
      class="zoom-modal"
    >
      <v-carousel
        class="zoom-modal__carousel"
        hide-delimiters
        :show-arrows="images!.length > 1"
      >
        <template v-for="(image, index) in images" :key="index">
          <v-carousel-item
            class="zoom-modal__img"
            :src="getImageFullPath(image.path)"
            :alt="image.metadata?.atl"
            :style="{ 'aspect-ratio': image?.ratio }"
          />
        </template>
      </v-carousel>
    </jls-modal>
  </div>
</template>

<script setup lang="ts">
import type { ProjectImageProperties } from '@/interfaces/components/projects.interface'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<ProjectImageProperties>(), {
  thumbnail: null,
  images: null,
});

const zoomModalOpen = ref(false);
const hasPaddingBottom = computed(() => {
  return properties.thumbnail?.has_padding_bottom;
});

function onClickImage(): void {
  zoomModalOpen.value = true;
}
</script>

<style lang="scss">
.jls-bento-card__image {
  position: relative;
  @include flex($justify: center);
  padding: spacing(2);

  &__zoom {
    @include absolute-position($top: 8px, $left: auto, $right: 8px);
  }

  &__img {
    height: auto;
  }

  &__img,
  &__zoom {
    &:hover {
      cursor: zoom-in;
    }
  }
}

.zoom-modal {
  .jls-card {
    height: 100%;
    border-radius: 24px !important;
    background-color: $color-purple-800;
    padding: spacing(12) spacing(6);

    &__content {
      height: 100%;
    }
  }

  &__card-title {
    @include absolute-position(
      $top: spacing(2),
      $left: auto,
      $right: spacing(2)
    );
    color: $color-white;
    transform: scale(1);
    transition:
      color $animation-speed,
      transform $animation-speed;

    .v-btn {
      min-width: 36px;
      padding: 0;
    }

    &:hover {
      color: color.adjust($color-white, $lightness: -10%);
      transform: scale(1.3);
      cursor: pointer;
    }
  }

  &__carousel {
    @include size(100%, 100% !important);

    .v-carousel-item {
      .v-img__img {
        position: relative !important;
        object-fit: contain;
      }
    }

    .v-window__left,
    .v-window__right {
      background-color: $color-white;
      color: $color-black;

      &:hover {
        background-color: color.adjust($color-white, $lightness: -10%);
      }
    }
  }

  .v-overlay__content {
    @include size(calc(100% - 48px) !important);
    max-width: calc(100% - 48px) !important;
    max-height: calc(100% - 48px) !important;
  }
}

@include tablet-up {
  .jls-bento-card__image {
    &__img {
      max-height: 500px;
    }
  }
}

@include tablet-portrait-up {
  .jls-bento-card__image {
    @include flex(column);
    place-items: center;

    &__zoom {
      display: none;
    }

    &__img {
      max-height: 450px;
    }
  }
}
</style>
