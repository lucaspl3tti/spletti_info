import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ger from '../locales/ger.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      ger,
    },
  })

  vueApp.use(i18n)
})
