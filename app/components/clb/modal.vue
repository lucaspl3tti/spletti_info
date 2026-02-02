<template>
  <teleport :to="teleportTo" :disabled="teleportDisabled">
    <transition :appear="model">
      <div
        v-if="isVisible"
        :id="computedId"
        ref="modalElement"
        :class="[
          'modal',
          'fade',
          'clb-modal',
          `clb-modal--${theme}`,
        ]"
        tabindex="-1"
        :aria-hidden="!model"
        :aria-labeldby="title ? `${computedId}-label` : undefined"
        role="dialog"
        v-bind="$attrs"
      >
        <div
          :class="[
            'modal-dialog',
            {
              [`modal-${size}`]: !fullscreen && size !== 'md',
              'modal-fullscreen': fullscreen,
            },
          ]"
        >
          <div class="modal-content">
            <div v-if="!noHeader" :id="`${computedId}-label`" class="modal-header">
              <slot name="header">
                <component :is="titleTag" class="modal-title">
                  <slot name="title">
                    {{ title }}
                  </slot>
                </component>

                <!-- @TODO: add translation -->
                <clb-button
                  v-if="!noHeaderClose"
                  ref="closeButton"
                  class="modal-close"
                  :theme="closeButtonTheme"
                  variant="text"
                  aria-label="Close"
                  @click="hide"
                >
                  <slot name="header-close">
                    <clb-icon
                      name="x-lg"
                      pack="bi"
                      size="24"
                    />
                  </slot>
                </clb-button>
              </slot>
            </div>

            <div class="modal-body">
              <slot></slot>
            </div>

            <div v-if="!noFooter" class="modal-footer">
              <slot name="footer">
                <slot name="cancel">
                  <clb-button
                    v-if="!okOnly"
                    ref="_cancelButton"
                    :class="cancelClass"
                    :theme="cancelTheme"
                    :variant="cancelVariant"
                    :size="actionSize"
                    :disabled="disableCancel"
                    @click="hide"
                  >
                    {{ cancelTitle }}
                  </clb-button>
                </slot>

                <slot name="ok">
                  <clb-button
                    ref="_okButton"
                    :class="okClass"
                    :theme="okTheme"
                    :variant="okVariant"
                    :size="actionSize"
                    :disabled="disableOk"
                    @click="confirm"
                  >
                    {{ okTitle }}
                  </clb-button>
                </slot>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import type { ClbColorVariants } from '@/types/misc.types';
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
  noBackdrop: false,
  noFooter: false,
  noHeader: false,
  noHeaderClose: false,
  noKeyboard: false,
  okClass: undefined,
  okOnly: false,
  okTheme: 'primary',
  okTitle: 'OK',
  okVariant: 'default',
  teleportDisabled: false,
  teleportTo: 'body',
  theme: 'dark',
  title: undefined,
  titleTag: 'h5',
});

checkComponentPropertyValidity(properties.theme, 'theme', 'modal', true, colorVariants);

const emit = defineEmits(['hide', 'hidden', 'show', 'shown', 'confirm']);

const computedId = useBvnId(() => properties.id, 'modal');
const modalElement = useTemplateRef('modalElement');
const modalInstance = ref<any>(null);
const isVisible = ref(false);

const closeButtonTheme = computed<ClbColorVariants>(() => {
  if (properties.theme === 'light') {
    return 'dark';
  }

  return 'light';
});

onMounted(async () => {
  if (model.value) {
    isVisible.value = true;

    await nextTick();
    await initializeBootstrapModal();

    modalInstance.value?.show();
  }
});

onUnmounted(() => {
  if (modalInstance.value) {
    modalInstance.value.dispose();
  }
});

watch(
  () => model.value,
  async (shouldShow) => {
    if (shouldShow) {
      isVisible.value = true;

      await nextTick();
      await initializeBootstrapModal();

      modalInstance.value?.show();
    } else {
      modalInstance.value?.hide();
    }
  },
);

async function initializeBootstrapModal() {
  if (!modalElement.value || modalInstance.value) {
    return;
  }

  const { Modal } = await import('bootstrap');

  modalInstance.value = Modal.getOrCreateInstance(modalElement.value, {
    backdrop: !properties.noBackdrop,
    keyboard: !properties.noKeyboard,
  });

  modalElement.value.addEventListener('hidden.bs.modal', () => {
    hide();
    emit('hidden');

    setTimeout(() => {
      if (!model.value) {
        isVisible.value = false;
        modalInstance.value?.dispose();
        modalInstance.value = null;
      }
    }, 300);
  });

  modalElement.value.addEventListener('shown.bs.modal', () => {
    emit('shown');
  });
}

function hide() {
  model.value = false;
  emit('hide');
}

function show() {
  model.value = false;
  emit('show');
}

function confirm() {
  emit('confirm');
}

defineExpose({
  hide,
  show,
  toggle(): void {
    modalInstance.value?.toggle();
  },
  visible(): boolean | undefined {
    return modalInstance.value?.visible;
  },
  elementId(): string {
    return computedId.value;
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

    .modal-close {
      min-width: 0 !important;
      padding: 0 !important;
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
