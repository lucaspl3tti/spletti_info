<template>
  <div class="jls-bento-card">
    <div v-if="!Utilities.isEmpty(title)" class="jls-bento-card__title">
      {{ title }}
    </div>

    <div class="jls-bento-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang=ts>
import type { BentoCardProperties } from '@/interfaces/components/cards.interface'; // eslint-disable-line max-len
import { Utilities } from '~/src/helper/utilities.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<BentoCardProperties>(), {
  title: undefined,
});
</script>

<style lang="scss">
.jls-bento-card {
  border-radius: 30px;
  background-color: $color-primary-var;
  padding: spacing(5);
  color: $color-white;

  &__body {
    @include flex(column);
    height: 100%;
  }
}
</style>
