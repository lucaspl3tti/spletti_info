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
import type { FormAlertProperties } from '@/interfaces/components/form.interface';
import { formAlertStates } from '@/consts/misc.consts';

const properties = withDefaults(defineProps<FormAlertProperties>(), {
  state: 'success',
});

checkComponentPropertyValidity(properties.state, 'state', 'form-alert', true, formAlertStates);

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { locale } = useI18n();

const successText = await $trans(apiUrl, 'contact.success', locale.value);
const errorText = await $trans(apiUrl, 'contact.error', locale.value);
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
