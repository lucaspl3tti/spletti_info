<template>
  <div
    :class="[
      'introduction__image',
      profileImage.socialLink !== '' ? 'has-social-link' : ''
    ]"
  >
    <a
      v-if="profileImage.socialLink !== ''"
      :href="profileImage.socialLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img :src="profileImage.src" />
    </a>
    <div v-else>
      <img :src="profileImage.src" />
    </div>

    <p
      v-if="profileImage.socialLink !== '' && profileImage.socialLinkCopy !== ''"
      class="speech-bubble handwriting-font"
    >
      {{ $i18n.locale === 'ger' ? profileImage.socialLinkCopy?.de : profileImage.socialLinkCopy?.en }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: {
        src: '/img/jls_profilepic.jpg',
        socialLink: 'https://www.instagram.com/luca.spl3tti/',
        socialLinkCopy: '',
      },
    }
  },

  async created () {
    const me = this

    // get profile picture from api
    await useFetch(`${this.$config.public.apiBase}/wp/v2/posts?categories=6`, {
      onResponse({ request, response, options }) {
        const data = response._data[0]
        let socialLinkCopy = data.meta.copy_of_social_link[0]

        if (socialLinkCopy !== '')
          socialLinkCopy = formatTranslations(socialLinkCopy)

        me.profileImage.src = data.featured_image
        me.profileImage.socialLink = data.meta.social_link[0]
        me.profileImage.socialLinkCopy = socialLinkCopy
      },
    })
  },
}
</script>

<style lang="scss">
.introduction__image {
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

@include tablet-up {
  .introduction__image {
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

    &.has-social-link {
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
}

@include tablet-portrait-up {
  .introduction__image {
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
</style>
