import type { ClbNavItem } from '@/interfaces/base/app.interface';

export const useNavItemsStore = defineStore('nav-items', () => {
  const { $trans } = useNuxtApp();

  const items = ref<ClbNavItem[]>([
    { name: 'home', link: '/', text: '', icon: 'house' },
    { name: 'portfolio', link: '/#portfolio', text: '', icon: 'window-stack' },
    { name: 'skills', link: '/#skills', text: '', icon: 'boxes' },
    { name: 'about', link: '/#about', text: '', icon: 'chat-left-quote' },
    { name: 'contact', link: '/#contact', text: '', icon: 'chat-dots' },
  ]);

  async function loadTranslations(apiUrl: string,locale: string) {
    if (!items.value) {
      return console.error('No nav-items found');
    }

    for (const item of items.value) {
      item.text = await $trans(apiUrl, `general.navigation.${item.name}`, locale);
    }
  }

  function getItems() {
    return items.value;
  }

  return { items, loadTranslations,  getItems };
});
