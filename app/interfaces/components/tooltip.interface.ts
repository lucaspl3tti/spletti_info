import type {
  ClbColorModes,
  ClbTooltipPlacements,
} from '@/types/misc.types';

export interface ClbTooltipProperties {
  target: string
  text?: string
  theme?: ClbColorModes
  placement?: ClbTooltipPlacements
  teleportDisabled?: boolean
}
