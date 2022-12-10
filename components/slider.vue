<template>
  <div
    id="portfolioSlider"
    class="carousel c-slider slide carousel-fade"
    data-bs-ride="false"
  >
    <div class="carousel-inner">
      <div
        v-for="(project, key) in projects"
        :key="key"
        :class="[
          'carousel-item',
          'c-slider__wrapper',
          project.id === 1 ? 'active' : '',
        ]"
        data-bs-interval="8000"
      >
        <SliderImage :image="project.image" />

        <div
          :class="[
            'c-slider__text-wrapper',
            'text-wrapper',
            `c-slider__text-wrapper--slider${project.id}`,
          ]"
        >
          <div class="c-slider__text heading c-slider__text--heading">
            <h3>
              {{
                $i18n.locale === 'de' ? project.title?.de : project.title?.en
              }}
            </h3>
          </div>

          <div class="c-slider__text">
            <p
              v-html="
                $i18n.locale === 'de'
                  ? project.description.de
                  : project.description?.en
              "
            />
          </div>

          <div class="c-slider__tags">
            <Badge v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </Badge>
          </div>

          <div
            :class="[
              'c-slider__links',
              project.links.length > 1 ? 'link-wrapper--flex' : '',
            ]"
          >
            <SliderProjectLink
              v-for="(link, index) in project.links"
              :key="index"
              :link="link"
            />
          </div>
        </div>
      </div>
    </div>

    <SliderControl control-target="previous" />
    <SliderControl control-target="next" />
  </div>
</template>

<script>
export default {
  props: {
    projects: {
      type: Object,
      default: () => {}, // eslint-disable-line
      required: true,
    },
  },
}
</script>

<style lang="scss">
.c-slider {
  position: relative;
  display: flex;
  flex-flow: column;
  gap: spacing(12) + 2px;
  box-sizing: content-box;

  &__wrapper {
    background-color: $color-white;
    border-radius: 25px;
  }

  &__text {
    max-height: 350px;
    overflow: hidden;
    margin-bottom: spacing(4);

    &-wrapper {
      padding: spacing(6);
    }
  }

  &__tags {
    display: flex;
    flex-flow: row wrap;
    place-items: flex-start;
    gap: spacing(1) + 1px;
    max-height: 70px;
    overflow: hidden;
    margin-bottom: spacing(4);
  }

  &__links {
    &.link-wrapper--flex {
      display: flex;
      justify-content: space-between;
    }
  }

  &--hidden {
    display: none;
  }
}

@include tablet-up {
  .c-slider {
    &__image {
      img {
        max-height: 500px;
      }
    }

    &__text {
      font-size: 16px;
    }

    &__tags {
      max-height: 35px;
    }
  }
}

@include tablet-portrait-up {
  .c-slider {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 500px;

      &.active {
        display: grid;
      }
    }

    &__text {
      max-height: 205px;

      &-wrapper {
        padding: spacing(18.5);
      }
    }

    &--hidden {
      display: none;
    }
  }
}

@include desktop-up {
  .c-slider {
    &__text {
      font-size: 18px;
    }
  }
}

@include desktop-large-up {
  .c-slider {
    &__text {
      font-size: 20px;
    }
  }
}
</style>
