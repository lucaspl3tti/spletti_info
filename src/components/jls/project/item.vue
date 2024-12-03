<template>
  <div class="jls-project-item">
    <jls-bento-card class="project-card">
      <jls-project-images
        class="project-card__image"
        :thumbnail="project!.thumbnail"
        :images="project!.gallery"
      />

      <div class="project-card__content">
        <div class="project-card__title">
          <h3>
            {{ project!.title }}
          </h3>
        </div>

        <div class="project-card__copy">
          <p v-html="project!.description" />
        </div>

        <div class="project-card__tags">
          <jls-badge v-for="tag in project!.tags" :key="tag" theme="secondary">
            {{ tag }}
          </jls-badge>
        </div>

        <div
          :class="[
            'project-card__links',
            ObjectAccess.length(project!.links) > 1 ? 'link-wrapper--flex' : '',
          ]"
        >
          <template
            v-for="(link, linkIndex) in project!.links"
            :key="linkIndex"
          >
            <jls-project-link v-if="link" :link="link" />
          </template>
        </div>
      </div>
    </jls-bento-card>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItemProperties } from '@/interfaces/components/projects.interface'; // eslint-disable-line max-len
import { ObjectAccess } from '@/helper/object-access.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<ProjectItemProperties>(), {
  project: null,
});
</script>

<style lang="scss" scoped>
.project-card {
  &__content {
    display: grid;
  }

  &__title {
    padding: spacing(2) 0;
    text-align: center;
  }

  &__copy {
    padding: spacing(2) 0;
  }

  &__tags {
    @include flex(row wrap, $gap: spacing(2));
    padding: spacing(2) 0;
  }

  &__links {
    @include flex($justify: space-between, $align: center);
    margin-top: auto;
    padding-top: spacing(2);
  }
}
</style>
