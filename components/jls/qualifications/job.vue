<template>
  <v-timeline-item class="c-job">
    <template v-if="isDoubleSided" #opposite>
      <div class="c-job__period">
        {{ $i18n.locale === 'de' ? job.timeperiod?.de : job.timeperiod?.en }}
      </div>

      <div class="c-job__company">
        {{ $i18n.locale === 'de' ? job.company?.de : job.company?.en }}
      </div>
    </template>

    <div class="c-job__content">
      <div v-if="!isDoubleSided" class="c-job__info">
        <div class="c-job__period">
          {{ $i18n.locale === 'de' ? job.timeperiod?.de : job.timeperiod?.en }}
        </div>

        <div class="c-job__company">
          {{ $i18n.locale === 'de' ? job.company?.de : job.company?.en }}
        </div>
      </div>

      <div class="c-job__main">
        <div class="c-job__title">
          {{ $i18n.locale === 'de' ? job.title?.de : job.title?.en }}
        </div>

        <div class="c-job__description">
          <div v-html="tasks"></div>
        </div>
      </div>
    </div>
  </v-timeline-item>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line

const properties = defineProps({
  job: {
    type: Object,
    default: () => ({}),
    required: true,
  },

  isDoubleSided: {
    type: Boolean,
    default: false,
  },
});

const tasks = computed(() => {
  let tasks = '';
  const language = locale.value;

  const list = properties.job.tasks[language].split(/\n|\s\n/);
  list.forEach((item) => {
    tasks += `${item}<br />`;
  });

  return tasks;
});
</script>

<style lang="scss">
.c-job {
  // &:first-child {
  //   .v-timeline-divider {
  //     &__before {
  //       display: none;
  //     }
  //   }
  // }

  // &:last-child {
  //   .v-timeline-divider {
  //     &__after {
  //       display: none;
  //     }
  //   }
  // }

  &__info {
    margin-bottom: spacing(6);
  }

  &__period {
    font-size: 14px;
  }

  &__company {
    font-size: 18px;
  }

  &__description {
    margin-bottom: spacing(12);
    font-size: 18px;
  }

  &__title {
    font-size: 22px;
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }

  .v-timeline-divider {
    &__inner-dot {
      width: 100%;
      height: 100%;
      background: $color-gray-100;
    }

    &__before,
    &__after {
      background: $color-gray-600;
    }
  }
}

@include tablet-portrait-up {
  .c-job {
    &__title {
      font-size: 24px;
    }
  }
}
</style>
