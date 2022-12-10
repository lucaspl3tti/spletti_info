<template>
  <div class="c-language-switch">
    <b-dropdown
      text="Split Dropdown"
      :class="[
        'c-language-switch__dropwdown',
        `c-language-switch__dropwdown--${language}`,
        'm-2',
      ]"
      :right="isMobile ? false : true"
    >
      <template #button-content>
        <div class="dropdown-content">
          <Icon
            name="bi:globe"
            size="32"
            color="currentColor"
            :class="['bi-globe']"
          />
        </div>
      </template>

      <b-dropdown-item @click="changeLanguage('en')">
        English <IconUsa />
      </b-dropdown-item>

      <b-dropdown-item @click="changeLanguage('de')">
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
      isMobile: false,
    }
  },

  mounted() {
    this.isMobile = window.innerWidth < 786 ? true : false
    window.onresize = () =>
      (this.isMobile = window.innerWidth < 786 ? true : false)
  },

  methods: {
    changeLanguage(languageCode) {
      const main = document.querySelector('main')
      const oldLanguageCode = this.$i18n.locale

      this.$i18n.locale = languageCode
      this.language = this.$i18n.locale

      localStorage.setItem('language', this.$i18n.locale)
      main.classList.remove(`spletti-${oldLanguageCode}`)
      main.classList.add(`spletti-${this.$i18n.locale}`)
      document.documentElement.setAttribute('lang', this.$i18n.locale)
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
      color: $color-orange-300;
    }

    &-toggle {
      min-width: 0;
      padding: 0;
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
      &-content {
        color: $color-white;
      }
    }
  }
}
</style>
