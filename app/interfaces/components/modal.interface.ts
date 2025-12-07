import type {
  ClbButtonVariantsWithText,
  ClbColorVariants,
  ClbColorVariantsExtended,
  ClbSizes,
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
  noHeader?: boolean
  noFooter?: boolean
  okClass?: string|string[]
  okOnly?: boolean
  okTheme?: ClbColorVariantsExtended
  okTitle?: string
  okVariant?: ClbButtonVariantsWithText
  theme?: ClbColorVariants
  title?: string
}
