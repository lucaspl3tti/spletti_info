<template>
  <clb-timeline-item class="jls-qualifications-job">
    <template v-if="isDoubleSided" #opposite>
      <template v-if="metaPosition === 'left'">
        <jls-qualifications-job-meta
          :timeperiod="job!.timeperiod"
          :company="job!.company"
        />

        <jls-qualifications-job-skills :skills="skills" align="end" />
      </template>

      <template v-else-if="metaPosition === 'right'">
        <jls-qualifications-job-main
          :title="job!.title"
          :tasks="tasks"
        />
      </template>
    </template>

    <div class="jls-qualifications-job__content">
      <jls-qualifications-job-meta
        v-if="!isDoubleSided"
        :timeperiod="job!.timeperiod"
        :company="job!.company"
      />

      <template v-if="metaPosition === 'right'">
        <jls-qualifications-job-meta
          :timeperiod="job!.timeperiod"
          :company="job!.company"
        />

        <jls-qualifications-job-skills :skills="skills" />
      </template>

      <template v-else-if="metaPosition === 'left'">
        <jls-qualifications-job-main
          :title="job!.title"
          :tasks="tasks"
        >
          <jls-qualifications-job-skills v-if="!isDoubleSided" :skills="skills" />
        </jls-qualifications-job-main>
      </template>
    </div>
  </clb-timeline-item>
</template>

<script setup lang="ts">
import type { JlsJobProperties } from '@/interfaces/content/qualifications.interface';
import { ArrayAccess } from '@helper/array-access.helper';
import { Utilities } from '@helper/utilities.helper';

const properties = withDefaults(defineProps<JlsJobProperties>(), {
  job: null,
  isDoubleSided: false,
});

const metaPosition = computed<'left'|'right'|null>(() => {
  if (!properties.job) {
    return null;
  }

  if (!properties.isDoubleSided) {
    return 'left';
  }

  return !Utilities.numberIsEven(properties.job.position) ? 'left' : 'right';
});

const tasks = computed(() => {
  return ArrayAccess.getArrayFromNewlines(properties.job!.tasks);
});

const skills = computed(() => {
  return ArrayAccess.getArrayFromCommas(properties.job!.skills);
});
</script>
