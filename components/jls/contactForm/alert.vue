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

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const properties = defineProps({
  state: {
    type: String,
    default: 'success',
    required: true,
    validator(value) {
      return ['success', 'error'].includes(value);
    },
  },
});

const alertText = computed(() => {
  return properties.state === 'success'
    ? t('contact.success')
    : t('contact.error');
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
