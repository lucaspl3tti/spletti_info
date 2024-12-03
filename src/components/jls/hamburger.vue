<template>
  <div
    :class="[
      'jls-hamburger',
      { 'active': toggled || forceActiveState }
    ]"
    @click="onClickAppBarToggle"
  >
    <!-- eslint-disable -->
    <svg class="jls-hamburger__icon hamburger-icon" viewBox="0 0 100 100" width="60">
      <path
        class="hamburger-icon__line hamburger-icon__line--top"
        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
      />
      <path
        class="hamburger-icon__line hamburger-icon__line--middle"
        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
      />
      <path
        class="hamburger-icon__line hamburger-icon__line--bottom"
        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
      />
    </svg>
    <!-- eslint-enable -->
  </div>
</template>

<script setup lang="ts">
import type { HamburgerProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<HamburgerProperties>(), {
  active: false,
  forceActiveState: false,
});

const emit = defineEmits(['click', 'toggled']);

const isActive = computed(() => properties.active);
const toggled = ref(false);

watch(isActive, () => {
  toggled.value = isActive.value;
});

function onClickAppBarToggle() {
  if (!properties.forceActiveState) {
    toggled.value = !toggled.value;
    emit('toggled', toggled.value);
  } else {
    emit('click');
  }
}
</script>

<style lang="scss">
.jls-hamburger {
  @include flex($justify: center, $align: center);
  @include size(55px);
  border: 0;
  border-radius: 50%;
  padding: 0;

  .hamburger-icon {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &__line {
      transition:
        stroke-dasharray 400ms,
        stroke-dashoffset 400ms;
      fill: none;
      stroke: $color-white;
      stroke-width: 5.5;
      stroke-linecap: round;

      &--top {
        stroke-dasharray: 40 172;
        stroke-dashoffset: 0;
      }

      &--middle {
        stroke-dasharray: 40 111;
        stroke-dashoffset: 0;
      }

      &--bottom {
        stroke-dasharray: 40 172;
        stroke-dashoffset: 0;
      }
    }
  }

  &.active {
    .hamburger-icon {
      &__line {
        &--top {
          stroke-dashoffset: -132px;
        }

        &--middle {
          stroke-dashoffset: -71px;
        }

        &--bottom {
          stroke-dashoffset: -132px;
        }
      }
    }
  }
}
</style>
