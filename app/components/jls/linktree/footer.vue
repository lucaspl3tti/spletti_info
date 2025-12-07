<template>
  <div class="linktree-footer">
    <div class="linktree-footer__username">
      {{ fullname }}<span class="heading-dot">.</span>
    </div>

    <div class="linktree-footer__links">
      <clb-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.href"
        :target="item.target"
        :title="item.label"
        theme="light"
        is-external
        class="legal-link"
      >
        {{ item.label }}
      </clb-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JlsLinktreeFooterProperties } from '@/interfaces/content/linktree.interface';

// eslint-disable-next-line
const properties = withDefaults(defineProps<JlsLinktreeFooterProperties>(), {
  links: null,
  fullname: '',
});
</script>

<style lang="scss" scoped>
.linktree-footer {
  padding: 0 0 spacing(12);

  &__username {
    margin-top: spacing(15);
    margin-bottom: spacing(4);
    font-size: map.get($clb-font-sizes, 'default', 'xl');
    font-weight: $font-weight-bold;
  }

  &__links {
    font-size: map.get($clb-font-sizes, 'smaller', 'md');
  }
}

@include tablet-up {
  .linktree-footer {
    &__links {
      font-size: map.get($clb-font-sizes, 'small', 'md');
    }
  }
}
</style>
