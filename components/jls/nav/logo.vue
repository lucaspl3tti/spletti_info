<template>
  <v-app-bar-title>
    <nuxt-link :class="`nav-logo h1 mb-0 ${font}`" to="/">
      Jan-Luca Splettstößer<span class="heading-dot">.</span>
    </nuxt-link>
  </v-app-bar-title>
</template>

<script setup>
const properties = defineProps({
  font: {
    type: String,
    default: 'handwriting-font',
  },
});
</script>

<style lang="scss">
.v-app-bar .v-app-bar-title {
  display: flex;
  place-items: center;
  height: 55px;
  border-radius: 25px;
  padding: spacing(1) spacing(5);
  padding-left: 0;
  color: $color-white;
  font-size: $font-size-h3;
  align-self: center;

  &:hover {
    color: darken($color-white, 10%);
  }
}

.nav-logo {
  color: inherit !important;
}

@include tablet-portrait-up {
  .v-app-bar .v-app-bar-title {
    box-shadow: none;
    font-size: 38px;
  }
}
</style>
