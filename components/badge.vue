<template>
  <p class="c-badge handwriting-font">
    <slot> Badge Text </slot>
  </p>
</template>

<script>
export default {}
</script>

<style lang="scss">
.c-badge {
  margin: 0;
  border: 1px solid rgba(255, 109, 0, 1);
  border-radius: 15px;
  padding: 0 spacing(4);
  background-color: rgba(255, 134, 0, 0.4);
  font-size: 20px;
}
</style>
