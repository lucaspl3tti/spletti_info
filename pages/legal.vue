<template>
  <main :class="['spletti', 'spletti--legal', langClass]">
    <BContainer>
      <div id="legalWrapper" class="legal-disclosure">
        <h1 v-html="title" />

        <div class="legal-disclosure__content" v-html="wpHtml" />
      </div>
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

  async created () {
    const me = this

    // get html for page from api
    await useFetch(`${this.$config.public.apiBase}/wuxt/v1/slug/legal`, {
      onResponse({ request, response, options }) {
        const data = response._data
        me.title = data.title.rendered
        me.wpHtml = data.content.rendered
      },
    })

    replaceWpBtns(this.$el)
    addHoverUnderline(this.$el)
  },
}
</script>

<style lang="scss">
.legal-disclosure {
  margin-bottom: spacing(20);

  .wp-block-columns {
    .wp-block-column {
      flex: 0 0 auto !important;
      max-width: none;

      &:has(svg) {
        flex: 0 0 24px !important;
        max-width: 24px;
      }
    }
  }
}

.icons {
  .icon__copyright {
    margin-left: spacing(2);
  }
}
</style>
