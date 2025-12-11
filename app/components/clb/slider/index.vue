<template>
  <Splide
    ref="splide"
    :class="[
      'clb-slider',
      { 'clb-slider--arrows-always-visible': controlsAlwaysVisible }
    ]"
    :options="options"
    :has-track="false"
    :aria-label="ariaLabelSlider"
    @splide:moved="onSliderMoved"
  >
    <clb-slider-track>
      <clb-slider-slide
        v-for="(item, index) in properties.items"
        :key="index"
        class="clb-slider__item"
      >
        <slot name="slider-item-content" :item="item" :index="index">
          <clb-image
            class="clb-slider__item__image w-100"
            :src="item.image.src"
            :alt="item.image.alt"
          />
        </slot>
      </clb-slider-slide>
    </clb-slider-track>

    <div
      v-if="showSplideArrows"
      class="splide__arrows clb-slider__controls"
    >
      <clb-slider-control
        type="prev"
        :disabled="!rewind && activeSlideIndex === 0"
        :theme="controlsTheme"
        :variant="controlBtnVariant"
        @click="onClickControlPrevious"
      />

      <clb-slider-control
        type="next"
        :disabled="!rewind && activeSlideIndex === items.length - 1"
        :theme="controlsTheme"
        :variant="controlBtnVariant"
        @click="onClickControlNext"
      />
    </div>
  </Splide>
</template>

<script lang="ts" setup>
import type { ClbSliderProperties } from '@/interfaces/components/slider.interface';
import type { SplideInstance, SplideOptions } from '@/interfaces/components/splide.interface';
import { Splide } from '@splidejs/vue-splide';
import { breakpointsBootstrapV5 as breakpointValues, useResizeObserver } from '@vueuse/core';
import deepmerge from 'deepmerge';

const properties = withDefaults(defineProps<ClbSliderProperties>(), {
  items: undefined,
  ariaLabelSlider: undefined,
  perPage: 4,
  perPageMobile: 1,
  perPageTablet: 2,
  perPageTabletPortrait: undefined,
  autoplay: false,
  controlsAlwaysVisible: false,
  controlsTheme: 'primary',
  draggable: false,
  gap: '1rem',
  hasTransparentControls: false,
  hideArrows: false,
  hidePagination: false,
  interval: 5000,
  rewind: false,
  type: 'slide',
  splideOptions: undefined,
});

checkComponentPropertyValidity(properties.items, 'items', 'slider', true);
checkComponentPropertyValidity(properties.ariaLabelSlider, 'ariaLabelSlider', 'slider', true);
checkComponentPropertyValidity(properties.perPage, 'per-page', 'slider', true);

const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();

const isMobileViewport = computed(() => {
  return activeBreakpoint.value === 'xs' || activeBreakpoint.value === 'sm';
});

const isTabletViewport = computed(() => {
  return activeBreakpoint.value === 'md';
});

const isTabletPortraitViewport = computed(() => {
  return activeBreakpoint.value === 'lg';
});

const splide = useTemplateRef('splide');
const splideInstance = ref<SplideInstance|null>(null);
const perPageValue = ref(Number(properties.perPage));
const perPageMobileValue = ref(getPerPageMobile());
const perPageTabletValue = ref(getPerPageTablet());
const perPageTabletPortraitValue = ref(getPerPageTabletPortrait());
const activeSlideIndex = ref(0);

// Define slider configuration
const options = computed<SplideOptions>(() => {
  const configuration = {
    arrows: false,
    autoplay: false,
    breakpoints: {
      [breakpointValues.xl]: {
        perPage: perPageMobileValue.value,
      },
      [breakpointValues.lg]: {
        perPage: perPageTabletValue.value,
      },
      [breakpointValues.md]: {
        perPage: perPageTabletPortraitValue.value,
      },
    },
    drag: properties.draggable,
    gap: properties.gap,
    interval: Number(properties.interval),
    pagination: !properties.hidePagination,
    perPage: perPageValue.value,
    rewind: properties.rewind,
    rewindByDrag: properties.rewind && properties.draggable,
    start: 0,
    type: properties.type,
  };

  return properties.splideOptions
    ? deepmerge(configuration, properties.splideOptions)
    : configuration;
});

const controlBtnVariant = computed(() => {
  return properties.hasTransparentControls ? 'text' : 'default';
});

const showSplideArrows = computed(() => {
  if (isMobileViewport.value) {
    return properties.items.length > perPageMobileValue.value;
  }

  if (isTabletViewport.value) {
    return properties.items.length > perPageTabletValue.value;
  }

  if (isTabletPortraitViewport.value) {
    return properties.items.length > perPageTabletPortraitValue.value;
  }

  return properties.items.length > perPageValue.value;
});

// Hook Listeners
onMounted(() => {
  if (splide.value && splide.value.splide) {
    splideInstance.value = splide.value.splide;
  }
});

useResizeObserver(splide, () => {
  splideInstance.value?.refresh();
});

// Define getter methods
function getPerPageTabletPortrait(): number {
  let value = null;

  if (properties.perPageTabletPortrait) {
    value = properties.perPageTabletPortrait <= properties.perPage
      ? Number(properties.perPageTabletPortrait)
      : Number(properties.perPage);
  } else {
    value = properties.perPageTablet <= properties.perPage
      ? Number(properties.perPageTablet)
      : Number(properties.perPage);
  }

  return value;
}

function getPerPageTablet(): number {
  return properties.perPageTablet <= properties.perPage
    ? Number(properties.perPageTablet)
    : Number(properties.perPage);
}

function getPerPageMobile(): number {
  return properties.perPageMobile <= properties.perPage
    ? Number(properties.perPageMobile)
    : Number(properties.perPage);
}

// Define event methods
function onSliderMoved(instance: SplideInstance, index: number) {
  activeSlideIndex.value = index;
}

function onClickControlPrevious() {
  if (splideInstance.value) {
    splideInstance.value.go('<');
  }
}

function onClickControlNext() {
  if (splideInstance.value) {
    splideInstance.value.go('>');
  }
}
</script>

<style lang="scss">
@import '@splidejs/vue-splide/css';

.clb-slider {
  &.clb-slider--arrows-always-visible,
  &:hover {
    .clb-slider__controls {
      display: block;
    }
  }

  &__controls {
    display: none;
  }

  &__control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.disabled {
      display: none;
    }

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }
}
</style>
