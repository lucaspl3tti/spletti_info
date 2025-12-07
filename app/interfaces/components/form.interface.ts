import type {
  ClbColorVariants,
  ClbFormAlertState,
  Numberish,
  InputType,
} from '@/types/misc.types';

export interface ClbFormProperties {
  id: string
  action?: string
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH'
  novalidate?: boolean
}

export interface ClbFormAlertProperties {
  state: ClbFormAlertState
}

export interface ClbFormComponentBase {
  id: string
  name: string,
  isInvalid?: boolean
  label?: string
  required?: boolean
  rounded?: boolean
  theme?: ClbColorVariants
  validationMessage?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ClbFormCheckboxProperties extends ClbFormComponentBase {}

export interface ClbFormInputProperties extends ClbFormComponentBase {
  hint?: string
  isNotFloating?: boolean
  placeholder?: string
  type?: InputType
}

export interface ClbFormTextareaProperties extends ClbFormInputProperties {
  rows?: Numberish
}

export interface ClbFormCaptchaProperties {
  id: string
  name: string
  label?: string
  rounded?: boolean
  theme?: ClbColorVariants
  validationMessage?: string
}
