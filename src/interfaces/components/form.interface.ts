import type {
  AlertState,
  InputType,
  InputVariant,
  Theme,
} from '@/types/misc.types';

// form interfaces
export interface FormProperties {
  disabled?: boolean
  fastFail?: boolean
  readonly?: boolean
  validateOn?: 'eager'
    | 'lazy'
    | 'blur'
    | 'input'
    | 'submit'
    | 'invalid-input'
    | 'blur lazy'
    | 'input lazy'
    | 'submit lazy'
    | 'invalid-input lazy'
    | 'blur eager'
    | 'input eager'
    | 'submit eager'
    | 'invalid-input eager'
    | 'lazy blur'
    | 'lazy input'
    | 'lazy submit'
    | 'lazy invalid-input'
    | 'eager blur'
    | 'eager input'
    | 'eager submit'
    | 'eager invalid-input'
  action?: string
  method?: 'post' | 'put' | 'patch'
}

// alert interfaces
export interface FormAlertProperties {
  state: AlertState
}

// checkbox interfaces
export interface FormCheckboxProperties {
  label?: string
  theme?: Theme
  inline?: boolean
}

// textarea and textfield interfaces
export type FormTextareaModel = string | number
export type FormTextfieldModel = string | number

export interface FormInputProperties {
  label?: string | undefined
  theme?: Theme
  variant?: InputVariant
  type?: InputType
  placeholder?: string | undefined
  hint?: string | undefined
  persistentHint?: boolean
  clearable?: boolean
  iconPack?: string
  prependIcon?: string | undefined
  prependInnerIcon?: string | undefined
  appendIcon?: string | undefined
  appendInnerIcon?: string | undefined
  suffix?: string | undefined
  autoGrow?: boolean
}
