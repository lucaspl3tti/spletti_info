<template>
  <section id="intro" class="introduction section">
    <div class="introduction__left">
      <h1 v-html="$t('introduction.heading')"></h1>

      <p class="subheading">
        {{ $t('introduction.subheading') }}
      </p>

      <p class="introduction__description">
        {{ $t('introduction.description') }}
      </p>

      <div class="introduction__buttons">
        <jls-button
          v-for="(button, index) in introduction.buttons"
          :key="index"
          theme="secondary"
          :to="button.link"
          :mirrored="button.isMirrored"
        >
          {{ button.text }}
          <template #append>
            <jls-icon
              pack="bi"
              name="arrow-right"
              size="24"
              color="currentColor"
            />
          </template>
        </jls-button>
      </div>
    </div>

    <div class="introduction__right">
      <jls-profile-image />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n(); // eslint-disable-line

const introduction = {
  buttons: [
    {
      name: 'portfolio',
      link: '#portfolio',
      text: t('introduction.buttons.portfolio.text'),
      isMirrored: false,
    },
    {
      name: 'contact',
      link: '#contact',
      text: t('introduction.buttons.contact.text'),
      isMirrored: true,
    },
  ],
  profileImage: {
    src: '/img/jls_profilepic.jpg',
    link: 'https://www.instagram.com/luca.spl3tti/',
  },
};

onUpdated(() => {
  introduction.buttons.forEach((button) => {
    button.text = getButtonTranslation(button.name);
  });
});

function getButtonTranslation(buttonName) {
  return t(`introduction.buttons.${buttonName}.text`);
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

  &__buttons {
    display: flex;
    flex-flow: column;
    gap: spacing(5);

    .btn {
      width: 100%;

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

    // .btn--contact {
    //   border-radius: 25px 0;

    //   &:hover {
    //     border-radius: 0 25px;
    //   }
    // }
  }
}

@include tablet-up {
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
  }

  .spletti-de {
    .introduction {
      &__buttons {
        .btn {
          width: 200px;
        }
      }
    }
  }
}

@include tablet-portrait-up {
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
  }

  .social-list--aside {
    flex-direction: column;
    transform: translateY(0);
    align-items: flex-end;
  }
}
</style>
