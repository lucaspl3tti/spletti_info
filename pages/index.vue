<template>
  <main :class="['spletti', 'spletti--home', langClass]">
    <BContainer>
      <ContentIntroduction />
      <ContentPortfolio />
    </BContainer>

    <ContentQualifications />

    <BContainer>
      <ContentAbout />
      <ContentContact />
    </BContainer>
  </main>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
  data() {
    return {
      langClass: `spletti-${this.$i18n.locale}`,
    }
  },
}
</script>

<style lang="scss">
div[id^='particles-instance-'] {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: rgba($color: #05114e, $alpha: 0.4);
  z-index: 2 !important;
}

@media (max-width: $breakpoint-md) {
  .spletti-ger {
    h2,
    .h2 {
      font-size: 32px;
    }
  }
}
</style>
