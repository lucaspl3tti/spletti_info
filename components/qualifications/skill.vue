<template>
  <div class="c-skill-box">
    <img class="c-skill-box__image" :src="image" :alt="`Icon of ${name}`" />
    <p class="c-skill-box__text">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}, // eslint-disable-line
      required: true,
    },
  },

  data() {
    return {
      name: this.skill.meta.name[0],
      image: this.skill.featured_image
    }
  },
}
</script>

<style lang="scss">
.c-skill-box {
  display: flex;
  aspect-ratio: 1/1;
  flex-direction: column;
  align-items: center;
  padding: 1%;
  border-radius: 13px;
  margin-bottom: spacing(8);
  flex: 0 0 30%;
  max-width: 30%;
  background-color: $color-white;
  color: $color-black;
  font-size: $font-size-small-mobile;

  &__image {
    width: 70%;
  }

  &__text {
    margin: spacing(1.5) 0 0;
  }
}

@include phone-portrait-up {
  .c-skill-box {
    font-size: $font-size-normal-mobile;
    flex: 0 0 22%;
    max-width: 22%;
  }
}

@include tablet-portrait-up {
  .c-skill-box {
    font-size: 1.2rem;
    margin-bottom: 0;
    flex: 0 0 12%;
    max-width: 12%;
    min-width: 140px;
    min-height: 140px;
  }
}
</style>
