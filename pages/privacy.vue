<template>
  <main :class="['spletti', 'spletti--privacy', langClass, 'is-wp-page']">
    <BContainer id="privacyWrapper" class="legal-disclosure">
      <h1>{{ title }}</h1>
      <div class="legal-disclosure-conent" v-html="wpHtml" />
    </BContainer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      langClass: `spletti-${this.$i18n.locale}`,
      title: '',
      wpHtml: '',
    }
  },

  async created() {
    const self = this

    // get html for page from api
    await useFetch(
      `${this.$config.public.apiBase}/wuxt/v1/slug/privacy-policy`,
      {
        onResponse({ request, response, options }) {
          const data = response._data
          self.title = data.title.rendered
          self.wpHtml = data.content.rendered
        },
      }
    )

    replaceWpBtns(this.$el)
    addHoverUnderline(this.$el)
  },
}
</script>
