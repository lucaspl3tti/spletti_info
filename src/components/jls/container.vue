<template>
  <v-container class="jls-container">
    <slot />
  </v-container>
</template>

<style lang="scss">
@include tablet-portrait-up {
  .jls-container {
    padding: spacing(4) spacing(17.5) !important;
  }
}

@include desktop-up {
  .jls-container {
    max-width: 1100px !important;
  }
}

@include desktop-medium-up {
  .jls-container {
    max-width: 1250px !important;
    padding: spacing(4) !important;
  }
}
</style>
