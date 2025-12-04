import type { PimcoreTranslationResponse } from '@/interfaces/base/api.interface';
import type { AppTranslationReplaceObject } from '@/interfaces/base/translation.interface';

export default async function (
  apiUrl: string,
  key: string,
  locale: string = 'en',
  replaceTexts?: AppTranslationReplaceObject,
): Promise<string> {
  const route = `${apiUrl}/translations/${locale}/${key}`;

  const response: PimcoreTranslationResponse = await $fetch(route);
  let translation = response.data;

  if (replaceTexts) {
    for (const [placeholder, value] of Object.entries(replaceTexts)) {
      const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
      translation = translation.replace(regex, value);
    }
  }

  return translation;
}
