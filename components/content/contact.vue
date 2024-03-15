<template>
  <section
    id="contact"
    ref="contactElement"
    class="contact-me"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-once="true"
  >
    <h2 class="heading heading--about">
      {{ $t('contact.heading') }}<span class="heading-dot">.</span>
    </h2>

    <p class="subheading" v-html="$t('contact.subheading')" />

    <div class="contact-form">
      <form
        :action="`${apiUrl}/contact-form-7/v1/contact-forms/232/feedback`"
        method="post"
        class="contact-form__form"
        @submit.prevent="onFormSubmit"
      >
        <jls-contact-form-alert v-if="success" state="success" />
        <jls-contact-form-alert v-if="error" state="error" />

        <div class="form-group form-group--name">
          <label for="your-name" class="form-label contact-form__label">
            {{ $t('contact.inputs.name.label') }}
          </label>

          <input
            id="your-name"
            v-model="formData.name"
            :placeholder="$t('contact.inputs.name.placeholder')"
            type="text"
            class="form-control contact-form__input"
            name="your-name"
            @input="onInput"
          />
        </div>

        <div class="form-group form-group--mail">
          <label for="your-email" class="form-label contact-form__label">
            {{ $t('contact.inputs.email.label') }}
          </label>

          <input
            id="your-email"
            v-model="formData.email"
            :placeholder="$t('contact.inputs.email.placeholder')"
            type="email"
            class="form-control contact-form__input"
            name="your-email"
            aria-describedby="emailHelp"
            @input="onInput"
          />

          <div id="emailHelp" class="form-text contact-form__help">
            {{ $t('contact.inputs.email.help') }}
          </div>
        </div>

        <div class="form-group form-group--subject">
          <label for="your-subject" class="form-label contact-form__label">
            {{ $t('contact.inputs.subject.label') }}
          </label>

          <input
            id="your-subject"
            v-model="formData.subject"
            :placeholder="$t('contact.inputs.subject.placeholder')"
            type="text"
            class="form-control contact-form__input"
            name="your-subject"
            @input="onInput"
          />
        </div>

        <div class="form-group form-group--message">
          <label for="your-message" class="form-label contact-form__label">
            {{ $t('contact.inputs.message.label') }}
          </label>

          <textarea
            id="your-message"
            v-model="formData.message"
            :placeholder="$t('contact.inputs.message.placeholder')"
            class="form-control contact-form__input"
            name="your-message"
            rows="6"
            @input="onInput"
          />
        </div>

        <div class="contact-form__privacy">
          <p v-html="$t('contact.privacyNotice')" />
        </div>

        <jls-button
          type="submit"
          theme="secondary"
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
      </form>
    </div>
  </section>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const apiUrl = runtimeConfig.public.apiBase;
const contactElement = ref('');

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});
const show = ref(true);
const formIsValid = ref(true);
const success = ref(false);
const error = ref(false);

const invalidClass = 'is-invalid';

function onInput(event) {
  const target = event.target;

  error.value = false;
  target.classList.remove(invalidClass);
  target.setCustomValidity('');

  if (!target.validity.valid) target.classList.add(invalidClass);
}

function validateForm() {
  resetValidation();

  // get all form elements
  const form = contactElement.value.querySelector('.contact-form__form');
  const nameInput = form.querySelector('#your-name');
  const emailInput = form.querySelector('#your-email');
  const subjectInput = form.querySelector('#your-subject');
  const messageInput = form.querySelector('#your-message');

  // validate form inputs
  checkInputValidity(nameInput, 'Please enter your name.');
  checkInputEmailValidity(emailInput, 'Please enter your email address.');
  checkInputValidity(subjectInput, 'Please enter your subject.');
  checkInputValidity(messageInput, 'Please enter your message.');
}

function checkInputValidity(field, errorMessage) {
  if (field.value === '') return setInvalidState(field, errorMessage);

  setValidState(field);
}

function checkInputEmailValidity(field, errorMessage) {
  if (field.value === '') return setInvalidState(field, errorMessage);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const match = field.value.match(regex);

  if (!match) {
    return setInvalidState(field, 'Please enter a valid email address');
  }

  setValidState(field);
}

function setInvalidState(field, errorMessage) {
  field.classList.add(invalidClass);
  field.setCustomValidity(errorMessage);

  if (formIsValid.value) field.reportValidity();
  formIsValid.value = false;
}

function setValidState(field) {
  field.classList.remove(invalidClass);
  field.setCustomValidity('');

  formIsValid.value = true;
}

function onFormSubmit(event) {
  validateForm();

  if (!formIsValid.value) return (error.value = true);
  error.value = false;

  const formElement = event.target;
  const { action, method } = formElement;
  const body = new FormData();

  body.append('your-name', formData.name);
  body.append('your-email', formData.email);
  body.append('your-subject', formData.subject);
  body.append('your-message', formData.message);

  fetch(action, {
    method,
    body,
  })
    .then((response) => response.json())
    .then((response) => {
      const status = response.status;

      if (status === 'validation_failed') {
        success.value = false;
        error.value = true;
        return;
      }

      error.value = false;
      success.value = true;
      resetForm();
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request
      console.log(error); // eslint-disable-line
      error.value = true;
    });
}

function resetForm() {
  if (success.value) {
    setTimeout(() => (success.value = false), 4000);
  }

  // Reset the form values
  formData.name = '';
  formData.email = '';
  formData.subject = '';
  formData.message = '';

  resetValidation();
}

function resetValidation() {
  // Trick to reset/clear native browser form validation state
  show.value = false;

  nextTick(() => {
    show.value = true;
  });
}
</script>

<style lang="scss">
.contact-me {
  width: 100%;
  margin-top: spacing(18.5);
  border-radius: 25px;
  padding: spacing(12.5);
  background-color: $color-primary-var;
  color: $color-white;

  .heading {
    color: inherit;
  }
}

.contact-form {
  position: relative;
  width: 100%;

  &__form {
    display: flex;
    flex-flow: column;
    gap: spacing(4);
  }

  &__input {
    width: 100%;
    height: 40px;
    border: 2px solid transparent;
    border-radius: 6px;

    &:is(textarea) {
      min-height: 100px;
      max-height: 350px;
    }

    &:focus,
    &:focus-visible {
      border-color: transparent;
      box-shadow: 0 0 0 0.25rem rgba($color: $color-white, $alpha: 0.25);
    }
  }

  &__help {
    font-size: 12px;
    color: $color-gray-450;
  }

  &__privacy {
    p {
      font-size: $font-size-smaller-mobile;
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
}

@include tablet-up {
  .contact-me {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: spacing(25);
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
      max-width: 100%;
      font-size: $font-size-small;
    }
  }
}

@include desktop-up {
  .contact-form {
    &__help {
      font-size: 14px;
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
