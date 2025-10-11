<template>
  <div class="jls-language-switch">
    <jls-dropdown
      :class="[
        'jls-language-switch__menu',
        `jls-language-switch__menu--${language}`,
      ]"
      :theme="colorMode"
      :disabled="disabled"
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

      <template #dropdownList>
        <v-list class="jls-dropdown__list">
          <v-list-item
            class="jls-dropdown__list-item"
            @click="changeLanguage('en')"
          >
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

          <v-list-item
            class="jls-dropdown__list-item"
            @click="changeLanguage('de')"
          >
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
      </template>
    </jls-dropdown>
  </div>
</template>

<script setup lang="ts">
import type { LanguageSwitchProperties } from '@/interfaces/components/misc.interface'; // eslint-disable-line max-len
import { useRouterStore } from '@/stores/router.store';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const properties = withDefaults(defineProps<LanguageSwitchProperties>(), {
  disabled: false,
});

const { locale } = useI18n();
const { store } = useColorMode();
const routerStore = useRouterStore();
const colorMode = computed(() => store.value === 'auto' ? 'dark' : store.value);

// const key = ref(0);
const language = ref(locale.value);
const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 786 ? true : false;

  window.onresize = () => {
    isMobile.value = window.innerWidth < 786 ? true : false;
  };
});

function changeLanguage(languageCode: 'en'|'de') {
  localStorage.setItem('language', languageCode);
  routerStore.setHardReload(true);

  window.location.href = `/${languageCode}`;
}
</script>

<!-- <style lang="scss">
.jls-language-switch {
  &__list {
    .v-list-item-title {
      @include flex($justify: flex-start, $align: center, $gap: spacing(2));
    }
  }
}
</style> -->
