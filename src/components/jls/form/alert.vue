<template>
  <div class="contact-form__alert">
    <div :class="`alert__${state}`">
      <p>
        <jls-icon
          pack="bi"
          :name="alertIcon"
          size="24"
          color="currentColor"
        />
        {{ alertText }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormAlertProperties } from '@/interfaces/components/form.interface'; // eslint-disable-line max-len
import { stateOptions } from '~/src/consts/form';

const properties = withDefaults(defineProps<FormAlertProperties>(), {
  state: 'success',
});

checkComponentPropertyValidity(properties.state, 'state', 'form-alert', true, stateOptions); // eslint-disable-line max-len

const successText = await $trans('contact.success');
const errorText = await $trans('contact.error');
const alertText = computed(() => {
  return properties.state === 'success'
    ? successText
    : errorText;
});

const alertIcon = computed(() => {
  return properties.state === 'success' ? 'check' : 'exclamation';
});
</script>

<style lang="scss">
.contact-form {
  &__alert {
    .icon {
      margin-right: spacing(2);
    }

    p {
      margin: 0;
    }

    .alert {
      &__success {
        color: $color-success;
      }

      &__error {
        color: $color-error;
      }
    }
  }
}

@include tablet-up {
  .contact-form__alert {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
