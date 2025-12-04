<template>
  <div class="clb-app-header-language-switch">
    <clb-dropdown
      id="languageSwitch"
      theme="light"
      variant="text"
      size="md"
      :button-icon="{ name: 'globe', pack: 'bi' }"
      button-icon-size="24"
      toggle-is-icon-btn
      toggle-icon-should-not-rotate
      :dropdown-items="languageItems"
      :dropdown-active-item="activeLanguageItem"
      dropdown-hide-active-item
      dropdown-item-icon-size="24"
      @dropdown-item-click="changeLanguage"
    />
  </div>
</template>

<script lang="ts" setup>
import type { ClbDropdownItem } from '@/interfaces/components/dropdown.interface';
import { useRouterStore } from '@/stores/router.store';

const runtimeConfig = useRuntimeConfig();
const { apiUrl } = runtimeConfig.public;
const { availableLocales, defaultLocale, locale, setLocale } = useI18n();
const routerStore = useRouterStore();
const localeTranslations: Record<string, string> = {};
const languageItems: ClbDropdownItem[] = [];
const activeLanguageItem = computed<ClbDropdownItem|undefined>(() => {
  return languageItems.find((item) => item.key === locale.value) ?? undefined;
});

for (const localeCode of availableLocales) {
  const localeTranslation = await $trans(
    apiUrl,
    `general.languages.${localeCode}`,
    locale.value,
  );

  localeTranslations[localeCode] = localeTranslation;
  languageItems.push({
    key: localeCode,
    value: localeTranslations[localeCode],
    icon: { name: `flag-${localeCode}`, pack: 'clb' },
  });
}

function changeLanguage(languageCode: 'en'|'de') {
  setLocale(languageCode);
  localStorage.setItem('language', languageCode);
  routerStore.setHardReload(true);

  let languageRoute = `/${languageCode}`;

  if (languageCode === defaultLocale) {
    languageRoute = '/';
  }

  window.location.href = languageRoute;
}
</script>
