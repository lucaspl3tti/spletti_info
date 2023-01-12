<template>
  <button
    :class="[
      'c-slider__control',
      `c-slider__control--${controlTarget}`,
      `carousel-control-${targetShort}`,
    ]"
    type="button"
    data-bs-target="#portfolioSlider"
    :data-bs-slide="targetShort"
  >
    <Icon
      :name="`bi:chevron-${icon}`"
      size="45"
      color="currentColor"
      :class="`bi-chevron-${icon}`"
    />
    <span class="visually-hidden">
      {{ controlTarget === 'next' ? 'Next' : 'Previous' }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    controlTarget: {
      type: String,
      default: 'next',
      validator(value) {
        return ['previous', 'next'].includes(value)
      },
      required: true,
    },
  },

  data() {
    return {
      targetShort: this.controlTarget === 'next' ? 'next' : 'prev',
      icon: this.controlTarget === 'next' ? 'right' : 'left',
    }
  },
}
</script>

<style lang="scss">
.c-slider__control {
  position: absolute;
  top: 100px;
  height: 50px;
  max-width: 55px;
  background-color: transparent;
  padding: 0 spacing(1);
  opacity: 1;
  color: $color-secondary;
  cursor: pointer;
  transition: color $animation-speed;

  &--previous {
    left: -10px;
  }

  &--next {
    right: -10px;
  }

  .icon {
    transform: scale(1);
    transition: transform 0.33s;

    &:hover {
      color: $color-orange-500;
      transform: scale(1.3);
    }
  }

  &:hover {
    color: $color-secondary;
  }

  &:focus,
  &:focus-visible {
    color: $color-orange-500;
  }

  &:focus-visible {
    svg {
      border-radius: 50%;
      box-shadow: 0 0 0 0.25rem rgba($color: $color-secondary, $alpha: 0.5);
    }
  }
}

@include tablet-up {
  .c-slider__control {
    top: 230px;

    &--previous {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }
}

@include tablet-portrait-up {
  .c-slider__control {
    bottom: auto;
    top: 0;
    height: 100%;

    &--previous {
      left: -5px;
    }

    &--next {
      right: -5px;
    }
  }
}
</style>
