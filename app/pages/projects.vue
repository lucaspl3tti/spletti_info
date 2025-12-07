<template>
  <main :class="['spletti', 'spletti--portfolio', langClass]">
    <clb-container>
      <clb-section
        id="projects"
        class="projects"
        :title="$trans('portfolio.heading')"
        :subheading="$trans('portfolio.subheading')"
        subheading-appearance="h4"
        subheading-is-handwriting-font
      >
        <div class="filter-bar">
          <clb-dropdown
            id="projects-filter-select"
            :dropdown-items="tagsStore"
            :dropdown-active-item="defaultActiveFilter"
            theme="secondary"
            border-style="rounded"
            @dropdown-item-click="onFilterActiveItemChanged"
          >
            <template #button-text>
              <span>
                <span>{{ $trans('general.filtering.label') }}</span>
                <span v-if="activeFilter">: {{ activeFilter.value }}</span>
              </span>
            </template>
          </clb-dropdown>
        </div>

        <client-only>
          <div class="projects-grid">
            <jls-project-item
              v-for="(project, index) in projects"
              :key="index"
              :class="[
                'projects-grid__item',
                getPortfolioGridItemClass(index),
              ]"
              :project="project"
            />
          </div>
        </client-only>
      </clb-section>
    </clb-container>
  </main>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse, PimcoreProject } from '@/interfaces/base/api.interface';
import type { ClbDropdownItem } from '../interfaces/components/dropdown.interface';
import type { Numberish } from '@/types/misc.types';

import { ArrayAccess } from '@helper/array-access.helper';
import { Formatting } from '@helper/formatting.helper';
import { Utilities } from '@helper/utilities.helper';

const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;
const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const projects: Ref<PimcoreProject[]> = ref([]);
const allProjects: Ref<PimcoreProject[]> = ref([]);

const tagsStore = reactive<ClbDropdownItem[]>([
  {
    key: 'all',
    value: $trans('general.wordings.all'),
  },
]);
const defaultActiveFilter: Ref<ClbDropdownItem|undefined> = ref(
  ArrayAccess.getObjectByValue(tagsStore, 'key', 'all'),
);
const activeFilter: Ref<ClbDropdownItem|undefined> = ref(defaultActiveFilter.value);

const projectsData: PimcoreApiResponse = await $fetch(`${apiUrl}/projects?lang=${locale.value}`);
handleProjectsData(projectsData);

useHead({
  title: 'Projects',
  meta: [
    {
      name: 'description',
      content: 'A list with some of Jan-Luca\'s recent and exciting projects.',
    },
    {
      property: 'og:title',
      content: `Projects | ${siteTitle}`,
    },
  ],
});

function handleProjectsData(response: PimcoreApiResponse): void {
  const { data } = response;
  const projectList: PimcoreProject[] = [];

  Utilities.iterate(data, (project: PimcoreProject) => {
    const { position } = project;

    const index = position - 1;
    projectList[index] = project;
  });

  projects.value = projectList;
  allProjects.value = projects.value;
  addTagsToStore();
}

function addTagsToStore(): void {
  Utilities.iterate(projects.value, (project: PimcoreProject): void => {
    Utilities.iterate(project.tags, (tag: string): void => {
      if (!ArrayAccess.hasObjectWithValue(tagsStore, 'value', tag)) {
        tagsStore.push({
          key: Formatting.spaceToDashCase(tag),
          value: tag,
        });
      }
    });
  });
}

function filterProjects(id: string): void {
  if (id === 'all') {
    projects.value = allProjects.value;
    return;
  }

  projects.value = allProjects.value.filter((project: PimcoreProject) => {
    const tag = ArrayAccess.getObjectByValue(tagsStore, 'key', id)?.value;

    if (!tag) {
      throw new Error('Tag not found');
    }

    return project.tags.includes(tag);
  });
}

function onFilterActiveItemChanged(key: Numberish): void {
  activeFilter.value = tagsStore.find((item: ClbDropdownItem) => item.key === key);

  if (activeFilter.value) {
    filterProjects(activeFilter.value.key);
  }
}

function getPortfolioGridItemClass(index: number): string {
  return `projects-grid__item--item${index + 1}`;
}
</script>

<style lang="scss">
@mixin portfolio-grid-item-wide {
  .clb-card-bento {
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

.projects {
  .heading {
    padding-bottom: spacing(4);
  }

  .portfolio-actions {
    @include flex($justify: flex-start, $align: center);
    width: 100%;
    padding-top: spacing(10);
  }
}

.projects-grid {
  @include grid($gap: spacing(4));
  padding-top: spacing(4);

  &__item {
    position: relative;

    .clb-card-bento {
      width: 100%;
      height: 100%;

      &__image {
        height: 200px;

        &__img {
          max-height: 100%;
        }
      }
    }
  }
}

@include tablet-down {
  .spletti-ger {
    h2,
    .h2 {
      font-size: 32px;
    }
  }
}

@include tablet-up {
  .projects {
    .heading {
      padding-bottom: spacing(8);
    }
  }

  .projects-grid {
    gap: spacing(6);

    &__item {
      position: relative;
      grid-column: span 1;

      .clb-card-bento {
        width: 100%;
        height: 100%;

        &__image {
          &__img {
            object-fit: contain;
          }
        }
      }
    }
  }
}

@include between-tablet-and-desktop {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);

    &__item {
      &:nth-child(3n + 1) {
        grid-column: span 2;
        @include portfolio-grid-item-wide;
      }

      &:nth-child(3n + 2),
      &:nth-child(3n + 3) {
        grid-column: span 1;
      }
    }
  }
}

@include desktop-up {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);

    &__item {
      &:nth-child(4n + 1) {
        grid-column: span 3;
        @include portfolio-grid-item-wide;
      }

      &:nth-child(4n + 2),
      &:nth-child(4n + 3),
      &:nth-child(4n + 4) {
        grid-column: span 1;
      }
    }
  }
}
</style>
