<template>
  <div class="c-skill-box">
    <jls-icon
      v-if="hasIcon"
      :pack="icon.pack"
      :name="icon.name"
      size="93"
      :class="['icon--logos', `${icon.pack}-${icon.name}`, 'c-skill-box__icon']"
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

<script setup>
const properties = defineProps({
  skill: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});

const name = ref(properties.skill.meta.name[0]);
const image = ref(properties.skill.featured_image);

const icon = computed(() =>  {
  if (
    !properties.skill.meta.icon[0] ||
    properties.skill.meta.icon[0] === ''
  ) return null;

  const details = properties.skill.meta.icon[0].split(':');

  const pack = details[0];
  const name = details[1]

  return { pack, name };
});

const hasIcon = computed(() => {
  if (!icon.value) return false;
  return true
});
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
