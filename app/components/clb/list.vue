<template>
  <component :is="listType" class="clb-list">
    <slot>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="clb-list__item"
      >
        <p>{{ item }}</p>
      </li>
    </slot>
  </component>
</template>

<script setup lang="ts">
import type { ClbListProperties } from '@/interfaces/components/list.interface';

const properties = withDefaults(defineProps<ClbListProperties>(), {
  items: undefined,
  listType: 'ul',
});

checkComponentPropertyValidity(properties.listType, 'list-type', 'list', true, ['ul', 'ol']);
</script>

<style lang="scss">
.clb-list {
  padding-left: spacing(4);

  &__item {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
