<template>
  <clb-section
    id="contact"
    ref="contactElement"
    name="contact-me"
  >
    <clb-heading
      heading-type="h2"
      :text="$trans('contact.heading')"
      position="center"
      class="heading--contact"
    />

    <clb-subheading
      heading-type="h3"
      heading-appearance="h4"
      :text="$trans('contact.subheading')"
      position="center"
      is-handwriting-font
      is-html
    />

    <div
      :class="[
        'contact-form',
        { 'mt-4': activeBreakpoint !== 'xs' && activeBreakpoint !== 'sm' },
      ]"
    >
      <clb-form
        id="contactForm"
        ref="contactForm"
        :action="`${apiUrl}/contact`"
        method="POST"
        class="contact-form__form"
        @submit.prevent="onFormSubmit"
      >
        <clb-grid-row gutter-y="3">
          <clb-grid-column cols="12">
            <clb-form-alert v-if="success" state="success" />
            <clb-form-alert v-if="error" state="error" />
          </clb-grid-column>

          <clb-grid-column cols="12" md="6">
            <clb-form-input
              id="your-name"
              v-model="name"
              :label="$trans('contact.inputs.name.label')"
              :theme="colorMode"
              type="text"
              name="your-name"
              required
              rounded
              :validation-message="$trans('contact.inputs.required')"
              :is-invalid="errors.name"
              @input="errors.name = false"
            />
          </clb-grid-column>

          <clb-grid-column cols="12" md="6">
            <clb-form-input
              id="your-email"
              v-model="email"
              :label="$trans('contact.inputs.email.label')"
              :theme="colorMode"
              type="email"
              name="your-email"
              required
              rounded
              :hint="$trans('contact.inputs.email.help')"
              :validation-message="emailValidationMessage"
              :is-invalid="errors.email"
              @input="errors.email = false"
            />
          </clb-grid-column>

          <clb-grid-column cols="12">
            <clb-form-input
              id="your-subject"
              v-model="subject"
              :label="$trans('contact.inputs.subject.label')"
              :theme="colorMode"
              type="text"
              name="your-subject"
              required
              rounded
              :validation-message="$trans('contact.inputs.required')"
              :is-invalid="errors.subject"
              @input="errors.subject = false"
            />
          </clb-grid-column>

          <clb-grid-column cols="12">
            <clb-form-textarea
              id="your-message"
              v-model="message"
              :label="$trans('contact.inputs.message.label')"
              :theme="colorMode"
              name="your-message"
              required
              rounded
              :validation-message="$trans('contact.inputs.required')"
              :is-invalid="errors.message"
              @input="errors.message = false"
            />
          </clb-grid-column>

          <clb-grid-column cols="12">
            <div class="contact-form__privacy">
              <clb-form-checkbox
                id="contact-privacy"
                v-model="userAcceptedPrivacy"
                name="privacy"
                :label="$trans('contact.privacyNotice')"
                theme="light"
                rounded
                :validation-message="$trans('contact.privacyError')"
                :is-invalid="errors.privacy"
                @change="errors.privacy = !userAcceptedPrivacy"
              />
            </div>
          </clb-grid-column>

          <clb-grid-column cols="12" md="6">
            <div class="contact-form__captcha">
              <clb-form-captcha
                id="contact-captcha"
                ref="captchaElement"
                name="captcha"
                :label="$trans('contact.captcha.label')"
                :theme="colorMode"
                :validation-message="$trans('contact.captcha.error')"
                rounded
              />
            </div>
          </clb-grid-column>

          <clb-grid-column cols="12" md="6" class="contact-form__submit-wrapper">
            <clb-button
              type="submit"
              theme="secondary"
              border-style="asymmetrical"
              class="contact-form__submit"
              @click="onFormSubmit"
            >
              {{ $trans('contact.submitBtn') }}
              <template #append>
                <clb-icon
                  pack="bi"
                  name="arrow-right"
                  size="24"
                  color="currentColor"
                />
              </template>
            </clb-button>
          </clb-grid-column>
        </clb-grid-row>
      </clb-form>
    </div>
  </clb-section>
</template>

<script setup lang="ts">
import type {
  PimcoreApiResponse,
  PimcoreContactFormRequestData,
} from '@/interfaces/base/api.interface';
import { useColorMode } from '@vueuse/core';
import Utilities from '@helper/utilities.helper';

const { store } = useColorMode();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);
const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const breakpoints = useBreakpoints();
const activeBreakpoint = breakpoints.active();
const contactForm = useTemplateRef('contactForm');
const captchaElement = useTemplateRef('captchaElement');

// form values
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const userAcceptedPrivacy = ref(false);

const formData = computed<PimcoreContactFormRequestData>(() => {
  return {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
});

const errors = reactive<{ [key: string]: boolean }>({
  name: false,
  email: false,
  subject: false,
  message: false,
  privacy: false,
  captcha: false,
});
const hasErrors = computed(() => Object.values(errors).some((hasError) => hasError));
const success = ref(false);
const error = ref(false);

const emailValidationMessage = computed<string|undefined>(() => {
  if (!email.value) {
    return $trans('contact.inputs.required');
  }

  if (!Utilities.isValidEmail(email.value)) {
    return $trans('contact.inputs.email.invalid');
  }

  return undefined;
});

function validateForm(): void {
  errors.name = Utilities.isEmpty(name.value);
  errors.email = Utilities.isEmpty(email.value) || !Utilities.isValidEmail(email.value);
  errors.subject = Utilities.isEmpty(subject.value);
  errors.message = Utilities.isEmpty(message.value);
  errors.privacy = !userAcceptedPrivacy.value;

  if (captchaElement.value) {
    errors.captcha = captchaElement.value.verifyCaptcha();
  }
}

function onFormSubmit(): void {
  if (!contactForm.value) {
    return console.error('contactForm is not available in DOM');
  }

  validateForm();

  if (hasErrors.value) {
    error.value = true;
    return;
  }

  error.value = false;

  const { action, method } = contactForm.value;
  const requestBody = new FormData();

  Utilities.iterate(
    formData.value,
    (value: string, key: string|undefined): void => {
      requestBody.append(key!, value);
    },
  );

  fetch(action, {
    method: method,
    body: requestBody,
  })
    .then((response: Response): Promise<PimcoreApiResponse> => response.json())
    .then((response: PimcoreApiResponse): void => {
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
      console.error(error);
      error.value = true;
    });
}

function resetForm(): void {
  if (success.value) {
    setTimeout(() => (success.value = false), 4000);
  }

  if (contactForm.value) {
    contactForm.value.reset();
  }

  if (captchaElement.value) {
    captchaElement.value.reset();
  }
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
      margin-bottom: spacing(4);
    }
  }

  .clb-subheading {
    margin-bottom: spacing(2);
  }
}

.contact-form {
  position: relative;
  width: 100%;

  &__privacy {
    @include flex($gap: spacing(2));

    p {
      margin-bottom: 0;
      font-size: map.get($clb-font-sizes, 'smaller', 'md');
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

  &__captcha {
    .clb-form-captcha {
      margin-bottom: 0;

      &__input {
        .clb-form-input {
          margin-bottom: 0;
        }
      }

      &__refresh {
        margin-bottom: 0;
      }
    }
  }

  &__submit-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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
    .clb-subheading {
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

    .heading {
      &--contact {
        margin-bottom: spacing(10);
      }
    }

    .clb-subheading {
      margin-bottom: spacing(8);
      text-align: left !important;
    }
  }

  .contact-form {
    &__privacy {
      align-items: center;
      max-width: 100%;
      font-size: map.get($clb-font-sizes, 'small', 'xl');
    }
  }
}

@include desktop-up {
  .contact-form {
    &__help {
      font-size: map.get($clb-font-sizes, 'small', 'xs');
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
