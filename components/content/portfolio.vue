<template>
  <section id="portfolio" class="portfolio">
    <div class="heading heading--portfolio">
      <h2>
        {{ $t('portfolio.heading') }}
        <span class="heading-dot">.</span>
      </h2>
      <p class="subheading">
        {{ $t('portfolio.subheading') }}
      </p>
    </div>

    <Slider :projects="projects" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      projects: [],
    }
  },

  async created () {
    const me = this

    // get html for page from api
    await useFetch(`${this.$config.public.apiBase}/wp/v2/posts?categories=10`, {
      onResponse({ request, response, options }) {
        const data = response._data
        const projectList = []

        data.forEach(project => {
          const fields = project.meta
          const image = project.featured_image
          const { name, title, description, position, image_ratio, image_alt, image_has_padding_bottom, tags, github_link, live_link, live_link_text } = fields

          const translatedTitle = formatTranslations(title[0])
          const translatedDescription = formatTranslations(description[0])

          let hasPaddingBottom = true
          if (image_has_padding_bottom[0] === 0) hasPaddingBottom = false

          const formattedTags = me.formatTags(tags[0])

          const projectItem = {
            id: Number(position[0]),
            name: name[0],
            title: translatedTitle,
            description: translatedDescription,
            links: [],
            image: {
              src: image,
              ratio: image_ratio[0],
              alt: image_alt[0],
              paddingBottom: hasPaddingBottom,
            },
            tags: formattedTags,
          }

          const repoLink = github_link[0]
          if (repoLink !== '') projectItem.links[0] = {
            type: 'repo',
            href: repoLink,
          }

          const liveLink = live_link[0]
          if (liveLink !== '') projectItem.links[1] = {
            type: 'live',
            href: liveLink,
          }

          const liveLinkText = live_link_text[0]
          if (liveLinkText !== '')
            projectItem.links[1]['customLinkText'] = liveLinkText

          const index = Number(position[0]) - 1
          projectList[index] = projectItem
        })

        me.projects = projectList
      },
    })
  },

  methods: {
    formatTags(string) {
      const tags = string.split(',')

      tags.forEach((tag, index) => {
        tags[index] = tag.replace(' ', '')
      })

      return tags
    }
  },
}
</script>

<style lang="scss">
.portfolio {
  margin-top: spacing(12.5);
  padding-top: spacing(12.5);
}
</style>
