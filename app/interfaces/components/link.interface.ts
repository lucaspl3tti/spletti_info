import type {
  ColorVariants,
  LinkTargets,
} from '@/types/misc.types';

export interface ClbLinkProperties {
  to: string
  theme?: ColorVariants
  target?: LinkTargets
  isExternal?: boolean
  noUnderline?: boolean
}
