<template>
  <main
    :class="[
      'spletti',
      'spletti--home',
      `spletti-${$i18n.local}`,
      'is-wp-page'
    ]"
  >
    <BContainer>
      <div class="content" v-html="wpHtml" />
    </BContainer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      wpHtml: ''
    }
  },

  async created () {
    const me = this

    // get html for page from api
    await useFetch(`${this.$config.public.apiBase}/wuxt/v1/slug/sample-page`, {
      onResponse({ request, response, options }) {
        const data = response._data
        me.wpHtml = data.content.rendered
      },
    })

    replaceWpBtns(this.$el)
    addHoverUnderline(this.$el)
  },
}
</script>
