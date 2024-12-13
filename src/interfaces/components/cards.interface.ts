import type { Theme, ThemeBasic, VariantBasic } from '@/types/misc.types';

// bento card
export interface BentoCardProperties {
  title?: string
}

// card mini component
export interface CardMiniComponents {
  theme?: ThemeBasic
  title?: string
  imageSrc?: string
  imageAlt?: string
}

// card component
export interface CardProperties {
  title?: string
  theme?: Theme
  variant?: VariantBasic
  hideActions?: boolean
  isModal?: boolean
}
