<template>
  <div :class="['jls-language-switch', { 'd-none': disabled }]">
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
            {{ $t('general.languages.en') }}
            <jls-icon
              pack="jls"
              name="usa"
              size="24"
              color="currentColor"
            />
          </v-list-item-title>
        </v-list-item>

        <v-list-item @click="changeLanguage('de')">
          <v-list-item-title>
            {{ $t('general.languages.de') }}
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

<script setup lang="ts">
import { NativeEventEmitter } from '@/helper/event-emitter.helper';
import type { LanguageSwitchProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<LanguageSwitchProperties>(), {
  disabled: false,
});

const { locale, setLocale } = useI18n();
let emitter: InstanceType<typeof NativeEventEmitter>;

// const key = ref(0);
const language = ref(locale.value);
const isMobile = ref(false);

onMounted(() => {
  emitter = new NativeEventEmitter();
  isMobile.value = window.innerWidth < 786 ? true : false;

  window.onresize = () => {
    isMobile.value = window.innerWidth < 786 ? true : false;
  };
});

function changeLanguage(languageCode: 'en'|'de') {
  const main = document.querySelector('main');
  const oldLanguageCode = locale.value;

  setLocale(languageCode);
  language.value = locale.value;

  localStorage.setItem('language', locale.value);
  main!.classList.remove(`spletti-${oldLanguageCode}`);
  main!.classList.add(`spletti-${locale.value}`);
  document.documentElement.setAttribute('lang',locale.value);

  emitter.publish('language-changed');
}
</script>

<style lang="scss">
.jls-language-switch {
  &__list {
    .v-list-item-title {
      @include flex($justify: flex-start, $align: center, $gap: spacing(2));
    }
  }
}
</style>
