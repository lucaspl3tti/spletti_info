import type {
  ButtonVariantsWithText,
  ColorVariants,
  ColorVariantsExtended,
  Sizes,
} from '@/types/misc.types';

export interface ClbModalProperties {
  actionSize?: Sizes
  cancelClass?: string|string[]
  cancelTheme?: ColorVariantsExtended
  cancelTitle?: string
  cancelVariant?: ButtonVariantsWithText
  disableCancel?: boolean
  disableOk?: boolean
  fullscreen?: boolean
  id?: string
  noHeader?: boolean
  noFooter?: boolean
  okClass?: string|string[]
  okOnly?: boolean
  okTheme?: ColorVariantsExtended
  okTitle?: string
  okVariant?: ButtonVariantsWithText
  theme?: ColorVariants
  title?: string
}
