import type { ClbNavItem } from '@/interfaces/base/app.interface';

export const useNavItemsStore = defineStore('nav-items', () => {
  const items = ref<ClbNavItem[]>([
    { name: 'home', link: '/', icon: 'house' },
    { name: 'portfolio', link: '/#portfolio', icon: 'window-stack' },
    { name: 'skills', link: '/#skills', icon: 'boxes' },
    { name: 'about', link: '/#about', icon: 'chat-left-quote' },
    { name: 'contact', link: '/#contact', icon: 'chat-dots' },
  ]);

  function getItems() {
    return items.value;
  }

  return { items,  getItems };
});
