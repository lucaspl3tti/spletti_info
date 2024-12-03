<template>
  <jls-timeline-item class="jls-qualifications-job">
    <template v-if="isDoubleSided" #opposite>
      <div class="jls-qualifications-job__period">
        {{ job!.timeperiod }}
      </div>

      <div class="jls-qualifications-job__company">
        {{ job!.company }}
      </div>
    </template>

    <div class="jls-qualifications-job__content">
      <div v-if="!isDoubleSided" class="jls-qualifications-job__info">
        <div class="jls-qualifications-job__period">
          {{ job!.timeperiod }}
        </div>

        <div class="jls-qualifications-job__company">
          {{ job!.company }}
        </div>
      </div>

      <div class="jls-qualifications-job__main">
        <div class="jls-qualifications-job__title">
          {{ job!.title }}
        </div>

        <div class="jls-qualifications-job__description">
          <jls-list :items="tasks" />
        </div>
      </div>
    </div>
  </jls-timeline-item>
</template>

<script setup lang="ts">
import type { JobProperties } from '@/interfaces/components/qualifications.interface'; // eslint-disable-line max-len

const properties = withDefaults(defineProps<JobProperties>(), {
  job: null,
  isDoubleSided: false,
});

const tasks = computed(() => properties.job!.tasks.split(/\n|\s\n/));
</script>

<style lang="scss">
.jls-qualifications-job {
  &__info {
    margin-bottom: spacing(6);
  }

  &__period {
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }

  &__company {
    font-size: map.get($font-sizes-copy, 'small', 'xl');
  }

  &__description {
    margin-bottom: spacing(12);
    font-size: map.get($font-sizes-copy, 'small', 'xl');
  }

  &__title {
    font-size: map.get($font-sizes-copy, 'large', 'md');
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }

  .v-timeline-divider {
    &__inner-dot {
      @include size(100%);
      background: $color-gray-100;
    }

    &__before,
    &__after {
      background: $color-gray-600;
    }
  }
}

@include tablet-portrait-up {
  .jls-qualifications-job {
    &__title {
      font-size: map.get($font-sizes-copy, 'large', 'xl');
    }
  }
}
</style>
