import type {
  ClbButtonBorderStyles,
  ButtonType,
  ClbButtonVariantsWithText,
  ClbColorVariantsExtended,
  LinkTargets,
  ClbSizes,
} from '@/types/misc.types';

import type { ClbIconProperties } from './icon.interface';

// button component
export interface ClbButtonProperties {
  block?: boolean
  borderStyle?: ClbButtonBorderStyles
  styleClasses?: string
  href?: string
  icon?: ClbIconProperties
  isIconBtn?: boolean
  size?: ClbSizes,
  tag?: keyof HTMLElementTagNameMap
  target?: LinkTargets
  text?: string
  theme?: ClbColorVariantsExtended
  to?: string
  type?: ButtonType
  variant?: ClbButtonVariantsWithText
}
