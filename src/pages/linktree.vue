<template>
  <main :class="['spletti', 'spletti--linktree', langClass]">
    <linktree-particles />

    <div class="linktree-container">
      <linktree-head
        :profille-image="getImageFullPath(linktreeData!.basic.profile_picture)"
        :username="linktreeData!.basic.username"
      />

      <linktree-links :links="linktreeData!.links" />

      <linktree-footer
        :fullname="linktreeData!.basic.fullname"
        :links="linktreeData!.footerLinks"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ApiResponse, Linktree } from '@/interfaces/api.interface';

const { locale } = useI18n();
const langClass = ref(`spletti-${locale.value}`);
const runtimeConfig = useRuntimeConfig();
const { apiUrl, siteTitle } = runtimeConfig.public;

const linktreeData: Ref<Linktree|null> = ref(null);

const response: ApiResponse = await $fetch(`${apiUrl}/single-types/linktree`);
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

function handleLinktreeData(response: ApiResponse): void {
  linktreeData.value = response.data as Linktree;
}
</script>

<style lang="scss">
.linktree {
  background: $color-purple-900;
  color: $color-white;
  font-family: Sora, sans-serif;
  font-size: map.get($font-sizes-copy, 'default', 'xs');
  letter-spacing: 2px;
  text-align: center;

  a {
    color: $color-white;
    text-decoration: none;

    &:hover {
      color: $color-secondary;
    }
  }

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
