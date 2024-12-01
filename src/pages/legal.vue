<template>
  <main :class="['spletti', 'spletti--legal', langClass]">
    <jls-container id="legalWrapper" class="legal-disclosure">
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

      <div class="legal-disclosure__content" v-html="htmlContentDE" />

      <div
        v-if="!Utilities.isEmpty(htmlContentEN)"
        class="legal-disclosure__content--en"
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
const langClass = ref('');
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const title = ref('');
const htmlContentDE = ref('');
const htmlContentEN = ref('');

const response: ApiResponse = await $fetch(`${apiUrl}/legal-texts/impressum`);
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

function handleLegalPageData(response: ApiResponse): void {
  const { data } = response;

  title.value = data.heading as string;
  htmlContentDE.value = (data.content as Record<string, string>).de;
  htmlContentEN.value = (data.content as Record<string, string>).en;
}
</script>

<style lang="scss">
.legal-disclosure {
  margin-bottom: spacing(20);

  .go-to-english-version {
    margin: spacing(2) 0 spacing(8);
  }

  #english {
    margin: spacing(16) 0;
  }
}

.icons {
  .icon__copyright {
    margin-left: spacing(2);
  }
}
</style>
