import type { TranslationResponse } from '@/interfaces/api.interface';
import type {
  TranslationReplaceObject,
} from '@/interfaces/translation.interface';

export default async function (
  key: string,
  locale: string = 'en',
  replaceTexts?: TranslationReplaceObject,
): Promise<string> {
  const runtimeConfig = useRuntimeConfig();
  const { apiUrl } = runtimeConfig.public;
  const route = `${apiUrl}/translations/${locale}/${key}`;

  const response: TranslationResponse = await $fetch(route);
  let translation = response.data;

  if (replaceTexts) {
    for (const [placeholder, value] of Object.entries(replaceTexts)) {
      const regex = new RegExp(`\\{${placeholder}\\}`, 'g');
      translation = translation.replace(regex, value);
    }
  }

  return translation;
}
