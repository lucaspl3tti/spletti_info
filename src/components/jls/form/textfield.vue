<template>
  <v-text-field
    v-model="model"
    :class="[
      'jls-form-text-field',
      `jls-form-text-field--${theme}`,
      `jls-form-text-field--${variantType}`,
    ]"
    :type="type"
    :theme="theme"
    :variant="variantType"
    :placeholder="placeholder"
    :hint="hint"
    :persistent-hint="persistentHint"
    :clearable="clearable"
    :suffix="suffix"
  >
    <template v-if="prependIcon" #prepend>
      <jls-icon
        :pack="iconPack"
        :name="prependIcon"
        size="20"
        @click="onClickPrepend"
      />
    </template>

    <template v-if="prependInnerIcon" #prepend-inner>
      <jls-icon
        :pack="iconPack"
        :name="prependInnerIcon"
        size="20"
        @click="onClickPrependInner"
      />
    </template>

    <template v-if="label" #label>
      {{ label }}
    </template>

    <template v-if="appendInnerIcon" #append-inner>
      <jls-icon
        :pack="iconPack"
        :name="appendInnerIcon"
        size="20"
        @click="onClickAppendInner"
      />
    </template>

    <template v-if="appendIcon" #append>
      <jls-icon
        :pack="iconPack"
        :name="appendIcon"
        size="20"
        @click="onClickAppend"
      />
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
import type {
  FormTextfieldModel,
  FormInputProperties,
} from '@/interfaces/components/form.interface';

import { variantOptions, typeOptions } from '@/consts/form';
import { themeOptions } from '@/consts/misc';

const model = defineModel<FormTextfieldModel|null>({
  default: '',
  required: true,
});

const properties = withDefaults(defineProps<FormInputProperties>(), {
  label: undefined,
  theme: 'light',
  variant: 'outlined',
  type: 'input',
  placeholder: undefined,
  hint: undefined,
  persistentHint: false,
  clearable: false,
  iconPack: 'bi',
  prependIcon: undefined,
  prependInnerIcon: undefined,
  appendIcon: undefined,
  appendInnerIcon: undefined,
  suffix: undefined,
  autoGrow: false,
});

/* eslint-disable max-len */
checkComponentPropertyValidity(properties.theme, 'theme', 'form-textarea', true, themeOptions);
checkComponentPropertyValidity(properties.variant, 'variant', 'form-textarea', true, variantOptions);
checkComponentPropertyValidity(properties.type, 'type', 'form-textarea', true, typeOptions);
checkComponentPropertyValidity(properties.iconPack, 'icon-pack', 'form-textarea', true);
/* eslint-enable max-len */

const emit = defineEmits([
  'click:prepend',
  'click:prepend-inner',
  'click:append',
  'click:append-inner',
]);

const variantType = computed(() => {
  if (properties.variant === 'filled') {
    return 'solo-filled';
  }

  return properties.variant;
});

function onClickPrepend() {
  emit('click:prepend');
}

function onClickPrependInner() {
  emit('click:prepend-inner');
}

function onClickAppend() {
  emit('click:append');
}

function onClickAppendInner() {
  emit('click:append-inner');
}
</script>

<style lang="scss">
.jls-form-text-field {
  .v-field {
    border-radius: $input-border-radius;

    &--focused {
      box-shadow:
        0 0 0 .25rem color-mix(in srgb, "currentColor" 20%, transparent);
    }
  }

  &.v-input--error {
    &:not(.v-input--disabled) {
      .v-label.v-field-label,
      .v-input__details > .v-icon,
      .v-input__details .v-messages,
      .v-input__prepend > .v-icon,
      .v-input__prepend .v-messages,
      .v-input__append > .v-icon,
      .v-input__append .v-messages {
        color: $color-error !important;
      }
    }
  }

  &--light {
    .v-field {
      background: $color-white;
      color: $color-white;
    }
  }

  &--dark {
    .v-field {
      background: $color-dark;
      color: $color-dark;
    }
  }

  &--primary {
    .v-field {
      background: $color-purple-300;
      color: $color-purple-300;
    }
  }

  &--secondary {
    .v-field {
      background: $color-secondary;
      color: $color-secondary;
    }
  }

  &--underlined {
    .v-field {
      border-radius: 0 !important;
    }
  }

  &--solo-filled {
    .v-field {
      border: 2px solid "currentColor";

      &.v-field--error  {
        color: $color-error;
      }
    }

    &.jls-form-text-field--light {
      .v-label,
      .v-field__input {
        color: $color-black;
      }
    }

    &.jls-form-text-field--dark,
    &.jls-form-text-field--primary,
    &.jls-form-text-field--secondary {
      .v-label,
      .v-field__input {
        color: $color-white;
      }
    }
  }
}

@include light-mode {
  .jls-form-text-field {
    &--primary {
      .v-field {
        color: $color-primary;
      }
    }
  }
}
</style>
