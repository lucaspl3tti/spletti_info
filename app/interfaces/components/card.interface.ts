import type {
  ColorModes,
  ColorVariants,
  Numberish,
  PositionValueVertical,
} from '@/types/misc.types';

// bento card
export interface ClbBentoCardProperties {
  title?: string
  showTitle?: boolean
}

// card mini component
export interface ClbCardMiniComponents {
  theme?: ColorModes
  title?: string
  imageSrc?: string
  imageAlt?: string
}

// card component
export interface ClbCardProperties {
  title?: string
  theme?: ColorVariants
  hideActions?: boolean
  imgAlt?: ClbCardImageProperties['alt']
  imgSrc?: ClbCardImageProperties['src']
  isModal?: boolean
}

export interface ClbCardImageProperties {
  src: string
  alt: string
  height: Numberish
  width: Numberish
  placement: PositionValueVertical | 'overlay'
}
