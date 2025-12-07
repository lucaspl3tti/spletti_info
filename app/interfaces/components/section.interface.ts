import type {
  Heading,
  HeadingSub,
  TextPositions,
} from '@/types/misc.types';

export interface ClbSectionProperties {
  id: string
  contentClass?: string | string[]
  headingType?: Heading
  name?: string
  subheading?: string
  subheadingAppearance?: HeadingSub
  subheadingClass?: string | string[]
  subheadingIsHandwritingFont?: boolean
  textPosition?: TextPositions
  title?: string
  titlePosition?: TextPositions
  titleClass?: string | string[]
}
