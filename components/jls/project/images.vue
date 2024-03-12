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
      :src="featuredImage.src"
      :alt="featuredImage.alt"
      :style="['aspect-ratio: ' + featuredImage.ratio]"
      @click="onClickImage"
    />

    <v-dialog
      v-model="zoomModalOpen"
      class="jls-bento-card__image__modal zoom-modal"
      width="auto"
    >
      <v-card class="zoom-modal__card">
        <v-card-title class="zoom-modal__card-title">
          <jls-button
            variant="text"
            theme="none"
            @click="onClickCloseZoomModal"
          >
            <jls-icon
              pack="bi"
              name="x-lg"
              size="24"
              color="currentColor"
            />
          </jls-button>
        </v-card-title>

        <v-carousel
          class="zoom-modal__carousel"
          hide-delimiters
          :show-arrows="allImages.length > 1"
        >
          <template
            v-for="(image, index) in allImages"
            :key="index"
          >
            <v-carousel-item
              class="zoom-modal__img"
              :src="image.src"
              :alt="image.alt"
              :style="{'aspect-ratio': featuredImage.ratio}"
            />
          </template>
        </v-carousel>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiBase

const properties = defineProps({
  images: {
    type: Object,
    default: () => ({}),
    required: true,
  },
})

const allImages = ref([])
const zoomModalOpen = ref(false)
const featuredImage = computed(() => properties.images.featured)
const hasPaddingBottom = computed(() => checkForImagePadding(featuredImage))

allImages.value = await fetchImages()

async function fetchImages() {
  const imageList = properties.images.extras
  const images = []

  images.push({
    ...featuredImage.value,
    type: 'featured',
  })

  if (imageList.length === 0) return images

  for (const image of imageList) {
    const imageData = await $fetch(`${apiUrl}/wp/v2/media/${image}`)

    const { alt_text: imageAlt, source_url: sourceUrl, slug } = imageData

    const altText = imageAlt !== '' ? imageAlt : slug

    images.push({
      src: sourceUrl,
      alt: altText,
      type: 'extra',
    })
  }

  return images
}

function checkForImagePadding(image) {
  return image.paddingBottom
}

function onClickImage() {
  zoomModalOpen.value = true
}

function onClickCloseZoomModal() {
  zoomModalOpen.value = false
}
</script>

<style lang="scss">
.jls-bento-card__image {
  display: flex;
  justify-content: center;
  padding: spacing(2);

  .jls-bento-card__image__img {
    height: auto;

    &:hover {
      cursor: zoom-in;
    }
  }
}

.zoom-modal {
  &__card {
    height: 100%;
    border-radius: 24px !important;
    padding: spacing(12) spacing(6);
    background-color: $color-purple-800;
  }

  &__card-title {
    position: absolute;
    top: 8px;
    right: 8px;
    color: $color-white;
    transform: scale(1);
    transition: color $animation-speed, transform $animation-speed;

    .v-btn {
      min-width: 36px;
      padding: 0;
    }

    &:hover {
      color: darken($color-white, 10%);
      transform: scale(1.3);
      cursor: pointer;
    }
  }

  &__carousel {
    height: 100% !important;
    width: 100%;

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
        background-color: darken($color-white, 10%);
      }
    }
  }

  .v-overlay__content {
    max-height: calc(100% - 48px) !important;
    max-width: calc(100% - 48px) !important;
    height: calc(100% - 48px) !important;
    width: calc(100% - 48px) !important;
  }
}

@include tablet-up {
  .jls-bento-card__image {
    .jls-bento-card__image__img {
      max-height: 500px;
    }
  }
}

@include tablet-portrait-up {
  .jls-bento-card__image {
    display: flex;
    flex-flow: column;
    place-items: center;

    .jls-bento-card__image__img {
      max-height: 450px;
    }
  }
}
</style>
