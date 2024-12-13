<template>
  <main
    ref="privacyPageElement"
    :class="['spletti', 'spletti--privacy', langClass, 'is-wp-page']"
  >
    <jls-container id="privacyWrapper" class="privacy-policy">
      <h1>{{ title }}</h1>

      <div class="privacy-policy-conent" v-html="htmlContent" />
    </jls-container>
  </main>
</template>

<script setup lang="ts">
import type { ApiResponse } from '@/interfaces/api.interface';

const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const title = ref('');
const htmlContent = ref('');

const response: ApiResponse = await $fetch(`${apiUrl}/legal-texts/datenschutz?lang=${locale.value}`); // eslint-disable-line max-len
handlePrivacyPageData(response);

useHead({
  title: 'Datenschutz / Privacy Policy',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy from Jan-Luca Splettstößer',
    },
    {
      property: 'og:title',
      content: `Datenschutz / Privacy Policy | ${siteTitle}`,
    },
  ],
});

function handlePrivacyPageData(response: ApiResponse): void {
  const { data } = response;

  title.value = data.heading as string;
  htmlContent.value = data.content;
}
</script>

<style lang="scss">
.privacy-policy {
  .go-to-english-version {
    margin: spacing(2) 0 spacing(8);
  }

  #english {
    margin: spacing(16) 0 0;
  }
}
</style>
