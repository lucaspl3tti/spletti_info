<template>
  <main
    ref="legalPageElement"
    :class="['spletti', 'spletti--legal', langClass]"
  >
    <v-container>
      <div id="legalWrapper" class="legal-disclosure">
        <h1 v-html="title" />

        <div class="legal-disclosure__content" v-html="wpHtml" />
      </div>
    </v-container>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line
const langClass = ref('');
const legalPageElement = ref('');
const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiBase;

const title = ref('');
const wpHtml = ref('');

const legalData = await $fetch(`${apiUrl}/wuxt/v1/slug/legal`);
handleLegalPageData(legalData);

onMounted(() => {
  langClass.value = `spletti-${locale.value}`;

  replaceWpBtns(legalPageElement.value);
  addHoverUnderline(legalPageElement.value);
});

function handleLegalPageData(data) {
  title.value = data.title.rendered;
  wpHtml.value = data.content.rendered;
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
