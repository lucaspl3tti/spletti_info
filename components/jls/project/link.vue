<template>
  <a
    v-if="link"
    :class="[
      'project__link',
      link.type === 'repo' ? 'project__link--github' : '',
      link.type === 'live' ? 'project__link--live' : '',
    ]"
    :href="link.href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span v-if="link.type === 'repo'" class="hover-underline">
      {{
        link.customLinkText
          ? link.customLinkText
          : $t('portfolio.projectGithubLinkText')
      }}
    </span>

    <span v-else-if="link.type === 'live'" class="hover-underline">
      {{
        link.customLinkText
          ? link.customLinkText
          : $t('portfolio.projectLiveLinkText')
      }}
    </span>

    <jls-icon pack="bi" name="arrow-right" size="24" color="currentColor" />
  </a>
</template>

<script setup>
// eslint-disable-next-line
const properties = defineProps({
  link: {
    type: Object,
    default: () => ({}),
    required: true,
  },
});
</script>

<style lang="scss">
.project__link {
  color: $color-primary;
  transition:
    color $animation-speed,
    transform $animation-speed;

  .icon {
    margin-left: spacing(2);
    transition: transform 0.25s;
  }

  &:hover {
    color: $color-purple-700;

    .icon {
      transform: translateX(8px);
    }
  }
}
</style>
