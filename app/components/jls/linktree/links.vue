<template>
  <div class="link-list">
    <clb-button
      v-for="(item, key) in links"
      :key="key"
      theme="secondary"
      border-style="asymmetrical"
      :href="item.href"
      :target="item.target"
      class="link-list__link"
      :title="item.label"
    >
      <template #prepend>
        <clb-icon
          :pack="item.icon.pack"
          :name="item.icon.name"
          size="24"
          color="currentColor"
        />
      </template>

      {{ item.label }}
    </clb-button>
  </div>
</template>

<script setup lang="ts">
import type { JlsLinktreeLinksProperties } from '@/interfaces/content/linktree.interface';

// eslint-disable-next-line
const properties = withDefaults(defineProps<JlsLinktreeLinksProperties>(), {
  links: null,
});
</script>

<style lang="scss">
.link-list {
  @include grid($gap: spacing(4));
  place-items: center;

  &__link {
    width: 250px;
    font-size: map.get($clb-font-sizes, 'default', 'xs') !important;
    letter-spacing: 0;

    .nuxt-icon {
      transform: translateX(0) !important;
    }
  }
}

.first-link {
  margin-top: 0;
}
</style>
