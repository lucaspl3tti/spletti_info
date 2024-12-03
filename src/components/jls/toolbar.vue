<template>
  <v-toolbar class="jls-toolbar">
    <slot />
  </v-toolbar>
</template>

<style lang="scss">
.jls-toolbar {
  .v-toolbar__content {
    & > .v-btn:last-child {
      margin-right: spacing(4);
    }
  }
}
</style>
