<template>
  <div class="c-job">
    <div class="c-job__timeline">
      <div class="timeline__point" />
      <div v-if="!job.isLast" class="timeline__line" />
    </div>

    <div class="c-job__content">
      <div class="c-job__information">
        <div class="c-job__period">
          {{ job.timeperiod }}
        </div>
        <div class="c-job__company">
          {{ job.company }}
        </div>
      </div>

      <div class="c-job__description">
        <div class="c-job__title">
          {{ job.jobTitle }}
        </div>

        <div class="c-job__tasks">
          <p class="task-list">
            <span
              v-for="number in job.taskCount"
              :key="number"
              class="task-list__item"
            >
              {{
                $t(
                  `qualifications.careers.${careerLabel}.jobs.${jobKey}.tasks.${number}`
                )
              }}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      default: () => {}, // eslint-disable-line
      required: true,
    },
    jobKey: {
      type: String,
      default: '',
      required: true,
    },
    careerLabel: {
      type: String,
      default: '',
      required: true,
    },
  },

  emits: ['updated'],

  updated() {
    this.$emit('updated')
  },
}
</script>

<style lang="scss">
.c-job {
  display: flex;
  flex-flow: row nowrap;

  &__timeline {
    flex: 0 0 3%;
    margin-top: spacing(1.5);

    .timeline__point {
      width: 1.2rem;
      height: 1.2rem;
      background-color: $color-white;
      border-radius: 50%;
    }

    .timeline__line {
      width: 0.2rem;
      height: 100%;
      background-color: $color-white;
      transform: translateX(0.5rem);
    }
  }

  &__content {
    flex: 0 0 97%;
    display: flex;
    flex-flow: row wrap;
    padding-left: spacing(5);
  }

  &__information {
    flex: 0 0 100%;
    margin-bottom: spacing(6);
  }

  &__company {
    font-size: 1.2rem;
  }

  &__description {
    flex: 0 0 100%;
    margin-bottom: spacing(12);
  }

  &__title {
    font-size: 22px;
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }
}

@media (min-width: $breakpoint-lg) {
  .c-job {
    &__information {
      flex: 0 0 25%;
    }

    &__description {
      padding-left: spacing(6);
      flex: 0 0 75%;
    }

    &__title {
      font-size: 24px;
    }
  }
}
</style>
