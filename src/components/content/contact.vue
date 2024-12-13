<template>
  <jls-section
    id="contact"
    ref="contactElement"
    name="contact-me"
  >
    <jls-heading
      heading-type="h2"
      :text="$t('contact.heading')"
      position="center"
      class="heading--contact"
    />

    <jls-subheading
      :text="$t('contact.subheading')"
      is-html
      position="center"
    />

    <div class="contact-form">
      <jls-form
        ref="contactForm"
        :action="`${apiUrl}/contact`"
        method="post"
        class="contact-form__form"
        @submit.prevent="onFormSubmit"
      >
        <jls-form-alert v-if="success" state="success" />
        <jls-form-alert v-if="error" state="error" />

        <div class="form-group form-group--name">
          <jls-form-textfield
            id="your-name"
            v-model="name"
            :label="$t('contact.inputs.name.label')"
            :placeholder="$t('contact.inputs.name.placeholder')"
            :theme="colorMode"
            variant="filled"
            type="input"
            name="your-name"
            required
            :rules="[() => !!name || $t('contact.inputs.required')]"
          />
        </div>

        <div class="form-group form-group--mail">
          <jls-form-textfield
            id="your-email"
            v-model="email"
            :label="$t('contact.inputs.email.label')"
            :placeholder="$t('contact.inputs.email.placeholder')"
            :theme="colorMode"
            variant="filled"
            type="email"
            name="your-email"
            required
            :hint="$t('contact.inputs.email.help')"
            :rules="[
              () => !!email || $t('contact.inputs.required'),
              () => Utilities.isValidEmail(email)
                || $t('contact.inputs.email.invalid'),
            ]"
          />
        </div>

        <div class="form-group form-group--subject">
          <jls-form-textfield
            id="your-subject"
            v-model="subject"
            :label="$t('contact.inputs.subject.label')"
            :placeholder="$t('contact.inputs.subject.placeholder')"
            :theme="colorMode"
            variant="filled"
            type="input"
            name="your-subject"
            required
            :rules="[() => !!subject || $t('contact.inputs.required')]"
          />
        </div>

        <div class="form-group form-group--message">
          <jls-form-textarea
            id="your-message"
            v-model="message"
            :label="$t('contact.inputs.message.label')"
            :placeholder="$t('contact.inputs.message.placeholder')"
            :theme="colorMode"
            variant="filled"
            name="your-message"
            required
            :rules="[() => !!message || $t('contact.inputs.required')]"
          />
        </div>

        <div class="contact-form__end">
          <div class="contact-form__privacy">
            <jls-form-checkbox
              id="contact-privacy"
              v-model="userAcceptedPrivacy"
              theme="light"
              @change="onChangePrivacySettings"
            />
            <p v-html="$t('contact.privacyNotice', { link: privacyLink })" />
          </div>

          <div
            v-if="privacyError"
            class="contact-form__privacy-error is-invalid"
          >
            <p>{{ $t('contact.privacyError') }}</p>
          </div>
        </div>


        <jls-button
          type="submit"
          theme="secondary"
          uneven-border
          class="contact-form__submit"
        >
          {{ $t('contact.submitBtn') }}
          <template #append>
            <jls-icon
              pack="bi"
              name="arrow-right"
              size="24"
              color="currentColor"
            />
          </template>
        </jls-button>
      </jls-form>
    </div>
  </jls-section>
</template>

<script setup lang="ts">
import type {
  ApiResponse,
  ContactFormRequestData,
} from '@/interfaces/api.interface';
import { Utilities } from '@/helper/utilities.helper';

const { t } = useI18n();
const { store } = useColorMode();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);
const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const contactElement = ref();
const contactForm = ref();

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const userAcceptedPrivacy = ref(false);

const formData = computed<ContactFormRequestData>(() => {
  return {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
});

const privacyError = ref(false);
const privacyLink = `<a class="hover-underline" href="/privacy" title="Privacy Policy">${t('general.wordings.here')}</a>`; // eslint-disable-line max-len
const formIsValid = ref(true);
const success = ref(false);
const error = ref(false);

function validateForm(): void {
  formIsValid.value = contactForm.value.validate();
  privacyError.value = !userAcceptedPrivacy.value;
}

function onChangePrivacySettings(): void {
  privacyError.value = !userAcceptedPrivacy.value;
}

function onFormSubmit(event: Event): void {
  validateForm();

  if (!formIsValid.value || !userAcceptedPrivacy.value) {
    error.value = true;
    return;
  }

  error.value = false;

  const formElement = event.target as HTMLFormElement;
  const { action, method } = formElement;
  const body = new FormData();

  Utilities.iterate(
    formData.value,
    (value: string, key: string|undefined): void => {
      body.append(key!, value);
    },
  );

  fetch(action, {
    method,
    body,
  })
    .then((response: Response): Promise<ApiResponse> => response.json())
    .then((response: ApiResponse): void => {
      const submitSuccess = response.success;

      if (!submitSuccess) {
        success.value = false;
        error.value = true;
        return;
      }

      error.value = false;
      success.value = true;
      resetForm();
    })
    .catch((error): void => {
      // Handle the case when there's a problem with the request
      console.error(error); // eslint-disable-line no-console
      error.value = true;
    });
}

function resetForm(): void {
  if (success.value) {
    setTimeout(() => (success.value = false), 4000);
  }

  resetValidation();
  contactForm.value.reset();
}

function resetValidation(): void {
  contactForm.value.resetValidation();
}
</script>

<style lang="scss">
.contact-me {
  width: 100%;
  margin-top: spacing(12.5);
  border-radius: 25px;
  background-color: $color-primary-var;
  padding: spacing(12.5);
  color: $color-white;

  .heading {
    color: inherit;

    &--contact {
      margin-bottom: spacing(10);
    }
  }

  .jls-subheading {
    margin-bottom: spacing(8);
  }
}

.contact-form {
  position: relative;
  width: 100%;

  &__form {
    @include flex(column, $gap: spacing(4));
  }

  &__end {
    flex: 0 0 100%;
    max-width: 100%;
  }

  &__privacy {
    @include flex($gap: spacing(2));

    p {
      flex: 0 0 calc(100% - spacing(8));
      max-width: calc(100% - spacing(8));
      margin-bottom: 0;
      font-size: map.get($font-sizes-copy, 'smaller', 'md');
    }

    .v-input {
      &__details {
        display: none;
      }

      .v-selection-control {
        align-items: flex-start;
        min-height: unset;

        &__wrapper,
        &__input {
          @include size(auto);
        }
      }
    }

    .hover-underline {
      &::after {
        background: $color-white;
        transform: scaleX(1);
        transition:
          transform 0.25s ease-out,
          background-color 0.33s;
      }

      &:hover {
        &::after {
          background: $color-orange-400;
        }
      }
    }
  }

  &__submit {
    width: 160px;
  }

  .is-invalid {
    p {
      color: $color-error;
      font-size: 12px;
    }
  }
}

@include tablet-down {
  .contact-me {
    .jls-subheading {
      text-align: left !important;
    }
  }

  .contact-form {
    &__submit {
      width: 100%;
      margin-top: spacing(3);
    }
  }
}

@include tablet-up {
  .contact-me {
    @include flex(column, $align: center);
  }

  .contact-form {
    &__form {
      flex-flow: row wrap;
    }

    .form-group {
      flex: 0 0 100%;
      max-width: 100%;

      &--name,
      &--mail {
        flex: 0 0 calc(50% - 8px);
        max-width: calc(50% - 8px);
      }
    }

    &__privacy {
      flex: 0 0 100%;
      align-items: center;
      max-width: 100%;
      font-size: map.get($font-sizes-copy, 'small', 'xl');
    }
  }
}

@include desktop-up {
  .contact-form {
    &__help {
      font-size: map.get($font-sizes-copy, 'small', 'xs');
    }

    .form-control {
      height: 50px;

      &:is(textarea) {
        min-height: 150px;
        max-height: 400px;
      }
    }
  }
}
</style>
