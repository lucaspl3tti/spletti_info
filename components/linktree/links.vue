<template>
  <div class="link-list">
    <jls-button
      v-for="(item, index) in links"
      :key="index"
      theme="secondary"
      :href="item.target"
      :target="item.openInNewTab ? '_blank' : '_self'"
      class="link-list__link"
    >
      <jls-icon
        :pack="item.icon.pack"
        :name="item.icon.name"
        size="24"
        color="currentColor"
      />
      &nbsp;<span>{{ item.text }}</span>
    </jls-button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n() // eslint-disable-line
const runtimeConfig = useRuntimeConfig()

const links = reactive({})

const linktreeApiUrl = `${runtimeConfig.public.apiBase}/wp/v2/posts/422`
const linktreeData = await $fetch(linktreeApiUrl)
handleLinktreeResponse(linktreeData)

function handleLinktreeResponse(data) {
  // add links to array
  links.my_website = {
    target: data.meta.website_link[0],
    text: t('linktree.links.my_website'),
    icon: {
      pack: 'bi',
      name: 'window-desktop',
    },
    openInNewTab: false
  }

  if (data.meta.instagram_link[0] !== '') {
    links.instagram = {
      target: data.meta.instagram_link[0],
      text: t('linktree.links.instagram'),
      icon: {
        pack: 'bi',
        name: 'instagram',
      },
      openInNewTab: true
    }
  }

  if (data.meta.github_link[0] !== '') {
    links.github = {
      target: data.meta.github_link[0],
      text: t('linktree.links.github'),
      icon: {
        pack: 'bi',
        name: 'github',
      },
      openInNewTab: true
    }
  }

  if (data.meta.linkedin_link[0] !== '') {
    links.linkedin = {
      target: data.meta.linkedin_link[0],
      text: t('linktree.links.linkedin'),
      icon: {
        pack: 'bi',
        name: 'linkedin',
      },
      openInNewTab: true
    }
  }

  if (data.meta.spotify_link[0] !== '') {
    links.spotify = {
      target: data.meta.spotify_link[0],
      text: t('linktree.links.spotify'),
      icon: {
        pack: 'bi',
        name: 'spotify',
      },
      openInNewTab: true
    }
  }

  links.contact = {
    target: `mailto:${data.meta.email[0]}`,
    text: t('linktree.links.contact'),
    icon: {
      pack: 'bi',
      name: 'envelope-at',
    },
    openInNewTab: false
  }
}
</script>

<style lang="scss" scoped>
.link-list {
  display: grid;
  place-items: center;
  gap: spacing(4);

  &__link {
    width: 250px;
  }
}

.first-link {
  margin-top: 0;
}
</style>
