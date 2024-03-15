<template>
  <p class="jls-badge handwriting-font">
    <slot> Badge Text </slot>
  </p>
</template>

<style lang="scss">
.jls-badge {
  margin: 0;
  border: 1px solid rgba($color: $color-secondary, $alpha: 1);
  border-radius: 15px;
  padding: 0 spacing(4);
  background-color: rgba($color: $color-secondary, $alpha: 0.4);
  font-size: 20px;
}

@include light-mode {
  .jls-badge {
    border-color: rgba($color: $color-white, $alpha: 1);
    background-color: rgba($color: $color-white, $alpha: 0.6);
    color: $color-black;
  }
}
</style>
