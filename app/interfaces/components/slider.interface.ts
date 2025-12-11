import type { ClbImage } from './image.interface';
import type { SplideOptions } from './splide.interface';
import type { ClbButtonVariantsWithText, ClbColorVariants, Numberish } from '@/types/misc.types';

export interface ClbSliderProperties {
  items: ClbSliderItem[]
  ariaLabelSlider: string
  perPage: Numberish
  perPageMobile?: Numberish
  perPageTablet?: Numberish
  perPageTabletPortrait?: Numberish
  autoplay?: boolean
  controlsAlwaysVisible?: boolean
  controlsTheme?: ClbColorVariants
  draggable?: boolean
  gap?: Numberish
  hasTransparentControls?: boolean
  hideArrows?: boolean
  hidePagination?: boolean
  interval?: Numberish
  rewind?: boolean
  type?: SplideOptions['type'],
  splideOptions?: SplideOptions
}

export interface ClbSliderItem {
  image: ClbImage
}

export interface ClbSliderControlProperties {
  type: 'prev' | 'next'
  disabled?: boolean
  theme?: ClbColorVariants
  variant?: ClbButtonVariantsWithText
}
