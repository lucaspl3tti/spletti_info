<template>
  <div class="clb-card-bento">
    <div v-if="showTitle" class="clb-card-bento__title">
      <slot name="title">
        <span v-if="!Utilities.isEmpty(title)">
          {{ title }}
        </span>
      </slot>
    </div>

    <div class="clb-card-bento__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang=ts>
import type { ClbBentoCardProperties } from '@/interfaces/components/card.interface';
import Utilities from '@helper/utilities.helper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<ClbBentoCardProperties>(), {
  title: undefined,
  showTitle: false,
});
</script>

<style lang="scss">
.clb-card-bento {
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
