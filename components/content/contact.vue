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
    <a
      href="mailto:jan-luca@spletti.info"
      class="btn btn-primary btn--contact-me"
    >
      {{ $t('contact.btnText') }}
      <i class="fas fa-arrow-right"></i>
    </a>
  </section>
</template>

<script>
export default {}
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

  .btn--contact-me {
    margin-top: spacing(6);
  }
}

@media (min-width: $breakpoint-md) {
  .contact-me {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: spacing(25);

    .btn--contact-me {
      width: 300px;
    }
  }
}
</style>
