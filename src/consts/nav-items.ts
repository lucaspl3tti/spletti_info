import type { NavItem } from '@/interfaces/components/app.interface';

export const navItems: NavItem[] = [
  {
    name: 'home',
    link: '/',
    text: 'home',
    icon: 'house',
  },
  {
    name: 'portfolio',
    link: '/#portfolio',
    text: 'portfolio',
    icon: 'window-stack',
  },
  {
    name: 'skills',
    link: '/#skills',
    text: 'skills',
    icon: 'boxes',
  },
  {
    name: 'about',
    link: '/#about',
    text: 'about',
    icon: 'chat-left-quote',
  },
  {
    name: 'contact',
    link: '/#contact',
    text: 'about',
    icon: 'chat-dots',
  },
];

