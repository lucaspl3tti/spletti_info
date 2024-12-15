<template>
  <jls-section
    id="portfolio"
    name="portfolio"
    :title="$t('portfolio.heading')"
  >
    <div class="heading heading--portfolio">
      <jls-subheading :text="$t('portfolio.subheading')" position="center" />
    </div>

    <client-only>
      <div class="portfolio-grid">
        <jls-project-item
          v-for="(project, index) in projects"
          :key="index"
          :class="['portfolio-grid__item', getPortfolioGridItemClass(index)]"
          :project="project"
        />
      </div>
    </client-only>

    <div class="portfolio-actions">
      <div class="portfolio-see-all">
        <jls-button
          theme="secondary"
          :to="localePath('/projects')"
          width="180"
          uneven-border
          :title="$t('general.wordings.more')"
        >
          {{ $t('general.wordings.more') }}
          <template #append>
            <jls-icon
              pack="bi"
              name="arrow-right"
              size="24"
              color="currentColor"
            />
          </template>
        </jls-button>
      </div>
    </div>
  </jls-section>
</template>

<script setup lang="ts">
import type { ApiResponse, Project } from '@/interfaces/api.interface';
import { Utilities } from '@/helper/utilities.helper';

const { locale } = useI18n();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;

const projects: Ref<Project[]> = ref([]);

const projectsData: ApiResponse = await $fetch(`${apiUrl}/projects?lang=${locale.value}`); // eslint-disable-line max-len
handleProjectsData(projectsData);

function handleProjectsData(response: ApiResponse): void {
  const { data } = response;
  const projectList: Project[] = [];

  Utilities.iterate(data, (project: Project): void => {
    const { position } = project;

    const index = position - 1;
    projectList[index] = project;
  });

  projects.value = projectList.splice(0, 6);
}

function getPortfolioGridItemClass(index: number): string {
  return `portfolio-grid__item--item${index + 1}`;
}
</script>

<style lang="scss">
@mixin portfolio-grid-item-wide {
  .jls-bento-card {
    &__body {
      @include flex(row nowrap, $align: center, $gap: spacing(2));
    }

    &__image,
    .project-card__content {
      flex: 0 0 calc(50% - spacing(2));
      max-width: calc(50% - spacing(2));
    }

    &__image {
      height: auto;

      &__img {
        object-fit: contain;
      }
    }
  }
}

.portfolio {
  .heading {
    padding-bottom: spacing(4);
  }

  .portfolio-actions {
    @include flex($justify: flex-start, $align: center);
    width: 100%;
    padding-top: spacing(10);
  }
}

.portfolio-grid {
  @include grid($gap: spacing(4));
  padding-top: spacing(4);

  &__item {
    position: relative;

    &--item5,
    &--item6 {
      display: none;
    }

    .jls-bento-card {
      @include size(100%);
    }
  }
}

@include tablet-up {
  .portfolio {
    .heading {
      padding-bottom: spacing(8);
    }
  }

  .portfolio-grid {
    grid-template:
      'portfolioItem1 portfolioItem1' auto
      'portfolioItem2 portfolioItem3' auto
      'portfolioItem4 portfolioItem4' auto
      'portfolioItem5 portfolioItem6' auto
        / calc(50% - spacing(2)) calc(50% - spacing(2));

    &__item {
      &--item1 {
        grid-area: portfolioItem1;
        @include portfolio-grid-item-wide;
      }

      &--item2 {
        grid-area: portfolioItem2;
      }

      &--item3 {
        grid-area: portfolioItem3;
      }

      &--item4 {
        grid-area: portfolioItem4;
      }

      &--item5 {
        grid-area: portfolioItem5;
      }

      &--item6 {
        grid-area: portfolioItem6;
      }

      &--item5,
      &--item6 {
        display: block;
      }

      .project-card {
        &__copy {
          p {
            font-size: map.get($font-sizes-copy, 'default', 'md');
            line-height: map.get($font-sizes-copy, 'default', 'md') + 4px;
          }
        }
      }
    }
  }
}

@include between-tablet-and-desktop {
  .portfolio-grid {
    &__item {
      &--item4 {
        @include portfolio-grid-item-wide;
      }
    }
  }
}

@include desktop-down {
  .portfolio-grid {
    &__item {
      .jls-bento-card {
        &__image {
          height: 200px;

          &__img {
            max-height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}

@include desktop-up {
  .portfolio-grid {
    grid-template-areas:
      'portfolioItem1 portfolioItem1 portfolioItem1'
      'portfolioItem2 portfolioItem2 portfolioItem3'
      'portfolioItem4 portfolioItem5 portfolioItem5'
      'portfolioItem6 portfolioItem6 portfolioItem6';
    grid-template-columns: repeat(3, calc(33% - (spacing(6) / 3)));
    gap: spacing(6);

    &__item {
      &--item6 {
        @include portfolio-grid-item-wide;
      }
    }
  }
}
</style>
