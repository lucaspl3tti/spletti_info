<template>
  <b-modal
    :id="id"
    ref="modalElement"
    v-model="model"
    :class="[
      'clb-modal',
      `clb-modal--${theme}`,
    ]"
    :fullscreen="fullscreen"
    header-close-variant="link"
    :header-close-class="headerCloseClass"
    :no-header="noHeader"
    :no-footer="noFooter"
    :title="title"
  >
    <template #title>
      <slot name="title"></slot>
    </template>

    <template #header-close>
      <slot name="header-close">
        <clb-icon
          name="x-lg"
          pack="bi"
          size="24"
        />
      </slot>
    </template>

    <slot />

    <template #cancel="{ hide }">
      <slot name="cancel">
        <clb-button
          v-if="!okOnly"
          ref="_cancelButton"
          :class="cancelClass"
          :theme="cancelTheme"
          :variant="cancelVariant"
          :size="actionSize"
          :disabled="disableCancel"
          @click="hide('cancel')"
        >
          {{ cancelTitle }}
        </clb-button>
      </slot>
    </template>

    <template #ok="{ hide }">
      <slot name="ok">
        <clb-button
          ref="_okButton"
          :class="okClass"
          :theme="okTheme"
          :variant="okVariant"
          :size="actionSize"
          :disabled="disableOk"
          @click="hide('ok')"
        >
          {{ okTitle }}
        </clb-button>
      </slot>
    </template>
  </b-modal>
</template>

<script lang="ts" setup>
import type { ClbModalProperties } from '@/interfaces/components/modal.interface';
import { colorVariants } from '@/consts/misc.consts';

const model = defineModel<boolean>({ default: false, required: true });

const properties = withDefaults(defineProps<ClbModalProperties>(), {
  actionSize: 'md',
  cancelClass: undefined,
  cancelTheme: 'secondary',
  cancelTitle: 'Cancel',
  cancelVariant: 'ghost',
  disableCancel: false,
  disableOk: false,
  fullscreen: false,
  id: undefined,
  noHeader: false,
  noFooter: false,
  okClass: undefined,
  okOnly: false,
  okTheme: 'primary',
  okTitle: 'OK',
  okVariant: 'default',
  theme: 'dark',
  title: undefined,
});

checkComponentPropertyValidity(properties.theme, 'theme', 'modal', true, colorVariants);

// watch(() => model.value, (newValue) => {
//   console.log('show modal?', newValue);
// });

const modalElement = useTemplateRef('modalElement');
const headerCloseClass = computed<string>(() => {
  const closeClasses = ['d-flex', 'p-0'];

  if (properties.theme === 'light') {
    closeClasses.push('text-dark');
  } else {
    closeClasses.push('text-light');
  }

  return closeClasses.join(' ');
});

defineExpose({
  hide(): void {
    modalElement.value?.hide();
  },
  show(): void {
    modalElement.value?.show();
  },
  toggle(): void {
    modalElement.value?.toggle();
  },
  visible(): boolean | undefined {
    return modalElement.value?.visible;
  },
  elementId(): string | undefined {
    return modalElement.value?.id;
  },
});
</script>

<style lang="scss">
.clb-modal {
  .modal-content {
    max-height: 100%;
  }

  .modal-header {
    justify-content: space-between;
    border-bottom: 0;

    .btn-link.text-light {
      &:hover {
        --bs-text-opacity: 0.75;
      }
    }
  }

  .modal-body {
    margin: calc(var(--bs-modal-padding) * 1.5) 0;
    padding: 0 var(--bs-modal-padding);
    overflow-y: auto;
  }

  .modal-footer {
    border-top: 0;
    padding: var(--bs-modal-footer-padding);
  }

  .modal-dialog {
    --bs-modal-footer-padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    padding: var(--bs-modal-margin) 0;

    &.modal-lg {
      --bs-modal-header-padding: #{spacing(6)} #{spacing(6)} 0;
      --bs-modal-footer-padding: 0 #{spacing(6)} #{spacing(6)};
      --bs-modal-padding: #{spacing(4)};
      --bs-modal-padding-x: #{spacing(6)};

      .modal-content {
        border-radius: 30px;
      }

      .modal-body {
        margin: var(--bs-modal-padding) 0;
        padding: 0 var(--bs-modal-padding-x);
      }
    }
  }

  &--primary {
    .modal-content {
      background-color: $color-primary-var;
      color: $color-white;
    }
  }

  &--secondary {
    .modal-content {
      background-color: $color-secondary-var;
      color: $color-white;
    }
  }

  &--light {
    .modal-content {
      background-color: $color-white;
      color: $color-black;
    }
  }

  &--dark {
    .modal-content {
      background-color: $color-black;
      color: $color-white;
    }
  }
}
</style>
