<template>
  <div class="jls-qualifications-job-main">
    <div
      v-if="!Utilities.isEmpty(title)"
      class="jls-qualifications-job-main__title"
    >
      {{ title }}
    </div>

    <div
      v-if="!Utilities.isEmpty(tasks)"
      class="jls-qualifications-job-main__description"
    >
      <clb-list :items="tasks" />
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { JlsJobMainProperties } from '@/interfaces/content/qualifications.interface';
import { Utilities } from '@helper/utilities.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<JlsJobMainProperties>(), {
  title: undefined,
  tasks: undefined,
});
</script>

<style lang="scss">
.jls-qualifications-job-main {
  margin-bottom: spacing(12);
  font-size: map.get($clb-font-sizes, 'small', 'xl');

  &__title {
    font-size: map.get($clb-font-sizes, 'large', 'md');
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }
}

@include tablet-portrait-up {
  .jls-qualifications-job-main {
    &__title {
      font-size: map.get($clb-font-sizes, 'large', 'xl');
    }
  }
}
</style>
