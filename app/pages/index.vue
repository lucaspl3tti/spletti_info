<template>
  <main :class="['spletti', 'spletti--home', langClass]">
    <clb-container>
      <content-introduction />
      <content-portfolio />
    </clb-container>

    <content-qualifications />

    <clb-container>
      <content-about />
      <content-contact />
    </clb-container>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { siteTitle } = runtimeConfig.public;

useHead({
  title: 'JLS - Frontend Developer',
  meta: [
    {
      property: 'og:title',
      content: `JLS - Frontend Developer | ${siteTitle}`,
    },
  ],
});
</script>
