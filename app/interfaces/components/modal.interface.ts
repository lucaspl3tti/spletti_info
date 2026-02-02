import type {
  ClbButtonVariantsWithText,
  ClbColorVariants,
  ClbColorVariantsExtended,
  ClbSizes,
  Heading,
} from '@/types/misc.types';

export interface ClbModalProperties {
  actionSize?: ClbSizes
  cancelClass?: string|string[]
  cancelTheme?: ClbColorVariantsExtended
  cancelTitle?: string
  cancelVariant?: ClbButtonVariantsWithText
  disableCancel?: boolean
  disableOk?: boolean
  fullscreen?: boolean
  id?: string
  noBackdrop?: boolean
  noFooter?: boolean
  noHeader?: boolean
  noHeaderClose?: boolean
  noKeyboard?: boolean
  okClass?: string|string[]
  okOnly?: boolean
  okTheme?: ClbColorVariantsExtended
  okTitle?: string
  okVariant?: ClbButtonVariantsWithText
  size?: ClbSizes
  teleportDisabled?: boolean
  teleportTo?: string
  theme?: ClbColorVariants
  title?: string
  titleTag?: Heading
}
