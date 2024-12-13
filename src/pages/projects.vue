<template>
  <main :class="['spletti', 'spletti--portfolio', langClass]">
    <jls-container>
      <jls-section
        id="projects"
        class="projects"
        :title="$t('projects.heading')"
      >
        <div class="heading heading--projects">
          <p class="subheading">
            {{ $t('projects.subheading') }}
          </p>
        </div>

        <div class="filter-bar">
          <jls-dropdown
            :items="tagsStore"
            :default-active-item="defaultActiveFilter"
            activator-title="Filtern nach"
            :theme="colorMode"
            @active-item-changed="onFilterActiveItemChanged"
          >
            <template #activatorTitle>
              <span>{{ $t('general.filtering.label') }}</span>
              <span v-if="activeFilter">: {{ activeFilter.title }}</span>
            </template>
          </jls-dropdown>
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
      </jls-section>
    </jls-container>
  </main>
</template>

<script setup lang="ts">
import type { ApiResponse, Project } from '@/interfaces/api.interface';
import type { DropdownItem } from '../interfaces/components/misc.interface';
import { ArrayAccess } from '../helper/array-access.helper';
import { Formatting } from '../helper/formatting.helper';
import { Utilities } from '@/helper/utilities.helper';

const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;
const { t, locale } = useI18n();
const { store } = useColorMode();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);
const langClass = ref(`spletti-${locale.value}`);
const projects: Ref<Project[]> = ref([]);
const allProjects: Ref<Project[]> = ref([]);
const tagsStore: DropdownItem[] = reactive([
  {
    id: 'all',
    title: t('general.wordings.all'),
    callback: (id) => filterProjects(id!),
  },
]);
const defaultActiveFilter: Ref<DropdownItem|undefined> = ref(
  ArrayAccess.getObjectByValue(tagsStore, 'id', 'all'),
);
const activeFilter: Ref<DropdownItem|undefined> = ref(defaultActiveFilter.value); // eslint-disable-line max-len

const projectsData: ApiResponse = await $fetch(`${apiUrl}/projects?lang=${locale.value}`); // eslint-disable-line max-len
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

function handleProjectsData(response: ApiResponse): void {
  const { data } = response;
  const projectList: Project[] = [];

  Utilities.iterate(data, (project: Project) => {
    const { position } = project;

    const index = position - 1;
    projectList[index] = project;
  });

  projects.value = projectList;
  allProjects.value = projects.value;
  addTagsToStore();
}

function addTagsToStore(): void {
  Utilities.iterate(projects.value, (project: Project): void => {
    Utilities.iterate(project.tags, (tag: string): void => {
      if (!ArrayAccess.hasObjectWithValue(tagsStore, 'title', tag)) {
        tagsStore.push({
          id: Formatting.spaceToDashCase(tag),
          title: tag,
          callback: (id) => filterProjects(id!),
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

  projects.value = allProjects.value.filter((project: Project) => {
    const tag = ArrayAccess.getObjectByValue(tagsStore, 'id', id)?.title;

    if (!tag) {
      throw new Error('Tag not found');
    }

    return project.tags.includes(tag);
  });
}

function onFilterActiveItemChanged(item: DropdownItem): void {
  activeFilter.value = item;
}

function getPortfolioGridItemClass(index: number): string {
  return `projects-grid__item--item${index + 1}`;
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

    .jls-bento-card {
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

      .jls-bento-card {
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
