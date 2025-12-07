import en from '~/app/locales/en.json';
import de from '~/app/locales/de.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: { en, de },
}));
