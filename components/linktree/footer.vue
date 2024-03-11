<template>
  <div class="linktree-footer">
    <div class="linktree-footer__username">
      {{ name }}<span class="heading-dot">.</span>
    </div>

    <div class="linktree-footer__links">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.target"
        :target="item.openInNewTab ? '_blank' : '_self'"
        class="legal-link hover-underline"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n() // eslint-disable-line
const runtimeConfig = useRuntimeConfig();

const name = ref('Jan-Luca Splettstößer');
const links = reactive({});

const linktreeApiUrl = `${runtimeConfig.public.apiBase}/wp/v2/posts/422`;
const linktreeFooterData = await $fetch(linktreeApiUrl);
handleLinktreeResponse(linktreeFooterData);

// ---- Define page functions
function handleLinktreeResponse(data) {
  name.value = data.meta.name[0];

  links.legal_link = {
    target: data.meta.legal_link[0],
    text: t('linktree.footer.legal'),
    openInNewTab: false,
  };

  if (data.meta.privacy_link[0] !== '') {
    links.privacy_link = {
      target: data.meta.privacy_link[0],
      text: t('linktree.footer.privacy'),
      openInNewTab: false,
    };
  }
}
</script>

<style lang="scss" scoped>
.linktree-footer {
  padding: 0 0 spacing(12);

  &__username {
    margin-top: spacing(15);
    margin-bottom: spacing(4);
    font-size: 20px;
    font-weight: 700;
  }

  &__links {
    font-size: 14px;
  }
}

@include tablet-up {
  .linktree-footer {
    &__links {
      font-size: 16px;
    }
  }
}
</style>
