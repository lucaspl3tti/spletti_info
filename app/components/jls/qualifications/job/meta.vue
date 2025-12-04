<template>
  <div class="jls-qualifications-job-meta">
    <div v-if="!Utilities.isEmpty(timeperiod)" class="jls-qualifications-job-meta__period">
      {{ timeperiod }}
    </div>

    <div v-if="!Utilities.isEmpty(company)" class="jls-qualifications-job-meta__company">
      {{ company }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { JlsJobMetaProperties } from '@/interfaces/content/qualifications.interface';
import { Utilities } from '@helper/utilities.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<JlsJobMetaProperties>(), {
  timeperiod: undefined,
  company: undefined,
});
</script>

<style lang="scss">
.jls-qualifications-job-meta {
  &__period {
    font-size: map.get($clb-font-sizes, 'smaller', 'md');
  }
}
</style>
