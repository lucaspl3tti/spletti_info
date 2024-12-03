<template>
  <div class="linktree-footer">
    <div class="linktree-footer__username">
      {{ fullname }}<span class="heading-dot">.</span>
    </div>

    <div class="linktree-footer__links">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.href"
        :target="item.target"
        class="legal-link hover-underline"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LinktreeFooterProperties } from '@/interfaces/components/linktree.interface'; // eslint-disable-line max-len

// eslint-disable-next-line
const properties = withDefaults(defineProps<LinktreeFooterProperties>(), {
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
    font-size: map.get($font-sizes-copy, 'default', 'xl');
    font-weight: $font-weight-bold;
  }

  &__links {
    font-size: map.get($font-sizes-copy, 'smaller', 'md');
  }
}

@include tablet-up {
  .linktree-footer {
    &__links {
      font-size: map.get($font-sizes-copy, 'small', 'md');
    }
  }
}
</style>
