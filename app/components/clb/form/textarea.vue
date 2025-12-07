<template>
  <div
    :class="[
      'clb-form-textarea',
      `clb-form-textarea--${theme}`,
      {
        'clb-form-textarea--rounded': rounded,
        'clb-form-textarea--not-floating': isNotFloating,
      },
    ]"
  >
    <div class="clb-form-textarea__wrapper form-floating">
      <textarea
        :id="id"
        ref="input"
        v-model="model"
        :name="name"
        class="form-control clb-form-textarea__input"
        :placeholder="label"
        :required="required"
        :style="{ height: inputHeight }"
        @input="onInput"
      />
      <label :for="id" class="clb-form-textarea__label">
        {{ label }}
      </label>
    </div>

    <transition>
      <div v-show="!isInvalid &&hint && showHint" class="clb-form-textarea__hint">
        {{ hint }}
      </div>
    </transition>

    <transition>
      <div v-show="isInvalid" class="clb-form-input__hint clb-form-input__hint--error">
        {{ validationMessage }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { ClbFormTextareaProperties } from '@/interfaces/components/form.interface';
import { useFocus } from '@vueuse/core';
import { colorVariants } from '@/consts/misc.consts';
import { Formatting } from '@helper/formatting.helper';

const model = defineModel<string>({
  default: '',
  required: true,
});

const properties = withDefaults(defineProps<ClbFormTextareaProperties>(), {
  id: undefined,
  name: undefined,
  hint: undefined,
  isInvalid: false,
  label: '',
  required: false,
  rounded: false,
  rows: '5',
  theme: 'light',
  validationMessage: undefined,
});

const emit = defineEmits(['input']);

checkComponentPropertyValidity(properties.theme, 'theme', 'form-checkbox', true, colorVariants);

const input = useTemplateRef('input');
const showHint = ref(false);
const defaultInputHeightPx = 26;
const inputHeight = computed(() => {
  const height = defaultInputHeightPx * Number(properties.rows);
  return Formatting.convertToUnit(height, 'px');
});
const { focused } = useFocus(input);

watch(focused, (focused) => {
  showHint.value = focused;
});

function onInput(event: InputEvent): void {
  emit('input', event);
}
</script>

<style lang="scss">
.clb-form-textarea {
  --clb-input-border-radius: 0;
  --clb-input-border-color: #{$color-gray-600};
  --clb-input-bg-color: #{$color-gray-600};
  --clb-input-text-color: #{$color-white};
  position: relative;
  z-index: 1;
  margin-bottom: spacing(4);

  &__input,
  &__label {
    color: var(--clb-input-text-color) !important;
  }

  &__input {
    position: relative;
    z-index: 10;
    border-color: var(--clb-input-border-color) !important;
    border-radius: var(--clb-input-border-radius) !important;
    background-color: var(--clb-input-bg-color) !important;
  }

  &__label {
    z-index: 12 !important;
    box-shadow: none !important;

    &::after {
      display: none !important;
    }
  }

  &__hint {
    @include position(absolute, $top: 100%, $left: 0, $zIndex: 1);
    width: 100%;
    padding: spacing(1.5) spacing(4) 0;
    font-size: map.get($clb-font-sizes, 'smaller', 'xs');

    &--error {
      color: $color-error;
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: translate $animation-speed ease, opacity $animation-speed ease;
  }

  .v-enter-from,
  .v-leave-to {
    z-index: -1;
    translate: 0 -100%;
    opacity: 0;
  }

  &.clb-form-textarea--rounded {
    --clb-input-border-radius: 6px;
  }

  &.clb-form-textarea--primary {
    --clb-input-border-color: #{$color-primary};
    --clb-input-bg-color: #{$color-primary};
    --clb-input-text-color: #{$color-white};
  }

  &.clb-form-textarea--secondary {
    --clb-input-border-color: #{$color-secondary};
    --clb-input-bg-color: #{$color-secondary};
    --clb-input-text-color: #{$color-white};
  }

  &.clb-form-textarea--light {
    --clb-input-border-color: #{$color-white};
    --clb-input-bg-color: #{$color-white};
    --clb-input-text-color: #{$color-black};
  }

  &.clb-form-textarea--dark {
    --clb-input-border-color: #{$color-dark};
    --clb-input-bg-color: #{$color-dark};
    --clb-input-text-color: #{$color-white};
  }
}

@include light-mode {
  .clb-form-textarea {
    &.clb-form-textarea--not-floating {
      .clb-form-textarea__input {
        @include placeholder {
          color: $color-gray-800 !important;
        }
      }
    }
  }
}
</style>
