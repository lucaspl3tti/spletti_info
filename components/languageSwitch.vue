<template>
  <div class="c-language-switch">
    <b-dropdown
      text="Split Dropdown"
      :class="[
        'c-language-switch__dropwdown',
        `c-language-switch__dropwdown--${language}`,
        'm-2',
      ]"
      right
    >
      <template #button-content>
        <div
          class="dropdown-content"
          @mouseover="onHoverDropdownBtn"
          @mouseout="onHoverOutDropdownBtn"
        >
          <div v-if="language === 'ger'" class="dropdown-content__german">
            <div class="dropdown-content__flexbox">
              <div class="flexbox__copy hover-underline">
                German<br />
                Deutsch
              </div>
              <div class="flexbox__icon">
                <IconGermany />
              </div>
            </div>
          </div>

          <div v-if="language === 'en'" class="dropdown-content__english">
            <div class="dropdown-content__flexbox">
              <div class="flexbox__copy hover-underline">English</div>
              <div class="flexbox__icon">
                <IconUsa />
              </div>
            </div>
          </div>
        </div>
      </template>

      <b-dropdown-item @click="changeLanguage('en')">
        English <IconUsa />
      </b-dropdown-item>

      <b-dropdown-item @click="changeLanguage('ger')">
        German <IconGermany />
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 0,
      language: this.$i18n.locale,
    }
  },

  methods: {
    onHoverDropdownBtn() {
      const dropdownContent = this.$el.querySelector('.dropdown-content')
      const dropdownBtnText = dropdownContent.querySelector('.flexbox__copy')

      dropdownBtnText.classList.add('show')
    },

    onHoverOutDropdownBtn() {
      const dropdownContent = this.$el.querySelector('.dropdown-content')
      const dropdownBtnText = dropdownContent.querySelector('.flexbox__copy')

      dropdownBtnText.classList.remove('show')
    },

    changeLanguage(key) {
      const main = document.querySelector('main')
      const oldLang = this.$i18n.locale

      this.$i18n.locale = key
      this.language = key

      localStorage.setItem('language', this.$i18n.locale)
      main.classList.remove(`spletti-${oldLang}`)
      main.classList.add(`spletti-${key}`)
    },
  },
}
</script>

<style lang="scss">
.c-language-switch {
  .dropdown {
    &-toggle {
      height: auto;
      padding: spacing(2);
      border: 0;
      border-radius: 0;
      background-color: transparent;
      color: $color-black;

      &::after {
        display: none;
      }

      &:active {
        background-color: rgba($color-white, 0.25);
        border-radius: 5px;
        color: $color-black;
      }
    }

    &-content {
      &__flexbox {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: spacing(2.5);
      }

      .flexbox {
        &__copy {
          font-size: 12px;

          &.hover-underline--focus {
            &::after {
              background-color: $color-white;
            }
          }
        }

        &__icon {
          svg {
            height: 32px;
            width: 32px;
          }
        }
      }
    }

    &-menu {
      flex-flow: column;
      gap: spacing(1) + 1px;
      padding: spacing(4);

      &.show {
        display: flex;
      }
    }

    &-item {
      padding: spacing(1) + 1px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;

      &:active {
        background-color: $color-orange-500;
      }
    }
  }
}

@include desktop-up {
  .c-language-switch {
    position: relative;

    .btn-group {
      margin: 0 !important;
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $color-white;
      text-align: right;

      &:active {
        color: $color-white;
      }
    }

    .dropdown {
      &-menu {
        left: 0;
      }
    }
  }
}
</style>
