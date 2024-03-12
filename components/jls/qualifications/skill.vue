<template>
  <div class="c-skill-box">
    <icon
      v-if="hasIcon"
      :name="`${icon}`"
      size="93"
      :class="['icon--logos', `logos-${iconClass}`, 'c-skill-box__icon']"
    />

    <img
      v-else
      :src="image"
      class="c-skill-box__image"
      :alt="`Icon of ${name}`"
    />

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
      image: this.skill.featured_image,
      icon: this.skill.meta.icon[0],
      iconClass: '',
      hasIcon: false,
    }
  },

  created() {
    if (this.icon === undefined || this.icon === null || this.icon === '')
      return

    this.hasIcon = true
    this.iconClass = this.icon.replace('logos:', '')
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
  flex: 0 0 30%;
  max-width: 30%;
  background-color: $color-white;
  color: $color-black;
  font-size: $font-size-smaller-mobile;

  &__image,
  &__icon {
    width: 70%;
    height: auto;
  }

  &__text {
    margin: spacing(1.5) 0 0;
    font-size: 14px;
  }
}

@include phone-portrait-up {
  .c-skill-box {
    font-size: $font-size-normal-mobile;
    flex: 0 0 22%;
    max-width: 22%;
  }
}

@include tablet-up {
  .c-skill-box {
    &__text {
      font-size: 16px;
    }
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

@include desktop-up {
  .c-skill-box {
    &__text {
      font-size: 18px;
    }
  }
}
</style>
