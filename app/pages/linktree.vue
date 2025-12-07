<template>
  <main :class="['spletti', 'spletti--linktree', langClass]">
    <jls-linktree-particles />

    <div class="linktree-container">
      <jls-linktree-head
        :profille-image="getAssetFullPath(linktreeData!.basic.profile_picture)"
        :username="linktreeData!.basic.username"
      />

      <jls-linktree-links :links="linktreeData!.links" />

      <jls-linktree-footer
        :fullname="linktreeData!.basic.fullname"
        :links="linktreeData!.footerLinks"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { PimcoreApiResponse, PimcoreLinktree } from '@/interfaces/base/api.interface';

const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const linktreeData: Ref<PimcoreLinktree|null> = ref(null);

const response: PimcoreApiResponse = await $fetch(`${apiUrl}/single-types/linktree`);
handleLinktreeData(response);

useHead({
  title: 'JLS - Linktree',
  meta: [
    {
      name: 'description',
      content: 'Linktree from Jan-Luca Splettstößer',
    },
    {
      property: 'og:title',
      content: `JLS - Linktree | ${siteTitle}`,
    },
  ],
});

definePageMeta({
  layout: 'linktree',
});

function handleLinktreeData(response: PimcoreApiResponse): void {
  linktreeData.value = response.data as PimcoreLinktree;
}
</script>

<style lang="scss">
.linktree {
  background: $color-purple-900;
  color: $color-white;
  font-family: Sora, sans-serif;
  font-size: map.get($clb-font-sizes, 'default', 'xs');
  letter-spacing: 2px;
  text-align: center;

  .spletti--linktree {
    @include size(100dvw, 100dvh);
    margin: 0;
  }

  &-container {
    position: relative;
    z-index: 2;
  }
}
</style>
