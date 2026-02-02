import type { Numberish, TextPositions } from '@/types/misc.types';

export interface ClbImage {
  src: string
  alt?: string
  srcset?: string
  sizes?: string
}

export interface ClbImageProperties extends ClbImage {
  fluidGrow?: boolean
  height?: Numberish
  isNotFluid?: boolean
  lazy?: boolean
  placement?: TextPositions
  rounded?: 'circle' | boolean
  thumbnail?: boolean
  width?: Numberish
}
