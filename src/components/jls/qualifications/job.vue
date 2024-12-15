<template>
  <jls-timeline-item
    :class="[
      'jls-qualifications-job',
      {
        'jls-qualifications-job--left': Utilities.numberIsEven(job!.position),
        'jls-qualifications-job--right': !Utilities.numberIsEven(job!.position),
      },
    ]"
  >
    <template v-if="isDoubleSided" #opposite>
      <div class="jls-qualifications-job__period">
        {{ job!.timeperiod }}
      </div>

      <div class="jls-qualifications-job__company">
        {{ job!.company }}
      </div>

      <div class="jls-qualifications-job__skills d-none d-xl-flex">
        <jls-badge
          v-for="skill in skills"
          :key="`job-skill-${skill}`"
          theme="secondary"
          size="small"
        >
            {{ skill }}
        </jls-badge>
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

        <div class="jls-qualifications-job__skills d-flex d-xl-none">
          <jls-badge
            v-for="skill in skills"
            :key="`job-skill-${skill}`"
            theme="secondary"
            size="small"
          >
              {{ skill }}
          </jls-badge>
        </div>
      </div>
    </div>
  </jls-timeline-item>
</template>

<script setup lang="ts">
import type { JobProperties } from '@/interfaces/components/qualifications.interface'; // eslint-disable-line max-len
import { ArrayAccess } from '~/src/helper/array-access.helper';
import { Utilities } from '~/src/helper/utilities.helper';

const properties = withDefaults(defineProps<JobProperties>(), {
  job: null,
  isDoubleSided: false,
});

const tasks = computed(() => {
  return ArrayAccess.getArrayFromNewlines(properties.job!.tasks);
});

const skills = computed(() => {
  return ArrayAccess.getArrayFromCommas(properties.job!.skills);
});
</script>

<style lang="scss">
.jls-qualifications-job {
  &__info {
    margin-bottom: spacing(6);
  }

  &__period {
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }

  &__main {
    margin-bottom: spacing(12);
    font-size: map.get($font-sizes-copy, 'small', 'xl');
  }

  &__title {
    font-size: map.get($font-sizes-copy, 'large', 'md');
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }

  &__skills {
    @include flex(row wrap, $justify: flex-start, $gap: spacing(1.5));
    margin-top: spacing(4);
  }

  .v-timeline-item__opposite {
    width: 100%;
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

@include tablet-up {
  .jls-qualifications-job {
    &__skills {
      max-width: 55%;
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

@include desktop-up {
  .jls-qualifications-job {
    &--right {
      .jls-qualifications-job__skills {
        justify-content: flex-end;
      }

      .v-timeline-item__opposite {
        @include flex(column, $align: flex-end);
      }
    }

    &--left {
      .v-timeline-item__opposite {
        @include flex(column, $align: flex-start);
      }
    }

    &__skills {
      max-width: 75%;
    }
  }
}

@include desktop-medium-up {
  .jls-qualifications-job {
    &__skills {
      max-width: 55%;
    }
  }
}
</style>
