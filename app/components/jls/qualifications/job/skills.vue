<template>
  <div
    v-if="!Utilities.isEmpty(skills)"
    :class="[
      'jls-qualifications-job-skills',
      `jls-qualifications-job-skills--align-${align}`,
    ]"
  >
    <clb-badge
      v-for="skill in skills"
      :key="`job-skill-${skill}`"
      theme="secondary"
      size="sm"
    >
        {{ skill }}
    </clb-badge>
  </div>
</template>

<script lang="ts" setup>
import type { JlsJobSkillsProperties } from '@/interfaces/content/qualifications.interface';
import Utilities from '@helper/utilities.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<JlsJobSkillsProperties>(), {
  skills: undefined,
  align: 'start',
});
</script>

<style lang="scss">
.jls-qualifications-job-skills {
  @include flex(row wrap, $justify: flex-start, $gap: spacing(1.5));
  margin-top: spacing(4);

  &--align-end {
    justify-content: flex-end;
  }
}

@include tablet-up {
  .jls-qualifications-job-skills {
    max-width: 55%;
  }
}

@include desktop-up {
  .jls-qualifications-job-skills {
    max-width: 75%;
  }
}

@include desktop-medium-up {
  .jls-qualifications-job-skills {
    max-width: 55%;
  }
}
</style>
