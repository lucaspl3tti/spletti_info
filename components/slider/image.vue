<template>
  <div
    :class="[
      'c-slider__image',
      'image-wrapper',
      !hasPaddingBottom ? 'pb-0' : '',
    ]"
  >
    <img
      :src="image.src"
      :alt="image.alt"
      :style="['aspect-ratio: ' + image.ratio]"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}, // eslint-disable-line
      required: true,
    },
  },

  data() {
    return {
      hasPaddingBottom: this.image.paddingBottom,
    }
  },
}
</script>

<style lang="scss">
.c-slider__image {
  display: flex;
  justify-content: center;
  border-radius: 25px;
  background-color: $color-primary;
  padding: spacing(5);

  img {
    height: auto;
  }
}

@include tablet-up {
  .c-slider__image {
    img {
      max-height: 500px;
    }
  }
}

@include tablet-portrait-up {
  .c-slider__image {
    display: flex;
    flex-flow: column;
    place-items: center;

    img {
      max-height: 450px;
    }
  }
}
</style>
