<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$config.public.languageSwitchEnabled) {
      let language = localStorage.getItem('language')

      if (language === null) {
        localStorage.setItem('language', this.$i18n.locale)
        language = this.$i18n.locale
      }

      this.$i18n.locale = language
      document.documentElement.setAttribute('lang', language) // eslint-disable-line
    }
  },
}
</script>
