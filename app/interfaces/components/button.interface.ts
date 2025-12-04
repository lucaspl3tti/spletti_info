import type {
  ButtonBorderStyles,
  ButtonType,
  ButtonVariantsWithText,
  ColorVariantsExtended,
  LinkTargets,
  Sizes,
} from '@/types/misc.types';

import type { ClbIconProperties } from './icon.interface';

// button component
export interface ClbButtonProperties {
  block?: boolean
  borderStyle?: ButtonBorderStyles
  styleClasses?: string
  href?: string
  icon?: ClbIconProperties
  isIconBtn?: boolean
  size?: Sizes,
  tag?: keyof HTMLElementTagNameMap
  target?: LinkTargets
  text?: string
  theme?: ColorVariantsExtended
  to?: string
  type?: ButtonType
  variant?: ButtonVariantsWithText
}
