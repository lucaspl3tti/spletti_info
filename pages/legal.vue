<template>
  <main :class="['spletti', 'spletti--legal', langClass]">
    <BContainer>
      <div id="legalWrapper" class="legal-disclosure">
        <h1>
          Impressum - Legal Disclosure
        </h1>

        <div class="legal-disclosure__content">
          <div class="personal-info">
            <p v-html="personal" />
          </div>

          <div class="contact-info">
            <h2>
              Kontakt
            </h2>
            <p>
              E-Mail:
              <a
                class="hover-underline"
                href="mailto:jan-luca@spletti.info"
              >
                jan-luca@spletti.info
              </a>
            </p>
          </div>

          <div class="in-charge">
            <h2>
              Redaktionell verantwortlich
            </h2>
            <p
              v-for="(contact, index) in contacts"
              :key="index"
              v-html="contact"
            />
          </div>
          <div class="liability-content">
            <h2>
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div class="liability-links">
            <h2>
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </div>

          <div class="copyright">
            <h2>
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div class="icons">
            <h2>
              Icon Copyright
            </h2>

            <p v-for="(icon, index) in icons" :key="index" class="icon">
              <IconGermany v-if="icon.fileName === 'germany'" />
              <IconUsa v-if="icon.fileName === 'usa'" />
              <span class="icon__copyright" v-html="icon.copy" />
            </p>
          </div>

          <p class="legal-disclosure__source">
            Quelle:<br/>
            <a class="hover-underline" href="https://www.e-recht24.de">
              https://www.e-recht24.de
            </a>
          </p>
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
