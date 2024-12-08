<template>
  <v-dialog
    v-model="model"
    :class="[
      'jls-modal',
      `jls-modal--toolbar-${toolbarPosition}`,
      { 'jls-modal--fullscreen': fullscreen }
    ]"
    width="100%"
    :persistent="persistent"
    :transition="`dialog-${transition}-transition`"
    :fullscreen="fullscreen"
  >
    <jls-card
      class="mx-auto"
      :theme="theme"
      :width="width"
      :hide-actions="hideActions"
      :title="title"
      is-modal
    >
      <template #content>
        <jls-toolbar>
          <slot name="toolbar">
            <slot name="toolbarContent" />

            <v-spacer />

            <slot name="toolbarIcon">
              <jls-button
                variant="text"
                icon-btn
                @click="model = false"
              >
                <jls-icon pack="bi" name="x-lg" size="24" />
              </jls-button>
            </slot>
          </slot>
        </jls-toolbar>

        <div class="jls-card__body">
          <div class="jls-card__content">
            <div class="jls-card__title-wrapper">
              <slot name="title">
                <div v-if="title" class="jls-card__title text-h5">
                  {{ title }}
                </div>
              </slot>
            </div>

            <slot />
          </div>

          <v-card-actions v-if="!hideActions">
            <slot name="actions"></slot>
          </v-card-actions>
        </div>
      </template>
    </jls-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { ModalProperties } from '@/interfaces/components/misc.interface';
import { themeOptions } from '@/consts/misc';

const model = defineModel<boolean>({ default: false, required: true });
const properties = withDefaults(defineProps<ModalProperties>(), {
  title: undefined,
  theme: 'dark',
  width: '80%',
  hideActions: false,
  persistent: false,
  transition: undefined,
  fullscreen: false,
  toolbarPosition: 'absolute',
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.theme, 'theme', 'modal', true, themeOptions);
checkComponentPropertyValidity(properties.transition, 'transition', 'modal', false, themeOptions);
checkComponentPropertyValidity(properties.toolbarPosition, 'toolbar-position', 'link', true, ['absolute', 'relative']);
/* eslint-enable max-len */
</script>

<style lang="scss">
.jls-modal {
  &:not(.jls-modal--fullscreen) {
    & > .v-overlay__content {
      & > .jls-card {
        border-radius: 30px;
      }
    }
  }

  .jls-toolbar {
    background: transparent;
  }

  .jls-card-modal {
    .jls-card__container,
    .jls-card__body {
      height: 100%;
    }

    .jls-card__title {
      min-height: 16px;
    }

    .jls-card__body {
      @include flex(column, $justify: space-between);
      padding: spacing(5);
    }
  }

  &--toolbar-absolute {
    .jls-toolbar {
      @include absolute-position($top: 0, $left: 0);
    }

    .jls-card-modal {
      .jls-card__title {
        margin-right: spacing(10);
      }
    }
  }
}
</style>
