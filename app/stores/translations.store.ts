import type {
  PimcoreTranslationsBatch,
  PimcoreTranslationsBatchResponse,
} from '@/interfaces/base/api.interface';

import { translationKeys } from '@/consts/translation-keys.consts';

export const useTranslationsStore = defineStore('translations', () => {
  const translationKeysData: string[] = translationKeys;
  const translations = ref<PimcoreTranslationsBatch>({});

  async function loadTranslations(apiUrl: string, locale: string) {
    const apiRoute = `${apiUrl}/translations/${locale}/batch`;
    const response: PimcoreTranslationsBatchResponse = await $fetch(apiRoute, {
      method: 'POST',
      body: translationKeysData,
    });

    if (!response.success) {
      throw new Error('Translations could not be loaded');
    }

    setTranslations(response.data);
  }

  function setTranslations(data: PimcoreTranslationsBatch) {
    translations.value = data;
  }

  function getTranslations(): PimcoreTranslationsBatch {
    return translations.value;
  }

  function getTranslation(key: string): string|undefined {
    return translations.value[key];
  }

  return { translations, loadTranslations,  getTranslations, getTranslation };
});
