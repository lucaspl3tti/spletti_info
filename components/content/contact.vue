<template>
  <section
    id="contact"
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
        :action="`${this.$config.public.apiBase}/contact-form-7/v1/contact-forms/232/feedback`"
        method="post"
        class="contact-form__form"
        @submit.prevent="onFormSubmit"
      >
        <ContactFormAlert v-if="success" state="success" />
        <ContactFormAlert v-if="error" state="error" />

        <div class="form-group form-group--name">
          <label for="your-name" class="form-label contact-form__label">
            {{ $t('contact.inputs.name.label') }}
          </label>

          <input
            id="your-name"
            v-model="form.name"
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
            v-model="form.email"
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
            v-model="form.subject"
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
            v-model="form.message"
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

        <BButton type="submit" variant="primary" class="contact-form__submit">
          {{ $t('contact.submitBtn') }}
          <Icon
            name="bi:arrow-right"
            size="24"
            color="currentColor"
            class="bi-arrow-right"
          />
        </BButton>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      show: true,
      invalidClass: 'is-invalid',
      formIsValid: true,
      success: false,
      error: false,
    }
  },

  methods: {
    onInput(event) {
      const target = event.target

      this.error = false
      target.classList.remove(this.invalidClass)
      target.setCustomValidity('')

      if (!target.validity.valid) target.classList.add(this.invalidClass)
    },

    validateForm() {
      this.resetValidation()

      // get all form elements
      const form = this.$el.querySelector('.contact-form__form')
      const nameInput = form.querySelector('#your-name')
      const emailInput = form.querySelector('#your-email')
      const subjectInput = form.querySelector('#your-subject')
      const messageInput = form.querySelector('#your-message')

      // validate form inputs
      this.checkInputValidity(nameInput, 'Please enter your name.')
      this.checkInputEmailValidity(
        emailInput,
        'Please enter your email address.',
      )
      this.checkInputValidity(subjectInput, 'Please enter your subject.')
      this.checkInputValidity(messageInput, 'Please enter your message.')
    },

    checkInputValidity(field, errorMessage) {
      if (field.value === '') return this.setInvalidState(field, errorMessage)

      this.setValidState(field)
    },

    checkInputEmailValidity(field, errorMessage) {
      if (field.value === '') return this.setInvalidState(field, errorMessage)

      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const match = field.value.match(regex)

      if (!match) {
        return this.setInvalidState(field, 'Please enter a valid email address')
      }

      this.setValidState(field)
    },

    setInvalidState(field, errorMessage) {
      field.classList.add(this.invalidClass)
      field.setCustomValidity(errorMessage)
      if (this.formIsValid) field.reportValidity()
      this.formIsValid = false
    },

    setValidState(field) {
      field.classList.remove(this.invalidClass)
      field.setCustomValidity('')
      this.formIsValid = true
    },

    onFormSubmit(event) {
      this.validateForm();

      if (!this.formIsValid) return this.error = true
      this.error = false

      const formElement = event.target
      const { action, method } = formElement
      const body = new FormData();

      body.append('your-name', this.form.name)
      body.append('your-email', this.form.email)
      body.append('your-subject', this.form.subject)
      body.append('your-message', this.form.message)

      fetch(action, {
        method,
        body
      })
        .then((response) => response.json())
        .then((response) => {
          const status = response.status

          if (status === 'validation_failed') {
            this.success = false
            this.error = true
            return
          }

          this.error = false
          this.success = true
          this.resetForm()
        })
        .catch((error) => {
          // Handle the case when there's a problem with the request
          console.log(error)
          this.error = false
        });
    },

    resetForm() {
      if (this.success) setTimeout(() => this.success = false, 4000);

      // Reset the form values
      this.form.name = ''
      this.form.email = ''
      this.form.subject = ''
      this.form.message = ''

      this.resetValidation()
    },

    resetValidation() {
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
.contact-me {
  width: 100%;
  margin-top: spacing(18.5);
  border-radius: 25px;
  padding: spacing(12.5);
  background-color: $color-primary;
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
    }
  }

  &__help {
    font-size: 12px;
    color: $color-gray-450;
  }

  &__privacy {
    .hover-underline {
      &::after {
        background-color: $color-white;
        transform: scaleX(1);
        transition: transform 0.25s ease-out, background-color 0.33s;
      }

      &:hover {
        &::after {
          background-color: $color-orange-400;
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
    }
  }
}

@include desktop-up {
  .contact-form {
    &__help {
      font-size: 14px;
    }
  }
}
</style>
