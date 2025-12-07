import type {
  ClbButtonBorderStyles,
  ClbButtonVariantsWithText,
  ClbColorVariants,
  ClbSizes,
} from '@/types/misc.types';

import type { ClbIcon } from '@/interfaces/components/icon.interface';

export interface ClbDropdownProperties {
  id: string
  theme?: ClbColorVariants
  variant?: ClbButtonVariantsWithText
  size?: ClbSizes
  borderStyle?: ClbButtonBorderStyles
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
  dropdownActiveItemTheme?: ClbColorVariants
  dropdownItemIconSize?: string|number
  dropdownItemIconPosition?: 'left'|'right'
}

export interface ClbDropdownItem {
  key: string
  value: string
  icon?: ClbIcon
}
