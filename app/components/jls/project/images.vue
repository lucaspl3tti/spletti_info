<template>
  <div
    :class="[
      'project-card__image',
      'image-wrapper',
      !hasPaddingBottom ? 'pb-0' : '',
    ]"
  >
    <clb-image
      :src="getAssetFullPath(thumbnail!.path)"
      :alt="thumbnail!.metadata?.alt"
      class="project-card__image__img"
      :style="['aspect-ratio: ' + thumbnail!.ratio]"
      @click="onClickImage"
    />

    <div
      class="project-card__image__zoom"
      @click="onClickImage"
    >
      <clb-icon
        pack="bi"
        name="zoom-in"
        size="24"
        color="currentColor"
      />
    </div>

    <clb-modal
      v-model="zoomModalOpen"
      class="zoom-modal"
      theme="primary"
      size="lg"
      no-footer
    >
      <!-- eslint-disable vue/attribute-hyphenation -->
      <clb-slider
        class="zoom-modal__slider"
        :items="zoomModalItems"
        per-page="1"
        ariaLabelSlider="Test"
        controls-theme="secondary"
        controls-always-visible
        hide-pagination
        rewind
      >
        <template
          #slider-item-content="{ item }: { item: JlsProjectZoomModalItem }"
        >
          <div class="clb-slider__item__img-wrapper">
            <clb-image
              class="clb-slider__item__image w-100"
              :src="item.image.src"
              :alt="item.image.alt"
              :style="{ 'aspect-ratio': item.image?.ratio }"
            />
          </div>
        </template>
      </clb-slider>
      <!-- eslint-enable vue/attribute-hyphenation -->
    </clb-modal>
  </div>
</template>

<script setup lang="ts">
import type {
  JlsProjectImageProperties,
  JlsProjectZoomModalItem,
} from '@/interfaces/content/projects.interface';

const properties = withDefaults(defineProps<JlsProjectImageProperties>(), {
  thumbnail: null,
  images: null,
});

const zoomModalOpen = ref(false);
const hasPaddingBottom = computed(() => {
  return properties.thumbnail?.has_padding_bottom;
});

const zoomModalItems = computed<JlsProjectZoomModalItem[]>(() => {
  if (!properties.images) {
    return [];
  }

  return properties.images.map((image) => {
    return {
      image: {
        src: getAssetFullPath(image.path),
        alt: image.metadata?.alt,
        ratio: image.ratio,
      },
    };
  });
});

function onClickImage(): void {
  zoomModalOpen.value = true;
}
</script>

<style lang="scss">
.project-card__image {
  position: relative;
  @include flex($justify: center);
  padding: spacing(2);

  &__zoom {
    @include position(absolute, $top: 8px, $left: auto, $right: 8px);
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
  .modal-dialog {
    @include size(100%);
    max-width: calc(100% - 48px);
    max-height: 100%;
  }

  .modal-body {
    padding-bottom: 30px !important;
    overflow-y: hidden;
  }

  &__slider {
    .clb-slider__item__img-wrapper {
      @include flex(row nowrap, center, center);
      @include size(100%);
    }
  }
}

@include tablet-up {
  .project-card__image {
    &__img {
      max-height: 500px;
    }
  }
}

@include tablet-portrait-up {
  .project-card__image {
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

@include desktop-up {
  .project-card__image {
    &__img {
      max-height: 300px;
    }
  }
}
</style>
