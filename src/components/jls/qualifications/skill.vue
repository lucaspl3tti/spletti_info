<template>
  <div class="jls-qualifications-skill">
    <jls-icon
      v-if="hasIcon"
      :pack="icon!.pack"
      :name="icon!.name"
      size="93"
      class="jls-qualifications-skill__icon"
    />

    <img
      v-else
      :src="skill!.image ? getImageFullPath(skill!.image) : undefined"
      class="jls-qualifications-skill__image"
      :alt="`Icon of ${skill!.name}`"
    />

    <p class="jls-qualifications-skill__text">
      {{ skill!.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type {
  SkillProperties,
  SkillIcon,
} from '@/interfaces/components/qualifications.interface';

const properties = withDefaults(defineProps<SkillProperties>(), {
  skill: null,
});

const icon = computed<SkillIcon|null>(() =>  {
  if (!properties.skill!.icon || properties.skill!.icon === '') {
    return null;
  }

  const details = properties.skill!.icon.split(':');

  const pack = details[0];
  const name = details[1];

  return { pack, name };
});

const hasIcon = computed(() => !!icon.value);
</script>

<style lang="scss">
.jls-qualifications-skill {
  aspect-ratio: 1/1;
  @include flex(column, $align: center);
  flex: 0 0 30%;
  max-width: 30%;
  border-radius: 13px;
  background-color: $color-white;
  padding: 1%;
  color: $color-black;
  font-size: map.get($font-sizes-copy, 'smaller', 'md');

  &__image,
  &__icon {
    @include size(70% !important);

    .nuxt-icon {
      @include size(100% !important);
    }
  }

  &__text {
    margin: spacing(1.5) 0 0;
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }
}

@include phone-portrait-up {
  .jls-qualifications-skill {
    flex: 0 0 22%;
    max-width: 22%;
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }
}

@include tablet-up {
  .jls-qualifications-skill {
    &__text {
      font-size: map.get($font-sizes-copy, 'smaller', 'xl');
    }
  }
}

@include tablet-portrait-up {
  .jls-qualifications-skill {
    flex: 0 0 12%;
    min-width: 140px;
    max-width: 12%;
    min-height: 140px;
    margin-bottom: 0;
    font-size: 1.2rem;
  }
}

@include desktop-up {
  .jls-qualifications-skill {
    &__text {
      font-size: map.get($font-sizes-copy, 'small', 'md');
    }
  }
}
</style>
