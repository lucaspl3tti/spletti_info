<template>
  <div class="link-list">
    <jls-button
      v-for="(item, key) in links"
      :key="key"
      theme="secondary"
      :href="item.href"
      :target="item.target"
      uneven-border
      class="link-list__link"
    >
      <template #prepend>
        <jls-icon
          :pack="item.icon.pack"
          :name="item.icon.name"
          size="24"
          color="currentColor"
        />
      </template>

      {{ item.label }}
    </jls-button>
  </div>
</template>

<script setup lang="ts">
import type { LinktreeLinksProperties } from '@/interfaces/components/linktree.interface'; // eslint-disable-line max-len

// eslint-disable-next-line
const properties = withDefaults(defineProps<LinktreeLinksProperties>(), {
  links: null,
});
</script>

<style lang="scss">
.link-list {
  @include grid($gap: spacing(4));
  place-items: center;

  &__link {
    width: 250px;

    .nuxt-icon {
      transform: translateX(0) !important;
    }
  }
}

.first-link {
  margin-top: 0;
}
</style>
