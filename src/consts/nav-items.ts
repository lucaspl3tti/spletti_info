import type { NavItem } from '@/interfaces/components/app.interface';

export const navItems: NavItem[] = [
  {
    name: 'home',
    link: '/',
    text: 'Home',
    icon: 'house',
  },
  {
    name: 'portfolio',
    link: '/#portfolio',
    text: 'Portfolio',
    icon: 'window-stack',
  },
  {
    name: 'skills',
    link: '/#skills',
    text: 'Skills',
    icon: 'boxes',
  },
  {
    name: 'about',
    link: '/#about',
    text: 'About',
    icon: 'chat-left-quote',
  },
  {
    name: 'contact',
    link: '/#contact',
    text: 'Contact',
    icon: 'chat-dots',
  },
];
