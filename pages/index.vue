<template>
  <main :class="['spletti', 'spletti--home', langClass]">
    <v-container>
      <content-introduction />
      <content-portfolio />
    </v-container>

    <content-qualifications />

    <v-container>
      <content-about />
      <content-contact />
    </v-container>
  </main>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import aosInit from '~/mixins/aos';

const { t, locale } = useI18n(); // eslint-disable-line
const langClass = ref(`spletti-${locale.value}`);

onMounted(() => {
  aosInit();
});

useHead({
  title: 'JLS - Frontend Developer',
  meta: [
    {
      property: 'og:title',
      content: 'JLS - Frontend Developer | spletti.me',
    },
  ],
});
</script>

<style lang="scss">
@include tablet-down {
  .spletti-ger {
    h2,
    .h2 {
      font-size: 32px;
    }
  }
}
</style>
