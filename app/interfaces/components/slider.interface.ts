import type { ClbImage } from './image.interface';
import type { SplideOptions } from './splide.interface';
import type { ButtonVariantsWithText, ColorVariants, Numberish } from '@/types/misc.types';

export interface ClbSliderProperties {
  items: ClbSliderItem[]
  ariaLabelSlider: string
  perPage: Numberish
  perPageMobile?: Numberish
  perPageTablet?: Numberish
  perPageTabletPortrait?: Numberish
  autoplay?: boolean
  controlsAlwaysVisible?: boolean
  controlsTheme?: ColorVariants
  draggable?: boolean
  gap?: Numberish
  hasTransparentControls?: boolean
  hideArrows?: boolean
  hidePagination?: boolean
  interval?: Numberish
  rewind?: boolean
  type?: SplideOptions['type']
}

export interface ClbSliderItem {
  image: ClbImage
}

export interface ClbSliderControlProperties {
  type: 'prev' | 'next'
  disabled?: boolean
  theme?: ColorVariants
  variant?: ButtonVariantsWithText
}
