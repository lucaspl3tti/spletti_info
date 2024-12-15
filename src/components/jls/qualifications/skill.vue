<template>
  <jls-card-mini class="jls-qualifications-skill" :theme="colorMode">
    <template #image>
      <jls-icon
        v-if="hasIcon"
        :pack="icon!.pack"
        :name="icon!.name"
        size="93"
        class="jls-card-mini__image"
      />

      <img
        v-else
        :src="skill!.image ? getAssetFullPath(skill!.image) : undefined"
        class="jls-card-mini__image"
        :alt="`Icon of ${skill!.name}`"
      />
    </template>

    {{ skill!.title }}
  </jls-card-mini>
</template>

<script setup lang="ts">
import type {
  SkillProperties,
  SkillIcon,
} from '@/interfaces/components/qualifications.interface';

const properties = withDefaults(defineProps<SkillProperties>(), {
  skill: null,
});

const { store } = useColorMode();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);
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
