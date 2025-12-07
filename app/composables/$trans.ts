// import type { PimcoreTranslationsBatch } from '@/interfaces/base/api.interface';
import type { JlsAppTranslationReplaceObject } from '@/interfaces/base/translation.interface';
import { useTranslationsStore } from '@/stores/translations.store';

export default function (
  key: string,
  replaceTexts?: JlsAppTranslationReplaceObject,
): string {
  const translationsStore = useTranslationsStore();
  let translation = translationsStore.getTranslation(key);

  if (!translation) {
    return key;
  }

  if (replaceTexts) {
    for (const [placeholder, value] of Object.entries(replaceTexts)) {
      const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
      translation = translation.replace(regex, value);
    }
  }

  return translation;
}
