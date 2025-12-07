import type {
  ClbButtonBorderStyles,
  ClbButtonVariants,
  ClbButtonVariantsWithText,
  ClbColorModes,
  ClbColorThemes,
  ClbColorFuntionals,
  ClbColorVariants,
  ClbColorVariantsExtended,
  ClbFormAlertState,
  HeadingSite,
  HeadingSub,
  Heading,
  InputType,
  LinkTargets,
  ClbLoaderDotsVariants,
  ClbSizes,
  ClbSizesExtra,
  TextPositions,
  ClbTooltipPlacements,
} from '../types/misc.types';

// type consts
export const buttonTypes: string[] = [
  'button',
  'submit',
  'reset',
];

export const buttonVariants: ClbButtonVariants[] = [
  'default',
  'ghost',
];

export const buttonVariantsWithText: ClbButtonVariantsWithText[] = [
  ...buttonVariants,
  'text',
];

export const buttonBorderStyles: ClbButtonBorderStyles[] = [
  'default',
  'rounded',
  'pill',
  'asymmetrical',
  'asymmetrical-mirrored',
];

export const colorModes: ClbColorModes[] = [
  'light',
  'dark',
];

export const colorThemes: ClbColorThemes[] = [
  'primary',
  'secondary',
];

export const colorFunctionals: ClbColorFuntionals[] = [
  'danger',
  'success',
  'warning',
  'info',
];

export const colorVariants: ClbColorVariants[] = [
  ...colorModes,
  ...colorThemes,
];

export const colorVariantsExtended: ClbColorVariantsExtended[] = [
  ...colorVariants,
  ...colorFunctionals,
];

export const formAlertStates: ClbFormAlertState[] = [
  'success',
  'error',
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
  'color',
  'date',
  'datetime',
  'datetime-local',
  'email',
  'password',
  'month',
  'number',
  'range',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
];

export const linkTarget: LinkTargets[] = [
  '_blank',
  '_self',
  '_parent',
  '_top',
];

export const loaderDotsVariants: ClbLoaderDotsVariants[] = [
  'flashing',
  'elastic',
  'collision',
  'typing',
  'growing',
  'spinning',
  'jumping',
];

export const sizes: ClbSizes[] = [
  'sm',
  'md',
  'lg',
];

export const sizesExtra: ClbSizesExtra[] = [
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
}) as ClbSizesExtra[];

export const textPositions: TextPositions[] = [
  'start',
  'center',
  'end',
];

export const tooltipPlacements: ClbTooltipPlacements[] = [
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
