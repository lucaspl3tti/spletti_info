<template>
  <main
    ref="mainElement"
    :class="[
      'spletti',
      'spletti--wp-test',
      langClass,
      'is-wp-page',
    ]"
  >
    <v-container>
      <div class="content" v-html="wpHtml" />
    </v-container>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import aosInit from '~/mixins/aos'

const mainElement = ref('')
const runtimeConfig = useRuntimeConfig()
const apiUrl = runtimeConfig.public.apiBase
const { t, locale } = useI18n() // eslint-disable-line
const langClass = `spletti-${locale.value}`
const wpHtml = ref('')

const wpTestData = await $fetch(`${apiUrl}/wuxt/v1/slug/sample-page`)
handleWpTestData(wpTestData)

onMounted(() => {
  aosInit()

  replaceWpBtns(mainElement.value)
  addHoverUnderline(mainElement.value)
})

function handleWpTestData(data) {
  wpHtml.value = data.content.rendered
}
</script>
