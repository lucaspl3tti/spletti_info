<template>
  <main
    ref="privacyPageElement"
    :class="['spletti', 'spletti--privacy', langClass, 'is-wp-page']"
  >
    <v-container id="privacyWrapper" class="legal-disclosure">
      <h1>{{ title }}</h1>
      <div class="legal-disclosure-conent" v-html="wpHtml" />
    </v-container>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n() // eslint-disable-line
const langClass = `spletti-${locale.value}`
const privacyPageElement = ref('')
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiBase

const title = ref('')
const wpHtml = ref('')

const privacyData = await $fetch(`${apiUrl}/wuxt/v1/slug/privacy-policy`)
handlePrivacyPageData(privacyData)

onMounted(() => {
  replaceWpBtns(privacyPageElement.value)
  addHoverUnderline(privacyPageElement.value)

})

function handlePrivacyPageData(data) {
  title.value = data.title.rendered
  wpHtml.value = data.content.rendered
}
</script>
