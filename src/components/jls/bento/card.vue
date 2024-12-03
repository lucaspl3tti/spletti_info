<template>
  <div class="jls-bento-card">
    <div v-if="title" class="jls-bento-card__title">
      {{ title }}
    </div>

    <div class="jls-bento-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang=ts>
import type { BentoCardProperties } from '@/interfaces/components/cards.interface'; // eslint-disable-line max-len

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<BentoCardProperties>(), {
  title: '',
});
</script>

<style lang="scss">
.jls-bento-card {
  border-radius: 30px;
  background-color: $color-white;
  padding: spacing(5);
  color: $color-black;

  &__body {
    @include flex(column);
    height: 100%;
  }
}

@include light-mode {
  .jls-bento-card {
    background-color: $color-primary-var;
    color: $color-white;
  }
}
</style>
