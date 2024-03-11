<template>
  <div class="jls-bento-card">
    <div v-if="title" class="jls-bento-card__title">{{ title }}</div>

    <div class="jls-bento-card__body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const properties = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss">
.jls-bento-card {
  border-radius: 30px;
  padding: 20px;
  background-color: $color-white;
  color: $color-black;
}
</style>
