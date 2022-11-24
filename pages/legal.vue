<template>
  <main :class="['spletti', 'spletti--legal', langClass]">
    <BContainer>
      <div id="legalWrapper" class="legal-disclosure">
        <h1>
          {{ $t('legal.heading') }}
        </h1>

        <div class="legal-disclosure__content">
          <div class="personal-info">
            <p v-html="personal" />
          </div>

          <div class="contact-info">
            <h2>
              {{ $t('legal.contactInfo.heading') }}
            </h2>
            <p>
              E-Mail:
              <a
                class="hover-underline"
                :href="'mailto:' + $t('legal.contactInfo.email')"
              >
                {{ $t('legal.contactInfo.email') }}
              </a>
            </p>
          </div>

          <div class="in-charge">
            <h2>
              {{ $t('legal.inCharge.heading') }}
            </h2>
            <p
              v-for="(contact, index) in contacts"
              :key="index"
              v-html="contact"
            />
          </div>
          <div class="liability-content">
            <h2>
              {{ $t('legal.liability.content.heading') }}
            </h2>
            <p>
              {{ $t('legal.liability.content.copy') }}
            </p>
          </div>

          <div class="liability-links">
            <h2>
              {{ $t('legal.liability.links.heading') }}
            </h2>
            <p>
              {{ $t('legal.liability.links.copy') }}
            </p>
          </div>

          <div class="copyright">
            <h2>
              {{ $t('legal.copyright.heading') }}
            </h2>
            <p>
              {{ $t('legal.copyright.copy') }}
            </p>
          </div>

          <div class="icons">
            <h2>
              {{ $t('legal.icons.heading') }}
            </h2>

            <p v-for="(icon, index) in icons" :key="index" class="icon">
              <IconGermany v-if="icon.fileName === 'germany'" />
              <IconUsa v-if="icon.fileName === 'usa'" />
              <span class="icon__copyright" v-html="icon.copy" />
            </p>
          </div>

          <p class="legal-disclosure__source" v-html="$t('legal.source')" />
        </div>
      </div>
    </BContainer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      langClass: `spletti-${this.$i18n.locale}`,
      personal:
        'Jan-Luca Splettstößer<br/>Dorotheenstraße 138a<br/>46537 Dinslaken',
      contacts: [
        'Jan-Luca Splettstößer<br/>Dorotheenstraße 138a<br/>46537 Dinslaken',
      ],
      icons: [
        {
          fileName: 'germany',
          copy: 'Icon by <a class="hover-underline" href="http://https://freeicons.io/profile/3">icon king1</a> on <a class="hover-underline" href="https://freeicons.io">freeicons.io</a>',
        },
        {
          fileName: 'usa',
          copy: 'Icon by <a class="hover-underline" href="https://freeicons.io/profile/8939">Melvin ilham Oktaviansyah</a> on <a class="hover-underline" href="https://freeicons.io">freeicons.io</a>',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.legal-disclosure {
  margin-bottom: spacing(20);

  .contact-info,
  .in-charge {
    margin-top: spacing(10);
  }

  &__source {
    margin-top: spacing(12) + 2px;
    font-size: $font-size-small;
  }
}

.icons {
  .icon__copyright {
    margin-left: spacing(2);
  }
}
</style>
