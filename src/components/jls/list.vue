<template>
  <ul class="jls-list">
    <slot>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="jls-list__item"
      >
        <p>{{ item }}</p>
      </li>
    </slot>
  </ul>
</template>

<script setup lang="ts">
import type { ListProperties } from '@/interfaces/components/misc.interface';

// eslint-disable-next-line
const properties = withDefaults(defineProps<ListProperties>(), {
  items: undefined,
});
</script>

<style lang="scss">
.jls-list {
  margin-left: spacing(4);
  list-style: disc;

  &__item {
    p {
      margin-bottom: 0;
    }
  }
}
</style>
