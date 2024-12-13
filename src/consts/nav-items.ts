import type { NavItem } from '@/interfaces/components/app.interface';

export const navItems: NavItem[] = [
  {
    name: 'home',
    link: '/',
    translationKey: 'home',
    icon: 'house',
  },
  {
    name: 'portfolio',
    link: '/#portfolio',
    translationKey: 'portfolio',
    icon: 'window-stack',
  },
  {
    name: 'skills',
    link: '/#skills',
    translationKey: 'skills',
    icon: 'boxes',
  },
  {
    name: 'about',
    link: '/#about',
    translationKey: 'about',
    icon: 'chat-left-quote',
  },
  {
    name: 'contact',
    link: '/#contact',
    translationKey: 'contact',
    icon: 'chat-dots',
  },
];
