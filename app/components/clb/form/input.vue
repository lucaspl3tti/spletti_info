<template>
  <div
    :class="[
      'clb-form-input',
      `clb-form-input--${theme}`,
      {
        'clb-form-input--rounded': rounded,
        'clb-form-input--not-floating': isNotFloating,
      },
    ]"
  >
    <div :class="['clb-form-input__wrapper', { 'form-floating': !isNotFloating }]">
      <input
        :id="id"
        ref="input"
        v-model="model"
        :name="name"
        :type="type"
        class="form-control clb-form-input__input"
        :placeholder="label"
        :required="required"
        @input="onInput"
      >
      <label v-if="!isNotFloating" :for="id" class="clb-form-input__label">
        {{ label }}
      </label>
    </div>

    <transition>
      <div v-show="!isInvalid && hint && showHint" class="clb-form-input__hint">
        {{ hint }}
      </div>
    </transition>

    <transition>
      <div v-show="isInvalid" class="clb-form-input__hint clb-form-input__hint--error ">
        {{ validationMessage }}
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { ClbFormInputProperties } from '@/interfaces/components/form.interface';
import { useFocus } from '@vueuse/core';
import { colorVariants } from '@/consts/misc.consts';

const model = defineModel<string|number>({
  default: '',
  required: true,
});

const properties = withDefaults(defineProps<ClbFormInputProperties>(), {
  id: undefined,
  name: undefined,
  hint: undefined,
  isInvalid: false,
  isNotFloating: false,
  label: '',
  required: false,
  rounded: false,
  theme: 'light',
  type: 'text',
  validationMessage: undefined,
});

const emit = defineEmits(['input']);

checkComponentPropertyValidity(properties.theme, 'theme', 'form-checkbox', true, colorVariants);

const input = useTemplateRef('input');
const showHint = ref(false);
const { focused } = useFocus(input);

watch(focused, (focused) => {
  showHint.value = focused;
});

function onInput(event: InputEvent): void {
  emit('input', event);
}
</script>

<style lang="scss">
.clb-form-input {
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
  }

  &__hint {
    @include position(absolute, $top: 100%, $left: 0, $zIndex: 1);
    width: 100%;
    padding: spacing(1.5) spacing(4) 0;
    font-size: 10px;

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

  &.clb-form-input--rounded {
    --clb-input-border-radius: 6px;
  }

  &.clb-form-input--primary {
    --clb-input-border-color: #{$color-primary};
    --clb-input-bg-color: #{$color-primary};
    --clb-input-text-color: #{$color-white};
  }

  &.clb-form-input--secondary {
    --clb-input-border-color: #{$color-secondary};
    --clb-input-bg-color: #{$color-secondary};
    --clb-input-text-color: #{$color-white};
  }

  &.clb-form-input--light {
    --clb-input-border-color: #{$color-white};
    --clb-input-bg-color: #{$color-white};
    --clb-input-text-color: #{$color-black};
  }

  &.clb-form-input--dark {
    --clb-input-border-color: #{$color-dark};
    --clb-input-bg-color: #{$color-dark};
    --clb-input-text-color: #{$color-white};
  }
}

@include light-mode {
  .clb-form-input {
    &.clb-form-input--not-floating {
      .clb-form-input__input {
        @include placeholder {
          color: $color-gray-800 !important;
        }
      }
    }
  }
}

@include desktop-up {
  .clb-form-input {
    &__hint {
      font-size: map.get($clb-font-sizes, 'smaller', 'xs');
    }
  }
}
</style>
