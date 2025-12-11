<template>
  <clb-modal
    ref="zoomModalElement"
    v-model="model"
    class="zoom-modal"
    theme="primary"
    size="lg"
    no-footer
    @shown="onZoomModalShown"
    @hide="onZoomModalHide"
  >
    <!-- eslint-disable vue/attribute-hyphenation -->
    <clb-slider
      v-if="renderSlider"
      class="zoom-modal__slider"
      :items="zoomModalItems"
      per-page="1"
      ariaLabelSlider="Test"
      controls-theme="secondary"
      controls-always-visible
      hide-pagination
      rewind
      :splide-options="{
        fixedHeight: Formatting.convertToUnit(modalBodyHeight) ?? 'auto',
      }"
    >
      <template
        #slider-item-content="{ item }: { item: JlsProjectZoomModalItem }"
      >
        <div class="clb-slider__item__img-wrapper">
          <clb-image
            class="clb-slider__item__image"
            :src="item.image.src"
            :alt="item.image.alt"
            :style="{ 'aspect-ratio': item.image?.ratio }"
          />
        </div>
      </template>
    </clb-slider>
    <!-- eslint-enable vue/attribute-hyphenation -->
  </clb-modal>
</template>

<script lang="ts" setup>
import type {
  JlsProjectZoomModalProperties,
  JlsProjectZoomModalItem,
} from '@/interfaces/content/projects.interface';
import { useResizeObserver } from '@vueuse/core';
import Dom from '@helper/dom.helper';
import Formatting from '@helper/formatting.helper';

const model = defineModel<boolean>({ default: false, required: true });

const properties = withDefaults(defineProps<JlsProjectZoomModalProperties>(), {
  images: undefined,
});

const zoomModalElement = useTemplateRef('zoomModalElement');
const documentElement = ref<HTMLElement|null>(null);
const renderSlider = ref(false);
const modalBodyHeight = ref(0);

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

onMounted(() => {
  if (zoomModalElement.value) {
    documentElement.value = document.documentElement;
  }
});

useResizeObserver(documentElement, async () => {
  if (!model.value) {
    return;
  }

  renderSlider.value = false;
  await delay(50);
  getModalBodyHeight();
});

async function getModalBodyHeight() {
  if (!zoomModalElement.value) {
    return 0;
  }

  const modalId = zoomModalElement.value.elementId();
  const modalBody = Dom.get(document, `.zoom-modal#${modalId} .modal-body`);

  if (!modalBody) {
    return 0;
  }

  const modalBodyRect = Dom.getRect(modalBody);
  modalBodyHeight.value = modalBodyRect.height - 46;

  await delay(50);
  renderSlider.value = true;
}

function onZoomModalShown(): void {
  getModalBodyHeight();
}

function onZoomModalHide(): void {
  renderSlider.value = false;
}
</script>

<style lang="scss">
.zoom-modal {
  .modal-dialog {
    @include size(100%);
    max-width: calc(100% - 48px);
    max-height: 100%;
  }

  .modal-content {
    height: 100%;
  }

  .modal-body {
    padding-bottom: 30px !important;
    overflow-y: hidden;
  }

  &__slider {
    .clb-slider__item__img-wrapper {
      @include flex(row nowrap, $justify: center);
      @include size(100%);
    }

    .clb-slider__item__image {
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>
