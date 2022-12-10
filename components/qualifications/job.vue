<template>
  <div class="c-job">
    <div class="c-job__timeline">
      <div class="timeline__point" />
      <div v-if="!job.isLast" class="timeline__line" />
    </div>

    <div class="c-job__content">
      <div class="c-job__information">
        <div class="c-job__period">
          {{ $i18n.locale === 'de' ? job.timeperiod?.de : job.timeperiod?.en }}
        </div>
        <div class="c-job__company">
          {{ $i18n.locale === 'de' ? job.company?.de : job.company?.en }}
        </div>
      </div>

      <div class="c-job__description">
        <div class="c-job__title">
          {{ $i18n.locale === 'de' ? job.title?.de : job.title?.en }}
        </div>

        <div class="c-job__tasks">
          <p class="task-list">
            <span v-if="$i18n.locale === 'de'" v-html="job.tasks?.de"></span>
            <span v-else v-html="job.tasks?.en"></span>
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

@include tablet-portrait-up {
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
