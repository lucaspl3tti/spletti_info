import type {
  ButtonBorderStyles,
  ButtonVariants,
  ButtonVariantsWithText,
  ColorModes,
  ColorThemes,
  ColorFuntionals,
  ColorVariants,
  ColorVariantsExtended,
  HeadingSite,
  HeadingSub,
  Heading,
  InputType,
  LinkTargets,
  LoaderDotsVariants,
  Sizes,
  SizesExtra,
  TextPositions,
  TooltipPlacements,
} from '../types/misc.types';

// type consts
export const buttonTypes: string[] = [
  'button',
  'submit',
  'reset',
];

export const buttonVariants: ButtonVariants[] = [
  'default',
  'ghost',
];

export const buttonVariantsWithText: ButtonVariantsWithText[] = [
  ...buttonVariants,
  'text',
];

export const buttonBorderStyles: ButtonBorderStyles[] = [
  'default',
  'rounded',
  'pill',
  'asymmetrical',
  'asymmetrical-mirrored',
];

export const colorModes: ColorModes[] = [
  'light',
  'dark',
];

export const colorThemes: ColorThemes[] = [
  'primary',
  'secondary',
];

export const colorFunctionals: ColorFuntionals[] = [
  'danger',
  'success',
  'warning',
  'info',
];

export const colorVariants: ColorVariants[] = [
  ...colorModes,
  ...colorThemes,
];

export const colorVariantsExtended: ColorVariantsExtended[] = [
  ...colorVariants,
  ...colorFunctionals,
];

export const headingSiteTypes: HeadingSite[] = ['h1'];

export const headingSubTypes: HeadingSub[] = [
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

export const headingTypes: Heading[] = [
  ...headingSiteTypes,
  ...headingSubTypes,
];

export const inputTypes: InputType[] =  [
  'email',
  'password',
  'number',
  'search',
  'tel',
  'url',
  'text',
];

export const linkTarget: LinkTargets[] = [
  '_blank',
  '_self',
  '_parent',
  '_top',
];

export const loaderDotsVariants: LoaderDotsVariants[] = [
  'flashing',
  'elastic',
  'collision',
  'typing',
  'growing',
  'spinning',
  'jumping',
];

export const sizes: Sizes[] = [
  'sm',
  'md',
  'lg',
];

export const sizesExtra: SizesExtra[] = [
  ...sizes,
  'xs',
  'xl',
].sort((a, b) => {
  if (a === 'xs') {
    return -1;
  }

  if (b === 'xs') {
    return 1;
  }

  return 0;
}) as SizesExtra[];

export const textPositions: TextPositions[] = [
  'start',
  'center',
  'end',
];

export const tooltipPlacements: TooltipPlacements[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];
