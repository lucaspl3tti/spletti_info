<template>
  <section id="intro" class="introduction">
    <div class="introduction__left">
      <h1 v-html="$t('introduction.heading')"></h1>

      <p class="subheading">
        {{ $t('introduction.subheading') }}
      </p>

      <p class="introduction__description">
        {{ $t('introduction.description') }}
      </p>

      <div class="introduction__buttons">
        <BButton
          v-for="(button, index) in introduction.buttons"
          :key="index"
          variant="primary"
          :class="`btn--${button.name}`"
          :href="button.link"
        >
          {{ button.text }}
          <Icon
            name="bi:arrow-right"
            size="24"
            color="currentColor"
            class="bi-arrow-right"
          />
        </BButton>
      </div>
    </div>

    <div class="introduction__right">
      <div class="introduction__image">
        <a
          :href="introduction.profileImage.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="introduction.profileImage.src" />
        </a>
        <p class="speech-bubble handwriting-font">
          {{ $t(`introduction.profileImageHoverText`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      translation: this.$i18n.locale,
      introduction: {
        buttons: [
          {
            name: 'portfolio',
            link: '#portfolio',
            text: this.$t(`introduction.buttons.portfolio.text`),
          },
          {
            name: 'contact',
            link: '#contact',
            text: this.$t(`introduction.buttons.contact.text`),
          },
        ],
        profileImage: {
          src: '/img/jls_profilepic.jpg',
          link: 'https://www.instagram.com/luca.spl3tti/',
        },
      },
    }
  },

  updated() {
    this.introduction.buttons.forEach((button) => {
      button.text = this.$t(`introduction.buttons.${button.name}.text`)
    })
  },
}
</script>

<style lang="scss">
.introduction {
  display: flex;
  flex-flow: column;
  justify-content: center;

  &__left {
    margin-top: 0;
  }

  &__right {
    order: -2;
  }

  &__description {
    margin: spacing(6) 0;
  }

  &__image {
    order: -2;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: spacing(6);
    margin-left: auto;

    .speech-bubble {
      display: none;
    }

    img {
      width: 85%;
      margin-left: 15%;
      // box-shadow: 12px 12px 18px rgba($color: $color-primary, $alpha: .45);
      // border: 3px solid $color-primary;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }
  }

  &__buttons {
    display: flex;
    flex-flow: column;
    gap: spacing(5);

    .btn {
      .icon {
        transform: translateX(0);
        transition: transform $animation-speed;
      }

      &:hover {
        .icon {
          transform: translateX(spacing(2));
        }
      }
    }

    .btn--contact {
      border-radius: 25px 0;

      &:hover {
        border-radius: 0 25px;
      }
    }
  }
}

@media (min-width: $breakpoint-md) {
  .introduction {
    display: grid;
    gap: spacing(5);
    grid-template-columns: 4fr 2fr;
    grid-template-areas:
      'intro-content intro-image'
      'intro-content intro-social';

    &__left {
      grid-area: intro-content;
    }

    &__right {
      grid-area: intro-image;
    }

    &__buttons {
      flex-flow: row nowrap;

      .btn {
        width: 180px;
      }
    }

    &__image {
      align-self: center;
      margin-top: spacing(2.5);

      .speech-bubble {
        position: absolute;
        top: 58%;
        left: 30%;
        display: flex;
        place-items: center;
        opacity: 0;
        margin: 0;
        min-width: 40px;
        max-width: 220px;
        min-height: 40px;
        border-radius: 30px;
        background-color: $color-white;
        padding: spacing(5) spacing(4);
        text-align: center;
        font-size: 21px;
        box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
        transition: opacity $animation-speed;

        &:before {
          content: '';
          position: absolute;
          top: -12%;
          left: 1.5em;
          width: 0;
          height: 0;
          border: 0.75rem solid transparent;
          border-top: none;
          border-bottom-color: $color-white;
          filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
        }
      }

      img {
        width: auto;
        margin-left: 0;
        transition: transform 0.33s, box-shadow 0.33s;
      }

      &:hover {
        .speech-bubble {
          // display: flex;
          opacity: 1;
        }

        img {
          transform: translate(-10px, -10px);
          box-shadow: 20px 20px 18px rgba($color: $color-primary, $alpha: 0.6);
        }
      }
    }
  }

  .spletti-ger {
    .introduction {
      &__buttons {
        .btn {
          width: 200px;
        }
      }
    }
  }
}

@media (min-width: $breakpoint-lg) {
  .introduction {
    grid-template-columns: auto 350px;
    grid-template-areas: 'intro-content intro-image';
    justify-content: space-between;

    &__left {
      padding-right: 20%;
      align-self: center;
    }

    &__description {
      margin-top: spacing(6);
    }

    &__buttons {
      flex-flow: row nowrap;

      .btn--portfolio,
      .btn--contact {
        margin-top: spacing(8);
      }
    }

    &__image {
      justify-self: flex-end;

      .speech-bubble {
        top: 58%;
        left: 37%;
      }

      img {
        height: 350px;
      }
    }
  }

  .social-list--aside {
    flex-direction: column;
    transform: translateY(0);
    align-items: flex-end;
  }
}
</style>
