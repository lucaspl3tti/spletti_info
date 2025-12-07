<template>
  <clb-card-mini class="jls-qualifications-skill" :theme="colorMode">
    <template #image>
      <clb-icon
        v-if="hasIcon && icon"
        :pack="icon.pack"
        :name="icon.name"
        size="93"
        class="clb-card-mini__image"
      />

      <img
        v-else-if="skill && !Utilities.isEmpty(skill.image)"
        :src="skill.image ? getAssetFullPath(skill.image) : undefined"
        class="clb-card-mini__image"
        :alt="`Icon of ${skill.name}`"
      />
    </template>

    {{ skill?.title }}
  </clb-card-mini>
</template>

<script setup lang="ts">
import type {
  JlsSkillProperties,
  JlsSkillIcon,
} from '@/interfaces/content/qualifications.interface';

import { Utilities } from '@helper/utilities.helper';

const properties = withDefaults(defineProps<JlsSkillProperties>(), {
  skill: null,
});

const { store } = useColorMode();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);
const icon = computed<JlsSkillIcon | null>(() =>  {
  if (!properties.skill || !properties.skill.icon || properties.skill.icon === '') {
    return null;
  }

  const details = properties.skill!.icon.split(':');

  const pack = details[0];
  const name = details[1];

  if (!pack || !name) {
    return null;
  }

  return { name, pack };
});

const hasIcon = computed(() => !!icon.value);
</script>
