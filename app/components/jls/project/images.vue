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

    <jls-project-zoom-modal
      v-model="zoomModalOpen"
      :images="images"
    />
  </div>
</template>

<script setup lang="ts">
import type { JlsProjectImageProperties } from '@/interfaces/content/projects.interface';

const properties = withDefaults(defineProps<JlsProjectImageProperties>(), {
  thumbnail: null,
  images: undefined,
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
