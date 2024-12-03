<template>
  <main
    ref="privacyPageElement"
    :class="['spletti', 'spletti--privacy', langClass, 'is-wp-page']"
  >
    <jls-container id="privacyWrapper" class="privacy-policy">
      <h1>{{ title }}</h1>

      <div
        v-if="!Utilities.isEmpty(htmlContentEN)"
        class="go-to-english-version"
      >
        <a href="#english">
          <span class="hover-underline">Go to english version</span>
          <jls-icon pack="bi" name="arrow-right" size="24" />
        </a>
      </div>

      <div class="privacy-policy-conent" v-html="htmlContentDE" />

      <div
        v-if="!Utilities.isEmpty(htmlContentEN)"
        class="privacy-policy-content--en"
      >
        <h2 id="english">{{ $t('legalTexts.englishVersion') }}</h2>
        <div v-html="htmlContentEN" />
      </div>
    </jls-container>
  </main>
</template>

<script setup lang="ts">
import type { ApiResponse } from '@/interfaces/api.interface';
import { Utilities } from '@/helper/utilities.helper';

const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const title = ref('');
const htmlContentDE = ref('');
const htmlContentEN = ref('');

const response: ApiResponse = await $fetch(`${apiUrl}/legal-texts/datenschutz`);
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
  htmlContentDE.value = (data.content as Record<string, string>).de;
  htmlContentEN.value = (data.content as Record<string, string>).en;
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
