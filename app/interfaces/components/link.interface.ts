import type {
  ClbColorVariants,
  LinkTargets,
} from '@/types/misc.types';

export interface ClbLinkProperties {
  to: string
  theme?: ClbColorVariants
  target?: LinkTargets
  isExternal?: boolean
  noUnderline?: boolean
}
