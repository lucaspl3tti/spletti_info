import type {
  ClbColorThemes,
  HeadingSub,
  Heading,
  TextPositions,
} from '@/types/misc.types';

export interface ClbHeadingProperties {
  headingType: Heading
  text?: string
  position?: TextPositions
  theme?: ClbColorThemes
  hideDot?: boolean
  isHandwritingFont?: boolean
}

export interface ClbSubheadingProperties {
  headingType: HeadingSub
  headingAppearance?: HeadingSub
  text?: string
  isHtml?: boolean
  position?: TextPositions
  isHandwritingFont?: boolean
}
