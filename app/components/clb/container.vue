<template>
  <div class="container clb-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@include tablet-portrait-up {
  .clb-container {
    padding: spacing(4) spacing(17.5) !important;
  }
}

@include desktop-up {
  .clb-container {
    max-width: 1100px !important;
  }
}

@include desktop-medium-up {
  .clb-container {
    max-width: 1250px !important;
    padding: spacing(4) !important;
  }
}
</style>
