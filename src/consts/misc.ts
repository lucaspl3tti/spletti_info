/* eslint-disable max-len */
import type {
  Density,
  HeadingType,
  LoaderDotsVariants,
  Size,
  TextPosition,
  ThemeBasic,
  ThemeColor,
  Theme,
  VariantBasic,
  Variant,
} from '@/types/misc.types';

export const densityOptions: Density[] = ['default', 'comfortable', 'compact'];

export const headingTypes: HeadingType[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const loaderDotsVariants: LoaderDotsVariants[] = ['flashing', 'elastic', 'collision', 'typing', 'growing'];

export const sizeOptions: Size[] = ['x-small', 'small', 'large', 'x-large'];

export const textPositionOptions: TextPosition[] = ['center', 'right', 'left'];

export const themeBasicOptions: ThemeBasic[] = ['dark', 'light'];
export const themeColorOptions: ThemeColor[] = ['primary', 'secondary'];
export const themeOptions: Theme[] = [...themeBasicOptions, ...themeColorOptions];

export const variantBasicOptions: VariantBasic[] = ['elevated', 'flat', 'tonal', 'outlined'];
export const variantOptions: Variant[] = [...variantBasicOptions, 'text', 'plain'];
/* eslint-enable max-len */
