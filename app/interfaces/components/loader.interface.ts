import type {
  ClbColorVariants,
  ClbLoaderDotsVariants,
  ClbSizes,
  ClbSizesExtra,
} from '@/types/misc.types';

export interface ClbLoaderDotsProperties {
  variant?: ClbLoaderDotsVariants,
  theme?: ClbColorVariants
  size?: ClbSizesExtra
}

export interface ClbLoaderBlockBarProperties {
  theme?: ClbColorVariants
  size?: ClbSizes
}

export interface ClbLoaderTextProperties {
  text: string,
}

export interface ClbLoaderShapesProperties {
  size?: ClbSizesExtra
}
