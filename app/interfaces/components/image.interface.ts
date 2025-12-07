import type { RadiusElement } from 'bootstrap-vue-next';
import type { TextPositions } from '@/types/misc.types';

export interface ClbImage {
  src: string
  alt?: string
  srcset?: string
  sizes?: string
}

export interface ClbImageProperties extends ClbImage {
  fluidGrow?: boolean
  isNotFluid?: boolean
  lazy?: boolean
  placement?: TextPositions
  rounded?: RadiusElement | boolean
  thumbnail?: boolean
}
