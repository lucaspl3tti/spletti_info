<template>
  <main :class="['spletti', 'spletti--linktree', langClass]">
    <linktree-particles />

    <div class="linktree-container">
      <linktree-head />
      <linktree-links />
      <linktree-footer />
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line
const langClass = ref(`spletti-${locale.value}`);

useHead({
  title: 'JLS - Linktree',
  meta: [
    {
      name: 'description',
      content: 'Linktree from Jan-Luca Splettstößer',
    },
    {
      property: 'og:title',
      content: 'JLS - Linktree | spletti.me',
    },
  ],
});

definePageMeta({
  layout: 'linktree',
});
</script>

<style lang="scss">
.linktree {
  background: $color-purple-900;
  color: $color-white;
  font-family: 'Sora', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: center;

  a {
    text-decoration: none;
    color: $color-white;

    &:hover {
      color: $color-secondary;
    }
  }

  .spletti--linktree {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  &-container {
    position: relative;
    z-index: 2;
  }
}
</style>
