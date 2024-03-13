<template>
  <div class="c-sidebar">
    <v-navigation-drawer
      v-model="drawer"
      class="c-sidebar__drawer"
      disable-resize-watcher
    >
      <div class="c-sidebar__header">
        <v-container>
          <jls-nav-logo />
          <jls-close-icon @click="onClickCloseSidebar" />
        </v-container>
      </div>

      <v-list class="c-sidebar__socials">
        <div class="social-list-nav">
          <jls-social-list icon-size="28" is-nav />
        </div>
      </v-list>

      <v-divider />

      <jls-nav-navigation is-sidebar />
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpenDrawer: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['closed-drawer']);

const isOpenDrawer = computed(() => props.isOpenDrawer);
const drawer = ref(false);

watch(isOpenDrawer, () => {
  drawer.value = isOpenDrawer.value;

  if (!drawer.value) {
    closeDrawer();
  }
});

watch(drawer, () => {
  closeDrawer();
});

function closeDrawer() {
  emit('closed-drawer', drawer.value);
}

function onClickCloseSidebar() {
  drawer.value = false;
}
</script>

<style lang="scss">
.c-sidebar {
  &__socials {
    padding-bottom: spacing(6);
    overflow: visible !important;
  }

  &__header {
    position: absolute;
    top: spacing(5);
    left: 0;
    width: 100%;
    max-width: none;

    .v-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }

  .v-navigation-drawer {
    width: 100% !important;
    background-color: rgba($color: $color-purple-800, $alpha: 0.95);
    padding: spacing(8);

    &__content {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
  }

  .c-navigation {
    padding-top: spacing(2);
  }

  .v-app-bar-title {
    color: $color-white;
    font-size: 28px;
    line-height: 32px;
  }

  .c-nav-link {
    padding: spacing(2) spacing(3);
    color: $color-white;

    .hover-underline {
      background-image: linear-gradient($color-purple-300, $color-purple-300);
    }

    &:focus {
      color: $color-white;
    }

    &:not(.active) {
      &:hover {
        color: darken($color-white, 20%);
      }
    }

    &.active {
      color: $color-white;
    }

    &__dash {
      background-color: $color-white;
    }

    &--portfolio,
    &--about {
      &:hover {
        color: darken($color-secondary, 5%) !important;

        .c-nav-link__dash {
          background-color: darken($color-secondary, 5%);
        }

        .bi {
          color: darken($color-secondary, 5%) !important;
        }

        .hover-underline {
          background-size: 100% 2px;
        }
      }

      .bi {
        color: $color-secondary !important;
      }

      .hover-underline {
        background-image: linear-gradient(
          darken($color-secondary, 5%),
          darken($color-secondary, 5%)
        );
      }
    }

    &--home,
    &--skills,
    &--contact {
      &:hover {
        color: darken($color-orange-010, 5%) !important;

        .c-nav-link__dash {
          background-color: darken($color-orange-010, 5%);
        }

        .bi {
          color: darken($color-orange-010, 5%) !important;
        }

        .hover-underline {
          background-size: 100% 2px;
        }
      }

      .bi {
        color: $color-orange-010 !important;
      }

      .hover-underline {
        background-image: linear-gradient(
          darken($color-orange-010, 5%),
          darken($color-orange-010, 5%)
        );
      }
    }

    .bi {
      &-window-stack,
      &-chat-left-quote {
        color: $color-secondary !important;
      }

      &-house,
      &-boxes,
      &-chat-dots {
        color: $color-orange-010 !important;
      }
    }
  }
}

@include tablet-portrait-up {
  .c-sidebar {
    .v-app-bar-title {
      box-shadow: none;
      font-size: 38px;
    }
  }
}
</style>
