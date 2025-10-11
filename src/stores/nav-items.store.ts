import type { NavItem } from '@/interfaces/components/app.interface';

export const useNavItemsStore = defineStore('nav-items', () => {
  const items = ref<NavItem[]>([
    { name: 'home', link: '/', text: '', icon: 'house' },
    { name: 'portfolio', link: '/#portfolio', text: '', icon: 'window-stack' },
    { name: 'skills', link: '/#skills', text: '', icon: 'boxes' },
    { name: 'about', link: '/#about', text: '', icon: 'chat-left-quote' },
    { name: 'contact', link: '/#contact', text: '', icon: 'chat-dots' },
  ]);

  async function loadTranslations(
    transFn: (key: string, locale: string) => Promise<string>,
    locale: string,
  ) {
    items.value[0].text = await transFn('general.navigation.home', locale);
    items.value[1].text = await transFn('general.navigation.portfolio', locale);
    items.value[2].text = await transFn('general.navigation.skills', locale);
    items.value[3].text = await transFn('general.navigation.about', locale);
    items.value[4].text = await transFn('general.navigation.contact', locale);
  }

  function getItems() {
    return items.value;
  }

  return { items, loadTranslations,  getItems };
});
