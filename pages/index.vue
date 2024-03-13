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
const langClass = ref('');

onMounted(() => {
  langClass.value = `spletti-${locale.value}`;
  aosInit();
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
