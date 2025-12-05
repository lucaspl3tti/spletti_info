import type {
  ColorVariants,
  FormAlertState,
  InputType,
  // InputVariant,
} from '@/types/misc.types';

export interface FormProperties {
  id: string
  action?: string
  method?: 'post' | 'put' | 'patch'
  novalidate?: boolean
}

export interface FormAlertProperties {
  state: FormAlertState
}

export interface FormCheckboxProperties {
  id: string
  label?: string
  rounded?: boolean
  theme?: ColorVariants
}

export type FormTextareaModel = string | number
export type FormTextfieldModel = string | number

export interface FormInputProperties {
  label?: string | undefined
  theme?: ColorVariants
  // variant?: InputVariant
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
