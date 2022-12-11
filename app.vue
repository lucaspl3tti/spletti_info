<template>
  <div>
    <NuxtLayout>
      <NuxtPage />

      <SocialList icon-size="36" />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  created() {
    let language = localStorage.getItem('language')

    if (language === null) {
      localStorage.setItem('language', this.$i18n.locale)
      language = this.$i18n.locale
    }

    this.$i18n.locale = language
    document.documentElement.setAttribute('lang', language) // eslint-disable-line
  },
}
</script>
