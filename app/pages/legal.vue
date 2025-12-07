<template>
  <main :class="['spletti', 'spletti--legal', langClass]">
    <clb-container id="legalWrapper" class="legal-disclosure">
      <h1>{{ title }}</h1>

      <div class="legal-disclosure__content" v-html="htmlContent" />
    </clb-container>
  </main>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse } from '@/interfaces/base/api.interface';

const { locale } = useI18n();
const langClass = ref('');
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const title = ref('');
const htmlContent = ref('');

const response: PimcoreApiResponse = await $fetch(`${apiUrl}/legal-texts/impressum?lang=${locale.value}`); // eslint-disable-line max-len
handleLegalPageData(response);

onMounted(() => {
  langClass.value = `spletti-${locale.value}`;
});

useHead({
  title: 'Impressum / Legal Disclosure',
  meta: [
    {
      name: 'description',
      content: 'Legal Disclosure from Jan-Luca Splettstößer',
    },
    {
      property: 'og:title',
      content: `Impressum / Legal Disclosure | ${siteTitle}`,
    },
  ],
});

function handleLegalPageData(response: PimcoreApiResponse): void {
  const { data } = response;

  title.value = data.heading as string;
  htmlContent.value = data.content;
}
</script>

<style lang="scss">
.legal-disclosure {
  margin-bottom: spacing(20);
}

.icons {
  .icon__copyright {
    margin-left: spacing(2);
  }
}
</style>
