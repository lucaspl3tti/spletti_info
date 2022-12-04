<template>
  <div class="contact-form__alert">
    <div :class="`alert__${state}`">
      <p>
        <Icon
          :name="`bi:${alertIcon}`"
          size="24"
          color="currentColor"
          :class="`bi-${alertIcon}`"
        />
        {{ alertText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: {
      type: String,
      default: 'success',
      required: true,
      validator(value) {
        return ['success', 'error'].includes(value);
      }
    },
  },

  data() {
    return {
      alertText: this.state === 'success' ? this.$t('contact.success') : this.$t('contact.error'),
      alertIcon: this.state === 'success' ? 'check' : 'exclamation',
    }
  },
}
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
