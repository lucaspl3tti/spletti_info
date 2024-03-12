<template>
  <div :class="['jls-language-switch', { 'd-none': !enabled }]">
    <v-menu
      :class="[
        'jls-language-switch__menu',
        `jls-language-switch__menu--${language}`,
        'm-2',
      ]"
      open-on-hover
    >
      <template #activator="{ props }">
        <jls-button
          variant="text"
          theme="none"
          v-bind="props"
        >
          <jls-icon
            pack="bi"
            name="globe"
            size="24"
            color="currentColor"
          />
        </jls-button>
      </template>

      <v-list class="jls-language-switch__list">
        <v-list-item @click="changeLanguage('en')">
          <v-list-item-title>
            English
            <jls-icon
              pack="jls"
              name="usa"
              size="24"
              color="currentColor"
            />
          </v-list-item-title>
        </v-list-item>

        <v-list-item @click="changeLanguage('en')">
          <v-list-item-title>
            German
            <jls-icon
              pack="jls"
              name="germany"
              size="24"
              color="currentColor"
            />
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

// eslint-disable-next-line
const properties = defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
});

const { t, locale, setLocale } = useI18n(); // eslint-disable-line

// const key = ref(0);
const language = ref(locale.value);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 786 ? true : false;

  window.onresize = () => {
    isMobile.value = window.innerWidth < 786 ? true : false;
  }
});

function changeLanguage(languageCode) {
  const main = document.querySelector('main');
  const oldLanguageCode = locale.value

  setLocale(languageCode)
  language.value = locale.value

  localStorage.setItem('language', locale.value)
  main.classList.remove(`spletti-${oldLanguageCode}`)
  main.classList.add(`spletti-${locale.value}`)
  document.documentElement.setAttribute('lang',locale.value)
}
</script>

<style lang="scss">
.jls-language-switch {
  &__list {
    .v-list-item-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: spacing(2);
    }
  }
}
// .c-language-switch {
//   .dropdown {
//     &-toggle {
//       height: auto;
//       padding: spacing(2);
//       border: 0;
//       border-radius: 0;
//       background-color: transparent;
//       color: $color-black;

//       &::after {
//         display: none;
//       }

//       &:active {
//         background-color: rgba($color-white, 0.25);
//         border-radius: 5px;
//         color: $color-black;
//       }
//     }

//     &-content {
//       color: $color-orange-300;
//     }

//     &-toggle {
//       min-width: 0;
//       padding: 0;
//     }

//     &-menu {
//       flex-flow: column;
//       gap: spacing(1) + 1px;
//       padding: spacing(4);

//       &.show {
//         display: flex;
//       }
//     }

//     &-item {
//       padding: spacing(1) + 1px;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-radius: 5px;

//       &:active {
//         background-color: $color-orange-500;
//       }
//     }
//   }
// }

// @include tablet-portrait-up {
//   .c-language-switch {
//     position: relative;

//     .btn-group {
//       margin: 0 !important;
//     }

//     .btn {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       color: $color-white;
//       text-align: right;

//       &:active {
//         color: $color-white;
//       }
//     }

//     .dropdown {
//       &-content {
//         color: $color-white;
//       }
//     }
//   }
// }
</style>
