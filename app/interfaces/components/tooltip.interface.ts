import type {
  ColorModes,
  TooltipPlacements,
} from '@/types/misc.types';

export interface ClbTooltipProperties {
  target: string
  text?: string
  theme?: ColorModes
  placement?: TooltipPlacements
  teleportDisabled?: boolean
}
