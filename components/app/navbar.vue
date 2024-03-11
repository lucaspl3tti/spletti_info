<template>
  <v-layout class="c-app-bar">
    <jls-nav-sidebar
      :is-open-drawer="openSidebar"
      @closed-drawer="onClosedDrawer"
    />

    <v-app-bar prominent>
      <v-container>
        <jls-nav-logo hide-on="xl" />

        <jls-nav-navigation />

        <jls-nav-toggle
          :is-open-sidebar="openSidebar"
          @toggled="onToggledSidebar"
        />
      </v-container>
    </v-app-bar>
  </v-layout>
</template>

<script setup>
// eslint-disable-next-line
const properties = defineProps({
  color: {
    type: String,
    default: 'deep-purple-darken-4',
  },
});

const openSidebar = ref(false);

function onToggledSidebar(toggled) {
  openSidebar.value = toggled.value;
}

function onClosedDrawer(newValue) {
  openSidebar.value = newValue;
}
</script>

<style lang="scss">
.c-app-bar {
  .v-app-bar {
    left: 0 !important;
    height: 90px;
    width: 100vw !important;
    margin: 0;
    background-color: $color-purple-800;
    padding-top: spacing(4);
    border-radius: 0 0 16px 16px;
    box-shadow: 0 0 12px rgba($color: #000000, $alpha: 0.6);

    .v-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .c-navigation {
      display: none;

      &--sidebar {
        display: block;
      }
    }
  }
}
</style>
