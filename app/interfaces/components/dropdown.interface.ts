import type {
  ButtonBorderStyles,
  ButtonVariantsWithText,
  ColorVariants,
  Sizes,
} from '@/types/misc.types';

import type { ClbIcon } from '@/interfaces/components/icon.interface';

export interface ClbDropdownProperties {
  id: string
  theme?: ColorVariants
  variant?: ButtonVariantsWithText
  size?: Sizes
  borderStyle?: ButtonBorderStyles
  buttonClasses?: string[]
  buttonText?: string
  buttonIcon?: ClbIcon
  buttonIconSize?: string|number
  toggleIsIconBtn?: boolean
  toggleIconShouldNotRotate?: boolean
  dropdownMenuClasses?: string[]
  dropdownRole?: string
  dropdownItems?: ClbDropdownItem[]
  dropdownActiveItem?: ClbDropdownItem
  dropdownHideActiveItem?: boolean
  dropdownActiveItemTheme?: ColorVariants
  dropdownItemIconSize?: string|number
  dropdownItemIconPosition?: 'left'|'right'
}

export interface ClbDropdownItem {
  key: string
  value: string
  icon?: ClbIcon
}
