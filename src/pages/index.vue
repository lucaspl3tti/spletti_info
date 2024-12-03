<template>
  <main :class="['spletti', 'spletti--home', langClass]">
    <jls-container>
      <content-introduction />
      <content-portfolio />
    </jls-container>

    <content-qualifications />

    <jls-container>
      <content-about />
      <content-contact />
    </jls-container>
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

<style lang="scss">
@include tablet-down {
  .spletti-de {
    h2,
    .h2 {
      font-size: map.get($font-sizes-heading, 'xs', '2');
    }
  }
}
</style>
