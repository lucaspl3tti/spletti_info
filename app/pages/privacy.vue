<template>
  <main
    ref="privacyPageElement"
    :class="['spletti', 'spletti--privacy', langClass]"
  >
    <clb-container id="privacyWrapper" class="privacy-policy">
      <h1>{{ title }}</h1>

      <div class="privacy-policy-conent" v-html="htmlContent" />
    </clb-container>
  </main>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse } from '@/interfaces/base/api.interface';

const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const title = ref('');
const htmlContent = ref('');

const response: PimcoreApiResponse = await $fetch(`${apiUrl}/legal-texts/datenschutz?lang=${locale.value}`); // eslint-disable-line max-len
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

function handlePrivacyPageData(response: PimcoreApiResponse): void {
  const { data } = response;

  title.value = data.heading as string;
  htmlContent.value = data.content;
}
</script>
