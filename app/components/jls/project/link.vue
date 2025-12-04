<template>
  <a
    v-if="link"
    :class="[
      'project__link',
      link.type === 'repo' ? 'project__link--github' : '',
      link.type === 'live' ? 'project__link--live' : '',
    ]"
    :href="linkTarget"
    target="_blank"
    rel="noopener noreferrer"
    :title="link.type === 'repo'
      ? projectGithubLinkText
      : link.type === 'live'
        ? link.text || projectLiveLinkText
        : ''
    "
  >
    <span v-if="link.type === 'repo'" class="hover-underline">
      {{ projectGithubLinkText }}
    </span>

    <span v-else-if="link.type === 'live'" class="hover-underline">
      {{ link.text || projectLiveLinkText }}
    </span>

    <clb-icon
      pack="bi"
      name="arrow-right"
      size="24"
      color="currentColor"
    />
  </a>
</template>

<script setup lang="ts">
import type { ProjectLinkProperties } from '@/interfaces/content/projects.interface';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();

const properties = withDefaults(defineProps<ProjectLinkProperties>(), {
  link: undefined,
});

const projectGithubLinkText = await $trans(
  apiUrl,
  'portfolio.projectGithubLinkText',
  locale.value,
);
const projectLiveLinkText = await $trans(
  apiUrl,
  'portfolio.projectLiveLinkText',
  locale.value,
);
const linkTarget = computed(() => {
  if (properties.link.type !== 'live') {
    return properties.link.href;
  }

  if (!properties.link.is_file) {
    return properties.link.href;
  }

  return getAssetFullPath(properties.link.href);
});
</script>

<style lang="scss">
.project__link {
  @include flex($align: center, $gap: spacing(1));
  margin-top: spacing(2);
  color: $color-white;
  transition:
    color $animation-speed,
    transform $animation-speed;

  .nuxt-icon {
    transition: transform 0.25s;
  }

  &:hover {
    color: $color-orange-100;

    .nuxt-icon {
      transform: translateX(8px);
    }
  }
}
</style>
