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
@include tablet-down {
  .spletti-ger {
    h2,
    .h2 {
      font-size: 32px;
    }
  }
}
</style>
